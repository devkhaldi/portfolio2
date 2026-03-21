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
                        "block w-full px-6 pt-6 pb-2 text-foreground bg-secondary/10 border-2 focus-visible:ring-0 focus-visible:ring-offset-0 rounded-2xl transition-all duration-300 shadow-none min-h-[64px] font-medium outline-none",
                        error ? "border-destructive/50 bg-destructive/5" : "border-transparent focus-within:border-primary/50 hover:bg-secondary/20",
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
                        "block w-full px-6 pt-8 pb-4 text-foreground bg-secondary/10 border-2 focus-visible:ring-0 focus-visible:ring-offset-0 rounded-2xl transition-all duration-300 shadow-none min-h-[160px] resize-none font-medium outline-none",
                        error ? "border-destructive/50 bg-destructive/5" : "border-transparent focus-within:border-primary/50 hover:bg-secondary/20",
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
        <section id="contact" aria-label={t.contact.title} className="py-24 relative overflow-hidden bg-secondary/5">
            {/* Background Depth */}
            <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[512px] h-[512px] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    {/* Left Column: Visual & Info */}
                    <motion.div
                        initial={!shouldReduceMotion ? { opacity: 0, x: isRTL ? 32 : -32 } : { opacity: 1, x: 0 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: !shouldReduceMotion ? 0.8 : 0 }}
                        viewport={{ once: true }}
                        className="space-y-12"
                    >
                        <div className="space-y-8">
                            <motion.div
                                initial={!shouldReduceMotion ? { opacity: 0, y: 24 } : { opacity: 1, y: 0 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: !shouldReduceMotion ? 0.6 : 0 }}
                                className="inline-block px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase"
                            >
                                {t.contact.badge}
                            </motion.div>
                            <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1]">
                                {t.contact.title} <br />
                                <span className="text-primary italic">{t.contact.titleAccent}</span>
                            </h2>
                            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-lg">
                                {t.hero.description}
                            </p>
                        </div>

                        {/* Interactive Illustration */}
                        <div className="relative w-full max-w-md aspect-square lg:block hidden" aria-hidden="true">
                            <svg className="w-full h-full drop-shadow-2xl" viewBox="0 0 500 500">
                                <defs>
                                    <linearGradient id="svg-grad" x1="0" y1="0" x2="1" y2="1">
                                        <stop offset="0%" stopColor="var(--primary)" />
                                        <stop offset="100%" stopColor="var(--accent-blue, var(--secondary))" />
                                    </linearGradient>
                                    <filter id="glow">
                                        <feGaussianBlur stdDeviation="5" result="blur" />
                                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                                    </filter>
                                </defs>

                                <motion.circle
                                    r="180"
                                    animate={!shouldReduceMotion ? {
                                        r: [180, 200, 180],
                                        opacity: [0.05, 0.1, 0.05]
                                    } : { opacity: 0.05 }}
                                    transition={{ duration: 8, repeat: Infinity }}
                                    cx="250" cy="250" fill="url(#svg-grad)"
                                />

                                {/* Floating Code Elements */}
                                {[...Array(3)].map((_, i) => (
                                    <motion.rect
                                        key={i}
                                        animate={!shouldReduceMotion ? {
                                            y: [0, -20, 0],
                                            opacity: [0.3, 0.6, 0.3],
                                            rotate: [0, 5, 0]
                                        } : { opacity: 0.3 }}
                                        transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.5 }}
                                        x={150 + i * 40} y={200 + i * 30} width="64" height="8" rx="4"
                                        fill="url(#svg-grad)"
                                    />
                                ))}

                                {/* Animated Chat Bubble */}
                                <motion.g
                                    animate={!shouldReduceMotion ? { y: [0, -10, 0] } : {}}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <path d="M300 150 H 420 A 10 10 0 0 1 430 160 V 220 A 10 10 0 0 1 420 230 H 350 L 330 250 L 330 230 H 300 A 10 10 0 0 1 290 220 V 160 A 10 10 0 0 1 300 150" fill="var(--primary)" filter="url(#glow)" />
                                    <rect x="315" y="176" width="80" height="8" rx="4" fill="var(--background)" opacity="0.8" />
                                    <rect x="315" y="196" width="48" height="8" rx="4" fill="var(--background)" opacity="0.4" />
                                </motion.g>

                                {/* Center Avatar Circle */}
                                <motion.circle
                                    whileHover={!shouldReduceMotion ? { scale: 1.05 } : {}}
                                    cx="250" cy="280" r="72" fill="var(--background)" stroke="url(#svg-grad)" strokeWidth="4"
                                />
                                <motion.g animate={!shouldReduceMotion ? { y: [0, -5, 0] } : {}} transition={{ duration: 4, repeat: Infinity }}>
                                    <circle cx="250" cy="264" r="24" fill="var(--destructive)" />
                                    <path d="M210 320 C 210 288, 290 288, 290 320" fill="var(--primary)" />
                                </motion.g>
                            </svg>
                        </div>
                    </motion.div>

                    {/* Right Column: Contact Form */}
                    <div className="w-full">
                        <Card className="border-white/10 bg-background/80 backdrop-blur-2xl shadow-none rounded-[2.5rem] overflow-hidden">
                            <CardContent className="p-8 md:p-12 relative">
                                <AnimatePresence mode="wait">
                                    {isSuccess ? (
                                        <motion.div
                                            key="success"
                                            initial={!shouldReduceMotion ? { opacity: 0, scale: 0.9 } : { opacity: 0 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={!shouldReduceMotion ? { opacity: 0, scale: 0.9 } : { opacity: 0 }}
                                            transition={{ duration: !shouldReduceMotion ? 0.3 : 0 }}
                                            className="flex flex-col items-center justify-center py-20 text-center space-y-8"
                                            role="status"
                                        >
                                            <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center border-2 border-green-500/50">
                                                <CheckCircle2 className="h-12 w-12 text-green-500" />
                                            </div>
                                            <div className="space-y-4">
                                                <h3 className="text-3xl font-black">{t.contact.success.title}</h3>
                                                <p className="text-muted-foreground text-lg">{t.contact.success.desc}</p>
                                            </div>
                                            <Button variant="outline" onClick={() => setIsSuccess(false)} className="rounded-full px-8 tracking-wide font-semibold hover:bg-green-500/10 hover:text-green-500 hover:border-green-500/50 transition-colors duration-300">
                                                {t.contact.success.btn}
                                            </Button>
                                        </motion.div>
                                    ) : (
                                        <motion.form
                                            key="form"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: !shouldReduceMotion ? 0.4 : 0 }}
                                            onSubmit={handleSubmit(onSubmit)}
                                            className="space-y-8"
                                            noValidate
                                        >
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                <FloatingInput
                                                    label={t.contact.form.name.label}
                                                    isRTL={isRTL}
                                                    {...register("name", { required: t.contact.form.name.req })}
                                                    error={errors.name?.message}
                                                    autoComplete="name"
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
                                                />
                                            </div>

                                            <FloatingInput
                                                label={t.contact.form.subject.label}
                                                isRTL={isRTL}
                                                {...register("subject", { required: t.contact.form.subject.req })}
                                                error={errors.subject?.message}
                                            />

                                            <FloatingTextarea
                                                label={t.contact.form.message.label}
                                                isRTL={isRTL}
                                                {...register("message", { required: t.contact.form.message.req })}
                                                error={errors.message?.message}
                                            />

                                            <Button 
                                                type="submit" 
                                                className="w-full h-16 mt-4 text-primary bg-primary/10 hover:bg-primary border border-primary/20 hover:border-primary text-lg font-bold rounded-2xl group overflow-hidden relative transition-all duration-500 hover:shadow-[0_0_40px_-10px_var(--primary)] hover:text-primary-foreground" 
                                                disabled={isSubmitting}
                                            >
                                                <span className="relative z-10 flex items-center justify-center gap-3">
                                                    {isSubmitting ? (
                                                        <Loader2 className="h-6 w-6 animate-spin" />
                                                    ) : (
                                                        <>
                                                            <span>{t.contact.btn}</span>
                                                            <Send className={cn("h-[18px] w-[18px] mt-[2px] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1", isRTL && "rotate-180 group-hover:-translate-x-1")} />
                                                        </>
                                                    )}
                                                </span>
                                            </Button>
                                        </motion.form>
                                    )}
                                </AnimatePresence>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
