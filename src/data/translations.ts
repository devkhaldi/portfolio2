export type Language = "en" | "ar";

export const translations = {
    en: {
        navbar: {
            home: "Home",
            services: "Services",
            portfolio: "Portfolio",
            about: "About",
            faq: "FAQ",
            contact: "Contact",
        },
        hero: {
            role: "Digital Agency",
            title: "Welcome to",
            titleAccent: "Khaldi Tech",
            description: "We are Khaldi Tech — architects of high-performance digital solutions. Specializing in Next.js, React, and premium E-commerce, we transform complex technical challenges into elegant, user-centric experiences that drive results.",
            ctaContact: "Let's Work Together",
            ctaProjects: "View Our Projects",
            skills: {
                react: "Modern Apps",
                shopify: "Premium E-commerce",
                wix: "No-code Solutions",
            },
        },
        services: {
            badge: "Premium Agency Solutions",
            title: "Your High-Performance Website",
            pricing: {
                starter: {
                    name: "Starter",
                    price: "59",
                    originalPrice: "99",
                    discount: "40%",
                    note: "Essential Choice",
                    features: ["Professional Spa Design", "Mobile-Friendly Layout", "Services & Pricing Menu", "Free .com Domain Name", "2-3 Monthly Edits", "Standard SSL Security", "Support (Email)"],
                    cta: "Get Started Now",
                    whatsappMsg: "Hi Khaldi Tech! I'm interested in the *Starter Website* plan for my spa ($59/mo). Can we discuss the setup?",
                },
                professional: {
                    name: "Standard",
                    price: "79",
                    originalPrice: "179",
                    discount: "55%",
                    note: "Most Popular choice",
                    features: ["Premium Spa Website", "Online Booking System", "Staff & Therapist Profiles", "Free .com Domain Name", "6-7 Monthly Edits", "Google Maps & Contact Forms", "Priority Support (WhatsApp)"],
                    cta: "Get Standard Site",
                    whatsappMsg: "Hi Khaldi Tech! I'd like to get started with the *Standard Website* plan ($79/mo). Can you help me set it up?",
                },
                business: {
                    name: "Business Elite",
                    price: "99",
                    originalPrice: "399",
                    discount: "75%",
                    note: "Best for Spas & Salons",
                    features: ["Luxury Spa Identity", "Advanced Booking & Payments", "Client Management Dashboard", "Free .com Domain Name", "Unlimited Monthly Edits", "Gift Cards & Promotions", "24/7 VIP Dedicated Support"],
                    cta: "Get Elite Solution",
                    whatsappMsg: "Hi Khaldi Tech! I want the *Business Elite Website* plan ($99/mo). Let's discuss the project requirements.",
                },
            },
            monthly: "per month",
            techStack: "Our Technology Stack",
        },
        portfolio: {
            badge: "Our Work",
            title: "Recent Projects",
            filters: {
                all: "All",
                shopify: "Shopify",
                wix: "Wix",
                webflow: "Webflow",
            },
            visit: "Visit Site",
            preview: "Preview",
        },
        about: {
            badge: "The Agency",
            title: "Crafting Digital",
            titleAccent: "Experiences That Matter",
            bio: "We are Khaldi Tech — a digital agency that turns complex ideas into fast, elegant, and scalable digital products. From pixel-perfect React interfaces to robust API architectures, we obsess over every layer of the stack. We believe great software isn't just functional — it's a craft that users can feel.",
            stats: {
                experience: "Years of Experience",
                projects: "Completed Projects",
                clients: "Happy Clients",
            },
            skillsTitle: "Technical Skills",
        },
        faq: {
            badge: "FAQ",
            title: "Frequently Asked",
            titleAccent: "Questions",
            items: [
                {
                    question: "What specific services do you offer?",
                    answer: "We specialize in building high-performance digital solutions, including custom React/Next.js applications, premium Shopify & WooCommerce stores, and data-driven dashboards. We also provide SEO optimization and UI/UX consulting to ensure your product not only works but converts."
                },
                {
                    question: "Which technologies are in your core stack?",
                    answer: "Our primary stack includes Next.js, React, TypeScript, and Tailwind CSS for the frontend. For the backend and database, we rely on Node.js, MongoDB, Prisma, and PostgreSQL/Supabase. We are also experts in Shopify Liquid and WordPress development."
                },
                {
                    question: "Can you redesign or improve my current website?",
                    answer: "Absolutely. Many of our projects, like 'Lille Noire' and 'Menara Travels', involve taking existing concepts or legacy sites and transforming them into modern, responsive, and blazing-fast experiences that align with current web standards."
                },
                {
                    question: "How do we start a project together?",
                    answer: "The best way is to reach out via WhatsApp (+1 213 401 9038) or email (info@khalditech.com). We'll have a brief discovery call to discuss your goals, timeline, and budget, after which we'll provide a detailed technical proposal."
                }
            ]
        },
        testimonials: {
            badge: "Testimonials",
            title: "What our clients say",
            description: "We take pride in building lasting relationships with our clients by delivering high-performance digital solutions that exceed expectations.",
        },
        contact: {
            badge: "Available for new projects",
            title: "Let's Build",
            titleAccent: "Something Great",
            formTitle: "Send a general message or details of a project you'd like us to be a part of, and we'll get back to you as soon as possible.",
            btn: "Start a Conversation",
            success: {
                title: "Message Sent",
                desc: "We will get back to you within 24 hours.",
                btn: "Send Another",
            },
            form: {
                name: { label: "Your Name", req: "Name required" },
                email: { label: "Email Address", req: "Email required", inv: "Invalid email format" },
                subject: { label: "Project Subject", req: "Subject required" },
                message: { label: "How can we help you?", req: "Message required" },
            },
        },
        footer: {
            nav: "Navigation",
            expertise: "Expertise",
            touch: "Contact",
            faq: "FAQ",
            rights: "All rights reserved.",
            privacy: "Privacy Policy",
            terms: "Terms of Service",
        },
    },
    ar: {
        navbar: {
            home: "الرئيسية",
            services: "خدماتنا",
            portfolio: "أعمالنا",
            about: "عن الوكالة",
            faq: "الأسئلة",
            contact: "اتصل بي",
        },
        hero: {
            role: "وكالة رقمية متكاملة",
            title: "مرحباً بك في",
            titleAccent: "خالدي تيك",
            description: "نحن خالدي تيك — وكالة متخصصة في ابتكار حلول رقمية عالية الأداء. بفضل خبرتنا العميقة في Next.js و React والتجارة الإلكترونية المتميزة، نقوم بتحويل المتطلبات المعقدة إلى تجارب مستخدم سلسة تحقق نتائج ملموسة.",
            ctaContact: "دعنا نعمل معاً",
            ctaProjects: "مشاهدة مشاريعنا",
            skills: {
                react: "تطبيقات حديثة",
                shopify: "تجارة إلكترونية مميزة",
                wix: "حلول بدون كود",
            },
        },
        services: {
            badge: "حلول الوكالات المتميزة",
            title: "موقعك الإلكتروني عالي الأداء",
            pricing: {
                starter: {
                    name: "الباقة الأساسية",
                    price: "59",
                    originalPrice: "99",
                    discount: "خصم 40%",
                    note: "الخيار الأساسي",
                    features: ["تصميم احترافي للسبا", "متوافق مع الهواتف", "قائمة الخدمات والأسعار", "نطاق .com مجاني", "تعديلات 2-3 شهرية", "أمان SSL قياسي", "دعم عبر البريد"],
                    cta: "ابدأ الآن",
                    whatsappMsg: "مرحباً خالدي تيك! أنا مهتم بخطة *الموقع الأساسي* (59 دولار شهرياً). هل يمكننا مناقشة الإعداد؟",
                },
                professional: {
                    name: "الباقة القياسية",
                    price: "79",
                    originalPrice: "179",
                    discount: "خصم 55%",
                    note: "الخيار الأكثر شهرة",
                    features: ["موقع سبا متميز", "نظام حجز إلكتروني", "ملفات تعريف للموظفين", "نطاق .com مجاني", "تعديلات 6-7 شهرية", "خرائط جوجل ونماذج", "دعم أولوية (واتساب)"],
                    cta: "ابدأ كـ محترف",
                    whatsappMsg: "مرحباً خالدي تيك! أود البدء بخطة *الموقع القياسي* (79 دولار شهرياً). هل يمكنكم مساعدتي؟",
                },
                business: {
                    name: "باقة النخبة",
                    price: "99",
                    originalPrice: "399",
                    discount: "خصم 75%",
                    note: "الأفضل للسبا والصالونات",
                    features: ["هوية سبا فاخرة", "حجز متقدم وعمليات دفع", "لوحة إدارة العملاء", "نطاق .com مجاني", "تعديلات غير محدودة شهرية", "بطاقات هدايا وعروض", "دعم VIP مخصص 24/7"],
                    cta: "احصل على حل النخبة",
                    whatsappMsg: "مرحباً خالدي تيك! أريد خطة *موقع النخبة للأعمال* (99 دولار شهرياً). دعونا نناقش متطلبات المشروع.",
                },
            },
            monthly: "شهرياً",
            techStack: "ترسانتنا التقنية",
        },
        portfolio: {
            badge: "أعمالنا",
            title: "أحدث المشاريع",
            filters: {
                all: "الكل",
                shopify: "Shopify",
                wix: "Wix",
                webflow: "Webflow",
            },
            visit: "زيارة الموقع",
            preview: "معاينة",
        },
        about: {
            badge: "الوكالة",
            title: "نبني تجارب رقمية",
            titleAccent: "تصنع الفارق",
            bio: "نحن خالدي تيك — وكالة رقمية تحوّل الأفكار المعقدة إلى منتجات رقمية سريعة وأنيقة وقابلة للتوسع. من واجهات React المصنوعة بدقة حتى هندسة الواجهات البرمجية المتينة، نهتم بكل طبقة من طبقات التطوير. نؤمن بأن البرمجيات الرائعة ليست مجرد وظيفية — بل هي حرفة يشعر بها المستخدم.",
            stats: {
                experience: "سنوات الخبرة",
                projects: "مشروع منجز",
                clients: "عميل سعيد",
            },
            skillsTitle: "المهارات التقنية",
        },
        faq: {
            badge: "الأسئلة الشائعة",
            title: "الأسئلة",
            titleAccent: "الأكثر شيوعاً",
            items: [
                {
                    question: "ما هي الخدمات المحددة التي تقدمونها؟",
                    answer: "نتخصص في بناء حلول رقمية عالية الأداء، بما في ذلك تطبيقات React/Next.js المخصصة، ومتاجر Shopify و WooCommerce المتميزة، ولوحات التحكم المدعومة بالبيانات. كما نقدم خدمات تحسين محركات البحث واستشارات UI/UX."
                },
                {
                    question: "ما هي التقنيات الأساسية التي تعتمدون عليها؟",
                    answer: "تتكون مجموعتنا الأساسية من Next.js و React و TypeScript و Tailwind CSS للواجهات الأمامية. أما بالنسبة للخلفية وقواعد البيانات، فنعتمد على Node.js و MongoDB و Prisma و PostgreSQL/Supabase. كما أننا خبراء في تطوير Shopify Liquid و WordPress."
                },
                {
                    question: "هل يمكنكم إعادة تصميم أو تحسين موقعي الحالي؟",
                    answer: "بالتأكيد. العديد من مشاريعنا، مثل 'Lille Noire' و 'Menara Travels'، تتضمن أخذ مفاهيم موجودة أو مواقع قديمة وتحويلها إلى تجارب حديثة سريعة الاستجابة وفائقة السرعة تتوافق مع معايير الويب الحالية."
                },
                {
                    question: "كيف نبدأ مشروعاً معاً؟",
                    answer: "أفضل طريقة هي التواصل عبر واتساب (+1 213 401 9038) أو البريد الإلكتروني (info@khalditech.com). سنقوم بإجراء مكالمة اكتشاف موجزة لمناقشة أهدافك والجدول الزمني والميزانية، وبعد ذلك سنرسل لك عرضاً تقنياً مفصلاً."
                }
            ]
        },
        testimonials: {
            badge: "آراء العملاء",
            title: "ماذا يقول عملاؤنا",
            description: "نفتخر ببناء علاقات طويلة الأمد مع عملائنا من خلال تقديم حلول رقمية عالية الأداء تفوق التوقعات.",
        },
        contact: {
            badge: "متاحون لمشاريع جديدة",
            title: "لنقم ببناء",
            titleAccent: "شيء عظيم",
            formTitle: "أرسل رسالة عامة أو تفاصيل مشروع ترغب في أن نكون جزءًا منه، وسنرد عليك في أقرب وقت ممكن.",
            btn: "بدء المحادثة",
            success: {
                title: "تم الإرسال بنجاح",
                desc: "سنرد عليك خلال 24 ساعة.",
                btn: "إرسال رسالة أخرى",
            },
            form: {
                name: { label: "اسمك", req: "الاسم مطلوب" },
                email: { label: "البريد الإلكتروني", req: "الايميل مطلوب", inv: "بريد غير صالح" },
                subject: { label: "موضوع المشروع", req: "الموضوع مطلوب" },
                message: { label: "كيف يمكننا مساعدتك؟", req: "الرسالة مطلوبة" },
            },
        },
        footer: {
            nav: "التنقل",
            expertise: "الخبرات",
            touch: "اتصل بنا",
            faq: "الأسئلة الشائعة",
            rights: "جميع الحقوق محفوظة.",
            privacy: "سياسة الخصوصية",
            terms: "شروط الخدمة",
        },
    },
};

export type TranslationType = typeof translations.en;
