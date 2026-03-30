import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-3xl font-serif font-bold text-[#111111] tracking-tight flex items-center gap-2 mb-6">
              🥭 MangoBox
            </Link>
            <p className="text-[#111111]/70 max-w-sm mb-8 leading-relaxed">
              Premium mango tree subscriptions in Hyderabad. Connecting you directly with nature and bringing the finest harvest to your doorstep.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-serif font-bold text-[#111111] mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="/#how-it-works" className="text-[#111111]/70 hover:text-primary transition-colors inline-block min-h-[24px]">How It Works</a></li>
              <li><a href="/#varieties" className="text-[#111111]/70 hover:text-primary transition-colors inline-block min-h-[24px]">Premium Varieties</a></li>
              <li><a href="/#pricing" className="text-[#111111]/70 hover:text-primary transition-colors inline-block min-h-[24px]">Pricing & Plans</a></li>
              <li><a href="/#visits" className="text-[#111111]/70 hover:text-primary transition-colors inline-block min-h-[24px]">Farm Visits</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-serif font-bold text-[#111111] mb-6">Contact</h4>
            <ul className="space-y-4 text-[#111111]/70">
              <li className="flex items-start gap-2">
                <span className="mt-1 flex-shrink-0">📍</span>
                <span>MangoBox Farms, Chevella Road, Hyderabad, 500075</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="flex-shrink-0">📞</span>
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="flex-shrink-0">✉️</span>
                <span>hello@mangobox.in</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#111111]/40">
          <p>&copy; {new Date().getFullYear()} MangoBox Subscriptions. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-[#111111] transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[#111111] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};