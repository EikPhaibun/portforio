"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/data/portfolio-data';
import { Folder, CheckCircle2, Building2, ArrowRight } from 'lucide-react';
import TechIcon from './TechIcon';
import ProjectModal from './ProjectModal';

interface ProjectCardProps {
    project: Project;
    index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, borderColor: '#3b82f6' }}
                className="bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-800 overflow-hidden hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300 group flex flex-col h-full relative"
            >
                <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-start gap-3 mb-4">
                        <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors flex-shrink-0">
                            <Folder size={20} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-100 group-hover:text-blue-400 transition-colors leading-tight mb-1">
                                {project.title}
                            </h3>
                            {project.company && (
                                <div className="flex items-center gap-1.5 text-slate-400 text-sm font-medium">
                                    <Building2 size={14} />
                                    <span>{project.company}</span>
                                </div>
                            )}
                        </div>
                    </div>

                    <p className="text-slate-400 mb-6 leading-relaxed text-sm line-clamp-3">
                        {project.description}
                    </p>

                    <div className="mb-6 flex-grow">
                        <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Key Responsibilities</h4>
                        <ul className="space-y-2">
                            {project.tasks.slice(0, 3).map((task, index) => (
                                <li key={index} className="flex items-start text-sm text-slate-400">
                                    <CheckCircle2 size={14} className="mr-2 mt-1 text-emerald-500 flex-shrink-0" />
                                    <span className="line-clamp-1">{task}</span>
                                </li>
                            ))}
                        </ul>

                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="mt-4 text-sm text-blue-400 font-medium hover:text-blue-300 flex items-center gap-1 group/btn"
                        >
                            View Details
                            <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                        </button>

                        {project.logo && (
                            <div className="mt-6 flex justify-center">
                                {project.logo.startsWith('/') ? (
                                    <div className="h-24 w-auto relative">
                                        <img
                                            src={project.logo}
                                            alt={`${project.title} logo`}
                                            className="h-full w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                                        />
                                    </div>
                                ) : (
                                    <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20">
                                        <TechIcon name={project.logo} className="w-12 h-12 text-blue-400" />
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    <div className="border-t border-slate-800 pt-4 mt-auto">
                        <div className="flex flex-wrap gap-2">
                            {project.techStack.flatMap(s => s.items).slice(0, 4).map((tech, i) => (
                                <span
                                    key={i}
                                    className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded-md border border-slate-700 font-medium flex items-center gap-1.5"
                                >
                                    <TechIcon name={tech} className="w-3.5 h-3.5" />
                                    {tech}
                                </span>
                            ))}
                            {project.techStack.flatMap(s => s.items).length > 4 && (
                                <span className="px-2 py-1 bg-slate-800/50 text-slate-500 text-xs rounded-md border border-slate-800 font-medium">
                                    +{project.techStack.flatMap(s => s.items).length - 4}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>

            <ProjectModal
                project={project}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
};

export default ProjectCard;
