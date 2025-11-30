"use client";

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { profileData } from '@/data/portfolio-data';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href === '#' ? 'body' : href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    return (
        <>
            <motion.nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-4' : 'bg-transparent py-6'
                    }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="container mx-auto px-6 flex items-center justify-between">

                    {/* Logo */}
                    <a href="#" onClick={(e) => scrollToSection(e, '#')} className="text-xl font-bold font-mono text-white flex items-center gap-2">
                        <span className="text-blue-500">&lt;</span>
                        Ikkyu Phaibun
                        <span className="text-blue-500">/&gt;</span>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.href)}
                                className="text-sm font-medium text-slate-400 hover:text-blue-400 transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href={`mailto:${profileData.contact.email}`}
                            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
                        >
                            Hire Me
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-slate-300 hover:text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Scroll Progress Bar */}
                <motion.div
                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 origin-left"
                    style={{ scaleX }}
                />
            </motion.nav>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="fixed inset-0 z-40 bg-slate-950 pt-24 px-6 md:hidden"
                >
                    <div className="flex flex-col gap-6 text-center">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.href)}
                                className="text-2xl font-bold text-slate-300 hover:text-blue-400 transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="flex justify-center gap-6 mt-8">
                            <a href={`https://${profileData.contact.github}`} className="text-slate-400 hover:text-white"><Github size={24} /></a>
                            <a href={`https://${profileData.contact.linkedin}`} className="text-slate-400 hover:text-white"><Linkedin size={24} /></a>
                            <a href={`mailto:${profileData.contact.email}`} className="text-slate-400 hover:text-white"><Mail size={24} /></a>
                        </div>
                    </div>
                </motion.div>
            )}
        </>
    );
};

export default Navbar;
