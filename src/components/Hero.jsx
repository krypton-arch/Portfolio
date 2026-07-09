import { motion } from 'framer-motion';
import { PERSONAL_INFO, PROJECTS, SKILLS } from '../utils/constants';
import CallingCardText from './CallingCardText';

// Extract stats from real project data
const totalTechItems = Object.values(SKILLS).reduce((acc, arr) => acc + arr.length, 0);
const totalProjects = PROJECTS.length;
const latestProject = PROJECTS[0];
const uniqueTechs = [...new Set(PROJECTS.flatMap(p => p.techStack || []))];

const Hero = () => {
    const handleScroll = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // P5-style stat card data derived from real projects
    const statCards = [
        { label: 'PROJECTS', value: String(totalProjects).padStart(2, '0'), color: '#e60012' },
        { label: 'TECH STACK', value: String(totalTechItems), color: '#e9c400' },
        { label: 'LATEST', value: latestProject.year, color: '#ffffff' },
    ];

    return (
        <section className="min-h-[90vh] flex flex-col justify-center items-center relative px-4 md:px-margin-desktop mb-32 reveal-element overflow-hidden">
            {/* ===== BACKGROUND LAYERS ===== */}

            {/* Giant scrolling name — raw P5 energy */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250vw] overflow-hidden opacity-[0.04] pointer-events-none flex whitespace-nowrap z-0 skew-y-[-8deg]">
                <motion.div
                    className="font-headline-xl text-[180px] md:text-[350px] leading-none text-transparent flex gap-12"
                    style={{ WebkitTextStroke: '3px #e60012' }}
                    animate={{ x: [0, -3000] }}
                    transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
                >
                    <span>PHANTOM PHANTOM PHANTOM PHANTOM PHANTOM PHANTOM PHANTOM PHANTOM</span>
                </motion.div>
            </div>

            {/* Caution tape — top */}
            <div className="absolute top-20 md:top-28 -left-10 w-[120vw] h-12 md:h-14 bg-[#facc15] text-[#0a0a0a] border-y-4 border-dashed border-[#0a0a0a] drop-shadow-[6px_6px_0px_rgba(0,0,0,1)] -rotate-[4deg] z-0 flex items-center overflow-hidden pointer-events-none">
                <motion.div
                    className="font-headline-xl text-2xl md:text-3xl whitespace-nowrap flex gap-4 tracking-widest uppercase"
                    animate={{ x: [0, -1200] }}
                    transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                >
                    <span>CRIME SCENE ★ DO NOT CROSS ★ CRIME SCENE ★ DO NOT CROSS ★ CRIME SCENE ★ DO NOT CROSS ★ CRIME SCENE ★ DO NOT CROSS ★ CRIME SCENE ★ DO NOT CROSS ★ CRIME SCENE ★ DO NOT CROSS ★</span>
                </motion.div>
            </div>

            {/* Caution tape — bottom */}
            <div className="absolute bottom-16 md:bottom-24 -left-10 w-[120vw] h-12 md:h-14 bg-primary text-background border-y-4 border-dashed border-background drop-shadow-[6px_6px_0px_rgba(0,0,0,1)] rotate-[3deg] z-0 flex items-center overflow-hidden pointer-events-none">
                <motion.div
                    className="font-headline-xl text-2xl md:text-3xl whitespace-nowrap flex gap-4 tracking-widest uppercase"
                    animate={{ x: [-1200, 0] }}
                    transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
                >
                    <span>CONFIDENTIAL ★ PHANTOM THIEVES ★ CONFIDENTIAL ★ PHANTOM THIEVES ★ CONFIDENTIAL ★ PHANTOM THIEVES ★ CONFIDENTIAL ★ PHANTOM THIEVES ★ CONFIDENTIAL ★ PHANTOM THIEVES ★</span>
                </motion.div>
            </div>

            {/* ===== MAIN HERO CONTENT ===== */}
            <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16">

                {/* LEFT COLUMN — Profile "Wanted Poster" */}
                <motion.div
                    className="relative w-full lg:w-[45%] flex-shrink-0"
                    initial={{ x: -200, opacity: 0, rotate: -8 }}
                    animate={{ x: 0, opacity: 1, rotate: -3 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                >
                    {/* Wanted poster frame */}
                    <div className="relative">
                        {/* Red backing slab — offset behind the photo */}
                        <div
                            className="absolute -inset-3 md:-inset-5 bg-[#e60012] z-0"
                            style={{
                                clipPath: 'polygon(2% 0, 100% 3%, 98% 100%, 0 97%)',
                            }}
                        />

                        {/* Profile image */}
                        <div
                            className="relative z-10 w-full aspect-[3/4] bg-cover bg-center bg-no-repeat border-[6px] border-[#0a0a0a]"
                            style={{
                                backgroundImage: `url('${PERSONAL_INFO.profilePic}')`,
                                clipPath: 'polygon(0 0, 100% 2%, 98% 100%, 2% 98%)',
                                filter: 'contrast(1.15) saturate(0.85)',
                            }}
                            role="img"
                            aria-label="Sounak Chakraborty profile picture"
                        />

                        {/* "WANTED" stamp overlay */}
                        <motion.div
                            className="absolute top-4 right-4 md:top-6 md:right-6 z-20"
                            initial={{ scale: 0, rotate: 30 }}
                            animate={{ scale: 1, rotate: -12 }}
                            transition={{ delay: 0.8, type: 'spring', stiffness: 300, damping: 15 }}
                        >
                            <div className="border-[4px] border-[#e60012] px-3 py-1 md:px-5 md:py-2 bg-[#0a0a0a]/80 backdrop-blur-sm">
                                <span
                                    className="font-headline-xl text-[24px] md:text-[36px] leading-none text-[#e60012] uppercase tracking-wider"
                                    style={{ textShadow: '2px 2px 0px #0a0a0a' }}
                                >
                                    WANTED
                                </span>
                            </div>
                        </motion.div>

                        {/* Degree badge — bottom corner */}
                        <motion.div
                            className="absolute -bottom-4 -left-2 md:-bottom-6 md:-left-4 z-20 bg-[#0a0a0a] border-[4px] border-white px-4 py-2 md:px-6 md:py-3"
                            style={{ transform: 'skewX(-12deg)' }}
                            initial={{ y: 40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1.0, duration: 0.4 }}
                        >
                            <span
                                className="font-headline-lg text-[16px] md:text-[22px] leading-none text-white uppercase tracking-tight"
                                style={{ transform: 'skewX(12deg)', display: 'block' }}
                            >
                                MCA 2027
                            </span>
                        </motion.div>
                    </div>
                </motion.div>

                {/* RIGHT COLUMN — Name + Stats */}
                <div className="flex-1 flex flex-col items-center lg:items-start gap-6 lg:gap-8 text-center lg:text-left">

                    {/* Name — Giant P5 slam */}
                    <motion.div
                        className="relative"
                        initial={{ x: 300, opacity: 0, skewX: -30 }}
                        animate={{ x: 0, opacity: 1, skewX: 0 }}
                        transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="drop-shadow-[12px_12px_0px_#0a0a0a] hover:drop-shadow-[20px_20px_0px_#e60012] transition-all duration-300">
                            <CallingCardText text="SOUNAK" className="text-[64px] leading-[58px] md:text-[100px] md:leading-[90px] lg:text-[130px] lg:leading-[115px]" />
                        </div>
                    </motion.div>

                    {/* Tagline — P5 subtitle badge */}
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.6, type: 'spring', stiffness: 200, damping: 15 }}
                        className="relative"
                    >
                        <div className="bg-[#0a0a0a] border-[4px] border-[#e60012] px-5 py-2 md:px-8 md:py-3 relative overflow-hidden"
                            style={{ transform: 'skewX(-8deg)' }}
                        >
                            {/* Scanline inside badge */}
                            <div className="absolute inset-0 halftone-overlay opacity-20 pointer-events-none" />
                            <span
                                className="font-section-title text-[14px] md:text-section-title text-white uppercase tracking-[0.15em] relative z-10"
                                style={{ transform: 'skewX(8deg)', display: 'block' }}
                            >
                                {PERSONAL_INFO.tagline}
                            </span>
                        </div>
                    </motion.div>

                    {/* P5 Stat Cards Row — real data from projects */}
                    <motion.div
                        className="flex flex-wrap gap-3 md:gap-4 justify-center lg:justify-start w-full"
                        initial={{ y: 60, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                    >
                        {statCards.map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                className="relative group"
                                initial={{ y: 40, opacity: 0, rotate: 5 }}
                                animate={{ y: 0, opacity: 1, rotate: 0 }}
                                transition={{ delay: 0.9 + i * 0.12, type: 'spring', stiffness: 300, damping: 18 }}
                                whileHover={{ scale: 1.08, rotate: -2 }}
                            >
                                <div
                                    className="bg-[#1a1a1a] border-[3px] border-[#e60012] px-4 py-3 md:px-6 md:py-4 relative overflow-hidden"
                                    style={{
                                        clipPath: 'polygon(0 0, 100% 4%, 96% 100%, 4% 96%)',
                                    }}
                                >
                                    {/* Value */}
                                    <span
                                        className="block font-headline-xl text-[32px] md:text-[44px] leading-none"
                                        style={{ color: stat.color, textShadow: '3px 3px 0px #0a0a0a' }}
                                    >
                                        {stat.value}
                                    </span>
                                    {/* Label */}
                                    <span className="block font-label-caps text-[10px] md:text-label-caps text-[#888] uppercase tracking-widest mt-1">
                                        {stat.label}
                                    </span>
                                    {/* Corner slash */}
                                    <div
                                        className="absolute top-0 right-0 w-[3px] h-[60%] opacity-60"
                                        style={{ backgroundColor: stat.color, transform: 'skewX(-15deg)' }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Latest Project Highlight Strip */}
                    <motion.div
                        className="w-full max-w-lg"
                        initial={{ x: 80, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1.2, duration: 0.5 }}
                    >
                        <div
                            className="bg-[#e60012] border-[3px] border-[#0a0a0a] px-5 py-3 relative overflow-hidden"
                            style={{ clipPath: 'polygon(0 0, 100% 0, 97% 100%, 3% 100%)' }}
                        >
                            <div className="absolute inset-0 halftone-overlay opacity-20 pointer-events-none" />
                            <div className="flex items-center gap-4 relative z-10" style={{ transform: 'skewX(-4deg)' }}>
                                <span className="font-label-caps text-[10px] md:text-label-caps text-[#0a0a0a] uppercase tracking-widest font-bold opacity-70">
                                    LATEST //
                                </span>
                                <span className="font-headline-lg text-[18px] md:text-[24px] leading-none text-[#0a0a0a] uppercase tracking-tight font-black">
                                    {latestProject.title}
                                </span>
                                <span className="font-body-md text-[12px] text-[#0a0a0a]/60 hidden md:inline">
                                    — {latestProject.subtitle}
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* CTA Buttons Row */}
                    <motion.div
                        className="flex flex-wrap gap-4 justify-center lg:justify-start mt-2"
                        initial={{ y: 80, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.0, type: 'spring', stiffness: 180, damping: 16 }}
                    >
                        {/* Primary CTA */}
                        <button
                            onClick={() => handleScroll('#projects')}
                            className="relative bg-[#e60012] text-[#0a0a0a] font-headline-lg text-[20px] md:text-headline-lg px-8 py-4 md:px-12 md:py-5 border-[4px] border-white drop-shadow-[8px_8px_0px_rgba(255,255,255,1)] transition-all duration-150 uppercase tracking-widest overflow-hidden group slash-hover"
                            style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)' }}
                        >
                            <span className="relative z-10 font-black">VIEW DOSSIERS</span>
                        </button>

                        {/* Secondary CTA — Resume */}
                        <a
                            href={PERSONAL_INFO.resume}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative bg-[#0a0a0a] text-white font-headline-lg text-[20px] md:text-headline-lg px-8 py-4 md:px-12 md:py-5 border-[4px] border-[#e60012] drop-shadow-[8px_8px_0px_rgba(230,0,18,0.5)] transition-all duration-150 uppercase tracking-widest overflow-hidden group slash-hover"
                            style={{ clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0 100%)' }}
                        >
                            <span className="relative z-10 font-black">RESUME</span>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
