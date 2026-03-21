"use client";

import { motion } from "framer-motion";
import { Code, ShoppingCart, Layout, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/providers/LanguageProvider";

export function Services() {
    const { t } = useLanguage();

    const services = [
        {
            title: t.services.items.web.title,
            description: t.services.items.web.desc,
            icon: Code,
            color: "text-purple-500",
            bgColor: "bg-purple-500/10",
            borderColor: "group-hover:border-purple-500/50",
        },
        {
            title: t.services.items.ecommerce.title,
            description: t.services.items.ecommerce.desc,
            icon: ShoppingCart,
            color: "text-cyan-500",
            bgColor: "bg-cyan-500/10",
            borderColor: "group-hover:border-cyan-500/50",
        },
        {
            title: t.services.items.nocode.title,
            description: t.services.items.nocode.desc,
            icon: Layout,
            color: "text-pink-500",
            bgColor: "bg-pink-500/10",
            borderColor: "group-hover:border-pink-500/50",
        },
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

    return (
        <section id="services" className="py-24 relative overflow-hidden">
            {/* Background Accents — static blurs, no animation for performance */}
            <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
                <div className="absolute top-1/4 -right-20 w-80 h-80 bg-purple-500/15 rounded-full blur-[80px]" />
                <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-[80px]" />
            </div>

            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase"
                    >
                        {t.services.badge}
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight">
                        {t.services.title}
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        {t.hero.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className={cn(
                                "h-full bg-secondary/10 backdrop-blur-md border-white/5 transition-all duration-500 group relative overflow-hidden",
                                "hover:bg-secondary/20 hover:-translate-y-3 hover:shadow-2xl hover:shadow-primary/5",
                                service.borderColor
                            )}>
                                <CardHeader className="relative z-10">
                                    <div
                                        className={cn(
                                            "p-4 rounded-2xl w-fit mb-6 transition-all duration-300 shadow-inner group-hover:scale-110 group-hover:shadow-primary/20",
                                            service.bgColor, service.color
                                        )}
                                    >
                                        <service.icon className="h-10 w-10" />
                                    </div>
                                    <CardTitle className="text-2xl font-bold tracking-tight mb-2 group-hover:text-primary transition-colors">
                                        {service.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="relative z-10">
                                    <CardDescription className="text-muted-foreground text-base leading-relaxed">
                                        {service.description}
                                    </CardDescription>
                                </CardContent>
                                {/* Hover Glow Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Modern Tech Stack */}
                <div className="pt-16 border-t border-border/40">
                    <p className="text-center text-sm font-bold text-muted-foreground/60 uppercase tracking-[0.3em] mb-12">
                        {t.services.techStack}
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-10 items-center justify-items-center opacity-40 hover:opacity-100 transition-opacity duration-700">
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
