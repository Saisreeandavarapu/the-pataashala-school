import { motion } from 'framer-motion';
import { Palette, Layers, Lightbulb, Music } from 'lucide-react';

const programs = [
  {
    id: 'playgroup',
    title: 'Playgroup',
    age: '2 yrs to 3 yrs',
    icon: <Palette size={32} className="text-pink-500" />,
    color: 'bg-pink-100',
    borderColor: 'border-pink-200',
    desc: 'Introduction to a structured environment. Focuses on socialization, basic motor skills, and sensory exploration through play and music.',
  },
  {
    id: 'nursery',
    title: 'Nursery',
    age: '3 yrs to 4 yrs',
    icon: <Music size={32} className="text-purple-500" />,
    color: 'bg-purple-100',
    borderColor: 'border-purple-200',
    desc: 'Enhancing cognitive and language development. We introduce foundational concepts in numbers, letters, and emotional intelligence.',
  },
  {
    id: 'lkg',
    title: 'L.K.G',
    age: '4 yrs to 5 yrs',
    icon: <Layers size={32} className="text-secondary" />,
    color: 'bg-orange-100',
    borderColor: 'border-orange-200',
    desc: 'Building early literacy and math skills. A hands-on approach to problem-solving, environmental awareness, and creative arts.',
  },
  {
    id: 'ukg',
    title: 'U.K.G',
    age: '5 yrs to 6 yrs',
    icon: <Lightbulb size={32} className="text-primary" />,
    color: 'bg-teal-100',
    borderColor: 'border-teal-200',
    desc: 'Preparing for formal schooling. Advanced phonics, reading, complex problem-solving, and developing confident social relationships.',
  }
];

const ProgramsSection = () => {
  return (
    <section id="programs" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-gray-50 to-white -z-10" />
      <div className="absolute -right-20 top-40 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute -left-20 bottom-40 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6 uppercase tracking-widest shadow-sm"
          >
            Our Curriculum
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6"
          >
            Learning Tailored to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Every Age</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            Our Montessori-based curriculum is a comprehensive, child-centric program designed with clear objectives across all major areas of development. We align perfectly with each child’s developmental readiness and interests.
          </motion.p>
        </div>

        <div className="overflow-x-auto md:overflow-visible px-4 md:px-0">
          <div className="inline-flex gap-6 md:grid md:grid-cols-2 lg:grid-cols-4">
            {programs.map((prog, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className={`flex-shrink-0 w-[280px] bg-white rounded-[2rem] p-8 border hover:shadow-2xl transition-all duration-300 relative group overflow-hidden ${prog.borderColor}`}
              >
                {/* Background accent */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 bg-gradient-to-b ${prog.color
                    .replace("bg-", "from-")
                    .replace("100", "50")} to-transparent`}
                />

                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm ${prog.color}`}
                >
                  {prog.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {prog.title}
                </h3>

                <div className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm font-semibold rounded-lg mb-4">
                  Age: {prog.age}
                </div>

                <p className="text-gray-600 leading-relaxed">{prog.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProgramsSection;
