"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "framer-motion";
import { Mail, Linkedin, Github, ArrowDownRight, ChevronDown } from "lucide-react";
import { profileData } from "@/data/portfolio-data";
import CodeStream from "./CodeStream";

const SPECS: { v: string; label: string; note: string }[] = [
  { v: "5", label: "ERP platforms", note: "NetSuite · D365 · Odoo · ERPNext" },
  { v: "7+", label: "Unified flows", note: "one approval platform" },
  { v: "300+", label: "Active users", note: "daily factory + QA ops" },
  { v: "4", label: "Stacks shipped", note: "web · mobile · ERP · data" },
];

const TITLE_BLOCK: { k: string; v: string }[] = [
  { k: "Drawn by", v: 'Phaibun "Ikkyu" P.' },
  { k: "Discipline", v: "Full-stack · ERP · Mobile" },
  { k: "Location", v: "Bangkok, TH" },
  { k: "Sheet", v: "01 / Profile" },
  { k: "Rev", v: "2026.06" },
];

const Hero = () => {
  const reduce = useReducedMotion();
  const [emailOpen, setEmailOpen] = useState(false);
  const emailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!emailOpen) return;
    const onDown = (e: MouseEvent) => {
      if (emailRef.current && !emailRef.current.contains(e.target as Node)) setEmailOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setEmailOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [emailOpen]);

  const handleEmail = (gmail: boolean) => {
    const to = profileData.contact.email;
    if (gmail) window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${to}`, "_blank");
    else window.location.href = `mailto:${to}`;
    setEmailOpen(false);
  };

  const scrollTo = (id: string) => () =>
    document.getElementById(id)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });

  const ease = [0.16, 1, 0.3, 1] as const;
  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.08, delayChildren: reduce ? 0 : 0.06 } },
  };
  const item: Variants = {
    // Transform-only reveal: content stays visible even if the tween never runs.
    // rAF (and thus Framer tweens) pauses on hidden/headless tabs, so fading from
    // opacity:0 can ship the hero blank. Sliding keeps it visible as the default.
    hidden: { y: reduce ? 0 : 18 },
    show: { y: 0, transition: { duration: reduce ? 0 : 0.6, ease } },
  };

  return (
    <section className="relative min-h-svh overflow-hidden bg-ground">
      {/* blueprint grid ground */}
      <div className="blueprint-grid blueprint-grid-fade pointer-events-none absolute inset-0" aria-hidden="true" />

      {/* drawing frame + corner registration marks */}
      <div className="pointer-events-none absolute inset-3 border border-rule-2/70 sm:inset-5" aria-hidden="true">
        {[
          "left-0 top-0 border-l-2 border-t-2",
          "right-0 top-0 border-r-2 border-t-2",
          "left-0 bottom-0 border-l-2 border-b-2",
          "right-0 bottom-0 border-r-2 border-b-2",
        ].map((c) => (
          <span key={c} className={`absolute h-3 w-3 border-accent ${c}`} />
        ))}
      </div>

      <div className="relative mx-auto flex min-h-svh max-w-6xl flex-col px-6 pb-6 pt-24 sm:px-10 sm:pt-28">
        {/* top info strip */}
        <motion.div
          initial={reduce ? false : { y: -8 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="tech-label flex items-center justify-between border-b border-rule pb-3"
        >
          <span>Portfolio / 2026</span>
          <span className="hidden sm:inline">Enterprise Systems · Full-stack</span>
          <span>Sheet 01 — Profile</span>
        </motion.div>

        {/* main */}
        <div className="grid flex-1 items-center gap-x-10 gap-y-12 py-12 lg:grid-cols-[1.05fr_0.95fr]">
          {/* left: title block content */}
          <motion.div variants={container} initial="hidden" animate="show" className="max-w-xl">
            <motion.div variants={item} className="mb-6 inline-flex items-center gap-2.5">
              <span className="relative flex h-2 w-2">
                {!reduce && (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                )}
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="tech-label text-ink-2">Available for full-time</span>
            </motion.div>

            <motion.h1
              variants={item}
              className="text-pretty text-[clamp(2.5rem,7vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-ink"
            >
              Phaibun
              <br />
              Poonmaroeng
            </motion.h1>

            <motion.div variants={item} className="mt-7 flex items-center gap-3">
              <span className="h-px w-8 bg-accent" />
              <p className="font-mono text-sm uppercase tracking-[0.1em] text-ink-3">
                {profileData.role}
              </p>
            </motion.div>

            <motion.p variants={item} className="mt-7 max-w-[52ch] text-lg leading-relaxed text-ink-2">
              I work mostly on ERP. I customize NetSuite and Dynamics&nbsp;365, and build the React,
              Flask, and Flutter apps around them. Most of it is running now in factories and finance teams.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
              <div className="relative" ref={emailRef}>
                <button
                  onClick={() => setEmailOpen((v) => !v)}
                  aria-haspopup="menu"
                  aria-expanded={emailOpen}
                  className="inline-flex items-center gap-2 rounded-sm bg-accent-ink px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-accent-deep"
                >
                  <Mail size={17} strokeWidth={2.25} />
                  Get in touch
                  <ChevronDown
                    size={15}
                    className={`transition-transform duration-200 ${emailOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {emailOpen && (
                    <motion.div
                      role="menu"
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.16, ease }}
                      className="absolute left-0 top-full z-[var(--z-popover)] mt-2 min-w-[230px] overflow-hidden rounded-sm border border-rule-2 bg-paper shadow-[0_18px_40px_-20px_oklch(0.2_0.02_255/0.45)]"
                    >
                      <button
                        role="menuitem"
                        onClick={() => handleEmail(true)}
                        className="flex w-full items-center gap-2.5 px-4 py-3 text-left text-sm text-ink transition-colors hover:bg-paper-2"
                      >
                        <Mail size={15} className="text-accent-ink" />
                        Open in Gmail
                      </button>
                      <button
                        role="menuitem"
                        onClick={() => handleEmail(false)}
                        className="flex w-full items-center gap-2.5 border-t border-rule px-4 py-3 text-left text-sm text-ink transition-colors hover:bg-paper-2"
                      >
                        <Mail size={15} className="text-ink-3" />
                        Open in mail app
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a
                href={`https://${profileData.contact.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm border border-rule-2 bg-paper px-4 py-3 text-sm font-medium text-ink transition-colors duration-200 hover:border-ink-3 hover:bg-paper-2"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a
                href={`https://${profileData.contact.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm border border-rule-2 bg-paper px-4 py-3 text-sm font-medium text-ink transition-colors duration-200 hover:border-ink-3 hover:bg-paper-2"
              >
                <Github size={16} />
                GitHub
              </a>
            </motion.div>
          </motion.div>

          {/* right: live code panel */}
          <div className="relative flex flex-col items-center lg:items-end">
            <CodeStream />
            <p className="tech-label mt-3 self-center lg:self-end">Fig. 01 — Approval engine · live</p>
          </div>
        </div>

        {/* spec row */}
        <motion.dl
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 border-y border-rule sm:grid-cols-4"
        >
          {SPECS.map((s, i) => (
            <motion.div
              key={s.label}
              variants={item}
              className={`px-1 py-5 sm:px-5 ${i !== 0 ? "sm:border-l sm:border-rule" : ""} ${
                i % 2 !== 0 ? "border-l border-rule sm:border-l" : ""
              } ${i >= 2 ? "border-t border-rule sm:border-t-0" : ""}`}
            >
              <dt className="sr-only">{s.label}</dt>
              <dd className="flex items-baseline gap-1.5">
                <span className="text-3xl font-semibold tracking-tight text-ink tabular-nums">{s.v}</span>
                <span className="h-1.5 w-1.5 translate-y-[-2px] bg-accent" aria-hidden="true" />
              </dd>
              <p className="mt-1 text-sm font-medium text-ink">{s.label}</p>
              <p className="font-mono text-xs text-ink-3">{s.note}</p>
            </motion.div>
          ))}
        </motion.dl>

        {/* title block + scroll cue */}
        <div className="mt-auto flex flex-col gap-4 pt-6 sm:flex-row sm:items-end sm:justify-between">
          <dl className="flex flex-wrap gap-x-8 gap-y-2">
            {TITLE_BLOCK.map((f) => (
              <div key={f.k} className="flex flex-col">
                <dt className="tech-label text-[0.625rem]">{f.k}</dt>
                <dd className="font-mono text-xs text-ink-2">{f.v}</dd>
              </div>
            ))}
          </dl>
          <button
            onClick={scrollTo("experience")}
            className="group inline-flex items-center gap-2 self-start font-mono text-xs uppercase tracking-[0.14em] text-ink-3 transition-colors hover:text-accent-ink sm:self-end"
          >
            Selected work
            <ArrowDownRight
              size={15}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
