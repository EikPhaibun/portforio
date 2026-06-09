"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { profileData } from "@/data/portfolio-data";

const NAV_LINKS = [
  { name: "Profile", href: "#home" },
  { name: "Experience", href: "#experience" },
  { name: "Work", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

/* Registration crosshair — a drafting mark used as the brand glyph. */
const RegMark = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 16 16" className={className} fill="none" aria-hidden="true">
    <rect x="0.5" y="0.5" width="15" height="15" stroke="currentColor" />
    <path d="M8 2.5V13.5M2.5 8H13.5" stroke="currentColor" strokeWidth="1" />
    <circle cx="8" cy="8" r="2.4" fill="var(--color-accent)" />
  </svg>
);

const Navbar = () => {
  const reduce = useReducedMotion();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href === "#home" ? "body" : href);
    el?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={reduce ? false : { y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed inset-x-0 top-0 z-[var(--z-nav)] transition-[background-color,border-color,padding] duration-300 ${
          scrolled
            ? "border-b border-rule bg-ground/85 py-3 backdrop-blur-md"
            : "border-b border-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 sm:px-10">
          <a
            href="#home"
            onClick={(e) => go(e, "#home")}
            className="group flex items-center gap-2.5 text-ink"
          >
            <RegMark className="h-4 w-4 text-rule-2 transition-colors group-hover:text-ink" />
            <span className="font-mono text-sm font-semibold uppercase tracking-[0.18em]">
              Phaibun&nbsp;P.
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => go(e, link.href)}
                className="font-mono text-xs uppercase tracking-[0.12em] text-ink-3 transition-colors hover:text-ink"
              >
                {link.name}
              </a>
            ))}
            <a
              href={`mailto:${profileData.contact.email}`}
              className="inline-flex items-center gap-2 rounded-sm bg-accent-ink px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-accent-deep"
            >
              <Mail size={14} strokeWidth={2.25} />
              Hire me
            </a>
          </div>

          <button
            className="text-ink md:hidden"
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <motion.div
          className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-accent"
          style={{ scaleX }}
        />
      </motion.nav>

      {isOpen && (
        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[var(--z-overlay)] bg-ground px-6 pt-24 md:hidden"
        >
          <div className="flex flex-col gap-2">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => go(e, link.href)}
                className="flex items-baseline gap-4 border-b border-rule py-4 text-2xl font-semibold text-ink transition-colors hover:text-accent-ink"
              >
                <span className="tech-label">{String(i + 1).padStart(2, "0")}</span>
                {link.name}
              </a>
            ))}
          </div>
          <div className="mt-10 flex gap-5">
            <a href={`https://${profileData.contact.github}`} className="text-ink-3 hover:text-ink" aria-label="GitHub">
              <Github size={22} />
            </a>
            <a href={`https://${profileData.contact.linkedin}`} className="text-ink-3 hover:text-ink" aria-label="LinkedIn">
              <Linkedin size={22} />
            </a>
            <a href={`mailto:${profileData.contact.email}`} className="text-ink-3 hover:text-ink" aria-label="Email">
              <Mail size={22} />
            </a>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
