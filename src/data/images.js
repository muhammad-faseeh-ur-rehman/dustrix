/**
 * Centralised industrial & construction imagery (Unsplash).
 *
 * Every photographic asset on the site is sourced from here so the whole
 * look can be re-themed from a single file. All URLs share identical
 * transform params (`auto=format&fit=crop&q=80`) for a consistent feel.
 */
const photo = (id, w, h) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

/* Wide, dramatic shots for the home hero slider. */
export const heroSlides = [
  photo('1503387762-592deb58ef4e', 1600, 900), // construction cranes at dusk
  photo('1504917595217-d4dc5ebe6122', 1600, 900), // welder with sparks
  photo('1565008447742-97f6f38c985c', 1600, 900), // warehouse / logistics
];

/* Construction-site backdrop used behind inner-page banners. */
export const pageBanner = photo('1503387762-592deb58ef4e', 1600, 500);

/* About section — a tall primary image with a smaller overlapping inset. */
export const aboutImages = {
  primary: photo('1565514020179-026b92b84bb6', 700, 600), // welding sparks
  secondary: photo('1565008447742-97f6f38c985c', 400, 400), // worker
};

/* Full-width parallax/overlay backgrounds. */
export const counterBg = photo('1504307651254-35680f356dfd', 1600, 600);
export const ctaBg = photo('1503387762-592deb58ef4e', 1600, 500);
export const skillBg = photo('1581092918056-0c4c3acd3789', 1600, 700);
export const skillSide = photo('1581094288338-2314dddb7ece', 700, 500);
export const faqImage = photo('1541888946425-d81bb19240f5', 700, 450);

/* Approach cards — Vision / Mission / Approach. */
export const approachImages = [
  photo('1504917595217-d4dc5ebe6122', 600, 700), // welding
  photo('1581092160562-40aa08e78837', 600, 700), // engineer with tablet
  photo('1565008447742-97f6f38c985c', 600, 700), // warehouse worker
];

/* Team / staff portraits. */
export const teamImages = [
  photo('1507003211169-0a1dd7228f2d', 500, 600),
  photo('1500648767791-00dcc994a43e', 500, 600),
  photo('1472099645785-5658abf4ff4e', 500, 600),
  photo('1519085360753-af0119f7cbe7', 500, 600),
];

/* Small round avatars for testimonials. */
export const avatarImages = [
  photo('1500648767791-00dcc994a43e', 120, 120),
  photo('1438761681033-6461ffad8d80', 120, 120),
  photo('1507003211169-0a1dd7228f2d', 120, 120),
];

/* Portfolio / case-study imagery. */
export const projectImages = [
  photo('1503387762-592deb58ef4e', 800, 600), // construction site
  photo('1487958449943-2429e8be8625', 800, 600), // building upward
  photo('1486406146926-c627a92ad1ab', 800, 600), // glass facade
  photo('1531834685032-c34bf0d84c77', 800, 600), // modern architecture
  photo('1564013799919-ab600027ffc6', 800, 600), // modern house
  photo('1541888946425-d81bb19240f5', 800, 600), // worker silhouette
];

/* Blog / news thumbnails. */
export const blogImages = [
  photo('1504917595217-d4dc5ebe6122', 800, 500),
  photo('1581094288338-2314dddb7ece', 800, 500),
  photo('1565008447742-97f6f38c985c', 800, 500),
  photo('1541888946425-d81bb19240f5', 800, 500),
];

/* Home (variant one) section imagery. */
export const homeHeroBg = photo('1513828583688-c52646db42da', 1600, 760); // industrial plant / pipes
export const numberFill = photo('1513828583688-c52646db42da', 700, 500); // fills the "30"
export const caseStudyImage = photo('1581092160562-40aa08e78837', 700, 620); // workers + tablet
export const newsletterImage = photo('1581092918056-0c4c3acd3789', 700, 520); // workers
export const blogInsights = [
  photo('1581092918056-0c4c3acd3789', 800, 600),
  photo('1504917595217-d4dc5ebe6122', 800, 600),
  photo('1565008447742-97f6f38c985c', 800, 600),
];

/* Solid world-map silhouette, masked over a dot pattern to render the dotted
 * continents behind the FAQ heading. */
export const worldMap =
  'https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg';

/* Client / sponsor wordmarks — rendered as styled text, not images, so the
 * strip reads like the original grayscale logo row. */
export const sponsorNames = [
  'LIBERTY',
  'Centrick',
  "CARR'S",
  'Boss',
  'Mayhew',
  'National Express',
];
