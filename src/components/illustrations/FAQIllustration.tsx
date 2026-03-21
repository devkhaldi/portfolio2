"use client";

import { motion } from "framer-motion";

export function FAQIllustration() {
    return (
        <div className="relative w-full aspect-square flex items-center justify-center p-8">
            <svg
                viewBox="0 0 400 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full max-w-[400px]"
            >
                {/* Background decorative circles */}
                <motion.circle
                    cx="200"
                    cy="200"
                    r="150"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-primary/10"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                />
                <motion.circle
                    cx="200"
                    cy="200"
                    r="100"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-primary/20"
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                />

                {/* Main FAQ Icon / Question Mark Shape */}
                <motion.path
                    d="M160 140C160 117.909 177.909 100 200 100C222.091 100 240 117.909 240 140C240 162.091 222.091 180 200 180V220"
                    stroke="currentColor"
                    strokeWidth="20"
                    strokeLinecap="round"
                    className="text-primary"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                />
                <motion.circle
                    cx="200"
                    cy="280"
                    r="12"
                    fill="currentColor"
                    className="text-primary"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
                />

                {/* Floating elements representing data/chat */}
                <motion.rect
                    x="280"
                    y="100"
                    width="40"
                    height="40"
                    rx="8"
                    fill="currentColor"
                    className="text-purple-500/20"
                    animate={{
                        y: [100, 80, 100],
                        rotate: [0, 15, 0]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.circle
                    cx="80"
                    cy="180"
                    r="20"
                    fill="currentColor"
                    className="text-blue-500/20"
                    animate={{
                        x: [80, 60, 80],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.path
                    d="M300 250L340 290M340 250L300 290"
                    stroke="currentColor"
                    strokeWidth="8"
                    strokeLinecap="round"
                    className="text-primary/30"
                    animate={{
                        opacity: [0.2, 0.5, 0.2],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                />
            </svg>

            {/* Glowing background effect */}
            <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full -z-10" />
        </div>
    );
}
