"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { translations, Language, TranslationType } from "@/data/translations";

type LanguageContextType = {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: TranslationType;
    isRTL: boolean;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguageState] = useState<Language>("en"); // Default to English
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const savedLang = localStorage.getItem("language") as Language;
        if (savedLang && (savedLang === "en" || savedLang === "ar")) {
            setLanguageState(savedLang);
        }
        setIsLoaded(true);
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem("language", lang);
        document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
        document.documentElement.lang = lang;
    };

    useEffect(() => {
        if (isLoaded) {
            document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
            document.documentElement.lang = language;
        }
    }, [language, isLoaded]);

    const t = translations[language];
    const isRTL = language === "ar";

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
