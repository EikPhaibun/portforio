"use client";

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Folder, Building2, CheckCircle2 } from 'lucide-react';
import { Project } from '@/data/portfolio-data';
import TechIcon from './TechIcon';

interface ProjectModalProps {
    project: Project;
    isOpen: boolean;
    onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
                    >
                        {/* Modal Container */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col relative"
                        >
                            {/* Header */}
                            <div className="p-6 md:p-8 border-b border-slate-800 bg-slate-900/50 sticky top-0 z-10 flex justify-between items-start gap-4">
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                                            <Folder size={24} />
                                        </div>
                                        <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                                            {project.title}
                                        </h2>
                                    </div>
                                    {project.company && (
                                        <div className="flex items-center gap-2 text-slate-400 font-medium ml-1">
                                            <Building2 size={16} />
                                            <span>{project.company}</span>
                                        </div>
                                    )}
                                </div>
                                <button
                                    onClick={onClose}
                                    className="p-2 bg-slate-800 hover:bg-slate-700 rounded-full text-slate-400 hover:text-white transition-colors"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Scrollable Content */}
                            <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar">
                                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                                    {project.description}
                                </p>

                                {/* Detailed Groups (if available) */}
                                {project.detailedGroups ? (
                                    <div className="space-y-8">
                                        {project.detailedGroups.map((group, idx) => (
                                            <div key={idx} className="bg-slate-950/50 rounded-xl p-6 border border-slate-800/50">
                                                <h3 className="text-lg font-bold text-blue-400 mb-4 flex items-center gap-2">
                                                    {group.title}
                                                </h3>
                                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                    {group.items.map((item, i) => (
                                                        <li key={i} className="flex items-start text-slate-400 text-sm">
                                                            <CheckCircle2 size={16} className="mr-2 mt-0.5 text-emerald-500 flex-shrink-0" />
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    /* Fallback to standard tasks if no details */
                                    <div className="mb-8">
                                        <h3 className="text-lg font-bold text-white mb-4">Key Responsibilities</h3>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {project.tasks.map((task, index) => (
                                                <li key={index} className="flex items-start text-slate-400">
                                                    <CheckCircle2 size={18} className="mr-2 mt-0.5 text-emerald-500 flex-shrink-0" />
                                                    <span>{task}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Tech Stack */}
                                <div className="mt-8 pt-8 border-t border-slate-800">
                                    <h3 className="text-lg font-bold text-white mb-4">Technologies Used</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.flatMap(s => s.items).map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1.5 bg-slate-800 text-slate-300 text-sm rounded-lg border border-slate-700 font-medium flex items-center gap-2"
                                            >
                                                <TechIcon name={tech} className="w-4 h-4" />
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;
