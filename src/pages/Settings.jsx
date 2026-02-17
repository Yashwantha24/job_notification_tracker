import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import NavBar from '../components/layout/NavBar';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const Settings = () => {
    return (
        <MainLayout
            title="Preferences"
            description="Customize your job discovery feed."
            header={<NavBar />}
        >
            <div className="max-w-2xl mx-auto space-y-8">
                <Card title="Job Criteria">
                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-primary-text mb-2">Role Keywords</label>
                            <Input placeholder="e.g. Frontend Developer, React Engineer" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-primary-text mb-2">Preferred Locations</label>
                            <Input placeholder="e.g. San Francisco, New York, London" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-primary-text mb-2">Work Mode</label>
                                <select className="w-full px-4 py-2 bg-off-white border border-primary-text/20 rounded-md focus:outline-none focus:ring-1 focus:ring-accent-red focus:border-accent-red transition-all duration-200">
                                    <option>Remote</option>
                                    <option>Hybrid</option>
                                    <option>Onsite</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-primary-text mb-2">Experience Level</label>
                                <select className="w-full px-4 py-2 bg-off-white border border-primary-text/20 rounded-md focus:outline-none focus:ring-1 focus:ring-accent-red focus:border-accent-red transition-all duration-200">
                                    <option>Junior (0-2 years)</option>
                                    <option>Mid-Level (3-5 years)</option>
                                    <option>Senior (5+ years)</option>
                                    <option>Lead / Staff</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 flex justify-end">
                        <Button variant="primary">Save Preferences</Button>
                    </div>
                </Card>
            </div>
        </MainLayout>
    );
};

export default Settings;
