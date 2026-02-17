import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import NavBar from '../components/layout/NavBar';

const Saved = () => {
    return (
        <MainLayout
            title="Saved Jobs"
            description="This section will be built in the next step."
            header={<NavBar />}
        >
            <div className="w-full h-96 border-2 border-dashed border-primary-text/10 rounded-lg flex items-center justify-center text-primary-text/40 font-mono text-sm">
                Saved Jobs Content Placeholder
            </div>
        </MainLayout>
    );
};

export default Saved;
