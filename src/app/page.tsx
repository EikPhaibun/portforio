"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import ResumeSection from '@/components/ResumeSection';
import ContactCTA from '@/components/ContactCTA';
import VisitorCounter from '@/components/VisitorCounter';
import { portfolioData } from '@/data/portfolio-data';

export default function Home() {
  const professional = portfolioData.filter((p) => p.company === "MV Solution Co., Ltd");
  const personal = portfolioData.filter((p) => p.company !== "MV Solution Co., Ltd");

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar />

      <div id="home">
        <Hero />
      </div>

      <div id="experience">
        <ResumeSection />
      </div>

      <section id="projects" className="relative border-y border-rule bg-ground py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          {/* section header */}
          <div className="flex flex-col gap-5 border-b border-rule pb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="tech-label">Sheet 02 — Selected work</p>
              <h2 className="mt-3 text-[clamp(1.9rem,4vw,2.75rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-ink text-balance">
                Systems shipped in production
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-ink-2">
              Enterprise platforms, ERP customization, and mobile apps — built end to end and running in
              real organizations.
            </p>
          </div>

          {/* professional */}
          <div className="mt-12">
            <div className="mb-6 flex items-center gap-4">
              <span className="tech-label">Professional · MV Solution</span>
              <span className="h-px flex-1 bg-rule" aria-hidden="true" />
              <span className="font-mono text-xs tabular-nums text-ink-3">
                {professional.length.toString().padStart(2, "0")}
              </span>
            </div>
            <div className="grid gap-5">
              {professional[0] && <ProjectCard project={professional[0]} index={0} featured />}
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {professional.slice(1).map((p, i) => (
                  <ProjectCard key={p.title} project={p} index={i + 1} />
                ))}
              </div>
            </div>
          </div>

          {/* personal */}
          <div className="mt-16">
            <div className="mb-6 flex items-center gap-4">
              <span className="tech-label">Personal · Experiments</span>
              <span className="h-px flex-1 bg-rule" aria-hidden="true" />
              <span className="font-mono text-xs tabular-nums text-ink-3">
                {personal.length.toString().padStart(2, "0")}
              </span>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {personal.map((p, i) => (
                <ProjectCard key={p.title} project={p} index={i} idxPrefix="LAB" />
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
      <VisitorCounter />

      <footer className="bg-slate-950 text-slate-500 py-12 border-t border-slate-900 relative z-10">
        <div className="container mx-auto px-6 text-center">
          <p>© {new Date().getFullYear()} Phaibun Poonmaroeng. Built with Next.js, Tailwind & Framer Motion.</p>
        </div>
      </footer>
    </main>
  );
}
