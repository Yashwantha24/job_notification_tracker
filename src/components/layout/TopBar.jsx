import React from 'react';

const TopBar = ({ step = 1, totalSteps = 5, status = 'Not Started' }) => {
    return (
        <div className="w-full h-16 border-b border-primary-text/10 bg-white flex items-center justify-between px-10 sticky top-0 z-50">
            <div className="text-lg font-bold font-serif text-primary-text tracking-tight">
                KodNest Premium
            </div>

            <div className="flex items-center space-x-2 text-sm font-medium text-primary-text/60">
                <span>Step {step}</span>
                <span className="text-primary-text/20">/</span>
                <span>{totalSteps}</span>
            </div>

            <div className="flex items-center space-x-2">
                <span className={`h-2 w-2 rounded-full ${status === 'Shipped' ? 'bg-muted-success' : status === 'In Progress' ? 'bg-muted-warning' : 'bg-primary-text/20'}`}></span>
                <span className="text-sm font-medium text-primary-text/60 uppercase tracking-wide text-xs">{status}</span>
            </div>
        </div>
    );
};

export default TopBar;
