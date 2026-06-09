"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/data/portfolio-data";
import TechIcon from "./TechIcon";
import ProjectModal from "./ProjectModal";

const toSlug = (t: string) =>
  t.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

interface ProjectCardProps {
  project: Project;
  index: number;
  featured?: boolean;
  idxPrefix?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, featured = false, idxPrefix = "PRJ" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const slug = `project-${toSlug(project.title)}`;

  useEffect(() => {
    const sync = () => setIsOpen(window.location.hash === `#${slug}`);
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, [slug]);

  const openModal = () => {
    window.history.replaceState(null, "", `#${slug}`);
    setIsOpen(true);
  };
  const closeModal = () => {
    if (window.location.hash === `#${slug}`) window.history.replaceState(null, "", "#projects");
    setIsOpen(false);
  };

  const tech = project.techStack.flatMap((s) => s.items);
  const metrics =
    project.caseStudy?.metrics.map((m) => ({ value: m.value, label: m.label })) ??
    project.highlights?.map((h) => ({ value: h.value, label: h.label })) ??
    [];
  const idxLabel = `${idxPrefix}-${String(index + 1).padStart(2, "0")}`;
  const ctaLabel = project.ctaLabel ?? (project.caseStudy ? "Open case study" : "View details");
  const modal = <ProjectModal project={project} isOpen={isOpen} onClose={closeModal} />;

  const TechChips = ({ max }: { max: number }) => (
    <div className="flex flex-wrap gap-1.5">
      {tech.slice(0, max).map((t, i) => (
        <span
          key={`${t}-${i}`}
          className="inline-flex items-center gap-1.5 rounded-[3px] border border-rule-2 bg-paper px-2.5 py-1 font-mono text-[11px] text-ink-2"
        >
          <TechIcon name={t} className="h-3 w-3 text-ink-3" />
          {t}
        </span>
      ))}
      {tech.length > max && (
        <span className="inline-flex items-center rounded-[3px] border border-rule bg-paper-2 px-2 py-1 font-mono text-[11px] text-ink-3">
          +{tech.length - max}
        </span>
      )}
    </div>
  );

  const AccentEdge = () => (
    <span
      className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100"
      aria-hidden="true"
    />
  );

  if (featured) {
    return (
      <>
        <article className="group relative flex flex-col overflow-hidden rounded-md border border-rule-2 bg-paper transition-colors duration-200 hover:border-ink-3 lg:flex-row">
          <AccentEdge />
          <div className="flex flex-col justify-between gap-7 border-b border-rule bg-paper-2/50 p-6 lg:w-[38%] lg:border-b-0 lg:border-r">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-semibold text-accent-ink">{idxLabel}</span>
              <span className="tech-label text-[0.625rem]">Flagship</span>
            </div>
            {project.logo && (
              <div className="relative h-16 w-16 overflow-hidden rounded-md border border-rule-2 bg-paper">
                <Image src={project.logo} alt={`${project.title} logo`} fill className="object-contain p-2.5" sizes="64px" />
              </div>
            )}
            <dl className="grid grid-cols-2 gap-x-4 gap-y-5">
              {metrics.slice(0, 4).map((m, i) => (
                <div key={i}>
                  <dt className="text-xl font-semibold tracking-tight text-ink tabular-nums">{m.value}</dt>
                  <dd className="mt-0.5 font-mono text-[11px] leading-tight text-ink-3">{m.label}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="flex flex-1 flex-col p-6 lg:p-7">
            <span className="tech-label">
              {project.category} · {project.company}
            </span>
            <h3 className="mt-3 text-2xl font-semibold leading-tight text-ink">{project.title}</h3>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-2">{project.description}</p>
            <div className="mt-5">
              <TechChips max={6} />
            </div>
            <button
              onClick={openModal}
              className="mt-auto flex items-center gap-2 pt-7 font-mono text-xs font-semibold uppercase tracking-[0.1em] text-ink transition-colors group-hover:text-accent-ink"
            >
              {ctaLabel}
              <ArrowUpRight
                size={16}
                className="text-accent-ink transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>
          </div>
        </article>
        {modal}
      </>
    );
  }

  return (
    <>
      <article className="group relative flex flex-col overflow-hidden rounded-md border border-rule-2 bg-paper transition-all duration-200 hover:border-ink-3 hover:shadow-[0_14px_34px_-20px_rgba(20,24,28,0.30)]">
        <AccentEdge />
        <div className="flex items-center justify-between border-b border-rule px-5 py-3">
          <span className="font-mono text-xs font-semibold text-accent-ink">{idxLabel}</span>
          <span className="tech-label text-[0.625rem]">{project.company ? project.category ?? "Project" : "Personal"}</span>
        </div>
        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-semibold leading-snug text-ink">{project.title}</h3>
            {project.logo && (
              <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded border border-rule-2 bg-paper">
                <Image src={project.logo} alt="" fill className="object-contain p-1.5" sizes="40px" />
              </div>
            )}
          </div>
          <p className="mt-2 text-sm leading-relaxed text-ink-2">{project.description}</p>
          {metrics.length > 0 && (
            <dl className="mt-4 flex gap-6">
              {metrics.slice(0, 2).map((m, i) => (
                <div key={i}>
                  <dt className="text-base font-semibold text-ink tabular-nums">{m.value}</dt>
                  <dd className="font-mono text-[10px] uppercase tracking-wide text-ink-3">{m.label}</dd>
                </div>
              ))}
            </dl>
          )}
          <div className="mt-5">
            <TechChips max={4} />
          </div>
        </div>
        <button
          onClick={openModal}
          className="flex items-center justify-between border-t border-rule px-5 py-3 text-left transition-colors group-hover:bg-paper-2/60"
        >
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.1em] text-ink">{ctaLabel}</span>
          <ArrowUpRight
            size={15}
            className="text-accent-ink transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </button>
      </article>
      {modal}
    </>
  );
};

export default ProjectCard;
