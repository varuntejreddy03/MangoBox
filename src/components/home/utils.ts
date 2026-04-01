import type { MouseEvent } from 'react';

export const resetTilt = (event: MouseEvent<HTMLElement>) => {
  event.currentTarget.style.transform = 'perspective(1400px) rotateX(0deg) rotateY(0deg) translateY(0px)';
};

export const handleTilt = (event: MouseEvent<HTMLElement>) => {
  if (window.innerWidth < 1024) {
    return;
  }

  const target = event.currentTarget;
  const rect = target.getBoundingClientRect();
  const x = (event.clientX - rect.left) / rect.width;
  const y = (event.clientY - rect.top) / rect.height;
  const rotateX = (0.5 - y) * 10;
  const rotateY = (x - 0.5) * 12;

  target.style.transform = `perspective(1400px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
};
