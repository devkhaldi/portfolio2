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

export function Portfolio() {
    const { t, language } = useLanguage();
    const [activeFilter, setActiveFilter] = React.useState("all");

    const isRTL = language === "ar";

    return (
        <section id="portfolio" className="py-24 relative overflow-hidden bg-secondary/10 dark:bg-secondary/5">
            <div className="container mx-auto px-4 relative z-10 pt-8">
                <div className="mb-16 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-500 text-xs font-bold tracking-widest uppercase mb-6"
                    >
                        {t.portfolio.badge}
                    </motion.div>

                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
                                {t.portfolio.title}
                            </h2>
                            <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
                                {t.hero.description}
                            </p>
                        </div>
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
                                <Card className="overflow-hidden border-0 bg-background/40 backdrop-blur-xl group-hover:bg-background/60 transition-all duration-500 h-full flex flex-col rounded-[2rem] border border-white/5 group-hover:border-primary/20 group-hover:shadow-[0_20px_50px_-15px_rgba(139,92,246,0.15)]">
                                    <div className="relative aspect-[16/10] overflow-hidden bg-secondary/20">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />

                                        {/* Status Badge */}
                                        <div className={cn("absolute top-5 z-10", isRTL ? "right-5" : "left-5")}>
                                            <Badge className="bg-background/80 backdrop-blur-md text-foreground border-white/10 px-4 py-1.5 rounded-full font-bold shadow-lg">
                                                {project.badge[language as keyof typeof project.badge]}
                                            </Badge>
                                        </div>

                                        {/* Modern Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center gap-4 z-30">
                                            <Button variant="default" size="lg" className="rounded-full px-8 bg-primary hover:bg-primary/90 text-white font-black shadow-xl scale-90 group-hover:scale-100 transition-transform duration-500" asChild>
                                                <Link href={project.url} target="_blank">
                                                    {t.portfolio.preview} <ExternalLink className="ms-2 h-4 w-4" />
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>

                                    <CardContent className="p-10 flex-1 flex flex-col">
                                        <div className="space-y-4 flex-1">
                                            <div className="flex items-center gap-3">
                                                <span className="h-px w-8 bg-primary/40 group-hover:w-12 transition-all duration-500" />
                                                <span className="text-xs font-black uppercase tracking-[0.2em] text-primary/80 group-hover:text-primary transition-colors">
                                                    {project.category[language as keyof typeof project.category]}
                                                </span>
                                            </div>

                                            <h3 className="text-2xl font-black tracking-tight leading-none group-hover:translate-x-1 transition-transform duration-300">
                                                {project.title}
                                            </h3>

                                            <p className="text-muted-foreground text-base leading-relaxed line-clamp-3">
                                                {project.description[language as keyof typeof project.description]}
                                            </p>

                                            <div className="flex flex-wrap gap-2 pt-4">
                                                {project.technologies.slice(0, 4).map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider bg-secondary/50 text-foreground/70 border border-white/5 hover:border-primary/30 hover:text-primary transition-colors"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                    ))}
                </div>

                {/* Simplified CTA */}
                <div className="flex justify-center mt-20">
                    <Button variant="outline" size="lg" className="rounded-full px-12 text-lg font-black group overflow-hidden relative" asChild>
                        <Link href="#about">
                        <span className="relative z-10 flex items-center gap-2">
                            {t.navbar.about} <ChevronRight className={cn("h-5 w-5 group-hover:translate-x-1 transition-transform", isRTL && "rotate-180")} />
                        </span>
                        <div className="absolute inset-0 bg-primary/5 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
