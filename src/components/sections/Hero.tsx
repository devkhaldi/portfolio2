"use client";

import { cn } from "@/lib/utils";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/animations/Reveal";
import { HeroIllustration } from "@/components/illustrations/HeroIllustration";
import * as React from "react";
import { useLanguage } from "@/providers/LanguageProvider";

export function Hero() {
    const { t, language } = useLanguage();
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const rafRef = React.useRef<number | null>(null);

    const springConfig = { damping: 25, stiffness: 150 };
    const dx = useSpring(mouseX, springConfig);
    const dy = useSpring(mouseY, springConfig);
    // Derived inverted transforms (stable references, not re-created each render)
    const dxInv = useTransform(dx, (v) => v * -1.5);
    const dyInv = useTransform(dy, (v) => v * -1.5);

    const isRTL = language === "ar";

    // Throttle mouse updates to one per animation frame to prevent flooding
    const handleMouseMove = React.useCallback((e: React.MouseEvent) => {
        if (rafRef.current !== null) return;
        const { clientX, clientY } = e;
        rafRef.current = requestAnimationFrame(() => {
            const { innerWidth, innerHeight } = window;
            mouseX.set((clientX - innerWidth / 2) / 25);
            mouseY.set((clientY - innerHeight / 2) / 25);
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
            className="relative min-h-screen flex items-center pt-20 overflow-hidden"
        >
            {/* Background Elements with Mouse Parallax */}
            <div className="absolute inset-0 -z-10" aria-hidden="true">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-background via-background to-secondary/20" />

                {/* Static blur orbs — no animation to avoid constant repaint/compositing */}
                <motion.div
                    style={{ x: dx, y: dy }}
                    className="absolute top-20 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[80px]"
                />
                <motion.div
                    style={{ x: dxInv, y: dyInv }}
                    className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[80px]"
                />
            </div>

            <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Column: Text */}
                <div className="space-y-6">
                    <Reveal>
                        <div className="inline-block px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-500 text-xs font-semibold tracking-wider mb-4">
                            {t.services.badge.toUpperCase()}
                        </div>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
                            {language === "en" ? (
                                <>
                                    <span className="whitespace-nowrap inline-flex items-center gap-2">
                                        Welcome to Khaldi Tech.
                                        <motion.span
                                            animate={{ rotate: [0, 15, -15, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
                                            style={{ display: "inline-block", originX: 0.7, originY: 0.7 }}
                                        >
                                            🚀
                                        </motion.span>
                                    </span>
                                    <br />
                                    We are a Digital Agency.
                                </>
                            ) : (
                                <>
                                    <span className="whitespace-nowrap inline-flex items-center gap-2">
                                        مرحباً بك في خالدي تيك.
                                        <motion.span
                                            animate={{ rotate: [0, -15, 15, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
                                            style={{ display: "inline-block", originX: 0.7, originY: 0.7 }}
                                        >
                                            🚀
                                        </motion.span>
                                    </span>
                                    <br />
                                    وكالة رقمية متكاملة.
                                </>
                            )}
                        </h1>
                    </Reveal>

                    <Reveal delay={0.3}>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
                            {t.hero.description}
                        </p>
                    </Reveal>

                    {/* Staggered Buttons */}
                    <div className="flex flex-wrap gap-4 pt-4">
                        <motion.div
                            initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <Button size="lg" className="rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 shadow-lg shadow-purple-500/25" asChild>
                                <Link href="https://wa.me/12134019038?text=Hello%20Khaldi%20Tech!%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project%20with%20you." target="_blank">
                                    {t.hero.ctaContact} <ArrowRight className={cn("ms-2 h-4 w-4", isRTL && "rotate-180")} />
                                </Link>
                            </Button>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            <Button variant="outline" size="lg" className="rounded-full px-8" asChild>
                                <Link href="#portfolio">{t.hero.ctaProjects}</Link>
                            </Button>
                        </motion.div>
                    </div>

                    {/* Staggered Socials removed to fit agency perspective without individual accounts */}
                    <div className="pt-8"></div>
                </div>

                {/* Right Column: Interactive Illustration & Skill Cards */}
                <div className="relative hidden lg:flex h-[600px] items-center justify-center">
                    {/* Background Circle — CSS animation is cheaper than Framer Motion for simple infinite rotate */}
                    <div
                        className="absolute w-[450px] h-[450px] rounded-full border border-dashed border-primary/20 animate-[spin_30s_linear_infinite] motion-reduce:animate-none"
                        aria-hidden="true"
                    />

                    {/* Interactive Illustration & Skill Cards */}
                    <div className="relative w-full h-full flex items-center justify-center">

                        {/* Central Profile Illustration */}
                        <HeroIllustration />

                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <div className="text-[10px] font-medium text-muted-foreground uppercase tracking-widest">{language === "en" ? "Explore More" : "استكشف المزيد"}</div>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-6 h-10 rounded-full border-2 border-muted flex justify-center p-1.5"
                >
                    <motion.div className="w-1 h-2 bg-primary rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
}
