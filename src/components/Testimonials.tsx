import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import testimonials from '../data/testimonials.json';

export const Testimonials = () => {
  return (
    <section className="py-24 bg-background overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-4">Happy Subscribers</h2>
        <p className="text-lg text-text-muted">Don't just take our word for it.</p>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide py-4 px-2">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 min-w-[320px] md:min-w-[400px] snap-center relative hover:shadow-md transition-shadow shrink-0"
            >
              <Quote className="absolute top-6 right-8 text-green/10" size={64} />
              
              <div className="flex items-center gap-1 mb-6">
                {[...Array(t.rating)].map((_, index) => (
                  <Star key={index} className="text-gold fill-gold" size={18} />
                ))}
              </div>
              
              <p className="text-lg text-text-primary mb-8 relative z-10 leading-relaxed font-medium line-clamp-4">
                "{t.text}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-green text-white flex items-center justify-center font-bold text-lg">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-text-primary">{t.name}</h4>
                  <p className="text-sm text-text-muted">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};