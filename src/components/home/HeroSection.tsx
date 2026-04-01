import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { heroParticles } from './content';

export const HeroSection = () => {
  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const mangoY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const orchardY = useTransform(scrollYProgress, [0, 1], [0, 140]);

  return (
    <section
      id="top"
      ref={heroRef}
      className="hero-section relative min-h-screen overflow-hidden px-5 pb-16 pt-[6.5rem] md:px-8 md:pb-20 md:pt-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="hero-grain absolute inset-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgba(232,132,58,0.06)_0%,rgba(249,244,236,1)_60%)]" />
        <div className="hero-image-glow absolute right-[7%] top-[28%] h-[26rem] w-[26rem] rounded-full" />
        {heroParticles.map((particle, index) => (
          <span
            key={index}
            className="dust-particle"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>

      <div className="hero-layout relative mx-auto flex max-w-[1440px] flex-col gap-10 md:gap-14 lg:grid lg:grid-cols-[0.74fr_1.26fr] lg:items-center lg:gap-0">
        <div className="hero-copy-shell relative z-20 max-w-[34rem] lg:-mr-12 lg:pb-8 lg:pt-0">
          <span className="hero-watermark">MANGOES</span>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            className="mb-7"
          >
            <span className="hero-brand-rule" />
          </motion.div>

          <div className="space-y-1">
            {['A mango subscription', 'with the cadence', 'of a private estate.'].map((line, index) => (
              <div key={line} className="overflow-hidden">
                <motion.h1
                  initial={{ y: '115%' }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.92,
                    delay: 0.2 + index * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="hero-headline font-[var(--font-display)] text-[clamp(2.65rem,5vw,5rem)] font-normal leading-[0.95] italic tracking-[-0.03em] text-[#1c0f06]"
                >
                  {line}
                </motion.h1>
              </div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scaleX: 0.4 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 h-px w-14 origin-left bg-[rgba(201,168,76,0.7)]"
          />

          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.72 }}
            className="mt-8 max-w-[31rem] font-[var(--font-body)] text-[1.02rem] font-light leading-[1.86] text-[rgba(44,26,16,0.72)] md:text-[1.12rem]"
          >
            MangoBox brings orchard ownership, farm visits, and hand-harvested fruit into one
            sculpted annual ritual for families, collectors, and refined gifting.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#pricing"
              className="luxury-button luxury-button--solid text-center"
              data-cursor="hero-primary"
            >
              Explore Tree Stages
            </a>
            <a
              href="#varieties"
              className="luxury-button luxury-button--ghost text-center"
              data-cursor="hero-secondary"
            >
              See the Collection
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 1.05 }}
            className="mt-12 grid max-w-xl grid-cols-2 gap-x-10 gap-y-6 border-t border-[rgba(201,168,76,0.45)] pt-7 sm:grid-cols-3"
          >
            <div>
              <p className="font-[var(--font-display)] text-[2rem] italic text-[var(--ink)]">4</p>
              <p className="label-kicker">Rare varieties</p>
            </div>
            <div>
              <p className="font-[var(--font-display)] text-[2rem] italic text-[var(--ink)]">100km</p>
              <p className="label-kicker">From Hyderabad</p>
            </div>
            <div>
              <p className="font-[var(--font-display)] text-[2rem] italic text-[var(--ink)]">Private</p>
              <p className="label-kicker">Farm access</p>
            </div>
          </motion.div>
        </div>

        <div className="hero-visual relative lg:ml-4">
          <motion.div
            style={{ y: orchardY }}
            className="hero-orchard-card relative ml-auto overflow-hidden rounded-[30px] border border-[rgba(201,168,76,0.2)] bg-[rgba(242,235,224,0.42)] p-4 shadow-[0_22px_52px_rgba(26,18,8,0.1)]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,244,236,0.4),transparent_40%),linear-gradient(160deg,rgba(249,244,236,0.5),rgba(242,235,224,0.18))]" />
            <img
              src="/xd43BzjWC464h5FMBvdMm.png"
              alt="A mango harvest gathering under orchard trees."
              className="h-full w-full rounded-[22px] object-cover object-center"
            />
          </motion.div>

          <motion.div
            style={{ y: mangoY }}
            initial={{ opacity: 0, scale: 0.85, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: 1.5 }}
            transition={{ duration: 1.08, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
            className="hero-mango-card absolute overflow-hidden rounded-[16px] border border-[rgba(201,168,76,0.26)] bg-[rgba(249,244,236,0.96)] p-3 shadow-[0_24px_60px_rgba(26,18,8,0.18)] backdrop-blur-xl"
          >
            <div className="relative overflow-hidden rounded-[12px] bg-[radial-gradient(circle_at_top_left,rgba(249,244,236,0.72),transparent_44%),linear-gradient(180deg,rgba(249,244,236,0.22),rgba(249,244,236,0.04))]">
              <img
                src="/0_nt-kE7UJUZ-TB7cqrmc.png"
                alt="Signature MangoBox fruit portrait."
                className="aspect-[1.05] w-full object-cover object-center"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.86 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: 'spring', stiffness: 160, damping: 16, delay: 1.15 }}
            className="hero-organic-badge glass-badge absolute"
          >
            <span className="hero-badge-label">100% Organic Certified</span>
            <p className="hero-badge-copy mt-3 font-[var(--font-body)] text-[1.22rem] leading-[1.65] text-[var(--ivory)]">
              Orchard-managed with restraint, patience, and farmer-led discipline.
            </p>
          </motion.div>
        </div>
      </div>

      <a href="#how-it-works" className="scroll-indicator" aria-label="Scroll to How It Works">
        <span className="scroll-indicator__line" />
        <span className="scroll-indicator__dot" />
      </a>
    </section>
  );
};
