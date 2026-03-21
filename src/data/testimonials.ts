export interface Testimonial {
    id: string;
    name: string;
    role: { fr: string; ar: string; en: string };
    company: string;
    content: { fr: string; ar: string; en: string };
    avatar: string;
    rating: number;
}

export const testimonials: Testimonial[] = [
    {
        id: "1",
        name: "Sarah Johnson",
        role: { fr: "Directrice Générale", ar: "المديرة التنفيذية", en: "CEO" },
        company: "TechRetail",
        content: {
            fr: "Travailler avec Khadi a été un plaisir absolu. Il a livré notre boutique en ligne en avance avec une attention exceptionnelle aux détails.",
            ar: "كان العمل مع خالدي متعة حقيقية. لقد سلم متجرنا الإلكتروني قبل الموعد المحدد مع اهتمام استثنائي بالتفاصيل.",
            en: "Working with Khaldi was an absolute pleasure. He delivered our e-commerce store ahead of schedule with exceptional attention to detail."
        },
        avatar: "/img/logo.svg",
        rating: 5,
    },
    {
        id: "2",
        name: "Michael Chen",
        role: { fr: "Directeur Marketing", ar: "مدير التسويق", en: "Marketing Director" },
        company: "GrowthX",
        content: {
            fr: "Khadi a transformé notre site web obsolète en une plateforme moderne, rapide et optimisée pour le SEO. Notre trafic a augmenté de 150% !",
            ar: "حول خالدي موقعنا القديم إلى منصة حديثة وسريعة ومحسنة لمحركات البحث. زادت حركة المرور لدينا بنسبة 150٪!",
            en: "Khaldi transformed our outdated website into a modern, fast, and SEO-optimized platform. Our traffic increased by 150%!"
        },
        avatar: "/img/logo.svg",
        rating: 5,
    },
    {
        id: "3",
        name: "Emma Williams",
        role: { fr: "Fondatrice", ar: "المؤسسة", en: "Founder" },
        company: "StyleHub",
        content: {
            fr: "Professionnel, réactif et talentueux. Khadi a construit notre boutique Shopify exactement comme nous l'avions imaginé.",
            ar: "محترف، مستجيب وموهوب. بنى خالدي متجر Shopify الخاص بنا تمامًا كما تخيلناه. أفضل مطور عملنا معه!",
            en: "Professional, responsive, and talented. Khadi built our Shopify store exactly as we envisioned. Best developer we've worked with!"
        },
        avatar: "/img/logo.svg",
        rating: 5,
    },
    {
        id: "4",
        name: "David Miller",
        role: { fr: "Directeur Technique", ar: "المدير التقني", en: "CTO" },
        company: "FutureTech",
        content: {
            fr: "L'application web que Khadi a construite pour nous est robuste et évolutive. Sa connaissance de Next.js est de premier ordre.",
            ar: "تطبيق الويب الذي بناه خالدي لنا قوي وقابل للتوسع. معرفته بـ Next.js و React هي من الدرجة الأولى.",
            en: "The web application Khadi built for us is robust and scalable. His knowledge of Next.js and React is top-notch."
        },
        avatar: "/img/logo.svg",
        rating: 5,
    },
];
