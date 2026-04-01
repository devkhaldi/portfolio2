"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/providers/LanguageProvider";

type FormData = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

const FloatingInput = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement> & { label: string; error?: string; isRTL?: boolean }>(
    ({ label, error, className, id, isRTL, ...props }, ref) => {
        const [isFocused, setIsFocused] = React.useState(false);
        const [hasValue, setHasValue] = React.useState(!!props.value || !!props.defaultValue);
        const shouldReduceMotion = useReducedMotion();
        const inputId = id || props.name;

        return (
            <motion.div
                animate={error && !shouldReduceMotion ? { x: [0, -4, 4, -4, 4, 0] } : {}}
                transition={{ duration: 0.4 }}
                className="relative w-full group"
            >
                <Input
                    {...props}
                    ref={ref}
                    id={inputId}
                    onFocus={() => setIsFocused(true)}
                    onBlur={(e) => {
                        setIsFocused(false);
                        setHasValue(!!e.target.value);
                    }}
                    onChange={(e) => {
                        setHasValue(!!e.target.value);
                        props.onChange?.(e);
                    }}
                    aria-invalid={!!error}
                    aria-describedby={error ? `${inputId}-error` : undefined}
                    className={cn(
                        "block w-full px-6 pt-6 pb-2 text-sm text-foreground bg-white border-2 focus-visible:ring-4 focus-visible:ring-primary/10 focus-visible:ring-offset-0 rounded-xl transition-all duration-500 shadow-none min-h-[68px] font-medium outline-none",
                        error ? "border-destructive/50" : "border-transparent focus-within:border-white hover:border-white/50",
                        isRTL && "text-right",
                        className
                    )}
                />
                <label
                    htmlFor={inputId}
                    className={cn(
                        "absolute transition-all duration-300 pointer-events-none text-muted-foreground whitespace-nowrap font-semibold",
                        isRTL ? "right-6" : "left-6",
                        (isFocused || hasValue)
                            ? "top-2 text-[10px] text-primary uppercase tracking-widest font-bold"
                            : "top-1/2 -translate-y-1/2 text-base"
                    )}
                >
                    {label}
                </label>
                <AnimatePresence>
                    {error && (
                        <motion.span
                            id={`${inputId}-error`}
                            role="alert"
                            initial={{ opacity: 0, y: !shouldReduceMotion ? -4 : 0 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: !shouldReduceMotion ? -4 : 0 }}
                            transition={{ duration: !shouldReduceMotion ? 0.3 : 0 }}
                            className={cn("text-xs font-semibold text-destructive absolute -bottom-6 tracking-wide", isRTL ? "right-2" : "left-2")}
                        >
                            {error.toLowerCase().replace(/^\w/, (c) => c.toUpperCase())}
                        </motion.span>
                    )}
                </AnimatePresence>
            </motion.div>
        );
    }
);
FloatingInput.displayName = "FloatingInput";

const FloatingTextarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string; error?: string; isRTL?: boolean }>(
    ({ label, error, className, id, isRTL, ...props }, ref) => {
        const [isFocused, setIsFocused] = React.useState(false);
        const [hasValue, setHasValue] = React.useState(!!props.value || !!props.defaultValue);
        const shouldReduceMotion = useReducedMotion();
        const inputId = id || props.name;

        return (
            <motion.div
                animate={error && !shouldReduceMotion ? { x: [0, -4, 4, -4, 4, 0] } : {}}
                transition={{ duration: 0.4 }}
                className="relative w-full group"
            >
                <Textarea
                    {...props}
                    ref={ref}
                    id={inputId}
                    onFocus={() => setIsFocused(true)}
                    onBlur={(e) => {
                        setIsFocused(false);
                        setHasValue(!!e.target.value);
                    }}
                    onChange={(e) => {
                        setHasValue(!!e.target.value);
                        props.onChange?.(e);
                    }}
                    aria-invalid={!!error}
                    aria-describedby={error ? `${inputId}-error` : undefined}
                    className={cn(
                        "block w-full px-6 pt-8 pb-4 text-sm text-foreground bg-white border-2 focus-visible:ring-4 focus-visible:ring-primary/10 focus-visible:ring-offset-0 rounded-xl transition-all duration-500 shadow-none min-h-[180px] resize-none font-medium outline-none",
                        error ? "border-destructive/50" : "border-transparent focus-within:border-white hover:border-white/50",
                        isRTL && "text-right",
                        className
                    )}
                />
                <label
                    htmlFor={inputId}
                    className={cn(
                        "absolute transition-all duration-300 pointer-events-none text-muted-foreground whitespace-nowrap font-semibold",
                        isRTL ? "right-6" : "left-6",
                        (isFocused || hasValue)
                            ? "top-3 text-[10px] text-primary uppercase tracking-widest font-bold"
                            : "top-6 text-base"
                    )}
                >
                    {label}
                </label>
                <AnimatePresence>
                    {error && (
                        <motion.span
                            id={`${inputId}-error`}
                            role="alert"
                            initial={{ opacity: 0, y: !shouldReduceMotion ? -4 : 0 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: !shouldReduceMotion ? -4 : 0 }}
                            transition={{ duration: !shouldReduceMotion ? 0.3 : 0 }}
                            className={cn("text-xs font-semibold text-destructive absolute -bottom-6 tracking-wide", isRTL ? "right-2" : "left-2")}
                        >
                            {error.toLowerCase().replace(/^\w/, (c) => c.toUpperCase())}
                        </motion.span>
                    )}
                </AnimatePresence>
            </motion.div>
        );
    }
);
FloatingTextarea.displayName = "FloatingTextarea";

export function Contact() {
    const { t, language } = useLanguage();
    const shouldReduceMotion = useReducedMotion();
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<FormData>();

    const [isSuccess, setIsSuccess] = React.useState(false);

    const onSubmit = async (data: FormData) => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log(data);
        setIsSuccess(true);
        reset();
        setTimeout(() => setIsSuccess(false), 5000);
    };

    const isRTL = language === "ar";

    return (
        <section id="contact" aria-label={t.contact.title} className="relative min-h-[100vh] lg:min-h-screen lg:h-screen w-full flex flex-col lg:flex-row overflow-hidden">

            {/* Split Backgrounds */}
            <div className="absolute inset-0 pointer-events-none flex flex-col lg:flex-row -z-10" aria-hidden="true">
                <div className="flex-1 bg-secondary/5 relative overflow-hidden">
                    <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[512px] h-[512px] bg-primary/5 rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px]" />
                </div>
                <div className="flex-1 bg-primary shadow-[inset_10px_0_40px_rgba(0,0,0,0.2)] relative overflow-hidden">
                    {/* Subtle patterns for primary side */}
                    <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px]" />
                    <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] bg-black/20 rounded-full blur-[80px]" />
                </div>
            </div>

            {/* Content Container (Full Width) */}
            <div className="w-full h-full flex flex-col lg:flex-row">

                {/* Left Column: Visual & Info (50%) */}
                <div className="flex-1 flex items-center justify-center p-8 lg:p-16 xl:p-24 relative">
                    <motion.div
                        initial={!shouldReduceMotion ? { opacity: 0, x: isRTL ? 32 : -32 } : { opacity: 1, x: 0 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: !shouldReduceMotion ? 0.8 : 0 }}
                        viewport={{ once: true }}
                        className="max-w-xl space-y-10"
                    >
                        <div className="space-y-6">
                            <motion.div
                                initial={!shouldReduceMotion ? { opacity: 0, y: 12 } : { opacity: 1, y: 0 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: !shouldReduceMotion ? 0.6 : 0 }}
                                className="inline-block px-4 py-1.5 rounded-full border border-primary/25 bg-primary/10 text-primary text-[10px] font-black tracking-[0.2em] uppercase"
                            >
                                {t.contact.badge}
                            </motion.div>
                            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05]">
                                {t.contact.title} <br />
                                <span className="text-primary italic drop-shadow-sm">{t.contact.titleAccent}</span>
                            </h2>
                            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                                {t.hero.description}
                            </p>
                        </div>

                        {/* Ultra-Level Digital Ecosystem SVG */}
                        <div className="relative w-full max-w-xl aspect-[1.3/1] lg:block hidden" aria-hidden="true">
                            <svg className="w-full h-auto drop-shadow-3xl overflow-visible" viewBox="0 0 700 550">
                                <defs>
                                    <linearGradient id="eco-grad" x1="0" y1="0" x2="1" y2="1">
                                        <stop offset="0%" stopColor="var(--primary)" />
                                        <stop offset="100%" stopColor="#c026d3" />
                                    </linearGradient>
                                    <filter id="eco-glow" x="-50%" y="-50%" width="200%" height="200%">
                                        <feGaussianBlur stdDeviation="12" result="blur" />
                                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                                    </filter>
                                    <clipPath id="screen-clip">
                                        <rect x="460" y="220" width="130" height="90" rx="6" />
                                    </clipPath>
                                </defs>

                                {/* Background Fiber-Optics (Connecting World) */}
                                {[...Array(3)].map((_, i) => (
                                    <motion.path
                                        key={i}
                                        d={`M 150 ${280 + (i - 1) * 25} C 250 ${200 + i * 60}, 450 ${350 - i * 60}, 550 ${280 + (i - 1) * 25}`}
                                        fill="none"
                                        stroke="url(#eco-grad)"
                                        strokeWidth="1.5"
                                        opacity="0.08"
                                        animate={!shouldReduceMotion ? { strokeDashoffset: [200, 0] } : {}}
                                        transition={{ duration: 6 + i, repeat: Infinity, ease: "linear" }}
                                        strokeDasharray="20 40"
                                    />
                                ))}

                                {/* The Central Orbit Hub (The Global Network) */}
                                <motion.g
                                    animate={!shouldReduceMotion ? {
                                        rotate: [0, 360],
                                        scale: [0.97, 1.03, 0.97]
                                    } : {}}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                >
                                    <circle cx="350" cy="275" r="50" fill="url(#eco-grad)" opacity="0.02" />
                                    <ellipse cx="350" cy="275" rx="60" ry="20" fill="none" stroke="url(#eco-grad)" strokeWidth="1" opacity="0.2" transform="rotate(45 350 275)" />
                                    <ellipse cx="350" cy="275" rx="60" ry="20" fill="none" stroke="url(#eco-grad)" strokeWidth="1" opacity="0.2" transform="rotate(-45 350 275)" />
                                    <motion.circle
                                        cx="410" cy="275" r="5" fill="url(#eco-grad)"
                                        animate={!shouldReduceMotion ? { cx: [410, 290, 410], cy: [275, 230, 275] } : {}}
                                        transition={{ duration: 5, repeat: Infinity }}
                                    />
                                </motion.g>

                                {/* Detailed Character (The Sender) */}
                                <motion.g
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.2, type: "spring" }}
                                >
                                    {/* Abstract Stylized Body with Perspective */}
                                    <path d="M 80 440 L 150 440 L 135 340 Q 115 315 95 340 Z" fill="url(#eco-grad)" opacity="0.5" />
                                    <circle cx="115" cy="290" r="22" fill="url(#eco-grad)" opacity="0.9" />
                                    {/* Holographic Device */}
                                    <motion.g
                                        animate={!shouldReduceMotion ? { y: [0, -8, 0], rotate: [0, 8, 0] } : {}}
                                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                    >
                                        <rect x="140" y="310" width="45" height="80" rx="10" fill="rgba(255,255,255,0.08)" stroke="url(#eco-grad)" strokeWidth="1.5" />
                                        <rect x="145" y="315" width="35" height="70" rx="6" fill="url(#eco-grad)" opacity="0.15" filter="url(#eco-glow)" />
                                        <circle cx="162.5" cy="375" r="3" fill="white" opacity="0.4" />
                                    </motion.g>
                                </motion.g>

                                {/* 3D Portfolio Dashboard (The Receiver) */}
                                <motion.g
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.2, type: "spring" }}
                                >
                                    {/* Main Frame with Depth */}
                                    <path d="M 460 210 L 610 210 L 630 350 L 480 350 Z" fill="var(--background)" stroke="url(#eco-grad)" strokeWidth="3" />
                                    <path d="M 610 210 L 610 330 L 630 350 L 630 230 Z" fill="url(#eco-grad)" opacity="0.4" />

                                    {/* Screen Content Layers */}
                                    <g clipPath="url(#screen-clip)">
                                        <rect x="475" y="240" width="70" height="10" rx="5" fill="white" opacity="0.1" />
                                        <motion.rect
                                            x="475" y="260" width="120" height="50" rx="8" fill="url(#eco-grad)" opacity="0.1"
                                            animate={!shouldReduceMotion ? { scaleY: [0.95, 1.05, 0.95] } : {}}
                                            transition={{ duration: 3, repeat: Infinity }}
                                        />

                                        {/* Dynamic Success Prompt */}
                                        <motion.g
                                            animate={!shouldReduceMotion ? {
                                                opacity: [0, 0, 1, 0],
                                                y: [15, 15, 0, -15],
                                                scale: [0.8, 0.8, 1.1, 1]
                                            } : { opacity: 0 }}
                                            transition={{ duration: 6, repeat: Infinity, times: [0, 0.75, 0.85, 1] }}
                                        >
                                            <rect x="490" y="265" width="100" height="24" rx="12" fill="url(#eco-grad)" />
                                            <path d="M 515 277 L 525 285 L 545 270" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" />
                                        </motion.g>
                                    </g>
                                </motion.g>

                                {/* The Flying "Priority Packet" */}
                                <motion.g
                                    animate={!shouldReduceMotion ? {
                                        x: [185, 350, 485],
                                        y: [325, 275, 260],
                                        rotate: [15, 0, -15],
                                        scale: [0.3, 1.2, 0.3],
                                        opacity: [0, 1, 0]
                                    } : { opacity: 1 }}
                                    transition={{
                                        duration: 4.5,
                                        repeat: Infinity,
                                        ease: "circInOut",
                                        repeatDelay: 1.5
                                    }}
                                >
                                    {/* The Envelope */}
                                    <g filter="url(#eco-glow)">
                                        <rect x="-18" y="-14" width="36" height="28" rx="5" fill="white" />
                                        <path d="M -18 -14 L 0 4 L 18 -14" fill="none" stroke="url(#eco-grad)" strokeWidth="3" />
                                    </g>

                                    {/* Trailing Virtual Packets */}
                                    {[...Array(5)].map((_, i) => (
                                        <motion.rect
                                            key={i}
                                            x={-30 - i * 18}
                                            y={-4 + (i % 2) * 8}
                                            width="6" height="6"
                                            fill="url(#eco-grad)"
                                            animate={!shouldReduceMotion ? { opacity: [0, 0.8, 0], scale: [0.5, 1, 0.5] } : { opacity: 0.3 }}
                                            transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
                                        />
                                    ))}
                                </motion.g>

                                {/* Drifting Digital Mist */}
                                {[...Array(15)].map((_, i) => (
                                    <motion.circle
                                        key={i}
                                        cx={50 + ((i * 137) % 600)}
                                        cy={50 + ((i * 193) % 450)}
                                        r={1.5 + ((i * 17) % 2.5)}
                                        fill="url(#eco-grad)"
                                        opacity="0.15"
                                        animate={!shouldReduceMotion ? {
                                            y: [-20, 20],
                                            opacity: [0.05, 0.2, 0.05],
                                            x: [0, (i % 2 === 0 ? 15 : -15)]
                                        } : {}}
                                        transition={{ duration: 5 + ((i * 23) % 5), repeat: Infinity, ease: "easeInOut" }}
                                    />
                                ))}
                            </svg>
                        </div>
                    </motion.div>
                </div>

                {/* Right Column: Contact Form Side (Primary Color Bg) */}
                <div className="flex-1 flex items-center justify-center p-8 lg:p-16 xl:p-24 relative overflow-y-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="w-full max-w-xl"
                    >
                        <AnimatePresence mode="wait">
                            {isSuccess ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="flex flex-col items-center justify-center py-20 text-center space-y-8"
                                >
                                    <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center border-2 border-white/50">
                                        <CheckCircle2 className="h-12 w-12 text-white" />
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="text-3xl font-black text-white">{t.contact.success.title}</h3>
                                        <p className="text-white/80 text-lg">{t.contact.success.desc}</p>
                                    </div>
                                    <Button variant="outline" onClick={() => setIsSuccess(false)} className="rounded-full px-8 bg-white text-primary hover:bg-white/90 border-none transition-all font-black">
                                        {t.contact.success.btn}
                                    </Button>
                                </motion.div>
                            ) : (
                                <motion.form
                                    key="form"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    onSubmit={handleSubmit(onSubmit)}
                                    className="space-y-8"
                                    noValidate
                                >
                                    <div className="space-y-4 mb-14 relative">
                                        <div className="flex items-center gap-4">
                                            <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                                            <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-white">
                                                {language === 'ar' ? 'أرسل لنا رسالة' : 'Send us a Message'}
                                            </h3>
                                        </div>
                                        <p className="text-white/80 text-lg font-medium max-w-md leading-relaxed">
                                            {language === 'ar' ? 'سأقوم بالرد عليك في أقرب وقت ممكن بمجرد استلام رسالتك.' : "Ready to elevate your project? I'll get back to you within 24 hours."}
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <FloatingInput
                                            label={t.contact.form.name.label}
                                            isRTL={isRTL}
                                            {...register("name", { required: t.contact.form.name.req })}
                                            error={errors.name?.message}
                                            autoComplete="name"
                                            className="bg-white border-white/20 text-zinc-900 focus-within:border-white shadow-none"
                                        />
                                        <FloatingInput
                                            label={t.contact.form.email.label}
                                            isRTL={isRTL}
                                            type="email"
                                            {...register("email", {
                                                required: t.contact.form.email.req,
                                                pattern: { value: /^\S+@\S+$/i, message: t.contact.form.email.inv }
                                            })}
                                            error={errors.email?.message}
                                            autoComplete="email"
                                            className="bg-white border-white/20 text-zinc-900 focus-within:border-white shadow-none"
                                        />
                                    </div>

                                    <FloatingInput
                                        label={t.contact.form.subject.label}
                                        isRTL={isRTL}
                                        {...register("subject", { required: t.contact.form.subject.req })}
                                        error={errors.subject?.message}
                                        className="bg-white border-white/20 text-zinc-900 focus-within:border-white shadow-none"
                                    />

                                    <FloatingTextarea
                                        label={t.contact.form.message.label}
                                        isRTL={isRTL}
                                        {...register("message", { required: t.contact.form.message.req })}
                                        error={errors.message?.message}
                                        className="bg-white border-white/20 text-zinc-900 focus-within:border-white shadow-none"
                                    />

                                    <div className="pt-6">
                                        <Button
                                            type="submit"
                                            className="w-full h-18 bg-white text-primary hover:bg-white/95 text-lg font-black rounded-xl group overflow-hidden relative shadow-none transition-all duration-500 hover:scale-[1.01] active:scale-95 border-none"
                                            disabled={isSubmitting}
                                        >
                                            <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-25deg] -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                                            <span className="relative z-10 flex items-center justify-center gap-4">
                                                {isSubmitting ? (
                                                    <Loader2 className="h-7 w-7 animate-spin text-primary" />
                                                ) : (
                                                    <>
                                                        <span>{t.contact.btn}</span>
                                                        <Send className={cn("h-5 w-5 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1", isRTL && "rotate-180 group-hover:-translate-x-1")} />
                                                    </>
                                                )}
                                            </span>
                                        </Button>
                                    </div>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
