
import { MessageCircleHeart } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href="https://wa.me/919063551183"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center group cursor-pointer"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="bg-white px-4 py-2 rounded-l-full shadow-lg border border-gray-100 flex items-center text-sm font-semibold text-gray-700 translate-x-4 opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 hidden md:flex transition-all duration-300 ease-out z-10">
        Drop a message
      </div>
      
      <div className="bg-gradient-primary p-4 rounded-full shadow-xl shadow-primary/30 text-white relative z-20 overflow-hidden">
        {/* Pulse effect */}
        <div className="absolute inset-0 bg-white/20 animate-ping rounded-full" />
        
        {/* Custom Icon instead of typical WhatsApp */}
        <MessageCircleHeart size={28} className="relative z-10" />
      </div>
      
      {/* Mobile visible text tooltip positioned absolutely */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-md shadow-lg font-medium whitespace-nowrap block md:hidden opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Drop a message
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45" />
      </div>
    </motion.a>
  );
};

export default FloatingWhatsApp;
