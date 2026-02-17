import React from 'react';

const ProofFooter = () => {
    return (
        <div className="w-full h-16 bg-white border-t border-primary-text/10 flex items-center justify-between px-10 fixed bottom-0 z-40">
            <div className="flex items-center space-x-10 text-sm font-medium text-primary-text/60">
                <label className="flex items-center space-x-2 cursor-pointer hover:text-primary-text transition-colors duration-200">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-accent-red border-primary-text/20 rounded focus:ring-accent-red" />
                    <span>UI Built</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer hover:text-primary-text transition-colors duration-200">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-accent-red border-primary-text/20 rounded focus:ring-accent-red" />
                    <span>Logic Working</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer hover:text-primary-text transition-colors duration-200">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-accent-red border-primary-text/20 rounded focus:ring-accent-red" />
                    <span>Test Passed</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer hover:text-primary-text transition-colors duration-200">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-accent-red border-primary-text/20 rounded focus:ring-accent-red" />
                    <span>Deployed</span>
                </label>
            </div>

            <div className="text-xs text-primary-text/40 font-mono">
                System Status: Online
            </div>
        </div>
    );
};

export default ProofFooter;
