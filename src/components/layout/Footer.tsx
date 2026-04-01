"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Youtube, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { useLanguage } from "@/providers/LanguageProvider";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/layout/Logo";

export function Footer() {
    const { t, language } = useLanguage();
    const isRTL = language === "ar";

    return (
        <footer className="bg-background border-t border-border/50 pt-20 pb-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="container mx-auto px-4"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-6">
                        <Link href="/" className="group inline-block scale-125 origin-left">
                            <Logo scrolled={false} />
                        </Link>
                        <p className="text-muted-foreground text-base leading-relaxed max-w-xs">
                            {t.hero.description}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className={cn(isRTL ? "lg:pr-8 text-right" : "lg:pl-8 text-left")}>
                        <h3 className="font-bold text-lg mb-6">{t.footer.nav}</h3>
                        <ul className="space-y-3 text-base text-muted-foreground">
                            <li><Link href="#home" className="hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary scale-0 group-hover:scale-100 transition-transform" /> {t.navbar.home}</Link></li>
                            <li><Link href="#services" className="hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary scale-0 group-hover:scale-100 transition-transform" /> {t.navbar.services}</Link></li>
                            <li><Link href="#portfolio" className="hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary scale-0 group-hover:scale-100 transition-transform" /> {t.navbar.portfolio}</Link></li>
                            <li><Link href="#about" className="hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary scale-0 group-hover:scale-100 transition-transform" /> {t.navbar.about}</Link></li>
                            <li><Link href="#faq" className="hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary scale-0 group-hover:scale-100 transition-transform" /> {t.navbar.faq}</Link></li>
                            <li><Link href="#contact" className="hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary scale-0 group-hover:scale-100 transition-transform" /> {t.navbar.contact}</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className={cn(isRTL && "text-right")}>
                        <h3 className="font-bold text-lg mb-6">{t.footer.expertise}</h3>
                        <ul className="space-y-3 text-base text-muted-foreground">
                            <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-border" /> {t.services.pricing.starter.name}</li>
                            <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-border" /> {t.services.pricing.professional.name}</li>
                            <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-border" /> {t.services.pricing.business.name}</li>
                            <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-border" /> Shopify & Wix</li>
                            <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-border" /> SEO Strategy</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className={cn(isRTL && "text-right")}>
                        <h3 className="font-bold text-lg mb-6">{t.footer.touch}</h3>
                        <ul className="space-y-4 text-base text-muted-foreground mb-8">
                            <li className={cn("flex items-center gap-3 group", isRTL && "flex-row-reverse")}>
                                <div className="p-2 rounded-lg bg-secondary/50 group-hover:bg-primary/10 transition-colors">
                                    <Mail className="h-4 w-4 text-primary" />
                                </div>
                                <span className="text-sm">info@khalditech.com</span>
                            </li>
                            <li className={cn("flex items-center gap-3 group", isRTL && "flex-row-reverse")}>
                                <div className="p-2 rounded-lg bg-secondary/50 group-hover:bg-primary/10 transition-colors">
                                    <Phone className="h-4 w-4 text-primary" />
                                </div>
                                <span className="text-sm">+1 213 401 9038</span>
                            </li>
                        </ul>
                        {/* Social Icons */}
                        <div className={cn("flex gap-3", isRTL && "flex-row-reverse")}>
                            {[
                                { icon: MessageCircle, href: "https://wa.me/12134019038?text=Hello%20Khaldi%20Tech!%20I%20would%20like%20to%20discuss%20a%20project%20with%20you.", label: "WhatsApp" }
                            ].map((social, i) => (
                                <Link
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="p-2.5 rounded-xl bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-all duration-300 border border-transparent hover:border-primary/30 hover:-translate-y-1 active:scale-95"
                                >
                                    <social.icon className="h-5 w-5" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground/60">
                    <p>© {new Date().getFullYear()} Khaldi Tech. {t.footer.rights}</p>
                    <div className="flex gap-10">
                        <Link href="#" className="hover:text-primary transition-colors">{t.footer.privacy}</Link>
                        <Link href="#" className="hover:text-primary transition-colors">{t.footer.terms}</Link>
                    </div>
                </div>
            </motion.div>
        </footer>
    );
}
