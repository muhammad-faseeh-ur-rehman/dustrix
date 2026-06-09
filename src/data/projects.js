import { projectImages } from '@/data/images';

/**
 * Portfolio / case-study projects. Categories drive the filter on the
 * projects page; `slug` powers the dynamic project-details route.
 */
export const projectCategories = [
  'All',
  'Industrial',
  'Business',
  'Charity',
  'Education',
];

export const projects = [
  {
    slug: 'rosali-office-design',
    title: 'Rosali Office Design',
    category: 'Business',
    client: 'Rosali Group',
    location: 'Manchester, Kentucky',
    date: 'March 2024',
    image: projectImages[0],
    excerpt:
      'A complete office construction and interior design project delivered on schedule.',
  },
  {
    slug: 'global-automotive',
    title: 'Global Automotive',
    category: 'Industrial',
    client: 'Global Motors Ltd',
    location: 'Detroit, Michigan',
    date: 'January 2024',
    image: projectImages[1],
    excerpt:
      'Industrial plant fabrication and structural welding for an automotive facility.',
  },
  {
    slug: 'great-wall-support',
    title: 'Great Wall Support',
    category: 'Charity',
    client: 'Hope Foundation',
    location: 'Austin, Texas',
    date: 'November 2023',
    image: projectImages[2],
    excerpt:
      'Community building support project providing safe public infrastructure.',
  },
  {
    slug: 'metal-forming-unit',
    title: 'Metal Forming Unit',
    category: 'Industrial',
    client: 'SteelWorks Inc',
    location: 'Pittsburgh, PA',
    date: 'September 2023',
    image: projectImages[3],
    excerpt:
      'Heavy-duty metal forming and fabrication unit built to exact specifications.',
  },
  {
    slug: 'campus-renovation',
    title: 'Campus Renovation',
    category: 'Education',
    client: 'Riverside University',
    location: 'Portland, Oregon',
    date: 'July 2023',
    image: projectImages[4],
    excerpt:
      'Full renovation of a university science block while keeping the campus running.',
  },
  {
    slug: 'corporate-tower',
    title: 'Corporate Tower',
    category: 'Business',
    client: 'Apex Holdings',
    location: 'Chicago, Illinois',
    date: 'May 2023',
    image: projectImages[5],
    excerpt:
      'High-rise corporate tower construction with modern sustainable systems.',
  },
];
