"use client";

"use client";

"use client";

import React from 'react';
import { motion } from 'framer-motion';

const AnimatedDev = () => {
    return (
        <div className="relative w-full max-w-lg aspect-square flex items-center justify-center">
            <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                {/* Background Blob */}
                <motion.path
                    d="M350,150 Q380,220 340,280 Q300,340 230,350 Q160,360 110,300 Q60,240 110,180 Q160,120 230,110 Q300,100 350,150 Z"
                    fill="#e2e8f0"
                    opacity="0.5"
                    animate={{
                        d: [
                            "M350,150 Q380,220 340,280 Q300,340 230,350 Q160,360 110,300 Q60,240 110,180 Q160,120 230,110 Q300,100 350,150 Z",
                            "M340,160 Q360,230 320,290 Q280,350 210,340 Q140,330 120,270 Q100,210 140,150 Q180,90 250,100 Q320,110 340,160 Z",
                            "M350,150 Q380,220 340,280 Q300,340 230,350 Q160,360 110,300 Q60,240 110,180 Q160,120 230,110 Q300,100 350,150 Z"
                        ]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Floor Shadow */}
                <ellipse cx="250" cy="420" rx="180" ry="10" fill="#0f172a" opacity="0.2" />

                {/* Desk Legs */}
                <rect x="80" y="350" width="20" height="70" fill="#94a3b8" />
                <rect x="400" y="350" width="20" height="70" fill="#94a3b8" />

                {/* Desk Top */}
                <rect x="50" y="340" width="400" height="20" rx="5" fill="#cbd5e1" />

                {/* Laptop Base */}
                <rect x="150" y="330" width="200" height="12" rx="2" fill="#94a3b8" />
                {/* Laptop Screen */}
                <motion.rect
                    x="170" y="200" width="160" height="130" rx="8"
                    fill="#1e293b"
                    stroke="#94a3b8" strokeWidth="4"
                />
                {/* Logo on Laptop */}
                <circle cx="250" cy="265" r="15" fill="#3b82f6" opacity="0.2" />

                {/* Code Lines on Screen */}
                <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <motion.rect x="185" y="220" width="80" height="6" rx="3" fill="#ef4444" animate={{ width: [80, 90, 80] }} transition={{ duration: 2, repeat: Infinity }} />
                    <motion.rect x="185" y="235" width="110" height="6" rx="3" fill="#eab308" animate={{ width: [110, 120, 110] }} transition={{ duration: 2.5, repeat: Infinity }} />
                    <motion.rect x="185" y="250" width="90" height="6" rx="3" fill="#22c55e" animate={{ width: [90, 70, 90] }} transition={{ duration: 3, repeat: Infinity }} />
                    <motion.rect x="185" y="265" width="60" height="6" rx="3" fill="#3b82f6" animate={{ width: [60, 70, 60] }} transition={{ duration: 1.5, repeat: Infinity }} />
                </motion.g>

                {/* Character Body */}
                <path d="M200,370 Q250,400 300,370 L300,300 Q250,310 200,300 Z" fill="#3b82f6" />

                {/* Character Head */}
                <motion.g
                    animate={{ y: [0, 5, 0], rotate: [0, 2, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    {/* Face */}
                    <circle cx="250" cy="260" r="50" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="3" />

                    {/* Hair */}
                    <path d="M200,260 Q200,200 250,200 Q300,200 300,260" fill="#1e293b" />

                    {/* Glasses */}
                    <g transform="translate(50, 25)">
                        <circle cx="185" cy="240" r="12" fill="none" stroke="#1e293b" strokeWidth="2" />
                        <circle cx="215" cy="240" r="12" fill="none" stroke="#1e293b" strokeWidth="2" />
                        <line x1="197" y1="240" x2="203" y2="240" stroke="#1e293b" strokeWidth="2" />
                    </g>

                    {/* Smile */}
                    <path d="M240,280 Q250,285 260,280" fill="none" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" />
                </motion.g>

                {/* Typing Hands */}
                <motion.circle
                    cx="210" cy="335" r="12" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2"
                    animate={{ y: [0, -8, 0], x: [0, -2, 0] }}
                    transition={{ duration: 0.3, repeat: Infinity }}
                />
                <motion.circle
                    cx="290" cy="335" r="12" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2"
                    animate={{ y: [0, -8, 0], x: [0, 2, 0] }}
                    transition={{ duration: 0.3, repeat: Infinity, delay: 0.15 }}
                />

                {/* Coffee Cup */}
                <g transform="translate(350, 310)">
                    <rect x="0" y="10" width="30" height="20" rx="4" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
                    <path d="M30,15 Q38,15 38,20 Q38,25 30,25" fill="none" stroke="#ffffff" strokeWidth="3" />
                    {/* Steam */}
                    <motion.path d="M10,0 Q15,-10 10,-20" fill="none" stroke="#cbd5e1" strokeWidth="2" animate={{ y: [0, -10], opacity: [0.8, 0] }} transition={{ duration: 2, repeat: Infinity }} />
                    <motion.path d="M20,0 Q25,-10 20,-20" fill="none" stroke="#cbd5e1" strokeWidth="2" animate={{ y: [0, -10], opacity: [0.8, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} />
                </g>

                {/* Floating Symbols */}
                <motion.text x="350" y="120" fill="#3b82f6" fontSize="24" fontWeight="bold" animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }} transition={{ duration: 3, repeat: Infinity }}>&lt;/&gt;</motion.text>
                <motion.text x="100" y="170" fill="#eab308" fontSize="24" fontWeight="bold" animate={{ y: [0, 10, 0], rotate: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }}>{`{ }`}</motion.text>
                <motion.text x="300" y="80" fill="#ef4444" fontSize="20" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }}>❤</motion.text>
            </svg>
        </div>
    );
};

export default AnimatedDev;
