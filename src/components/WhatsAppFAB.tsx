import { MessagesSquare } from 'lucide-react';

export const WhatsAppFAB = () => {
  return (
    <a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_4px_14px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-75"></div>
      <MessagesSquare size={28} className="relative z-10 group-hover:-rotate-12 transition-transform duration-300" />
    </a>
  );
};