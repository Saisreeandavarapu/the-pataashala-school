import { motion } from 'framer-motion';

const FloatingSketches = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[40] overflow-hidden select-none">
      
      {/* --- LEFT SIDE SKETCHES --- */}

      {/* Sun Sketch - Top Left */}
      <motion.div
        className="absolute top-[8%] left-[2%] md:left-[5%] opacity-30 md:opacity-50"
        animate={{ 
          y: [0, -15, 0], 
          rotate: [0, 10, -10, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-[60px] md:h-[60px]">
          <circle cx="50" cy="50" r="20" stroke="#FF9800" strokeWidth="4" strokeLinecap="round" strokeDasharray="4 8"/>
          <path d="M50 15V25M50 75V85M15 50H25M75 50H85M25 25L32 32M75 75L68 68M25 75L32 68M75 25L68 32" stroke="#FF9800" strokeWidth="4" strokeLinecap="round"/>
        </svg>
      </motion.div>

      {/* Hearts - Upper Middle Left */}
      <motion.div
        className="absolute top-[25%] left-[1%] md:left-[3%] opacity-30 md:opacity-50"
        animate={{ 
          y: [0, -20, 0], 
          rotate: [-15, 15, -15],
          scale: [0.9, 1, 0.9]
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <svg width="30" height="60" viewBox="0 0 50 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-[40px] md:h-[80px]">
          <path d="M25 35C25 35 15 25 25 15C35 25 25 35 25 35Z" stroke="#FF9800" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20 70C20 70 10 60 20 50C30 60 20 70 20 70Z" stroke="#FF9800" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>

      {/* Pencil Sketch - Middle Left */}
      <motion.div
        className="absolute top-[45%] left-[2%] opacity-20 md:opacity-40 hidden lg:block"
        animate={{ rotate: [0, 5, -5, 0], x: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="50" height="50" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 80L30 50L80 20L90 30L60 80L20 80Z" stroke="#673AB7" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M70 30L80 40" stroke="#673AB7" strokeWidth="4" strokeLinecap="round"/>
        </svg>
      </motion.div>

      {/* Left Arrow - Bottom Left */}
      <motion.div
        className="absolute bottom-[25%] left-[2%] md:left-[4%] opacity-20 md:opacity-40"
        animate={{ x: [0, -15, 0], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="40" height="30" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-[50px] md:h-[35px]">
          <path d="M20 5L5 20L20 35M5 20H55" stroke="#673AB7" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>

      {/* Book Sketch - Bottom Left */}
      <motion.div
        className="absolute bottom-[10%] left-[3%] md:left-[6%] opacity-30 md:opacity-50 hidden sm:block"
        animate={{ y: [0, 10, 0], rotate: [0, -3, 3, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-[50px] md:h-[50px]">
          <path d="M20 20H80V80H20V20Z" stroke="#FF9800" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20 40H80M20 60H80" stroke="#FF9800" strokeWidth="4" strokeLinecap="round"/>
        </svg>
      </motion.div>


      {/* --- RIGHT SIDE SKETCHES --- */}

      {/* Rocket Sketch - Top Right */}
      <motion.div
        className="absolute top-[10%] right-[2%] md:right-[5%] opacity-30 md:opacity-50"
        animate={{ 
          y: [0, -25, 0], 
          x: [0, 15, 0], 
          rotate: [0, 8, -4, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="60" height="60" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-[100px] md:h-[100px]">
          <path d="M110 30C110 30 80 20 60 40C40 60 40 90 40 90C40 90 60 100 80 80C100 60 110 30 110 30Z" stroke="#673AB7" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="75" cy="65" r="10" stroke="#673AB7" strokeWidth="5"/>
          <path d="M50 80L30 100L40 90" stroke="#673AB7" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M70 40L90 20L80 30" stroke="#673AB7" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M45 85C45 85 20 105 30 115C40 125 55 100 55 100" stroke="#FF9800" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>

      {/* Cloud Sketch - Upper Middle Right */}
      <motion.div
        className="absolute top-[30%] right-[3%] opacity-20 md:opacity-40 hidden sm:block"
        animate={{ x: [0, 15, 0], y: [0, -5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="50" height="40" viewBox="0 0 100 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-[70px] md:h-[50px]">
          <path d="M20 50C10 50 5 40 10 30C15 20 25 10 40 15C50 10 65 15 75 25C85 20 95 30 90 45C85 60 70 65 50 60C35 65 20 60 20 50Z" stroke="#673AB7" strokeWidth="4" strokeLinecap="round" strokeDasharray="5 5" strokeLinejoin="round"/>
        </svg>
      </motion.div>

      {/* NEW: Small Balloon Sketch - Mid Left-ish */}
      <motion.div
        className="absolute top-[65%] left-[8%] opacity-20 md:opacity-30 hidden lg:block"
        animate={{ y: [0, -30, 0], x: [0, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="30" height="50" viewBox="0 0 60 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="30" r="25" stroke="#FF9800" strokeWidth="4"/>
          <path d="M30 55C30 55 20 70 30 95" stroke="#FF9800" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      </motion.div>

      {/* NEW: Small Plane Sketch - Top Center-ish */}
      <motion.div
        className="absolute top-[15%] left-[45%] opacity-15 md:opacity-25 hidden xl:block"
        animate={{ x: [0, 40, 0], y: [0, -10, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="60" height="30" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 30L110 30M110 30L90 15M110 30L90 45M30 30L45 10M30 30L45 50" stroke="#673AB7" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>

      {/* Star Sketch - Middle Right */}
      <motion.div
        className="absolute top-[55%] right-[2%] md:right-[4%] opacity-30 md:opacity-50"
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      >
        <svg width="30" height="30" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-[45px] md:h-[45px]">
          <path d="M50 0L61.2 38.8H100L68.8 61.2L80 100L50 77.6L20 100L31.2 61.2L0 38.8H38.8L50 0Z" stroke="#FF9800" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>

      {/* Kite Sketch - Bottom Right-ish */}
      <motion.div
        className="absolute bottom-[15%] right-[1%] md:right-[6%] opacity-30 md:opacity-60"
        animate={{ 
          y: [0, -30, 0], 
          rotateZ: [0, -10, 10, 0],
          x: [0, 15, 0]
        }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="50" height="50" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-[70px] md:h-[70px]">
          <path d="M50 10L20 40L50 90L80 40L50 10Z" stroke="#673AB7" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20 40H80M50 10V90" stroke="#673AB7" strokeWidth="5" strokeLinecap="round"/>
        </svg>
      </motion.div>

      {/* Right Arrow - Bottom Right */}
      <motion.div
        className="absolute bottom-[28%] right-[2%] md:right-[5%] opacity-20 md:opacity-40 hidden sm:block"
        animate={{ x: [0, 15, 0], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <svg width="40" height="30" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-[50px] md:h-[35px]">
          <path d="M40 5L55 20L40 35M5 20H55" stroke="#673AB7" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>

    </div>
  );
};

export default FloatingSketches;
