"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { Send, Loader2, CheckCircle2, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/providers/LanguageProvider";

type FormData = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

const MinimalInput = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement> & { label: string; error?: string; isRTL?: boolean }>(
    ({ label, error, className, id, isRTL, ...props }, ref) => {
        const inputId = id || props.name;

        return (
            <div className="relative w-full group">
                <input
                    {...props}
                    ref={ref}
                    id={inputId}
                    placeholder=" "
                    aria-invalid={!!error}
                    className={cn(
                        "peer block w-full px-5 pt-8 pb-3 text-sm text-foreground bg-background/50 backdrop-blur-md border border-border focus:ring-1 focus:ring-primary focus:border-primary rounded-2xl transition-all duration-300 shadow-sm outline-none placeholder:text-transparent",
                        error ? "border-destructive focus:border-destructive focus:ring-destructive" : "",
                        isRTL && "text-right",
                        className
                    )}
                />
                <label
                    htmlFor={inputId}
                    className={cn(
                        "absolute transition-all duration-300 pointer-events-none text-muted-foreground whitespace-nowrap font-medium text-sm drop-shadow-sm",
                        isRTL ? "right-5" : "left-5",
                        "top-4 peer-focus:top-2 peer-focus:-translate-y-0.5 peer-focus:text-[10px] peer-focus:text-primary peer-focus:font-bold peer-focus:tracking-widest peer-focus:uppercase peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:-translate-y-0.5 peer-not-placeholder-shown:text-[10px] peer-not-placeholder-shown:text-primary peer-not-placeholder-shown:font-bold peer-not-placeholder-shown:tracking-widest peer-not-placeholder-shown:uppercase"
                    )}
                >
                    {label}
                </label>
            </div>
        );
    }
);
MinimalInput.displayName = "MinimalInput";

const MinimalTextarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string; error?: string; isRTL?: boolean }>(
    ({ label, error, className, id, isRTL, ...props }, ref) => {
        const inputId = id || props.name;

        return (
            <div className="relative w-full group">
                <textarea
                    {...props}
                    ref={ref}
                    id={inputId}
                    placeholder=" "
                    aria-invalid={!!error}
                    className={cn(
                        "peer block w-full px-5 pt-8 pb-4 text-sm text-foreground bg-background/50 backdrop-blur-md border border-border focus:ring-1 focus:ring-primary focus:border-primary rounded-2xl transition-all duration-300 shadow-sm outline-none resize-none min-h-[160px] placeholder:text-transparent",
                        error ? "border-destructive focus:border-destructive focus:ring-destructive" : "",
                        isRTL && "text-right",
                        className
                    )}
                />
                <label
                    htmlFor={inputId}
                    className={cn(
                        "absolute transition-all duration-300 pointer-events-none text-muted-foreground whitespace-nowrap font-medium text-sm drop-shadow-sm",
                        isRTL ? "right-5" : "left-5",
                        "top-5 peer-focus:top-3 peer-focus:-translate-y-0.5 peer-focus:text-[10px] peer-focus:text-primary peer-focus:font-bold peer-focus:tracking-widest peer-focus:uppercase peer-not-placeholder-shown:top-3 peer-not-placeholder-shown:-translate-y-0.5 peer-not-placeholder-shown:text-[10px] peer-not-placeholder-shown:text-primary peer-not-placeholder-shown:font-bold peer-not-placeholder-shown:tracking-widest peer-not-placeholder-shown:uppercase"
                    )}
                >
                    {label}
                </label>
            </div>
        );
    }
);
MinimalTextarea.displayName = "MinimalTextarea";

export function Contact() {
    const { t, language } = useLanguage();
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<FormData>();
    const [isSuccess, setIsSuccess] = React.useState(false);
    const isRTL = language === "ar";

    const onSubmit = async (data: FormData) => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setIsSuccess(true);
        reset();
        setTimeout(() => setIsSuccess(false), 5000);
    };

    return (
        <section id="contact" className="relative min-h-screen w-full flex items-center justify-center p-4 py-24 md:p-8 overflow-hidden bg-background">
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none -z-10" aria-hidden="true">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[150px]" />
            </div>

            <div className="container max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
                
                {/* Left Column: Animated Illustration */}
                <motion.div 
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 w-full max-w-lg lg:max-w-none relative aspect-square lg:aspect-auto lg:h-[600px] flex items-center justify-center"
                >
                    <svg viewBox="0 0 500 500" className="w-full h-full drop-shadow-2xl overflow-visible">
                        <defs>
                            <linearGradient id="ill-primary" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="var(--primary)" />
                                <stop offset="100%" stopColor="var(--accent-blue)" />
                            </linearGradient>
                            <filter id="ill-glow" x="-20%" y="-20%" width="140%" height="140%">
                                <feGaussianBlur stdDeviation="8" result="blur" />
                                <feComposite in="SourceGraphic" in2="blur" operator="over" />
                            </filter>
                        </defs>
                        
                        {/* Background Orbit Rings */}
                        <motion.g animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "250px 250px" }}>
                            <circle cx="250" cy="250" r="200" fill="none" stroke="currentColor" strokeOpacity="0.05" strokeWidth="1" strokeDasharray="4 8" />
                            <circle cx="250" cy="250" r="160" fill="none" stroke="currentColor" strokeOpacity="0.05" strokeWidth="1" />
                            <circle cx="250" cy="450" r="4" fill="var(--primary)" opacity="0.5" />
                        </motion.g>

                        <motion.g animate={{ rotate: -360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "250px 250px" }}>
                            <circle cx="250" cy="250" r="230" fill="none" stroke="url(#ill-primary)" strokeOpacity="0.1" strokeWidth="2" strokeDasharray="20 40" />
                            <circle cx="480" cy="250" r="6" fill="var(--accent-blue)" filter="url(#ill-glow)" />
                        </motion.g>

                        {/* Central Dashboard Frame */}
                        <motion.g
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ type: "spring", delay: 0.2 }}
                        >
                            <rect 
                                x="125" y="150" width="250" height="200" rx="16"
                                fill="var(--card)" stroke="url(#ill-primary)" strokeWidth="2"
                                filter="url(#ill-glow)"
                            />
                            <rect x="140" y="165" width="220" height="40" rx="8" fill="var(--primary)" opacity="0.1" />
                            <rect x="150" y="175" width="40" height="20" rx="4" fill="var(--primary)" opacity="0.5" />
                            <circle cx="340" cy="185" r="5" fill="var(--destructive)" opacity="0.8" />
                            <circle cx="320" cy="185" r="5" fill="var(--accent-blue)" opacity="0.8" />
                        </motion.g>

                        {/* Pulse Nodes connecting into the dashboard */}
                        {[...Array(3)].map((_, i) => (
                            <motion.path
                                key={`line-${i}`}
                                d={`M ${50} ${100 + i * 150} C ${150} ${100 + i * 150}, ${100} ${250}, ${125} ${250}`}
                                fill="none"
                                stroke="url(#ill-primary)"
                                strokeWidth="2"
                                opacity="0.3"
                                strokeDasharray="10 10"
                                animate={{ strokeDashoffset: [20, 0] }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            />
                        ))}

                        {/* Floating Envelope */}
                        <motion.g
                            animate={{ y: [-15, 15, -15], rotate: [-2, 2, -2] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <rect x="190" y="230" width="120" height="80" rx="8" fill="var(--background)" stroke="var(--primary)" strokeWidth="3" />
                            <path d="M 190 230 L 250 280 L 310 230" fill="none" stroke="var(--primary)" strokeWidth="3" strokeLinejoin="round" />
                            <motion.path
                                d="M 220 290 L 280 290"
                                stroke="var(--accent-blue)"
                                strokeWidth="4"
                                strokeLinecap="round"
                                animate={{ strokeDasharray: ["0 60", "60 0"], opacity: [0, 1, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            />
                        </motion.g>

                        {/* Data Particles */}
                        {[...Array(8)].map((_, i) => (
                            <motion.circle
                                key={`particle-${i}`}
                                r="3"
                                fill="var(--primary)"
                                filter="url(#ill-glow)"
                                initial={{ cx: 250, cy: 250, opacity: 0 }}
                                animate={{
                                    cx: 250 + Math.cos(i * 45) * 150,
                                    cy: 250 + Math.sin(i * 45) * 150,
                                    opacity: [0, 1, 0]
                                }}
                                transition={{ duration: 3, delay: i * 0.4, repeat: Infinity }}
                            />
                        ))}
                    </svg>
                </motion.div>

                {/* Right Column: Form */}
                <motion.div 
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 w-full relative"
                >
                    <div className="bg-card/40 backdrop-blur-3xl border border-border shadow-[0_0_40px_rgba(var(--primary),0.1)] rounded-3xl md:rounded-[2.5rem] p-8 md:p-12 overflow-hidden group">
                        {/* Subtle Inner Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                        <AnimatePresence mode="wait">
                            {isSuccess ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="flex flex-col items-center justify-center py-16 text-center space-y-8"
                                >
                                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center border border-primary/30 shadow-[0_0_40px_rgba(var(--primary),0.3)]">
                                        <CheckCircle2 className="h-10 w-10 text-primary" />
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="text-3xl md:text-5xl font-black text-foreground tracking-tight">{t.contact.success.title}</h3>
                                        <p className="text-muted-foreground text-lg">{t.contact.success.desc}</p>
                                    </div>
                                    <Button variant="premium" onClick={() => setIsSuccess(false)} className="rounded-2xl px-10 h-14 mt-4">
                                        {t.contact.success.btn}
                                    </Button>
                                </motion.div>
                            ) : (
                                <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative z-10">
                                    <div className="space-y-6 mb-12">
                                        <motion.div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-black tracking-widest uppercase">
                                            <Sparkles className="w-3.5 h-3.5" />
                                            {t.contact.badge}
                                        </motion.div>
                                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-foreground bg-clip-text leading-tight">
                                            {t.contact.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">{t.contact.titleAccent}</span>
                                        </h2>
                                        <p className="text-muted-foreground text-lg leading-relaxed">
                                            {language === 'ar' ? 'سأقوم بالرد عليك في أقرب وقت ممكن بمجرد استلام رسالتك.' : "Ready to elevate your project? I'll get back to you within 24 hours."}
                                        </p>
                                    </div>

                                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <MinimalInput
                                                label={t.contact.form.name.label}
                                                isRTL={isRTL}
                                                {...register("name", { required: t.contact.form.name.req })}
                                                error={errors.name?.message}
                                                autoComplete="name"
                                            />
                                            <MinimalInput
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

                                        <MinimalInput
                                            label={t.contact.form.subject.label}
                                            isRTL={isRTL}
                                            {...register("subject", { required: t.contact.form.subject.req })}
                                            error={errors.subject?.message}
                                        />

                                        <MinimalTextarea
                                            label={t.contact.form.message.label}
                                            isRTL={isRTL}
                                            {...register("message", { required: t.contact.form.message.req })}
                                            error={errors.message?.message}
                                        />

                                        <div className="pt-6">
                                            <Button
                                                type="submit"
                                                disabled={isSubmitting}
                                                size="lg"
                                                variant="premium"
                                                className="w-full h-14 rounded-2xl text-base"
                                            >
                                                <span className="relative z-10 flex items-center justify-center gap-3">
                                                    {isSubmitting ? (
                                                        <Loader2 className="h-5 w-5 animate-spin" />
                                                    ) : (
                                                        <>
                                                            <span>{t.contact.btn}</span>
                                                            <Send className={cn("h-4 w-4", isRTL && "rotate-180")} />
                                                        </>
                                                    )}
                                                </span>
                                            </Button>
                                        </div>
                                    </form>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
