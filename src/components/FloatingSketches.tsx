import { motion } from 'framer-motion';

const FloatingSketches = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      
      {/* Sun Sketch */}
      <motion.div
        className="absolute top-[15%] left-[5%] md:left-[10%] opacity-80"
        animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="20" stroke="#FF9800" strokeWidth="4" strokeLinecap="round" strokeDasharray="4 8"/>
          <path d="M50 15V25M50 75V85M15 50H25M75 50H85M25 25L32 32M75 75L68 68M25 75L32 68M75 25L68 32" stroke="#FF9800" strokeWidth="4" strokeLinecap="round"/>
        </svg>
      </motion.div>

      {/* Purple Dot 1 */}
      <motion.div
        className="absolute top-[30%] left-[15%] hidden md:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <div className="w-5 h-5 rounded-full bg-[#673AB7]"></div>
      </motion.div>

      {/* Purple Dot 2 */}
      <motion.div
        className="absolute top-[32%] left-[25%] hidden md:block"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <div className="w-3 h-3 rounded-full bg-[#673AB7]"></div>
      </motion.div>

      {/* Hearts */}
      <motion.div
        className="absolute top-[40%] left-[40%] opacity-90 hidden md:block"
        animate={{ y: [0, -15, 0], rotate: [-10, 10, -10] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="40" height="80" viewBox="0 0 50 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25 35C25 35 15 25 25 15C35 25 25 35 25 35Z" stroke="#FF9800" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20 70C20 70 10 60 20 50C30 60 20 70 20 70Z" stroke="#FF9800" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>

      {/* Left Arrow */}
      <motion.div
        className="absolute bottom-[30%] left-[10%] opacity-80"
        animate={{ x: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="60" height="40" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 5L5 20L20 35M5 20H55" stroke="#673AB7" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>

      {/* Kite Sketch */}
      <motion.div
        className="absolute bottom-[5%] left-[30%] opacity-90"
        animate={{ y: [0, -12, 0], rotateZ: [0, -5, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 10L20 40L50 90L80 40L50 10Z" stroke="#673AB7" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20 40H80M50 10V90" stroke="#673AB7" strokeWidth="5" strokeLinecap="round"/>
        </svg>
      </motion.div>

      {/* Right Arrow */}
      <motion.div
        className="absolute bottom-[25%] right-[10%] opacity-80 hidden md:block"
        animate={{ x: [0, 10, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <svg width="60" height="40" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40 5L55 20L40 35M5 20H55" stroke="#673AB7" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>

      {/* Rocket Sketch */}
      <motion.div
        className="absolute top-[20%] right-[10%] opacity-90"
        animate={{ y: [0, -15, 0], x: [0, 5, 0], rotate: [0, 3, -3, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
      >
        <svg width="120" height="120" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Rocket Body */}
          <path d="M110 30C110 30 80 20 60 40C40 60 40 90 40 90C40 90 60 100 80 80C100 60 110 30 110 30Z" stroke="#673AB7" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
          {/* Rocket Window */}
          <circle cx="75" cy="65" r="10" stroke="#673AB7" strokeWidth="6"/>
          {/* Rocket Find */}
          <path d="M50 80L30 100L40 90" stroke="#673AB7" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M70 40L90 20L80 30" stroke="#673AB7" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
          {/* Rocket Flames */}
          <path d="M45 85C45 85 20 105 30 115C40 125 55 100 55 100" stroke="#FF9800" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>

    </div>
  );
};

export default FloatingSketches;
