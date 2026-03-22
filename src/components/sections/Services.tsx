"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Zap, Star, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/providers/LanguageProvider";

export function Services() {
    const { t, language } = useLanguage();
    const isRTL = language === "ar";
    
    const pricingData = [
        {
            id: "starter",
            ...t.services.pricing.starter,
            icon: Zap,
            highlight: true,
            popular: false,
            color: "from-blue-600 to-cyan-400",
            shadow: "shadow-cyan-500/20",
        },
        {
            id: "professional",
            ...t.services.pricing.professional,
            icon: Star,
            highlight: false,
            popular: true,
            color: "from-purple-600 to-pink-500",
            shadow: "shadow-purple-500/20",
        },
        {
            id: "business",
            ...t.services.pricing.business,
            icon: ShieldCheck,
            highlight: false,
            popular: false,
            color: "from-amber-500 to-orange-600",
            shadow: "shadow-orange-500/20",
        }
    ];

    const technologies = [
        { name: "Next.js", color: "hover:text-[#ffffff] dark:hover:text-[#ffffff]" },
        { name: "React", color: "hover:text-[#61DAFB]" },
        { name: "Tailwind", color: "hover:text-[#38B2AC]" },
        { name: "Shopify", color: "hover:text-[#95BF47]" },
        { name: "WordPress", color: "hover:text-[#21759B]" },
        { name: "Webflow", color: "hover:text-[#4353FF]" },
        { name: "Node.js", color: "hover:text-[#339933]" },
        { name: "TypeScript", color: "hover:text-[#3178C6]" },
    ];

    const handleWhatsAppRedirect = (message: string) => {
        const encodedMsg = encodeURIComponent(message);
        window.open(`https://wa.me/212708772806?text=${encodedMsg}`, "_blank");
    };

    return (
        <section id="services" className="py-32 relative overflow-hidden bg-background">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
                <div className="absolute top-1/4 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block px-5 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-black tracking-[0.2em] uppercase"
                    >
                        {t.services.badge}
                    </motion.div>
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-4">
                        {t.services.title}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32 items-stretch">
                    {pricingData.map((tier, index) => (
                        <motion.div
                            key={tier.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex"
                        >
                            <Card className={cn(
                                "relative flex flex-col w-full rounded-[2.5rem] border-white/10 bg-secondary/10 backdrop-blur-xl overflow-hidden transition-all duration-500 group",
                                tier.popular && "border-primary/40 bg-primary/5 ring-1 ring-primary/20 shadow-2xl scale-105 z-20",
                                !tier.popular && "hover:border-white/30 hover:bg-secondary/20 hover:-translate-y-2"
                            )}>
                                {tier.popular && (
                                    <div className="absolute top-6 right-8">
                                        <span className="bg-primary text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                                            {tier.note}
                                        </span>
                                    </div>
                                )}

                                <div className="p-10 flex-1 flex flex-col">
                                    <div className="mb-10">
                                        <div className={cn(
                                            "w-14 h-14 rounded-2xl flex items-center justify-center mb-8 bg-gradient-to-br transition-all duration-500 group-hover:scale-110 group-hover:rotate-6",
                                            tier.color
                                        )}>
                                            <tier.icon className="h-7 w-7 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-black tracking-tight mb-2">{tier.name}</h3>
                                        <p className="text-muted-foreground text-xs font-bold uppercase tracking-widest">{tier.note && !tier.popular ? tier.note : "Standard Plan"}</p>
                                    </div>

                                    <div className="mb-10 flex items-baseline gap-2">
                                        <span className={cn(
                                            "text-6xl font-black tracking-tighter",
                                            tier.highlight ? "text-primary" : "text-foreground"
                                        )}>
                                            ${tier.price}
                                        </span>
                                        <div className="flex flex-col">
                                            <div className="flex items-center gap-2">
                                                <span className="text-muted-foreground/50 text-xl font-bold line-through ml-1 decoration-primary/50 decoration-2">
                                                    ${tier.originalPrice}
                                                </span>
                                                <span className="bg-emerald-500/10 text-emerald-500 text-[10px] font-black px-2 py-0.5 rounded-full border border-emerald-500/20">
                                                    {tier.discount}
                                                </span>
                                            </div>
                                            <span className="text-[10px] font-black uppercase tracking-widest text-primary/80">{t.services.monthly}</span>
                                        </div>
                                    </div>

                                    <ul className="space-y-4 mb-10 flex-1">
                                        {tier.features.map((feature, fIndex) => (
                                            <li key={fIndex} className="flex items-center gap-3 text-sm font-bold text-foreground/80 group/item">
                                                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center group-hover/item:bg-primary/20 transition-colors">
                                                    <Check className="h-3.5 w-3.5 text-primary" />
                                                </div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <Button 
                                        variant={tier.popular ? "premium" : "outline"} 
                                        size="lg" 
                                        onClick={() => handleWhatsAppRedirect(tier.whatsappMsg)}
                                        className={cn(
                                            "w-full rounded-2xl h-14 font-black transition-all duration-300 group/btn overflow-hidden relative cursor-pointer",
                                            !tier.popular && "hover:bg-primary hover:text-white hover:border-primary shadow-lg hover:shadow-primary/20"
                                        )}
                                    >
                                        <span className="relative z-10 flex items-center justify-center gap-2">
                                            {tier.cta} <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                                        </span>
                                    </Button>
                                </div>

                                {/* Bottom Glow */}
                                <div className={cn(
                                    "absolute bottom-0 left-0 w-full h-1 opacity-20 bg-gradient-to-r",
                                    tier.color
                                )} />
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Modern Tech Stack */}
                <div className="pt-24 border-t border-border/40">
                    <p className="text-center text-sm font-black text-muted-foreground/60 uppercase tracking-[0.4em] mb-16">
                        {t.services.techStack}
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-12 items-center justify-items-center opacity-30 hover:opacity-100 transition-opacity duration-700">
                        {technologies.map((tech, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: i * 0.05 }}
                                className={cn(
                                    "text-lg font-black tracking-tighter cursor-default transition-all duration-300 hover:scale-125",
                                    tech.color
                                )}
                            >
                                {tech.name}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
