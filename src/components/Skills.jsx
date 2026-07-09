import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { SKILLS } from '../utils/constants';
import { Zap, ChevronRight } from 'lucide-react';

const radarData = [
    { subject: 'Frontend', A: 90, fullMark: 100 },
    { subject: 'Backend', A: 85, fullMark: 100 },
    { subject: 'AI/ML', A: 70, fullMark: 100 },
    { subject: 'Systems', A: 80, fullMark: 100 },
    { subject: 'Databases', A: 85, fullMark: 100 },
    { subject: 'DevOps', A: 65, fullMark: 100 },
];

// Assign a visual accent per category for P5 flavor
const categoryAccents = [
    '#e60012', '#e9c400', '#ffffff', '#e60012',
    '#e9c400', '#ffffff', '#e60012', '#e9c400', '#ffffff',
];

const totalSkills = Object.values(SKILLS).reduce((acc, arr) => acc + arr.length, 0);

const Skills = () => {
    const skillCategories = Object.entries(SKILLS);
    const [expandedCategory, setExpandedCategory] = useState(null);

    // Stagger animation variants — matching the dossier section
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.06, delayChildren: 0.15 },
        },
    };
    const itemVariants = {
        hidden: { x: -30, opacity: 0, skewX: -6 },
        visible: { x: 0, opacity: 1, skewX: 0, transition: { type: 'spring', stiffness: 280, damping: 22 } },
    };

    return (
        <section id="skills" className="relative py-20 md:py-32 px-4 md:px-margin-desktop z-10 mb-16 reveal-element overflow-hidden">
            {/* Background — matches About section's angular dark slab */}
            <div
                className="absolute inset-0 bg-[#0e0e0e] z-0"
                style={{
                    clipPath: 'polygon(0 0, 100% 3%, 100% 100%, 0 97%)',
                }}
            />
            <div className="absolute inset-0 halftone-overlay opacity-25 pointer-events-none z-0" />

            {/* Red accent line — top */}
            <div className="absolute top-0 left-0 w-full h-[6px] bg-[#e9c400] z-10"
                style={{ clipPath: 'polygon(2% 0, 100% 0, 98% 100%, 0 100%)' }}
            />

            {/* Section Header */}
            <motion.div
                className="relative z-10 max-w-7xl mx-auto mb-12 md:mb-20"
                initial={{ x: 100, opacity: 0, skewX: 15 }}
                whileInView={{ x: 0, opacity: 1, skewX: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
                <div className="flex items-center gap-4 md:gap-6 justify-end">
                    <h2 className="font-headline-xl text-[48px] md:text-[72px] lg:text-[96px] leading-none text-white uppercase tracking-tighter"
                        style={{
                            WebkitTextStroke: '2px #0a0a0a',
                            textShadow: '5px 5px 0px #e9c400, -1px -1px 0 #0a0a0a, 1px -1px 0 #0a0a0a',
                        }}
                    >
                        ARSENAL
                    </h2>
                    {/* Classification badge */}
                    <div className="bg-[#e9c400] px-3 py-1 md:px-4 md:py-2 border-[3px] border-[#0a0a0a]"
                        style={{ transform: 'skewX(-12deg)' }}
                    >
                        <span className="font-label-caps text-[10px] md:text-label-caps text-[#0a0a0a] font-bold uppercase tracking-widest"
                            style={{ transform: 'skewX(12deg)', display: 'block' }}
                        >
                            {totalSkills} ITEMS
                        </span>
                    </div>
                </div>
                <div className="mt-2 text-right">
                    <span className="font-label-caps text-label-caps text-[#666] uppercase tracking-[0.3em]">
                        EQUIPMENT // LOADOUT // READY FOR DEPLOYMENT
                    </span>
                </div>
            </motion.div>

            {/* ===== MAIN CONTENT GRID ===== */}
            <motion.div
                className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                {/* ===== LEFT: Radar Chart — "Social Stats" (4 cols) ===== */}
                <motion.div className="lg:col-span-4" variants={itemVariants}>
                    <div className="relative bg-[#131313] border-[4px] border-[#e9c400] overflow-hidden h-full"
                        style={{ clipPath: 'polygon(0 0, 100% 2%, 98% 100%, 2% 98%)' }}
                    >
                        {/* Label */}
                        <div className="absolute top-0 left-0 bg-[#e9c400] px-4 py-1.5 z-10">
                            <span className="font-label-caps text-[9px] text-[#0a0a0a] font-bold tracking-widest uppercase">
                                SOCIAL STATS
                            </span>
                        </div>

                        <div className="absolute inset-0 halftone-overlay opacity-10 pointer-events-none" />

                        {/* Chart */}
                        <div className="w-full aspect-square mt-8 px-2 relative z-10">
                            <ResponsiveContainer width="100%" height="100%">
                                <RadarChart cx="50%" cy="50%" outerRadius="68%" data={radarData}>
                                    <PolarGrid stroke="#e60012" opacity={0.25} />
                                    <PolarAngleAxis
                                        dataKey="subject"
                                        tick={{
                                            fill: '#ffffff',
                                            fontSize: 11,
                                            fontFamily: 'Archivo Narrow',
                                            fontWeight: 'bold',
                                        }}
                                    />
                                    <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: '#0a0a0a',
                                            border: '3px solid #e60012',
                                            borderRadius: 0,
                                            fontFamily: 'Archivo Narrow',
                                            fontSize: '14px',
                                        }}
                                        itemStyle={{ color: '#e60012', fontWeight: 'bold' }}
                                    />
                                    <Radar
                                        name="Proficiency"
                                        dataKey="A"
                                        stroke="#e60012"
                                        fill="#e60012"
                                        fillOpacity={0.35}
                                        strokeWidth={3}
                                    />
                                </RadarChart>
                            </ResponsiveContainer>
                        </div>

                        {/* Bottom stats strip */}
                        <div className="px-5 pb-5">
                            <div className="bg-[#0a0a0a] border-[2px] border-[#333] px-4 py-3"
                                style={{ clipPath: 'polygon(0 0, 100% 0, 97% 100%, 3% 100%)' }}
                            >
                                <div className="flex justify-between items-center">
                                    <span className="font-label-caps text-[9px] text-[#666] uppercase tracking-widest">
                                        CATEGORIES
                                    </span>
                                    <span className="font-headline-lg text-[24px] leading-none text-[#e9c400]"
                                        style={{ textShadow: '2px 2px 0px #0a0a0a' }}
                                    >
                                        {skillCategories.length}
                                    </span>
                                </div>
                                <div className="w-full h-[2px] bg-[#333] my-2" />
                                <div className="flex justify-between items-center">
                                    <span className="font-label-caps text-[9px] text-[#666] uppercase tracking-widest">
                                        TOTAL SKILLS
                                    </span>
                                    <span className="font-headline-lg text-[24px] leading-none text-[#e60012]"
                                        style={{ textShadow: '2px 2px 0px #0a0a0a' }}
                                    >
                                        {totalSkills}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* ===== RIGHT: Skill Categories Grid (8 cols) ===== */}
                <div className="lg:col-span-8 flex flex-col gap-4">
                    {skillCategories.map(([category, skills], catIndex) => {
                        const accent = categoryAccents[catIndex % categoryAccents.length];
                        const isExpanded = expandedCategory === catIndex;
                        const displaySkills = isExpanded ? skills : skills.slice(0, 6);
                        const hasMore = skills.length > 6;

                        return (
                            <motion.div
                                key={category}
                                variants={itemVariants}
                                className="relative"
                            >
                                <div
                                    className="relative bg-[#131313] border-l-[6px] overflow-hidden group hover:bg-[#1a1a1a] transition-colors"
                                    style={{
                                        borderColor: accent,
                                        clipPath: 'polygon(0 0, 100% 0, 99% 100%, 0 100%)',
                                    }}
                                >
                                    {/* Background index number */}
                                    <span className="absolute top-1 right-4 font-headline-xl text-[48px] md:text-[64px] leading-none text-white opacity-[0.03] pointer-events-none">
                                        {String(catIndex + 1).padStart(2, '0')}
                                    </span>

                                    <div className="px-5 py-4 md:px-6 md:py-5 relative z-10">
                                        {/* Category header row */}
                                        <div className="flex items-center justify-between gap-4 mb-3">
                                            <div className="flex items-center gap-3">
                                                <div className="w-[4px] h-5" style={{ backgroundColor: accent, transform: 'skewX(-15deg)' }} />
                                                <h3 className="font-headline-lg text-[18px] md:text-[22px] leading-none text-white uppercase tracking-tight"
                                                    style={{ textShadow: `2px 2px 0px ${accent === '#ffffff' ? '#333' : accent}22` }}
                                                >
                                                    {category.toUpperCase()}
                                                </h3>
                                                <span className="font-label-caps text-[9px] px-2 py-0.5 font-bold uppercase tracking-wider border-[2px]"
                                                    style={{
                                                        backgroundColor: accent,
                                                        color: '#0a0a0a',
                                                        borderColor: '#0a0a0a',
                                                        transform: 'skewX(-8deg)',
                                                    }}
                                                >
                                                    {skills.length}
                                                </span>
                                            </div>

                                            {/* Expand toggle for categories with many skills */}
                                            {hasMore && (
                                                <button
                                                    onClick={() => setExpandedCategory(isExpanded ? null : catIndex)}
                                                    className="flex items-center gap-1 font-label-caps text-[9px] text-[#666] hover:text-[#e60012] uppercase tracking-wider transition-colors"
                                                >
                                                    {isExpanded ? 'COLLAPSE' : `+${skills.length - 6} MORE`}
                                                    <motion.span
                                                        animate={{ rotate: isExpanded ? 90 : 0 }}
                                                        transition={{ duration: 0.2 }}
                                                    >
                                                        <ChevronRight size={12} />
                                                    </motion.span>
                                                </button>
                                            )}
                                        </div>

                                        {/* Skill tags */}
                                        <div className="flex flex-wrap gap-2">
                                            <AnimatePresence mode="popLayout">
                                                {displaySkills.map((skill, i) => {
                                                    // Cycle through 3 tag styles per P5 visual language
                                                    const tagStyle = i % 3;

                                                    return (
                                                        <motion.span
                                                            key={skill}
                                                            layout
                                                            initial={{ opacity: 0, scale: 0.8, y: 10 }}
                                                            animate={{ opacity: 1, scale: 1, y: 0 }}
                                                            exit={{ opacity: 0, scale: 0.8, y: -10 }}
                                                            transition={{ type: 'spring', stiffness: 400, damping: 22, delay: i * 0.02 }}
                                                            className="font-label-caps text-[10px] md:text-[11px] px-3 py-1.5 font-bold uppercase tracking-wider border-[2px] transition-all duration-100 hover:scale-110 cursor-default"
                                                            style={{
                                                                backgroundColor: tagStyle === 0 ? accent : (tagStyle === 1 ? '#0a0a0a' : '#1a1a1a'),
                                                                color: tagStyle === 0 ? '#0a0a0a' : (accent === '#ffffff' ? '#ffffff' : accent),
                                                                borderColor: tagStyle === 0 ? '#0a0a0a' : (accent === '#ffffff' ? '#555' : accent),
                                                                transform: `skewX(${tagStyle === 0 ? '-6' : tagStyle === 1 ? '0' : '3'}deg)`,
                                                            }}
                                                            whileHover={{ rotate: -3, scale: 1.12 }}
                                                        >
                                                            {skill}
                                                        </motion.span>
                                                    );
                                                })}
                                            </AnimatePresence>
                                        </div>
                                    </div>

                                    {/* Halftone hover overlay */}
                                    <div className="absolute inset-0 halftone-overlay opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 w-full h-[6px] bg-[#e9c400] z-10"
                style={{ clipPath: 'polygon(0 0, 98% 0, 100% 100%, 2% 100%)' }}
            />
        </section>
    );
};

export default Skills;
