import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, Check } from 'lucide-react';
import varietiesData from '../data/varieties.json';
import plansData from '../data/plans.json';
import { useOrder } from '../context/OrderContext';

const detailsSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  phone: z.string().regex(/^[0-9]{10}$/, 'Must be a valid 10-digit number'),
  area: z.string().min(3, 'Area is required'),
  gifting: z.boolean(),
});

type DetailsForm = z.infer<typeof detailsSchema>;
type PricingMap = Record<string, string>;

type CheckoutModalProps = {
  initialVariety?: string;
  initialPlan?: string;
  initialGifting?: boolean;
  onClose?: () => void;
};

export const CheckoutModal = ({
  initialVariety = 'dasheri',
  initialPlan = 'mature',
  initialGifting = false,
  onClose,
}: CheckoutModalProps) => {
  const [step, setStep] = useState(1);
  const [varietyId, setVarietyId] = useState(initialVariety);
  const [planId, setPlanId] = useState(initialPlan);
  const [generatedOrderId, setGeneratedOrderId] = useState('');
  const { setOrder } = useOrder();
  const navigate = useNavigate();

  const {
    register,
    formState: { errors, isValid },
    watch,
  } = useForm<DetailsForm>({
    resolver: zodResolver(detailsSchema),
    defaultValues: {
      gifting: initialGifting,
    },
    mode: 'onChange',
  });

  const formData = watch();
  const plan = plansData.find((item) => item.id === planId) || plansData[1];
  const variety = varietiesData.find((item) => item.id === varietyId) || varietiesData[0];
  const planPricing = (plan as { pricing: PricingMap }).pricing;

  const handleNext = () => setStep((current) => Math.min(current + 1, 4));
  const handleBack = () => setStep((current) => Math.max(current - 1, 1));

  const confirmOrder = () => {
    const orderId = `MBX-${Math.floor(1000 + Math.random() * 9000)}`;
    setGeneratedOrderId(orderId);

    setOrder({
      id: orderId,
      stage: plan.stage,
      variety: variety.name,
      yield: plan.yield,
      price: planPricing[variety.id],
      customerDetails: formData,
    });

    setStep(4);
  };

  const whatsappMessage = encodeURIComponent(
    `Hi MangoBox! I'd like to finalize my tree reservation.\n\n` +
      `*Reservation Details:*\n` +
      `- Order ID: ${generatedOrderId}\n` +
      `- Name: ${formData.name}\n` +
      `- Phone: +91 ${formData.phone}\n` +
      `- Area: ${formData.area}\n` +
      `- Tree: ${variety.name} (${plan.stage} Stage)\n` +
      `- Price: ${planPricing[varietyId]}\n` +
      `- Gifting: ${formData.gifting ? 'Yes' : 'No'}\n\n` +
      `Please let me know the next steps for payment and farm visit scheduling!`,
  );

  return (
    <div className="relative mx-auto flex min-h-[100dvh] w-full max-w-2xl flex-col overflow-hidden border border-gray-100 bg-white md:my-8 md:min-h-0 md:rounded-2xl md:shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
      {step < 4 && (
        <div className="absolute left-0 top-0 z-10 h-1.5 w-full bg-gray-100">
          <motion.div
            className="h-full bg-[#111111]"
            initial={{ width: 0 }}
            animate={{ width: `${(step / 3) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      )}

      <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-100 bg-white px-6 py-4">
        <div className="flex items-center gap-4">
          {step > 1 && step < 4 && (
            <button
              type="button"
              onClick={handleBack}
              className="text-gray-400 transition-colors hover:text-[#111111]"
            >
              <ArrowLeft size={24} />
            </button>
          )}
          <h2 className="text-xl font-heading font-bold text-[#111111]">
            {step === 1
              ? '1. Select Plan'
              : step === 2
                ? '2. Your Details'
                : step === 3
                  ? '3. Summary'
                  : 'Reserved!'}
          </h2>
        </div>
        {onClose && step < 4 && (
          <button
            type="button"
            onClick={onClose}
            className="text-sm font-semibold text-gray-400 hover:text-[#111111]"
          >
            Cancel
          </button>
        )}
      </div>

      <div className="flex-1 overflow-y-auto p-6 font-sans md:p-8">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <div className="mb-8">
                <label className="mb-3 block text-sm font-bold text-[#111111]">Preferred Variety</label>
                <div className="grid grid-cols-2 gap-3">
                  {varietiesData.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setVarietyId(item.id)}
                      className={`rounded-xl border-2 p-3 text-left transition-all ${
                        varietyId === item.id ? 'border-[#111111] bg-gray-50' : 'border-gray-100 hover:border-[#111111]/30'
                      }`}
                    >
                      <div className="mb-1 text-lg">{item.icon}</div>
                      <div className="text-sm font-bold text-[#111111]">{item.name}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-3 block text-sm font-bold text-[#111111]">Choose Tree Stage</label>
                <div className="space-y-4">
                  {plansData.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setPlanId(item.id)}
                      className={`flex w-full items-center justify-between rounded-xl border-2 p-4 text-left transition-all ${
                        planId === item.id ? 'border-[#111111] bg-gray-50' : 'border-gray-100 hover:border-[#111111]/30'
                      }`}
                    >
                      <div>
                        <div className="mb-1 flex items-center gap-2 font-bold text-[#111111]">
                          {item.stage}
                          {item.isPopular && (
                            <span className="rounded-full bg-[#111111] px-2 py-0.5 text-[10px] uppercase text-white">
                              Popular
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-gray-500">Yield: {item.yield}</div>
                      </div>
                      <div className="text-lg font-bold text-[#111111]">{(item as { pricing: PricingMap }).pricing[varietyId]}</div>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <form className="space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-bold text-[#111111]">Full Name *</label>
                  <input
                    {...register('name')}
                    placeholder="Enter your name"
                    className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-transparent focus:ring-2 focus:ring-black"
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-[#111111]">WhatsApp Number *</label>
                  <div className="flex">
                    <span className="select-none rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 p-3 text-gray-500">
                      +91
                    </span>
                    <input
                      {...register('phone')}
                      placeholder="10-digit number"
                      maxLength={10}
                      className="form-input w-full rounded-r-lg border border-gray-300 p-3 outline-none focus:border-transparent focus:ring-2 focus:ring-black"
                    />
                  </div>
                  {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-[#111111]">Hyderabad Area *</label>
                  <input
                    {...register('area')}
                    placeholder="e.g. Jubilee Hills, Gachibowli"
                    className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-transparent focus:ring-2 focus:ring-black"
                  />
                  {errors.area && <p className="mt-1 text-xs text-red-500">{errors.area.message}</p>}
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <label className="flex cursor-pointer items-center gap-3">
                    <input
                      type="checkbox"
                      {...register('gifting')}
                      className="h-5 w-5 rounded border-gray-300 bg-gray-100 text-black focus:ring-black"
                    />
                    <div>
                      <div className="text-sm font-bold text-[#111111]">Is this a gift?</div>
                      <div className="text-xs text-gray-500">We will prepare a digital gift certificate for you.</div>
                    </div>
                  </label>
                </div>
              </form>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <div className="mb-6 rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="mb-4 text-lg font-heading font-bold text-[#111111]">Order Summary</h3>

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
                  <div className="flex justify-between border-t border-gray-200 pt-3">
                    <span className="text-gray-500">Total Price</span>
                    <span className="text-lg font-black text-[#111111]">{planPricing[variety.id]}</span>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="mb-3 text-sm font-bold text-[#111111]">Customer Details</h3>
                <div className="space-y-2 text-sm">
                  <div className="text-gray-500">
                    <span className="font-bold text-[#111111]">Name:</span> {formData.name}
                  </div>
                  <div className="text-gray-500">
                    <span className="font-bold text-[#111111]">WhatsApp:</span> +91 {formData.phone}
                  </div>
                  <div className="text-gray-500">
                    <span className="font-bold text-[#111111]">Area:</span> {formData.area}
                  </div>
                  {formData.gifting && (
                    <div className="mt-2 inline-block rounded border border-black/10 bg-black/5 px-2 py-1 text-[10px] font-black uppercase tracking-widest text-[#111111]">
                      Gift Order
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-10 text-center"
            >
              <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-black text-white shadow-2xl">
                <Check size={48} strokeWidth={3} />
              </div>
              <h2 className="mb-3 text-3xl font-heading font-bold text-[#111111]">Tree Reserved!</h2>
              <p className="mx-auto mb-8 max-w-sm text-gray-500">
                Thank you, {formData.name}. We have saved a beautiful {variety.name} tree in your name.
              </p>

              <div className="mb-10 inline-block rounded-xl border border-gray-200 bg-gray-50 p-4">
                <div className="mb-1 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  Reservation Reference
                </div>
                <div className="text-xl font-bold tracking-widest text-[#111111]">{generatedOrderId}</div>
              </div>

              <div className="space-y-4">
                <p className="font-bold italic text-[#111111]">
                  Final step: contact us on WhatsApp to finalize your subscription and schedule your farm visit.
                </p>
                <a
                  href={`https://wa.me/919876543210?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full rounded-2xl bg-[#25D366] py-5 text-sm font-black uppercase tracking-[0.2em] text-white shadow-xl transition-all hover:bg-[#20BE5A]"
                >
                  Finalize on WhatsApp
                </a>
                <button
                  type="button"
                  onClick={() => {
                    if (onClose) {
                      onClose();
                      return;
                    }
                    navigate('/');
                  }}
                  className="block w-full py-3 font-bold text-gray-400 transition-colors hover:text-black"
                >
                  Back to Home
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {step < 4 && (
        <div className="border-t border-gray-100 bg-white p-6">
          <button
            type="button"
            onClick={() => {
              if (step === 1) {
                handleNext();
                return;
              }
              if (step === 2 && isValid) {
                handleNext();
                return;
              }
              if (step === 3) {
                confirmOrder();
              }
            }}
            disabled={step === 2 && !isValid}
            className="w-full rounded-xl bg-[#111111] py-4 text-lg font-bold text-white shadow-md transition-all hover:bg-black disabled:cursor-not-allowed disabled:opacity-50"
          >
            {step === 1
              ? 'Continue to Details'
              : step === 2
                ? 'Review Reservation'
                : 'Confirm Reservation'}
          </button>
        </div>
      )}
    </div>
  );
};
