import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_center,_#FFFDF7_0%,_#F5F0E8_100%)]">
      {/* Soft grain texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full mt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-left"
        >
          <h1 className="text-[48px] md:text-[64px] font-black font-heading text-text-primary leading-[1.1] mb-6">
            Not Just Mangoes.<br/>
            <span className="text-orange italic font-bold">Your Own Tree.</span>
          </h1>
          <p className="text-lg md:text-[18px] text-text-secondary mb-10 leading-relaxed font-body max-w-[420px]">
            Subscribe to a real mango tree near Hyderabad. Farm-to-door organic mangoes delivered every season.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              to="/subscribe"
              className="bg-gradient-to-br from-orange to-gold text-white px-8 py-4 rounded-pill font-semibold text-lg text-center shadow-[0_8px_16px_rgba(232,101,26,0.3)] hover:scale-[1.03] active:scale-[0.97] transition-all duration-300"
            >
              Subscribe Now
            </Link>
            <a
              href="#how-it-works"
              className="bg-transparent text-text-primary border-2 border-text-primary px-8 py-4 rounded-pill font-semibold text-lg text-center hover:bg-text-primary hover:text-white active:scale-[0.97] transition-all duration-300"
            >
              How It Works
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-text-secondary">
            <span className="flex items-center gap-1">
              <svg className="w-5 h-5 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              Organic Certified
            </span>
            <span className="text-border text-lg">&bull;</span>
            <span className="flex items-center gap-1">
              <svg className="w-5 h-5 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              100km from Hyderabad
            </span>
            <span className="text-border text-lg">&bull;</span>
            <span className="flex items-center gap-1">
              <svg className="w-5 h-5 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              Named Tree Tag
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex justify-center items-center h-[500px]"
        >
          {/* Decorative Blobs */}
          <div className="absolute top-10 right-20 w-40 h-40 bg-gold/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-48 h-48 bg-orange/20 rounded-full blur-3xl" style={{ animation: 'pulse 3s infinite reverse' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-light rounded-full blur-3xl opacity-50"></div>
          
          <motion.div
            animate={{ 
              y: [-12, 12, -12]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 3,
              ease: "easeInOut" 
            }}
            className="z-10 relative drop-shadow-[0_20px_40px_rgba(232,101,26,0.3)]"
          >
             <div className="w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] rounded-full bg-gradient-to-br from-[#FFB347] to-[#E8651A] relative shadow-inner">
               {/* Base Mango Shape */}
               <div className="absolute inset-0 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] bg-gradient-to-br from-[#FFB347] to-[#E8651A] shadow-[inset_-20px_-20px_40px_rgba(0,0,0,0.1),_inset_20px_20px_40px_rgba(255,255,255,0.4)]"></div>
               {/* Leaf */}
               <div className="absolute -top-8 right-12 w-24 h-16 bg-gradient-to-br from-[#4CAF50] to-[#2D6A4F] rounded-[100%_0_100%_0] origin-bottom-left -rotate-12 shadow-md"></div>
               <div className="absolute -top-4 right-20 w-4 h-12 bg-[#5D4037] rounded-full rotate-45 z-[-1]"></div>
               {/* Highlight */}
               <div className="absolute top-12 left-12 w-24 h-32 bg-white/20 rounded-full blur-xl rotate-45"></div>
             </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
