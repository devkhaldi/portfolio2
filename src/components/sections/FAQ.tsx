"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import * as React from "react";
import { useLanguage } from "@/providers/LanguageProvider";
import { cn } from "@/lib/utils";
import { FAQIllustration } from "@/components/illustrations/FAQIllustration";

export function FAQ() {
    const { t, language } = useLanguage();
    const [openIndex, setOpenIndex] = React.useState<number | null>(0);
    const isRTL = language === "ar";

    return (
        <section id="faq" className="py-24 relative overflow-hidden bg-background">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column: Animated Illustration (Now on the left) */}
                    <div className="order-1 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        >
                            <FAQIllustration />
                        </motion.div>
                    </div>

                    {/* Right Column: FAQ Content (Now on the right) */}
                    <div className="order-2 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6"
                        >
                            <HelpCircle className="h-3 w-3" />
                            {t.faq.badge}
                        </motion.div>

                        <div className="mb-12">
                            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
                                {t.faq.title}{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                                    {t.faq.titleAccent}
                                </span>
                            </h2>
                        </div>

                        <div className="space-y-4">
                            {t.faq.items.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className={cn(
                                        "group rounded-[2rem] border transition-all duration-300",
                                        openIndex === index 
                                            ? "border-primary/30 bg-primary/5" 
                                            : "border-white/5 bg-secondary/10 hover:border-white/20"
                                    )}
                                >
                                    <button
                                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                        className="w-full px-8 py-6 flex items-center justify-between text-start gap-4"
                                        aria-expanded={openIndex === index}
                                    >
                                        <span className="text-lg font-bold group-hover:text-primary transition-colors">
                                            {item.question}
                                        </span>
                                        <div className={cn(
                                            "flex-shrink-0 w-8 h-8 rounded-full border border-primary/20 flex items-center justify-center transition-all duration-300",
                                            openIndex === index ? "bg-primary text-white rotate-180" : "bg-primary/10 text-primary"
                                        )}>
                                            {openIndex === index ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                                        </div>
                                    </button>

                                    <AnimatePresence>
                                        {openIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-8 pb-8 pt-0 text-muted-foreground leading-relaxed">
                                                    {item.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
