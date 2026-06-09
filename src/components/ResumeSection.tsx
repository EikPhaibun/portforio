"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, GraduationCap, Award, Code2, ChevronDown, MapPin } from "lucide-react";
import { profileData } from "@/data/portfolio-data";
import TechIcon from "./TechIcon";

const SectionLabel = ({ icon: Icon, children }: { icon: React.ElementType; children: React.ReactNode }) => (
  <div className="mb-6 flex items-center gap-3">
    <Icon size={16} className="shrink-0 text-accent-ink" />
    <h3 className="font-mono text-sm font-semibold uppercase tracking-[0.14em] text-ink">{children}</h3>
    <span className="h-px flex-1 bg-rule" aria-hidden="true" />
  </div>
);

const ResumeSection = () => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const toggle = (key: string) => setExpanded((p) => ({ ...p, [key]: !p[key] }));

  return (
    <section className="border-t border-rule bg-ground py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        {/* header */}
        <div className="flex flex-col gap-5 border-b border-rule pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="tech-label">Sheet 03 — Experience &amp; expertise</p>
            <h2 className="mt-3 text-[clamp(1.9rem,4vw,2.75rem)] font-semibold tracking-[-0.02em] text-ink text-balance">
              A working record
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink-2">
            The roles, the schooling, and the tools I reach for day to day.
          </p>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-12">
          {/* left: experience + education */}
          <div className="space-y-14 lg:col-span-8">
            {/* work experience */}
            <div>
              <SectionLabel icon={Briefcase}>Work experience</SectionLabel>
              <div className="space-y-5">
                {profileData.experience.map((exp, index) => (
                  <article key={index} className="rounded-md border border-rule-2 bg-paper p-6">
                    <div className="flex flex-wrap items-start justify-between gap-3 border-b border-rule pb-4">
                      <div>
                        <h4 className="text-lg font-semibold leading-snug text-ink">{exp.role}</h4>
                        <p className="mt-1 font-mono text-sm text-accent-ink">{exp.company}</p>
                      </div>
                      {exp.location && (
                        <span className="inline-flex items-center gap-1.5 tech-label">
                          <MapPin size={12} className="text-ink-3" />
                          {exp.location}
                        </span>
                      )}
                    </div>

                    <div className="mt-4 space-y-3">
                      {exp.description.map((item, i) => {
                        if (typeof item === "string") {
                          return (
                            <div key={i} className="flex items-start gap-2.5 text-sm leading-7 text-ink-2">
                              <span className="mt-[0.6rem] h-1 w-1 shrink-0 bg-rule-2" aria-hidden="true" />
                              {item}
                            </div>
                          );
                        }
                        const key = `${index}-${i}`;
                        const isOpen = expanded[key] ?? false;
                        return (
                          <div key={i}>
                            <button
                              onClick={() => toggle(key)}
                              aria-expanded={isOpen}
                              className="flex w-full items-center justify-between gap-3 rounded-sm border border-rule-2 bg-paper-2/50 px-4 py-3 text-left transition-colors hover:border-ink-3"
                            >
                              <span className="flex items-center gap-3">
                                <span className="h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden="true" />
                                <span className="text-sm font-semibold text-ink">{item.title}</span>
                                <span className="font-mono text-[11px] text-ink-3">{item.items.length} items</span>
                              </span>
                              <ChevronDown
                                size={16}
                                className={`shrink-0 text-ink-3 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                              />
                            </button>
                            <AnimatePresence initial={false}>
                              {isOpen && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                                  className="overflow-hidden"
                                >
                                  <ul className="mt-3 space-y-2.5 border-l border-rule pl-4">
                                    {item.items.map((sub, j) => (
                                      <li key={j} className="flex items-start gap-2.5 text-sm leading-7 text-ink-2">
                                        <span className="mt-[0.6rem] h-1 w-1 shrink-0 bg-accent" aria-hidden="true" />
                                        {sub}
                                      </li>
                                    ))}
                                  </ul>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        );
                      })}
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* education */}
            <div>
              <SectionLabel icon={GraduationCap}>Education</SectionLabel>
              <div className="grid gap-5">
                {profileData.education.map((edu, index) => (
                  <article key={index} className="rounded-md border border-rule-2 bg-paper p-6">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <h4 className="max-w-md text-base font-semibold text-ink">{edu.school}</h4>
                      <span className="tech-label">{edu.period}</span>
                    </div>
                    <p className="mt-2 text-sm font-medium text-ink-2">{edu.degree}</p>
                    {edu.details && <p className="mt-1 text-sm text-ink-3">{edu.details}</p>}
                  </article>
                ))}
              </div>
            </div>
          </div>

          {/* right: skills + certificates */}
          <div className="space-y-14 lg:col-span-4">
            <div>
              <SectionLabel icon={Code2}>Technical skills</SectionLabel>
              <div className="space-y-6">
                {profileData.skills.map((group, index) => (
                  <div key={index}>
                    <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-3">{group.category}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((skill, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1.5 rounded-[3px] border border-rule-2 bg-paper px-2.5 py-1.5 font-mono text-[11px] text-ink-2"
                        >
                          <TechIcon name={skill} className="h-3 w-3 text-ink-3" />
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionLabel icon={Award}>Certificates</SectionLabel>
              <div className="overflow-hidden rounded-md border border-rule-2 bg-paper">
                {profileData.certificates.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 border-b border-rule px-4 py-3.5 last:border-0"
                  >
                    <Award size={15} className="mt-0.5 shrink-0 text-accent-ink" />
                    <span className="text-sm leading-6 text-ink-2">{cert}</span>
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
