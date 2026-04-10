"use client";

import { cn } from "@/lib/utils";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/animations/Reveal";
import * as React from "react";
import { useLanguage } from "@/providers/LanguageProvider";
import Image from "next/image";

export function Hero() {
    const { t, language } = useLanguage();
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const rafRef = React.useRef<number | null>(null);

    const springConfig = { damping: 25, stiffness: 150 };
    const dx = useSpring(mouseX, springConfig);
    const dy = useSpring(mouseY, springConfig);

    const isRTL = language === "ar";

    const handleMouseMove = React.useCallback((e: React.MouseEvent) => {
        if (rafRef.current !== null) return;
        const { clientX, clientY } = e;
        rafRef.current = requestAnimationFrame(() => {
            const { innerWidth, innerHeight } = window;
            mouseX.set((clientX - innerWidth / 2) / 40);
            mouseY.set((clientY - innerHeight / 2) / 40);
            rafRef.current = null;
        });
    }, [mouseX, mouseY]);

    React.useEffect(() => {
        return () => {
            if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
        };
    }, []);

    return (
        <section
            id="home"
            onMouseMove={handleMouseMove}
            className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden"
        >
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
                {/* Soft Gradient Circles */}
                <motion.div
                    style={{ x: dx, y: dy }}
                    className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px]"
                />
                <motion.div
                    style={{ x: useTransform(dx, (v) => v * -1), y: useTransform(dy, (v) => v * -1) }}
                    className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[100px]"
                />

                {/* Curved Dotted Line - SVG Path */}
                <svg
                    className="absolute bottom-10 left-10 w-[300px] h-[200px] text-purple-500/20"
                    viewBox="0 0 300 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 190C10 190 50 100 150 100C250 100 290 10 290 10"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeDasharray="6 6"
                        className="animate-[dash_5s_linear_infinite]"
                    />
                    <path d="M285 15L290 10L295 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
            </div>

            <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left Column: Text Content */}
                <div className="relative z-10 space-y-8 order-2 lg:order-1">
                    <div className="space-y-4">
                        <Reveal>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight text-primary">
                                {language === "en" ? (
                                    <>
                                        Grow Your Business <br />
                                        With Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-600">Marketing Experts</span>
                                    </>
                                ) : (
                                    <>
                                        نمو أعمالك <br />
                                        مع <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-600">خبراء التسويق</span> لدينا
                                    </>
                                )}
                            </h1>
                        </Reveal>

                        <Reveal delay={0.2}>
                            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                                {t.hero.description}
                            </p>
                        </Reveal>
                    </div>

                    <div className="flex flex-wrap gap-5">
                        <Reveal delay={0.3}>
                            <Button size="lg" className="rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 shadow-xl shadow-purple-500/20 px-10 h-14 text-base font-semibold transition-all hover:scale-105 active:scale-95" asChild>
                                <Link href="#contact">
                                    {language === "en" ? "Get Started" : "ابدأ الآن"}
                                </Link>
                            </Button>
                        </Reveal>
                        <Reveal delay={0.4}>
                            <Button variant="outline" size="lg" className="rounded-full px-8 h-14 border-2 hover:bg-secondary/50 transition-all group" asChild>
                                <Link href="#portfolio" className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                                        <Play className="w-3 h-3 fill-current" />
                                    </div>
                                    <span className="font-semibold">{language === "en" ? "Watch Video" : "شاهد الفيديو"}</span>
                                </Link>
                            </Button>
                        </Reveal>
                    </div>
                </div>

                {/* Right Column: Visual Elements */}
                <div className="relative order-1 lg:order-2 flex justify-center items-center h-[500px] lg:h-[650px]">
                    {/* Background Decorative Circle */}
                    <motion.div
                        animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute w-[80%] aspect-square rounded-full bg-gradient-to-br from-purple-100 to-cyan-100/50 -z-10"
                    />

                    {/* Person Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative w-full h-full max-w-[500px]"
                    >
                        <Image
                            src="/img/hero_person.png"
                            alt="Expert Developer"
                            fill
                            className="object-contain"
                            priority
                        />

                        {/* Floating Badges */}
                        {/* 1. Experience Badge */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-[15%] -left-[10%] lg:-left-[15%] bg-card text-card-foreground p-4 rounded-2xl shadow-2xl border border-border flex flex-col items-center gap-1 z-20"
                        >
                            <div className="text-2xl font-black text-primary">12 Years</div>
                            <div className="text-xs font-bold text-muted-foreground uppercase tracking-tighter">Experience</div>
                            <div className="flex gap-0.5 mt-1">
                                {[1, 2, 3, 4, 5].map((s) => (
                                    <Star key={s} className="w-3 h-3 fill-orange-400 text-orange-400" />
                                ))}
                            </div>
                        </motion.div>

                        {/* 2. Service Badge */}
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-[20%] -left-[5%] lg:-left-[10%] w-24 h-24 rounded-full bg-purple-600 flex flex-col items-center justify-center text-white shadow-xl z-20"
                        >
                            <div className="text-xl font-black leading-none">24/7</div>
                            <div className="text-[10px] font-bold uppercase tracking-tight">Service</div>
                        </motion.div>

                        {/* 3. Experts Badge */}
                        <motion.div
                            animate={{ scale: [1, 1.02, 1] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            className="absolute bottom-[25%] -right-[5%] lg:-right-[10%] bg-card text-card-foreground p-4 pr-6 rounded-2xl shadow-2xl border border-border z-20"
                        >
                            <div className="text-xs font-bold text-muted-foreground mb-3">Meet Our Experts</div>
                            <div className="flex -space-x-3 overflow-hidden">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="inline-block h-10 w-10 rounded-full ring-2 ring-background relative">
                                        <Image
                                            src={`https://i.pravatar.cc/100?u=${i + 10}`}
                                            alt="Expert"
                                            fill
                                            className="rounded-full object-cover"
                                        />
                                    </div>
                                ))}
                                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-purple-600 text-[10px] font-bold text-white ring-2 ring-background">
                                    7+
                                </div>
                            </div>
                        </motion.div>

                        {/* 4. Chart Badge */}
                        <motion.div
                            animate={{ x: [0, 5, 0], y: [0, -5, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-[10%] -right-[5%] lg:-right-[8%] bg-card text-card-foreground p-3 rounded-xl shadow-2xl border border-border z-20"
                        >
                            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600">
                                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 20L4 12M8 20L8 8M12 20L12 14M16 20L16 6M20 20L20 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    <path d="M16 4.5L18.5 2M18.5 2V5M18.5 2H15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
