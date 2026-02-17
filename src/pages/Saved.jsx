import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import NavBar from '../components/layout/NavBar';
import EmptyState from '../components/ui/EmptyState';
import { Bookmark } from 'lucide-react';

const Saved = () => {
    return (
        <MainLayout
            title="Saved Jobs"
            description="Track your most promising opportunities."
            header={<NavBar />}
        >
            <EmptyState
                title="No saved jobs."
                description="Jobs you bookmark will appear here for easy access."
                icon={Bookmark}
            />
        </MainLayout>
    );
};

export default Saved;
