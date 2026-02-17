import React from 'react';
import Card from '../ui/Card';
import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';

const StatsCard = ({ title, value, trend, trendValue, icon: Icon }) => {
    // Determine trend color and icon
    let trendColor = 'text-primary-text/40';
    let TrendIcon = Minus;

    if (trend === 'up') {
        trendColor = 'text-green-600/80'; // Muted Success
        TrendIcon = ArrowUpRight;
    } else if (trend === 'down') {
        trendColor = 'text-red-600/80'; // Muted Warning/Error (using red family but distinct from accent if possible, or just muted red)
        TrendIcon = ArrowDownRight;
    }

    return (
        <Card className="h-full flex flex-col justify-between">
            <div className="flex justify-between items-start mb-4">
                <span className="text-sm font-medium text-primary-text/60 font-sans">{title}</span>
                {Icon && <Icon size={20} className="text-primary-text/30" />}
            </div>

            <div className="flex items-end justify-between">
                <h2 className="text-4xl font-bold font-serif text-primary-text">{value}</h2>

                {trendValue && (
                    <div className={`flex items-center text-xs font-medium ${trendColor} bg-primary-text/5 px-2 py-1 rounded-full`}>
                        <TrendIcon size={14} className="mr-1" />
                        {trendValue}
                    </div>
                )}
            </div>
        </Card>
    );
};

export default StatsCard;
