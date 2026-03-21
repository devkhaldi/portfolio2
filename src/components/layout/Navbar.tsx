"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { Logo } from "@/components/layout/Logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useSmoothScroll } from "@/components/providers/SmoothScrollProvider";
import { useLanguage } from "@/providers/LanguageProvider";

export function Navbar() {
    const { t, language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);
    const [activeSection, setActiveSection] = React.useState("home");

    // For the bottom-of-navbar sliding indicator
    const headerRef = React.useRef<HTMLElement>(null);
    const itemRefsMap = React.useRef<Map<string, HTMLAnchorElement>>(new Map());
    const [indicator, setIndicator] = React.useState({ left: 0, width: 0, ready: false });

    const navItems = [
        { name: t.navbar.home, href: "home" },
        { name: t.navbar.services, href: "services" },
        { name: t.navbar.portfolio, href: "portfolio" },
        { name: t.navbar.about, href: "about" },
        { name: t.navbar.faq, href: "faq" },
        // { name: t.navbar.contact, href: "contact" },
    ];

    // Update indicator position whenever active section changes
    const updateIndicator = React.useCallback((section: string) => {
        const headerEl = headerRef.current;
        const itemEl = itemRefsMap.current.get(section);
        if (!headerEl || !itemEl) return;

        const headerRect = headerEl.getBoundingClientRect();
        const itemRect = itemEl.getBoundingClientRect();

        setIndicator({
            left: itemRect.left - headerRect.left,
            width: itemRect.width,
            ready: true,
        });
    }, []);

    React.useEffect(() => {
        const hrefs = navItems.map((i) => i.href);
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
            for (const href of [...hrefs].reverse()) {
                const element = document.getElementById(href);
                if (element && window.scrollY >= element.offsetTop - 100) {
                    setActiveSection(href);
                    break;
                }
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    // navItems changes on every render (inline array) — capture hrefs once at mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Recalculate indicator on active section change or on resize
    React.useEffect(() => {
        updateIndicator(activeSection);
    }, [activeSection, updateIndicator]);

    React.useEffect(() => {
        const handleResize = () => updateIndicator(activeSection);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [activeSection, updateIndicator]);

    const toggleLanguage = () => {
        const newLang = language === "en" ? "ar" : "en";
        setLanguage(newLang);
    };

    return (
        <header
            ref={headerRef}
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-500",
                scrolled
                    ? "bg-background border-b border-white/5 dark:border-white/[0.04] shadow-[0_1px_40px_-8px_rgba(139,92,246,0.18)]"
                    : "bg-transparent border-b border-transparent"
            )}
        >
            {/* ── Sliding active indicator — sits at the very bottom of the navbar ── */}
            <AnimatePresence>
                {indicator.ready && (
                    <motion.div
                        aria-hidden="true"
                        className="absolute bottom-0 h-[2px] pointer-events-none z-10"
                        style={{
                            background: "linear-gradient(90deg, transparent, var(--primary) 30%, var(--accent-blue) 70%, transparent)",
                            boxShadow: "0 0 8px var(--primary)",
                        }}
                        animate={{
                            left: indicator.left,
                            width: indicator.width,
                            opacity: 1,
                        }}
                        initial={{ opacity: 0 }}
                        transition={{ type: "spring", stiffness: 400, damping: 38 }}
                    />
                )}
            </AnimatePresence>

            {/* Gradient shimmer (full width) — visible when scrolled, sits behind indicator */}
            {scrolled && (
                <div
                    className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent pointer-events-none"
                    aria-hidden="true"
                />
            )}

            <div className={cn(
                "container mx-auto px-4 flex items-center justify-between transition-all duration-500",
                scrolled ? "h-16" : "h-[72px]"
            )}>
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Logo scrolled={scrolled} />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    {navItems.map((item) => {
                        const isActive = activeSection === item.href;

                        const handleClick = (e: React.MouseEvent) => {
                            e.preventDefault();
                            const newUrl = item.href === "home" ? "/" : `/${item.href}`;
                            window.history.pushState({}, "", newUrl);
                            const element = document.getElementById(item.href);
                            if (element) {
                                element.scrollIntoView({ behavior: "smooth" });
                            }
                        };

                        return (
                            <Link
                                key={item.href}
                                href={`#${item.href}`}
                                onClick={handleClick}
                                ref={(el) => {
                                    // Only register/unregister — never call setState here
                                    // (calling setIndicator inside a ref callback triggers
                                    // re-render → ref fires again → infinite loop)
                                    if (el) {
                                        itemRefsMap.current.set(item.href, el);
                                    } else {
                                        itemRefsMap.current.delete(item.href);
                                    }
                                }}
                                className={cn(
                                    "text-sm font-medium transition-colors duration-200 relative py-1 px-1",
                                    isActive
                                        ? "text-primary"
                                        : "text-foreground/70 hover:text-primary"
                                )}
                            >
                                {item.name}
                            </Link>
                        );
                    })}

                    <div className="flex items-center gap-2 border-l border-border/50 pl-6 ml-2">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={toggleLanguage}
                            className="font-bold text-xs flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/30 hover:bg-primary hover:text-white transition-all duration-300 min-w-[70px] uppercase"
                        >
                            <Globe className="h-3.5 w-3.5" />
                            <span>{language}</span>
                        </Button>
                        <ThemeToggle />
                    </div>
                </nav>

                {/* Mobile Menu Toggle */}
                <div className="flex items-center gap-3 md:hidden">
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={toggleLanguage}
                        className="font-bold text-xs px-3 h-9 rounded-full bg-secondary/30 uppercase min-w-[60px]"
                    >
                        {language}
                    </Button>
                    <ThemeToggle />
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </Button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-white/5 dark:border-white/[0.04] shadow-[0_8px_30px_-8px_rgba(139,92,246,0.15)] p-4 animate-in slide-in-from-top-3 duration-200">
                    <nav className="flex flex-col gap-1">
                        {navItems.map((item) => {
                            const isActive = activeSection === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={`#${item.href}`}
                                    className={cn(
                                        "text-base font-semibold px-3 py-2.5 rounded-xl transition-colors duration-200",
                                        isActive
                                            ? "bg-primary/10 text-primary"
                                            : "text-foreground/70 hover:bg-accent hover:text-foreground"
                                    )}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        const newUrl = item.href === "home" ? "/" : `/${item.href}`;
                                        window.history.pushState({}, "", newUrl);
                                        const element = document.getElementById(item.href);
                                        if (element) {
                                            element.scrollIntoView({ behavior: "smooth" });
                                        }
                                        setIsOpen(false);
                                    }}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            )}
        </header>
    );
}
