"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  Cloud,
  Factory,
  History,
  Layers3,
  LockKeyhole,
  Network,
  Server,
  ShieldCheck,
  UserRound,
  X,
} from "lucide-react";
import { Project } from "@/data/portfolio-data";
import TechIcon from "./TechIcon";

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

const tabSectionTitles: Record<string, string> = {
  role: "Areas of ownership",
  challenges: "Technical challenges",
  delivery: "What I implemented",
  architecture: "How it was built",
  "tech-stack": "Core stack",
  impact: "What this project proves",
};

const featureIconMap = { workflow: Network, lock: LockKeyhole, history: History, cloud: Cloud } as const;
const factIconMap = { factory: Factory, layers: Layers3, shield: ShieldCheck, server: Server, user: UserRound } as const;

const Tick = () => <span className="mt-[0.55rem] h-1 w-1 shrink-0 bg-accent" aria-hidden="true" />;

const Chip = ({ name }: { name: string }) => (
  <span className="inline-flex items-center gap-1.5 rounded-[3px] border border-rule-2 bg-paper px-2.5 py-1.5 font-mono text-[11px] text-ink-2">
    <TechIcon name={name} className="h-3 w-3 text-ink-3" />
    {name}
  </span>
);

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const caseStudy = project.caseStudy;
  const [activeTab, setActiveTab] = useState(caseStudy?.tabs[0]?.id ?? "overview");

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose]);

  const activeCaseTab = caseStudy?.tabs.find((t) => t.id === activeTab) ?? caseStudy?.tabs[0];

  const LogoChip = ({ size = "h-16 w-16" }: { size?: string }) =>
    project.logo && project.logo.startsWith("/") ? (
      <div className={`relative ${size} shrink-0 overflow-hidden rounded-md border border-rule-2 bg-paper`}>
        <Image src={project.logo} alt={`${project.title} logo`} fill className="object-contain p-2.5" sizes="64px" />
      </div>
    ) : null;

  const renderCaseStudy = () => {
    if (!caseStudy || !activeCaseTab) return null;
    return (
      <>
        {/* header */}
        <header className="border-b border-rule bg-paper-2/40 px-6 py-8 md:px-10 md:py-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl">
              <p className="tech-label">{caseStudy.heroLabel}</p>
              <h2 className="mt-3 text-[clamp(1.8rem,3.4vw,2.85rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-ink text-balance">
                {project.title}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-ink">{caseStudy.subtitle}</p>
              <p className="mt-5 max-w-xl text-sm leading-7 text-ink-2">{caseStudy.narrative}</p>
              <div className="mt-6 flex flex-wrap gap-1.5">
                {caseStudy.cardTags.map((tag) => (
                  <span key={tag} className="rounded-[3px] border border-rule-2 bg-paper px-2.5 py-1 font-mono text-[11px] text-ink-2">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <LogoChip size="h-20 w-20" />
          </div>
        </header>

        {/* metrics */}
        <dl className="grid grid-cols-2 border-b border-rule sm:grid-cols-4">
          {caseStudy.metrics.map((m, i) => (
            <div
              key={m.label}
              className={`px-5 py-5 ${i % 2 !== 0 ? "border-l border-rule" : ""} ${i >= 2 ? "border-t border-rule sm:border-t-0" : ""} ${i !== 0 && i % 2 === 0 ? "sm:border-l" : ""}`}
            >
              <dt className="tech-label text-[0.625rem]">{m.label}</dt>
              <dd className="mt-2 text-2xl font-semibold tabular-nums text-ink">{m.value}</dd>
              <p className="mt-1 font-mono text-[11px] leading-tight text-ink-3">{m.note}</p>
            </div>
          ))}
        </dl>

        {/* feature cards */}
        <div className="grid gap-px border-b border-rule bg-rule sm:grid-cols-2 lg:grid-cols-4">
          {caseStudy.featureCards.map((f) => {
            const Icon = featureIconMap[f.icon];
            return (
              <div key={f.title} className="bg-paper px-5 py-6">
                <Icon size={20} className="text-accent-ink" strokeWidth={1.8} />
                <h3 className="mt-4 text-base font-semibold leading-snug text-ink">{f.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink-2">{f.description}</p>
              </div>
            );
          })}
        </div>

        {/* tabs */}
        <div className="grid gap-8 px-6 py-8 md:px-10 md:py-10 lg:grid-cols-[190px_minmax(0,1fr)_250px]">
          <aside>
            <p className="tech-label mb-3">Sections</p>
            <div className="space-y-1">
              {caseStudy.tabs.map((tab) => {
                const active = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex w-full items-center gap-2.5 rounded-sm px-3 py-2.5 text-left text-sm transition-colors ${
                      active ? "bg-paper-2 font-semibold text-ink" : "text-ink-3 hover:bg-paper-2/60 hover:text-ink-2"
                    }`}
                  >
                    <span className={`h-1.5 w-1.5 shrink-0 ${active ? "bg-accent" : "bg-rule-2"}`} aria-hidden="true" />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </aside>

          <section className="min-w-0">
            <h3 className="text-2xl font-semibold text-ink">{activeCaseTab.title}</h3>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-ink-2">{activeCaseTab.summary}</p>

            {activeCaseTab.bullets && activeCaseTab.bullets.length > 0 && (
              <div className="mt-7">
                <p className="tech-label mb-4">{tabSectionTitles[activeCaseTab.id] ?? "Highlights"}</p>
                <ul className="space-y-3">
                  {activeCaseTab.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-7 text-ink-2">
                      <Tick />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeCaseTab.id === "tech-stack" && (
              <div className="mt-7 space-y-5">
                {project.techStack.map((g) => (
                  <div key={g.category}>
                    <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-3">{g.category}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {g.items.map((tech) => (
                        <Chip key={`${g.category}-${tech}`} name={tech} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeCaseTab.id === "impact" && project.spotlight && (
              <div className="mt-8 rounded-md border border-rule-2 bg-paper-2/50 p-5">
                <p className="tech-label">Most complex flow</p>
                <h4 className="mt-2 text-lg font-semibold text-ink">{project.spotlight.title}</h4>
                <p className="mt-2 text-sm leading-7 text-ink-2">{project.spotlight.description}</p>
                <ul className="mt-4 space-y-2.5">
                  {project.spotlight.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-7 text-ink-2">
                      <Tick />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>

          <aside className="lg:sticky lg:top-20 lg:self-start">
            <div className="rounded-md border border-rule-2 bg-paper-2/40 p-5">
              <p className="tech-label">Engineering snapshot</p>
              <dl className="mt-4 space-y-3.5">
                {caseStudy.facts.map((fact) => {
                  const Icon = factIconMap[fact.icon];
                  return (
                    <div key={fact.label} className="flex items-start gap-3 border-t border-rule pt-3.5 first:border-0 first:pt-0">
                      <Icon size={15} className="mt-0.5 shrink-0 text-ink-3" strokeWidth={1.8} />
                      <div className="min-w-0 flex-1">
                        <dt className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-3">{fact.label}</dt>
                        <dd className="mt-0.5 text-sm font-medium text-ink">{fact.value}</dd>
                      </div>
                    </div>
                  );
                })}
              </dl>
            </div>
          </aside>
        </div>
      </>
    );
  };

  const renderDefault = () => (
    <div className="px-6 py-8 md:px-10 md:py-10">
      <header className="flex flex-col gap-8 border-b border-rule pb-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-2xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="tech-label">{project.category ?? "Project"}</span>
            {project.company && (
              <span className="inline-flex items-center gap-1.5 rounded-[3px] border border-rule-2 bg-paper px-2.5 py-1 font-mono text-[11px] text-ink-2">
                <Building2 size={12} className="text-ink-3" />
                {project.company}
              </span>
            )}
          </div>
          <h2 className="mt-4 text-[clamp(1.8rem,3.4vw,2.85rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-ink text-balance">
            {project.title}
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-ink-2">{project.modalSummary ?? project.description}</p>
        </div>
        <LogoChip size="h-20 w-20" />
      </header>

      {project.highlights && project.highlights.length > 0 && (
        <dl className="grid grid-cols-2 border-b border-rule sm:grid-cols-4">
          {project.highlights.map((h, i) => (
            <div key={`${h.label}-${i}`} className={`px-1 py-5 sm:px-5 ${i !== 0 ? "sm:border-l sm:border-rule" : ""} ${i % 2 !== 0 ? "border-l border-rule sm:border-l" : ""} ${i >= 2 ? "border-t border-rule sm:border-t-0" : ""}`}>
              <dd className="text-xl font-semibold tabular-nums text-ink">{h.value}</dd>
              <dt className="mt-1 font-mono text-[11px] leading-tight text-ink-3">{h.label}</dt>
            </div>
          ))}
        </dl>
      )}

      <div className="grid gap-8 pt-8 lg:grid-cols-[minmax(0,1.6fr)_260px]">
        <div className="space-y-5">
          {project.detailedGroups
            ? project.detailedGroups.map((group) => (
                <section key={group.title} className="rounded-md border border-rule-2 bg-paper p-6">
                  <h3 className="text-lg font-semibold text-ink">{group.title}</h3>
                  {group.summary && <p className="mt-3 max-w-2xl text-sm leading-7 text-ink-2">{group.summary}</p>}
                  <ul className="mt-5 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-7 text-ink-2">
                        <Tick />
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              ))
            : (
                <section className="rounded-md border border-rule-2 bg-paper p-6">
                  <p className="tech-label">Project scope</p>
                  <h3 className="mt-2 text-lg font-semibold text-ink">Key responsibilities</h3>
                  <ul className="mt-5 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                    {project.tasks.map((task) => (
                      <li key={task} className="flex items-start gap-3 text-sm leading-7 text-ink-2">
                        <Tick />
                        {task}
                      </li>
                    ))}
                  </ul>
                </section>
              )}
        </div>

        <aside className="space-y-5 lg:sticky lg:top-20 lg:self-start">
          {project.spotlight && (
            <section className="rounded-md border border-rule-2 bg-paper-2/50 p-5">
              <p className="tech-label">Featured flow</p>
              <h3 className="mt-2 text-base font-semibold text-ink">{project.spotlight.title}</h3>
              <p className="mt-2 text-sm leading-7 text-ink-2">{project.spotlight.description}</p>
              <ul className="mt-4 space-y-2.5">
                {project.spotlight.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-7 text-ink-2">
                    <Tick />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section className="rounded-md border border-rule-2 bg-paper p-5">
            <p className="tech-label">Technology stack</p>
            <div className="mt-4 space-y-4">
              {project.techStack.map((g) => (
                <div key={g.category}>
                  <p className="mb-2.5 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-3">{g.category}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {g.items.map((tech) => (
                      <Chip key={`${g.category}-${tech}`} name={tech} />
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
          className="fixed inset-0 z-[var(--z-overlay)] overflow-y-auto bg-ink/50 backdrop-blur-sm"
        >
          <div className="flex min-h-full items-start justify-center px-3 pb-6 pt-20 md:px-6 md:pt-24 xl:items-center xl:py-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl overflow-hidden rounded-md border border-rule-2 bg-paper shadow-[0_40px_120px_-30px_rgba(20,24,28,0.5)]"
            >
              <div className="sticky top-0 z-20 flex items-center justify-between gap-4 border-b border-rule bg-paper/95 px-5 py-3 backdrop-blur">
                <span className="tech-label inline-flex items-center gap-2">
                  <ArrowUpRight size={13} className="text-accent" />
                  {caseStudy?.cardLabel ?? project.category ?? "Project"} · case study
                </span>
                <button
                  onClick={onClose}
                  aria-label="Close case study"
                  className="flex h-9 w-9 items-center justify-center rounded-sm border border-rule-2 bg-paper text-ink-2 transition-colors hover:border-ink-3 hover:text-ink"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="max-h-[84vh] overflow-y-auto custom-scrollbar">
                {caseStudy ? renderCaseStudy() : renderDefault()}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
