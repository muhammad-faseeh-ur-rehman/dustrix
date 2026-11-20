import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AppRoutes from '@/routes/AppRoutes'
export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 80,
      easing: 'ease-out-cubic',
    });
  }, []);

  return <AppRoutes />;
}
