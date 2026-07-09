import { motion } from 'framer-motion';
import { BIO, PERSONAL_INFO, PROJECTS, SKILLS, EDUCATION } from '../utils/constants';
import { Github, Linkedin, Mail, MapPin, GraduationCap, Code2, Cpu, Shield } from 'lucide-react';

// Derive intelligence data from real project content
const allFeatures = PROJECTS.flatMap(p => p.features || []);
const allTech = [...new Set(PROJECTS.flatMap(p => p.techStack || []))];
const totalSkillCount = Object.values(SKILLS).reduce((acc, arr) => acc + arr.length, 0);
const skillCategories = Object.keys(SKILLS);
const latestEdu = EDUCATION[0];

// Extract key highlight phrases from project features
const extractHighlights = () => {
    const highlights = [];
    allFeatures.forEach(feat => {
        // Pull out percentage/metric mentions
        const metricMatch = feat.match(/(\d+[%+]?\+?[\w\s]*(?:reduction|improvement|faster|reducing|sustaining|supporting)[\w\s]*)/i);
        if (metricMatch) highlights.push(metricMatch[0].trim());
    });
    return highlights.slice(0, 4);
};

const keyMetrics = extractHighlights();

// Build "intelligence report" items from projects
const intelItems = PROJECTS.map(p => ({
    codename: p.title.toUpperCase(),
    subtitle: p.subtitle,
    year: p.year,
    techCount: p.techStack?.length || 0,
    featureCount: p.features?.length || 0,
    hasDemo: !!p.demo,
    github: p.github,
    demo: p.demo,
}));

const About = () => {
    // Stagger animation variants
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
        <section
            id="about"
            className="relative py-20 md:py-32 px-4 md:px-margin-desktop z-20 mb-16 reveal-element overflow-hidden"
        >
            {/* Background shape — giant diagonal slash */}
            <div
                className="absolute inset-0 bg-[#0e0e0e] z-0"
                style={{
                    clipPath: 'polygon(0 4%, 100% 0, 100% 96%, 0 100%)',
                }}
            />
            <div className="absolute inset-0 halftone-overlay opacity-30 pointer-events-none z-0" />

            {/* Red accent line — top edge */}
            <div className="absolute top-0 left-0 w-full h-[6px] bg-[#e60012] z-10"
                style={{ clipPath: 'polygon(0 0, 100% 0, 98% 100%, 2% 100%)' }}
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
                            CLASSIFIED
                        </span>
                    </div>
                    <h2 className="font-headline-xl text-[48px] md:text-[72px] lg:text-[96px] leading-none text-white uppercase tracking-tighter"
                        style={{
                            WebkitTextStroke: '2px #0a0a0a',
                            textShadow: '5px 5px 0px #e60012, -1px -1px 0 #0a0a0a, 1px -1px 0 #0a0a0a',
                        }}
                    >
                        DOSSIER
                    </h2>
                </div>
                {/* Subline */}
                <div className="mt-2 ml-1">
                    <span className="font-label-caps text-label-caps text-[#666] uppercase tracking-[0.3em]">
                        SUBJECT // {PERSONAL_INFO.name.toUpperCase()} // THREAT LEVEL: HIGH
                    </span>
                </div>
            </motion.div>

            {/* ===== MAIN DOSSIER GRID ===== */}
            <motion.div
                className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                {/* ===== LEFT COLUMN: Profile Card (4 cols) ===== */}
                <motion.div className="lg:col-span-4" variants={itemVariants}>
                    <div className="relative bg-[#1a1a1a] border-[4px] border-[#e60012] overflow-hidden"
                        style={{ clipPath: 'polygon(0 0, 100% 2%, 98% 100%, 2% 98%)' }}
                    >
                        {/* Profile image — top portion */}
                        <div className="relative">
                            <div
                                className="w-full aspect-[4/3] bg-cover bg-center bg-no-repeat"
                                style={{
                                    backgroundImage: `url('${PERSONAL_INFO.profilePic}')`,
                                    filter: 'contrast(1.2) saturate(0.8)',
                                }}
                            />
                            {/* Red slash overlay on image */}
                            <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-[#1a1a1a] to-transparent" />
                            <div className="absolute bottom-0 left-0 w-full h-[4px] bg-[#e60012]" />
                        </div>

                        {/* Profile details */}
                        <div className="px-5 py-6">
                            {/* Name */}
                            <h3 className="font-headline-lg text-[28px] md:text-[36px] leading-none text-white uppercase tracking-tight mb-1"
                                style={{ textShadow: '3px 3px 0px #e60012' }}
                            >
                                {PERSONAL_INFO.name.split(' ')[0].toUpperCase()}
                            </h3>
                            <span className="font-headline-lg text-[20px] md:text-[24px] leading-none text-[#e60012] uppercase tracking-tight">
                                {PERSONAL_INFO.name.split(' ').slice(1).join(' ').toUpperCase()}
                            </span>

                            {/* Divider */}
                            <div className="w-full h-[3px] bg-[#e60012] my-4" style={{ transform: 'skewX(-20deg)' }} />

                            {/* Contact links */}
                            <div className="flex flex-col gap-3">
                                <a href={`mailto:${PERSONAL_INFO.email}`}
                                    className="flex items-center gap-3 text-[#999] hover:text-[#e60012] transition-colors group"
                                >
                                    <Mail size={16} className="text-[#e60012] flex-shrink-0" />
                                    <span className="font-body-md text-[13px] truncate group-hover:underline">{PERSONAL_INFO.email}</span>
                                </a>
                                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer"
                                    className="flex items-center gap-3 text-[#999] hover:text-[#e60012] transition-colors group"
                                >
                                    <Linkedin size={16} className="text-[#e60012] flex-shrink-0" />
                                    <span className="font-body-md text-[13px] group-hover:underline">LinkedIn Profile</span>
                                </a>
                                <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer"
                                    className="flex items-center gap-3 text-[#999] hover:text-[#e60012] transition-colors group"
                                >
                                    <Github size={16} className="text-[#e60012] flex-shrink-0" />
                                    <span className="font-body-md text-[13px] group-hover:underline">GitHub</span>
                                </a>
                                <div className="flex items-center gap-3 text-[#666]">
                                    <GraduationCap size={16} className="text-[#e9c400] flex-shrink-0" />
                                    <span className="font-body-md text-[13px]">{latestEdu.institution} — {latestEdu.degree}</span>
                                </div>
                            </div>

                            {/* Capability Tags */}
                            <div className="flex flex-wrap gap-2 mt-5">
                                {['FULL-STACK', 'AI-POWERED', 'DISTRIBUTED', 'SCALABLE'].map((tag, i) => (
                                    <span
                                        key={tag}
                                        className="font-label-caps text-[9px] px-2 py-1 font-bold uppercase tracking-wider border-[2px] shake-hover"
                                        style={{
                                            backgroundColor: i % 2 === 0 ? '#e60012' : '#0a0a0a',
                                            color: i % 2 === 0 ? '#0a0a0a' : '#e60012',
                                            borderColor: i % 2 === 0 ? '#0a0a0a' : '#e60012',
                                            transform: `skewX(-8deg)`,
                                        }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* ===== RIGHT COLUMN: Intelligence Data (8 cols) ===== */}
                <div className="lg:col-span-8 flex flex-col gap-6">

                    {/* --- BIO / OVERVIEW CARD --- */}
                    <motion.div variants={itemVariants}>
                        <div className="relative bg-[#131313] border-[4px] border-white p-6 md:p-8 overflow-hidden"
                            style={{ clipPath: 'polygon(0 0, 100% 0, 97% 100%, 3% 100%)' }}
                        >
                            <div className="absolute inset-0 halftone-overlay opacity-15 pointer-events-none" />

                            {/* Label */}
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-[4px] h-6 bg-[#e60012]" style={{ transform: 'skewX(-15deg)' }} />
                                <span className="font-label-caps text-label-caps text-[#e60012] uppercase tracking-widest font-bold">
                                    PROFILE // OVERVIEW
                                </span>
                            </div>

                            <p className="font-body-lg text-[16px] md:text-body-lg text-[#c6c6c6] leading-relaxed relative z-10">
                                {BIO}
                            </p>

                            {/* Corner decoration */}
                            <div className="absolute top-0 right-0 bg-[#e60012] px-3 py-1">
                                <span className="font-label-caps text-[9px] text-[#0a0a0a] font-bold tracking-widest">
                                    PROFILE_DATA
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* --- STATS BAR --- */}
                    <motion.div variants={itemVariants}>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {[
                                { icon: Code2, label: 'TECH STACK', value: totalSkillCount, color: '#e60012' },
                                { icon: Shield, label: 'PROJECTS', value: PROJECTS.length, color: '#e9c400' },
                                { icon: Cpu, label: 'CATEGORIES', value: skillCategories.length, color: '#ffffff' },
                                { icon: MapPin, label: 'UNIQUE TECH', value: allTech.length, color: '#e60012' },
                            ].map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    className="relative bg-[#1a1a1a] border-[3px] border-[#333] px-4 py-4 overflow-hidden group hover:border-[#e60012] transition-colors"
                                    style={{ clipPath: 'polygon(0 0, 100% 3%, 97% 100%, 3% 97%)' }}
                                    whileHover={{ scale: 1.04, rotate: -1 }}
                                >
                                    <stat.icon size={16} className="text-[#555] mb-2 group-hover:text-[#e60012] transition-colors" />
                                    <span className="block font-headline-xl text-[28px] md:text-[36px] leading-none"
                                        style={{ color: stat.color, textShadow: '2px 2px 0px #0a0a0a' }}
                                    >
                                        {stat.value}
                                    </span>
                                    <span className="block font-label-caps text-[9px] text-[#666] uppercase tracking-widest mt-1">
                                        {stat.label}
                                    </span>
                                    {/* Diagonal accent */}
                                    <div className="absolute top-0 right-0 w-[3px] h-[50%] opacity-50"
                                        style={{ backgroundColor: stat.color, transform: 'skewX(-15deg)' }}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* --- PROJECT INTEL CARDS --- */}
                    <motion.div variants={itemVariants}>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-[4px] h-6 bg-[#e60012]" style={{ transform: 'skewX(-15deg)' }} />
                            <span className="font-label-caps text-label-caps text-[#e60012] uppercase tracking-widest font-bold">
                                OPERATION // INTEL
                            </span>
                        </div>

                        <div className="flex flex-col gap-3">
                            {intelItems.map((intel, i) => (
                                <motion.div
                                    key={intel.codename}
                                    className="relative bg-[#131313] border-l-[6px] border-[#e60012] pl-5 pr-4 py-4 md:pr-6 md:py-5 group hover:bg-[#1a1a1a] transition-colors overflow-hidden"
                                    style={{
                                        clipPath: 'polygon(0 0, 100% 0, 98% 100%, 0 100%)',
                                    }}
                                    whileHover={{ x: 6 }}
                                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                                >
                                    {/* Background index number */}
                                    <span className="absolute top-1 right-4 font-headline-xl text-[56px] md:text-[72px] leading-none text-white opacity-[0.03]">
                                        {String(i + 1).padStart(2, '0')}
                                    </span>

                                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 relative z-10">
                                        {/* Project name */}
                                        <div className="flex items-center gap-3 flex-shrink-0">
                                            <span className="font-headline-lg text-[22px] md:text-[28px] leading-none text-white uppercase tracking-tight group-hover:text-[#e60012] transition-colors"
                                                style={{ textShadow: '2px 2px 0px #0a0a0a' }}
                                            >
                                                {intel.codename}
                                            </span>
                                            <span className="font-label-caps text-[10px] text-[#666] uppercase tracking-wider hidden md:inline">
                                                {intel.year}
                                            </span>
                                        </div>

                                        {/* Subtitle */}
                                        <span className="font-body-md text-[13px] text-[#888] truncate flex-1">
                                            {intel.subtitle}
                                        </span>

                                        {/* Mini stats */}
                                        <div className="flex items-center gap-3 flex-shrink-0">
                                            <span className="font-label-caps text-[9px] text-[#555] uppercase">
                                                {intel.techCount} TECH
                                            </span>
                                            <span className="font-label-caps text-[9px] text-[#555] uppercase">
                                                {intel.featureCount} FEATURES
                                            </span>
                                            {intel.hasDemo && (
                                                <span className="font-label-caps text-[9px] text-[#e9c400] uppercase font-bold">
                                                    LIVE
                                                </span>
                                            )}
                                        </div>

                                        {/* Action links */}
                                        <div className="flex items-center gap-2 flex-shrink-0">
                                            {intel.github && (
                                                <a href={intel.github} target="_blank" rel="noopener noreferrer"
                                                    className="p-1.5 bg-[#0a0a0a] border-[2px] border-[#333] hover:border-[#e60012] transition-colors"
                                                    style={{ transform: 'skewX(-6deg)' }}
                                                    title="View Source"
                                                >
                                                    <Github size={14} className="text-[#999] hover:text-white" />
                                                </a>
                                            )}
                                            {intel.demo && (
                                                <a href={intel.demo} target="_blank" rel="noopener noreferrer"
                                                    className="font-label-caps text-[9px] px-2 py-1 bg-[#e60012] text-[#0a0a0a] font-bold uppercase tracking-wider border-[2px] border-[#0a0a0a] hover:bg-white transition-colors"
                                                    style={{ transform: 'skewX(-6deg)' }}
                                                >
                                                    LAUNCH
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    {/* Halftone on hover */}
                                    <div className="absolute inset-0 halftone-overlay opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* --- KEY METRICS STRIP --- */}
                    {keyMetrics.length > 0 && (
                        <motion.div variants={itemVariants}>
                            <div className="bg-[#e60012] border-[3px] border-[#0a0a0a] px-5 py-4 relative overflow-hidden"
                                style={{ clipPath: 'polygon(2% 0, 100% 0, 98% 100%, 0 100%)' }}
                            >
                                <div className="absolute inset-0 halftone-overlay opacity-15 pointer-events-none" />
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="font-label-caps text-[10px] text-[#0a0a0a] font-bold uppercase tracking-widest opacity-70">
                                        KEY ACHIEVEMENTS //
                                    </span>
                                </div>
                                <div className="flex flex-wrap gap-x-6 gap-y-1 relative z-10">
                                    {PROJECTS.map(p => (
                                        <span key={p.id} className="font-body-md text-[12px] md:text-[13px] text-[#0a0a0a] font-bold">
                                            ★ {p.title}: {p.features?.[0]?.split(',')[0]?.slice(0, 80)}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* --- TECH ARSENAL PREVIEW --- */}
                    <motion.div variants={itemVariants}>
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-[4px] h-6 bg-[#e9c400]" style={{ transform: 'skewX(-15deg)' }} />
                            <span className="font-label-caps text-label-caps text-[#e9c400] uppercase tracking-widest font-bold">
                                TECH // ARSENAL
                            </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {allTech.map((tech, i) => (
                                <motion.span
                                    key={tech}
                                    className="font-label-caps text-[10px] px-3 py-1.5 font-bold uppercase tracking-wider border-[2px] shake-hover"
                                    style={{
                                        backgroundColor: i % 3 === 0 ? '#e60012' : (i % 3 === 1 ? '#0a0a0a' : '#1a1a1a'),
                                        color: i % 3 === 0 ? '#0a0a0a' : '#e60012',
                                        borderColor: i % 3 === 0 ? '#0a0a0a' : '#e60012',
                                        transform: `skewX(-6deg)`,
                                    }}
                                    whileHover={{ scale: 1.1, rotate: -3 }}
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Bottom red accent line */}
            <div className="absolute bottom-0 left-0 w-full h-[6px] bg-[#e60012] z-10"
                style={{ clipPath: 'polygon(2% 0, 98% 0, 100% 100%, 0 100%)' }}
            />
        </section>
    );
};

export default About;
