import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import FloatingBubbles from './FloatingBubbles';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-6 lg:px-12 border-t-4 border-primary relative overflow-hidden">
      <FloatingBubbles />
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">

        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="bg-white text-primary p-2 rounded-xl">
              <img src="public/icon.png" alt="Logo" className="w-10 h-10 rounded-md" />
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">
              The Paatashala
            </span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            A premier play school where early education meets joyful discovery. We provide a safe, joyful, and stimulating environment focused on holistic development.
          </p>
          <div className="flex gap-4 pt-2">
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors duration-300">
              <Globe size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors duration-300">
              <Globe size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
          <ul className="space-y-3">
            {[
              { name: 'Home', to: '#home' },
              { name: 'About Us', to: '#about' },
              { name: 'Programs', to: '#programs' },
              { name: 'Testimonials', to: '#testimonials' },
              { name: 'Why Choose Us', to: '#why-us' },
              { name: 'Gallery', to: '#gallery' },
              { name: 'Contact Us', to: '#contact' }
            ].map((link) => (
              <li key={link.name}>
                <a href={link.to} className="text-sm hover:text-secondary transition-colors flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold text-white mb-6">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin size={20} className="text-secondary shrink-0 mt-0.5" />
              <span className="text-sm">Madeenaguda, Hyderabad, Telangana, India</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={20} className="text-secondary shrink-0" />
              <span className="text-sm">+91 9063551183 <br /> +91 9063551185</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={20} className="text-secondary shrink-0" />
              <span className="text-sm">info@thepaatashala.com</span>
            </li>
          </ul>
        </div>

        {/* Admissions */}
        <div>
          <h3 className="text-lg font-bold text-white mb-6">Admissions</h3>
          <p className="text-sm text-gray-400 mb-4">
            Admissions are open for the current academic year. Give your child the best start!
          </p>
          <a href="#contact" className="inline-block bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3 rounded-lg transition-colors text-sm shadow-lg shadow-primary/20">
            Apply Now
          </a>
        </div>

      </div>

      <div className="container mx-auto mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} The Paatashala Play School. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-gray-300">Privacy Policy</a>
          <a href="#" className="hover:text-gray-300">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
