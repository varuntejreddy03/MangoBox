import { CheckCircle2 } from 'lucide-react';

export const PaymentBlock = () => {
  return (
    <div className="bg-green/5 border border-green/20 rounded-xl p-6 mb-8 text-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-green/20"></div>
      <div className="mx-auto w-12 h-12 bg-green/10 text-green rounded-full flex items-center justify-center mb-4">
        <CheckCircle2 size={24} />
      </div>
      <h4 className="text-lg font-bold text-text-primary mb-2">Cash on Delivery</h4>
      <p className="text-text-muted text-sm max-w-sm mx-auto">
        Pay securely when we deliver your Welcome Kit and welcome you to the MangoBox family. No advance payment needed!
      </p>
      
      {/* // TODO: Replace with Razorpay order creation
      <div className="hidden">
        <RazorpayCheckout amount={...} />
      </div>
      */}
    </div>
  );
};