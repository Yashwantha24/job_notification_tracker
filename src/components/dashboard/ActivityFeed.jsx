import React from 'react';
import Card from '../ui/Card';
import Badge from '../ui/Badge';

const ActivityFeed = ({ activities = [] }) => {
    return (
        <Card title="Recent Activity" className="h-full">
            {activities.length === 0 ? (
                <div className="text-center py-10 text-primary-text/40 text-sm">
                    No recent activity found.
                </div>
            ) : (
                <div className="space-y-6">
                    {activities.map((activity) => (
                        <div key={activity.id} className="flex items-start space-x-4">
                            <div className="flex-shrink-0 mt-1">
                                <div className="h-2 w-2 rounded-full bg-accent-red"></div>
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-primary-text">
                                    {activity.action} <span className="text-primary-text/60">for</span> {activity.target}
                                </p>
                                <p className="text-xs text-primary-text/40 mt-1">
                                    {activity.timestamp}
                                </p>
                            </div>
                            <div>
                                <Badge status={activity.status} />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </Card>
    );
};

export default ActivityFeed;
