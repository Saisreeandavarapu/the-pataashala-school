
import { motion } from 'framer-motion';
import { Target, BookOpen, Heart, ShieldCheck } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { label: 'Campuses', value: '7+' },
    { label: 'Happy Kids', value: '1000+' },
    { label: 'Customer Rating', value: '5.0/5' },
    { label: 'Interactivity', value: '100%' },
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6 uppercase tracking-wider">
                <Heart size={16} /> About Us
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                Welcome to <span className="text-gradient">Paatashala Play School</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Welcome to Paatashala Play School, the best pre school in Madhurawada where learning meets love, creativity, and care. We offer a joyful learning environment with air-conditioned, spacious classrooms, vibrant play areas, and colorful activity zones. Our experienced, caring teachers make learning fun and meaningful for every child.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                As a trusted play school and day care centre, we focus on all-round development through a blend of Montessori principles and Multiple Intelligences. We foster cognitive and creative growth through experiential learning—art, music, storytelling, and more. With a safe, clean, and nurturing space, we ensure every child feels happy and confident. Visit us to see why we’re the school loved by every child and parent alike!
              </p>
            </motion.div>

            <div className="space-y-6">
              {[
                {
                  icon: <Target className="text-secondary" size={24} />,
                  title: 'Our Mission',
                  desc: 'To provide a stimulating environment where children develop essential skills, healthy habits, and a lifelong love for learning.'
                },
                {
                  icon: <ShieldCheck className="text-primary" size={24} />,
                  title: 'Core Values',
                  desc: 'Child-Centered focus, Safe & Nurturing environment, and Excellence in progressive early education.'
                }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  className="flex gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-10 pt-8 border-t border-gray-100 flex items-center gap-8 flex-wrap"
            >
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <h4 className="text-3xl font-extrabold text-gray-900 mb-1">{stat.value}</h4>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Image Layout */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative z-10 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl transform rotate-3 scale-105 group-hover:rotate-6 transition-transform duration-500" />
              <img 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2073&auto=format&fit=crop" 
                alt="Children engaging in activities"
                className="rounded-3xl shadow-2xl relative z-10 w-full object-cover h-[500px]"
              />
              
              {/* Floating Badge */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-white/70 p-5 rounded-2xl shadow-xl z-20 backdrop-blur-md border border-white/40 flex items-center gap-4 animate-bounce hover:animate-none group/badge"
              >
                <div className="bg-green-100/80 text-green-600 p-3 rounded-full group-hover/badge:scale-110 transition-transform">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 leading-tight">100% Zero<br/>Screen Time</h4>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
