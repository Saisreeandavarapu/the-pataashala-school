import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

import img1 from '../assets/image copy 13.png';
import img2 from '../assets/image copy 11.png';
import img3 from '../assets/image copy 12.png';
import img4 from '../assets/image copy 14.png';
import img5 from '../assets/image copy 15.png';

const slides = [
  {
    id: 1,
    image: img1,
    title: 'Welcome to The Paatashala',
    subtitle: 'Where Early Education Meets Joyful Discovery',
  },
  {
    id: 2,
    image: img2,
    title: 'Holistic Development',
    subtitle: 'Nurturing minds, building healthy habits, and igniting curiosity',
  },
  {
    id: 3,
    image: img3,
    title: 'Safe & Nurturing Campus',
    subtitle: '5000+ Sq Ft of air-conditioned, sensory-driven learning space',
  },
  {
    id: 4,
    image: img4,
    title: 'Welcome to The Paatashala',
    subtitle: 'Where Early Education Meets Joyful Discovery',
  },
  {
    id: 5,
    image: img5,
    title: 'Holistic Development',
    subtitle: 'Nurturing minds, building healthy habits, and igniting curiosity',
  },

];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // Changed to 4000ms for faster sliding but still readable
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-gray-900 group">

      {/* Admission Banner */}
      <div className="absolute top-24 left-0 right-0 z-30 flex justify-center px-4 w-full">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, type: 'spring' }}
          className="bg-secondary/90 backdrop-blur-md px-6 py-2 rounded-full border border-secondary/50 shadow-xl shadow-secondary/20 flex items-center gap-2 cursor-pointer hover:bg-secondary transition-colors"
        >
          <Sparkles size={16} className="text-white animate-pulse" />
          <span className="text-white font-bold text-xs tracking-wide">ADMISSIONS OPEN FOR 2026</span>
        </motion.div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-start md:justify-center px-6 lg:px-24 container mx-auto ">
            <div className="max-w-3xl text-left md:text-center  md:mt-0">
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-4xl md:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight drop-shadow-xl"
              >
                {slides[currentSlide].title}
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-lg md:text-2xl text-gray-200 mb-10 font-medium drop-shadow-md"
              >
                {slides[currentSlide].subtitle}
              </motion.p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 md:justify-center"
              >
                <a href="#about" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-primary/30 flex items-center justify-center gap-2 hover:-translate-y-1 transition-all">
                  Discover More <ArrowRight size={20} />
                </a>
                <a href="#contact" className="glass hover:bg-white/90 hover:text-gray-900 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl flex items-center justify-center gap-2 hover:-translate-y-1 transition-all">
                  Enroll Your Child
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slider Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass flex items-center justify-center text-white opacity-0 group-hover:opacity-100 hover:bg-primary transition-all duration-300 z-40 hidden md:flex"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass flex items-center justify-center text-white opacity-0 group-hover:opacity-100 hover:bg-primary transition-all duration-300 z-40 hidden md:flex"
      >
        <ChevronRight size={24} />
      </button>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-70 z-30"
      >
        <span className="text-white text-xs font-semibold tracking-widest mb-2 uppercase">Scroll</span>
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-white rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
