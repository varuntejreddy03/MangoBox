import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import plansData from '../data/plans.json';
import varietiesData from '../data/varieties.json';

export const Plans = () => {
  const [selectedVariety, setSelectedVariety] = useState(varietiesData[0].id);

  return (
    <section id="plans" className="py-24 bg-background-alt relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[40px] md:text-[56px] font-heading font-bold text-text-primary mb-8 tracking-tight" style={{ fontWeight: 800 }}>
            Choose Your Tree
          </h2>
          
          <div className="bg-card inline-flex p-1.5 rounded-pill shadow-sm border border-border mx-auto relative overflow-hidden">
            {varietiesData.map(v => (
              <button
                key={v.id}
                onClick={() => setSelectedVariety(v.id)}
                className={"relative px-6 py-3 rounded-pill text-sm font-medium transition-colors duration-300 " + (selectedVariety === v.id ? 'text-white' : 'text-text-secondary hover:bg-background-alt')}
              >
                {selectedVariety === v.id && (
                  <motion.div
                    layoutId="pill-bg"
                    className="absolute inset-0 bg-gradient-to-r from-orange to-gold rounded-pill drop-shadow-md"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{v.name}</span>
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {plansData.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={"bg-card rounded-[20px] p-8 md:p-10 flex flex-col h-full relative transition-all duration-300 will-change-transform " + (plan.isPopular ? 'border-[2px] border-green shadow-card-hover scale-[1.02] lg:scale-105 z-10' : 'border border-border shadow-card hover:-translate-y-2 hover:shadow-card-hover')}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-pill bg-green text-white px-5 py-1.5 text-xs font-bold tracking-widest uppercase shadow-md">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-3xl font-bold font-heading text-text-primary mb-2 tracking-tight">{plan.stage}</h3>
                <p className="text-sm text-text-muted">{plan.subtitle}</p>
              </div>

              <div className="mb-8">
                <div className="text-[36px] font-bold font-heading text-text-primary mb-4 leading-none">
                  {(plan.pricing as Record<string, string>)[selectedVariety]}
                </div>
                <div className="inline-flex">
                  <span className="bg-orange-light text-orange px-3.5 py-1.5 rounded-pill text-xs font-semibold tracking-wide uppercase">
                    Expected Yield: {plan.yield}
                  </span>
                </div>
              </div>

              <ul className="mb-10 space-y-4 flex-1">
                {[
                  'Farm-fresh organic deliveries',
                  'Tree tagging with your name',
                  'Complimentary farm visits'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-text-secondary text-sm font-body font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to={"/subscribe?variety=" + selectedVariety + "&plan=" + plan.id}
                className={"w-full py-4 rounded-pill font-bold text-center transition-all duration-300 " + (plan.isPopular ? 'bg-green text-white hover:scale-[1.02] shadow-[0_4px_14px_rgba(45,106,79,0.3)] hover:shadow-[0_8px_24px_rgba(45,106,79,0.4)]' : 'bg-transparent text-text-primary border-[2px] border-text-primary hover:bg-text-primary hover:text-white hover:scale-[1.02]')}
              >
                Reserve My Tree
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
