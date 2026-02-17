import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import NavBar from '../components/layout/NavBar';
import EmptyState from '../components/ui/EmptyState'; // Assuming you created this in src/components/ui/
import { LayoutDashboard } from 'lucide-react';

const Dashboard = () => {
    return (
        <MainLayout
            title="Dashboard"
            description="Your command center."
            header={<NavBar />}
        >
            <EmptyState
                title="No jobs yet."
                description="In the next step, you will load a realistic dataset to start tracking."
                icon={LayoutDashboard}
            />
        </MainLayout>
    );
};

export default Dashboard;
