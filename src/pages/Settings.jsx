import React, { useState, useEffect } from 'react';
import MainLayout from '../components/layout/MainLayout';
import NavBar from '../components/layout/NavBar';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const Settings = () => {
    const [preferences, setPreferences] = useState({
        roleKeywords: '',
        preferredLocations: '',
        preferredMode: { Remote: false, Hybrid: false, Onsite: false },
        experienceLevel: '',
        skills: '',
        minMatchScore: 40
    });

    const [showSuccess, setShowSuccess] = useState(false);

    useEffect(() => {
        const savedPrefs = localStorage.getItem('jobTrackerPreferences');
        if (savedPrefs) {
            setPreferences(JSON.parse(savedPrefs));
        }
    }, []);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox') {
            setPreferences(prev => ({
                ...prev,
                preferredMode: {
                    ...prev.preferredMode,
                    [name]: checked
                }
            }));
        } else {
            setPreferences(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSave = () => {
        localStorage.setItem('jobTrackerPreferences', JSON.stringify(preferences));
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
    };

    return (
        <MainLayout
            title="Preferences"
            description="Customize your job discovery feed."
            header={<NavBar />}
        >
            <div className="max-w-3xl mx-auto space-y-8">
                <Card title="Matching Criteria">
                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-primary-text mb-2">
                                Role Keywords <span className="text-primary-text/40">(Comma separated)</span>
                            </label>
                            <Input
                                name="roleKeywords"
                                value={preferences.roleKeywords}
                                onChange={handleChange}
                                placeholder="e.g. Frontend Developer, React Engineer, SDE"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-primary-text mb-2">
                                Preferred Locations <span className="text-primary-text/40">(Comma separated)</span>
                            </label>
                            <Input
                                name="preferredLocations"
                                value={preferences.preferredLocations}
                                onChange={handleChange}
                                placeholder="e.g. Bangalore, Hyderabad, Remote"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-primary-text mb-2">Work Mode</label>
                                <div className="space-y-2 mt-2">
                                    {['Remote', 'Hybrid', 'Onsite'].map(mode => (
                                        <label key={mode} className="flex items-center space-x-3 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                name={mode}
                                                checked={preferences.preferredMode[mode]}
                                                onChange={handleChange}
                                                className="w-4 h-4 text-accent-red border-primary-text/20 rounded focus:ring-accent-red"
                                            />
                                            <span className="text-primary-text/80 text-sm">{mode}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-primary-text mb-2">Experience Level</label>
                                <select
                                    name="experienceLevel"
                                    value={preferences.experienceLevel}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 bg-off-white border border-primary-text/20 rounded-md focus:outline-none focus:ring-1 focus:ring-accent-red focus:border-accent-red transition-all duration-200"
                                >
                                    <option value="">Select Level</option>
                                    <option value="Fresher">Fresher</option>
                                    <option value="0-1 Years">0-1 Years</option>
                                    <option value="1-3 Years">1-3 Years</option>
                                    <option value="3-5 Years">3-5 Years</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-primary-text mb-2">
                                Your Skills <span className="text-primary-text/40">(Comma separated)</span>
                            </label>
                            <Input
                                name="skills"
                                value={preferences.skills}
                                onChange={handleChange}
                                placeholder="e.g. React, Node.js, Python, AWS"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-primary-text mb-2 flex justify-between">
                                <span>Minimum Match Score Threshold</span>
                                <span className="font-bold text-accent-red">{preferences.minMatchScore}%</span>
                            </label>
                            <input
                                type="range"
                                name="minMatchScore"
                                min="0"
                                max="100"
                                value={preferences.minMatchScore}
                                onChange={handleChange}
                                className="w-full h-2 bg-primary-text/10 rounded-lg appearance-none cursor-pointer accent-accent-red"
                            />
                            <p className="text-xs text-primary-text/60 mt-2">
                                Jobs below this score will be hidden when "Show Matches Only" is enabled.
                            </p>
                        </div>
                    </div>
                </Card>

                <div className="flex items-center justify-end gap-4">
                    {showSuccess && (
                        <span className="text-green-700 font-medium text-sm animate-fade-in">
                            Preferences Saved Successfully!
                        </span>
                    )}
                    <Button variant="primary" onClick={handleSave}>Save Preferences</Button>
                </div>
            </div>
        </MainLayout>
    );
};

export default Settings;
