import type { ChangeEvent, FormEvent } from 'react';
import { useEffect, useState } from 'react';
import { HeroSection } from '../components/home/HeroSection';
import {
  HowItWorksSection,
  PricingSection,
  VarietiesSection,
} from '../components/home/ExperienceSections';
import {
  ContactSection,
  FarmVisitsSection,
  GiftingSection,
  TestimonialsSection,
} from '../components/home/LifestyleSections';
import { Divider } from '../components/home/shared';
import { testimonials, varieties } from '../components/home/content';

export const Home = () => {
  const [activeVarietyId, setActiveVarietyId] = useState(varieties[0].id);
  const [activeStageId, setActiveStageId] = useState('mature');
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [messageSent, setMessageSent] = useState(false);
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTestimonialIndex((current) => (current + 1) % testimonials.length);
    }, 6500);

    return () => window.clearInterval(interval);
  }, []);

  const handleFormChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setMessageSent(false);
    setFormValues((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessageSent(true);
  };

  return (
    <main className="page-shell overflow-x-clip">
      <HeroSection />
      <Divider from="var(--ivory)" to="var(--forest)" />
      <HowItWorksSection />
      <Divider from="var(--forest)" to="rgba(232,132,58,0.08)" />
      <VarietiesSection activeVarietyId={activeVarietyId} setActiveVarietyId={setActiveVarietyId} />
      <Divider from="var(--ivory)" to="var(--cream-card)" />
      <PricingSection activeStageId={activeStageId} setActiveStageId={setActiveStageId} />
      <Divider from="var(--cream-card)" to="var(--forest)" />
      <GiftingSection />
      <Divider from="var(--forest)" to="var(--ivory)" />
      <FarmVisitsSection />
      <Divider from="var(--ivory)" to="rgba(232,132,58,0.06)" />
      <TestimonialsSection
        testimonialIndex={testimonialIndex}
        setTestimonialIndex={setTestimonialIndex}
      />
      <ContactSection
        formValues={formValues}
        messageSent={messageSent}
        onChange={handleFormChange}
        onSubmit={handleSubmit}
      />
    </main>
  );
};
