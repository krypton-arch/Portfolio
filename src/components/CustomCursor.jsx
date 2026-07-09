import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName.toLowerCase() === 'a' || e.target.tagName.toLowerCase() === 'button' || e.target.closest('a') || e.target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    // Click ripple — spawn a P5-style burst at click position
    const spawnRipple = useCallback((e) => {
        const ripple = document.createElement('div');
        ripple.className = 'p5-click-ripple';
        ripple.style.left = `${e.clientX}px`;
        ripple.style.top = `${e.clientY}px`;
        document.body.appendChild(ripple);
        setTimeout(() => ripple.remove(), 450);
    }, []);

    useEffect(() => {
        document.addEventListener('mousedown', spawnRipple);
        return () => document.removeEventListener('mousedown', spawnRipple);
    }, [spawnRipple]);

    return (
        <>
            {/* Main cursor — P5 Diamond/Rhombus */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[10000] mix-blend-difference"
                animate={{
                    x: mousePosition.x - 14,
                    y: mousePosition.y - 14,
                    scale: isClicking ? 0.6 : isHovering ? 1.4 : 1,
                    rotate: isHovering ? 0 : 45,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 1000,
                    damping: 40,
                    mass: 0.1,
                }}
            >
                <div className="w-7 h-7 relative">
                    {/* Diamond shape — the core P5 cursor */}
                    <div
                        className="absolute inset-0 border-2 border-white"
                        style={{
                            transform: isHovering ? 'skewX(-12deg)' : 'none',
                            transition: 'transform 0.15s ease',
                        }}
                    />
                    {/* Inner dot — appears on hover */}
                    {isHovering && (
                        <div className="absolute inset-0 m-auto w-1.5 h-1.5 bg-[#e60012]" />
                    )}
                    {/* Crosshair lines — only when not hovering */}
                    {!isHovering && (
                        <>
                            <div className="absolute top-[-6px] left-1/2 w-[1px] h-[5px] bg-white -translate-x-1/2" />
                            <div className="absolute bottom-[-6px] left-1/2 w-[1px] h-[5px] bg-white -translate-x-1/2" />
                            <div className="absolute left-[-6px] top-1/2 w-[5px] h-[1px] bg-white -translate-y-1/2" />
                            <div className="absolute right-[-6px] top-1/2 w-[5px] h-[1px] bg-white -translate-y-1/2" />
                        </>
                    )}
                </div>
            </motion.div>

            {/* Trailing parallelogram — follows with spring lag */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999]"
                animate={{
                    x: mousePosition.x - 20,
                    y: mousePosition.y - 20,
                    scale: isClicking ? 0.4 : isHovering ? 1.3 : 1,
                    opacity: isHovering ? 0 : 0.4,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 180,
                    damping: 18,
                    mass: 0.5,
                }}
            >
                <div
                    className="w-10 h-10 border-2 border-[#e60012]"
                    style={{ transform: 'skewX(-12deg)' }}
                />
            </motion.div>

            {/* Hover arrow indicator — P5-style bouncing chevron */}
            {isHovering && (
                <motion.div
                    className="fixed pointer-events-none z-[10001]"
                    animate={{
                        x: mousePosition.x + 14,
                        y: mousePosition.y - 4,
                    }}
                    transition={{
                        type: 'spring',
                        stiffness: 800,
                        damping: 35,
                        mass: 0.1,
                    }}
                >
                    <motion.svg
                        width="12" height="12" viewBox="0 0 12 12" fill="none"
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        <path d="M2 1L10 6L2 11" stroke="#e60012" strokeWidth="2.5" strokeLinecap="square" />
                    </motion.svg>
                </motion.div>
            )}
        </>
    );
};

export default CustomCursor;
