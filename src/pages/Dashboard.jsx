import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import NavBar from '../components/layout/NavBar';

const Dashboard = () => {
    return (
        <MainLayout
            title="Dashboard"
            description="This section will be built in the next step."
            header={<NavBar />}
        >
            <div className="w-full h-96 border-2 border-dashed border-primary-text/10 rounded-lg flex items-center justify-center text-primary-text/40 font-mono text-sm">
                Dashboard Content Placeholder
            </div>
        </MainLayout>
    );
};

export default Dashboard;
