"use client";

import { motion } from "framer-motion";
import { ExternalLink, Globe, ShoppingBag, Layout, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/data/projects";
import * as React from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/providers/LanguageProvider";
import { Language } from "@/data/translations";

import { useSmoothScroll } from "@/components/providers/SmoothScrollProvider";

export function Portfolio() {
    const { t, language } = useLanguage();
    const [activeFilter, setActiveFilter] = React.useState("all");
    const lenis = useSmoothScroll();

    const isRTL = language === "ar";

    const handleAboutClick = (e: React.MouseEvent) => {
        if (lenis) {
            e.preventDefault();
            lenis.scrollTo("#about", { offset: -50, duration: 1.5 });
        }
    };

    return (
        <section id="portfolio" className="py-32 relative overflow-hidden bg-background">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
            <div className="absolute top-1/4 right-0 -mr-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 -ml-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="container mx-auto px-4 relative z-10">
                <div className="mb-20 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-black tracking-[0.2em] uppercase mb-6"
                    >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        {t.portfolio.badge}
                    </motion.div>

                    <div className="space-y-6 max-w-3xl">
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
                            {t.portfolio.title}
                        </h2>
                        <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                            {t.hero.description}
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (<motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.3) }}
                                viewport={{ once: true, margin: "-50px" }}
                                className="group h-full"
                            >
                                <Card className="relative overflow-hidden bg-background/40 backdrop-blur-2xl transition-all duration-500 h-full flex flex-col rounded-[2.5rem] border border-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] group-hover:bg-white/[0.02] group-hover:border-white/20 group-hover:-translate-y-4 group-hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]">
                                    <div className="relative aspect-[16/10] overflow-hidden bg-secondary/20">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />

                                        {/* Status Badge */}
                                        <div className={cn("absolute top-5 z-20 transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-105", isRTL ? "right-5" : "left-5")}>
                                            <Badge className="bg-background/60 backdrop-blur-lg text-foreground border-white/10 px-4 py-1.5 rounded-full font-bold shadow-lg">
                                                {project.badge[language as keyof typeof project.badge]}
                                            </Badge>
                                        </div>

                                        {/* Modern Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col items-center justify-center gap-4 z-10 backdrop-blur-[2px]">
                                            <Button variant="default" size="lg" className="rounded-full px-8 bg-primary hover:bg-primary/90 text-white font-black shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_40px_rgba(139,92,246,0.8)] translate-y-10 group-hover:translate-y-0 transition-all duration-500" asChild>
                                                <Link href={project.url} target="_blank">
                                                    {t.portfolio.preview} <ExternalLink className="ms-2 h-4 w-4" />
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>

                                    <CardContent className="p-8 md:p-10 flex-1 flex flex-col relative z-20">
                                        <div className="space-y-4 flex-1">
                                            <div className="flex items-center gap-3">
                                                <span className="h-px w-8 bg-primary/40 group-hover:w-12 group-hover:bg-primary transition-all duration-500" />
                                                <span className="text-xs font-black uppercase tracking-[0.2em] bg-clip-text text-transparent bg-gradient-to-r from-primary/80 to-primary group-hover:from-primary group-hover:to-cyan-400 transition-all duration-500">
                                                    {project.category[language as keyof typeof project.category]}
                                                </span>
                                            </div>

                                            <h3 className="text-2xl lg:text-3xl font-black tracking-tight leading-none group-hover:translate-x-1 transition-transform duration-300 group-hover:text-primary">
                                                {project.title}
                                            </h3>

                                            <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                                                {project.description[language as keyof typeof project.description]}
                                            </p>

                                            <div className="flex flex-wrap gap-2 pt-4">
                                                {project.technologies.slice(0, 4).map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider bg-primary/5 text-primary/80 border border-primary/10 hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all duration-300 hover:scale-105 cursor-default hover:shadow-[0_0_15px_rgba(139,92,246,0.15)]"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </CardContent>

                                    {/* Bottom Glow */}
                                    <div className="absolute bottom-0 left-0 w-full h-1 opacity-10 bg-gradient-to-r from-primary via-cyan-500 to-primary transition-all duration-500 group-hover:opacity-100 group-hover:h-2" />
                                </Card>
                            </motion.div>
                    ))}
                </div>

                {/* Premium CTA */}
                <div className="flex justify-center mt-32 relative z-10">
                    <Button 
                        variant="premium" 
                        size="lg" 
                        className="rounded-2xl px-12 h-16 text-lg font-black group overflow-hidden relative shadow-[0_0_40px_-10px_rgba(139,92,246,0.4)] hover:shadow-[0_0_60px_-15px_rgba(139,92,246,0.7)] transition-all duration-500 hover:-translate-y-1" 
                        asChild
                    >
                        <Link href="#about" onClick={handleAboutClick}>
                            <span className="relative z-10 flex items-center gap-2">
                                {t.navbar.about} <ChevronRight className={cn("h-5 w-5 group-hover:translate-x-1 transition-transform", isRTL && "rotate-180")} />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
