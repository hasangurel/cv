import { Variants } from "framer-motion";

// Container animation with stagger effect
export const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

// Card fade-in and slide-up animation
export const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1], // Custom easing
        },
    },
};

// Icon float animation on hover
export const iconFloatVariants: Variants = {
    initial: { y: 0 },
    hover: {
        y: [-4, 4, -4],
        transition: {
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
        },
    },
};

// Button hover animation
export const buttonVariants: Variants = {
    initial: { scale: 1 },
    hover: {
        scale: 1.05,
        transition: {
            duration: 0.2,
            ease: "easeOut",
        },
    },
    tap: {
        scale: 0.98,
    },
};

// Tag pill hover animation
export const tagVariants: Variants = {
    initial: { scale: 1 },
    hover: {
        scale: 1.1,
        backgroundColor: "rgba(168, 85, 247, 0.2)",
        transition: {
            duration: 0.2,
        },
    },
};

// Glow pulse animation for main icon
export const glowPulseVariants: Variants = {
    initial: {
        boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)",
    },
    animate: {
        boxShadow: [
            "0 0 20px rgba(168, 85, 247, 0.3)",
            "0 0 40px rgba(236, 72, 153, 0.5)",
            "0 0 20px rgba(168, 85, 247, 0.3)",
        ],
        transition: {
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
        },
    },
};

// Stats card animation
export const statsCardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.4,
            ease: "easeOut",
        },
    },
};
