import React, { useState, useEffect } from 'react';
import MainLayout from '../components/layout/MainLayout';
import NavBar from '../components/layout/NavBar';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import { CheckCircle, Clipboard, Link as LinkIcon, AlertCircle, Package } from 'lucide-react';

const Proof = () => {
    const [links, setLinks] = useState({
        lovable: '',
        github: '',
        deployed: ''
    });
    const [testStatus, setTestStatus] = useState(0);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        // Load links
        const savedLinks = JSON.parse(localStorage.getItem('jobTrackerLinks') || '{}');
        setLinks(prev => ({ ...prev, ...savedLinks }));

        // Check tests
        const savedTests = JSON.parse(localStorage.getItem('jobTrackerTestStatus') || '{}');
        const count = Object.values(savedTests).filter(Boolean).length;
        setTestStatus(count);
    }, []);

    const handleLinkChange = (e) => {
        const { name, value } = e.target;
        const newLinks = { ...links, [name]: value };
        setLinks(newLinks);
        localStorage.setItem('jobTrackerLinks', JSON.stringify(newLinks));
    };

    const isShippable = links.lovable && links.github && links.deployed && testStatus === 10;

    const getStatus = () => {
        if (isShippable) return { label: 'Shipped', color: 'Success', icon: Package };
        if (links.lovable || links.github || links.deployed || testStatus > 0) return { label: 'In Progress', color: 'Warning', icon: AlertCircle };
        return { label: 'Not Started', color: 'Neutral', icon: AlertCircle };
    };

    const status = getStatus();
    const StatusIcon = status.icon;

    const handleCopy = () => {
        const text = `
------------------------------------------
Job Notification Tracker — Final Submission

Lovable Project:
${links.lovable}

GitHub Repository:
${links.github}

Live Deployment:
${links.deployed}

Core Features:
- Intelligent match scoring
- Daily digest simulation
- Status tracking
- Test checklist enforced
------------------------------------------
`;
        navigator.clipboard.writeText(text.trim());
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const steps = [
        { id: 1, label: 'Project Setup & Routing' },
        { id: 2, label: 'UI/UX Implementation' },
        { id: 3, label: 'Job Data Integration' },
        { id: 4, label: 'Intelligent Matching' },
        { id: 5, label: 'Daily Digest Engine' },
        { id: 6, label: 'Status Tracking' },
        { id: 7, label: 'Test System & Quality Gate' },
        { id: 8, label: 'Production Deployment' },
    ];

    return (
        <MainLayout
            title="Proof of Work"
            description="Final verification and submission generation."
            header={<NavBar />}
        >
            <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">

                {/* Project Status Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 bg-white border border-primary-text/10 rounded-lg shadow-sm gap-4">
                    <div>
                        <h2 className="text-2xl font-serif font-bold text-primary-text">Project 1 — Job Notification Tracker</h2>
                        <p className="text-primary-text/60">Final Submission Status</p>
                    </div>
                    <div className={`flex items-center gap-2 px-4 py-2 rounded-full border ${status.label === 'Shipped' ? 'bg-green-50 border-green-200 text-green-700' :
                            status.label === 'In Progress' ? 'bg-amber-50 border-amber-200 text-amber-700' :
                                'bg-gray-50 border-gray-200 text-gray-600'
                        }`}>
                        <StatusIcon size={20} />
                        <span className="font-bold">{status.label}</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* A) Step Completion Summary */}
                    <Card title="Development Milestones">
                        <div className="space-y-3">
                            {steps.map((step) => (
                                <div key={step.id} className="flex items-center justify-between p-2 hover:bg-primary-text/5 rounded transition-colors">
                                    <span className="text-sm font-medium text-primary-text/80">{step.id}. {step.label}</span>
                                    <CheckCircle size={16} className="text-green-500" />
                                </div>
                            ))}
                            <div className="mt-4 pt-4 border-t border-primary-text/10 flex justify-between items-center">
                                <span className="text-sm font-bold text-primary-text">Quality Gate (Tests Passed)</span>
                                <span className={`text-sm font-bold ${testStatus === 10 ? 'text-green-600' : 'text-accent-red'}`}>
                                    {testStatus} / 10
                                </span>
                            </div>
                        </div>
                    </Card>

                    {/* B) Artifact Collection Inputs */}
                    <Card title="Submission Artifacts">
                        <div className="space-y-5">
                            <div>
                                <label className="block text-xs font-bold text-primary-text/70 uppercase mb-1">Lovable Project Link</label>
                                <div className="relative">
                                    <LinkIcon size={16} className="absolute left-3 top-2.5 text-primary-text/40" />
                                    <input
                                        type="url"
                                        name="lovable"
                                        value={links.lovable}
                                        onChange={handleLinkChange}
                                        placeholder="https://lovable.dev/..."
                                        className="w-full pl-9 pr-4 py-2 bg-off-white border border-primary-text/20 rounded text-sm focus:border-accent-red focus:ring-1 focus:ring-accent-red outline-none transition-all"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-primary-text/70 uppercase mb-1">GitHub Repository Link</label>
                                <div className="relative">
                                    <LinkIcon size={16} className="absolute left-3 top-2.5 text-primary-text/40" />
                                    <input
                                        type="url"
                                        name="github"
                                        value={links.github}
                                        onChange={handleLinkChange}
                                        placeholder="https://github.com/..."
                                        className="w-full pl-9 pr-4 py-2 bg-off-white border border-primary-text/20 rounded text-sm focus:border-accent-red focus:ring-1 focus:ring-accent-red outline-none transition-all"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-primary-text/70 uppercase mb-1">Deployed URL</label>
                                <div className="relative">
                                    <LinkIcon size={16} className="absolute left-3 top-2.5 text-primary-text/40" />
                                    <input
                                        type="url"
                                        name="deployed"
                                        value={links.deployed}
                                        onChange={handleLinkChange}
                                        placeholder="https://vercel.app/..."
                                        className="w-full pl-9 pr-4 py-2 bg-off-white border border-primary-text/20 rounded text-sm focus:border-accent-red focus:ring-1 focus:ring-accent-red outline-none transition-all"
                                    />
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Final Submission Export */}
                <div className="flex flex-col items-center pt-8 border-t border-primary-text/10">
                    <Button
                        variant="primary"
                        onClick={handleCopy}
                        disabled={!isShippable}
                        className={`px-8 py-4 text-lg shadow-lg ${!isShippable ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 transform transition-transform'}`}
                    >
                        {copied ? "Copied to Clipboard!" : "Copy Final Submission"}
                        <Clipboard size={20} className="ml-2" />
                    </Button>

                    {!isShippable && (
                        <p className="mt-4 text-sm text-accent-red flex items-center gap-2">
                            <AlertCircle size={14} />
                            Complete all fields and pass all tests to enable submission.
                        </p>
                    )}

                    {isShippable && (
                        <p className="mt-4 text-sm text-green-600 font-medium">
                            Project 1 Shipped Successfully.
                        </p>
                    )}
                </div>
            </div>
        </MainLayout>
    );
};

export default Proof;
