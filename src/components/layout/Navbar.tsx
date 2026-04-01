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
    const lenis = useSmoothScroll();

    // For the bottom-of-navbar sliding indicator
    const headerRef = React.useRef<HTMLElement>(null);
    const itemRefsMap = React.useRef<Map<string, HTMLAnchorElement>>(new Map());
    const [indicator, setIndicator] = React.useState({ left: 0, width: 0, ready: false });

    const navItems = React.useMemo(() => [
        { name: t.navbar.home, href: "home" },
        { name: t.navbar.services, href: "services" },
        { name: t.navbar.portfolio, href: "portfolio" },
        { name: t.navbar.about, href: "about" },
        { name: t.navbar.faq, href: "faq" },
    ], [t]);

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
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
            const hrefs = navItems.map((i) => i.href);
            for (const href of [...hrefs].reverse()) {
                const element = document.getElementById(href);
                if (element && window.scrollY >= element.offsetTop - 120) {
                    setActiveSection(href);
                    break;
                }
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); // Initial check
        return () => window.removeEventListener("scroll", handleScroll);
    }, [navItems]);

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

    const handleNavClick = (href: string) => {
        if (lenis) {
            lenis.scrollTo(`#${href}`, { offset: -80, duration: 1.5 });
        } else {
            const element = document.getElementById(href);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
        setIsOpen(false);
    };

    return (
        <header
            ref={headerRef}
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-500",
                scrolled
                    ? "bg-background/60 backdrop-blur-2xl border-b border-white/[0.08] shadow-[0_4px_30px_-10px_rgba(0,0,0,0.1)]"
                    : "bg-transparent border-b border-transparent"
            )}
        >
            {/* Sliding active indicator */}
            <AnimatePresence>
                {indicator.ready && (
                    <motion.div
                        aria-hidden="true"
                        className="absolute bottom-0 h-[3px] pointer-events-none z-10"
                        style={{
                            background: "linear-gradient(90deg, transparent, var(--primary), transparent)",
                        }}
                        animate={{
                            left: indicator.left,
                            width: indicator.width,
                            opacity: 1,
                        }}
                        initial={{ opacity: 0 }}
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    >
                        {/* Glow effect */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[15px] bg-primary/40 blur-[10px] rounded-full" />
                    </motion.div>
                )}
            </AnimatePresence>

            <div className={cn(
                "container mx-auto px-4 flex items-center justify-between transition-all duration-500",
                scrolled ? "h-16" : "h-[80px]"
            )}>
                {/* Logo */}
                <Link href="/" className="flex items-center scale-110">
                    <Logo scrolled={scrolled} />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <div className="flex items-center gap-6 mr-4">
                        {navItems.map((item) => {
                            const isActive = activeSection === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={`#${item.href}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavClick(item.href);
                                    }}
                                    ref={(el) => {
                                        if (el) itemRefsMap.current.set(item.href, el);
                                        else itemRefsMap.current.delete(item.href);
                                    }}
                                    className={cn(
                                        "text-sm font-bold tracking-wide transition-all duration-300 relative py-2 px-1",
                                        isActive
                                            ? "text-primary translate-y-[-1px]"
                                            : "text-foreground/60 hover:text-primary"
                                    )}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </div>

                    <div className="flex items-center gap-4 border-l border-white/10 pl-6">
                        <ThemeToggle />
                        <Button 
                            variant="default" 
                            size="sm" 
                            className="rounded-full px-6 font-black text-xs tracking-widest uppercase shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all hover:scale-105 active:scale-95 cursor-pointer"
                            onClick={() => handleNavClick("contact")}
                        >
                            {t.navbar.contact}
                        </Button>
                    </div>
                </nav>

                {/* Mobile Menu Toggle */}
                <div className="flex items-center gap-3 md:hidden">
                    <ThemeToggle />
                    <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-xl bg-secondary/30"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </Button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl p-6"
                    >
                        <nav className="flex flex-col gap-2">
                            {navItems.map((item) => {
                                const isActive = activeSection === item.href;
                                return (
                                    <Link
                                        key={item.href}
                                        href={`#${item.href}`}
                                        className={cn(
                                            "text-lg font-bold px-4 py-3 rounded-2xl transition-all duration-300",
                                            isActive
                                                ? "bg-primary/10 text-primary translate-x-1"
                                                : "text-foreground/70 hover:bg-secondary/50 hover:text-foreground"
                                        )}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleNavClick(item.href);
                                        }}
                                    >
                                        {item.name}
                                    </Link>
                                );
                            })}
                            
                            <div className="h-px bg-white/10 my-4" />
                            
                            <div className="flex items-center justify-between gap-4">
                                <Button 
                                    className="flex w-full font-black text-xs uppercase tracking-widest h-12 rounded-2xl cursor-pointer"
                                    onClick={() => handleNavClick("contact")}
                                >
                                    {t.navbar.contact}
                                </Button>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
