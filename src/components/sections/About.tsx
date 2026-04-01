"use client";

import { motion, useSpring, useTransform, useInView } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, Award, Zap, Star } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/providers/LanguageProvider";

const skills = [
    "Next.js & React",
    "Tailwind CSS",
    "WordPress & WooCommerce",
    "Shopify Development",
    "WIX & MongoDB",
    "JavaScript & TypeScript",
    "SEO Optimization",
    "Responsive Design"
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const springValue = useSpring(0, { stiffness: 100, damping: 30 });
    const displayValue = useTransform(springValue, (current) => Math.round(current));

    React.useEffect(() => {
        if (isInView) {
            springValue.set(value);
        }
    }, [isInView, value, springValue]);

    return (
        <span ref={ref}>
            <motion.span>{displayValue}</motion.span>
            {suffix}
        </span>
    );
}

export function About() {
    const { t, language } = useLanguage();

    const stats = [
        { label: t.about.stats.experience, value: 5, suffix: "+" },
        { label: t.about.stats.projects, value: 50, suffix: "+" },
        { label: t.about.stats.clients, value: 30, suffix: "+" },
    ];

    const isRTL = language === "ar";

    return (
        <section id="about" className="py-24 relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
                {/* CSS spin is cheaper than Framer Motion for simple infinite rotate */}
                <div
                    className="absolute top-0 right-0 w-96 h-96 border border-primary/10 rounded-full border-dashed animate-[spin_25s_linear_infinite] motion-reduce:animate-none"
                />
            </div>

            <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                {/* Left Column: Profile Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative flex items-center justify-center font-sans"
                >
                    <div className="relative w-[280px] h-[280px] md:w-[420px] md:h-[420px]">
                        {/* Rotating Decorative Border — CSS spin for performance */}
                        <div
                            className="absolute -inset-4 border-2 border-dashed border-primary/20 rounded-full animate-[spin_20s_linear_infinite] motion-reduce:animate-none"
                            aria-hidden="true"
                        />
                        <div
                            className="absolute -inset-8 border border-cyan-500/10 rounded-full animate-[spin_15s_linear_infinite_reverse] motion-reduce:animate-none"
                            aria-hidden="true"
                        />

                        {/* Image Container with Glow */}
                        <div className="relative w-full h-full rounded-full p-2 bg-gradient-to-br from-primary/20 via-transparent to-cyan-500/20 shadow-2xl">
                            <div className="relative w-full h-full rounded-full border-4 border-background overflow-hidden bg-secondary/30 backdrop-blur-xl group cursor-crosshair flex items-center justify-center">
                                <svg viewBox="0 0 200 200" className="w-full h-full p-4 drop-shadow-2xl" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
                                            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
                                        </linearGradient>
                                        <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" stopColor="#ec4899" stopOpacity="0.8" />
                                            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8" />
                                        </linearGradient>
                                    </defs>
                                    <motion.circle cx="100" cy="100" r="35" fill="url(#grad1)" animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
                                    <motion.g animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "100px 100px" }}>
                                        <circle cx="100" cy="30" r="15" fill="url(#grad2)" />
                                        <path d="M100 45 L100 65" stroke="currentColor" strokeWidth="2" strokeOpacity="0.2" strokeDasharray="4 4" />
                                    </motion.g>
                                    <motion.g animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "100px 100px" }}>
                                        <circle cx="100" cy="170" r="10" fill="#06b6d4" opacity="0.8" />
                                        <path d="M100 160 L100 135" stroke="currentColor" strokeWidth="2" strokeOpacity="0.2" strokeDasharray="4 4" />
                                    </motion.g>
                                    <motion.g animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "100px 100px" }}>
                                        <circle cx="30" cy="100" r="20" fill="url(#grad1)" opacity="0.6" />
                                        <path d="M50 100 L65 100" stroke="currentColor" strokeWidth="2" strokeOpacity="0.2" strokeDasharray="4 4" />
                                    </motion.g>
                                    <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.1" strokeDasharray="4 4" />
                                    <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.1" />
                                </svg>
                                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                        </div>

                        {/* Floating Tech Badges - Organic Motion */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className={cn(
                                "absolute top-[10%] z-20 bg-background/90 backdrop-blur-xl px-5 py-3 rounded-2xl border border-primary/30 shadow-[0_10px_30px_-10px_rgba(139,92,246,0.3)] flex items-center gap-3",
                                isRTL ? "-left-8" : "-right-8"
                            )}
                        >
                            <Award className="h-5 w-5 text-primary" />
                            <span className="font-black text-sm tracking-tight text-foreground">
                                5+ {language === "en" ? "Years" : "سنوات"}
                            </span>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className={cn(
                                "absolute bottom-[10%] z-20 bg-background/90 backdrop-blur-xl px-5 py-3 rounded-2xl border border-cyan-500/30 shadow-[0_10px_30px_-10px_rgba(6,182,212,0.3)] flex items-center gap-3",
                                isRTL ? "-right-8" : "-left-8"
                            )}
                        >
                            <Zap className="h-5 w-5 text-cyan-400" />
                            <span className="font-black text-sm tracking-tight text-foreground">
                                {language === "en" ? "Digital Agency" : "وكالة رقمية"}
                            </span>
                        </motion.div>

                        <motion.div
                            animate={{
                                scale: [1, 1.1, 1],
                                opacity: [0.8, 1, 0.8]
                            }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            className={cn(
                                "absolute -bottom-2 z-20 bg-background/90 backdrop-blur-xl p-3 rounded-full border border-pink-500/30 shadow-lg",
                                isRTL ? "left-[20%]" : "right-[20%]"
                            )}
                        >
                            <Star className="h-5 w-5 text-pink-500 fill-pink-500" />
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right Column: Content */}
                <div className="space-y-10">
                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-block px-4 py-1.5 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-500 text-xs font-bold tracking-widest uppercase mb-4"
                        >
                            {language === "en" ? "THE AGENCY" : "الوكالة"}
                        </motion.div>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
                            {t.about.title} <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-cyan-500">
                                {t.about.titleAccent}
                            </span>
                        </h2>

                        <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                            <p>
                                {language === "en" ? (
                                    <>
                                        Welcome, we are <span className="text-foreground font-bold">Khaldi Tech</span> — a digital agency that obsesses over building digital products that are fast, elegant, and built to last. Our expertise spans
                                        <span className="text-primary font-semibold"> Next.js</span>,
                                        <span className="text-primary font-semibold"> React</span>, and
                                        <span className="text-primary font-semibold"> Shopify</span>, turning complex challenges into smooth, impactful user experiences.
                                    </>
                                ) : (
                                    <>
                                        أهلاً، نحن <span className="text-foreground font-bold">خالدي تيك</span> — وكالة رقمية تبني منتجات رقمية سريعة وأنيقة وقابلة للتوسع. خبرتنا تشمل
                                        <span className="text-primary font-semibold"> Next.js</span> و
                                        <span className="text-primary font-semibold"> React</span> و
                                        <span className="text-primary font-semibold"> Shopify</span>، نحول التحديات المعقدة إلى تجارب مستخدم سلسة ومؤثرة.
                                    </>
                                )}
                            </p>
                            <p>
                                {t.about.bio}
                            </p>
                        </div>
                    </div>

                    {/* Staggered Skills */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                        {skills.map((skill, i) => (
                            <motion.div
                                key={skill}
                                initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-3 group cursor-default"
                            >
                                <div className="h-2 w-2 rounded-full bg-primary group-hover:scale-150 transition-transform" />
                                <span className="text-base font-bold text-foreground/80 group-hover:text-primary transition-colors">{skill}</span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Animated Stats */}
                    <div className="grid grid-cols-3 gap-8 pt-10 border-t border-border/40">
                        {stats.map((stat) => (
                            <div key={stat.label} className="space-y-2">
                                <div className="text-4xl font-black text-foreground tracking-tighter">
                                    <Counter value={stat.value} suffix={stat.suffix} />
                                </div>
                                <div className="text-[10px] text-muted-foreground uppercase font-black tracking-[0.2em]">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
