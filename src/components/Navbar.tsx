import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Ritual', hash: '#how-it-works' },
  { label: 'Varieties', hash: '#varieties' },
  { label: 'Stages', hash: '#pricing' },
  { label: 'Farm Visits', hash: '#visits' },
  { label: 'Contact', hash: '#contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const resolveHash = (hash: string) => (location.pathname === '/' ? hash : `/${hash}`);
  const primaryHref = location.pathname === '/' ? '#pricing' : '/#pricing';
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-[120] transition-all duration-500 ${
        isScrolled ? 'px-3 pt-3 md:px-4' : 'px-0 pt-0'
      }`}
    >
      <div
        className={`mx-auto flex max-w-[1440px] items-center justify-between transition-all duration-500 ${
          isScrolled
            ? 'glass-nav rounded-[28px] px-4 py-3.5 shadow-[0_18px_50px_rgba(26,18,8,0.08)] md:px-7 md:py-4'
            : 'px-4 py-4 md:px-8 md:py-7'
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            to="/"
            className="flex min-w-0 items-center gap-2.5 text-[var(--ink)] sm:gap-3"
            data-cursor="brand"
            onClick={closeMobileMenu}
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[rgba(201,168,76,0.55)] bg-[rgba(249,244,236,0.88)] shadow-[0_10px_26px_rgba(26,18,8,0.08)] sm:h-11 sm:w-11">
              <span className="text-[1.08rem] leading-none text-[var(--saffron)] sm:text-[1.2rem]">
                M
              </span>
            </span>
            <span className="flex min-w-0 flex-col">
              <span className="truncate font-[var(--font-display)] text-[1.6rem] leading-none tracking-[0.02em] sm:text-[1.9rem]">
                MangoBox
              </span>
              <span className="hidden font-[var(--font-label)] text-[0.58rem] uppercase tracking-[0.24em] text-[rgba(26,18,8,0.52)] min-[430px]:block sm:text-[0.68rem] sm:tracking-[0.42em]">
                Hyderabad Orchard Estate
              </span>
            </span>
          </Link>
        </motion.div>

        <motion.nav
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15, delayChildren: 0.2 },
            },
          }}
          className="hidden items-center gap-8 lg:flex"
        >
          {navLinks.map((link) => (
            <motion.a
              key={link.label}
              variants={{
                hidden: { opacity: 0, x: -18 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              href={resolveHash(link.hash)}
              className="nav-link-luxury"
              data-cursor="nav"
              onClick={closeMobileMenu}
            >
              {link.label}
            </motion.a>
          ))}
          <motion.a
            href={primaryHref}
            variants={{
              hidden: { opacity: 0, x: -18 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="luxury-button luxury-button--solid luxury-button--nav"
            data-cursor="cta"
            onClick={closeMobileMenu}
          >
            Reserve a Tree
          </motion.a>
        </motion.nav>

        <button
          type="button"
          aria-label="Toggle navigation"
          className="relative z-[130] flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-1.5 rounded-full border border-[rgba(201,168,76,0.45)] bg-[rgba(249,244,236,0.78)] text-[var(--ink)] sm:h-11 sm:w-11 lg:hidden"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          data-cursor="toggle"
        >
          <motion.span
            animate={isMobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="block h-px w-5 bg-current"
          />
          <motion.span
            animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block h-px w-5 bg-current"
          />
          <motion.span
            animate={isMobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="block h-px w-5 bg-current"
          />
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-3 top-3 rounded-[34px] border border-[rgba(201,168,76,0.32)] bg-[rgba(249,244,236,0.96)] p-6 shadow-[0_26px_80px_rgba(26,18,8,0.16)] backdrop-blur-2xl lg:hidden"
          >
            <div className="flex h-full flex-col justify-between">
              <div className="space-y-4 pb-5 pt-20">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * index, duration: 0.45 }}
                  href={resolveHash(link.hash)}
                  className="block border-b border-[rgba(26,18,8,0.08)] pb-4 font-[var(--font-heading)] text-[1.8rem] text-[var(--ink)]"
                  data-cursor="menu-link"
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </motion.a>
              ))}
              </div>

              <div className="flex flex-col gap-4 pt-2">
                <a
                  href={primaryHref}
                  className="luxury-button luxury-button--solid luxury-button--nav text-center"
                  data-cursor="cta"
                  onClick={closeMobileMenu}
                >
                  Reserve a Tree
                </a>
                <div className="rounded-[28px] border border-[rgba(201,168,76,0.28)] bg-[rgba(242,235,224,0.8)] px-5 py-4">
                  <p className="font-[var(--font-label)] text-[0.68rem] uppercase tracking-[0.38em] text-[rgba(26,18,8,0.52)]">
                    Mango Concierge
                  </p>
                  <p className="mt-2 font-[var(--font-body)] text-[0.98rem] leading-relaxed text-[rgba(26,18,8,0.76)]">
                    Slow-grown fruit, private farm visits, and annual gifting, composed like an estate ritual.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
