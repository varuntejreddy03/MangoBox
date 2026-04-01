import type { ChangeEvent, ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

export type ContactField = 'name' | 'email' | 'phone' | 'message';

export const Divider = ({ from, to }: { from: string; to: string }) => (
  <div
    aria-hidden="true"
    className="h-16 md:h-24"
    style={{
      background: `linear-gradient(173deg, ${from} 0%, ${from} 49.5%, ${to} 50.5%, ${to} 100%)`,
    }}
  />
);

export const SectionNumber = ({
  value,
  side = 'left',
  light = false,
}: {
  value: string;
  side?: 'left' | 'right';
  light?: boolean;
}) => (
  <span
    className={`section-number ${light ? 'section-number--light' : ''} ${
      side === 'right' ? 'right-0 translate-x-[22%]' : 'left-0 -translate-x-[24%]'
    }`}
  >
    {value}
  </span>
);

export const SplitHeading = ({ text, className }: { text: string; className?: string }) => {
  const ref = useRef<HTMLHeadingElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.45 });

  return (
    <h2 ref={ref} className={className}>
      {text.split(' ').map((word, index) => (
        <span key={`${word}-${index}`} className="split-word">
          <motion.span
            className="split-word-inner"
            initial={{ y: '110%' }}
            animate={isInView ? { y: 0 } : { y: '110%' }}
            transition={{
              duration: 0.82,
              delay: index * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </h2>
  );
};

export const CountUpStat = ({
  value,
  suffix = '',
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.65 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) {
      return undefined;
    }

    let frame = 0;
    const start = performance.now();
    const duration = 1400;

    const tick = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(value * eased));

      if (progress < 1) {
        frame = window.requestAnimationFrame(tick);
      }
    };

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [isInView, value]);

  return (
    <div ref={ref} className="relative">
      <div className="font-[var(--font-display)] text-[clamp(3rem,8vw,5.8rem)] leading-none italic text-[var(--ink)]">
        {displayValue}
        <span className="ml-1 text-[0.38em] not-italic text-[var(--saffron)]">{suffix}</span>
      </div>
      <p className="mt-3 font-[var(--font-label)] text-[0.7rem] uppercase tracking-[0.36em] text-[rgba(26,18,8,0.56)]">
        {label}
      </p>
    </div>
  );
};

export const AnimatedCheckItem = ({ children, index }: { children: ReactNode; index: number }) => {
  const ref = useRef<HTMLLIElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.8 });

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, x: -16 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="flex items-start gap-4"
    >
      <span className="mt-1 flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(201,168,76,0.45)] bg-[rgba(232,132,58,0.08)]">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          <motion.path
            d="M3 9.5L7 13L15 5"
            stroke="#E8843A"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.6"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 0.45, delay: index * 0.08 + 0.1 }}
          />
        </svg>
      </span>
      <span className="font-[var(--font-body)] text-[1rem] leading-relaxed text-[rgba(26,18,8,0.76)]">
        {children}
      </span>
    </motion.li>
  );
};

export const FloatingField = ({
  name,
  label,
  type = 'text',
  value,
  onChange,
  multiline = false,
}: {
  name: ContactField;
  label: string;
  type?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  multiline?: boolean;
}) => (
  <div className="editorial-field">
    {multiline ? (
      <textarea
        id={name}
        name={name}
        rows={4}
        value={value}
        onChange={onChange}
        placeholder=" "
        className="editorial-input editorial-input--textarea"
        required
      />
    ) : (
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder=" "
        className="editorial-input"
        required
      />
    )}
    <label htmlFor={name} className="editorial-label">
      {label}
    </label>
  </div>
);
