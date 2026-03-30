import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useOrder } from '../context/OrderContext';

export const Login = () => {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const navigate = useNavigate();
  const { order } = useOrder();

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length === 10) {
      setStep('otp');
    }
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp === '1234') {
      if (order) {
        navigate('/dashboard');
      } else {
        alert("No actve subscription found for this number.");
      }
    } else {
      alert("Invalid OTP. Use 1234 for testing.");
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.07)] w-full max-w-md border border-gray-100 text-center">
        <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">
          🥭
        </div>
        <h2 className="text-2xl font-bold font-heading mb-6">Member Login</h2>
        
        {step === 'phone' ? (
          <form onSubmit={handlePhoneSubmit} className="space-y-4">
            <div>
              <input
                type="tel"
                value={phone}
                onChange={e => setPhone(e.target.value.replace(/\D/g, ''))}
                placeholder="Enter 10-digit WhatsApp Number"
                maxLength={10}
                className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange outline-none text-center tracking-widest text-lg"
              />
            </div>
            <button 
              type="submit"
              disabled={phone.length !== 10}
              className="w-full bg-text-primary text-white py-4 rounded-full font-bold shadow-md hover:bg-black transition-colors disabled:opacity-50"
            >
              Get OTP
            </button>
          </form>
        ) : (
          <form onSubmit={handleOtpSubmit} className="space-y-4">
            <p className="text-sm text-text-muted mb-4">OTP sent to +91 {phone} (Use 1234)</p>
            <div>
              <input
                type="text"
                value={otp}
                onChange={e => setOtp(e.target.value.replace(/\D/g, ''))}
                placeholder="Enter OTP"
                maxLength={4}
                className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange outline-none text-center tracking-widest text-2xl font-bold"
              />
            </div>
            <button 
              type="submit"
              disabled={otp.length !== 4}
              className="w-full bg-orange text-white py-4 rounded-full font-bold shadow-md hover:bg-orange/90 transition-colors disabled:opacity-50"
            >
              Verify & Login
            </button>
            <button 
              type="button" 
              onClick={() => setStep('phone')}
              className="text-sm text-text-muted hover:text-text-primary mt-4"
            >
              Change Number
            </button>
          </form>
        )}
      </div>
    </div>
  );
};