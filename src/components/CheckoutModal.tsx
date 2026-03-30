import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Check } from 'lucide-react';
import varietiesData from '../data/varieties.json';
import plansData from '../data/plans.json';
import { useOrder } from '../context/OrderContext';
import { useNavigate } from 'react-router-dom';

const detailsSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().regex(/^[0-9]{10}$/, "Must be a valid 10-digit number"),
  area: z.string().min(3, "Area is required"),
  gifting: z.boolean()
});

type DetailsForm = z.infer<typeof detailsSchema>;

export const CheckoutModal = ({ 
  initialVariety = "dasheri", 
  initialPlan = "mature",
  initialGifting = false,
  onClose
}: { 
  initialVariety?: string, 
  initialPlan?: string, 
  initialGifting?: boolean,
  onClose?: () => void 
}) => {
  const [step, setStep] = useState(1);
  const [varietyId, setVarietyId] = useState(initialVariety);
  const [planId, setPlanId] = useState(initialPlan);
  const { setOrder } = useOrder();
  const navigate = useNavigate();

  const { register, formState: { errors, isValid }, watch } = useForm<DetailsForm>({
    resolver: zodResolver(detailsSchema),
    defaultValues: {
      gifting: initialGifting
    },
    mode: "onChange"
  });

  const [generatedOrderId, setGeneratedOrderId] = useState('');

  const formData = watch();

  const handleNext = () => setStep(s => Math.min(s + 1, 4));
  const handleBack = () => setStep(s => Math.max(s - 1, 1));

  const plan = plansData.find(p => p.id === planId) || plansData[1];
  const variety = varietiesData.find(v => v.id === varietyId) || varietiesData[0];

  const confirmOrder = () => {
    const oid = `MBX-${Math.floor(1000 + Math.random() * 9000)}`;
    setGeneratedOrderId(oid);
    setOrder({
      id: oid,
      stage: plan.stage,
      variety: variety.name,
      yield: plan.yield,
      price: (plan as {pricing: Record<string, string>}).pricing[variety.id],
      customerDetails: formData
    });
    setStep(4);
  };

  const whatsappMessage = encodeURIComponent(
    `Hi MangoBox! I'd like to finalize my tree reservation.\n\n` +
    `*Reservation Details:*\n` +
    `• Order ID: ${generatedOrderId}\n` +
    `• Name: ${formData.name}\n` +
    `• Phone: +91 ${formData.phone}\n` +
    `• Area: ${formData.area}\n` +
    `• Tree: ${variety.name} (${plan.stage} Stage)\n` +
    `• Price: ${(plan as any).pricing[varietyId]}\n` +
    `• Gifting: ${formData.gifting ? 'Yes 🎁' : 'No'}\n\n` +
    `Please let me know the next steps for payment and farm visit scheduling!`
  );

  return (
    <div className="w-full max-w-2xl mx-auto bg-white min-h-[100dvh] md:min-h-0 md:rounded-2xl md:shadow-[0_4px_24px_rgba(0,0,0,0.07)] md:my-8 flex flex-col relative overflow-hidden border border-gray-100">
      {/* Progress Bar */}
      {step < 4 && (
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gray-100 z-10">
          <motion.div 
            className="h-full bg-[#111111]"
            initial={{ width: 0 }}
            animate={{ width: `${(step / 3) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      )}

      {/* Header */}
      <div className="px-6 py-4 flex items-center justify-between border-b border-gray-100 bg-white sticky top-0 z-10">
        <div className="flex items-center gap-4">
          {step > 1 && step < 4 && (
            <button onClick={handleBack} className="text-gray-400 hover:text-[#111111] transition-colors">
              <ArrowLeft size={24} />
            </button>
          )}
          <h2 className="text-xl font-heading font-bold text-[#111111]">
            {step === 1 ? '1. Select Plan' : 
             step === 2 ? '2. Your Details' : 
             step === 3 ? '3. Summary' : 'Reserved!'}
          </h2>
        </div>
        {onClose && step < 4 && (
          <button onClick={onClose} className="text-sm font-semibold text-gray-400 hover:text-[#111111]">Cancel</button>
        )}
      </div>

      {/* Body */}
      <div className="p-6 md:p-8 flex-1 overflow-y-auto font-sans">
        <AnimatePresence mode="wait">
          
          {step === 1 && (
            <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
               
              <div className="mb-8">
                <label className="block text-sm font-bold text-[#111111] mb-3">Preferred Variety</label>
                <div className="grid grid-cols-2 gap-3">
                  {varietiesData.map(v => (
                    <button
                      key={v.id}
                      onClick={() => setVarietyId(v.id)}
                      className={`p-3 rounded-xl border-2 text-left transition-all ${
                        varietyId === v.id ? 'border-[#111111] bg-gray-50' : 'border-gray-100 hover:border-[#111111]/30'
                      }`}
                    >
                      <div className="text-lg mb-1">{v.icon}</div>
                      <div className="font-bold text-sm text-[#111111]">{v.name}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-[#111111] mb-3">Choose Tree Stage</label>
                <div className="space-y-4">
                  {plansData.map(p => (
                    <button
                      key={p.id}
                      onClick={() => setPlanId(p.id)}
                      className={`w-full p-4 rounded-xl border-2 text-left flex justify-between items-center transition-all ${
                        planId === p.id ? 'border-[#111111] bg-gray-50' : 'border-gray-100 hover:border-[#111111]/30'
                      }`}
                    >
                      <div>
                        <div className="font-bold text-[#111111] mb-1 flex items-center gap-2">
                          {p.stage}
                          {p.isPopular && <span className="text-[10px] bg-[#111111] text-white px-2 py-0.5 rounded-full uppercase">Popular</span>}
                        </div>
                        <div className="text-xs text-gray-500">Yield: {p.yield}</div>
                      </div>
                      <div className="font-bold text-lg text-[#111111]">{(p as {pricing: Record<string, string>}).pricing[varietyId]}</div>
                    </button>
                  ))}
                </div>
              </div>

            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-[#111111] mb-2">Full Name *</label>
                  <input
                    {...register('name')}
                    placeholder="Enter your name"
                    className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#111111] mb-2">WhatsApp Number *</label>
                  <div className="flex">
                    <span className="bg-gray-50 border border-r-0 border-gray-300 rounded-l-lg p-3 text-gray-500 select-none">+91</span>
                    <input
                      {...register('phone')}
                      placeholder="10-digit number"
                      maxLength={10}
                      className="w-full p-3 rounded-r-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none form-input"
                    />
                  </div>
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#111111] mb-2">Hyderabad Area *</label>
                  <input
                    {...register('area')}
                    placeholder="e.g. Jubilee Hills, Gachibowli"
                    className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none"
                  />
                  {errors.area && <p className="text-red-500 text-xs mt-1">{errors.area.message}</p>}
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      {...register('gifting')}
                      className="w-5 h-5 text-black bg-gray-100 border-gray-300 rounded focus:ring-black"
                    />
                    <div>
                      <div className="font-bold text-sm text-[#111111]">Is this a gift?</div>
                      <div className="text-xs text-gray-500">We'll prepare a digital gift certificate for you.</div>
                    </div>
                  </label>
                </div>
              </form>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-100 mb-6">
                <h3 className="font-heading font-bold text-lg mb-4 text-[#111111]">Order Summary</h3>
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Tree Stage</span>
                    <span className="font-bold text-[#111111]">{plan.stage}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Mango Variety</span>
                    <span className="font-bold text-[#111111]">{variety.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Expected Yield</span>
                    <span className="font-bold text-[#111111]">{plan.yield} / season</span>
                  </div>
                  <div className="flex justify-between pt-3 border-t border-gray-200">
                    <span className="text-gray-500">Total Price</span>
                    <span className="font-black text-lg text-[#111111]">{(plan as {pricing: Record<string, string>}).pricing[variety.id]}</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <h3 className="font-bold text-sm mb-3 text-[#111111]">Customer Details</h3>
                <div className="space-y-2 text-sm">
                  <div className="text-gray-500"><span className="text-[#111111] font-bold">Name:</span> {formData.name}</div>
                  <div className="text-gray-500"><span className="text-[#111111] font-bold">WhatsApp:</span> +91 {formData.phone}</div>
                  <div className="text-gray-500"><span className="text-[#111111] font-bold">Area:</span> {formData.area}</div>
                  {formData.gifting && (
                    <div className="inline-block bg-black/5 text-[#111111] font-black px-2 py-1 rounded text-[10px] mt-2 uppercase tracking-widest border border-black/10">🎁 Gift Order</div>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div key="step4" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-10">
              <div className="w-24 h-24 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <Check size={48} strokeWidth={3} />
              </div>
              <h2 className="text-3xl font-heading font-bold text-[#111111] mb-3">Tree Reserved!</h2>
              <p className="text-gray-500 mb-8 max-w-sm mx-auto">
                Thank you, {formData.name}. We've saved a beautiful {variety.name} tree in your name.
              </p>
              
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 inline-block mb-10">
                <div className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-1">Reservation Reference</div>
                <div className="text-xl font-bold tracking-widest text-[#111111]">{generatedOrderId}</div>
              </div>

              <div className="space-y-4">
                <p className="font-bold text-[#111111] italic">Final Step: Contact us on WhatsApp to finalize your subscription and schedule your farm visit.</p>
                <a 
                  href={`https://wa.me/919876543210?text=${whatsappMessage}`}
                  target="_blank"
                  className="w-full block bg-[#25D366] text-white py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] shadow-xl hover:bg-[#20BE5A] transition-all"
                >
                  Finalize on WhatsApp
                </a>
                <button 
                  onClick={() => {
                     if (onClose) onClose();
                     else navigate('/');
                  }}
                  className="block w-full text-gray-400 font-bold py-3 hover:text-black transition-colors"
                >
                  Back to Home
                </button>
              </div>

            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* Footer / CTA */}
      {step < 4 && (
        <div className="p-6 border-t border-gray-100 bg-white">
          <button
            onClick={() => {
              if (step === 1) handleNext();
              else if (step === 2 && isValid) handleNext();
              else if (step === 3) confirmOrder();
            }}
            disabled={step === 2 && !isValid}
            className="w-full bg-[#111111] text-white py-4 rounded-xl font-bold text-lg shadow-md hover:bg-black transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {step === 1 ? 'Continue to Details' :
             step === 2 ? 'Review Reservation' : 'Confirm Reservation'}
          </button>
        </div>
      )}
    </div>
  );
};