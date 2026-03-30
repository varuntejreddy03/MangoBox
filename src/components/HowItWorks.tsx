import { motion } from 'framer-motion';
import { TreePine, HandCoins, Sprout, Truck, MapPin } from 'lucide-react';

const steps = [
  { icon: TreePine, label: 'Choose Tree' },
  { icon: HandCoins, label: 'Subscribe' },
  { icon: Sprout, label: 'Track Growth' },
  { icon: Truck, label: 'Harvest & Delivery' },
  { icon: MapPin, label: 'Visit Farm' },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-4">How It Works</h2>
          <p className="text-lg text-text-muted">A simple journey from our farm to your table</p>
        </div>

        <div className="relative">
          {/* Horizontal Line for Desktop */}
          <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-gray-100 -translate-y-1/2 z-0"></div>

          {/* Vertical Line for Mobile */}
          <div className="md:hidden absolute top-[10%] bottom-[10%] left-8 w-0.5 bg-gray-100 z-0"></div>

          <div className="flex flex-col md:flex-row justify-between relative z-10 gap-8 md:gap-0">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="flex md:flex-col items-center gap-6 md:gap-4 group relative"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-background border-4 border-white shadow-lg rounded-full flex items-center justify-center text-green group-hover:bg-green group-hover:text-white transition-colors duration-300 z-10">
                  <step.icon size={28} strokeWidth={1.5} />
                </div>
                <div className="flex-1 md:text-center text-left">
                  <span className="text-sm font-bold text-orange mb-1 md:block">STEP {index + 1}</span>
                  <h3 className="text-xl font-bold font-heading text-text-primary">{step.label}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};