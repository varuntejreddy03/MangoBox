import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const stats = [
  { value: 1, label: 'Organic Certified', suffix: '' },
  { value: 100, label: 'Farm Proximity', suffix: ' km' },
  { value: 60, label: 'Max Yield', suffix: ' kg' },
  { value: 4, label: 'Premium Varieties', suffix: '' },
];

const Counter = ({ value, label, suffix }: { value: number, label: string, suffix: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-50">
      <div className="text-5xl md:text-6xl font-bold font-heading text-orange mb-3">
        {count}{suffix}
      </div>
      <div className="text-sm font-semibold text-text-muted uppercase tracking-wider">{label}</div>
    </div>
  );
};

export const WhyMangoBox = () => {
  return (
    <section className="py-24 bg-background border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-4">Why MangoBox?</h2>
          <p className="text-lg text-text-muted">Transparency, quality, and an experience like no other.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <Counter key={i} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};