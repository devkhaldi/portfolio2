"use client";

import { motion } from "framer-motion";

export const Logo = ({ scrolled }: { scrolled: boolean }) => {
    return (
        <div className="flex items-center gap-3 group cursor-pointer select-none">
            {/* Logo Icon */}
            <div className="relative">
                <svg
                    width="42"
                    height="42"
                    viewBox="0 0 42 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="relative z-10 transition-all duration-500 group-hover:rotate-[5deg] group-hover:scale-110"
                >
                    {/* Background abstract shape - rounded square with slight rotation */}
                    <motion.rect
                        x="6"
                        y="6"
                        width="30"
                        height="30"
                        rx="8"
                        stroke="url(#logo-stroke)"
                        strokeWidth="1.5"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.3 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    />

                    {/* Left vertical bar of K */}
                    <motion.path
                        d="M 14 10 L 14 32"
                        stroke="url(#logo-primary)"
                        strokeWidth="4"
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    />

                    {/* Upper leg of K */}
                    <motion.path
                        d="M 28 10 C 28 10 22 16 14 21"
                        stroke="url(#logo-secondary)"
                        strokeWidth="4"
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    />

                    {/* Lower leg of K */}
                    <motion.path
                        d="M 14 21 C 20 21 28 32 28 32"
                        stroke="url(#logo-accent)"
                        strokeWidth="4"
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    />

                    {/* Decorative dot */}
                    <motion.circle
                        cx="32"
                        cy="18"
                        r="2.5"
                        fill="var(--primary)"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 0.8 }}
                        transition={{ type: "spring", delay: 1.5, stiffness: 200 }}
                    />

                    <defs>
                        <linearGradient id="logo-stroke" x1="0" y1="0" x2="42" y2="42" gradientUnits="userSpaceOnUse">
                            <stop stopColor="var(--primary)" />
                            <stop offset="1" stopColor="var(--accent-blue)" />
                        </linearGradient>
                        <linearGradient id="logo-primary" x1="14" y1="10" x2="14" y2="32" gradientUnits="userSpaceOnUse">
                            <stop stopColor="var(--primary)" />
                            <stop offset="1" stopColor="#9333ea" />
                        </linearGradient>
                        <linearGradient id="logo-secondary" x1="28" y1="10" x2="14" y2="21" gradientUnits="userSpaceOnUse">
                            <stop stopColor="var(--primary)" />
                            <stop offset="1" stopColor="#a855f7" />
                        </linearGradient>
                        <linearGradient id="logo-accent" x1="14" y1="21" x2="28" y2="32" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#a855f7" />
                            <stop offset="1" stopColor="var(--accent-blue)" />
                        </linearGradient>
                    </defs>
                </svg>

                {/* Ambient glow */}
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full scale-0 group-hover:scale-150 transition-all duration-700 opacity-0 group-hover:opacity-100" />
            </div>

            {/* Logo Text */}
            <div className="flex flex-col">
                <motion.span
                    animate={{
                        letterSpacing: scrolled ? "-0.02em" : "0.02em",
                    }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl font-black tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-foreground/60"
                >
                    Khaldi
                </motion.span>
                <motion.span
                    animate={{
                        opacity: scrolled ? 0.7 : 1,
                        x: scrolled ? 1 : 0,
                    }}
                    className="text-[9px] font-bold tracking-[0.3em] uppercase text-primary mt-1"
                >
                    Design & Dev
                </motion.span>
            </div>
        </div>
    );
};
