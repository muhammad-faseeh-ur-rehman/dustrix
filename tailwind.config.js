/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        lg: '1.5rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1200px',
        '2xl': '1320px',
      },
    },
    extend: {
      colors: {
        // Primary brand = golden yellow (used on buttons & accents)
        primary: {
          DEFAULT: '#febc35',
          dark: '#f0a500',
          light: '#ffd039',
        },
        // Accent = the same golden amber as primary (icons, highlights,
        // eyebrows). Kept as a distinct token so existing classes resolve,
        // but tuned yellow to match the Dustrix theme — no orange anywhere.
        accent: {
          DEFAULT: '#febc35',
          dark: '#f0a500',
        },
        // Dark sections / headings = navy blue
        secondary: {
          DEFAULT: '#001659',
          light: '#001248',
        },
        heading: '#001659',
        body: '#777777',
        muted: '#f6f6f6',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 40px rgba(0, 0, 0, 0.08)',
        nav: '0 2px 20px rgba(0, 0, 0, 0.06)',
      },
      backgroundImage: {
        'hero-overlay':
          'linear-gradient(90deg, rgba(0,18,72,0.88) 0%, rgba(0,18,72,0.55) 60%, rgba(0,18,72,0.25) 100%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease forwards',
      },
    },
  },
  plugins: [],
};
