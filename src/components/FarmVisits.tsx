import { motion } from 'framer-motion';
import { Users2, Calendar, Coffee, CheckCircle2 } from 'lucide-react';

export const FarmVisits = () => {
  return (
    <section id="farm-visits" className="py-24 bg-[#EAF2ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-green mb-6">
              Farm Visits
            </h2>
            <p className="text-lg text-text-muted mb-8 leading-relaxed">
              Step away from the city and connect with nature. Your subscription includes complimentary access to our farms.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "See your tagged tree in person",
                "Meet the farmers and learn about organic practices",
                "Perfect weekend family escape just 90 mins from the city"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="text-orange shrink-0 mt-1" size={20} />
                  <span className="text-text-primary font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[24px] p-8 md:p-10 shadow-xl border-t-8 border-gold relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-bl-[100px] pointer-events-none"></div>
            <h3 className="text-3xl font-heading font-bold text-text-primary mb-4 flex items-center gap-3">
              <Users2 className="text-gold" />
              Farm Parties
            </h3>
            <p className="text-text-muted mb-6">
              Looking for a unique venue? Book a private farm day for your group or company.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 p-3 bg-background rounded-lg border border-gray-100">
                <Calendar className="text-orange" size={20} />
                <span className="font-semibold text-sm">Group Bookings</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-background rounded-lg border border-gray-100">
                <Coffee className="text-orange" size={20} />
                <span className="font-semibold text-sm">Countryside Menu</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-background rounded-lg border border-gray-100 col-span-2">
                <span className="text-xl">🥥</span>
                <span className="font-semibold text-sm">Fresh Neera & Tender Coconut</span>
              </div>
            </div>
            
            <a 
              href="https://wa.me/919876543210" 
              target="_blank" 
              rel="noreferrer"
              className="block w-full bg-green text-white text-center py-4 rounded-full font-bold shadow-md hover:bg-green/90 transition-colors"
            >
              Book a Farm Visit
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};