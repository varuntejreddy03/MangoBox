import type { LucideIcon } from 'lucide-react';
import {
  Gift,
  MapPin,
  Package,
  ShieldCheck,
  Sprout,
  Truck,
} from 'lucide-react';

export type Variety = {
  id: string;
  name: string;
  label: string;
  origin: string;
  tasting: string;
  harvest: string;
  note: string;
  detail: string;
  image: string;
};

export type SubscriptionStage = {
  id: string;
  name: string;
  collection: string;
  price: string;
  yield: string;
  detail: string;
  highlight: string;
  treeScale: number;
  fruitCount: number;
  prices: Array<{ variety: string; range: string }>;
};

export type Testimonial = {
  name: string;
  title: string;
  quote: string;
  monogram: string;
};

export const heroParticles = Array.from({ length: 16 }, (_, index) => ({
  left: `${6 + (index % 5) * 18}%`,
  top: `${10 + ((index * 13) % 70)}%`,
  delay: `${index * 0.55}s`,
  duration: `${11 + (index % 4) * 2.25}s`,
}));

export const processSteps: Array<{
  step: string;
  title: string;
  detail: string;
  icon: LucideIcon;
}> = [
  {
    step: '01',
    title: 'Choose your stage',
    detail: 'Select a tree maturity that fits your ritual, gifting plan, and appetite for the season.',
    icon: Sprout,
  },
  {
    step: '02',
    title: 'Reserve your estate',
    detail: 'We tag the tree in your name and issue a private seasonal dossier for your household.',
    icon: ShieldCheck,
  },
  {
    step: '03',
    title: 'Receive orchard dispatches',
    detail: 'Monthly notes, weather portraits, and fruit progress arrive like a collector journal.',
    icon: Package,
  },
  {
    step: '04',
    title: 'Harvest at peak perfume',
    detail: 'Fruit is cut only at the right moment, packed by hand, and sent straight from the farm.',
    icon: Truck,
  },
  {
    step: '05',
    title: 'Visit the grove',
    detail: 'Private lunches, guided orchard walks, and family afternoons complete the experience.',
    icon: MapPin,
  },
];

export const varieties: Variety[] = [
  {
    id: 'himayath',
    name: 'Himayath Pasand',
    label: 'Hyderabadi collector fruit',
    origin: 'Late May release',
    tasting: 'Creamy, floral, almost custard-like, with a regal sweetness that lingers.',
    harvest: 'Reserved in smaller lots for those who want the city signature variety.',
    note: 'Best for gifting and long lunches.',
    detail: 'A fruit with old-city poise and a lingering perfume meant to be eaten slowly.',
    image: '/DEcg8X30a77-ZjGiU8Qk5.png',
  },
  {
    id: 'banganapalli',
    name: 'Banganapalli',
    label: 'Golden afternoon classic',
    origin: 'Mid-season release',
    tasting: 'Silky and fiberless with a cleaner sweetness that feels bright, polished, and generous.',
    harvest: 'An effortless host fruit, sliced for guests or boxed for premium seasonal gifting.',
    note: 'Best for elegant tables.',
    detail: 'The polished host: large format, glowing skin, and confident sweetness.',
    image: '/0AP_k5gXHv3eV3Pn_sEiX.png',
  },
  {
    id: 'dasheri',
    name: 'Dasheri',
    label: 'Perfumed heritage pick',
    origin: 'Early season release',
    tasting: 'Aromatic, honeyed, and deeply nostalgic, with soft flesh and a fragrant finish.',
    harvest: 'Chosen by households who love a more lyrical, perfumed expression of summer.',
    note: 'Best for private breakfasts.',
    detail: 'All perfume and memory, shaped for quiet mornings and repeat cravings.',
    image: '/vMG3JrxwQKRnHwzQAprPI.png',
  },
  {
    id: 'rasalu',
    name: 'Rasalu',
    label: 'Juice-led summer favorite',
    origin: 'Peak heat release',
    tasting: 'Lush, flowing, and sun-drenched, built for glasses, desserts, and unapologetic abundance.',
    harvest: 'A more playful fruit that still arrives with the same estate-grade discipline.',
    note: 'Best for family feasts.',
    detail: 'A lavish pour of summer for households that want generosity over restraint.',
    image: '/0_nt-kE7UJUZ-TB7cqrmc.png',
  },
];

export const subscriptionStages: SubscriptionStage[] = [
  {
    id: 'initial',
    name: 'Initial',
    collection: 'For long-view collectors',
    price: 'Rs 6,500',
    yield: '30kg',
    detail: 'A younger tree with a lower immediate yield, chosen for families who want a slower narrative.',
    highlight: 'A patient entry into the estate.',
    treeScale: 0.84,
    fruitCount: 3,
    prices: [
      { variety: 'Dasheri', range: 'Rs 6,500 - 8,000' },
      { variety: 'Himayath Pasand', range: 'Rs 7,000 - 8,500' },
      { variety: 'Banganapalli', range: 'Rs 6,500 - 8,000' },
      { variety: 'Rasalu', range: 'Rs 7,500 - 10,500' },
    ],
  },
  {
    id: 'mature',
    name: 'Mature',
    collection: 'For household ritual',
    price: 'Rs 10,500',
    yield: '45kg',
    detail: 'The signature MangoBox tier, with dependable yield and a balanced season for families and hosts.',
    highlight: 'The most requested membership.',
    treeScale: 1,
    fruitCount: 6,
    prices: [
      { variety: 'Dasheri', range: 'Rs 10,500 - 12,000' },
      { variety: 'Himayath Pasand', range: 'Rs 11,000 - 12,500' },
      { variety: 'Banganapalli', range: 'Rs 10,500 - 12,000' },
      { variety: 'Rasalu', range: 'Rs 12,000 - 14,500' },
    ],
  },
  {
    id: 'fully-mature',
    name: 'Fully Matured',
    collection: 'For gifting and abundance',
    price: 'Rs 14,000',
    yield: '60kg',
    detail: 'Our most generous canopy, suited for hospitality, gifting, and mango lovers who want the full season.',
    highlight: 'The grand, high-yield estate option.',
    treeScale: 1.18,
    fruitCount: 9,
    prices: [
      { variety: 'Dasheri', range: 'Rs 14,000 - 15,500' },
      { variety: 'Himayath Pasand', range: 'Rs 14,500 - 16,000' },
      { variety: 'Banganapalli', range: 'Rs 14,000 - 15,500' },
      { variety: 'Rasalu', range: 'Rs 15,500 - 18,500' },
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    name: 'Aditi Rao',
    title: 'Jubilee Hills collector',
    quote:
      'MangoBox feels less like a delivery and more like belonging to an old summer estate. Every box arrives with fragrance, care, and timing.',
    monogram: 'AR',
  },
  {
    name: 'Rahul Mehta',
    title: 'Founder, Banjara Hills',
    quote:
      'The gifting program was extraordinary. Clients received fruit that felt curated, ceremonial, and unmistakably Hyderabadi.',
    monogram: 'RM',
  },
  {
    name: 'Sana Karim',
    title: 'Family subscriber, Gachibowli',
    quote:
      'Our children now wait for the orchard notes each month. The farm visit was beautiful, but the fruit itself was the real luxury.',
    monogram: 'SK',
  },
];

export const giftingHighlights = [
  {
    icon: Gift,
    title: 'For children',
    detail: 'A tree they can return to each summer.',
  },
  {
    icon: Gift,
    title: 'For clients',
    detail: 'A gift box that feels considered, not transactional.',
  },
];
