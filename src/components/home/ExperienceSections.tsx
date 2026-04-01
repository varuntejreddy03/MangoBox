import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { CountUpStat, SectionNumber, SplitHeading } from './shared';
import { processSteps, subscriptionStages, varieties } from './content';
import { handleTilt, resetTilt } from './utils';

export const HowItWorksSection = () => {
  const timelineRef = useRef<HTMLElement | null>(null);
  const timelineInView = useInView(timelineRef, { once: true, amount: 0.3 });

  return (
    <section
      id="how-it-works"
      ref={timelineRef}
      className="relative overflow-hidden bg-[var(--forest)] px-5 py-20 text-[var(--ivory)] md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="relative">
          <SectionNumber value="01" light side="right" />
          <p className="label-kicker label-kicker--light">The Ritual</p>
          <SplitHeading
            text="How MangoBox moves from grove to table."
            className="mt-5 max-w-3xl font-[var(--font-heading)] text-[clamp(2.6rem,5vw,4.6rem)] leading-[1.02]"
          />
          <p className="mt-6 max-w-2xl font-[var(--font-body)] text-[1.06rem] leading-relaxed text-[rgba(249,244,236,0.72)]">
            Every stage is paced like a luxury service, but grounded in agricultural reality:
            orchard care, quiet updates, precise harvest, then a visit back to the land itself.
          </p>
        </div>

        <div className="relative mt-20">
          <div className="absolute left-[0.45rem] top-[4.55rem] bottom-0 block w-px bg-[rgba(249,244,236,0.14)] lg:hidden">
            <motion.div
              className="w-full bg-[rgba(201,168,76,0.9)]"
              initial={{ height: 0 }}
              animate={timelineInView ? { height: '100%' } : { height: 0 }}
              transition={{ duration: 1.1, ease: 'easeInOut' }}
            />
          </div>
          <div className="relative">
            <svg
              aria-hidden="true"
              className="absolute left-0 top-[4.8rem] hidden w-full lg:block"
              viewBox="0 0 1360 220"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M40 116C132 42 212 42 296 116C380 190 474 190 560 116C646 42 734 42 820 116C906 190 1002 190 1088 116C1174 42 1250 42 1320 116"
                stroke="rgba(249,244,236,0.16)"
                strokeDasharray="8 12"
                strokeLinecap="round"
                strokeWidth="2"
              />
              <motion.path
                d="M40 116C132 42 212 42 296 116C380 190 474 190 560 116C646 42 734 42 820 116C906 190 1002 190 1088 116C1174 42 1250 42 1320 116"
                stroke="rgba(201,168,76,0.92)"
                strokeLinecap="round"
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                animate={timelineInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 1.8, ease: 'easeInOut' }}
              />
            </svg>

            <div className="relative flex flex-col gap-12 pl-10 lg:grid lg:grid-cols-[1.14fr_0.92fr_1.12fr_0.94fr_1fr] lg:gap-16 lg:pl-0">
              {processSteps.map((item, index) => {
                return (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 26 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.45 }}
                    transition={{ duration: 0.65, delay: index * 0.08 }}
                    className="relative min-h-[180px] lg:min-h-[240px]"
                  >
                    <span className="absolute left-0 top-0 font-[var(--font-display)] text-[4.8rem] italic leading-none text-[rgba(249,244,236,0.12)] lg:text-[6rem]">
                      {item.step}
                    </span>
                    <span className="absolute left-[-2.05rem] top-[4.8rem] h-3 w-3 rounded-full bg-[var(--saffron)] shadow-[0_0_0_7px_rgba(232,132,58,0.08)] lg:left-0 lg:top-[4.85rem]" />
                    <div className="pt-20">
                      <h3 className="font-[var(--font-display)] text-[2rem] italic font-medium leading-none text-[var(--ivory)] lg:text-[2.35rem]">
                        {item.title}
                      </h3>
                      <p className="mt-5 max-w-[14rem] font-[var(--font-body)] text-[1rem] font-light leading-[1.8] text-[rgba(255,255,255,0.65)]">
                        {item.detail}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const VarietiesSection = ({
  activeVarietyId,
  setActiveVarietyId,
}: {
  activeVarietyId: string;
  setActiveVarietyId: (value: string) => void;
}) => {
  const activeVariety = varieties.find((item) => item.id === activeVarietyId) ?? varieties[0];

  return (
    <section
      id="varieties"
      className="relative overflow-hidden bg-[linear-gradient(180deg,rgba(232,132,58,0.08),var(--ivory)_18%,var(--ivory)_74%,rgba(232,132,58,0.08))] px-5 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="relative">
          <SectionNumber value="02" />
          <p className="label-kicker">The Collection</p>
          <SplitHeading
            text="Four varieties, composed like an editorial spread."
            className="mt-5 max-w-4xl font-[var(--font-heading)] text-[clamp(2.7rem,5vw,4.7rem)] leading-[1.04] text-[var(--ink)]"
          />
          <p className="mt-6 max-w-2xl font-[var(--font-body)] text-[1.05rem] leading-relaxed text-[rgba(26,18,8,0.7)]">
            We do not present fruit like an inventory grid. Each variety has its own mood, service
            style, and place in the season, from perfumed breakfast mangoes to table-dominating host fruit.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.35fr_0.65fr]">
          <motion.article
            key={activeVariety.id}
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="variety-feature premium-card overflow-hidden rounded-[38px] p-5 md:p-6"
          >
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div className="relative overflow-hidden rounded-[28px]">
                <img
                  src={activeVariety.image}
                  alt={activeVariety.name}
                  className="aspect-[1.05] w-full object-cover"
                />
              </div>

              <div className="relative p-2 md:p-4">
                <p className="label-kicker">{activeVariety.label}</p>
                <h3 className="mt-4 font-[var(--font-heading)] text-[clamp(2.2rem,4vw,3.6rem)] leading-[0.98] text-[var(--ink)]">
                  {activeVariety.name}
                </h3>
                <p className="mt-5 font-[var(--font-body)] text-[1.04rem] leading-relaxed text-[rgba(26,18,8,0.72)]">
                  {activeVariety.tasting}
                </p>

                <div className="mt-8 grid gap-4 border-t border-[rgba(201,168,76,0.35)] pt-6 sm:grid-cols-2">
                  <div>
                    <p className="label-kicker">Season window</p>
                    <p className="mt-2 font-[var(--font-heading)] text-[1.32rem] text-[var(--ink)]">
                      {activeVariety.origin}
                    </p>
                  </div>
                  <div>
                    <p className="label-kicker">Table note</p>
                    <p className="mt-2 font-[var(--font-heading)] text-[1.32rem] text-[var(--ink)]">
                      {activeVariety.note}
                    </p>
                  </div>
                </div>

                <p className="mt-8 max-w-md font-[var(--font-body)] text-[0.98rem] leading-relaxed text-[rgba(26,18,8,0.64)]">
                  {activeVariety.detail} {activeVariety.harvest}
                </p>
              </div>
            </div>
          </motion.article>

          <div className="flex flex-col gap-4">
            {varieties.map((variety) => (
              <button
                key={variety.id}
                type="button"
                onClick={() => setActiveVarietyId(variety.id)}
                onMouseMove={handleTilt}
                onMouseLeave={resetTilt}
                className={`premium-card group rounded-[28px] p-4 text-left transition-all duration-300 ${
                  activeVariety.id === variety.id ? 'premium-card--active' : ''
                }`}
                data-cursor="variety"
              >
                <div className="grid grid-cols-[90px_1fr] items-center gap-4">
                  <div className="overflow-hidden rounded-[20px]">
                    <img
                      src={variety.image}
                      alt={variety.name}
                      className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <p className="label-kicker">{variety.label}</p>
                    <h4 className="mt-2 font-[var(--font-heading)] text-[1.5rem] leading-none text-[var(--ink)]">
                      {variety.name}
                    </h4>
                    <p className="mt-3 font-[var(--font-body)] text-[0.94rem] leading-relaxed text-[rgba(26,18,8,0.66)]">
                      {variety.detail}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-8 border-t border-[rgba(201,168,76,0.35)] pt-10 md:grid-cols-4">
          <CountUpStat value={1} label="Farmer-direct estate" />
          <CountUpStat value={100} suffix="km" label="From Hyderabad" />
          <CountUpStat value={60} suffix="kg" label="Peak yield" />
          <CountUpStat value={4} label="Curated varieties" />
        </div>
      </div>
    </section>
  );
};

export const PricingSection = ({
  activeStageId,
  setActiveStageId,
}: {
  activeStageId: string;
  setActiveStageId: (value: string) => void;
}) => {
  const activeStage =
    subscriptionStages.find((stage) => stage.id === activeStageId) ?? subscriptionStages[1];

  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-[var(--cream-card)] px-5 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="relative">
          <SectionNumber value="03" side="right" />
          <p className="label-kicker">Tree Stages</p>
          <SplitHeading
            text="Choose the maturity of your orchard membership."
            className="mt-5 max-w-[12ch] font-[var(--font-heading)] text-[clamp(2.2rem,9vw,4.7rem)] leading-[0.98] text-[var(--ink)] sm:max-w-4xl sm:leading-[1.04]"
          />
          <p className="mt-6 max-w-2xl font-[var(--font-body)] text-[1.05rem] leading-relaxed text-[rgba(26,18,8,0.72)]">
            The stage changes the yield, the intensity of the season, and the scale of the gift.
            The tree below grows with your selection, while pricing remains transparent by variety.
          </p>
        </div>

        <div className="stage-toggle-shell mt-10 inline-grid w-full rounded-[1.75rem] border border-[rgba(201,168,76,0.34)] bg-[rgba(249,244,236,0.78)] p-1 shadow-[0_14px_34px_rgba(26,18,8,0.05)] sm:mt-12 sm:w-auto sm:rounded-full">
          <div className="grid grid-cols-3 gap-1">
            {subscriptionStages.map((stage) => (
              <button
                key={stage.id}
                type="button"
                onClick={() => setActiveStageId(stage.id)}
                className="relative min-w-0 rounded-[1.35rem] px-3 py-3.5 text-center font-[var(--font-label)] text-[0.62rem] font-light uppercase tracking-[0.16em] text-[rgba(26,18,8,0.66)] sm:min-w-[110px] sm:rounded-full sm:px-4 sm:py-3 sm:text-[0.68rem] sm:tracking-[0.2em]"
                data-cursor="stage-toggle"
              >
                {activeStage.id === stage.id && (
                  <motion.span
                    layoutId="stage-pill"
                    className="absolute inset-0 rounded-full bg-[var(--ink)]"
                    transition={{ type: 'spring', stiffness: 280, damping: 28 }}
                  />
                )}
                <span className={`relative z-10 ${activeStage.id === stage.id ? 'text-[var(--ivory)]' : ''}`}>
                  {stage.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-8 md:mt-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-10">
          <div className="stage-scroller -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 pt-1 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 md:pb-0 md:pt-0 md:items-start">
            {subscriptionStages.map((stage, index) => (
              <button
                key={stage.id}
                type="button"
                onClick={() => setActiveStageId(stage.id)}
                className={`premium-card stage-tier-card w-[82vw] max-w-[19rem] shrink-0 snap-center rounded-[30px] p-5 text-left transition-transform duration-300 md:w-auto md:max-w-none md:min-h-[420px] md:rounded-[34px] md:p-7 ${
                  activeStage.id === stage.id ? 'premium-card--active stage-tier-card--active' : 'stage-tier-card--idle'
                } ${
                  index === 1 ? 'md:-translate-y-4' : index === 2 ? 'md:translate-y-5' : ''
                }`}
                data-cursor="stage-card"
              >
                <div className="flex h-full flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <p className="label-kicker">{stage.collection}</p>
                    <span className="stage-tier-card__index">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <span className="stage-tier-card__rule mt-5" />
                  <h3 className="mt-6 font-[var(--font-heading)] text-[1.65rem] leading-tight text-[var(--ink)] md:text-[1.95rem]">
                    {stage.name}
                  </h3>
                  <p className="mt-5 font-[var(--font-display)] text-[2.7rem] leading-none italic text-[var(--ink)] md:text-[3.35rem]">
                    {stage.price}
                  </p>
                  <p className="mt-2 font-[var(--font-label)] text-[0.68rem] font-light uppercase tracking-[0.2em] text-[rgba(26,18,8,0.48)]">
                    From per season
                  </p>
                  <p className="mt-8 font-[var(--font-body)] text-[0.96rem] leading-[1.8] text-[rgba(26,18,8,0.68)] md:mt-10 md:text-[1rem]">
                    {stage.detail}
                  </p>
                  <div className="mt-8 border-t border-[rgba(201,168,76,0.34)] pt-5 md:mt-auto md:pt-6">
                    <p className="label-kicker">Expected yield</p>
                    <p className="mt-3 font-[var(--font-heading)] text-[1.7rem] text-[var(--ink)]">{stage.yield}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="stage-detail-card premium-card premium-card--active rounded-[32px] p-5 md:rounded-[38px] md:p-8 lg:sticky lg:top-28">
            <p className="label-kicker">{activeStage.highlight}</p>
            <div className="mt-6 grid gap-6 md:gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
              <div className="relative min-h-[260px] rounded-[24px] bg-[radial-gradient(circle_at_top,rgba(232,132,58,0.1),transparent_60%),linear-gradient(180deg,rgba(249,244,236,0.92),rgba(242,235,224,0.7))] p-4 md:min-h-[320px] md:rounded-[28px] md:p-6">
                <motion.svg
                  viewBox="0 0 280 300"
                  className="mx-auto h-full w-full"
                  animate={{ scale: activeStage.treeScale }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  <path d="M136 172C136 144 140 111 152 80" stroke="#6A4322" strokeLinecap="round" strokeWidth="12" />
                  <path d="M144 176C147 152 160 130 180 112" stroke="#6A4322" strokeLinecap="round" strokeWidth="8" />
                  <path d="M140 178C136 152 122 128 98 108" stroke="#6A4322" strokeLinecap="round" strokeWidth="8" />
                  <motion.g
                    animate={{ scale: 0.88 + activeStage.treeScale * 0.08 }}
                    style={{ transformOrigin: '140px 112px' }}
                    transition={{ duration: 0.8 }}
                  >
                    <circle cx="140" cy="78" r="52" fill="#3A5E3D" />
                    <circle cx="103" cy="106" r="44" fill="#436E47" />
                    <circle cx="180" cy="110" r="42" fill="#335636" />
                    <circle cx="136" cy="123" r="50" fill="#4B794E" />
                  </motion.g>

                  {[
                    { cx: 105, cy: 84 },
                    { cx: 145, cy: 58 },
                    { cx: 178, cy: 92 },
                    { cx: 126, cy: 124 },
                    { cx: 166, cy: 126 },
                    { cx: 94, cy: 118 },
                    { cx: 154, cy: 92 },
                    { cx: 189, cy: 124 },
                    { cx: 118, cy: 68 },
                  ]
                    .slice(0, activeStage.fruitCount)
                    .map((fruit, index) => (
                      <motion.circle
                        key={`${activeStage.id}-${index}`}
                        cx={fruit.cx}
                        cy={fruit.cy}
                        r="8"
                        fill="#E8843A"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: index * 0.06, duration: 0.35 }}
                      />
                    ))}

                  <path d="M84 210C115 194 166 192 198 210" stroke="#C9A84C" strokeLinecap="round" strokeWidth="2" />
                  <path d="M96 214H188" stroke="#8C8070" strokeLinecap="round" strokeWidth="3" />
                </motion.svg>
              </div>

              <div>
                <h3 className="font-[var(--font-heading)] text-[1.8rem] leading-tight text-[var(--ink)] md:text-[2rem]">
                  {activeStage.name} tree membership
                </h3>
                <p className="mt-4 font-[var(--font-body)] text-[1rem] leading-relaxed text-[rgba(26,18,8,0.72)]">
                  {activeStage.detail}
                </p>

                <div className="mt-8 space-y-3">
                  {activeStage.prices.map((entry) => (
                    <div
                      key={`${activeStage.id}-${entry.variety}`}
                      className="stage-price-row flex items-start justify-between gap-4 border-b border-[rgba(201,168,76,0.18)] pb-3"
                    >
                      <span className="font-[var(--font-heading)] text-[1.2rem] text-[var(--ink)]">
                        {entry.variety}
                      </span>
                      <span className="font-[var(--font-body)] text-[0.96rem] text-[rgba(26,18,8,0.74)]">
                        {entry.range}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#contact"
                    className="luxury-button luxury-button--solid text-center"
                    data-cursor="pricing-primary"
                  >
                    Request This Tree
                  </a>
                  <a
                    href="#gifting"
                    className="luxury-button luxury-button--ghost text-center"
                    data-cursor="pricing-secondary"
                  >
                    Explore Gifting
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
