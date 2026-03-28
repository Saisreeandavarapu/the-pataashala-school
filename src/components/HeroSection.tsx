import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
    title: 'Creative Learning',
    subtitle: 'Encouraging imagination through play and exploration',
  },
  {
    id: 5,
    image: img5,
    title: 'Future Ready Kids',
    subtitle: 'Building confidence, communication, and life skills',
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % slides.length);

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative w-full h-screen overflow-hidden group">

      {/* 🔥 Admission Banner */}
      <div className="absolute top-24 left-0 right-0 z-30 flex justify-center px-4">
        <div className="bg-orange-500/90 backdrop-blur-md px-6 py-2 rounded-full shadow-lg flex items-center gap-2">
          <Sparkles size={16} className="text-white animate-pulse" />
          <span className="text-white font-bold text-xs tracking-wide">
            ADMISSIONS OPEN FOR 2026
          </span>
        </div>
      </div>

      {/* 🔥 FIXED SLIDER (NO WHITE FLASH) */}
      <div className="absolute inset-0">

        {slides.map((slide, index) => (
          <motion.div
            key={slide.id}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >

            {/* Image */}
            <div
              className="absolute inset-0 bg-cover bg-center brightness-110 contrast-110 saturate-110"
              style={{ backgroundImage: `url(${slide.image})` }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            {/* Color Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-orange-400/20 mix-blend-overlay" />

            {/* Content (ONLY ACTIVE SLIDE) */}
            {index === currentSlide && (
              <div className="absolute inset-0 flex items-center justify-center px-6 lg:px-20">
                <div className="max-w-4xl text-center text-white">

                  <h1 className="text-4xl md:text-7xl font-extrabold mb-6">
                    {slide.title}
                  </h1>

                  <p className="text-lg md:text-2xl mb-10">
                    {slide.subtitle}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">

                    {/* Button 1 */}
                    <a
                      href="#about"
                      className="bg-purple-600 hover:bg-purple-700 
    px-5 py-3 sm:px-8 sm:py-4 
    text-sm sm:text-base 
    rounded-lg sm:rounded-xl 
    font-semibold 
    flex items-center justify-center gap-2 
    transition"
                    >
                      Discover More <ArrowRight size={18} className="sm:w-5 sm:h-5" />
                    </a>

                    {/* Button 2 */}
                    <a
                      href="#contact"
                      className="bg-white/20 backdrop-blur 
    px-5 py-3 sm:px-8 sm:py-4 
    text-sm sm:text-base 
    rounded-lg sm:rounded-xl 
    font-semibold 
    border border-white/30 
    hover:bg-white hover:text-black 
    transition"
                    >
                      Enroll Your Child
                    </a>

                  </div>

                </div>
              </div>
            )}

          </motion.div>
        ))}

      </div>

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur text-white hidden md:flex items-center justify-center"
      >
        <ChevronLeft size={22} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur text-white hidden md:flex items-center justify-center"
      >
        <ChevronRight size={22} />
      </button>

    </section>
  );
};

export default HeroSection;