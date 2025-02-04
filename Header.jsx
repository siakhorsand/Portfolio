import React, { useEffect, useRef } from 'react';

const CleanHeader = () => {
  const containerRef = useRef(null);
  const rows = 8;
  const columns = 24; // More columns for better distribution
  const total = rows * columns;
  const nameWidth = '300px'; // Width of the space for the name

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const items = container.querySelectorAll('.magnetic-line');

    const onPointerMove = (pointer) => {
      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const centerX = rect.x + rect.width / 2;
        const centerY = rect.y + rect.height / 2;
        
        // Calculate distance from pointer to line
        const dx = pointer.x - centerX;
        const dy = pointer.y - centerY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Only affect lines within a certain radius
        const maxDistance = 150;
        if (distance < maxDistance) {
          const b = pointer.x - centerX;
          const a = pointer.y - centerY;
          const c = Math.sqrt(a * a + b * b) || 1;
          const r = (Math.acos(b / c) * 180) / Math.PI * (pointer.y > centerY ? 1 : -1);
          const intensity = 1 - (distance / maxDistance); // Lines closer to pointer rotate more
          item.style.setProperty('--rotate', `${r * intensity}deg`);
        } else {
          item.style.setProperty('--rotate', '0deg');
        }
      });
    };

    window.addEventListener('pointermove', onPointerMove);
    return () => window.removeEventListener('pointermove', onPointerMove);
  }, []);

  return (
    <header className="relative bg-neutral-200 h-48 overflow-hidden">
      {/* Lines Container */}
      <div 
        ref={containerRef}
        className="absolute inset-0 w-full h-full"
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
          gap: '4px'
        }}
      >
        {Array.from({ length: total }).map((_, i) => {
          const column = i % columns;
          const columnPosition = (column / columns) * 100;
          const nameSpace = 40; // percentage of width reserved for name
          const nameStart = (100 - nameSpace) / 2;
          const nameEnd = nameStart + nameSpace;
          
          // Skip lines in the center area where the name will be
          if (columnPosition > nameStart && columnPosition < nameEnd) {
            return <span key={i} className="invisible" />;
          }

          return (
            <span
              key={i}
              className="magnetic-line"
              style={{
                display: 'block',
                width: '2px',
                height: '20px',
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                margin: 'auto',
                transformOrigin: 'center',
                transform: 'rotate(var(--rotate, 0deg))',
                transition: 'transform 0.3s ease'
              }}
            />
          );
        })}
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center">
        <h1 className="text-4xl font-title text-primary-950 bg-neutral-200 px-8 py-2 rounded-lg">
          Sia Khorsand
        </h1>
        <p className="mt-2 text-neutral-700 bg-neutral-200 px-4 py-1 rounded-md">
          Showcasing my projects, experiences, and journey in tech and computation.
        </p>
      </div>
    </header>
  );
};

export default CleanHeader;