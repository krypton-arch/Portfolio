import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ChevronDown, Zap, Layers, Terminal } from 'lucide-react';
import { PROJECTS } from '../utils/constants';

const Projects = () => {
    const [expandedId, setExpandedId] = useState(null);

    // Stagger variants — consistent with dossier/skills
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 },
        },
    };
    const cardVariants = {
        hidden: { y: 60, opacity: 0, skewX: -4 },
        visible: { y: 0, opacity: 1, skewX: 0, transition: { type: 'spring', stiffness: 220, damping: 22 } },
    };

    return (
        <section id="projects" className="relative py-20 md:py-32 px-4 md:px-margin-desktop z-10 mb-16 reveal-element overflow-hidden">
            {/* Background slab */}
            <div
                className="absolute inset-0 bg-[#0a0a0a] z-0"
                style={{
                    clipPath: 'polygon(0 2%, 100% 0, 100% 98%, 0 100%)',
                }}
            />
            <div className="absolute inset-0 halftone-overlay opacity-20 pointer-events-none z-0" />

            {/* Red accent line — top */}
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
                    {/* Classification badge */}
                    <div className="bg-[#e60012] px-3 py-1 md:px-4 md:py-2 border-[3px] border-[#0a0a0a]"
                        style={{ transform: 'skewX(-12deg)' }}
                    >
                        <span className="font-label-caps text-[10px] md:text-label-caps text-[#0a0a0a] font-bold uppercase tracking-widest"
                            style={{ transform: 'skewX(12deg)', display: 'block' }}
                        >
                            TOP SECRET
                        </span>
                    </div>
                    <h2 className="font-headline-xl text-[48px] md:text-[72px] lg:text-[96px] leading-none text-white uppercase tracking-tighter"
                        style={{
                            WebkitTextStroke: '2px #0a0a0a',
                            textShadow: '5px 5px 0px #e60012, -1px -1px 0 #0a0a0a, 1px -1px 0 #0a0a0a',
                        }}
                    >
                        DOSSIERS
                    </h2>
                </div>
                <div className="mt-2 ml-1">
                    <span className="font-label-caps text-label-caps text-[#666] uppercase tracking-[0.3em]">
                        OPERATION FILES // {PROJECTS.length} MISSIONS DOCUMENTED
                    </span>
                </div>
            </motion.div>

            {/* ===== PROJECT CARDS ===== */}
            <motion.div
                className="relative z-10 max-w-7xl mx-auto flex flex-col gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.05 }}
            >
                {PROJECTS.map((project, index) => {
                    const isExpanded = expandedId === project.id;

                    return (
                        <motion.div
                            key={project.id}
                            variants={cardVariants}
                            className="relative group"
                        >
                            {/* ===== MAIN CARD ===== */}
                            <div
                                className="relative bg-[#131313] border-[4px] border-[#333] overflow-hidden transition-colors duration-200 hover:border-[#e60012]"
                                style={{
                                    clipPath: 'polygon(0 0, 100% 0, 99% 100%, 1% 100%)',
                                }}
                            >
                                {/* Top bar — classification strip */}
                                <div className="flex items-center justify-between px-5 md:px-8 py-2 bg-[#0a0a0a] border-b-[3px] border-[#1a1a1a]">
                                    <div className="flex items-center gap-3">
                                        <span className="font-headline-lg text-[14px] leading-none text-[#e60012]"
                                            style={{ textShadow: '1px 1px 0px #0a0a0a' }}
                                        >
                                            FILE_{String(index + 1).padStart(2, '0')}
                                        </span>
                                        <div className="w-[3px] h-4 bg-[#e60012]" style={{ transform: 'skewX(-15deg)' }} />
                                        <span className="font-label-caps text-[9px] text-[#555] uppercase tracking-widest">
                                            {project.year} // {project.isPrivate ? 'RESTRICTED' : 'DECLASSIFIED'}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        {project.demo && (
                                            <span className="font-label-caps text-[9px] px-2 py-0.5 bg-[#e9c400] text-[#0a0a0a] font-bold uppercase tracking-wider border-[2px] border-[#0a0a0a]"
                                                style={{ transform: 'skewX(-6deg)' }}
                                            >
                                                LIVE
                                            </span>
                                        )}
                                        <span className="font-label-caps text-[9px] px-2 py-0.5 bg-[#1a1a1a] text-[#666] font-bold uppercase tracking-wider border-[2px] border-[#333]"
                                            style={{ transform: 'skewX(-6deg)' }}
                                        >
                                            {project.techStack?.length || 0} TECH
                                        </span>
                                    </div>
                                </div>

                                {/* Main content area */}
                                <div className="px-5 md:px-8 py-6 md:py-8">
                                    {/* Background ghost number */}
                                    <span className="absolute top-8 right-6 md:right-12 font-headline-xl text-[100px] md:text-[160px] leading-none text-white opacity-[0.02] pointer-events-none">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>

                                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 relative z-10">
                                        {/* Left: Title + Description */}
                                        <div className="flex-1">
                                            {/* Project Title */}
                                            <h3 className="font-headline-xl text-[36px] md:text-[52px] lg:text-[64px] leading-none text-white uppercase tracking-tighter mb-2 group-hover:text-[#e60012] transition-colors"
                                                style={{
                                                    WebkitTextStroke: '1px #0a0a0a',
                                                    textShadow: '4px 4px 0px #e60012',
                                                }}
                                            >
                                                {project.title.toUpperCase()}
                                            </h3>

                                            {/* Subtitle */}
                                            <div className="flex items-center gap-2 mb-4">
                                                <div className="w-8 h-[3px] bg-[#e60012]" style={{ transform: 'skewX(-20deg)' }} />
                                                <span className="font-section-title text-[14px] md:text-[16px] text-[#888] uppercase tracking-wider">
                                                    {project.subtitle}
                                                </span>
                                            </div>

                                            {/* Description */}
                                            <p className="font-body-md text-[14px] md:text-[15px] text-[#999] leading-relaxed max-w-2xl">
                                                {project.description}
                                            </p>
                                        </div>

                                        {/* Right: Tech Stack + Actions */}
                                        <div className="lg:w-[280px] flex-shrink-0 flex flex-col gap-4">
                                            {/* Tech Stack */}
                                            <div>
                                                <div className="flex items-center gap-2 mb-3">
                                                    <Layers size={14} className="text-[#e60012]" />
                                                    <span className="font-label-caps text-[9px] text-[#666] uppercase tracking-widest">
                                                        TECH STACK
                                                    </span>
                                                </div>
                                                <div className="flex flex-wrap gap-1.5">
                                                    {project.techStack?.map((tech, i) => (
                                                        <span
                                                            key={tech}
                                                            className="font-label-caps text-[10px] px-2.5 py-1 font-bold uppercase tracking-wider border-[2px]"
                                                            style={{
                                                                backgroundColor: i % 3 === 0 ? '#e60012' : (i % 3 === 1 ? '#0a0a0a' : '#1a1a1a'),
                                                                color: i % 3 === 0 ? '#0a0a0a' : '#e60012',
                                                                borderColor: i % 3 === 0 ? '#0a0a0a' : '#e60012',
                                                                transform: 'skewX(-4deg)',
                                                            }}
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Action buttons */}
                                            <div className="flex gap-2 mt-auto">
                                                {project.github && (
                                                    <a
                                                        href={project.github}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex-1 flex items-center justify-center gap-2 bg-[#0a0a0a] text-white font-headline-lg text-[14px] py-3 border-[3px] border-[#333] hover:border-[#e60012] hover:bg-[#e60012] hover:text-[#0a0a0a] transition-all duration-150 uppercase tracking-wider overflow-hidden slash-hover"
                                                        style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)' }}
                                                        title="View Source Code"
                                                    >
                                                        <Github size={16} />
                                                        <span className="relative z-10">CODE</span>
                                                    </a>
                                                )}
                                                {project.demo && (
                                                    <a
                                                        href={project.demo}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex-1 flex items-center justify-center gap-2 bg-[#e60012] text-[#0a0a0a] font-headline-lg text-[14px] py-3 border-[3px] border-[#0a0a0a] hover:bg-white transition-all duration-150 uppercase tracking-wider font-black overflow-hidden slash-hover"
                                                        style={{ clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0 100%)' }}
                                                        title="Launch Live Demo"
                                                    >
                                                        <ExternalLink size={16} />
                                                        <span className="relative z-10">LAUNCH</span>
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Expand button for features */}
                                    {project.features && project.features.length > 0 && (
                                        <button
                                            onClick={() => setExpandedId(isExpanded ? null : project.id)}
                                            className="mt-6 flex items-center gap-2 font-label-caps text-[10px] text-[#666] hover:text-[#e60012] uppercase tracking-widest transition-colors group/btn"
                                        >
                                            <Terminal size={12} className="group-hover/btn:text-[#e60012]" />
                                            <span>{isExpanded ? 'COLLAPSE INTEL' : `EXPAND INTEL // ${project.features.length} KEY FEATURES`}</span>
                                            <motion.span
                                                animate={{ rotate: isExpanded ? 180 : 0 }}
                                                transition={{ duration: 0.25 }}
                                            >
                                                <ChevronDown size={14} />
                                            </motion.span>
                                        </button>
                                    )}

                                    {/* ===== EXPANDED FEATURES PANEL ===== */}
                                    <AnimatePresence>
                                        {isExpanded && project.features && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                                className="overflow-hidden"
                                            >
                                                <div className="mt-6 pt-6 border-t-[3px] border-[#1a1a1a]">
                                                    <div className="flex items-center gap-2 mb-4">
                                                        <Zap size={14} className="text-[#e9c400]" />
                                                        <span className="font-label-caps text-[10px] text-[#e9c400] uppercase tracking-widest font-bold">
                                                            KEY FEATURES // INTELLIGENCE REPORT
                                                        </span>
                                                    </div>

                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                        {project.features.map((feature, fi) => (
                                                            <motion.div
                                                                key={fi}
                                                                initial={{ x: -20, opacity: 0 }}
                                                                animate={{ x: 0, opacity: 1 }}
                                                                transition={{ delay: fi * 0.08, type: 'spring', stiffness: 300, damping: 22 }}
                                                                className="relative bg-[#0a0a0a] border-l-[4px] border-[#e60012] pl-4 pr-3 py-3 hover:bg-[#1a1a1a] transition-colors"
                                                                style={{
                                                                    clipPath: 'polygon(0 0, 100% 0, 99% 100%, 0 100%)',
                                                                }}
                                                            >
                                                                {/* Feature index */}
                                                                <span className="absolute top-1 right-3 font-headline-lg text-[28px] leading-none text-white opacity-[0.04]">
                                                                    {String(fi + 1).padStart(2, '0')}
                                                                </span>

                                                                <p className="font-body-md text-[13px] text-[#bbb] leading-relaxed relative z-10">
                                                                    {feature}
                                                                </p>
                                                            </motion.div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Halftone hover */}
                                <div className="absolute inset-0 halftone-overlay opacity-0 group-hover:opacity-[0.06] transition-opacity pointer-events-none" />
                            </div>

                            {/* "CLASSIFIED" stamp on hover */}
                            <motion.div
                                className="absolute top-6 right-6 md:top-10 md:right-12 pointer-events-none z-20"
                                initial={{ opacity: 0, rotate: 15, scale: 0.5 }}
                                whileHover={{ opacity: 1, rotate: -12, scale: 1 }}
                            >
                                <div className="border-[4px] border-[#e60012] px-4 py-2 bg-[#0a0a0a]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{ transform: 'rotate(-12deg)' }}
                                >
                                    <span className="font-headline-xl text-[20px] md:text-[28px] leading-none text-[#e60012] uppercase tracking-wider"
                                        style={{ textShadow: '2px 2px 0px #0a0a0a' }}
                                    >
                                        CLASSIFIED
                                    </span>
                                </div>
                            </motion.div>
                        </motion.div>
                    );
                })}
            </motion.div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 w-full h-[6px] bg-[#e60012] z-10"
                style={{ clipPath: 'polygon(2% 0, 100% 0, 98% 100%, 0 100%)' }}
            />
        </section>
    );
};

export default Projects;
