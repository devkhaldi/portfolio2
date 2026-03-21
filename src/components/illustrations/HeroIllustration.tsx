"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function HeroIllustration() {
    const { theme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="w-80 h-80 opacity-0" />; // Prevent hydration mismatch
    }

    const currentTheme = theme === "system" ? systemTheme : theme;
    const isDark = currentTheme === "dark";

    return (
        <div className="relative w-[380px] h-[380px] md:w-[450px] md:h-[450px] flex items-center justify-center">

            {/* Base Glow Effect — static, no Framer Motion animation for performance */}
            <div
                className={`absolute inset-0 rounded-full blur-[80px] -z-10 ${isDark ? "bg-purple-600/40" : "bg-violet-400/20"
                    }`}
                aria-hidden="true"
            />

            {/* Central SVG Illustration */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                className="relative z-20 w-56 h-56 md:w-64 md:h-64 rounded-full border-4 overflow-hidden transition-colors duration-500 shadow-xl flex items-center justify-center bg-background"
                style={{
                    borderColor: isDark ? "rgba(139, 92, 246, 0.5)" : "rgba(124, 58, 237, 0.4)",
                    boxShadow: isDark ? "0 0 40px rgba(139, 92, 246, 0.3)" : "0 12px 40px rgba(124, 58, 237, 0.2)"
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent z-10 pointer-events-none" />

                {/* Abstract Tech Environment SVG (No Character) */}
                <svg viewBox="0 0 300 300" className="w-full h-full relative z-0" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <radialGradient id="bgGlowDark" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="rgba(139, 92, 246, 0.4)" /> {/* #8b5cf6 primary dark */}
                            <stop offset="100%" stopColor="rgba(139, 92, 246, 0)" />
                        </radialGradient>
                        <radialGradient id="bgGlowLight" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="rgba(124, 58, 237, 0.3)" /> {/* #7c3aed primary light */}
                            <stop offset="100%" stopColor="rgba(124, 58, 237, 0)" />
                        </radialGradient>
                        <linearGradient id="bgLight" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#ede9fe" /> {/* violet-100 */}
                            <stop offset="100%" stopColor="#e0f2fe" /> {/* sky-100 */}
                        </linearGradient>
                        <linearGradient id="primaryDisplay" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor={isDark ? "#27272a" : "#faf5ff"} /> {/* secondary dark / violet-50 light */}
                            <stop offset="100%" stopColor={isDark ? "#09090b" : "#eff6ff"} /> {/* background dark / blue-50 light */}
                        </linearGradient>
                        <filter id="softShadow">
                            <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor={isDark ? "#000000" : "#a1a1aa"} floodOpacity="0.3" />
                        </filter>
                        <filter id="neonGlow">
                            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    {/* Ambient Room Glow */}
                    <circle cx="150" cy="150" r="150" fill={isDark ? "#000000" : "url(#bgLight)"} />
                    <circle cx="150" cy="130" r="110" fill={isDark ? "url(#bgGlowDark)" : "url(#bgGlowLight)"} opacity={isDark ? "0.7" : "0.9"} />

                    {/* Floating Abstract Tech Elements (Background) - no filter for perf */}
                    <circle cx="40" cy="80" r="15" fill={isDark ? "#8b5cf6" : "#7c3aed"} opacity="0.3" />
                    <rect x="240" y="60" width="20" height="20" rx="4" fill={isDark ? "#ec4899" : "#db2777"} opacity="0.4" transform="rotate(15 250 70)" />
                    <polygon points="50,220 70,250 30,250" fill={isDark ? "#06b6d4" : "#0891b2"} opacity="0.3" transform="rotate(-25 50 235)" />
                    <circle cx="260" cy="230" r="8" fill={isDark ? "#8b5cf6" : "#7c3aed"} opacity="0.5" />

                    {/* Left Monitor (Vertical/Documentation Layout) */}
                    <g transform="translate(30, 45)">
                        {/* Monitor Stand */}
                        <path d="M 40 160 L 50 160 L 55 180 L 35 180 Z" fill={isDark ? "#27272a" : "#7c3aed"} />
                        <rect x="20" y="176" width="50" height="4" rx="2" fill={isDark ? "#27272a" : "#7c3aed"} />

                        {/* Display Frame */}
                        <rect x="0" y="0" width="90" height="160" rx="4" fill={isDark ? "#27272a" : "#7c3aed"} />
                        <rect x="3" y="3" width="84" height="154" rx="2" fill={isDark ? "#09090b" : "#faf5ff"} />

                        {/* Status Bar */}
                        <rect x="3" y="3" width="84" height="10" fill={isDark ? "#09090b" : "#ede9fe"} />
                        <circle cx="10" cy="8" r="2" fill="#ef4444" />
                        <circle cx="16" cy="8" r="2" fill="#f59e0b" />

                        {/* Mock Content Blocks (Doc Structure) */}
                        <rect x="12" y="25" width="40" height="6" rx="3" fill={isDark ? "#8b5cf6" : "#7c3aed"} />
                        <rect x="12" y="40" width="66" height="4" rx="2" fill={isDark ? "#27272a" : "#c4b5fd"} />
                        <rect x="12" y="50" width="55" height="4" rx="2" fill={isDark ? "#27272a" : "#a5b4fc"} />
                        <rect x="12" y="60" width="60" height="4" rx="2" fill={isDark ? "#27272a" : "#c4b5fd"} />

                        {/* Code snippet block inside doc */}
                        <rect x="12" y="80" width="66" height="40" rx="3" fill={isDark ? "#09090b" : "#ede9fe"} stroke={isDark ? "#27272a" : "#a78bfa"} strokeWidth="1" />
                        <line x1="18" y1="90" x2="35" y2="90" stroke={isDark ? "#ec4899" : "#db2777"} strokeWidth="2.5" strokeLinecap="round" />
                        <line x1="18" y1="100" x2="60" y2="100" stroke={isDark ? "#8b5cf6" : "#7c3aed"} strokeWidth="2.5" strokeLinecap="round" />
                        <line x1="25" y1="110" x2="50" y2="110" stroke={isDark ? "#06b6d4" : "#0891b2"} strokeWidth="2.5" strokeLinecap="round" />

                        <rect x="12" y="135" width="30" height="6" rx="3" fill={isDark ? "#06b6d4" : "#0891b2"} />
                    </g>


                    {/* Center Main Ultra-Wide Monitor (Code/IDE Layout) */}
                    <g transform="translate(80, 75)">
                        {/* Monitor Stand */}
                        <path d="M 85 130 L 95 130 L 105 160 L 75 160 Z" fill={isDark ? "#27272a" : "#0891b2"} />
                        <rect x="50" y="156" width="80" height="6" rx="3" fill={isDark ? "#27272a" : "#0891b2"} />

                        {/* Display Frame */}
                        <rect x="0" y="0" width="180" height="130" rx="6" fill={isDark ? "#27272a" : "#0891b2"} />

                        {/* Display Screen */}
                        <rect x="4" y="4" width="172" height="122" rx="3" fill="url(#primaryDisplay)" />

                        {/* Glowing Edge/Border Highlight */}
                        {isDark ? <rect x="0" y="0" width="180" height="130" rx="6" fill="none" stroke="#8b5cf6" strokeWidth="1" opacity="0.4" /> : <rect x="0" y="0" width="180" height="130" rx="6" fill="none" stroke="#7c3aed" strokeWidth="1.5" opacity="0.5" />}

                        {/* IDE Header */}
                        <rect x="4" y="4" width="172" height="15" fill={isDark ? "#27272a" : "#e0f2fe"} />
                        <circle cx="14" cy="11" r="3" fill="#ef4444" />
                        <circle cx="24" cy="11" r="3" fill="#f59e0b" />
                        <circle cx="34" cy="11" r="3" fill="#22c55e" />

                        {/* Open Tabs */}
                        <rect x="50" y="7" width="45" height="12" rx="2" fill={isDark ? "#09090b" : "#bae6fd"} />
                        <line x1="55" y1="13" x2="70" y2="13" stroke={isDark ? "#8b5cf6" : "#0c4a6e"} strokeWidth="2" strokeLinecap="round" />
                        <rect x="100" y="9" width="35" height="10" rx="2" fill={isDark ? "#27272a" : "#e0f2fe"} />

                        {/* File Tree Sidebar */}
                        <rect x="4" y="19" width="35" height="107" fill={isDark ? "#09090b" : "#eff6ff"} />
                        <line x1="8" y1="30" x2="25" y2="30" stroke={isDark ? "#27272a" : "#bae6fd"} strokeWidth="2" strokeLinecap="round" />
                        <line x1="12" y1="40" x2="30" y2="40" stroke={isDark ? "#8b5cf6" : "#7c3aed"} strokeWidth="2" strokeLinecap="round" />
                        <line x1="12" y1="50" x2="20" y2="50" stroke={isDark ? "#27272a" : "#bae6fd"} strokeWidth="2" strokeLinecap="round" />
                        <line x1="8" y1="65" x2="28" y2="65" stroke={isDark ? "#27272a" : "#bae6fd"} strokeWidth="2" strokeLinecap="round" />
                        <line x1="12" y1="75" x2="25" y2="75" stroke={isDark ? "#27272a" : "#bae6fd"} strokeWidth="2" strokeLinecap="round" />

                        {/* Main Code Logic Display */}
                        {/* Glowing Function Keyword */}
                        <line x1="50" y1="35" x2="80" y2="35" stroke={isDark ? "#ec4899" : "#db2777"} strokeWidth="3" strokeLinecap="round" />
                        <line x1="85" y1="35" x2="130" y2="35" stroke={isDark ? "#06b6d4" : "#0891b2"} strokeWidth="3" strokeLinecap="round" />
                        <line x1="135" y1="35" x2="145" y2="35" stroke={isDark ? "#8b5cf6" : "#7c3aed"} strokeWidth="3" strokeLinecap="round" />

                        <line x1="60" y1="50" x2="160" y2="50" stroke={isDark ? "#fafafa" : "#0c4a6e"} strokeWidth="3" strokeLinecap="round" opacity="0.9" />
                        <line x1="60" y1="65" x2="95" y2="65" stroke={isDark ? "#8b5cf6" : "#7c3aed"} strokeWidth="3" strokeLinecap="round" />
                        <line x1="100" y1="65" x2="150" y2="65" stroke={isDark ? "#06b6d4" : "#0891b2"} strokeWidth="3" strokeLinecap="round" />

                        <line x1="70" y1="80" x2="120" y2="80" stroke={isDark ? "#ec4899" : "#db2777"} strokeWidth="3" strokeLinecap="round" />
                        <line x1="70" y1="95" x2="140" y2="95" stroke={isDark ? "#fafafa" : "#334155"} strokeWidth="3" strokeLinecap="round" opacity="0.7" />

                        <line x1="50" y1="110" x2="65" y2="110" stroke={isDark ? "#8b5cf6" : "#7c3aed"} strokeWidth="3" strokeLinecap="round" />
                    </g>


                    {/* Floating Abstract Frontend Dashboard (Right foreground overlap) */}
                    <g transform="translate(190, 160)">
                        <rect x="0" y="0" width="85" height="65" rx="8" fill={isDark ? "rgba(39, 39, 42, 0.85)" : "rgba(255, 255, 255, 0.95)"} stroke={isDark ? "#8b5cf6" : "#7c3aed"} strokeWidth="1.5" />

                        {/* Mini Dashboard Charts */}
                        <circle cx="25" cy="25" r="12" fill="none" stroke={isDark ? "#09090b" : "#e0e7ff"} strokeWidth="4" strokeLinecap="round" />
                        <path d="M 25 13 A 12 12 0 0 1 37 25" fill="none" stroke={isDark ? "#06b6d4" : "#7c3aed"} strokeWidth="4" strokeLinecap="round" />

                        {/* Bar Chart */}
                        <rect x="50" y="25" width="4" height="15" rx="2" fill={isDark ? "#fafafa" : "#0891b2"} opacity="0.9" />
                        <rect x="58" y="15" width="4" height="25" rx="2" fill={isDark ? "#8b5cf6" : "#7c3aed"} />
                        <rect x="66" y="20" width="4" height="20" rx="2" fill={isDark ? "#ec4899" : "#db2777"} />

                        <rect x="15" y="48" width="55" height="4" rx="2" fill={isDark ? "#27272a" : "#c4b5fd"} />
                        <rect x="15" y="55" width="40" height="4" rx="2" fill={isDark ? "#09090b" : "#bae6fd"} />
                    </g>


                    {/* Foreground Code Elements (Holographic projection effect) */}
                    <g transform="translate(70, 240)">
                        <rect x="0" y="0" width="40" height="20" rx="4" fill={isDark ? "#09090b" : "#ffffff"} stroke={isDark ? "#8b5cf6" : "#7c3aed"} strokeWidth="1.5" filter="url(#softShadow)" />
                        <text x="5" y="14" fontFamily="monospace" fontSize="9" fill={isDark ? "#8b5cf6" : "#7c3aed"} fontWeight="bold">{"</>"}</text>
                    </g>

                    <g transform="translate(130, 250)">
                        <rect x="0" y="0" width="60" height="20" rx="4" fill={isDark ? "#27272a" : "#f4f4f5"} stroke={isDark ? "#06b6d4" : "#0891b2"} strokeWidth="1" filter="url(#softShadow)" />
                        <text x="10" y="13" fontFamily="monospace" fontSize="8" fill={isDark ? "#06b6d4" : "#0891b2"} fontWeight="bold">{"npm run"}</text>
                    </g>

                    {/* Connection Lines (Linking elements together) */}
                    <path d="M 120 180 Q 140 220 100 240" fill="none" stroke={isDark ? "#8b5cf6" : "#7c3aed"} strokeWidth="1.5" strokeDasharray="3,3" opacity="0.6" />
                    <path d="M 230 190 Q 200 240 160 250" fill="none" stroke={isDark ? "#06b6d4" : "#0891b2"} strokeWidth="1.5" strokeDasharray="3,3" opacity="0.6" />

                </svg>
            </motion.div>

            {/* Floating Element 1 (Top Left) */}
            <motion.div
                animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                style={{ willChange: "transform" }}
                className={`absolute top-4 lg:top-10 left-0 lg:-left-10 z-30 p-4 rounded-2xl flex flex-col gap-2 shadow-2xl backdrop-blur-md border ${isDark
                        ? "bg-slate-900/80 border-purple-500/30 text-emerald-400 shadow-[0_0_30px_rgba(139,92,246,0.2)]"
                        : "bg-white/90 border-slate-200 text-blue-500"
                    }`}
            >
                <div className="flex gap-1.5 items-center mb-1">
                    <div className="w-2 h-2 rounded-full bg-red-400" />
                    <div className="w-2 h-2 rounded-full bg-amber-400" />
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                </div>
                {isDark ? (
                    <div className="space-y-1.5 mt-1 font-mono text-xs font-bold">
                        <div><span className="text-purple-400">const</span> <span className="text-blue-400">build</span> = <span className="text-amber-300">()</span> <span className="text-purple-400">{'=>'}</span> <span className="text-amber-300">{'{'}</span></div>
                        <div className="pl-4 text-emerald-400">return <span className="text-blue-300">{'<Magic />'}</span>;</div>
                        <div className="text-amber-300">{'}'}</div>
                    </div>
                ) : (
                    <div className="flex items-center justify-center p-2">
                        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                    </div>
                )}
            </motion.div>

            {/* Floating Element 2 (Bottom Right - E-commerce focus) */}
            <motion.div
                animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                style={{ willChange: "transform" }}
                className={`absolute bottom-10 -right-4 lg:-right-12 z-20 px-5 py-3 rounded-2xl flex items-center gap-3 shadow-xl backdrop-blur-md border ${isDark
                        ? "bg-purple-900/40 border-purple-500/50 text-white shadow-[0_0_30px_rgba(168,85,247,0.4)]"
                        : "bg-gradient-to-r from-blue-500 to-cyan-500 border-transparent text-white"
                    }`}
            >
                {isDark ? (
                    <>
                        <svg className="w-8 h-8 text-fuchsia-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                        <span className="font-bold tracking-wider text-sm shadow-sm">WooCommerce</span>
                    </>
                ) : (
                    <>
                        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span className="font-bold tracking-wider text-sm">Shopify</span>
                    </>
                )}
            </motion.div>

            {/* Floating Element 3 (Top Right - Decorative/Global) */}
            <motion.div
                animate={{ y: [0, -10, 0], x: [0, -10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                style={{ willChange: "transform" }}
                className={`absolute top-0 right-10 z-10 w-16 h-16 rounded-full flex items-center justify-center shadow-lg border backdrop-blur-sm ${isDark
                        ? "bg-slate-800/80 border-cyan-500/30 text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                        : "bg-white/90 border-slate-100 text-blue-500"
                    }`}
            >
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
            </motion.div>

            {/* Mobile Interface Element (Bottom Left) */}
            <motion.div
                animate={{ y: [0, 15, 0], rotate: [0, 4, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                style={{ willChange: "transform" }}
                className={`absolute bottom-4 left-0 lg:-left-6 z-20 w-16 h-28 rounded-2xl border-4 backdrop-blur-md shadow-xl flex flex-col overflow-hidden ${isDark
                        ? "bg-slate-900 border-slate-700"
                        : "bg-white border-slate-200"
                    }`}
            >
                <div className={`h-4 w-full flex justify-center items-center ${isDark ? "bg-slate-800" : "bg-slate-100"}`}>
                    <div className={`w-4 h-1 rounded-full ${isDark ? "bg-slate-600" : "bg-slate-300"}`} />
                </div>
                <div className={`flex-1 w-full flex flex-col gap-1.5 p-2 ${isDark ? "bg-slate-800/50" : "bg-white"}`}>
                    <div className={`w-full h-8 rounded shrink-0 ${isDark ? "bg-purple-500/20" : "bg-blue-100"}`} />
                    <div className={`w-3/4 h-2 rounded-full ${isDark ? "bg-slate-700" : "bg-slate-200"}`} />
                    <div className={`w-1/2 h-2 rounded-full ${isDark ? "bg-slate-700" : "bg-slate-200"}`} />
                </div>
            </motion.div>

        </div>
    );
}
