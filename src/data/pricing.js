/**
 * Pricing plans for the home "Price & Plans" section. The middle plan is
 * `featured` (rendered dark and slightly taller) and carries an extra perk,
 * mirroring the original Dustrix layout.
 */
const baseFeatures = [
  'Objectively integrate competencies',
  'Process-centric communities',
  'Emasculate holistic innovation',
  'Incubate intuitive opportunities',
];

export const pricingPlans = [
  {
    name: 'Basic Plan',
    subtitle: 'Basic Plan',
    price: '590',
    cents: '00',
    featured: false,
    features: baseFeatures,
  },
  {
    name: 'Basic Plan',
    subtitle: 'Basic Plan',
    price: '590',
    cents: '00',
    featured: true,
    features: [...baseFeatures, '24/7 Online Support'],
  },
  {
    name: 'Basic Plan',
    subtitle: 'Basic Plan',
    price: '590',
    cents: '00',
    featured: false,
    features: baseFeatures,
  },
];
