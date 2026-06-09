import { blogImages } from '@/data/images';

/**
 * News / blog posts. `slug` powers the dynamic news-details route.
 */
export const posts = [
  {
    slug: 'fresh-water-nigeria',
    title: 'How To Provide Fresh Water In Nigeria',
    category: 'Industrial',
    author: 'Salman Ahmed',
    date: 'June 2, 2024',
    image: blogImages[0],
    excerpt:
      'Exploring sustainable engineering approaches to deliver clean water to remote regions.',
  },
  {
    slug: 'modern-construction-trends',
    title: 'Modern Construction Trends In 2024',
    category: 'Construction',
    author: 'Hetmayar Rosa',
    date: 'May 18, 2024',
    image: blogImages[1],
    excerpt:
      'A look at the technologies and materials reshaping the construction industry.',
  },
  {
    slug: 'safety-first-on-site',
    title: 'Why Safety Comes First On Every Site',
    category: 'Safety',
    author: 'David Mitchell',
    date: 'April 29, 2024',
    image: blogImages[2],
    excerpt:
      'Our safety-first culture and the protocols that protect every worker on site.',
  },
  {
    slug: 'sustainable-industrial-design',
    title: 'Sustainable Industrial Design Practices',
    category: 'Industry',
    author: 'Selina Gomez',
    date: 'April 10, 2024',
    image: blogImages[3],
    excerpt:
      'How green engineering reduces cost and environmental impact for factories.',
  },
];
