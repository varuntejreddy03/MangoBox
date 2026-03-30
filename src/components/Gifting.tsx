import { motion } from 'framer-motion';
import { Gift, Baby, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const gifts = [
  { icon: Baby, title: 'Gift to Kids', desc: 'Teach them how food grows with their very own tree.' },
  { icon: Gift, title: 'Gift to a Friend', desc: 'A unique present that gives back every summer.' },
  { icon: Users, title: 'Gift to Family', desc: 'Bring everyone together for farm visits and mango feasts.' },
];

export const Gifting = () => {
  return (
    <section id="gifting" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-6">
            The most meaningful gift — a living, growing tree.
          </h2>
          <p className="text-lg text-text-muted mb-8">
            Give a gift that lasts for years. We'll tag the tree with their name and send them seasonal updates.
          </p>
          <Link
            to="/subscribe?gifting=true"
            className="inline-flex bg-gold text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:bg-gold/90 transition-all hover:-translate-y-1"
          >
            Gift a Tree Today
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {gifts.map((gift, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-background rounded-2xl p-8 text-center border-2 border-transparent hover:border-gold/30 transition-colors shadow-sm"
            >
              <div className="mx-auto w-16 h-16 bg-gold/10 text-gold rounded-full flex items-center justify-center mb-6">
                <gift.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold font-heading text-text-primary mb-3">{gift.title}</h3>
              <p className="text-text-muted">{gift.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};