import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import NavBar from '../components/layout/NavBar';
import StatsCard from '../components/dashboard/StatsCard';
import ActivityFeed from '../components/dashboard/ActivityFeed';
import QuickActions from '../components/dashboard/QuickActions';
import { Briefcase, Calendar, CheckCircle } from 'lucide-react';

const Dashboard = () => {
    // Mock Data for Phase 2 Implementation
    const stats = [
        { title: "Total Applications", value: "24", trend: "up", trendValue: "+4 this week", icon: Briefcase },
        { title: "Interviews Scheduled", value: "3", trend: "up", trendValue: "Next: Tomorrow", icon: Calendar },
        { title: "Offers Received", value: "1", trend: "up", trendValue: "Pending Review", icon: CheckCircle },
    ];

    const activities = [
        { id: 1, action: "Applied", target: "Frontend Engineer at Google", status: "In Progress", timestamp: "2 hours ago" },
        { id: 2, action: "Interview", target: "Full Stack Dev at Amazon", status: "Not Started", timestamp: "Yesterday" },
        { id: 3, action: "Offer", target: "Software Engineer at Meta", status: "Shipped", timestamp: "1 week ago" },
        { id: 4, action: "Applied", target: "React Developer at Airbnb", status: "In Progress", timestamp: "1 week ago" },
    ];

    return (
        <MainLayout
            title="Dashboard"
            description="Overview of your job search progress."
            header={<NavBar />}
        >
            <div className="flex flex-col gap-8 w-full">
                {/* Stats Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stats.map((stat, index) => (
                        <StatsCard key={index} {...stat} />
                    ))}
                </div>

                {/* Main Content Area */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-96">
                    {/* Activity Feed (2/3 width) */}
                    <div className="lg:col-span-2 h-full">
                        <ActivityFeed activities={activities} />
                    </div>

                    {/* Quick Actions (1/3 width) */}
                    <div className="h-full">
                        <QuickActions />
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default Dashboard;
