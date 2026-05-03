"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Project } from '@/data/portfolio-data';
import { ArrowUpRight, Building2, CheckCircle2, Folder } from 'lucide-react';
import TechIcon from './TechIcon';
import ProjectModal from './ProjectModal';
import EnterpriseWorkflowArtwork from './EnterpriseWorkflowArtwork';

interface ProjectCardProps {
    project: Project;
    index: number;
}

const toProjectSlug = (title: string) =>
    title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const visibleTech = project.techStack.flatMap((stack) => stack.items);
    const highlightPairs = project.highlights?.slice(0, 2) ?? [];
    const caseStudyPreviewItems = project.caseStudy?.cardTags.slice(0, 3) ?? [];
    const projectSlug = `project-${toProjectSlug(project.title)}`;

    useEffect(() => {
        const syncFromHash = () => {
            setIsModalOpen(window.location.hash === `#${projectSlug}`);
        };

        syncFromHash();
        window.addEventListener('hashchange', syncFromHash);

        return () => {
            window.removeEventListener('hashchange', syncFromHash);
        };
    }, [projectSlug]);

    const openModal = () => {
        window.history.replaceState(null, '', `#${projectSlug}`);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        if (window.location.hash === `#${projectSlug}`) {
            window.history.replaceState(null, '', '#projects');
        }
        setIsModalOpen(false);
    };

    const modal = (
        <ProjectModal
            project={project}
            isOpen={isModalOpen}
            onClose={closeModal}
        />
    );

    if (project.caseStudy) {
        return (
            <>
                <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -4 }}
                    className="group relative flex h-full flex-col overflow-hidden rounded-[26px] border border-slate-800/80 bg-[linear-gradient(180deg,rgba(7,13,24,0.98),rgba(2,6,23,0.99))] shadow-[0_18px_54px_rgba(2,6,23,0.34)] transition-all duration-300"
                >
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-sky-400/40 via-emerald-300/35 to-transparent" />

                    <div className="relative h-[238px] overflow-hidden border-b border-slate-800/80">
                        <EnterpriseWorkflowArtwork
                            variant="card"
                            showBadge
                            badgeLabel={project.caseStudy.cardLabel}
                            theme={project.caseStudy.theme}
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.05)_0%,rgba(2,6,23,0)_42%,rgba(2,6,23,0.76)_100%)]" />
                    </div>

                    <div className="relative flex flex-1 flex-col p-6 md:p-7">
                        <div className="mb-5 flex items-center justify-between gap-4">
                            <span className="inline-flex items-center gap-2 text-xs font-medium text-slate-400">
                                <Building2 size={14} className="text-slate-500" />
                                {project.company ?? 'Selected Project'}
                            </span>
                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                                {project.category ?? 'Case Study'}
                            </span>
                        </div>

                        <div>
                            <h3 className="max-w-xl text-[1.85rem] font-semibold leading-[1.08] text-white transition-colors duration-300 group-hover:text-sky-50">
                                {project.title}
                            </h3>
                            <p className="mt-4 max-w-xl text-base leading-7 text-slate-300/88">
                                {project.caseStudy.subtitle}
                            </p>
                        </div>

                        <div className="mt-6 border-y border-slate-800/75 py-5">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                                Core Capabilities
                            </p>
                            <ul className="mt-4 space-y-3">
                                {caseStudyPreviewItems.map((tag) => (
                                    <li key={tag} className="flex items-start gap-3 text-sm leading-6 text-slate-300">
                                        <CheckCircle2 size={15} className="mt-1 shrink-0 text-emerald-300" />
                                        <span>{tag}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <button
                            onClick={openModal}
                            className="mt-auto flex w-full items-center justify-between rounded-2xl px-1 pt-6 text-left transition-colors duration-300 hover:text-sky-100"
                        >
                            <span className="text-sm font-semibold uppercase tracking-[0.16em] text-sky-100">
                                {project.ctaLabel ?? 'Open Case Study'}
                            </span>

                            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700/90 bg-slate-950/65 text-sky-200 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-sky-300/35">
                                <ArrowUpRight size={18} />
                            </span>
                        </button>
                    </div>
                </motion.article>

                {modal}
            </>
        );
    }

    return (
        <>
            <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-[30px] border border-slate-800/80 bg-[linear-gradient(180deg,rgba(15,23,42,0.94),rgba(2,6,23,0.98))] shadow-[0_18px_60px_rgba(2,6,23,0.34)] transition-all duration-300"
            >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.14),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.1),transparent_28%)] opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/40 to-transparent" />

                <div className="relative flex h-full flex-col p-6 md:p-7">
                    <div className="flex items-start justify-between gap-4">
                        <div className="space-y-3">
                            <div className="flex flex-wrap items-center gap-2">
                                <span className="rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-200/85">
                                    {project.category ?? 'Selected Project'}
                                </span>
                                {project.company && (
                                    <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-xs font-medium text-slate-400">
                                        <Building2 size={12} />
                                        {project.company}
                                    </span>
                                )}
                            </div>

                            <div>
                                <h3 className="max-w-xl text-2xl font-semibold leading-tight text-white transition-colors duration-300 group-hover:text-sky-100">
                                    {project.title}
                                </h3>
                                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300/90">
                                    {project.description}
                                </p>
                            </div>
                        </div>

                        <div className="hidden shrink-0 sm:block">
                            {project.logo && project.logo.startsWith('/') ? (
                                <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-950/70 shadow-[0_12px_30px_rgba(2,6,23,0.34)]">
                                    <Image
                                        src={project.logo}
                                        alt={`${project.title} visual`}
                                        fill
                                        className="object-contain p-2.5 opacity-90"
                                        sizes="64px"
                                    />
                                </div>
                            ) : (
                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-400/10 text-sky-200">
                                    <Folder size={28} />
                                </div>
                            )}
                        </div>
                    </div>

                    {highlightPairs.length > 0 && (
                        <div className="mt-6 grid grid-cols-2 gap-3">
                            {highlightPairs.map((highlight, itemIndex) => (
                                <div
                                    key={`${highlight.label}-${itemIndex}`}
                                    className="rounded-2xl border border-slate-800 bg-slate-950/55 p-4"
                                >
                                    <p className="text-sm font-semibold text-white">{highlight.value}</p>
                                    <p className="mt-1 text-xs leading-5 text-slate-400">{highlight.label}</p>
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="mt-6 flex-grow">
                        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                            Core Focus
                        </p>
                        <ul className="space-y-2.5">
                            {project.tasks.slice(0, 3).map((task, taskIndex) => (
                                <li key={taskIndex} className="flex items-start gap-3 text-sm leading-6 text-slate-300">
                                    <CheckCircle2 size={15} className="mt-1 shrink-0 text-emerald-400" />
                                    <span>{task}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-6 border-t border-slate-800/80 pt-5">
                        <div className="mb-5 flex flex-wrap gap-2">
                            {visibleTech.slice(0, 4).map((tech, techIndex) => (
                                <span
                                    key={`${tech}-${techIndex}`}
                                    className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2 text-xs font-medium text-slate-300"
                                >
                                    <TechIcon key={`icon-${tech}-${techIndex}`} name={tech} className="h-3.5 w-3.5" />
                                    {tech}
                                </span>
                            ))}
                            {visibleTech.length > 4 && (
                                <span className="inline-flex items-center rounded-xl border border-slate-800 bg-slate-900/50 px-3 py-2 text-xs font-medium text-slate-500">
                                    +{visibleTech.length - 4}
                                </span>
                            )}
                        </div>

                        <button
                            onClick={openModal}
                            className="flex w-full items-center justify-between rounded-[22px] border border-sky-400/20 bg-[linear-gradient(180deg,rgba(15,23,42,0.98),rgba(2,6,23,0.95))] px-4 py-4 text-left transition-all duration-300 hover:border-sky-300/35 hover:bg-[linear-gradient(180deg,rgba(15,23,42,1),rgba(8,47,73,0.92))]"
                        >
                            <div>
                                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-500">
                                    Case Study
                                </p>
                                <p className="mt-1 text-sm font-semibold text-white">
                                    {project.ctaLabel ?? 'View Details'}
                                </p>
                            </div>

                            <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-sky-300/20 bg-sky-400/10 text-sky-200 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                                <ArrowUpRight size={18} />
                            </span>
                        </button>
                    </div>
                </div>
            </motion.article>

            {modal}
        </>
    );
};

export default ProjectCard;
