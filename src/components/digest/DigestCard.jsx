import React from 'react';
import Badge from '../ui/Badge';
import { MapPin, Briefcase, ExternalLink } from 'lucide-react';

const DigestCard = ({ job, index }) => {
    return (
        <div className="bg-white border border-primary-text/10 rounded-lg p-5 mb-4 hover:border-accent-red/30 transition-colors flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-accent-red/60 uppercase tracking-wider">#{index + 1}</span>
                    <Badge status={job.score >= 80 ? 'Success' : job.score >= 60 ? 'Warning' : 'Neutral'} label={`${job.score}% Match`} />
                </div>
                <h3 className="text-lg font-serif font-bold text-primary-text leading-tight mb-1">
                    {job.title}
                </h3>
                <p className="text-sm font-medium text-primary-text/70 mb-2">{job.company}</p>

                <div className="flex flex-wrap items-center gap-3 text-xs text-primary-text/60 font-sans">
                    <span className="flex items-center gap-1">
                        <MapPin size={12} /> {job.location} ({job.mode})
                    </span>
                    <span className="flex items-center gap-1">
                        <Briefcase size={12} /> {job.experience}
                    </span>
                </div>
            </div>

            <div className="w-full sm:w-auto">
                <a
                    href={job.applyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center w-full sm:w-auto px-4 py-2 bg-primary-text text-off-white text-sm font-medium rounded hover:bg-primary-text/90 transition-colors"
                >
                    Apply <ExternalLink size={14} className="ml-2" />
                </a>
            </div>
        </div>
    );
};

export default DigestCard;
