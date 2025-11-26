import React from 'react';

export const ThaiRoof: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 40" className={className} fill="currentColor">
    <path d="M50 0 L10 25 L0 40 L50 30 L100 40 L90 25 L50 0 Z" opacity="0.8" />
    <path d="M50 5 L15 28 L15 35 L50 25 L85 35 L85 28 L50 5 Z" opacity="0.6" />
  </svg>
);

export const ElephantIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 64 64" className={className} fill="currentColor">
     <path d="M48,24c-2.2,0-4,1.8-4,4v4c0,2.2,1.8,4,4,4s4-1.8,4-4v-4C52,25.8,50.2,24,48,24z"/>
     <path d="M42,20c0-6.6-5.4-12-12-12s-12,5.4-12,12c0,1.5,0.3,2.9,0.8,4.2L12,32v12h4v8h4v-8h8v8h4v-8h6l-4-12
        C39.6,30.6,42,25.6,42,20z M24,20c0-1.1,0.9-2,2-2s2,0.9,2,2s-0.9,2-2,2S24,21.1,24,20z"/>
  </svg>
);
