"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import {
    ArrowRight,
    Building2,
    CheckCircle2,
    Cloud,
    Clock3,
    Factory,
    Folder,
    History,
    Layers3,
    LockKeyhole,
    Network,
    Server,
    ShieldCheck,
    UserRound,
    Users,
    X,
} from 'lucide-react';
import { Project } from '@/data/portfolio-data';
import TechIcon from './TechIcon';
import EnterpriseWorkflowArtwork from './EnterpriseWorkflowArtwork';

interface ProjectModalProps {
    project: Project;
    isOpen: boolean;
    onClose: () => void;
}

const tabSectionTitles: Record<string, string> = {
    role: 'Areas of ownership',
    challenges: 'Technical challenges',
    delivery: 'What I implemented',
    architecture: 'How it was built',
    'tech-stack': 'Core stack',
    impact: 'What this project proves',
};

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
    const defaultTabId = project.caseStudy?.tabs[0]?.id ?? 'overview';
    const [activeTab, setActiveTab] = useState(defaultTabId);

    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.body.style.overflow = 'hidden';
            setActiveTab(project.caseStudy?.tabs[0]?.id ?? 'overview');
            window.addEventListener('keydown', handleEscape);
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
            window.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen, onClose, project.caseStudy?.tabs]);

    const caseStudy = project.caseStudy;
    const activeCaseTab =
        caseStudy?.tabs.find((tab) => tab.id === activeTab) ?? caseStudy?.tabs[0];

    const metricIconMap = {
        clock: Clock3,
        shield: ShieldCheck,
        users: Users,
        check: CheckCircle2,
    } as const;

    const featureIconMap = {
        workflow: Network,
        lock: LockKeyhole,
        history: History,
        cloud: Cloud,
    } as const;

    const factIconMap = {
        factory: Factory,
        layers: Layers3,
        shield: ShieldCheck,
        server: Server,
        user: UserRound,
    } as const;

    const renderCaseStudyModal = () => {
        if (!caseStudy || !activeCaseTab) {
            return null;
        }

        return (
            <div className="max-h-[92vh] overflow-y-auto px-4 pb-4 pt-14 md:px-7 md:pb-7 md:pt-7 custom-scrollbar">
                <section className="relative min-h-[400px] overflow-hidden rounded-[30px] border border-slate-800/80 bg-[linear-gradient(180deg,rgba(9,15,28,0.98),rgba(2,6,23,0.98))]">
                    <EnterpriseWorkflowArtwork
                        variant="hero"
                        badgeLabel={caseStudy.cardLabel}
                        theme={caseStudy.theme}
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,9,18,0.96)_0%,rgba(4,9,18,0.78)_38%,rgba(4,9,18,0.32)_66%,rgba(4,9,18,0.08)_100%)]" />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.06)_0%,rgba(15,23,42,0.12)_100%)]" />

                    <div className="relative z-10 px-6 py-7 md:px-10 md:py-10 xl:px-12 xl:py-12">
                        <div className="grid items-end gap-8 xl:grid-cols-[minmax(0,1fr)_330px]">
                            <div className="max-w-[640px]">
                                <p className="text-[1.05rem] font-medium tracking-[0.01em] text-sky-200/80">
                                    {caseStudy.heroLabel}
                                </p>
                                <h2 className="mt-4 text-4xl font-semibold leading-[0.98] text-white md:text-[4rem]">
                                    {project.title}
                                </h2>
                                <p className="mt-7 max-w-[520px] text-xl leading-[1.45] text-slate-200 md:text-[2rem]">
                                    {caseStudy.subtitle}
                                </p>
                                <p className="mt-8 max-w-[640px] text-base leading-8 text-slate-300/90 md:text-[1.15rem]">
                                    {caseStudy.narrative}
                                </p>
                            </div>

                            {project.logo && project.logo.startsWith('/') && (
                                <div className="w-full max-w-[330px] rounded-[26px] border border-white/10 bg-slate-950/68 p-4 shadow-[0_22px_50px_rgba(2,6,23,0.36)] backdrop-blur-md xl:justify-self-end">
                                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                                        Project Identity
                                    </p>
                                    <div className="relative mt-4 aspect-[20/7] overflow-hidden rounded-[18px] bg-white">
                                        <Image
                                            src={project.logo}
                                            alt={`${project.title} identity`}
                                            fill
                                            className="object-contain p-4"
                                            sizes="(max-width: 1280px) 300px, 330px"
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                <section className="mt-6 overflow-hidden rounded-[28px] border border-slate-800/80 bg-slate-900/58">
                    <div className="grid divide-y divide-slate-800/80 xl:grid-cols-4 xl:divide-x xl:divide-y-0">
                        {caseStudy.metrics.map((metric) => {
                            const Icon = metricIconMap[metric.icon];

                            return (
                                <div key={metric.label} className="flex items-start gap-4 px-6 py-6">
                                    <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-emerald-400/15 bg-emerald-400/6 text-emerald-300">
                                        <Icon size={23} strokeWidth={1.8} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-400">{metric.label}</p>
                                        <p className="mt-2 text-4xl font-semibold leading-none text-white">
                                            {metric.value}
                                        </p>
                                        <p className="mt-2 text-sm leading-6 text-slate-400">
                                            {metric.note}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                <section className="mt-6 overflow-hidden rounded-[28px] border border-slate-800/80 bg-slate-900/58">
                    <div className="grid divide-y divide-slate-800/80 xl:grid-cols-4 xl:divide-x xl:divide-y-0">
                        {caseStudy.featureCards.map((feature) => {
                            const Icon = featureIconMap[feature.icon];

                            return (
                                <div key={feature.title} className="px-6 py-7">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-700/80 bg-slate-950/70 text-emerald-300">
                                        <Icon size={22} strokeWidth={1.8} />
                                    </div>
                                    <h3 className="mt-5 text-[1.7rem] font-semibold leading-tight text-white">
                                        {feature.title}
                                    </h3>
                                    <p className="mt-3 text-base leading-7 text-slate-300/90">
                                        {feature.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </section>

                <div className="mt-6 grid gap-6 xl:grid-cols-[220px_minmax(0,1fr)_290px]">
                    <aside className="rounded-[28px] border border-slate-800/80 bg-slate-900/58 p-3">
                        <div className="space-y-1">
                            {caseStudy.tabs.map((tab) => {
                                const isActive = activeTab === tab.id;

                                return (
                                    <button
                                        key={tab.id}
                                        type="button"
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`flex w-full items-center rounded-[18px] px-4 py-4 text-left text-[1.05rem] transition-all duration-200 ${
                                            isActive
                                                ? 'border border-sky-400/20 bg-[linear-gradient(90deg,rgba(37,99,235,0.18),rgba(15,23,42,0.9))] text-white shadow-[inset_3px_0_0_0_rgba(96,165,250,1)]'
                                                : 'text-slate-400 hover:bg-slate-950/55 hover:text-slate-200'
                                        }`}
                                    >
                                        {tab.label}
                                    </button>
                                );
                            })}
                        </div>
                    </aside>

                    <section className="rounded-[28px] border border-slate-800/80 bg-slate-900/58 p-6 md:p-8">
                        <h3 className="text-3xl font-semibold text-white md:text-[2.5rem]">
                            {activeCaseTab.title}
                        </h3>
                        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300/90 md:text-[1.12rem]">
                            {activeCaseTab.summary}
                        </p>

                        {activeCaseTab.bullets && activeCaseTab.bullets.length > 0 && (
                            <div className="mt-9">
                                <h4 className="text-xl font-semibold text-white">
                                    {tabSectionTitles[activeCaseTab.id] ?? 'Highlights'}
                                </h4>
                                <div className="mt-5 space-y-4">
                                    {activeCaseTab.bullets.map((item) => (
                                        <div
                                            key={item}
                                            className="flex items-start gap-3 rounded-2xl border border-slate-800/80 bg-slate-950/52 px-4 py-4"
                                        >
                                            <CheckCircle2 size={18} className="mt-1 shrink-0 text-emerald-300" />
                                            <p className="text-sm leading-7 text-slate-200/95 md:text-base">
                                                {item}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeCaseTab.id === 'tech-stack' && (
                            <div className="mt-9 space-y-6">
                                {project.techStack.map((stackGroup) => (
                                    <div key={stackGroup.category}>
                                        <h4 className="text-xl font-semibold text-white">
                                            {stackGroup.category}
                                        </h4>
                                        <div className="mt-4 flex flex-wrap gap-3">
                                            {stackGroup.items.map((tech) => (
                                                <span
                                                    key={`${stackGroup.category}-${tech}`}
                                                    className="inline-flex items-center gap-2 rounded-2xl border border-slate-700/80 bg-slate-950/58 px-4 py-3 text-sm font-medium text-slate-200"
                                                >
                                                    <TechIcon name={tech} className="h-4 w-4" />
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {activeCaseTab.id === 'impact' && project.spotlight && (
                            <div className="mt-9 rounded-[26px] border border-sky-400/18 bg-[linear-gradient(180deg,rgba(7,89,133,0.16),rgba(2,6,23,0.88))] p-6">
                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-200/80">
                                    Complexity Highlight
                                </p>
                                <h4 className="mt-3 text-2xl font-semibold text-white">
                                    {project.spotlight.title}
                                </h4>
                                <p className="mt-3 text-base leading-7 text-slate-300/90">
                                    {project.spotlight.description}
                                </p>
                                <div className="mt-5 space-y-3">
                                    {project.spotlight.items.map((item) => (
                                        <div
                                            key={item}
                                            className="rounded-2xl border border-slate-800/80 bg-slate-950/48 px-4 py-3 text-sm leading-7 text-slate-200"
                                        >
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </section>

                    <aside className="xl:sticky xl:top-4 xl:self-start">
                        <section className="rounded-[28px] border border-slate-800/80 bg-slate-900/58 p-6">
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                                Engineering Snapshot
                            </p>
                            <div className="mt-5 space-y-4">
                                {caseStudy.facts.map((fact) => {
                                    const Icon = factIconMap[fact.icon];

                                    return (
                                        <div
                                            key={fact.label}
                                            className="grid grid-cols-[22px_minmax(0,1fr)] items-start gap-4 rounded-2xl border border-slate-800/80 bg-slate-950/56 px-4 py-4"
                                        >
                                            <Icon size={18} className="mt-0.5 text-slate-400" strokeWidth={1.8} />
                                            <div className="flex items-start justify-between gap-4">
                                                <p className="text-sm text-slate-400">{fact.label}</p>
                                                <p className="text-right text-sm font-medium text-slate-100">
                                                    {fact.value}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </section>
                    </aside>
                </div>
            </div>
        );
    };

    const renderDefaultModal = () => (
        <div className="max-h-[92vh] overflow-y-auto px-4 pb-4 pt-14 md:px-7 md:pb-7 md:pt-7 custom-scrollbar">
            <section className="relative overflow-hidden rounded-[30px] border border-slate-800/80 bg-[linear-gradient(180deg,rgba(15,23,42,0.9),rgba(3,7,18,0.96))] p-6 md:p-8">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.16),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.1),transparent_28%)]" />

                <div className="relative grid gap-8 xl:grid-cols-[minmax(0,1.5fr)_320px]">
                    <div>
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-200/85">
                                {project.category ?? 'Case Study'}
                            </span>
                            {project.company && (
                                <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-700/80 bg-slate-950/55 px-3 py-1 text-xs font-medium text-slate-400">
                                    <Building2 size={12} />
                                    {project.company}
                                </span>
                            )}
                        </div>

                        <h2 className="mt-6 max-w-4xl text-3xl font-semibold leading-tight text-white md:text-5xl md:leading-[1.02]">
                            {project.title}
                        </h2>

                        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
                            {project.modalSummary ?? project.description}
                        </p>
                    </div>

                    <div className="rounded-[28px] border border-white/10 bg-slate-950/55 p-5 shadow-[0_18px_45px_rgba(2,6,23,0.24)]">
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                                    Project Snapshot
                                </p>
                                <h3 className="mt-2 text-lg font-semibold text-white">
                                    Project scope
                                </h3>
                            </div>

                            {project.logo && project.logo.startsWith('/') ? (
                                <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-900/70">
                                    <Image
                                        src={project.logo}
                                        alt={`${project.title} visual`}
                                        fill
                                        className="object-contain p-2.5 opacity-90"
                                        sizes="56px"
                                    />
                                </div>
                            ) : (
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-400/10 text-sky-200">
                                    <Folder size={24} />
                                </div>
                            )}
                        </div>

                        <div className="mt-5 space-y-3">
                            {project.tasks.slice(0, 4).map((task, index) => (
                                <div key={index} className="flex items-start gap-3 rounded-2xl border border-slate-800/80 bg-slate-900/50 px-4 py-3">
                                    <ArrowRight size={15} className="mt-1 shrink-0 text-sky-300" />
                                    <p className="text-sm leading-6 text-slate-300">{task}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {project.highlights && project.highlights.length > 0 && (
                    <div className="relative mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                        {project.highlights.map((highlight, index) => (
                            <div
                                key={`${highlight.label}-${index}`}
                                className="rounded-[22px] border border-slate-800/80 bg-slate-950/45 p-4"
                            >
                                <p className="text-lg font-semibold text-white">{highlight.value}</p>
                                <p className="mt-1 text-sm leading-6 text-slate-400">{highlight.label}</p>
                            </div>
                        ))}
                    </div>
                )}
            </section>

            <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1.65fr)_320px]">
                <div className="space-y-6">
                    {project.detailedGroups ? (
                        project.detailedGroups.map((group) => (
                            <section
                                key={group.title}
                                className="rounded-[28px] border border-slate-800/80 bg-slate-900/55 p-6 md:p-7"
                            >
                                <div className="max-w-3xl">
                                    <h3 className="text-2xl font-semibold text-white">
                                        {group.title}
                                    </h3>
                                    {group.summary && (
                                        <p className="mt-4 text-sm leading-7 text-slate-300 md:text-base">
                                            {group.summary}
                                        </p>
                                    )}
                                </div>

                                <div className="mt-6 grid gap-3 md:grid-cols-2">
                                    {group.items.map((item) => (
                                        <div
                                            key={`${group.title}-${item}`}
                                            className="rounded-2xl border border-slate-800 bg-slate-950/55 p-4"
                                        >
                                            <div className="flex items-start gap-3">
                                                <CheckCircle2 size={16} className="mt-1 shrink-0 text-emerald-400" />
                                                <p className="text-sm leading-6 text-slate-300">
                                                    {item}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        ))
                    ) : (
                        <section className="rounded-[28px] border border-slate-800/80 bg-slate-900/55 p-6 md:p-7">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                                Project Scope
                            </p>
                            <h3 className="mt-3 text-2xl font-semibold text-white">
                                Key Responsibilities
                            </h3>
                            <div className="mt-6 grid gap-3 md:grid-cols-2">
                                {project.tasks.map((task) => (
                                    <div
                                        key={task}
                                        className="rounded-2xl border border-slate-800 bg-slate-950/55 p-4"
                                    >
                                        <div className="flex items-start gap-3">
                                            <CheckCircle2 size={16} className="mt-1 shrink-0 text-emerald-400" />
                                            <p className="text-sm leading-6 text-slate-300">{task}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                <aside className="space-y-5 xl:sticky xl:top-4 xl:self-start">
                    {project.spotlight && (
                        <section className="rounded-[26px] border border-sky-400/20 bg-[linear-gradient(180deg,rgba(8,47,73,0.22),rgba(15,23,42,0.86))] p-5">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-200/80">
                                Featured Flow
                            </p>
                            <h3 className="mt-3 text-xl font-semibold text-white">
                                {project.spotlight.title}
                            </h3>
                            <p className="mt-3 text-sm leading-7 text-slate-300">
                                {project.spotlight.description}
                            </p>

                            <div className="mt-5 space-y-3">
                                {project.spotlight.items.map((item) => (
                                    <div
                                        key={`${project.spotlight?.title}-${item}`}
                                        className="rounded-2xl border border-sky-400/10 bg-slate-950/45 px-4 py-3"
                                    >
                                        <p className="text-sm leading-6 text-slate-200">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    <section className="rounded-[26px] border border-slate-800/80 bg-slate-900/55 p-5">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                            Technology Stack
                        </p>

                        <div className="mt-4 space-y-4">
                            {project.techStack.map((stackGroup) => (
                                <div key={stackGroup.category}>
                                    <h4 className="text-sm font-semibold text-white">
                                        {stackGroup.category}
                                    </h4>
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {stackGroup.items.map((tech) => (
                                            <span
                                                key={`${stackGroup.category}-${tech}`}
                                                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-950/55 px-3 py-2 text-xs font-medium text-slate-300"
                                            >
                                                <TechIcon name={tech} className="h-3.5 w-3.5" />
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </aside>
            </div>
        </div>
    );

    return (
        <AnimatePresence initial={false}>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 z-[60] overflow-y-auto bg-slate-950/88 backdrop-blur-md"
                >
                    <div className="flex min-h-full items-start justify-center px-4 pb-4 pt-24 md:px-6 md:pb-6 md:pt-28 xl:items-center xl:p-6">
                        <motion.div
                            initial={{ opacity: 0, y: 24, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.98 }}
                            transition={{ duration: 0.28, ease: 'easeOut' }}
                            onClick={(event) => event.stopPropagation()}
                            className="relative w-full max-w-[1280px] overflow-hidden rounded-[34px] border border-slate-800/80 bg-[linear-gradient(180deg,rgba(6,13,25,0.98),rgba(2,6,23,0.98))] shadow-[0_40px_140px_rgba(2,6,23,0.72)]"
                        >
                            <button
                                onClick={onClose}
                                className="absolute right-5 top-5 z-20 flex h-12 w-12 items-center justify-center rounded-2xl border border-red-500/45 bg-red-500/12 text-red-200 shadow-[0_12px_28px_rgba(239,68,68,0.18)] transition-colors hover:border-red-400 hover:bg-red-500/18 hover:text-white"
                                aria-label="Close project case study"
                            >
                                <X size={19} />
                            </button>

                            {caseStudy ? renderCaseStudyModal() : renderDefaultModal()}
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;
