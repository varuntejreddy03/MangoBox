import { motion } from 'framer-motion';
import varietiesData from '../data/varieties.json';

export const Varieties = () => {
  return (
    <section id="varieties" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-4">Premium Varieties</h2>
          <p className="text-lg text-text-muted">Grown organically exactly how nature intended</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {varietiesData.map((variety, index) => (
            <motion.div
              key={variety.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-[16px] p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)] hover:-translate-y-1.5 hover:border-green border-2 border-transparent transition-all duration-300 flex flex-col group cursor-default relative overflow-hidden"
            >
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-gold/10 rounded-full blur-xl group-hover:bg-gold/20 transition-colors"></div>
              
              <div className="text-4xl mb-4 bg-orange/10 w-16 h-16 rounded-full flex items-center justify-center border border-orange/20">
                {variety.icon}
              </div>
              <h3 className="text-2xl font-bold font-heading text-text-primary mb-2">{variety.name}</h3>
              <p className="text-sm font-semibold text-orange mb-4 tracking-wide">{variety.tagline.toUpperCase()}</p>
              <p className="text-text-muted leading-relaxed line-clamp-2">
                {variety.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};