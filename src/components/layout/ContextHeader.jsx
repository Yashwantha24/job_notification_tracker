import React from 'react';

const ContextHeader = ({ title, description }) => {
    return (
        <div className="w-full py-10 px-10 bg-off-white border-b border-primary-text/5">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-serif text-primary-text mb-2 tracking-tight">{title}</h1>
                <p className="text-primary-text/60 text-lg font-light max-w-2xl">{description}</p>
            </div>
        </div>
    );
};

export default ContextHeader;
