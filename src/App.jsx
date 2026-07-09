import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import { playHeroSlam, playHoverSound } from './utils/sounds';

// Error Boundary Component
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error('Portfolio Error:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] text-white">
                    <div className="text-center p-8">
                        <h1 className="font-headline-xl text-headline-lg text-[#e60012] mb-4"
                            style={{ transform: 'skewX(-12deg)', textShadow: '4px 4px 0px #0a0a0a' }}
                        >
                            SYSTEM_ERROR
                        </h1>
                        <p className="text-[#888] mb-6 font-body-md">
                            Something went wrong. Please refresh.
                        </p>
                        <button
                            onClick={() => window.location.reload()}
                            className="bg-[#e60012] text-[#0a0a0a] font-headline-lg px-8 py-3 border-[4px] border-white uppercase tracking-widest font-black"
                            style={{ clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0 100%)' }}
                        >
                            RELOAD
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

// ===== LOADING SCREEN — P5 "Take Your Time" Boot Sequence =====
const loadingMessages = [
    'INITIALIZING SYSTEM...',
    'LOADING DOSSIER...',
    'ESTABLISHING LINK...',
    'STAND BY...',
];

const LoadingScreen = () => {
    const [msgIndex, setMsgIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setMsgIndex(prev => (prev + 1) % loadingMessages.length);
        }, 400);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            className="fixed inset-0 bg-[#0a0a0a] flex items-center justify-center z-50 overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)', opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        >
            {/* Background halftone */}
            <div className="absolute inset-0 halftone-overlay opacity-15 pointer-events-none" />

            {/* Animated diagonal red slab — slashes in from left */}
            <motion.div
                className="absolute inset-0"
                style={{
                    background: 'linear-gradient(135deg, #e60012 0%, #e60012 30%, transparent 30.5%)',
                }}
                initial={{ x: '-100%' }}
                animate={{ x: '0%' }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />

            {/* Counter diagonal — dark slab from right */}
            <motion.div
                className="absolute inset-0"
                style={{
                    background: 'linear-gradient(-135deg, #131313 0%, #131313 25%, transparent 25.5%)',
                }}
                initial={{ x: '100%' }}
                animate={{ x: '0%' }}
                transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            />

            {/* Center content */}
            <div className="relative z-10 text-center">
                {/* SC Monogram — large, P5 energy text */}
                <motion.div
                    initial={{ scale: 0, skewX: -30, rotate: -15 }}
                    animate={{ scale: 1, skewX: -12, rotate: 0 }}
                    transition={{ duration: 0.4, delay: 0.2, type: 'spring', stiffness: 300, damping: 18 }}
                >
                    <h1
                        className="font-headline-xl text-[100px] md:text-[140px] leading-none tracking-tighter text-white"
                        style={{
                            WebkitTextStroke: '3px #0a0a0a',
                            textShadow: '6px 6px 0px #e60012, -1px -1px 0 #0a0a0a',
                            transform: 'skewX(-12deg)',
                        }}
                    >
                        SC
                    </h1>
                </motion.div>

                {/* Loading message — cycling text */}
                <motion.div
                    className="mt-6"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <span className="font-label-caps text-[10px] md:text-label-caps text-[#e60012] uppercase tracking-[0.4em] font-bold">
                        {loadingMessages[msgIndex]}
                    </span>
                </motion.div>

                {/* Progress bar — skewed red fill */}
                <motion.div
                    className="mt-4 mx-auto w-48 h-[4px] bg-[#1a1a1a] border-[1px] border-[#333] overflow-hidden"
                    style={{ transform: 'skewX(-20deg)' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    <motion.div
                        className="h-full bg-[#e60012]"
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 1.3, delay: 0.2, ease: 'easeInOut' }}
                    />
                </motion.div>
            </div>

            {/* Decorative — giant faded text */}
            <motion.div
                className="absolute bottom-8 right-8 font-headline-xl text-[60px] md:text-[100px] leading-none text-white opacity-[0.03] uppercase tracking-tighter"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 0.03 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                style={{ transform: 'skewX(-12deg)' }}
            >
                PHANTOM
            </motion.div>
        </motion.div>
    );
};

// ===== SCROLL TO TOP — P5 Styled =====
const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        playHoverSound();
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0, y: 20 }}
                    onClick={scrollToTop}
                    onMouseEnter={playHoverSound}
                    className="fixed bottom-8 right-8 z-40 group"
                    whileHover={{ scale: 1.1, y: -4 }}
                    whileTap={{ scale: 0.85 }}
                    aria-label="Scroll to top"
                >
                    <div
                        className="relative bg-[#e60012] border-[3px] border-white p-3 overflow-hidden"
                        style={{
                            clipPath: 'polygon(0 0, 100% 8%, 92% 100%, 8% 92%)',
                        }}
                    >
                        {/* Halftone texture */}
                        <div className="absolute inset-0 halftone-overlay opacity-20 pointer-events-none" />
                        {/* Arrow SVG — P5 style angular */}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="relative z-10">
                            <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="#0a0a0a" strokeWidth="3.5" strokeLinecap="square" />
                        </svg>
                    </div>
                </motion.button>
            )}
        </AnimatePresence>
    );
};

// ===== SECTION DIVIDER COMPONENT =====
const SectionDivider = ({ variant = 'default', color = 'red' }) => {
    const classes = [
        'p5-divider',
        variant === 'alt' ? 'p5-divider-alt' : '',
        variant === 'thin' ? 'p5-divider-thin' : '',
        color === 'gold' ? 'p5-divider-gold' : '',
    ].filter(Boolean).join(' ');

    return <div className={classes} aria-hidden="true" />;
};

// ===== SPEED LINES COMPONENT =====
const SpeedLines = () => <div className="p5-speed-lines" aria-hidden="true" />;

// Main App
function App() {
    const [isLoading, setIsLoading] = useState(true);
    const { scrollYProgress } = useScroll();
    
    // Parallax values for background elements
    const y1 = useTransform(scrollYProgress, [0, 1], [0, 500]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -300]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 90]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
            // Play slam sound slightly after loader disappears to sync with hero entrance
            setTimeout(playHeroSlam, 100);
        }, 1800);
        return () => clearTimeout(timer);
    }, []);

    // Global click sound listener for anchor tags and buttons
    useEffect(() => {
        const handleGlobalClick = (e) => {
            if (e.target.closest('a') || e.target.closest('button')) {
                playHoverSound();
            }
        };
        document.addEventListener('mousedown', handleGlobalClick);
        return () => {
            document.removeEventListener('mousedown', handleGlobalClick);
        }
    }, []);

    return (
        <ErrorBoundary>
            <AnimatePresence mode="wait">
                {isLoading ? (
                    <LoadingScreen key="loading" />
                ) : (
                    <motion.div
                        key="app"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="min-h-screen bg-[#131313] text-white overflow-x-hidden font-body-md antialiased relative"
                    >
                        {/* ===== PARALLAX BACKGROUND LAYERS ===== */}
                        <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
                            <div className="absolute inset-0 halftone-overlay pointer-events-none opacity-30" />
                            
                            {/* Giant faded "SYSTEM" text — moves down on scroll */}
                            <motion.div 
                                style={{ y: y1 }}
                                className="absolute top-20 left-[-10%] font-headline-xl text-[400px] leading-none text-[#1a1a1a] opacity-[0.05] whitespace-nowrap"
                                aria-hidden="true"
                            >
                                <span style={{ transform: 'skewX(-15deg)', display: 'block' }}>SYSTEM</span>
                            </motion.div>

                            {/* Diagonal red slash — parallax at different rate */}
                            <motion.div
                                style={{ y: y3 }}
                                className="absolute top-[30%] left-[-5%] w-[120%] h-[200px] bg-[#e60012] opacity-[0.015]"
                                aria-hidden="true"
                            >
                                <div style={{ transform: 'skewY(-8deg)', width: '100%', height: '100%', background: 'inherit' }} />
                            </motion.div>

                            {/* Speed line horizontal stripes — fixed */}
                            <div
                                className="absolute top-[55%] left-0 w-full h-[120px] opacity-[0.02]"
                                style={{
                                    background: 'repeating-linear-gradient(0deg, transparent, transparent 6px, #e60012 6px, #e60012 7px)',
                                }}
                                aria-hidden="true"
                            />
                            
                            {/* Giant shape — moves up and rotates */}
                            <motion.div 
                                style={{ y: y2, rotate: rotate1 }}
                                className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-[#e60012] opacity-[0.02] mix-blend-screen"
                                aria-hidden="true"
                            >
                                <div style={{ transform: 'skewX(20deg)', width: '100%', height: '100%', background: 'inherit' }} />
                            </motion.div>
                        </div>

                        <CustomCursor />
                        <Navbar />
                        <main className="pt-32 md:pt-48 pb-20 relative z-10">
                            <Hero />
                            <SectionDivider />
                            <About />
                            <SectionDivider variant="alt" color="gold" />
                            <SpeedLines />
                            <Skills />
                            <SectionDivider />
                            <Projects />
                            <SectionDivider variant="thin" />
                            <SpeedLines />
                            <Education />
                            <SectionDivider variant="alt" />
                            <Contact />
                        </main>
                        <Footer />
                        <ScrollToTop />
                    </motion.div>
                )}
            </AnimatePresence>
        </ErrorBoundary>
    );
}

export default App;
