
import { motion } from 'framer-motion';
import { MonitorOff, Apple, GraduationCap, ShieldCheck, Star } from 'lucide-react';

const features = [
  {
    icon: <MonitorOff size={32} />,
    title: 'Zero Screen Time',
    desc: 'No digital distractions; emphasis on physical interaction, hands-on play, and real-world discovery.',
    color: 'bg-red-50 text-red-500 border-red-100'
  },
  {
    icon: <Apple size={32} />,
    title: 'Healthy Living',
    desc: 'A 100% chocolate and junk food-free zone promoting nutritious habits from early childhood.',
    color: 'bg-green-50 text-green-500 border-green-100'
  },
  {
    icon: <GraduationCap size={32} />,
    title: 'Expert Educators',
    desc: 'Highly trained staff with a proven track record in early childhood development and Montessori methods.',
    color: 'bg-blue-50 text-blue-500 border-blue-100'
  },
  {
    icon: <ShieldCheck size={32} />,
    title: 'Safe Campus',
    desc: 'Spacious, secure, and fully air-conditioned 5000+ sq. ft. campus designed specifically for pre-primary needs.',
    color: 'bg-purple-50 text-primary border-purple-100'
  },
  {
    icon: <Star size={32} />,
    title: 'Holistic Growth',
    desc: 'Balancing academic learning with social, emotional, and physical discovery for all-around development.',
    color: 'bg-orange-50 text-secondary border-orange-100'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants: any = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
};

const WhyChooseUsSection = () => {
  return (
    <section id="why-us" className="py-24 bg-gray-50 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6"
          >
            Why Choose <span className="text-gradient">The Paatashala?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            We pride ourselves on providing an environment where children can thrive naturally. Here are a few reasons why parents trust us.
          </motion.p>
        </div>

        <div className="overflow-x-auto md:overflow-visible px-4 md:px-0 pb-6 hide-scrollbar">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 w-max md:w-full"
          >
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`flex-shrink-0 w-[280px] bg-white rounded-3xl p-8 border hover:shadow-xl transition-all duration-300 group cursor-pointer ${feature.color.split(' ')[2]}`}
              >
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${feature.color.split(' ')[0]} ${feature.color.split(' ')[1]}`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
