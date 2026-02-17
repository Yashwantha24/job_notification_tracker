import React from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { MapPin, Briefcase, Clock, Bookmark, ExternalLink, Eye, Target, CheckCircle, XCircle, Clock as ClockIcon, Circle } from 'lucide-react';

const JobCard = ({ job, onSave, isSaved, onView, matchScore, status, onStatusChange }) => {

    const getStatusColor = (currentStatus) => {
        switch (currentStatus) {
            case 'Applied': return 'text-blue-600 bg-blue-50 border-blue-200';
            case 'Rejected': return 'text-red-600 bg-red-50 border-red-200';
            case 'Selected': return 'text-green-600 bg-green-50 border-green-200';
            default: return 'text-primary-text/60 bg-primary-text/5 border-primary-text/10';
        }
    };

    const getStatusIcon = (currentStatus) => {
        switch (currentStatus) {
            case 'Applied': return <ClockIcon size={12} />;
            case 'Rejected': return <XCircle size={12} />;
            case 'Selected': return <CheckCircle size={12} />;
            default: return <Circle size={12} />;
        }
    };

    return (
        <Card className={`h-full flex flex-col hover:border-accent-red/30 transition-all duration-300 relative group ${status === 'Rejected' ? 'opacity-75 grayscale-[0.5] hover:grayscale-0' : ''}`}>
            {/* Match Score Badge */}
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

                {/* Status Selector */}
                <div className="pt-2">
                    <div className="relative inline-block w-full">
                        <select
                            value={status || 'Not Applied'}
                            onChange={(e) => onStatusChange(job.id, e.target.value)}
                            className={`w-full appearance-none px-3 py-1.5 text-xs font-semibold border rounded cursor-pointer focus:outline-none focus:ring-1 focus:ring-accent-red transition-colors ${getStatusColor(status || 'Not Applied')}`}
                        >
                            <option value="Not Applied">Not Applied</option>
                            <option value="Applied">Applied</option>
                            <option value="Selected">Selected</option>
                            <option value="Rejected">Rejected</option>
                        </select>
                        <div className={`absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none ${getStatusColor(status || 'Not Applied').split(' ')[0]}`}>
                            {getStatusIcon(status || 'Not Applied')}
                        </div>
                    </div>
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
