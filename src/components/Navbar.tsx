import { useState, useEffect } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  const navLinks = [
    { name: 'Home', to: '#home' },
    { name: 'About Us', to: '#about' },
    { name: 'Programs', to: '#programs' },
    { name: 'Why Us', to: '#why-us' },
    { name: 'Testimonials', to: '#testimonials' },
    { name: 'Gallery', to: '#gallery' },
    { name: 'Contact', to: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-2 sm:py-3 shadow-md' : 'bg-transparent py-3 sm:py-5'
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 flex justify-between items-center">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 z-50">
          <div className="bg-primary text-white p-1.5 sm:p-2 rounded-lg sm:rounded-xl shadow-lg shadow-primary/30">
            <GraduationCap size={22} className="sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
          </div>
          <span className={`text-lg sm:text-xl lg:text-2xl font-bold tracking-tight ${isScrolled ? 'text-gray-900' : 'text-gray-900 drop-shadow-sm'
            }`}>
            The <span className="text-primary">Paatashala</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.to}
              className={`text-sm lg:text-base font-semibold transition-colors hover:text-secondary ${isScrolled
                  ? 'text-gray-700'
                  : 'text-gray-800'
                }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-secondary text-center text-white px-4 lg:px-5 py-2 lg:py-2.5 rounded-full text-sm lg:text-base font-bold shadow-lg shadow-secondary/30 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          >
            Admissions Open
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-50 text-gray-900 bg-white/60 p-2 sm:p-2.5 rounded-full backdrop-blur-md"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-gray-100 px-4 py-5 flex flex-col gap-3 md:hidden"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base sm:text-lg font-medium border-b border-gray-100 pb-2 hover:text-primary transition-colors text-gray-800"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-primary text-white text-center px-5 py-3 rounded-lg sm:rounded-xl font-bold mt-2 text-sm sm:text-base"
              >
                Enroll Now
              </a>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </header>
  );
};

export default Navbar;