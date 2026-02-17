import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import NavBar from '../components/layout/NavBar';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { CheckCircle, AlertCircle, RefreshCw, Rocket } from 'lucide-react';

const TestData = () => {
    const navigate = useNavigate();
    const [checklist, setChecklist] = useState({
        prefsPersist: false,
        matchScoreCalc: false,
        matchesToggle: false,
        savePersist: false,
        applyNewTab: false,
        statusPersist: false,
        statusFilter: false,
        digestGen: false,
        digestPersist: false,
        noConsoleErrors: false
    });

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('jobTrackerTestStatus') || '{}');
        // Merge saved with default to handle new keys if any
        setChecklist(prev => ({ ...prev, ...saved }));
    }, []);

    const handleChange = (key) => {
        const updated = { ...checklist, [key]: !checklist[key] };
        setChecklist(updated);
        localStorage.setItem('jobTrackerTestStatus', JSON.stringify(updated));
    };

    const handleReset = () => {
        const reset = Object.keys(checklist).reduce((acc, key) => ({ ...acc, [key]: false }), {});
        setChecklist(reset);
        localStorage.setItem('jobTrackerTestStatus', JSON.stringify(reset));
    };

    const checkedCount = Object.values(checklist).filter(Boolean).length;
    const isComplete = checkedCount === 10;

    const checklistItems = [
        { key: 'prefsPersist', label: 'Preferences persist after refresh', hint: 'Change settings, reload page, verify values.' },
        { key: 'matchScoreCalc', label: 'Match score calculates correctly', hint: 'Verify green/amber badges based on rules.' },
        { key: 'matchesToggle', label: '"Show only matches" toggle works', hint: 'Enable toggle, ensure low-score jobs disappear.' },
        { key: 'savePersist', label: 'Save job persists after refresh', hint: 'Save a job, reload, check Saved tab.' },
        { key: 'applyNewTab', label: 'Apply opens in new tab', hint: 'Click Apply, check if new tab opens.' },
        { key: 'statusPersist', label: 'Status update persists after refresh', hint: 'Change status to Applied, reload page.' },
        { key: 'statusFilter', label: 'Status filter works correctly', hint: 'Filter by "Applied", check results.' },
        { key: 'digestGen', label: 'Digest generates top 10 by score', hint: 'Generate digest, count items, check relevance.' },
        { key: 'digestPersist', label: 'Digest persists for the day', hint: 'Refresh digest page, ensure same list loads.' },
        { key: 'noConsoleErrors', label: 'No console errors on main pages', hint: 'Open DevTools, browse app, check Console.' },
    ];

    return (
        <MainLayout
            title="System Verification"
            description="Validate all features before shipping."
            header={<NavBar />}
        >
            <div className="max-w-2xl mx-auto space-y-8">
                {/* Status Header */}
                <div className={`p-6 rounded-lg border flex items-center justify-between ${isComplete ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                    <div>
                        <h2 className={`text-xl font-bold font-serif ${isComplete ? 'text-green-800' : 'text-red-800'}`}>
                            Tests Passed: {checkedCount} / 10
                        </h2>
                        <p className={`text-sm mt-1 ${isComplete ? 'text-green-700' : 'text-red-700'}`}>
                            {isComplete ? "System ready for deployment." : "Resolve all issues before shipping."}
                        </p>
                    </div>
                    {isComplete ? <CheckCircle size={32} className="text-green-600" /> : <AlertCircle size={32} className="text-red-600" />}
                </div>

                {/* Checklist */}
                <Card title="Pre-Flight Checks">
                    <div className="space-y-4">
                        {checklistItems.map(item => (
                            <label key={item.key} className="flex items-start gap-3 p-3 hover:bg-primary-text/5 rounded cursor-pointer transition-colors group">
                                <input
                                    type="checkbox"
                                    checked={checklist[item.key]}
                                    onChange={() => handleChange(item.key)}
                                    className="mt-1 w-5 h-5 text-accent-red border-primary-text/30 rounded focus:ring-accent-red cursor-pointer"
                                />
                                <div>
                                    <span className={`font-medium ${checklist[item.key] ? 'text-primary-text line-through opacity-60' : 'text-primary-text'}`}>
                                        {item.label}
                                    </span>
                                    <p className="text-xs text-primary-text/40 mt-0.5 group-hover:text-primary-text/60 transition-colors">
                                        Test: {item.hint}
                                    </p>
                                </div>
                            </label>
                        ))}
                    </div>

                    <div className="mt-6 pt-6 border-t border-primary-text/10 flex justify-between">
                        <Button variant="secondary" onClick={handleReset} className="text-xs text-primary-text/60">
                            <RefreshCw size={14} className="mr-1.5" />
                            Reset Test Status
                        </Button>
                    </div>
                </Card>

                {/* Ship Button */}
                <div className="flex justify-end">
                    <Button
                        variant="primary"
                        disabled={!isComplete}
                        onClick={() => navigate('/jt/08-ship')}
                        className={`px-8 py-3 text-lg ${!isComplete ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        Proceed to Ship <Rocket size={20} className="ml-2" />
                    </Button>
                </div>
            </div>
        </MainLayout>
    );
};

export default TestData;
