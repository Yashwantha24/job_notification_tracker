import React from 'react';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { MapPin, Briefcase, Clock, Bookmark, ExternalLink, Eye, Target } from 'lucide-react';

const JobCard = ({ job, onSave, isSaved, onView, matchScore }) => {
    return (
        <Card className="h-full flex flex-col hover:border-accent-red/30 transition-colors duration-300 relative group">
            {/* Match Score Badge - Positioned absolutely or integrated */}
            {matchScore && (
                <div className={`absolute top-3 right-3 px-2 py-0.5 rounded text-xs font-bold border flex items-center gap-1 ${matchScore.colorClass}`}>
                    <Target size={12} />
                    {matchScore.score}%
                </div>
            )}

            <div className="flex justify-between items-start mb-3 pr-16">
                <div>
                    <h3 className="text-lg font-serif font-bold text-primary-text leading-tight mb-1 line-clamp-2">
                        {job.title}
                    </h3>
                    <p className="text-sm font-medium text-primary-text/70">{job.company}</p>
                </div>
            </div>

            <div className="space-y-2 mb-6 flex-grow">
                <div className="flex items-center text-xs text-primary-text/60 font-sans">
                    <MapPin size={14} className="mr-1.5" />
                    {job.location} • {job.mode}
                </div>
                <div className="flex items-center text-xs text-primary-text/60 font-sans">
                    <Briefcase size={14} className="mr-1.5" />
                    {job.experience} • {job.salaryRange}
                </div>
                <div className="flex items-center text-xs text-primary-text/60 font-sans">
                    <Clock size={14} className="mr-1.5" />
                    {job.source} • {job.postedDaysAgo === 0 ? 'Today' : `${job.postedDaysAgo}d ago`}
                </div>
            </div>

            <div className="flex items-center gap-2 mt-auto pt-4 border-t border-primary-text/5">
                <Button variant="secondary" onClick={onView} className="flex-1 text-xs py-2 px-2 justify-center">
                    <Eye size={14} className="mr-1.5" />
                    View
                </Button>
                <button
                    onClick={() => onSave(job)}
                    className={`p-2 rounded-md border transition-colors duration-200 ${isSaved
                            ? 'bg-accent-red text-off-white border-accent-red'
                            : 'bg-transparent border-primary-text/20 text-primary-text/60 hover:border-accent-red hover:text-accent-red'
                        }`}
                    title={isSaved ? "Unsave Job" : "Save Job"}
                >
                    <Bookmark size={16} fill={isSaved ? "currentColor" : "none"} />
                </button>
                <a
                    href={job.applyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1"
                >
                    <Button variant="primary" className="w-full text-xs py-2 px-2 justify-center">
                        Apply
                        <ExternalLink size={14} className="ml-1.5" />
                    </Button>
                </a>
            </div>
        </Card>
    );
};

export default JobCard;
