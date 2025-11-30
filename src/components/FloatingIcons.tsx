"use client";

import React from 'react';
import { motion } from 'framer-motion';

const icons = [
    { text: "React", x: "10%", y: "20%", color: "#61DAFB" },
    { text: "Node", x: "80%", y: "15%", color: "#339933" },
    { text: "SQL", x: "20%", y: "80%", color: "#00758F" },
    { text: "Python", x: "70%", y: "70%", color: "#3776AB" },
    { text: "Docker", x: "40%", y: "40%", color: "#2496ED" },
    { text: "AWS", x: "90%", y: "50%", color: "#FF9900" },
    { text: "</>", x: "50%", y: "10%", color: "#E34F26" },
    { text: "{}", x: "10%", y: "50%", color: "#F7DF1E" },
];

const FloatingIcons = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-20">
            {icons.map((icon, index) => (
                <motion.div
                    key={index}
                    className="absolute font-bold text-2xl font-mono"
                    style={{ left: icon.x, top: icon.y, color: icon.color }}
                    animate={{
                        y: [0, -50, 0],
                        x: [0, 30, 0],
                        opacity: [0.3, 0.6, 0.3],
                        rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                        duration: Math.random() * 5 + 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: Math.random() * 2,
                    }}
                >
                    {icon.text}
                </motion.div>
            ))}
        </div>
    );
};

export default FloatingIcons;
