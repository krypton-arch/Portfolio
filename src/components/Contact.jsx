import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../utils/constants';

const Contact = () => {
    const contactLinks = [
        {
            icon: Mail,
            label: 'EMAIL',
            value: PERSONAL_INFO.email,
            href: `mailto:${PERSONAL_INFO.email}`,
            accent: '#e60012',
        },
        {
            icon: Phone,
            label: 'PHONE',
            value: PERSONAL_INFO.phone,
            href: `tel:${PERSONAL_INFO.phone.replace(/\s/g, '')}`,
            accent: '#e9c400',
        },
        {
            icon: Linkedin,
            label: 'LINKEDIN',
            value: 'linkedin.com/in/sounak-chakraborty',
            href: PERSONAL_INFO.linkedin,
            external: true,
            accent: '#ffffff',
        },
        {
            icon: Github,
            label: 'GITHUB',
            value: 'github.com/krypton-arch',
            href: PERSONAL_INFO.github,
            external: true,
            accent: '#e60012',
        },
        {
            icon: ExternalLink,
            label: 'PORTFOLIO',
            value: 'sounakdev.netlify.app',
            href: PERSONAL_INFO.portfolio,
            external: true,
            accent: '#e9c400',
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.08, delayChildren: 0.2 },
        },
    };
    const itemVariants = {
        hidden: { x: -40, opacity: 0, skewX: -8 },
        visible: { x: 0, opacity: 1, skewX: 0, transition: { type: 'spring', stiffness: 250, damping: 20 } },
    };

    return (
        <section id="contact" className="relative py-20 md:py-32 px-4 md:px-margin-desktop z-10 mb-16 reveal-element overflow-hidden">
            {/* Background slab */}
            <div
                className="absolute inset-0 bg-[#0a0a0a] z-0"
                style={{
                    clipPath: 'polygon(0 0, 100% 3%, 100% 100%, 0 97%)',
                }}
            />
            <div className="absolute inset-0 halftone-overlay opacity-20 pointer-events-none z-0" />

            {/* Accent line — top */}
            <div className="absolute top-0 left-0 w-full h-[6px] bg-[#e60012] z-10"
                style={{ clipPath: 'polygon(0 0, 98% 0, 100% 100%, 2% 100%)' }}
            />

            {/* Section Header */}
            <motion.div
                className="relative z-10 max-w-7xl mx-auto mb-12 md:mb-20"
                initial={{ x: -100, opacity: 0, skewX: -15 }}
                whileInView={{ x: 0, opacity: 1, skewX: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
                <div className="flex items-center gap-4 md:gap-6">
                    <div className="bg-[#e60012] px-3 py-1 md:px-4 md:py-2 border-[3px] border-[#0a0a0a]"
                        style={{ transform: 'skewX(-12deg)' }}
                    >
                        <span className="font-label-caps text-[10px] md:text-label-caps text-[#0a0a0a] font-bold uppercase tracking-widest"
                            style={{ transform: 'skewX(12deg)', display: 'block' }}
                        >
                            OPEN CHANNEL
                        </span>
                    </div>
                    <h2 className="font-headline-xl text-[48px] md:text-[72px] lg:text-[96px] leading-none text-white uppercase tracking-tighter"
                        style={{
                            WebkitTextStroke: '2px #0a0a0a',
                            textShadow: '5px 5px 0px #e60012, -1px -1px 0 #0a0a0a, 1px -1px 0 #0a0a0a',
                        }}
                    >
                        CONTACT
                    </h2>
                </div>
                <div className="mt-2 ml-1">
                    <span className="font-label-caps text-label-caps text-[#666] uppercase tracking-[0.3em]">
                        SECURE COMMUNICATION // ALL CHANNELS ACTIVE
                    </span>
                </div>
            </motion.div>

            {/* Contact Cards */}
            <motion.div
                className="relative z-10 max-w-7xl mx-auto flex flex-col gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                {contactLinks.map((contact, index) => (
                    <motion.a
                        key={contact.label}
                        href={contact.href}
                        target={contact.external ? '_blank' : undefined}
                        rel={contact.external ? 'noopener noreferrer' : undefined}
                        variants={itemVariants}
                        className="relative block group"
                        whileHover={{ x: 8 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                    >
                        <div
                            className="relative bg-[#131313] border-l-[6px] overflow-hidden hover:bg-[#1a1a1a] transition-colors"
                            style={{
                                borderColor: contact.accent,
                                clipPath: 'polygon(0 0, 100% 0, 99% 100%, 0 100%)',
                            }}
                        >
                            {/* Ghost number */}
                            <span className="absolute top-1 right-4 font-headline-xl text-[56px] md:text-[72px] leading-none text-white opacity-[0.03] pointer-events-none">
                                {String(index + 1).padStart(2, '0')}
                            </span>

                            <div className="flex items-center gap-4 md:gap-6 px-5 py-4 md:px-8 md:py-5 relative z-10">
                                {/* Icon */}
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#0a0a0a] border-[2px] flex items-center justify-center flex-shrink-0 group-hover:bg-[#e60012] transition-colors"
                                    style={{
                                        borderColor: contact.accent,
                                        transform: 'skewX(-6deg)',
                                    }}
                                >
                                    <contact.icon size={18} className="text-white group-hover:text-[#0a0a0a] transition-colors" style={{ transform: 'skewX(6deg)' }} />
                                </div>

                                {/* Label */}
                                <div className="flex items-center gap-3 flex-shrink-0">
                                    <span className="font-headline-lg text-[18px] md:text-[24px] leading-none text-white uppercase tracking-tight group-hover:text-[#e60012] transition-colors"
                                        style={{ textShadow: '2px 2px 0px #0a0a0a' }}
                                    >
                                        {contact.label}
                                    </span>
                                    <div className="w-[3px] h-5 bg-[#e60012] hidden md:block" style={{ transform: 'skewX(-15deg)' }} />
                                </div>

                                {/* Value */}
                                <span className="font-body-md text-[13px] md:text-[15px] text-[#888] truncate flex-1 group-hover:text-white transition-colors">
                                    {contact.value}
                                </span>

                                {/* Arrow */}
                                <motion.div
                                    className="flex-shrink-0 text-[#555] group-hover:text-[#e60012] transition-colors"
                                    animate={{ x: [0, 4, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="3" strokeLinecap="square" />
                                    </svg>
                                </motion.div>
                            </div>

                            {/* Halftone hover */}
                            <div className="absolute inset-0 halftone-overlay opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" />
                        </div>
                    </motion.a>
                ))}
            </motion.div>

            {/* CTA — Large send message button */}
            <motion.div
                className="relative z-10 max-w-7xl mx-auto mt-12 text-center"
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: 'spring', stiffness: 200, damping: 18 }}
            >
                <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="inline-block relative bg-[#e60012] text-[#0a0a0a] font-headline-lg text-[24px] md:text-headline-lg px-10 py-5 md:px-16 md:py-6 border-[4px] border-white drop-shadow-[8px_8px_0px_rgba(255,255,255,1)] transition-all duration-150 uppercase tracking-widest overflow-hidden slash-hover font-black"
                    style={{ clipPath: 'polygon(3% 0, 100% 0, 97% 100%, 0 100%)' }}
                >
                    <span className="relative z-10">SEND_MESSAGE</span>
                </a>
            </motion.div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 w-full h-[6px] bg-[#e60012] z-10"
                style={{ clipPath: 'polygon(2% 0, 98% 0, 100% 100%, 0 100%)' }}
            />
        </section>
    );
};

export default Contact;
