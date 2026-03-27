
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import TestimonialsSection from './components/TestimonialsSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import WelcomeBanner from './components/WelcomeBanner';
import ProgramsSection from './components/ProgramsSection';
import FloatingSketches from './components/FloatingSketches';
import ScrollToTop from './components/ScrollToTop';

// Combine some sections for the homepage
const Home = () => (
  <>
    <HeroSection />
    <ProgramsSection />
    <WhyChooseUsSection />
    <TestimonialsSection />
  </>
);

function App() {
  return (
    <div className="relative min-h-screen font-sans selection:bg-primary/20">
      <ScrollToTop />
      <FloatingSketches />
      <WelcomeBanner />
      <Navbar />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/programs" element={<ProgramsSection />} />
          <Route path="/testimonials" element={<TestimonialsSection />} />
          <Route path="/why-us" element={<WhyChooseUsSection />} />
          <Route path="/gallery" element={<GallerySection />} />
          <Route path="/contact" element={<ContactSection />} />
        </Routes>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
