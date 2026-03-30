import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Jhansi Lakshmi',
    role: 'Parent',
    text: 'Very happy for my child she improved well n now she is eating fruits n food',
    image: 'https://ui-avatars.com/api/?name=Jhansi+Lakshmi&background=random'
  },
  {
    id: 2,
    name: 'gopi krishna B',
    role: 'Parent',
    text: 'Nice ambience nice receiving staff are very efficient',
    image: 'https://ui-avatars.com/api/?name=gopi+krishna+B&background=random'
  },
  {
    id: 3,
    name: 'Joshua Johnson',
    role: 'Parent',
    text: 'All amenities are excellent and comfortable ac class rooms.',
    image: 'https://ui-avatars.com/api/?name=Joshua+Johnson&background=random'
  },
  {
    id: 4,
    name: 'Priya Sharma',
    role: 'Parent',
    text: 'My son loves the interactive play sessions. The teachers are very caring and attentive.',
    image: 'https://ui-avatars.com/api/?name=Priya+Sharma&background=random'
  },
  {
    id: 5,
    name: 'Rahul Verma',
    role: 'Parent',
    text: 'Excellent facilities and a very safe environment for kids. Highly recommended!',
    image: 'https://ui-avatars.com/api/?name=Rahul+Verma&background=random'
  },
  {
    id: 6,
    name: 'Sneha Reddy',
    role: 'Parent',
    text: 'The best preschool in Madhurawada. The curriculum is well-balanced with fun activities.',
    image: 'https://ui-avatars.com/api/?name=Sneha+Reddy&background=random'
  }
];

const TestimonialsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden relative">
      <div className="container mx-auto px-6 lg:px-12 mb-12 flex justify-between items-end">
        <div className="max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary font-bold text-sm mb-4 uppercase tracking-wider"
          >
            <Quote size={14} /> Success Stories
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900"
          >
            Hear From Our <span className="text-gradient">Happy Parents</span>
          </motion.h2>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-4">
          <button onClick={scrollLeft} className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-500 hover:text-primary hover:border-primary transition-colors">
            <ChevronLeft size={24} />
          </button>
          <button onClick={scrollRight} className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-500 hover:text-primary hover:border-primary transition-colors">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <div className="w-full relative px-6 lg:px-12 pb-12">
        <motion.div 
          ref={scrollRef}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="min-w-[280px] sm:min-w-[320px] md:min-w-[420px] snap-center bg-gray-50 rounded-[2rem] p-8 border border-gray-100 hover:shadow-xl transition-shadow flex-shrink-0 relative"
            >
              <div className="absolute top-8 right-8 text-secondary opacity-20">
                <Quote size={64} />
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-8 relative z-10 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover shadow-sm"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
          {/* Spacer for right edge */}
          <div className="min-w-[20px] flex-shrink-0" />
        </motion.div>
      </div>
      
      {/* Hide Scrollbar style */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
};

export default TestimonialsSection;
