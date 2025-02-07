// HeaderPressure.js
import React, { useEffect, useRef } from 'react';

const HeaderPressure = ({ text, className = '' }) => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const spansRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const cursorRef = useRef({ x: 0, y: 0 });

  const chars = text.split('');

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorRef.current.x = e.clientX;
      cursorRef.current.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    if (containerRef.current) {
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      mouseRef.current.x = left + width / 2;
      mouseRef.current.y = top + height / 2;
      cursorRef.current.x = mouseRef.current.x;
      cursorRef.current.y = mouseRef.current.y;
    }

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let rafId;
    
    const animate = () => {
      mouseRef.current.x += (cursorRef.current.x - mouseRef.current.x) / 15;
      mouseRef.current.y += (cursorRef.current.y - mouseRef.current.y) / 15;

      if (titleRef.current) {
        const titleRect = titleRef.current.getBoundingClientRect();
        const maxDist = titleRect.width / 2;

        spansRef.current.forEach((span) => {
          if (!span) return;

          const rect = span.getBoundingClientRect();
          const charCenter = {
            x: rect.x + rect.width / 2,
            y: rect.y + rect.height / 2,
          };

          const dx = mouseRef.current.x - charCenter.x;
          const dy = mouseRef.current.y - charCenter.y;
          const d = Math.sqrt(dx * dx + dy * dy);

          const minWeight = 400;
          const maxWeight = 700;
          const weight = Math.max(minWeight, 
            maxWeight - Math.min(maxWeight - minWeight, 
              (maxWeight - minWeight) * d / maxDist
            )
          );

          span.style.fontWeight = weight;
          span.style.textShadow = `0 0 ${Math.max(0, 5 - d/100)}px rgba(34, 1, 116, 0.4)`;
        });
      }

      rafId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(rafId);
  }, [chars.length]);

  return (
    <h1
      ref={containerRef}
      className={className}
      style={{
        position: 'relative',
        width: '100%',
      }}
    >
      <span
        ref={titleRef}
        className="text-pressure-title"
        style={{
          display: 'inline-block',
          width: '100%',
        }}
      >
        {chars.map((char, i) => (
          <span
            key={i}
            ref={(el) => (spansRef.current[i] = el)}
            style={{
              display: 'inline-block',
              transition: 'font-weight 0.3s ease, text-shadow 0.3s ease',
            }}
          >
            {char}
          </span>
        ))}
      </span>
    </h1>
  );
};

export default HeaderPressure;