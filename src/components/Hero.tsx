"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { profileData } from '@/data/portfolio-data';
import AnimatedDev from './AnimatedDev';

const Hero = () => {
    const [showEmailOptions, setShowEmailOptions] = useState(false);

    const handleEmailChoice = (useGmail: boolean) => {
        if (useGmail) {
            window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${profileData.contact.email}`, '_blank');
        } else {
            window.location.href = `mailto:${profileData.contact.email}`;
        }
        setShowEmailOptions(false);
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-visible pt-20">

            <div className="container mx-auto px-6 relative z-10 overflow-visible">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 overflow-visible">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 text-center md:text-left overflow-visible"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            Available for new projects
                        </motion.div>

                        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight text-white">
                            <span className="text-slate-400 font-medium block text-2xl md:text-3xl mb-2">Hi, I'm</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 animate-gradient-x block">
                                {profileData.name}
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-400 mb-8 leading-relaxed max-w-2xl">
                            {profileData.role}. <br />
                            {profileData.about.split('. ')[0]}.
                        </p>

                        <div className="flex flex-wrap justify-center md:justify-start gap-4 overflow-visible">
                            <div className="relative z-[100]">
                                <button
                                    onClick={() => setShowEmailOptions(!showEmailOptions)}
                                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
                                >
                                    <Mail size={20} />
                                    Contact Me
                                    <ChevronDown size={16} className={`transition-transform ${showEmailOptions ? 'rotate-180' : ''}`} />
                                </button>

                                <AnimatePresence>
                                    {showEmailOptions && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="absolute top-full mt-2 left-0 bg-slate-800 border border-slate-700 rounded-lg shadow-xl overflow-visible z-[110] min-w-[220px]"
                                        >
                                            <button
                                                onClick={() => handleEmailChoice(true)}
                                                className="w-full px-4 py-3 text-left text-white hover:bg-slate-700 transition-colors flex items-center gap-2"
                                            >
                                                <Mail key="gmail-icon" size={16} />
                                                <span>Open with Gmail</span>
                                            </button>
                                            <button
                                                onClick={() => handleEmailChoice(false)}
                                                className="w-full px-4 py-3 text-left text-white hover:bg-slate-700 transition-colors flex items-center gap-2 border-t border-slate-700"
                                            >
                                                <Mail key="client-icon" size={16} />
                                                <span>Open with Email Client</span>
                                            </button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <a href={`https://${profileData.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-colors border border-slate-700">
                                <Linkedin size={20} />
                                LinkedIn
                            </a>
                            <a href={`https://${profileData.contact.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-colors border border-slate-700">
                                <Github size={20} />
                                GitHub
                            </a>
                        </div>
                    </motion.div>

                    {/* Visual Element - Animated Dev */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1 flex justify-center md:justify-end"
                    >
                        <AnimatedDev />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
