/**
 * Primary navigation menu. `children` renders a dropdown.
 */
export const navigation = [
  {
    label: 'Home',
    path: '/',
    children: [
      { label: 'Home One', path: '/' },
      { label: 'Home Two', path: '/home-2' },
      { label: 'Home Three', path: '/home-3' },
    ],
  },
  { label: 'About', path: '/about' },
  {
    label: 'Pages',
    path: '#',
    children: [
      { label: 'Projects', path: '/projects' },
      { label: 'Project Details', path: '/projects/rosali-office-design' },
      { label: 'Our Team', path: '/team' },
      { label: 'FAQ', path: '/faq' },
    ],
  },
  {
    label: 'Services',
    path: '/services',
    children: [
      { label: 'Services', path: '/services' },
      { label: 'Service Details', path: '/services/welding-laser' },
    ],
  },
  {
    label: 'News',
    path: '/news',
    children: [
      { label: 'News', path: '/news' },
      { label: 'News Details', path: '/news/fresh-water-nigeria' },
    ],
  },
  { label: 'Contact', path: '/contact' },
];

export const languages = ['English', 'Bangla', 'Hindi', 'France'];
