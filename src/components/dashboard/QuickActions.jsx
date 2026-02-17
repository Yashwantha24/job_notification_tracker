import React from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { Plus, RefreshCw } from 'lucide-react';

const QuickActions = () => {
    return (
        <Card title="Quick Actions" className="h-full">
            <div className="flex flex-col space-y-4">
                <Button variant="primary" className="w-full justify-center">
                    <Plus size={18} className="mr-2" />
                    Add New Job
                </Button>
                <Button variant="secondary" className="w-full justify-center">
                    <RefreshCw size={18} className="mr-2" />
                    Update Status
                </Button>
            </div>

            <div className="mt-6 pt-6 border-t border-primary-text/10">
                <p className="text-xs text-primary-text/40 text-center">
                    Pro Tip: You can also drag and drop resume files directly onto the dashboard to parse them.
                </p>
            </div>
        </Card>
    );
};

export default QuickActions;
