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

function App() {
  return (
    <div className="relative min-h-screen font-sans selection:bg-primary/20">
      <ScrollToTop />
      <WelcomeBanner />
      <Navbar />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ProgramsSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <GallerySection />
        <ContactSection />
      </main>

      <Footer />
      <FloatingWhatsApp />
      <FloatingSketches />
    </div>
  );
}

export default App;
