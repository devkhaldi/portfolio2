"use client";

import { motion, useReducedMotion } from "framer-motion";

interface RevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
}

export const Reveal = ({ children, width = "fit-content", delay = 0.2 }: RevealProps) => {
    const prefersReducedMotion = useReducedMotion();

    // If user prefers reduced motion, render children directly without animation
    if (prefersReducedMotion) {
        return <div style={{ position: "relative", width }}>{children}</div>;
    }

    return (
        <div style={{ position: "relative", width, overflow: "hidden" }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, margin: "-80px", amount: 0.1 }}
                style={{ willChange: "transform, opacity" }}
            >
                {children}
            </motion.div>
        </div>
    );
};
