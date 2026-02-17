import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import NavBar from '../components/layout/NavBar';
import Button from '../components/ui/Button';

const Landing = () => {
    const navigate = useNavigate();

    return (
        <MainLayout header={<NavBar />}>
            <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary-text mb-6 leading-tight">
                    Stop Missing <br />
                    <span className="text-accent-red">The Right Jobs.</span>
                </h1>
                <p className="text-xl text-primary-text/60 max-w-2xl mb-10 font-sans font-light">
                    Precision-matched job discovery delivered daily at 9AM.
                    <br />
                    No noise. Just relevance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                        variant="primary"
                        onClick={() => navigate('/settings')}
                        className="px-8 py-4 text-lg"
                    >
                        Start Tracking
                    </Button>
                </div>
            </div>
        </MainLayout>
    );
};

export default Landing;
