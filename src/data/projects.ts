export interface Project {
    id: string;
    title: string;
    category: { fr: string; ar: string; en: string };
    badge: { fr: string; ar: string; en: string };
    url: string;
    image: string;
    mobileImage?: string;
    description: { fr: string; ar: string; en: string };
    type: "shopify" | "wix" | "custom" | "wordpress";
    technologies: string[];
}

export const projects: Project[] = [
    {
        id: "lynxia",
        title: "Lynxia Assur Conseil",
        category: { fr: "ASSURANCE", ar: "تأمين", en: "INSURANCE" },
        badge: { fr: "SITE WEB", ar: "موقع ويب", en: "WEBSITE" },
        url: "https://www.lynxiaconseil.fr/",
        image: "/img/lynxia.png",
        description: {
            fr: "Plateforme d'assurance professionnelle offrant des solutions claires, rapides et fiables pour les entreprises. Expérience 100% digitale et humaine.",
            ar: "منصة تأمين مهنية تقدم حلولاً واضحة وسريعة وموثوقة للشركات. تجربة رقمية وإنسانية ومتكاملة.",
            en: "Professional insurance platform offering clear, fast, and reliable solutions for businesses. A 100% digital and human experience."
        },
        type: "custom",
        technologies: ["React", "Next.js", "Framer Motion", "Tailwind CSS"]
    },
    {
        id: "1",
        title: "Lille Noire",
        category: { fr: "CAFÉ", ar: "مقهى", en: "COFFEE SHOP" },
        badge: { fr: "SITE WEB", ar: "موقع ويب", en: "WEBSITE" },
        url: "https://lilenoire.vercel.app/",
        image: "/img/lilenoire.png",
        description: {
            fr: "Un site web moderne et élégant pour un café, mettant en valeur le menu, l'ambiance et l'expérience client.",
            ar: "موقع ويب أنيق وعصري لمقهى، يعرض القائمة والأجواء وتجربة العملاء بتصميم راقٍ.",
            en: "A modern, elegant coffee shop website showcasing menu, ambiance, and customer experience."
        },
        type: "custom",
        technologies: ["React", "CSS", "HTML", "JavaScript"]
    },
    {
        id: "2",
        title: "Menara Travels",
        category: { fr: "TOURISME", ar: "سياحة وسفر", en: "TRAVEL" },
        badge: { fr: "AGENCE DE VOYAGE", ar: "وكالة سفر", en: "TRAVEL AGENCY" },
        url: "https://travel-agency-pi-wine.vercel.app/",
        image: "/img/menaraTravel.png",
        description: {
            fr: "Une plateforme dynamique d'agence de voyages proposant des destinations, des fonctionnalités de réservation et des forfaits voyage.",
            ar: "منصة وكالة سفر ديناميكية تقدم أبرز الوجهات السياحية وميزات الحجز وباقات السفر المتنوعة.",
            en: "A dynamic travel agency platform offering destination highlights, booking features, and travel packages."
        },
        type: "custom",
        technologies: ["React", "React Router", "HTML", "CSS"]
    },
    {
        id: "3",
        title: "Storage App",
        category: { fr: "WEB APP", ar: "تطبيق ويب", en: "WEB APP" },
        badge: { fr: "APPLICATION", ar: "تطبيق", en: "APPLICATION" },
        url: "https://test-front-end-blush.vercel.app/",
        image: "/img/modernui.png",
        description: {
            fr: "Une application de gestion de stockage épurée avec une interface intuitive pour organiser et suivre les articles efficacement.",
            ar: "تطبيق إدارة تخزين أنيق بواجهة مستخدم بديهية لتنظيم العناصر وتتبعها بكفاءة.",
            en: "A sleek storage management app with intuitive UI for organizing and tracking items efficiently."
        },
        type: "custom",
        technologies: ["React", "Bootstrap", "HTML", "CSS"]
    },
    {
        id: "4",
        title: "SoundTrap",
        category: { fr: "MUSIQUE", ar: "موسيقى", en: "MUSIC" },
        badge: { fr: "PAGE D'ATTERRISSAGE", ar: "صفحة هبوط", en: "LANDING PAGE" },
        url: "https://music-lake-ten.vercel.app/",
        image: "/img/soundTrap.png",
        description: {
            fr: "Une plateforme musicale vibrante pour le streaming, les playlists et la découverte d'artistes avec un design immersif.",
            ar: "منصة موسيقية نابضة بالحياة للبث والقوائم واكتشاف الفنانين بتصميم غامر ومبهر.",
            en: "A vibrant music platform for streaming, playlists, and artist discovery with immersive design."
        },
        type: "custom",
        technologies: ["HTML", "CSS", "Flexbox", "JavaScript"]
    },
    {
        id: "5",
        title: "Formula 1 Ranking",
        category: { fr: "SPORT", ar: "رياضة", en: "SPORT" },
        badge: { fr: "TABLEAU DE BORD", ar: "لوحة ترتيب", en: "RANKINGS" },
        url: "https://formula1-ranking.vercel.app/",
        image: "/img/formula1rankings.png",
        description: {
            fr: "Un site rapide et axé sur les données affichant les classements des pilotes et des équipes de Formule 1 avec des mises à jour en direct.",
            ar: "موقع سريع ومدعوم بالبيانات يعرض ترتيب سائقي وفرق الفورمولا 1 مع تحديثات مباشرة.",
            en: "A fast, data-driven site displaying Formula 1 driver and team rankings with live updates."
        },
        type: "custom",
        technologies: ["React", "API", "CSS", "JavaScript"]
    },
];
