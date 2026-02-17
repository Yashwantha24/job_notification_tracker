import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import NavBar from '../components/layout/NavBar';
import FilterBar from '../components/dashboard/FilterBar';
import JobCard from '../components/dashboard/JobCard';
import Modal from '../components/ui/Modal';
import Badge from '../components/ui/Badge';
import EmptyState from '../components/ui/EmptyState';
import { jobsData } from '../data/jobs';
import { Bookmark, FileX, SlidersHorizontal, Settings as SettingsIcon } from 'lucide-react';
import { calculateMatchScore } from '../utils/scoring';
import Button from '../components/ui/Button';

const Dashboard = () => {
    const navigate = useNavigate();
    const [jobs, setJobs] = useState([]);
    const [savedJobIds, setSavedJobIds] = useState([]);
    const [preferences, setPreferences] = useState(null);
    const [filters, setFilters] = useState({
        keyword: '',
        location: '',
        mode: '',
        experience: '',
        source: '',
        sort: 'match_score', // Default sort by match score
        showMatchesOnly: false
    });
    const [selectedJob, setSelectedJob] = useState(null);

    // Load initial data, saved jobs, and preferences
    useEffect(() => {
        setJobs(jobsData);
        const saved = JSON.parse(localStorage.getItem('savedJobs') || '[]');
        setSavedJobIds(saved);

        const savedPrefs = localStorage.getItem('jobTrackerPreferences');
        if (savedPrefs) {
            setPreferences(JSON.parse(savedPrefs));
        }
    }, []);

    // Handle Saving/Unsaving
    const toggleSave = (job) => {
        let newSaved;
        if (savedJobIds.includes(job.id)) {
            newSaved = savedJobIds.filter(id => id !== job.id);
        } else {
            newSaved = [...savedJobIds, job.id];
        }
        setSavedJobIds(newSaved);
        localStorage.setItem('savedJobs', JSON.stringify(newSaved));
    };

    // Filter & Sort Logic
    const processedJobs = useMemo(() => {
        let result = jobs.map(job => {
            // Calculate score for each job
            const matchData = calculateMatchScore(job, preferences);
            return { ...job, ...matchData };
        });

        // Filtering
        result = result.filter(job => {
            const matchesKeyword = filters.keyword === '' ||
                job.title.toLowerCase().includes(filters.keyword.toLowerCase()) ||
                job.company.toLowerCase().includes(filters.keyword.toLowerCase());

            const matchesLocation = filters.location === '' || job.location === filters.location;
            const matchesMode = filters.mode === '' || job.mode === filters.mode;
            const matchesExperience = filters.experience === '' || job.experience === filters.experience;
            const matchesSource = filters.source === '' || job.source === filters.source;

            // Match Score Threshold
            let matchesScore = true;
            if (filters.showMatchesOnly && preferences) {
                matchesScore = job.score >= (preferences.minMatchScore || 40);
            }

            return matchesKeyword && matchesLocation && matchesMode && matchesExperience && matchesSource && matchesScore;
        });

        // Sorting
        result.sort((a, b) => {
            if (filters.sort === 'match_score') return b.score - a.score; // Highest score first
            if (filters.sort === 'latest') return a.postedDaysAgo - b.postedDaysAgo;
            if (filters.sort === 'oldest') return b.postedDaysAgo - a.postedDaysAgo;
            return 0;
        });

        return result;
    }, [jobs, filters, preferences]);

    return (
        <MainLayout
            title="Dashboard"
            description="Find your next role from the curated Indian tech market."
            header={<NavBar />}
        >
            <div className="max-w-7xl mx-auto">
                {/* Preference Banner */}
                {!preferences && (
                    <div className="bg-primary-text/5 border border-primary-text/10 rounded-lg p-4 mb-6 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="bg-accent-red/10 p-2 rounded-full">
                                <SlidersHorizontal size={20} className="text-accent-red" />
                            </div>
                            <div>
                                <h4 className="font-bold text-primary-text text-sm">Personalize your feed</h4>
                                <p className="text-xs text-primary-text/60">Set your preferences to activate intelligent match scoring.</p>
                            </div>
                        </div>
                        <Button variant="secondary" onClick={() => navigate('/settings')} className="text-xs px-3 py-1.5 h-auto">
                            Set Preferences
                        </Button>
                    </div>
                )}

                <FilterBar filters={filters} onFilterChange={setFilters} />

                {processedJobs.length === 0 ? (
                    <EmptyState
                        title="No jobs found."
                        description={filters.showMatchesOnly ? "Try lowering your match threshold or updating your preferences." : "Try adjusting your filters to see more results."}
                        icon={FileX}
                        actionLabel={filters.showMatchesOnly ? "Update Preferences" : "Clear Filters"}
                        onAction={() => filters.showMatchesOnly ? navigate('/settings') : setFilters({
                            keyword: '', location: '', mode: '', experience: '', source: '', sort: 'match_score', showMatchesOnly: false
                        })}
                    />
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {processedJobs.map(job => (
                            <JobCard
                                key={job.id}
                                job={job}
                                isSaved={savedJobIds.includes(job.id)}
                                onSave={() => toggleSave(job)}
                                onView={() => setSelectedJob(job)}
                                matchScore={{ score: job.score, colorClass: job.colorClass }}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* Job Details Modal */}
            <Modal
                isOpen={!!selectedJob}
                onClose={() => setSelectedJob(null)}
                title={selectedJob?.title}
            >
                {selectedJob && (
                    <div className="space-y-6">
                        {/* Modal Match Badge */}
                        {selectedJob.score > 0 && (
                            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-bold border ${selectedJob.colorClass}`}>
                                <Target size={16} />
                                {selectedJob.score}% Match Score
                            </div>
                        )}

                        <div className="flex justify-between items-start">
                            <div>
                                <h4 className="text-xl font-bold text-primary-text mb-1">{selectedJob.company}</h4>
                                <p className="text-primary-text/60">{selectedJob.location} ({selectedJob.mode})</p>
                            </div>
                            <div className="flex flex-col items-end gap-2">
                                <Badge status="Info" label={selectedJob.salaryRange} />
                                <span className="text-xs text-primary-text/40">Posted {selectedJob.postedDaysAgo} days ago</span>
                            </div>
                        </div>

                        <div>
                            <h5 className="font-bold text-primary-text mb-2">Description</h5>
                            <p className="text-primary-text/80 whitespace-pre-line text-sm leading-relaxed">
                                {selectedJob.description}
                            </p>
                        </div>

                        <div>
                            <h5 className="font-bold text-primary-text mb-2">Skills</h5>
                            <div className="flex flex-wrap gap-2">
                                {selectedJob.skills.map((skill, index) => (
                                    <span key={index} className="px-3 py-1 bg-primary-text/5 text-primary-text/70 rounded-full text-xs font-medium">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="pt-6 flex gap-4">
                            <a href={selectedJob.applyUrl} target="_blank" rel="noreferrer" className="flex-1">
                                <button className="w-full py-3 bg-primary-text text-off-white font-medium rounded-md hover:bg-primary-text/90 transition-colors">
                                    Apply Now
                                </button>
                            </a>
                        </div>
                    </div>
                )}
            </Modal>
        </MainLayout>
    );
};

export default Dashboard;
