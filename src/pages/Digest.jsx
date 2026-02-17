import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import NavBar from '../components/layout/NavBar';
import EmptyState from '../components/ui/EmptyState';
import { Mail } from 'lucide-react';

const Digest = () => {
    return (
        <MainLayout
            title="Daily Digest"
            description="Your curated morning briefing."
            header={<NavBar />}
        >
            <EmptyState
                title="No new digests."
                description="Your daily job summary will arrive here at 9:00 AM."
                icon={Mail}
            />
        </MainLayout>
    );
};

export default Digest;
