import React from 'react';

const Input = ({ label, id, type = 'text', placeholder, error, className = '', ...props }) => {
    return (
        <div className={`w-full ${className}`}>
            {label && (
                <label htmlFor={id} className="block text-sm font-medium text-primary-text/70 mb-2">
                    {label}
                </label>
            )}
            <input
                type={type}
                id={id}
                className={`appearance-none block w-full px-4 py-2 border ${error ? 'border-muted-error' : 'border-primary-text/20'} rounded-none shadow-sm placeholder-primary-text/30 focus:outline-none focus:ring-1 focus:ring-accent-red focus:border-accent-red sm:text-sm transition-colors duration-200 ease-in-out`}
                placeholder={placeholder}
                {...props}
            />
            {error && (
                <p className="mt-1 text-sm text-muted-error">{error}</p>
            )}
        </div>
    );
};

export default Input;
