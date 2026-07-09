import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const CallingCardText = ({ text, className = "" }) => {
    // Generate static random values for each letter to prevent hydration mismatch or re-renders
    const letters = useMemo(() => {
        return text.split('').map((char, i) => {
            if (char === ' ') return { char, isSpace: true };
            
            const isRed = Math.random() > 0.5;
            const rotate = Math.floor(Math.random() * 15) - 7; // -7 to +7 degrees
            const scale = 0.9 + Math.random() * 0.3; // 0.9 to 1.2
            
            let bgClass, textClass;
            const randTheme = Math.random();
            if (randTheme < 0.33) {
                bgClass = 'bg-primary';
                textClass = 'text-background';
            } else if (randTheme < 0.66) {
                bgClass = 'bg-on-background';
                textClass = 'text-primary';
            } else {
                bgClass = 'bg-surface-container-highest';
                textClass = 'text-primary';
            }

            return {
                char,
                isSpace: false,
                rotate,
                scale,
                bgClass,
                textClass
            };
        });
    }, [text]);

    return (
        <span className={`inline-flex flex-wrap items-center gap-1 p5-text-energy ${className}`}>
            {letters.map((item, index) => {
                if (item.isSpace) {
                    return <span key={index} className="w-4"></span>;
                }
                
                return (
                    <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0, rotate: -20 }}
                        whileInView={{ opacity: 1, scale: item.scale, rotate: item.rotate }}
                        viewport={{ once: true }}
                        transition={{ 
                            type: 'spring', 
                            stiffness: 400, 
                            damping: 15,
                            delay: index * 0.05 // Stagger effect
                        }}
                        className={`inline-block px-1 border-2 border-on-background uppercase ${item.bgClass} ${item.textClass} p5-shard-2`}
                        style={{
                            WebkitTextStroke: item.textClass === 'text-background' ? '1px #131313' : '2px #131313',
                            textShadow: '2px 2px 0px #131313'
                        }}
                    >
                        {item.char}
                    </motion.span>
                );
            })}
        </span>
    );
};

export default CallingCardText;
