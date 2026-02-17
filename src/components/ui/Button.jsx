import React from 'react';

const Button = ({ children, variant = 'primary', onClick, className = '', ...props }) => {
    const baseStyles = "inline-flex items-center justify-center px-6 py-4 border text-base font-medium transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-red disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "border-transparent text-white bg-accent-red hover:bg-red-900 shadow-sm",
        secondary: "border-primary-text/20 text-primary-text/80 bg-white hover:bg-primary-text/5",
        text: "border-transparent text-accent-red hover:text-red-900 hover:bg-red-50"
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
