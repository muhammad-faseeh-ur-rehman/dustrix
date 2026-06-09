/**
 * Global site configuration — brand info, contact details and social links.
 * Centralised so every component reads from a single source of truth.
 * Values mirror the original Dustrix template screenshots verbatim.
 */
export const siteConfig = {
  name: 'Dustrix',
  tagline: 'Construction & Industry',
  description:
    "Use Wix's Advanced Web Page Design Tools to Create Your Professional Site in an Instant! Experience Total Design Freedom and the Ability to Customize Your Site as You Wish! Social media compatible with design.",
  logoText: 'Dustrix',
  contact: {
    phone: '(+1) 555 234-8765',
    phoneHref: 'tel:+15552348765',
    phoneLabel: 'Call Us Now',
    email: 'info@webexample.com',
    emailHref: 'mailto:info@webexample.com',
    emailLabel: 'Mail Us Now',
    address: 'B2, Miranda City Tower, New York, US',
    footerPhone: '908 9098 987 98',
    hours: 'Mon - Sat 8.00 - 18.00',
  },
  social: [
    { label: 'Facebook', icon: 'FaFacebookF', href: 'https://facebook.com' },
    { label: 'Twitter', icon: 'FaTwitter', href: 'https://twitter.com' },
    { label: 'Instagram', icon: 'FaInstagram', href: 'https://instagram.com' },
    { label: 'Youtube', icon: 'FaYoutube', href: 'https://youtube.com' },
  ],
};
