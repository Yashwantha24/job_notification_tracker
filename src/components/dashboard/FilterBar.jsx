import React from 'react';
import Input from '../ui/Input';
import Card from '../ui/Card';
import { Search, Filter } from 'lucide-react';

const FilterBar = ({ filters, onFilterChange }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        onFilterChange({ ...filters, [name]: value });
    };

    return (
        <Card className="mb-8 p-4">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                {/* Search - Spans 4 columns */}
                <div className="md:col-span-4 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search size={16} className="text-primary-text/40" />
                    </div>
                    <input
                        type="text"
                        name="keyword"
                        value={filters.keyword}
                        onChange={handleChange}
                        placeholder="Search by title or company..."
                        className="w-full pl-10 pr-4 py-2 bg-off-white border border-primary-text/20 rounded-md focus:outline-none focus:ring-1 focus:ring-accent-red focus:border-accent-red transition-all duration-200 text-sm font-sans"
                    />
                </div>

                {/* Filters - Spans 8 columns */}
                <div className="md:col-span-8 flex flex-wrap gap-3">
                    <select
                        name="location"
                        value={filters.location}
                        onChange={handleChange}
                        className="px-3 py-2 bg-off-white border border-primary-text/20 rounded-md text-sm text-primary-text/80 focus:outline-none focus:border-accent-red cursor-pointer"
                    >
                        <option value="">All Locations</option>
                        <option value="Bangalore">Bangalore</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Pune">Pune</option>
                        <option value="Remote">Remote</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Gurgaon">Gurgaon</option>
                        <option value="Noida">Noida</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Delhi">Delhi</option>
                    </select>

                    <select
                        name="mode"
                        value={filters.mode}
                        onChange={handleChange}
                        className="px-3 py-2 bg-off-white border border-primary-text/20 rounded-md text-sm text-primary-text/80 focus:outline-none focus:border-accent-red cursor-pointer"
                    >
                        <option value="">All Modes</option>
                        <option value="Remote">Remote</option>
                        <option value="Hybrid">Hybrid</option>
                        <option value="Onsite">Onsite</option>
                    </select>

                    <select
                        name="experience"
                        value={filters.experience}
                        onChange={handleChange}
                        className="px-3 py-2 bg-off-white border border-primary-text/20 rounded-md text-sm text-primary-text/80 focus:outline-none focus:border-accent-red cursor-pointer"
                    >
                        <option value="">Experience</option>
                        <option value="Fresher">Fresher</option>
                        <option value="0-1 Years">0-1 Years</option>
                        <option value="1-3 Years">1-3 Years</option>
                        <option value="3-5 Years">3-5 Years</option>
                    </select>

                    <select
                        name="source"
                        value={filters.source}
                        onChange={handleChange}
                        className="px-3 py-2 bg-off-white border border-primary-text/20 rounded-md text-sm text-primary-text/80 focus:outline-none focus:border-accent-red cursor-pointer"
                    >
                        <option value="">All Sources</option>
                        <option value="LinkedIn">LinkedIn</option>
                        <option value="Naukri">Naukri</option>
                        <option value="Indeed">Indeed</option>
                    </select>

                    <select
                        name="sort"
                        value={filters.sort}
                        onChange={handleChange}
                        className="px-3 py-2 bg-off-white border border-primary-text/20 rounded-md text-sm text-primary-text/80 focus:outline-none focus:border-accent-red cursor-pointer ml-auto"
                    >
                        <option value="latest">Latest</option>
                        <option value="oldest">Oldest</option>
                    </select>
                </div>
            </div>
        </Card>
    );
};

export default FilterBar;
