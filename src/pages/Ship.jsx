import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import NavBar from '../components/layout/NavBar';
import Button from '../components/ui/Button';
import { Rocket, CheckCircle, Github } from 'lucide-react';

const Ship = () => {
    return (
        <MainLayout
            title="Ready for Takeoff"
            header={<NavBar />}
        >
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-8 animate-fade-in">
                <div className="bg-green-100 p-6 rounded-full mb-6 text-green-600">
                    <Rocket size={64} />
                </div>

                <h1 className="text-4xl font-serif font-bold text-primary-text mb-4">
                    All Systems Operational
                </h1>

                <p className="text-xl text-primary-text/60 max-w-2xl mb-12 font-sans">
                    Verification complete. The Job Notification Tracker is stable, feature-complete, and ready for production deployment.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="p-6 bg-white border border-primary-text/10 rounded-lg shadow-sm w-64">
                        <div className="flex justify-center mb-4 text-green-500"><CheckCircle size={32} /></div>
                        <h3 className="font-bold text-primary-text mb-1">Local Verified</h3>
                        <p className="text-sm text-primary-text/60">10/10 Tests Passed</p>
                    </div>
                    <div className="p-6 bg-white border border-primary-text/10 rounded-lg shadow-sm w-64">
                        <div className="flex justify-center mb-4 text-primary-text"><Github size={32} /></div>
                        <h3 className="font-bold text-primary-text mb-1">Remote Synced</h3>
                        <p className="text-sm text-primary-text/60">Ready to Push</p>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default Ship;
