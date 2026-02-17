import React, { useState, useEffect } from 'react';
import MainLayout from '../components/layout/MainLayout';
import NavBar from '../components/layout/NavBar';
import JobCard from '../components/dashboard/JobCard';
import EmptyState from '../components/ui/EmptyState';
import { Bookmark } from 'lucide-react';
import { jobsData } from '../data/jobs';

const Saved = () => {
    const [savedJobs, setSavedJobs] = useState([]);

    useEffect(() => {
        const savedIds = JSON.parse(localStorage.getItem('savedJobs') || '[]');
        // Filter the main jobs data to find matching IDs
        // In a real app, you might fetch these by ID from an API
        const matches = jobsData.filter(job => savedIds.includes(job.id));
        setSavedJobs(matches);
    }, []);

    const removeSaved = (job) => {
        const newSaved = savedJobs.filter(j => j.id !== job.id);
        setSavedJobs(newSaved);

        const savedIds = newSaved.map(j => j.id);
        localStorage.setItem('savedJobs', JSON.stringify(savedIds));
    };

    return (
        <MainLayout
            title="Saved Jobs"
            description="Your shortlisted opportunities."
            header={<NavBar />}
        >
            <div className="max-w-7xl mx-auto">
                {savedJobs.length === 0 ? (
                    <EmptyState
                        title="No saved jobs."
                        description="Jobs you bookmark will appear here for easy access."
                        icon={Bookmark}
                        actionLabel="Browse Jobs"
                        onAction={() => window.location.href = '/dashboard'}
                    />
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {savedJobs.map(job => (
                            <JobCard
                                key={job.id}
                                job={job}
                                isSaved={true}
                                onSave={() => removeSaved(job)}
                                onView={() => { }} // Could add modal here too if needed
                            />
                        ))}
                    </div>
                )}
            </div>
        </MainLayout>
    );
};

export default Saved;
