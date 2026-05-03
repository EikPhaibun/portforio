"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import ResumeSection from '@/components/ResumeSection';
import ContactCTA from '@/components/ContactCTA';
import VisitorCounter from '@/components/VisitorCounter';
import FloatingIcons from '@/components/FloatingIcons';
import { portfolioData } from '@/data/portfolio-data';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500/30">
      <Navbar />
      <FloatingIcons />

      <div id="home">
        <Hero />
      </div>

      <div id="experience">
        <ResumeSection />
      </div>

      <section id="projects" className="container mx-auto px-6 py-24 relative z-10">
        {/* Professional Work Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-1 w-12 bg-blue-500 rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Professional <span className="text-blue-500">Portfolio</span>
            </h2>
          </div>
          <p className="text-slate-400 max-w-2xl text-lg mb-12">
            Showcasing high-impact enterprise solutions and professional systems developed for industry leaders.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.filter(p => p.company === "MV Solution Co., Ltd").map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Personal Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pt-12 border-t border-slate-800"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-1 w-12 bg-emerald-500 rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Personal Projects & <span className="text-emerald-500">Experiments</span>
            </h2>
          </div>
          <p className="text-slate-400 max-w-2xl text-lg mb-12">
            A collection of side projects, open source contributions, and experimental applications
            exploring new technologies and architectures.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.filter(p => p.company !== "MV Solution Co., Ltd").map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </motion.div>
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
