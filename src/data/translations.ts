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
            role: "Full-Stack Web Architect",
            title: "Hi, I'm",
            titleAccent: "Abderrahim",
            description: "I'm Abderrahim El Khaldi — an architect of high-performance digital solutions. Specializing in Next.js, React, and premium E-commerce, I transform complex technical challenges into elegant, user-centric experiences that drive results.",
            ctaContact: "Let's Work Together",
            ctaProjects: "View My Projects",
            skills: {
                react: "Modern Apps",
                shopify: "Premium E-commerce",
                wix: "No-code Solutions",
            },
        },
        services: {
            badge: "My Services",
            title: "What I Offer",
            items: {
                web: {
                    title: "Bespoke Web Development",
                    desc: "Crafting high-performance, responsive websites with a focus on speed, SEO, and flawless user interaction.",
                },
                ecommerce: {
                    title: "Scalable Application Design",
                    desc: "Building complex Single Page Applications (SPAs) with robust state management and seamless data flow.",
                },
                nocode: {
                    title: "Strategic CMS Solutions",
                    desc: "Developing powerful, SEO-optimized WordPress and WooCommerce ecosystems tailored to your business growth.",
                },
            },
            techStack: "My Technology Stack",
        },
        portfolio: {
            badge: "My Work",
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
            badge: "The Architect",
            title: "Crafting Digital",
            titleAccent: "Experiences That Matter",
            bio: "I'm Abderrahim El Khaldi — a Full-Stack Developer who turns complex ideas into fast, elegant, and scalable digital products. From pixel-perfect React interfaces to robust API architectures, I obsess over every layer of the stack. I believe great software isn't just functional — it's a craft that users can feel.",
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
                    answer: "I specialize in building high-performance digital solutions, including custom React/Next.js applications, premium Shopify & WooCommerce stores, and data-driven dashboards. I also provide SEO optimization and UI/UX consulting to ensure your product not only works but converts."
                },
                {
                    question: "Which technologies are in your core stack?",
                    answer: "My primary stack includes Next.js, React, TypeScript, and Tailwind CSS for the frontend. For the backend and database, I rely on Node.js, MongoDB, Prisma, and PostgreSQL/Supabase. I'm also expert in Shopify Liquid and WordPress development."
                },
                {
                    question: "Can you redesign or improve my current website?",
                    answer: "Absolutely. Many of my projects, like 'Lille Noire' and 'Menara Travels', involve taking existing concepts or legacy sites and transforming them into modern, responsive, and blazing-fast experiences that align with current web standards."
                },
                {
                    question: "How do we start a project together?",
                    answer: "The best way is to reach out via WhatsApp (+212 708 772 806) or email (pro.elkhaldi@gmail.com). We'll have a brief discovery call to discuss your goals, timeline, and budget, after which I'll provide a detailed technical proposal."
                }
            ]
        },
        testimonials: {
            badge: "Testimonials",
            title: "What my clients say",
            description: "I take pride in building lasting relationships with my clients by delivering high-performance digital solutions that exceed expectations.",
        },
        contact: {
            badge: "Available for new projects",
            title: "Let's Build",
            titleAccent: "Something Great",
            formTitle: "Send a general message or details of a project you'd like me to be a part of, and I'll get back to you as soon as possible.",
            btn: "Start a Conversation",
            success: {
                title: "Message Sent",
                desc: "I will get back to you within 24 hours.",
                btn: "Send Another",
            },
            form: {
                name: { label: "Your Name", req: "Name required" },
                email: { label: "Email Address", req: "Email required", inv: "Invalid email format" },
                subject: { label: "Project Subject", req: "Subject required" },
                message: { label: "How can I help you?", req: "Message required" },
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
            services: "خدماتي",
            portfolio: "أعمالي",
            about: "عني",
            faq: "الأسئلة",
            contact: "اتصل بي",
        },
        hero: {
            role: "مهندس حلول الويب المتكاملة",
            title: "مرحباً، أنا",
            titleAccent: "عبد الرحيم",
            description: "أنا عبد الرحيم الخالدي، متخصص في ابتكار حلول رقمية عالية الأداء. بفضل خبرتي العميقة في Next.js و React والتجارة الإلكترونية المتميزة، أقوم بتحويل المتطلبات المعقدة إلى تجارب مستخدم سلسة تحقق نتائج ملموسة.",
            ctaContact: "دعنا نعمل معاً",
            ctaProjects: "مشاهدة مشاريعي",
            skills: {
                react: "تطبيقات حديثة",
                shopify: "تجارة إلكترونية مميزة",
                wix: "حلول بدون كود",
            },
        },
        services: {
            badge: "خدماتي",
            title: "ماذا أقدم",
            items: {
                web: {
                    title: "تطوير ويب مخصّص",
                    desc: "تصميم وتطوير مواقع ويب سريعة الاستجابة وعالية الأداء مع التركيز على السرعة، وتحسين محركات البحث، وتفاعل مستخدم مثالي.",
                },
                ecommerce: {
                    title: "تطبيقات الصفحة الواحدة",
                    desc: "بناء تطبيقات الصفحة الواحدة (SPA) المعقدة مع إدارة قوية للبيانات وتدفق سلس للمعلومات.",
                },
                nocode: {
                    title: "حلول إدارة المحتوى الإستراتيجية",
                    desc: "تطوير أنظمة ووردبريس وووكومرس قوية ومحسنة لمحركات البحث، مصممة خصيصاً لنمو أعمالك.",
                },
            },
            techStack: "ترسانتي التقنية",
        },
        portfolio: {
            badge: "أعمالي",
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
            badge: "المعماري",
            title: "أبني تجارب رقمية",
            titleAccent: "تصنع الفارق",
            bio: "أنا عبد الرحيم الخالدي — مطور ويب متكامل أحوّل الأفكار المعقدة إلى منتجات رقمية سريعة وأنيقة وقابلة للتوسع. من واجهات React المصنوعة بدقة حتى هندسة الواجهات البرمجية المتينة، أهتم بكل طبقة من طبقات التطوير. أؤمن بأن البرمجيات الرائعة ليست مجرد وظيفية — بل هي حرفة يشعر بها المستخدم.",
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
                    question: "ما هي الخدمات المحددة التي تقدمها؟",
                    answer: "أتخصص في بناء حلول رقمية عالية الأداء، بما في ذلك تطبيقات React/Next.js المخصصة، ومتاجر Shopify و WooCommerce المتميزة، ولوحات التحكم المدعومة بالبيانات. كما أقدم خدمات تحسين محركات البحث واستشارات UI/UX."
                },
                {
                    question: "ما هي التقنيات الأساسية التي تعتمد عليها؟",
                    answer: "تتكون مجموعتي الأساسية من Next.js و React و TypeScript و Tailwind CSS للواجهات الأمامية. أما بالنسبة للخلفية وقواعد البيانات، فأعتمد على Node.js و MongoDB و Prisma و PostgreSQL/Supabase. كما أنني خبير في تطوير Shopify Liquid و WordPress."
                },
                {
                    question: "هل يمكنك إعادة تصميم أو تحسين موقعي الحالي؟",
                    answer: "بالتأكيد. العديد من مشاريعي، مثل 'Lille Noire' و 'Menara Travels'، تتضمن أخذ مفاهيم موجودة أو مواقع قديمة وتحويلها إلى تجارب حديثة سريعة الاستجابة وفائقة السرعة تتوافق مع معايير الويب الحالية."
                },
                {
                    question: "كيف نبدأ مشروعاً معاً؟",
                    answer: "أفضل طريقة هي التواصل عبر واتساب (+212 708 772 806) أو البريد الإلكتروني (pro.elkhaldi@gmail.com). سنقوم بإجراء مكالمة اكتشاف موجزة لمناقشة أهدافك والجدول الزمني والميزانية، وبعد ذلك سأرسل لك عرضاً تقنياً مفصلاً."
                }
            ]
        },
        testimonials: {
            badge: "آراء العملاء",
            title: "ماذا يقول عملاؤنا",
            description: "أفتخر ببناء علاقات طويلة الأمد مع عملائي من خلال تقديم حلول رقمية عالية الأداء تفوق التوقعات.",
        },
        contact: {
            badge: "متاح لمشاريع جديدة",
            title: "لنقم ببناء",
            titleAccent: "شيء عظيم",
            formTitle: "أرسل رسالة عامة أو تفاصيل مشروع ترغب في أن أكون جزءًا منه، وسأرد عليك في أقرب وقت ممكن.",
            btn: "بدء المحادثة",
            success: {
                title: "تم الإرسال بنجاح",
                desc: "سأرد عليك خلال 24 ساعة.",
                btn: "إرسال رسالة أخرى",
            },
            form: {
                name: { label: "اسمك", req: "الاسم مطلوب" },
                email: { label: "البريد الإلكتروني", req: "الايميل مطلوب", inv: "بريد غير صالح" },
                subject: { label: "موضوع المشروع", req: "الموضوع مطلوب" },
                message: { label: "كيف يمكنني مساعدتك؟", req: "الرسالة مطلوبة" },
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
