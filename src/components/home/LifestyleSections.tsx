import type { ChangeEvent, FormEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Check, ChevronLeft, ChevronRight, MapPin, TreePine, Users } from 'lucide-react';
import { AnimatedCheckItem, FloatingField, SectionNumber, SplitHeading } from './shared';
import { testimonials } from './content';

export const GiftingSection = () => {
  return (
    <section
      id="gifting"
      className="relative overflow-hidden bg-[var(--forest)] px-5 py-20 text-[var(--ivory)] md:px-8 md:py-28"
    >
      <div className="absolute inset-0 opacity-20">
        <img
          src="/xd43BzjWC464h5FMBvdMm.png"
          alt=""
          className="h-full w-full object-cover mix-blend-luminosity"
        />
      </div>
      <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="relative z-10">
          <SectionNumber value="04" light />
          <p className="label-kicker label-kicker--light">Gifting</p>
          <SplitHeading
            text="Gift a season that arrives with presence."
            className="mt-5 max-w-3xl font-[var(--font-heading)] text-[clamp(2.8rem,5vw,4.8rem)] leading-[1.02]"
          />
          <p className="mt-6 max-w-xl font-[var(--font-body)] text-[1.08rem] leading-relaxed text-[rgba(249,244,236,0.74)]">
            For anniversaries, children, clients, or wedding families, MangoBox gifting replaces
            disposable luxury with a living orchard story and a season of extraordinary fruit.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="luxury-button luxury-button--dark text-center"
              data-cursor="gift-primary"
            >
              Curate a Gift
            </a>
            <a
              href="https://wa.me/919876543210"
              className="luxury-button luxury-button--outline-light text-center"
              data-cursor="gift-secondary"
            >
              Speak to Concierge
            </a>
          </div>
        </div>

        <div className="relative z-10 grid gap-6 md:grid-cols-[0.72fr_1.28fr]">
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4.8, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
            className="gift-illustration mx-auto"
          >
            <div className="gift-illustration__lid" />
            <div className="gift-illustration__box" />
            <div className="gift-illustration__ribbon gift-illustration__ribbon--vertical" />
            <div className="gift-illustration__ribbon gift-illustration__ribbon--horizontal" />
            <div className="gift-illustration__tag">MB</div>
          </motion.div>

          <div className="rounded-[34px] border border-[rgba(201,168,76,0.22)] bg-[rgba(249,244,236,0.08)] p-5 backdrop-blur-xl">
            <img
              src="/-jMiBV1mC7K_gzDUG6Enr.png"
              alt="A MangoBox delivery brought into a family home."
              className="h-[320px] w-full rounded-[24px] object-cover"
            />
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div>
                <p className="label-kicker label-kicker--light !tracking-[0.26em]">For children</p>
                <p className="mt-2 font-[var(--font-heading)] text-[1.3rem]">A tree they can return to each summer.</p>
              </div>
              <div>
                <p className="label-kicker label-kicker--light !tracking-[0.26em]">For clients</p>
                <p className="mt-2 font-[var(--font-heading)] text-[1.3rem]">A gift box that feels considered, not transactional.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const FarmVisitsSection = () => {
  return (
    <section
      id="visits"
      className="relative overflow-hidden bg-[var(--ivory)] px-5 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div className="relative">
          <SectionNumber value="05" />
          <p className="label-kicker">Farm Visits</p>
          <SplitHeading
            text="A mango orchard close enough for lunch, far enough for exhale."
            className="mt-5 max-w-3xl font-[var(--font-heading)] text-[clamp(2.7rem,5vw,4.7rem)] leading-[1.03] text-[var(--ink)]"
          />
          <p className="mt-6 max-w-xl font-[var(--font-body)] text-[1.05rem] leading-relaxed text-[rgba(26,18,8,0.72)]">
            Ninety minutes from the city, the farm opens for orchard walks, family lunches, photo
            moments, and private afternoons under full mango shade.
          </p>

          <ul className="mt-10 space-y-5">
            {[
              'Guided orchard walk with the growers who manage your tree.',
              'Lunch tables styled under the canopy for families or intimate gatherings.',
              'Warm-season fruit tastings, children-friendly zones, and golden-hour portraits.',
              'Optional private bookings for founders, wedding families, and hospitality hosts.',
            ].map((item, index) => (
              <AnimatedCheckItem key={item} index={index}>
                {item}
              </AnimatedCheckItem>
            ))}
          </ul>
        </div>

        <div className="relative grid min-h-[580px] grid-cols-12 grid-rows-6 gap-3 md:min-h-[720px]">
          <div className="mosaic-frame col-span-7 row-span-3 md:-mr-3">
            <img
              src="/xd43BzjWC464h5FMBvdMm.png"
              alt="Families dining in a decorated mango orchard."
              className="h-full w-full object-cover"
            />
          </div>
          <div className="mosaic-frame col-span-5 row-span-4 md:mt-8">
            <img
              src="/-jMiBV1mC7K_gzDUG6Enr.png"
              alt="A family receiving a handpicked mango delivery."
              className="h-full w-full object-cover"
            />
          </div>
          <div className="mosaic-frame col-span-6 row-span-3 md:-mt-4">
            <img src="/0AP_k5gXHv3eV3Pn_sEiX.png" alt="Freshly cut premium mangoes." className="h-full w-full object-cover" />
          </div>
          <div className="mosaic-frame col-span-6 row-span-2 md:-ml-3">
            <img src="/DEcg8X30a77-ZjGiU8Qk5.png" alt="Close-up of MangoBox mangoes." className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export const TestimonialsSection = ({
  testimonialIndex,
  setTestimonialIndex,
}: {
  testimonialIndex: number;
  setTestimonialIndex: (value: number | ((current: number) => number)) => void;
}) => {
  return (
    <section className="relative overflow-hidden bg-[rgba(232,132,58,0.06)] px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[1240px]">
        <div className="relative text-center">
          <SectionNumber value="06" side="right" />
          <p className="label-kicker">Testimonials</p>
          <SplitHeading
            text="What the season feels like once it arrives."
            className="mx-auto mt-5 max-w-3xl justify-center font-[var(--font-heading)] text-[clamp(2.7rem,5vw,4.6rem)] leading-[1.04] text-[var(--ink)]"
          />
        </div>

        <div className="relative mt-16 rounded-[40px] border border-[rgba(201,168,76,0.26)] bg-[rgba(249,244,236,0.82)] px-6 py-10 shadow-[0_26px_80px_rgba(26,18,8,0.08)] backdrop-blur-xl md:px-12 md:py-14">
          <span className="pointer-events-none absolute left-4 top-0 font-[var(--font-display)] text-[11rem] leading-none text-[rgba(232,132,58,0.1)] md:left-8 md:text-[13rem]">
            &quot;
          </span>

          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[testimonialIndex].name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              className="relative z-10 mx-auto max-w-3xl text-center"
            >
              <div className="mx-auto flex w-fit items-center gap-1 rounded-full border border-[rgba(201,168,76,0.36)] bg-[rgba(249,244,236,0.72)] px-4 py-2">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span key={index} className="text-[var(--saffron)]">
                    ★
                  </span>
                ))}
              </div>

              <p className="mt-8 font-[var(--font-display)] text-[clamp(2rem,4vw,3.15rem)] leading-[1.14] italic text-[var(--ink)]">
                {testimonials[testimonialIndex].quote}
              </p>

              <div className="mt-10 flex flex-col items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[rgba(201,168,76,0.74)] bg-[rgba(249,244,236,0.88)] font-[var(--font-label)] text-[0.9rem] uppercase tracking-[0.24em] text-[var(--ink)] shadow-[inset_0_0_0_3px_rgba(201,168,76,0.18)]">
                  {testimonials[testimonialIndex].monogram}
                </div>
                <div>
                  <p className="font-[var(--font-heading)] text-[1.3rem] text-[var(--ink)]">
                    {testimonials[testimonialIndex].name}
                  </p>
                  <p className="mt-1 font-[var(--font-label)] text-[0.68rem] font-light uppercase tracking-[0.2em] text-[rgba(26,18,8,0.48)]">
                    {testimonials[testimonialIndex].title}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex justify-center gap-3">
            <button
              type="button"
              onClick={() =>
                setTestimonialIndex((current) => (current - 1 + testimonials.length) % testimonials.length)
              }
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(201,168,76,0.34)] bg-[rgba(249,244,236,0.82)] text-[var(--ink)] transition-colors duration-300 hover:border-[rgba(232,132,58,0.55)]"
              aria-label="Previous testimonial"
              data-cursor="testimonial-prev"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => setTestimonialIndex((current) => (current + 1) % testimonials.length)}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(201,168,76,0.34)] bg-[rgba(249,244,236,0.82)] text-[var(--ink)] transition-colors duration-300 hover:border-[rgba(232,132,58,0.55)]"
              aria-label="Next testimonial"
              data-cursor="testimonial-next"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ContactSection = ({
  formValues,
  messageSent,
  onChange,
  onSubmit,
}: {
  formValues: {
    name: string;
    email: string;
    phone: string;
    message: string;
  };
  messageSent: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}) => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[var(--ivory)] px-5 pb-24 pt-8 md:px-8 md:pb-32"
    >
      <div className="mx-auto grid max-w-[1380px] gap-12 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="relative">
          <SectionNumber value="07" />
          <p className="label-kicker">Contact</p>
          <SplitHeading
            text="Compose a private inquiry."
            className="mt-5 max-w-2xl font-[var(--font-heading)] text-[clamp(2.7rem,5vw,4.6rem)] leading-[1.04] text-[var(--ink)]"
          />
          <p className="mt-6 max-w-lg font-[var(--font-body)] text-[1.05rem] leading-relaxed text-[rgba(26,18,8,0.72)]">
            Tell us whether you want a household subscription, a gifting suite, or a private farm
            experience. We will respond with the right stage, variety, and seasonal timing.
          </p>

          <div className="mt-10 space-y-5 rounded-[30px] border border-[rgba(201,168,76,0.26)] bg-[rgba(242,235,224,0.58)] p-6">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(201,168,76,0.34)] bg-[rgba(249,244,236,0.72)] text-[var(--saffron)]">
                <MapPin size={18} />
              </span>
              <div>
                <p className="label-kicker">Estate</p>
                <p className="mt-2 font-[var(--font-body)] text-[1rem] leading-relaxed text-[rgba(26,18,8,0.76)]">
                  Chevella Orchard Belt, Hyderabad, Telangana 500075
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(201,168,76,0.34)] bg-[rgba(249,244,236,0.72)] text-[var(--saffron)]">
                <Users size={18} />
              </span>
              <div>
                <p className="label-kicker">Best for</p>
                <p className="mt-2 font-[var(--font-body)] text-[1rem] leading-relaxed text-[rgba(26,18,8,0.76)]">
                  Family subscriptions, children gifting, founder hospitality, and seasonal hosting.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(201,168,76,0.34)] bg-[rgba(249,244,236,0.72)] text-[var(--saffron)]">
                <TreePine size={18} />
              </span>
              <div>
                <p className="label-kicker">Season</p>
                <p className="mt-2 font-[var(--font-body)] text-[1rem] leading-relaxed text-[rgba(26,18,8,0.76)]">
                  Reservations now open for the coming Indian summer and early gifting consultations.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-shell rounded-[38px] p-6 md:p-8">
          <form onSubmit={onSubmit} className="grid gap-8">
            <div className="grid gap-8 md:grid-cols-2">
              <FloatingField name="name" label="Full Name" value={formValues.name} onChange={onChange} />
              <FloatingField
                name="email"
                type="email"
                label="Email Address"
                value={formValues.email}
                onChange={onChange}
              />
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <FloatingField
                name="phone"
                type="tel"
                label="Phone Number"
                value={formValues.phone}
                onChange={onChange}
              />
              <div className="border-b border-[rgba(201,168,76,0.24)] bg-transparent px-0 py-1">
                <p className="label-kicker">What happens next</p>
                <p className="mt-3 font-[var(--font-body)] text-[0.98rem] leading-relaxed text-[rgba(26,18,8,0.72)]">
                  We reply with the right stage, harvest timing, and whether a gifting or visit option
                  should be woven into your subscription.
                </p>
              </div>
            </div>

            <FloatingField
              name="message"
              label="Tell us what you want to curate"
              value={formValues.message}
              onChange={onChange}
              multiline
            />

            <button type="submit" className="contact-submit" data-cursor="contact-submit">
              <span>Send Message</span>
              <ArrowRight size={18} />
            </button>

            <AnimatePresence>
              {messageSent && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ duration: 0.35 }}
                  className="flex items-center gap-3 rounded-[22px] border border-[rgba(201,168,76,0.34)] bg-[rgba(249,244,236,0.66)] px-4 py-3"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[rgba(232,132,58,0.12)] text-[var(--saffron)]">
                    <Check size={16} />
                  </span>
                  <span className="font-[var(--font-body)] text-[0.98rem] text-[rgba(26,18,8,0.76)]">
                    Your note is staged. A MangoBox concierge would typically follow up with a curated reply next.
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>
      </div>
    </section>
  );
};
