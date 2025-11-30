"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';
import { profileData } from '@/data/portfolio-data';

const ContactCTA = () => {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl border border-slate-800 p-8 md:p-16 text-center max-w-4xl mx-auto shadow-2xl"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Ready to build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">amazing?</span>
                    </h2>
                    <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                        Whether you need a complex enterprise system, a data science platform, or a custom ERP solution,
                        I'm ready to bring your vision to life.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href={`mailto:${profileData.contact.email}`}
                            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium rounded-xl transition-all hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] w-full sm:w-auto"
                        >
                            <Mail size={20} />
                            <span>Send me an email</span>
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href={`https://${profileData.contact.linkedin}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white text-lg font-medium rounded-xl transition-all border border-slate-700 w-full sm:w-auto"
                        >
                            Connect on LinkedIn
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactCTA;
