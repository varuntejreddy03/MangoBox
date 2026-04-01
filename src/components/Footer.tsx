import { Camera, Mail, MapPin, MessageCircle } from 'lucide-react';

const footerLinks = [
  { label: 'Ritual', href: '/#how-it-works' },
  { label: 'Varieties', href: '/#varieties' },
  { label: 'Stages', href: '/#pricing' },
  { label: 'Visits', href: '/#visits' },
  { label: 'Contact', href: '/#contact' },
];

const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com', icon: Camera },
  { label: 'WhatsApp', href: 'https://wa.me/919876543210', icon: MessageCircle },
  { label: 'Email', href: 'mailto:hello@mangobox.in', icon: Mail },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[var(--ink)] px-5 pb-10 pt-20 text-[var(--ivory)] md:px-8 md:pt-24">
      <div className="mx-auto max-w-[1380px]">
        <div className="flex flex-col items-center text-center">
          <p className="font-[var(--font-label)] text-[0.72rem] uppercase tracking-[0.44em] text-[rgba(249,244,236,0.52)]">
            MangoBox
          </p>
          <h2 className="mt-4 font-[var(--font-display)] text-[clamp(3.6rem,9vw,7.2rem)] leading-[0.9] italic">
            MangoBox
          </h2>
          <p className="mt-5 max-w-2xl font-[var(--font-body)] text-[1.05rem] leading-relaxed text-[rgba(249,244,236,0.72)]">
            A luxury mango subscription shaped by Indian summer, crafted for collectors of taste, ritual,
            and long afternoons under orchard shade.
          </p>
        </div>

        <div className="mt-10 h-px w-full bg-[linear-gradient(90deg,transparent,rgba(201,168,76,0.7),transparent)]" />

        <div className="grid gap-12 py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <p className="font-[var(--font-label)] text-[0.7rem] uppercase tracking-[0.38em] text-[rgba(249,244,236,0.48)]">
              Estate Notes
            </p>
            <p className="mt-4 max-w-lg font-[var(--font-body)] text-[1rem] leading-relaxed text-[rgba(249,244,236,0.72)]">
              Seasonal drops, gifting consultations, and private farm lunches are available by request for
              families, founders, and hospitality hosts in Hyderabad.
            </p>
          </div>

          <div>
            <p className="font-[var(--font-label)] text-[0.7rem] uppercase tracking-[0.38em] text-[rgba(249,244,236,0.48)]">
              Navigate
            </p>
            <div className="mt-4 flex flex-col gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-[var(--font-heading)] text-[1.2rem] text-[rgba(249,244,236,0.78)] transition-colors duration-300 hover:text-[var(--ivory)]"
                  data-cursor="footer-link"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-[var(--font-label)] text-[0.7rem] uppercase tracking-[0.38em] text-[rgba(249,244,236,0.48)]">
              Contact
            </p>
            <div className="mt-4 space-y-4 font-[var(--font-body)] text-[rgba(249,244,236,0.74)]">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 text-[var(--gold-line)]" />
                <span>Chevella Orchard Belt, Hyderabad, Telangana 500075</span>
              </div>
              <a
                href="mailto:hello@mangobox.in"
                className="block transition-colors duration-300 hover:text-[var(--ivory)]"
                data-cursor="email"
              >
                hello@mangobox.in
              </a>
              <a
                href="tel:+919876543210"
                className="block transition-colors duration-300 hover:text-[var(--ivory)]"
                data-cursor="phone"
              >
                +91 98765 43210
              </a>
            </div>

            <div className="mt-7 flex items-center gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                    aria-label={link.label}
                    className="social-ring"
                    data-cursor="social"
                  >
                    <Icon size={17} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-[rgba(201,168,76,0.18)] pt-6 text-center font-[var(--font-label)] text-[0.68rem] uppercase tracking-[0.34em] text-[rgba(249,244,236,0.42)]">
          © {new Date().getFullYear()} MangoBox. Handpicked in Hyderabad.
        </div>
      </div>
    </footer>
  );
};
