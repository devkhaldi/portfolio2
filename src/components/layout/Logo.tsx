import { motion } from "framer-motion";

export const Logo = ({ scrolled }: { scrolled: boolean }) => {
    return (
        <div className="flex items-center gap-3 group cursor-pointer select-none">
            {/* Animated SVG Logo */}
            <div className="relative w-[48px] h-[48px] transition-all duration-500 group-hover:scale-110">
                <svg
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full relative z-10"
                >
                    {/* Rotating outer ring */}
                    <motion.g
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        style={{ transformOrigin: "50px 50px" }}
                    >
                        <circle cx="50" cy="50" r="45" stroke="url(#ring-grad)" strokeWidth="2" strokeDasharray="30 20" opacity="0.4" />
                        <circle cx="50" cy="5" r="3" fill="var(--accent-blue)" />
                        <circle cx="50" cy="95" r="3" fill="var(--primary)" />
                    </motion.g>

                    {/* Central Abstract 'K' */}
                    <motion.path
                        d="M 35 25 L 35 75 M 65 25 L 35 50 L 65 75"
                        stroke="url(#core-grad)"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    />

                    {/* Floating Core dot */}
                    <motion.circle 
                        cx="75" cy="25" r="4" 
                        fill="var(--accent-blue)" 
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />

                    <defs>
                        <linearGradient id="ring-grad" x1="0" y1="0" x2="100" y2="100">
                            <stop stopColor="var(--primary)" />
                            <stop offset="1" stopColor="var(--accent-blue)" />
                        </linearGradient>
                        <linearGradient id="core-grad" x1="0" y1="0" x2="100" y2="100">
                            <stop stopColor="var(--primary)" />
                            <stop offset="1" stopColor="var(--accent-pink)" />
                        </linearGradient>
                    </defs>
                </svg>
                {/* Ambient glow */}
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full scale-0 group-hover:scale-150 transition-all duration-700 opacity-0 group-hover:opacity-100 pointer-events-none" />
            </div>
        </div>
    );
};
