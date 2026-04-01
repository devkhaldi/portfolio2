"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/providers/LanguageProvider";

export function WhatsAppButton() {
    const { language } = useLanguage();
    
    // Dynamic text based on current language
    const whatsappMessage = language === "ar" 
        ? "مرحبًا خالدي تيك! زرت موقعكم وأودّ مناقشة مشروع معكم."
        : "Hello Khaldi Tech! I visited your portfolio and would like to discuss a project with you.";
    
    // URL encode the message
    const encodedMessage = encodeURIComponent(whatsappMessage);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
            className="fixed bottom-6 right-6 z-50"
        >
            <Link
                href={`https://wa.me/12134019038?text=${encodedMessage}`}
                target="_blank"
                className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg shadow-green-500/30 hover:bg-[#20bd5a] transition-colors relative group"
                aria-label="Contact on WhatsApp"
            >
                {/* Pulse effect */}
                <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75 group-hover:opacity-100 duration-1000" />
                <MessageCircle className="h-8 w-8 relative z-10" />
            </Link>
        </motion.div>
    );
}
