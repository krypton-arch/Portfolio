import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '../utils/constants';
import { playWipeSound, playHoverSound } from '../utils/sounds';

// P5-style menu sound — a sharp percussive "snap"
const playMenuSnap = () => {
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'square';
        osc.frequency.setValueAtTime(1200, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(200, audioCtx.currentTime + 0.08);
        gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.12);
    } catch (e) { /* silent fail */ }
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isWiping, setIsWiping] = useState(false);
    const [wipeColor, setWipeColor] = useState('#e60012');
    const [activeSection, setActiveSection] = useState('home');
    const [hoveredIndex, setHoveredIndex] = useState(-1);
    const [hasEntered, setHasEntered] = useState(false);
    const navRef = useRef(null);

    // Staggered entrance animation on mount
    useEffect(() => {
        const timer = setTimeout(() => setHasEntered(true), 200);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id || 'home');
                    }
                });
            },
            { threshold: 0.2, rootMargin: "-100px 0px -100px 0px" }
        );

        const sections = document.querySelectorAll('section');
        sections.forEach((section) => {
            if (!section.id) section.id = 'home';
            observer.observe(section);
        });

        return () => sections.forEach((section) => observer.unobserve(section));
    }, []);

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        setIsOpen(false);

        // P5 Transition Wipe
        setIsWiping(true);
        playWipeSound();
        setWipeColor(Math.random() > 0.5 ? '#e60012' : '#131313');

        setTimeout(() => {
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'auto' });
            }
        }, 400);

        setTimeout(() => {
            setIsWiping(false);
        }, 800);
    };

    const handleMobileToggle = () => {
        setIsOpen(!isOpen);
        playMenuSnap();
    };

    // Section-reactive accent strip color
    const getAccentColor = () => {
        switch (activeSection) {
            case 'about': return '#e60012';
            case 'skills': return '#e9c400';
            case 'projects': return '#e60012';
            case 'education': return '#c6c6c7';
            case 'contact': return '#e60012';
            default: return '#e60012';
        }
    };

    return (
        <>
            {/* P5 Transition Wipe Overlay */}
            <AnimatePresence>
                {isWiping && (
                    <motion.div
                        className="fixed inset-0 z-[9999] origin-left pointer-events-none"
                        style={{ backgroundColor: wipeColor, borderRight: '20px solid #ffffff' }}
                        initial={{ scaleX: 0, skewX: -20, x: '-10%' }}
                        animate={{ scaleX: 1.2, skewX: -20, x: '-10%' }}
                        exit={{ scaleX: 0, skewX: -20, x: '110%', originX: 1 }}
                        transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                    >
                        <div className="absolute inset-0 halftone-overlay opacity-30"></div>
                    </motion.div>
                )}
            </AnimatePresence>

            <nav
                ref={navRef}
                className="fixed top-0 left-0 w-full z-50"
                style={{ perspective: '800px' }}
            >
                {/* === Main Nav Bar — Black slab with diagonal cut === */}
                <div className="relative p5-nav-scanline">
                    {/* Background shape — the parallelogram nav bar */}
                    <div
                        className="absolute inset-0 bg-[#0a0a0a] border-b-[5px]"
                        style={{
                            borderColor: getAccentColor(),
                            clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 12px), 96% 100%, 0 100%)',
                            transition: 'border-color 0.4s ease',
                        }}
                    />

                    {/* Halftone texture inside the bar */}
                    <div
                        className="absolute inset-0 halftone-overlay opacity-20 pointer-events-none"
                        style={{
                            clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 12px), 96% 100%, 0 100%)',
                        }}
                    />

                    {/* Red diagonal accent slash on the left */}
                    <motion.div
                        className="absolute top-0 left-0 w-2 h-full"
                        style={{
                            backgroundColor: getAccentColor(),
                            transform: 'skewX(-15deg)',
                            transformOrigin: 'top left',
                            transition: 'background-color 0.4s ease',
                        }}
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: hasEntered ? 1 : 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                    />

                    <div className="relative flex justify-between items-center px-4 md:px-8 lg:px-16 h-20 md:h-24">
                        {/* === LOGO — Aggressive P5-style brand mark === */}
                        <motion.a
                            href="#home"
                            onClick={(e) => handleLinkClick(e, '#home')}
                            className="relative group z-10"
                            initial={{ x: -120, opacity: 0, skewX: '-25deg' }}
                            animate={{ x: 0, opacity: 1, skewX: '-6deg' }}
                            transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            whileHover={{ scale: 1.08, skewX: '-12deg' }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {/* Red backing slab behind logo text */}
                            <span
                                className="absolute inset-0 -z-10 bg-[#e60012] opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                                style={{
                                    transform: 'skewX(-8deg) scaleX(1.15)',
                                    top: '-4px',
                                    bottom: '-4px',
                                    left: '-12px',
                                    right: '-12px',
                                }}
                            />
                            <span
                                className="font-headline-xl text-[28px] md:text-[40px] leading-none tracking-[-0.04em] text-white uppercase"
                                style={{
                                    WebkitTextStroke: '2px #0a0a0a',
                                    textShadow: '4px 4px 0px #e60012, -1px -1px 0 #0a0a0a, 1px -1px 0 #0a0a0a, -1px 1px 0 #0a0a0a, 1px 1px 0 #0a0a0a',
                                }}
                            >
                                SOUNAK
                            </span>
                        </motion.a>

                        {/* === Desktop Navigation — P5 Tab Strips === */}
                        <div className="hidden md:flex items-center gap-1 lg:gap-2">
                            {NAV_LINKS.map((link, index) => {
                                const isActive = link.href === `#${activeSection}`;
                                const isHovered = hoveredIndex === index;

                                return (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        onClick={(e) => handleLinkClick(e, link.href)}
                                        onMouseEnter={() => {
                                            setHoveredIndex(index);
                                            playHoverSound();
                                        }}
                                        onMouseLeave={() => setHoveredIndex(-1)}
                                        className="relative block"
                                        initial={{ y: -80, opacity: 0, rotateX: 45 }}
                                        animate={{ y: 0, opacity: 1, rotateX: 0 }}
                                        transition={{
                                            duration: 0.4,
                                            delay: 0.4 + index * 0.1,
                                            ease: [0.22, 1, 0.36, 1],
                                        }}
                                    >
                                        {/* Tab shape container */}
                                        <div
                                            className="relative px-5 lg:px-7 py-2.5 transition-all duration-150"
                                            style={{
                                                transform: `skewX(-12deg)`,
                                            }}
                                        >
                                            {/* Tab background — red when active, dark when idle */}
                                            <motion.div
                                                className="absolute inset-0 -z-10"
                                                style={{
                                                    backgroundColor: isActive ? '#e60012' : (isHovered ? '#e60012' : 'transparent'),
                                                    border: isActive ? '3px solid #ffffff' : (isHovered ? '3px solid #e60012' : '3px solid transparent'),
                                                }}
                                                animate={{
                                                    backgroundColor: isActive ? '#e60012' : (isHovered ? '#e60012' : 'transparent'),
                                                    borderColor: isActive ? '#ffffff' : (isHovered ? '#e60012' : 'transparent'),
                                                }}
                                                transition={{ duration: 0.1 }}
                                            />

                                            {/* Active indicator — white diagonal stripe */}
                                            {isActive && (
                                                <motion.div
                                                    className="absolute top-0 right-0 w-[6px] h-full bg-white"
                                                    layoutId="p5-active-indicator"
                                                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                                />
                                            )}

                                            {/* Tab text */}
                                            <span
                                                className="relative block font-headline-lg uppercase italic tracking-tight"
                                                style={{
                                                    transform: 'skewX(12deg)', // counter-skew the text back to readable
                                                    fontSize: isActive ? '22px' : '18px',
                                                    lineHeight: '1.2',
                                                    fontWeight: isActive ? '900' : '400',
                                                    color: isActive ? '#0a0a0a' : (isHovered ? '#0a0a0a' : '#ffffff'),
                                                    textShadow: isActive ? '2px 2px 0px rgba(255,255,255,0.3)' : 'none',
                                                    transition: 'color 0.1s, font-size 0.15s, font-weight 0.15s',
                                                }}
                                            >
                                                {link.name}
                                            </span>
                                        </div>

                                        {/* Diagonal slash separator between tabs */}
                                        {index < NAV_LINKS.length - 1 && (
                                            <div
                                                className="absolute -right-2 top-1/2 -translate-y-1/2 w-[3px] h-[70%] bg-[#e60012] opacity-40"
                                                style={{ transform: 'translateY(-50%) skewX(-25deg)' }}
                                            />
                                        )}
                                    </motion.a>
                                );
                            })}
                        </div>

                        {/* === Mobile Menu Button — P5 "Take Your Time" hamburger === */}
                        <motion.button
                            className="md:hidden relative z-10 p-3"
                            onClick={handleMobileToggle}
                            aria-label={isOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={isOpen}
                            initial={{ x: 120, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            whileTap={{ scale: 0.85, rotate: -15 }}
                        >
                            <div className="relative w-8 h-6 flex flex-col justify-between">
                                <motion.span
                                    className="block h-[4px] bg-white origin-left"
                                    style={{ transform: 'skewX(-12deg)' }}
                                    animate={{
                                        rotate: isOpen ? 45 : 0,
                                        y: isOpen ? 0 : 0,
                                        backgroundColor: isOpen ? '#e60012' : '#ffffff',
                                    }}
                                    transition={{ duration: 0.2 }}
                                />
                                <motion.span
                                    className="block h-[4px] bg-[#e60012] origin-center"
                                    style={{ transform: 'skewX(-12deg)' }}
                                    animate={{
                                        scaleX: isOpen ? 0 : 1,
                                        opacity: isOpen ? 0 : 1,
                                    }}
                                    transition={{ duration: 0.15 }}
                                />
                                <motion.span
                                    className="block h-[4px] bg-white origin-left"
                                    style={{ transform: 'skewX(-12deg)' }}
                                    animate={{
                                        rotate: isOpen ? -45 : 0,
                                        y: isOpen ? 0 : 0,
                                        backgroundColor: isOpen ? '#e60012' : '#ffffff',
                                    }}
                                    transition={{ duration: 0.2 }}
                                />
                            </div>
                        </motion.button>
                    </div>
                </div>

                {/* === Mobile Full-Screen Menu — P5 All-Out Attack style === */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className="fixed inset-0 z-[60] md:hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                        >
                            {/* Background — aggressive red/black split */}
                            <motion.div
                                className="absolute inset-0"
                                style={{ backgroundColor: '#0a0a0a' }}
                                initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' }}
                                animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                                exit={{ clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
                                transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
                            />

                            {/* Diagonal red slab */}
                            <motion.div
                                className="absolute inset-0"
                                style={{
                                    background: 'linear-gradient(135deg, #e60012 0%, #e60012 35%, transparent 35.5%)',
                                }}
                                initial={{ opacity: 0, x: -100 }}
                                animate={{ opacity: 0.15, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.4, delay: 0.1 }}
                            />

                            {/* Halftone texture overlay */}
                            <div className="absolute inset-0 halftone-overlay opacity-15 pointer-events-none" />

                            {/* Close button — top right */}
                            <motion.button
                                className="absolute top-6 right-6 z-10 p-2"
                                onClick={handleMobileToggle}
                                aria-label="Close menu"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.3, delay: 0.2 }}
                                whileTap={{ scale: 0.8, rotate: 180 }}
                            >
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                                    <line x1="6" y1="6" x2="30" y2="30" stroke="#e60012" strokeWidth="5" strokeLinecap="square" />
                                    <line x1="30" y1="6" x2="6" y2="30" stroke="#e60012" strokeWidth="5" strokeLinecap="square" />
                                </svg>
                            </motion.button>

                            {/* Menu items — P5 Confidant-style stacked cards */}
                            <div className="relative flex flex-col justify-center items-start h-full pl-8 pr-12 gap-3">
                                {/* Decorative "MENU" watermark */}
                                <motion.div
                                    className="absolute top-8 left-6 font-headline-xl text-[14px] tracking-[0.4em] text-white opacity-20 uppercase"
                                    initial={{ x: -40, opacity: 0 }}
                                    animate={{ x: 0, opacity: 0.2 }}
                                    transition={{ delay: 0.3 }}
                                    style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                                >
                                    TAKE YOUR TIME
                                </motion.div>

                                {NAV_LINKS.map((link, index) => {
                                    const isActive = link.href === `#${activeSection}`;

                                    return (
                                        <motion.a
                                            key={link.name}
                                            href={link.href}
                                            onClick={(e) => handleLinkClick(e, link.href)}
                                            className="relative block w-full group"
                                            initial={{ x: -200, opacity: 0, skewX: -25 }}
                                            animate={{ x: 0, opacity: 1, skewX: -8 }}
                                            exit={{ x: 200, opacity: 0, skewX: 25 }}
                                            transition={{
                                                duration: 0.35,
                                                delay: 0.15 + index * 0.08,
                                                ease: [0.22, 1, 0.36, 1],
                                            }}
                                            whileTap={{ scale: 0.95, x: 10 }}
                                        >
                                            {/* Card background */}
                                            <div
                                                className={`
                                                    relative px-8 py-5 border-l-[6px] transition-all duration-100
                                                    ${isActive
                                                        ? 'bg-[#e60012] border-white'
                                                        : 'bg-[#1a1a1a] border-[#e60012] group-hover:bg-[#e60012] group-hover:border-white'
                                                    }
                                                `}
                                                style={{
                                                    clipPath: 'polygon(0 0, 100% 8%, 98% 100%, 2% 92%)',
                                                }}
                                            >
                                                {/* Index number — P5 style numbering */}
                                                <span
                                                    className={`
                                                        absolute top-2 right-4 font-headline-lg text-[48px] leading-none opacity-10
                                                        ${isActive ? 'text-black' : 'text-white group-hover:text-black'}
                                                    `}
                                                    style={{ transform: 'skewX(8deg)' }}
                                                >
                                                    {String(index + 1).padStart(2, '0')}
                                                </span>

                                                {/* Link text */}
                                                <span
                                                    className={`
                                                        relative block font-headline-lg text-[36px] md:text-[42px] leading-none uppercase italic tracking-tight
                                                        ${isActive
                                                            ? 'text-black font-black'
                                                            : 'text-white font-bold group-hover:text-black'
                                                        }
                                                    `}
                                                    style={{ transform: 'skewX(8deg)' }} // counter-skew
                                                >
                                                    {link.name}
                                                </span>

                                                {/* Active arrow indicator */}
                                                {isActive && (
                                                    <motion.div
                                                        className="absolute right-8 top-1/2 -translate-y-1/2"
                                                        style={{ transform: 'translateY(-50%) skewX(8deg)' }}
                                                        animate={{ x: [0, 8, 0] }}
                                                        transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
                                                    >
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#0a0a0a" strokeWidth="3" strokeLinecap="square" />
                                                        </svg>
                                                    </motion.div>
                                                )}
                                            </div>
                                        </motion.a>
                                    );
                                })}

                                {/* Bottom decorative line */}
                                <motion.div
                                    className="w-[60%] h-[3px] bg-[#e60012] mt-4"
                                    style={{ transform: 'skewX(-20deg)' }}
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </>
    );
};

export default Navbar;
