import { useState, useEffect } from 'react';
import plansData from '../data/plans.json';

export const Home = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [activePlanId, setActivePlanId] = useState('mature');

  // Intersection Observer for fade-in-up animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const activePlan = (plansData as any[]).find(p => p.id === activePlanId) || (plansData as any[])[1];

  const testimonials = [
    {
      name: 'Aditya R.',
      text: 'Adopting a Banganapalli tree was the best decision. The joy of receiving boxes of mangoes from our very own tree was unmatched. Truly a premium experience from start to finish.',
      rating: 5
    },
    {
      name: 'Priya S.',
      text: 'The farm visit was magical. My kids loved seeing their Himayath Pasand tree. The mangoes were incredibly sweet and perfectly ripened. Will subscribe again next season!',
      rating: 5
    },
    {
      name: 'Karthik M.',
      text: 'I gifted a mature Rasalu tree to my parents for their anniversary. They were thrilled getting monthly updates, and the harvest quality was spectacular. Exceptional service.',
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white hero-texture">
        <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="animate-on-scroll">
            <div className="inline-block px-4 py-1.5 rounded-full bg-gray-50 text-[#111111] font-medium text-sm mb-6 border border-gray-200">
              Premium Subscription Service near Hyderabad
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif text-[#111111] leading-[1.1] mb-6">
              Not Just Mangoes. <br />
              <span className="italic text-primary relative">
                Your Own Tree.
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/30" viewBox="0 0 200 9" fill="none">
                  <path d="M2.00026 6.84889C54.6672 2.34889 152.4 -3.65111 198 7.34889" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
            <p className="text-lg md:text-xl text-[#111111]/80 mb-10 max-w-lg leading-relaxed">
              Experience the joy of growing your own premium mangoes. Adopt a tree, track its growth, and enjoy the exclusive harvest delivered straight to your door.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#pricing" className="bg-[#111111] text-white px-8 py-4 rounded-full text-base font-medium btn-hover min-w-[44px] min-h-[44px] text-center inline-block">
                Choose Your Tree
              </a>
              <a href="#how-it-works" className="border-2 border-[#111111] text-[#111111] px-8 py-4 rounded-full text-base font-medium hover:bg-[#111111] hover:text-white transition-colors min-w-[44px] min-h-[44px] text-center inline-block">
                How It Works
              </a>
            </div>
          </div>
          <div className="relative flex justify-center items-center animate-on-scroll delay-200">
            <div className="absolute w-64 h-64 md:w-96 md:h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="relative w-full max-w-md aspect-square rounded-[3rem] bg-gray-50 shadow-2xl flex items-center justify-center border-4 border-white animate-float z-10">
              <span className="text-[12rem] md:text-[16rem] leading-none drop-shadow-xl" style={{ filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.15))' }}>🥭</span>
            </div>
            
            <div className="absolute -bottom-6 -left-6 md:bottom-10 md:-left-12 bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl border border-gray-100 z-20 flex items-center gap-4 card-shadow">
              <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-xl">🌱</div>
              <div>
                <p className="text-sm text-[#111111]/60 font-medium">100% Organic</p>
                <p className="text-[#111111] font-bold font-serif">Certified Farm</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="section-padding bg-white relative">
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="text-center mb-20 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-serif text-[#111111] mb-4">How It Works</h2>
            <p className="text-[#111111]/60 max-w-md mx-auto italic">Your journey from seedling to sweetness in 5 simple steps.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { icon: '🌳', step: '01', title: 'Choose Your Tree', desc: 'Select from our 3 maturity stages and premium varieties.' },
              { icon: '📅', step: '02', title: 'Subscribe', desc: 'Active your annual membership with a single payment.' },
              { icon: '📱', step: '03', title: 'Track Growth', desc: 'Get monthly photo updates and weather reports from the farm.' },
              { icon: '📦', step: '04', title: 'Harvest & Delivery', desc: 'We pick at peak ripeness and deliver to your doorstep.' },
              { icon: '🚜', step: '05', title: 'Visit the Farm', desc: 'Come meet your tree and enjoy a day in our lush orchards.' }
            ].map((item, i) => (
              <div key={i} className={`relative p-8 rounded-3xl bg-gray-50 border border-gray-100 transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] animate-on-scroll delay-${i * 100} card-shadow group`}>
                <div className="absolute top-4 right-6 text-4xl font-serif text-[#111111]/5 font-bold transition-colors group-hover:text-primary/10">{item.step}</div>
                <div className="text-4xl mb-6">{item.icon}</div>
                <h3 className="text-xl font-serif text-[#111111] font-bold mb-3">{item.title}</h3>
                <p className="text-[#111111]/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Varieties */}
      <section id="varieties" className="section-padding bg-white overflow-hidden relative border-t border-gray-100">
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 animate-on-scroll">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-[#111111] mb-4">Our Premium Varieties</h2>
              <p className="text-[#111111]/60 max-w-md italic">Each variety is carefully cultivated in our Hyderabad farm to ensure authentic local taste.</p>
            </div>
            <a href="/varieties" className="text-primary font-bold hover:underline flex items-center gap-2 mb-2 uppercase tracking-widest text-xs">
              View All Details <span className="text-xl">→</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'Dasheri', desc: 'The heritage taste of North, now in Hyderabad.', icon: '🏆' },
              { name: 'Himayath Pasand', desc: 'The king of local luxury mangoes.', icon: '👑' },
              { name: 'Banganapalli', desc: 'Golden skin with fiberless, honey-sweet flesh.', icon: '✨' },
              { name: 'Rasalu', desc: 'Perfect for purees and traditional desserts.', icon: '🌟' }
            ].map((v, i) => (
              <div key={i} className={`group relative h-96 rounded-[3rem] overflow-hidden bg-gray-50 border border-gray-100 p-8 flex flex-col justify-end animate-on-scroll delay-${(i % 4) * 100} hover:border-black/30 transition-all`}>
                <div className="absolute top-10 right-10 text-6xl opacity-10 group-hover:opacity-100 transition-all duration-700 scale-125 group-hover:scale-100 transform rotate-12 group-hover:rotate-0">{v.icon}</div>
                <div className="relative z-10 transition-transform duration-500 group-hover:translate-y-[-10px]">
                  <h3 className="text-2xl font-serif text-[#111111] font-bold mb-2">{v.name}</h3>
                  <p className="text-[#111111]/50 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing / Choose Your Tree */}
      <section id="pricing" className="section-padding bg-white relative overflow-hidden border-t border-gray-100">
        <div className="max-w-[1000px] mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-serif text-[#111111] font-bold mb-4">Choose Your Tree Stage</h2>
            <p className="text-[#111111]/60 max-w-xl mx-auto">Select the maturity level that suits your household. Every tree is tagged in your name.</p>
          </div>

          {/* Interactive Tier Switcher */}
          <div className="animate-on-scroll">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {(plansData as any[]).map((plan, i) => (
                <button 
                  key={plan.id}
                  onClick={() => setActivePlanId(plan.id)}
                  className={`px-4 py-3 md:px-8 md:py-4 rounded-2xl font-serif font-bold text-sm md:text-lg transition-all duration-500 border-2 ${
                    activePlanId === plan.id 
                      ? 'bg-[#111111] text-white border-[#111111] shadow-xl scale-105' 
                      : 'bg-white text-[#111111] border-gray-200 hover:border-[#111111]/30'
                  } flex items-center gap-3`}
                >
                  <span className="text-xl md:text-2xl">{['🌱', '🌳', '🏆'][i]}</span>
                  {plan.stage}
                </button>
              ))}
            </div>

            <div className="bg-white rounded-[3.5rem] p-8 md:p-16 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.05)] border border-gray-100 relative transition-all duration-500">
              <div className="absolute top-10 right-10 flex flex-col items-end">
                <span className="text-[10px] uppercase tracking-[0.3em] font-black text-[#111111]/30 mb-1">Standard Season Yield</span>
                <span className="text-2xl font-serif font-black text-[#111111]">~{activePlan.yield}</span>
              </div>

              <div className="mb-12">
                <h3 className="text-3xl font-serif font-bold text-[#111111] mb-2">{activePlan.stage} Tree Membership</h3>
                <p className="text-[#111111]/50 font-medium">{activePlan.subtitle}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
                {Object.entries((activePlan as any).pricing).map(([variety, price], idx) => (
                  <div key={`${activePlanId}-${variety}`} className="group cursor-default animate-fade-in-up">
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                          {['🥭', '✨', '👑', '🌟'][idx]}
                        </div>
                        <span className="font-serif font-bold text-xl text-[#111111] capitalize">{variety}</span>
                      </div>
                      <span className="font-sans font-black text-[#111111] text-xl font-bold">{String(price)}</span>
                    </div>
                    <div className="h-[2px] w-full bg-gray-100 overflow-hidden rounded-full">
                      <div className="h-full bg-[#111111] w-1/4 group-hover:w-full transition-all duration-1000"></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 pt-10 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1,2,3,4].map(i => <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-xs font-bold text-[#111111]">{String.fromCharCode(64+i)}</div>)}
                  </div>
                  <p className="text-sm text-[#111111]/60 font-medium"><span className="text-[#111111] font-bold">1.{activePlanId === 'mature' ? '2' : '1'}k+</span> Subscribers in this tier</p>
                </div>
                <a 
                  href={`/subscribe?plan=${activePlanId}`} 
                  className="bg-[#111111] text-white px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-[0.25em] shadow-xl hover:bg-black transition-all hover:translate-y-[-2px] active:translate-y-0"
                >
                  Start Membership
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why MangoBox Stats */}
      <section className="py-20 bg-white border-y border-gray-100 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
            {[
              { num: '1', label: 'Farmer Direct', suffix: '' },
              { num: '100', label: 'Farm Proximity', suffix: 'km' },
              { num: '60', label: 'Max Yield', suffix: 'kg' },
              { num: '4', label: 'Premium Varieties', suffix: '' }
            ].map((stat, i) => (
              <div key={i} className={`text-center relative animate-on-scroll delay-${(i % 4) * 100}`}>
                {i !== 0 && <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-16 bg-gray-200 -ml-4"></div>}
                <div className="text-5xl md:text-7xl font-serif text-[#111111] mb-3 font-bold flex items-baseline justify-center">
                  {stat.num}<span className="text-3xl font-medium">{stat.suffix}</span>
                </div>
                <div className="text-xs uppercase tracking-widest text-[#111111]/60 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gifting Section */}
      <section className="section-padding bg-white relative">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-gray-50 rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden animate-on-scroll border border-gray-100">
            <div className="md:w-1/2 relative z-10 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-serif text-[#111111] mb-6">The most meaningful gift</h2>
              <p className="text-lg text-[#111111]/70 mb-8 max-w-md mx-auto md:mx-0">
                Gift a living, growing tree to your loved ones. We'll send them a beautifully crafted welcome package and regular updates on their tree's progress.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button className="bg-[#111111] text-white px-8 py-3.5 rounded-full text-sm font-medium btn-hover">
                  Gift to Kids
                </button>
                <button className="bg-white text-[#111111] border border-[#111111]/20 px-8 py-3.5 rounded-full text-sm font-medium btn-hover">
                  Gift to a Friend
                </button>
              </div>
            </div>
            
            <div className="md:w-1/2 relative z-10 h-64 md:h-96 w-full rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-100 flex items-center justify-center p-8 card-shadow rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="absolute -top-4 -right-4 bg-[#111111] text-white w-20 h-20 rounded-full flex items-center justify-center font-serif italic text-xl shadow-lg transform rotate-12">
                Gift
              </div>
              <div className="text-center">
                <span className="text-8xl mb-4 block">🎁</span>
                <p className="font-serif text-2xl text-[#111111] font-bold">A Legacy that Grows</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Farm Visits */}
      <section id="visits" className="section-padding bg-white relative">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-4xl md:text-5xl font-serif text-[#111111] mb-6">Escape to the Farm</h2>
              <p className="text-lg text-[#111111]/70 mb-8 leading-relaxed">
                Just 90 minutes from Hyderabad, our lush mango orchards await you. Disconnect from the city and connect with nature, right where your food grows.
              </p>
              
              <ul className="space-y-6 mb-10">
                {[
                  'Guided orchard tour with our veteran farmers',
                  'Picnic spots under fully grown mango canopies',
                  'Organic farm-to-table lunch experience',
                  'Pet-friendly and child-safe environment'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-[#111111] text-sm">✓</span>
                    </div>
                    <span className="text-[#111111]/80 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative animate-on-scroll delay-200">
              <div className="absolute inset-0 bg-black/5 rounded-[3rem] transform translate-y-6 -translate-x-6 z-0"></div>
              <div className="bg-white p-10 rounded-[3rem] shadow-xl relative z-10 border border-gray-100 flex flex-col items-center text-center">
                <span className="text-6xl mb-6">🎪</span>
                <h3 className="text-3xl font-serif text-[#111111] font-bold mb-4">Farm Parties</h3>
                <p className="text-[#111111]/70 mb-8 max-w-sm">Host your kid's birthday, corporate offsite, or a family get-together in the serene surroundings of our mango farm.</p>
                <button className="w-full bg-[#111111] text-white py-4 rounded-xl text-base font-medium btn-hover">
                  Enquire for Events
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white text-[#111111] overflow-hidden border-t border-gray-100">
        <div className="max-w-[1200px] mx-auto px-6 relative animate-on-scroll">
          <span className="text-[15rem] leading-none text-gray-100 absolute -top-16 -left-10 font-serif rotate-12 select-none pointer-events-none">"</span>
          
          <div className="text-center mb-16 relative z-10">
            <h2 className="text-4xl md:text-5xl font-serif text-[#111111]">Happy Subscribers</h2>
          </div>

          <div className="max-w-3xl mx-auto relative z-10">
            <div className="relative overflow-hidden px-4 md:px-12 py-8">
              <div className="transition-transform duration-500 ease-in-out flex" style={{ transform: `translateX(-${testimonialIndex * 100}%)` }}>
                {testimonials.map((t, idx) => (
                  <div key={idx} className="w-full shrink-0 px-2 flex flex-col items-center text-center">
                    <div className="flex gap-1 text-[#111111] mb-8 text-xl">
                      {[...Array(t.rating)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                    <p className="text-xl md:text-3xl font-serif leading-relaxed text-[#111111]/90 mb-10 italic">
                      "{t.text}"
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full border-2 border-black flex items-center justify-center font-bold text-xl bg-gray-50">
                        {t.name.charAt(0)}
                      </div>
                      <div className="text-left">
                        <h4 className="font-medium text-lg">{t.name}</h4>
                        <p className="text-[#111111]/50 text-sm">MangoBox Subscriber</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Controls */}
            <div className="flex justify-center gap-4 mt-8">
              <button title="prev" onClick={prevTestimonial} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-all text-[#111111] min-w-[48px] min-h-[48px]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button title="next" onClick={nextTestimonial} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-all text-[#111111] min-w-[48px] min-h-[48px]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch (Form) */}
      <section className="section-padding bg-white pb-32">
        <div className="max-w-[800px] mx-auto px-6 text-center animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-serif text-[#111111] mb-4">Let's Talk Mangoes</h2>
          <p className="text-lg text-[#111111]/70 mb-12">Have questions about the subscription? We're here to help.</p>

          <form className="bg-gray-50 p-8 md:p-12 rounded-[2rem] text-left border border-gray-100" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="input-group">
                <input type="text" id="name" className="floating-input" placeholder=" " required />
                <label htmlFor="name" className="floating-label">Full Name</label>
              </div>
              <div className="input-group">
                <input type="email" id="email" className="floating-input" placeholder=" " required />
                <label htmlFor="email" className="floating-label">Email Address</label>
              </div>
            </div>
            <div className="input-group">
              <input type="tel" id="phone" className="floating-input" placeholder=" " required />
              <label htmlFor="phone" className="floating-label">Phone Number</label>
            </div>
            <div className="input-group !mb-10">
              <textarea id="message" rows={3} className="floating-input resize-none" placeholder=" " required></textarea>
              <label htmlFor="message" className="floating-label">Your Message</label>
            </div>
            
            <button type="submit" className="w-full bg-[#111111] text-white py-4 rounded-xl text-lg font-medium btn-hover transition-colors min-h-[44px]">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};
