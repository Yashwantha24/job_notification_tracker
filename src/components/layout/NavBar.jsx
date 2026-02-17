import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Dashboard', path: '/dashboard' },
        { name: 'Saved', path: '/saved' },
        { name: 'Digest', path: '/digest' },
        { name: 'Settings', path: '/settings' },
        { name: 'Proof', path: '/proof' },
    ];

    return (
        <nav className="w-full h-16 border-b border-primary-text/10 bg-white flex items-center justify-between px-10 sticky top-0 z-50">
            {/* Logo */}
            <div className="text-lg font-bold font-serif text-primary-text tracking-tight">
                Job Tracker
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8 h-full">
                {navLinks.map((link) => (
                    <NavLink
                        key={link.name}
                        to={link.path}
                        className={({ isActive }) =>
                            `flex items-center h-full px-1 text-sm font-medium transition-all duration-200 border-b-2 ${isActive
                                ? 'border-accent-red text-accent-red'
                                : 'border-transparent text-primary-text/60 hover:text-primary-text'
                            }`
                        }
                    >
                        {link.name}
                    </NavLink>
                ))}
            </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden text-primary-text focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Navigation Dropdown */}
            {isMenuOpen && (
                <div className="absolute top-16 left-0 w-full bg-white border-b border-primary-text/10 shadow-lg md:hidden">
                    <div className="flex flex-col py-4 px-6 space-y-4">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsMenuOpen(false)}
                                className={({ isActive }) =>
                                    `text-base font-medium transition-colors duration-200 ${isActive
                                        ? 'text-accent-red'
                                        : 'text-primary-text/60 hover:text-primary-text'
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
