import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import NavBar from '../components/layout/NavBar';

const Digest = () => {
    return (
        <MainLayout
            title="Daily Digest"
            description="This section will be built in the next step."
            header={<NavBar />}
        >
            <div className="w-full h-96 border-2 border-dashed border-primary-text/10 rounded-lg flex items-center justify-center text-primary-text/40 font-mono text-sm">
                Digest Content Placeholder
            </div>
        </MainLayout>
    );
};

export default Digest;
