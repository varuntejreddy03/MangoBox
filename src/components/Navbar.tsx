import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'How It Works', href: '/#how-it-works' },
    { name: 'Varieties', href: '/#varieties' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'Farm Visits', href: '/#visits' },
  ];

  return (
    <nav className={`fixed w-full top-0 z-[100] transition-all duration-500 ${
      isScrolled ? 'py-4 glass-header' : 'py-6 bg-transparent'
    }`}>
      <div className="max-w-[1240px] mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="text-2xl font-serif font-black text-[#111111] tracking-tighter flex items-center gap-1.5 group">
          <span className="text-3xl transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">🥭</span>
          <span className="uppercase tracking-[0.1em]">MangoBox</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className="text-[13px] font-black uppercase tracking-[0.2em] text-[#111111]/70 hover:text-[#111111] transition-all relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#111111] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <Link 
            to="/subscribe" 
            className="bg-[#111111] text-white px-8 py-3 rounded-xl text-[12px] font-black uppercase tracking-[0.2em] hover:bg-black transition-all hover:scale-105 active:scale-95 shadow-lg"
          >
            Join Membership
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden relative z-[110] w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <motion.span 
            animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className={`w-7 h-[2px] bg-[#111111] transition-all duration-300 ${isMobileMenuOpen ? 'bg-white' : ''}`}
          />
          <motion.span 
            animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-7 h-[2px] bg-[#111111]"
          />
          <motion.span 
            animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className={`w-7 h-[2px] bg-[#111111] transition-all duration-300 ${isMobileMenuOpen ? 'bg-white' : ''}`}
          />
        </button>
      </div>

      {/* Premium Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-[#111111] z-[105] md:hidden flex flex-col items-center justify-center p-8"
          >
            <div className="flex flex-col items-center gap-10">
              {navLinks.map((link, i) => (
                <motion.a 
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i + 0.2 }}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-serif font-bold text-white/60 hover:text-white transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-10"
              >
                <Link 
                  to="/subscribe" 
                  className="bg-white text-[#111111] px-12 py-5 rounded-2xl text-lg font-black uppercase tracking-[0.2em] shadow-2xl"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Start Now
                </Link>
              </motion.div>
            </div>

            <div className="absolute bottom-10 flex flex-col items-center gap-4 text-white/30 text-xs uppercase tracking-widest font-black">
              <p>Experience Local Luxury</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
