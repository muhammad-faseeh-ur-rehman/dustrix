/**
 * Services offered by the company. Each entry powers both the services grid
 * and the dynamic service-details page (matched by `slug`).
 */
const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.';

export const services = [
  {
    slug: 'metal-forming',
    title: 'Metal Forming',
    icon: 'GiMetalBar',
    excerpt: lorem,
    image:
      'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'manufacturing',
    title: 'Manufacturing',
    icon: 'FaGears',
    excerpt: lorem,
    image:
      'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'welding-laser',
    title: 'Welding & Laser',
    icon: 'GiAnvil',
    excerpt: lorem,
    image:
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'construction-management',
    title: 'Construction Management',
    icon: 'FaHelmetSafety',
    excerpt: lorem,
    image:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'apartment-design',
    title: 'Apartment Design',
    icon: 'GiOfficeChair',
    excerpt: lorem,
    image:
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'architecture-building',
    title: 'Architecture & Building',
    icon: 'GiBrickWall',
    excerpt: lorem,
    image:
      'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80',
  },
];

/**
 * Reusable rich-content blocks rendered on the service-details page.
 */
export const serviceDetailContent = {
  overview:
    'Our team delivers end-to-end industrial solutions, combining decades of engineering experience with state-of-the-art equipment. From planning to execution, we ensure every project meets the highest standards of safety, quality and efficiency.',
  benefits: [
    'Certified and experienced engineering team',
    'Modern equipment and quality materials',
    '24/7 dedicated project support',
    'On-time delivery and transparent pricing',
  ],
  process: [
    {
      step: '01',
      title: 'Consultation',
      text: 'We assess your requirements and define a clear project scope.',
    },
    {
      step: '02',
      title: 'Planning',
      text: 'Detailed engineering drawings, timeline and cost estimation.',
    },
    {
      step: '03',
      title: 'Execution',
      text: 'Skilled crews deliver the build with continuous quality checks.',
    },
    {
      step: '04',
      title: 'Handover',
      text: 'Final inspection, documentation and after-service support.',
    },
  ],
};
