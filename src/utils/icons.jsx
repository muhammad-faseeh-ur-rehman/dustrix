/**
 * Central icon registry. Data files reference icons by string name; this
 * resolver maps those names to react-icons components so the data layer
 * stays free of JSX imports.
 */
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
  FaCheck,
  FaQuoteLeft,
  FaStar,
  FaPlay,
  FaChevronDown,
  FaBars,
  FaTimes,
  FaAngleRight,
  FaAngleUp,
  FaArrowUp,
  FaSearch,
  FaThLarge,
  FaYoutube,
  FaPaperPlane,
  FaRegCalendarAlt,
  FaArrowLeft,
  FaTools,
  FaCogs,
  FaBrain,
  FaLightbulb,
  FaUser,
} from 'react-icons/fa';
import {
  FaHelmetSafety,
  FaPeopleGroup,
  FaGears,
} from 'react-icons/fa6';
import {
  GiAnvil,
  GiMetalBar,
  GiOfficeChair,
  GiStairs,
  GiHouse,
  GiBrickWall,
} from 'react-icons/gi';

const registry = {
  // Social & UI
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
  FaAngleRight,
  FaCheck,
  FaQuoteLeft,
  FaStar,
  FaPlay,
  FaChevronDown,
  FaBars,
  FaTimes,
  FaAngleUp,
  FaArrowUp,
  FaSearch,
  FaThLarge,
  FaYoutube,
  FaPaperPlane,
  FaRegCalendarAlt,
  FaArrowLeft,
  FaTools,
  FaCogs,
  FaBrain,
  FaLightbulb,
  FaUser,
  // Feature icons
  FaHelmetSafety,
  FaPeopleGroup,
  FaGears,
  // Service icons
  GiAnvil,
  GiMetalBar,
  GiOfficeChair,
  GiStairs,
  GiHouse,
  GiBrickWall,
};

/**
 * Render an icon by its registry name.
 * @param {string} name - key in the icon registry
 * @param {object} props - props forwarded to the icon component
 */
export function Icon({ name, ...props }) {
  const Component = registry[name];
  if (!Component) return null;
  return <Component {...props} />;
}
