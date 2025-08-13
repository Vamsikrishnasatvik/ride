import React from 'react';

export function RoamReadyLogo({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M12 2a10 10 0 0 0-10 10c0 6 8 12 10 12s10-6 10-12A10 10 0 0 0 12 2Z"/>
      <path d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
    </svg>
  );
}
