
import { motion } from 'framer-motion';
import { Clock, Phone, Mail, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6"
          >
            Get in <span className="text-primary">Touch</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            We'd love to hear from you. Schedule a visit, ask a question, or apply for admissions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Left: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-[2rem] p-8 md:p-10 border border-gray-100 shadow-2xl shadow-primary/5"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Parent Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Child Age</label>
                  <input type="text" placeholder="e.g. 3 Years" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Phone Number</label>
                <input type="tel" placeholder="+91 90635 51183" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Message</label>
                <textarea rows={4} placeholder="How can we help you?" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"></textarea>
              </div>
              
              <button type="button" className="w-full bg-primary hover:bg-primary/90 text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-primary/30 transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
                <Send size={20} /> Submit Inquiry
              </button>
            </form>
          </motion.div>

          {/* Right: Info & Timetable */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-12"
          >
            {/* Timetable Card */}
            <div className="bg-gradient-to-br from-secondary to-orange-400 p-8 rounded-[2rem] text-white shadow-xl shadow-secondary/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
                  <Clock size={28} />
                </div>
                <h3 className="text-2xl font-bold tracking-tight">School Timings</h3>
              </div>
              <ul className="space-y-4 relative z-10">
                <li className="flex justify-between items-center border-b border-white/20 pb-3">
                  <span className="font-semibold text-white/90">Play School</span>
                  <span className="font-bold">9:00 AM - 3:30 PM</span>
                </li>
                <li className="flex justify-between items-center border-b border-white/20 pb-3">
                  <span className="font-semibold text-white/90">Day Care</span>
                  <span className="font-bold">9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between items-center pb-1">
                  <span className="font-semibold text-white/90">Admin Office</span>
                  <span className="font-bold">9:00 AM - 3:30 PM (Mon-Sat)</span>
                </li>
              </ul>
            </div>

            {/* Quick Contacts */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">Quick Information</h3>
              
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Our Campus</h4>
                  <p className="text-gray-600">18-101/2, beside Sri Venkateswara vidyapeeth, Krishna Nagar, Srinivasa Nagar, Madhurawada, Andhra Pradesh 530048</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Phone & WhatsApp</h4>
                  <p className="text-gray-600">081252 80747</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Email Address</h4>
                  <p className="text-gray-600">info@thepaatashala.com</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-24 w-full h-[400px] rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-gray-50 flex items-center justify-center"
        >
          {/* Typically you would embed Google Maps iframe here. Using a placeholder for exact location unless provided. */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121785.87190132386!2d83.35140887466185!3d17.83025218776991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395b0042d3ed7b%3A0xea8eef49195a9477!2sThe%20Paatashala%20Play%20School%20%7C%20Pre%20School%20%26%20Day%20Care%20in%20Madhurawada!5e0!3m2!1sen!2sin!4v1711516000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="School Location"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default ContactSection;
