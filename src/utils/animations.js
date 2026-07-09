// Framer Motion animation variants

export const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
};

export const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.6 },
    },
};

export const slideInLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
};

export const slideInRight = {
    hidden: { opacity: 0, x: 80 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
};

export const scaleIn = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

export const scaleInSpring = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { type: "spring", stiffness: 120, damping: 14 },
    },
};

export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.15,
        },
    },
};

export const staggerContainerFast = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.06,
            delayChildren: 0.1,
        },
    },
};

export const staggerItem = {
    hidden: { opacity: 0, y: 25 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
};

export const staggerItemScale = {
    hidden: { opacity: 0, scale: 0.9, y: 15 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
};

// Blur-in reveal (sleek for text sections)
export const blurIn = {
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: {
        opacity: 1,
        filter: "blur(0px)",
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

// Hover animations
export const hoverScale = {
    scale: 1.05,
    transition: { duration: 0.3 },
};

export const hoverGlow = {
    boxShadow: "0 0 30px rgba(255, 255, 255, 0.15)",
    transition: { duration: 0.3 },
};

export const hoverLift = {
    y: -8,
    boxShadow: "0 20px 40px rgba(255, 255, 255, 0.08)",
    transition: { duration: 0.35, ease: "easeOut" },
};

export const tapScale = {
    scale: 0.95,
};

// Page transition
export const pageTransition = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3 },
};

// Timeline animation
export const timelineItem = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

// Counter animation helper
export const counterAnimation = (target, duration = 2) => ({
    initial: { count: 0 },
    animate: { count: target },
    transition: { duration, ease: "easeOut" },
});

// Draw / path animation for decorative SVG strokes
export const drawLine = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
        pathLength: 1,
        opacity: 1,
        transition: { duration: 1.2, ease: "easeInOut" },
    },
};
