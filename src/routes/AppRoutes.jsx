import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import {
  Home,
  HomeTwo,
  HomeThree,
  About,
  Services,
  ServiceDetails,
  Projects,
  ProjectDetails,
  Team,
  News,
  NewsDetails,
  Faq,
  Contact,
  NotFound,
} from '@/pages';

/**
 * Application route table. All pages render inside the shared Layout.
 */
export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/home-2" element={<HomeTwo />} />
        <Route path="/home-3" element={<HomeThree />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetails />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetails />} />
        <Route path="/team" element={<Team />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:slug" element={<NewsDetails />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
