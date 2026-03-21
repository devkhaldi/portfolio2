"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { testimonials } from "@/data/testimonials";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/providers/LanguageProvider";

export function Testimonials() {
    const { t, language } = useLanguage();
    const [emblaRef] = useEmblaCarousel({
        loop: true,
        align: "center",
        direction: language === "ar" ? "rtl" : "ltr"
    }, [
        Autoplay({ delay: 6000, stopOnInteraction: false }),
    ]);

    const isRTL = language === "ar";

    return (
        <section id="testimonials" className="py-24 relative overflow-hidden bg-secondary/10">
            {/* Background Accents */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.05, 0.1, 0.05]
                    }}
                    transition={{ duration: 15, repeat: Infinity }}
                    className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.05, 0.1, 0.05]
                    }}
                    transition={{ duration: 18, repeat: Infinity, delay: 2 }}
                    className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px]"
                />
            </div>

            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase"
                    >
                        {t.testimonials.badge}
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight underline decoration-primary/20 underline-offset-8">
                        {t.testimonials.title}
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        {t.testimonials.description}
                    </p>
                </div>

                <div className="overflow-hidden cursor-grab active:cursor-grabbing px-4" ref={emblaRef}>
                    <div className="flex -ml-6">
                        {testimonials.map((testimonial, index) => (
                            <div key={testimonial.id} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_40%] min-w-0 pl-6 h-full">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
                                    viewport={{ once: true }}
                                    className="h-full py-4 px-1"
                                >
                                    <Card className="h-full bg-background/40 backdrop-blur-xl border-white/5 transition-all duration-500 group relative rounded-3xl group overflow-hidden hover:bg-background/60 hover:shadow-[0_20px_50px_-15px_rgba(139,92,246,0.15)] hover:-translate-y-2">
                                        <CardContent className="p-10 flex flex-col h-full relative z-10">
                                            <motion.div
                                                whileHover={{ scale: 1.1, rotate: isRTL ? 5 : -5 }}
                                                className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 border border-primary/20"
                                            >
                                                <Quote className={cn("h-6 w-6 text-primary", isRTL && "rotate-180")} />
                                            </motion.div>

                                            <div className="flex-1 mb-10">
                                                <p className="text-foreground text-lg italic leading-relaxed font-medium">
                                                    &quot;{testimonial.content[language as keyof typeof testimonial.content]}&quot;
                                                </p>
                                            </div>

                                            <div className="flex items-center gap-5 pt-8 border-t border-border/50">
                                                <div className="relative">
                                                    <Avatar className="h-14 w-14 border-2 border-primary/20 p-0.5">
                                                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} className="rounded-full" />
                                                        <AvatarFallback className="font-black">{testimonial.name.charAt(0)}</AvatarFallback>
                                                    </Avatar>
                                                    <div className={cn("absolute -bottom-1 bg-primary text-white p-1 rounded-full shadow-lg", isRTL ? "-left-1" : "-right-1")}>
                                                        <Star className="h-3 w-3 fill-current" />
                                                    </div>
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="font-black text-foreground text-sm tracking-tight truncate">{testimonial.name}</div>
                                                    <div className="text-[10px] text-muted-foreground uppercase font-black tracking-widest truncate">
                                                        {testimonial.role[language as keyof typeof testimonial.role]} <span className="text-primary/40 mx-1">/</span> {testimonial.company}
                                                    </div>
                                                </div>
                                                <div className="hidden sm:flex gap-0.5 ml-2">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star
                                                            key={i}
                                                            className={cn(
                                                                "h-3.5 w-3.5",
                                                                i < testimonial.rating ? "fill-yellow-500 text-yellow-500" : "fill-border text-border"
                                                            )}
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        </CardContent>
                                        {/* Hover Glow Effect */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </Card>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
