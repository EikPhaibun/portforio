"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Code, ChevronDown, ChevronUp } from 'lucide-react';
import { profileData } from '@/data/portfolio-data';
import TechIcon from './TechIcon';

const ResumeSection = () => {
    const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

    const toggleSection = (key: string) => {
        setExpandedSections(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    return (
        <section className="py-24 relative z-10">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Resume & Expertise</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        A timeline of my professional journey and technical capabilities.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Left Column: Experience & Education */}
                    <div className="lg:col-span-8 space-y-12">

                        {/* Experience */}
                        <div>
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                                    <Briefcase size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-white">Work Experience</h3>
                            </div>

                            <div className="space-y-8 border-l-2 border-slate-800 ml-3 pl-8 relative">
                                {profileData.experience.map((exp, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="relative"
                                    >
                                        <span className="absolute -left-[41px] top-0 w-5 h-5 rounded-full border-4 border-slate-950 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                                        <div className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors">
                                            <div className="flex flex-wrap justify-between items-start mb-4">
                                                <div>
                                                    <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                                                    <p className="text-blue-400 font-medium">{exp.company}</p>
                                                </div>
                                                <span className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-full font-medium border border-slate-700">
                                                    {exp.period}
                                                </span>
                                            </div>
                                            <div className="space-y-3">
                                                {exp.description.map((item, i) => {
                                                    if (typeof item === 'string') {
                                                        return (
                                                            <div key={i} className="text-slate-400 text-sm leading-relaxed flex items-start">
                                                                <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-slate-600 rounded-full flex-shrink-0" />
                                                                {item}
                                                            </div>
                                                        );
                                                    } else {
                                                        const sectionKey = `${index}-${i}`;
                                                        const isExpanded = expandedSections[sectionKey] ?? false;

                                                        return (
                                                            <div key={i} className="mt-3 first:mt-0">
                                                                <button
                                                                    onClick={() => toggleSection(sectionKey)}
                                                                    className="w-full text-left group"
                                                                >
                                                                    <div className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 hover:border-blue-500/40 transition-all">
                                                                        <div className="flex items-center gap-3">
                                                                            <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                                                                            <h5 className="text-slate-100 font-bold text-sm">
                                                                                {item.title}
                                                                            </h5>
                                                                            <span className="px-2 py-0.5 bg-blue-500/20 text-blue-300 text-xs rounded-full font-medium">
                                                                                {item.items.length} items
                                                                            </span>
                                                                        </div>
                                                                        <motion.div
                                                                            animate={{ rotate: isExpanded ? 180 : 0 }}
                                                                            transition={{ duration: 0.2 }}
                                                                        >
                                                                            <ChevronDown size={18} className="text-slate-400 group-hover:text-blue-400 transition-colors" />
                                                                        </motion.div>
                                                                    </div>
                                                                </button>

                                                                <AnimatePresence>
                                                                    {isExpanded && (
                                                                        <motion.div
                                                                            initial={{ height: 0, opacity: 0 }}
                                                                            animate={{ height: "auto", opacity: 1 }}
                                                                            exit={{ height: 0, opacity: 0 }}
                                                                            transition={{ duration: 0.3 }}
                                                                            className="overflow-hidden"
                                                                        >
                                                                            <ul className="space-y-2 mt-3 ml-2 border-l-2 border-slate-800 pl-4">
                                                                                {item.items.map((subItem, j) => (
                                                                                    <motion.li
                                                                                        key={j}
                                                                                        initial={{ x: -10, opacity: 0 }}
                                                                                        animate={{ x: 0, opacity: 1 }}
                                                                                        transition={{ delay: j * 0.05 }}
                                                                                        className="text-slate-400 text-sm leading-relaxed flex items-start group/item hover:text-slate-300 transition-colors"
                                                                                    >
                                                                                        <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-slate-600 rounded-full flex-shrink-0 group-hover/item:bg-blue-400 transition-colors" />
                                                                                        {subItem}
                                                                                    </motion.li>
                                                                                ))}
                                                                            </ul>
                                                                        </motion.div>
                                                                    )}
                                                                </AnimatePresence>
                                                            </div>
                                                        );
                                                    }
                                                })}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Education */}
                        <div>
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-400">
                                    <GraduationCap size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-white">Education</h3>
                            </div>

                            <div className="grid gap-6">
                                {profileData.education.map((edu, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-slate-800"
                                    >
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="text-lg font-bold text-white">{edu.school}</h4>
                                            <span className="text-sm text-slate-500">{edu.period}</span>
                                        </div>
                                        <p className="text-slate-300 font-medium mb-1">{edu.degree}</p>
                                        <p className="text-slate-500 text-sm">{edu.details}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Skills & Certificates */}
                    <div className="lg:col-span-4 space-y-12">

                        {/* Skills */}
                        <div>
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400">
                                    <Code size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-white">Technical Skills</h3>
                            </div>

                            <div className="space-y-8">
                                {profileData.skills.map((skillGroup, index) => (
                                    <div key={index}>
                                        <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">
                                            {skillGroup.category}
                                        </h4>
                                        <div className="flex flex-wrap gap-3">
                                            {skillGroup.items.map((skill, i) => (
                                                <motion.div
                                                    key={i}
                                                    whileHover={{ scale: 1.05 }}
                                                    className="flex items-center gap-3 px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl hover:bg-slate-800 hover:border-slate-600 transition-all cursor-default group"
                                                >
                                                    <TechIcon key={`tech-${skill}-${i}`} name={skill} className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                                                    <span className="text-slate-300 text-sm font-medium group-hover:text-white transition-colors">
                                                        {skill}
                                                    </span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Certificates */}
                        <div>
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-3 bg-orange-500/10 rounded-lg text-orange-400">
                                    <Award size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-white">Certificates</h3>
                            </div>

                            <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-800 overflow-hidden">
                                {profileData.certificates.map((cert, index) => (
                                    <div
                                        key={index}
                                        className="p-4 border-b border-slate-800 last:border-0 flex items-start gap-3"
                                    >
                                        <Award size={18} className="text-orange-400 mt-1 flex-shrink-0" />
                                        <span className="text-slate-300 text-sm font-medium">{cert}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default ResumeSection;
