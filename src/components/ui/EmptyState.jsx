import React from 'react';
import { FileSearch } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

const EmptyState = ({ title, description, actionLabel, onAction, icon: Icon = FileSearch }) => {
    return (
        <Card className="h-96 flex flex-col items-center justify-center text-center p-12">
            <div className="bg-primary-text/5 p-4 rounded-full mb-6">
                <Icon size={48} className="text-primary-text/40" />
            </div>
            <h3 className="text-xl font-serif font-bold text-primary-text mb-2">{title}</h3>
            <p className="text-primary-text/60 max-w-md mb-8 font-sans">{description}</p>
            {actionLabel && (
                <Button variant="primary" onClick={onAction}>
                    {actionLabel}
                </Button>
            )}
        </Card>
    );
};

export default EmptyState;
