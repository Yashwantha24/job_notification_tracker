import React from 'react';

const Badge = ({ status = 'neutral' }) => {
    const styles = {
        success: 'bg-muted-success/10 text-muted-success border border-muted-success/20',
        warning: 'bg-muted-warning/10 text-muted-warning border border-muted-warning/20',
        error: 'bg-muted-error/10 text-muted-error border border-muted-error/20',
        neutral: 'bg-primary-text/5 text-primary-text/80 border border-primary-text/10',
    };

    const statusMap = {
        'Shipped': 'success',
        'In Progress': 'warning',
        'Not Started': 'neutral',
    };

    const styleKey = statusMap[status] || 'neutral';


    return (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${styles[styleKey]}`}>
            {status}
        </span>
    );
};

export default Badge;
