import React from 'react';

const Card = ({ children, title, className = '', ...props }) => {
    return (
        <div className={`bg-white border border-primary-text/10 overflow-hidden ${className}`} {...props}>
            {title && (
                <div className="px-6 py-4 border-b border-primary-text/5">
                    <h3 className="text-lg font-medium leading-6 text-primary-text font-serif">{title}</h3>
                </div>
            )}
            <div className="px-6 py-6">
                {children}
            </div>
        </div>
    );
};

export default Card;
