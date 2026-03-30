import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  contactInfo: z.string().min(5, "Email or Phone is required"),
  message: z.string().min(10, "Message is too short")
});

type ContactForm = z.infer<typeof contactSchema>;

export const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = (data: ContactForm) => {
    console.log("Contact form submittted:", data);
    // Simulate API call
    return new Promise(resolve => setTimeout(resolve, 1000));
  };

  return (
    <section id="contact" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-4xl font-heading font-bold text-text-primary mb-6">Get in Touch</h2>
            <p className="text-lg text-text-muted mb-10">
              Have questions about subscribing or booking a visit? We're here to help.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange/10 text-orange rounded-full flex items-center justify-center shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-text-primary mb-1">Phone / WhatsApp</h4>
                  <p className="text-text-muted">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange/10 text-orange rounded-full flex items-center justify-center shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-text-primary mb-1">Email</h4>
                  <p className="text-text-muted">hello@mangobox.in</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange/10 text-orange rounded-full flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-text-primary mb-1">Farm Location</h4>
                  <p className="text-text-muted">MangoBox Farms, Zaheerabad Highway,<br/>Near Hyderabad, Telangana 502220</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange/10 text-orange rounded-full flex items-center justify-center shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-text-primary mb-1">Visiting Hours</h4>
                  <p className="text-text-muted">Weekends: 9:00 AM - 5:00 PM<br/>(Prior booking required)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-background rounded-2xl p-8 shadow-sm border border-gray-100">
            {isSubmitSuccessful ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <div className="w-20 h-20 bg-green/10 text-green rounded-full flex items-center justify-center mb-6">
                  <span className="text-3xl">✓</span>
                </div>
                <h3 className="text-2xl font-bold font-heading text-text-primary mb-2">Message Sent!</h3>
                <p className="text-text-muted mb-6">We typically respond within a few hours on WhatsApp.</p>
                <button 
                  onClick={() => reset()}
                  className="text-orange font-semibold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-text-primary mb-2">Name</label>
                  <input
                    {...register("name")}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-text-primary mb-2">Email or Phone</label>
                  <input
                    {...register("contactInfo")}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent transition-all"
                    placeholder="john@example.com or +91..."
                  />
                  {errors.contactInfo && <p className="text-red-500 text-sm mt-1">{errors.contactInfo.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-text-primary mb-2">Message</label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent transition-all"
                    placeholder="How can we help you?"
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-text-primary text-white py-4 rounded-full font-bold shadow-md hover:bg-black transition-colors disabled:opacity-70"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                <p className="text-center text-xs text-text-muted mt-4">
                  We typically respond within a few hours on WhatsApp.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};