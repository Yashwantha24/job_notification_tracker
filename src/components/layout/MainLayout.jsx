import React from 'react';
import TopBar from './TopBar';
import ContextHeader from './ContextHeader';
import ProofFooter from './ProofFooter';

const MainLayout = ({ children, title = "Dashboard", description = "Welcome to the premium build system." }) => {
    return (
        <div className="min-h-screen bg-off-white flex flex-col font-sans text-primary-text pb-16">
            <TopBar />
            <ContextHeader title={title} description={description} />

            <main className="flex-grow w-full max-w-7xl mx-auto px-10 py-10 flex gap-10">
                {/* Children will handle the splitting of Workspace and Panel if needed, or pass them as props */}
                {children}
            </main>

            <ProofFooter />
        </div>
    );
};

export default MainLayout;
