import { useEffect } from 'react';
import Lenis from 'lenis';

export const SmoothScroll = () => {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }

    const lenis = new Lenis({
      autoRaf: true,
      anchors: { offset: -96 },
      duration: 1.25,
      lerp: 0.08,
      smoothWheel: true,
      touchMultiplier: 1.1,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
};
