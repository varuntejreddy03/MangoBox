import { MessageCircle } from 'lucide-react';

export const WhatsAppFAB = () => {
  return (
    <a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-[110] flex items-center gap-3 rounded-full border border-[rgba(201,168,76,0.45)] bg-[rgba(26,18,8,0.9)] px-4 py-3 text-[var(--ivory)] shadow-[0_18px_40px_rgba(26,18,8,0.18)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(232,132,58,0.6)] sm:bottom-6 sm:right-6"
      aria-label="Chat with MangoBox on WhatsApp"
      data-cursor="whatsapp"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(201,168,76,0.35)] bg-[rgba(249,244,236,0.08)]">
        <MessageCircle size={18} className="text-[var(--saffron)]" />
      </span>
      <span className="hidden pr-1 text-left sm:block">
        <span className="block font-[var(--font-label)] text-[0.62rem] uppercase tracking-[0.34em] text-[rgba(249,244,236,0.52)]">
          Private Line
        </span>
        <span className="block font-[var(--font-body)] text-[0.95rem]">WhatsApp Concierge</span>
      </span>
    </a>
  );
};
