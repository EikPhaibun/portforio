"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Mascot = () => {
    return (
        <div className="relative w-full max-w-lg aspect-square flex items-center justify-center">
            {/* Background Glow Effect */}
            <motion.div
                animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl"
            />

            {/* Floating Mascot */}
            <motion.div
                animate={{
                    y: [-15, 15, -15],
                    rotate: [-2, 2, -2],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3 }
                }}
                className="relative z-10 w-64 h-64 md:w-80 md:h-80 cursor-pointer drop-shadow-2xl"
            >
                <img
                    src="/images/beaver_login.png"
                    alt="MV Solution Mascot"
                    className="w-full h-full object-contain"
                />

                {/* Chat Bubble (Optional - appears on hover) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0, x: -20, y: 20 }}
                    whileHover={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute -top-12 -right-12 bg-white text-slate-900 px-4 py-2 rounded-2xl rounded-bl-none shadow-lg font-bold text-sm whitespace-nowrap"
                >
                    Let's Build Something! 🚀
                </motion.div>
            </motion.div>

            {/* Orbiting Elements (Tech Icons) */}
            <OrbitingIcon delay={0} radius={160} duration={15} icon="⚡" />
            <OrbitingIcon delay={5} radius={160} duration={15} icon="🛠️" />
            <OrbitingIcon delay={10} radius={160} duration={15} icon="📦" />
        </div>
    );
};

const OrbitingIcon = ({ delay, radius, duration, icon }: { delay: number, radius: number, duration: number, icon: string }) => {
    return (
        <motion.div
            animate={{ rotate: 360 }}
            transition={{
                duration: duration,
                repeat: Infinity,
                ease: "linear",
                delay: delay
            }}
            className="absolute inset-0"
        >
            <motion.div
                className="absolute top-0 left-1/2 -ml-4 w-10 h-10 bg-slate-800/80 backdrop-blur-md border border-slate-700 rounded-full flex items-center justify-center text-xl shadow-lg"
                style={{ transform: `translateY(-${radius}px)` }}
                // Counter-rotate to keep icon upright
                animate={{ rotate: -360 }}
                transition={{
                    duration: duration,
                    repeat: Infinity,
                    ease: "linear",
                    delay: delay
                }}
            >
                {icon}
            </motion.div>
        </motion.div>
    );
};

export default Mascot;
