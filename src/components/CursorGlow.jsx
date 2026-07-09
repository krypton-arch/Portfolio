import { useEffect, useRef, useCallback } from 'react';

const CursorParticles = () => {
    const lastTime = useRef(0);

    const spawnParticle = useCallback((e) => {
        const now = Date.now();
        // Throttle to every 30ms for performance
        if (now - lastTime.current < 30) return;
        lastTime.current = now;

        const particle = document.createElement('div');
        particle.classList.add('cursor-particle');

        const size = Math.random() * 10 + 5;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = e.clientX + 'px';
        particle.style.top = e.clientY + 'px';

        document.body.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 500);
    }, []);

    useEffect(() => {
        document.addEventListener('mousemove', spawnParticle);
        return () => document.removeEventListener('mousemove', spawnParticle);
    }, [spawnParticle]);

    return null;
};

export default CursorParticles;
