
import { motion } from 'framer-motion';

const FloatingBubbles = () => {
  // Generate random bubbles
  const bubbles = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    size: Math.random() * 60 + 20, // 20px - 80px
    x: Math.random() * 100, // 0 - 100vw
    y: Math.random() * 100 + 100, // start below screen
    duration: Math.random() * 10 + 10, // 10s - 20s
    delay: Math.random() * 10,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          initial={{ 
            opacity: 0, 
            y: `120vh`, 
            x: `${bubble.x}vw`,
            scale: 0
          }}
          animate={{ 
            opacity: [0, 0.7, 0.9, 0], 
            y: `-20vh`,
            x: `${bubble.x + (Math.random() * 20 - 10)}vw`,
            scale: [0.5, 1, 1.2, 0.8]
          }}
          transition={{
            duration: bubble.duration,
            repeat: Infinity,
            delay: bubble.delay,
            ease: "linear",
          }}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: bubble.size,
            height: bubble.size,
            background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.1) 40%, rgba(100, 200, 255, 0.2) 60%, rgba(200, 100, 255, 0.4) 100%)',
            boxShadow: 'inset 0 0 20px rgba(255, 255, 255, 0.5), inset 10px 0 40px rgba(255, 0, 255, 0.2), inset -10px 0 40px rgba(0, 255, 255, 0.2), 0 0 10px rgba(255, 255, 255, 0.3)',
            border: '1px solid rgba(255, 255, 255, 0.4)',
            backdropFilter: 'blur(2px)'
          }}
        >
          {/* Highlight effect for 3D look */}
          <div className="absolute top-[15%] left-[20%] w-[25%] h-[25%] bg-white rounded-full opacity-60 blur-[1px] transform -rotate-45"></div>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingBubbles;
