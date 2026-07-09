import { motion } from 'framer-motion';
import { EDUCATION } from '../utils/constants';
import { MapPin, Award, Calendar } from 'lucide-react';

const Education = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.2 },
        },
    };
    const cardVariants = {
        hidden: { y: 50, opacity: 0, skewX: -6 },
        visible: { y: 0, opacity: 1, skewX: 0, transition: { type: 'spring', stiffness: 250, damping: 22 } },
    };

    return (
        <section
            id="education"
            className="relative py-20 md:py-32 px-4 md:px-margin-desktop z-20 mb-16 reveal-element overflow-hidden"
        >
            {/* Background slab */}
            <div
                className="absolute inset-0 bg-[#0e0e0e] z-0"
                style={{
                    clipPath: 'polygon(0 3%, 100% 0, 100% 97%, 0 100%)',
                }}
            />
            <div className="absolute inset-0 halftone-overlay opacity-25 pointer-events-none z-0" />

            {/* Accent line — top */}
            <div className="absolute top-0 left-0 w-full h-[6px] bg-[#c6c6c7] z-10"
                style={{ clipPath: 'polygon(0 0, 98% 0, 100% 100%, 2% 100%)' }}
            />

            {/* Section Header */}
            <motion.div
                className="relative z-10 max-w-7xl mx-auto mb-12 md:mb-20"
                initial={{ x: 100, opacity: 0, skewX: 12 }}
                whileInView={{ x: 0, opacity: 1, skewX: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
                <div className="flex items-center gap-4 md:gap-6 justify-end">
                    <h2 className="font-headline-xl text-[48px] md:text-[72px] lg:text-[96px] leading-none text-white uppercase tracking-tighter"
                        style={{
                            WebkitTextStroke: '2px #0a0a0a',
                            textShadow: '5px 5px 0px #c6c6c7, -1px -1px 0 #0a0a0a, 1px -1px 0 #0a0a0a',
                        }}
                    >
                        RECORDS
                    </h2>
                    <div className="bg-[#c6c6c7] px-3 py-1 md:px-4 md:py-2 border-[3px] border-[#0a0a0a]"
                        style={{ transform: 'skewX(-12deg)' }}
                    >
                        <span className="font-label-caps text-[10px] md:text-label-caps text-[#0a0a0a] font-bold uppercase tracking-widest"
                            style={{ transform: 'skewX(12deg)', display: 'block' }}
                        >
                            EDUCATION
                        </span>
                    </div>
                </div>
                <div className="mt-2 text-right">
                    <span className="font-label-caps text-label-caps text-[#666] uppercase tracking-[0.3em]">
                        ACADEMIC HISTORY // {EDUCATION.length} INSTITUTIONS
                    </span>
                </div>
            </motion.div>

            {/* Education Cards */}
            <motion.div
                className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                {EDUCATION.map((edu, index) => (
                    <motion.div
                        key={edu.id}
                        variants={cardVariants}
                        className="relative group"
                    >
                        <div
                            className="relative bg-[#131313] border-[4px] border-[#333] overflow-hidden h-full hover:border-[#e60012] transition-colors"
                            style={{
                                clipPath: 'polygon(0 0, 100% 2%, 98% 100%, 2% 98%)',
                            }}
                        >
                            {/* Top strip */}
                            <div className="flex items-center justify-between px-5 py-2 bg-[#0a0a0a] border-b-[3px] border-[#1a1a1a]">
                                <span className="font-headline-lg text-[14px] leading-none text-[#e60012]">
                                    REC_{String(index + 1).padStart(2, '0')}
                                </span>
                                <div className="flex items-center gap-1.5">
                                    <Calendar size={10} className="text-[#555]" />
                                    <span className="font-label-caps text-[9px] text-[#555] uppercase tracking-widest">
                                        {edu.duration}
                                    </span>
                                </div>
                            </div>

                            {/* Ghost number */}
                            <span className="absolute top-12 right-4 font-headline-xl text-[80px] leading-none text-white opacity-[0.02] pointer-events-none">
                                {String(index + 1).padStart(2, '0')}
                            </span>

                            <div className="px-5 py-6 relative z-10">
                                {/* Institution */}
                                <h3 className="font-headline-lg text-[22px] md:text-[28px] leading-none text-white uppercase tracking-tight mb-2 group-hover:text-[#e60012] transition-colors"
                                    style={{ textShadow: '3px 3px 0px #e60012' }}
                                >
                                    {edu.institution.toUpperCase()}
                                </h3>

                                {/* Location */}
                                <div className="flex items-center gap-2 mb-4">
                                    <MapPin size={12} className="text-[#e60012]" />
                                    <span className="font-body-md text-[13px] text-[#888]">
                                        {edu.location}
                                    </span>
                                </div>

                                {/* Divider */}
                                <div className="w-full h-[3px] bg-[#e60012] mb-4" style={{ transform: 'skewX(-20deg)' }} />

                                {/* Degree */}
                                <p className="font-body-lg text-[15px] md:text-body-lg text-[#c6c6c6] font-bold mb-4">
                                    {edu.degree}
                                </p>

                                {/* Grade */}
                                {edu.grade && (
                                    <div className="inline-flex items-center gap-2">
                                        <Award size={14} className="text-[#e9c400]" />
                                        <span className="font-label-caps text-[11px] px-3 py-1 bg-[#e60012] text-[#0a0a0a] font-bold uppercase tracking-wider border-[2px] border-[#0a0a0a]"
                                            style={{ transform: 'skewX(-8deg)' }}
                                        >
                                            {edu.grade}
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Halftone hover */}
                            <div className="absolute inset-0 halftone-overlay opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" />
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 w-full h-[6px] bg-[#c6c6c7] z-10"
                style={{ clipPath: 'polygon(2% 0, 100% 0, 98% 100%, 0 100%)' }}
            />
        </section>
    );
};

export default Education;
