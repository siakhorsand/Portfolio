// index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import HeaderPressure from './HeaderPressure';

// Define the headers to be rendered
const headerElements = [
  {
    id: 'nameHeader',
    text: 'Sia Khorsand',
    className: 'text-4xl font-title text-primary-950'
  },
  {
    id: 'aboutMeHeader',
    text: 'About Me',
    className: 'text-2xl font-title text-primary-950'
  },
  {
    id: 'projectsHeader',
    text: 'Projects',
    className: 'text-2xl font-title text-primary-950'
  },
  {
    id: 'skillsHeader',
    text: 'Skills',
    className: 'text-2xl font-title text-primary-950'
  },
  {
    id: 'experiencesHeader',
    text: 'Experiences',
    className: 'text-2xl font-title text-primary-950'
  }
];

// Render each header
headerElements.forEach(({ id, text, className }) => {
  const container = document.getElementById(id);
  if (container) {
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <HeaderPressure text={text} className={className} />
      </React.StrictMode>
    );
  }
});

// index.js
window.addEventListener('error', (event) => {
  console.error('Script error:', event.error);
});

try {
  headerElements.forEach(({ id, text, className }) => {
    const container = document.getElementById(id);
    if (container) {
      const root = createRoot(container);
      root.render(
        <React.StrictMode>
          <HeaderPressure text={text} className={className} />
        </React.StrictMode>
      );
    } else {
      console.error(`Container with id "${id}" not found`);
    }
  });
} catch (error) {
  console.error('Error rendering headers:', error);
}