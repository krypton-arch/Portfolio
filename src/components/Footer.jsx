import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../utils/constants';
import { playWipeSound } from '../utils/sounds';

const Footer = () => {
    return (
        <motion.footer
            className="relative overflow-hidden mt-16 reveal-element"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            onViewportEnter={() => playWipeSound()}
        >
            {/* All-Out Attack Background Slashes */}
            <motion.div
                className="absolute inset-0 bg-[#e60012] z-0"
                variants={{
                    hidden: { x: '-100%', skewX: -45 },
                    visible: { x: '100%', skewX: -45, transition: { duration: 0.8, ease: "circIn" } }
                }}
            />
            <motion.div
                className="absolute inset-0 bg-[#1a1a1a] z-0"
                variants={{
                    hidden: { x: '100%', skewX: -45 },
                    visible: { x: '-100%', skewX: -45, transition: { duration: 0.8, ease: "circIn", delay: 0.1 } }
                }}
            />

            {/* Main content */}
            <div className="relative z-10 bg-white py-16 md:py-20">
                {/* Accent line — top */}
                <div className="absolute top-0 left-0 w-full h-[6px] bg-[#e60012]"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 98% 100%, 2% 100%)' }}
                />

                <motion.div
                    className="max-w-7xl mx-auto px-4 md:px-margin-desktop text-center"
                    variants={{
                        hidden: { opacity: 0, scale: 0.8, y: 50 },
                        visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, delay: 0.6, type: 'spring', bounce: 0.5 } }
                    }}
                >
                    {/* Giant text */}
                    <h2 className="font-headline-xl text-[48px] md:text-[80px] lg:text-[100px] leading-none mb-6 text-[#0a0a0a] uppercase tracking-tighter"
                        style={{
                            WebkitTextStroke: '2px #e60012',
                            textShadow: '5px 5px 0px #e60012',
                            transform: 'skewX(-6deg)',
                        }}
                    >
                        LET'S BUILD
                    </h2>

                    {/* Divider */}
                    <div className="w-32 h-[4px] bg-[#e60012] mx-auto mb-6" style={{ transform: 'skewX(-20deg)' }} />

                    <div className="flex justify-center items-center gap-4 flex-col md:flex-row">
                        <p className="font-body-md text-[#666] font-bold uppercase tracking-widest text-[13px]">
                            © {new Date().getFullYear()} {PERSONAL_INFO.name.toUpperCase()}
                        </p>
                        <span className="hidden md:inline-block text-[#e60012] font-headline-lg text-[18px]">///</span>
                        <p className="font-label-caps text-[11px] text-[#e60012] font-bold tracking-[0.4em] uppercase">
                            MISSION ACCOMPLISHED
                        </p>
                    </div>
                </motion.div>

                {/* Halftone overlay */}
                <div className="absolute inset-0 halftone-overlay opacity-[0.04] pointer-events-none" />
            </div>
        </motion.footer>
    );
};

export default Footer;
