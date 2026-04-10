"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { Logo } from "@/components/layout/Logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useSmoothScroll } from "@/components/providers/SmoothScrollProvider";
import { useLanguage } from "@/providers/LanguageProvider";

export function Navbar() {
    const { t } = useLanguage();
    const [isOpen, setIsOpen] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);
    const [activeSection, setActiveSection] = React.useState("home");
    const lenis = useSmoothScroll();

    const navItems = React.useMemo(() => [
        { name: t.navbar.home, href: "home" },
        { name: t.navbar.services, href: "services" },
        { name: t.navbar.portfolio, href: "portfolio" },
        { name: t.navbar.about, href: "about" },
        { name: t.navbar.faq, href: "faq" },
    ], [t]);

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
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [navItems]);

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
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-500",
                scrolled ? "pt-4 md:pt-6" : "pt-6 md:pt-10"
            )}
        >
            <div className="container max-w-6xl mx-auto px-4">
                <div 
                    className={cn(
                        "flex items-center justify-between transition-all duration-700 ease-out",
                        scrolled 
                            ? "bg-background/70 backdrop-blur-3xl border border-border/50 shadow-[0_10px_40px_-15px_rgba(var(--primary),0.2)] rounded-full px-6 h-16" 
                            : "bg-transparent h-20 px-2 border border-transparent shadow-none"
                    )}
                >
                    {/* Logo */}
                    <Link href="/" className="flex items-center z-50 hover:scale-105 transition-transform duration-300">
                        <Logo scrolled={scrolled} />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex flex-1 items-center justify-center">
                        <div className={cn(
                            "flex items-center p-1 rounded-full transition-all duration-500 backdrop-blur-sm",
                            scrolled ? "bg-white/5 dark:bg-white/5" : "bg-transparent"
                        )}>
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
                                        className={cn(
                                            "relative text-sm font-medium tracking-wide transition-all duration-500 px-5 py-2 rounded-full outline-none group",
                                            isActive
                                                ? "text-primary-foreground"
                                                : "text-foreground/70 hover:text-foreground"
                                        )}
                                    >
                                        {isActive && (
                                            <motion.div
                                                layoutId="active-nav-pill"
                                                className="absolute inset-0 bg-primary/90 backdrop-blur-md rounded-full -z-10 shadow-[0_0_15px_-3px_var(--primary)]"
                                                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                            />
                                        )}
                                        {/* Subtle hover background for non-active items */}
                                        {!isActive && (
                                            <div className="absolute inset-0 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                                        )}
                                        <span className="relative z-10">{item.name}</span>
                                    </Link>
                                );
                            })}
                        </div>
                    </nav>

                    {/* Desktop CTA & Toggles */}
                    <div className="hidden md:flex items-center gap-3 z-50">
                        <div className="mr-2">
                            <ThemeToggle />
                        </div>
                        <Button 
                            variant="premium" 
                            size="sm" 
                            className="rounded-full px-6 h-10 font-bold text-xs tracking-wide uppercase transition-all hover:scale-105 active:scale-95 cursor-pointer ml-2"
                            onClick={() => handleNavClick("contact")}
                        >
                            {t.navbar.contact}
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="flex md:hidden items-center gap-3 z-50">
                        <ThemeToggle />
                        <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-full bg-secondary/30 h-10 w-10 hover:bg-secondary/50"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="md:hidden absolute top-[85px] left-4 right-4 bg-background/95 backdrop-blur-3xl border border-border shadow-2xl shadow-primary/10 rounded-3xl p-6 overflow-hidden"
                    >
                        <nav className="flex flex-col gap-2 relative z-10">
                            {navItems.map((item) => {
                                const isActive = activeSection === item.href;
                                return (
                                    <Link
                                        key={item.href}
                                        href={`#${item.href}`}
                                        className={cn(
                                            "relative text-lg font-medium px-6 py-4 rounded-2xl transition-all duration-300 overflow-hidden group",
                                            isActive
                                                ? "text-primary-foreground font-semibold"
                                                : "text-foreground/80 hover:text-foreground hover:bg-secondary/30"
                                        )}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleNavClick(item.href);
                                        }}
                                    >
                                        {isActive && (
                                            <motion.div
                                                layoutId="mobile-active-bg"
                                                className="absolute inset-0 bg-primary/90 z-[-1] rounded-2xl shadow-[0_0_15px_-3px_var(--primary)]"
                                                initial={false}
                                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            />
                                        )}
                                        <span className="relative z-10">{item.name}</span>
                                    </Link>
                                );
                            })}
                            
                            <div className="h-px bg-border my-4" />
                            
                            <Button 
                                variant="premium"
                                className="flex w-full font-bold text-[13px] uppercase tracking-wider h-14 rounded-2xl cursor-pointer shadow-xl shadow-primary/20"
                                onClick={() => handleNavClick("contact")}
                            >
                                {t.navbar.contact}
                            </Button>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
