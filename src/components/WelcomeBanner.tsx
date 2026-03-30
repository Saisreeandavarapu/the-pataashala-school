import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, GraduationCap } from 'lucide-react';
import happyChild from '../assets/image copy 14.png';

const WelcomeBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the banner shortly after page load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 20, opacity: 0 }}
            transition={{ type: "spring", duration: 0.6 }}
            className="bg-white rounded-[2rem] shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto md:overflow-hidden relative flex flex-col md:flex-row"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors z-20 shadow-sm"
            >
              <X size={20} />
            </button>

            {/* Left Image Side */}
            <div className="hidden md:block md:w-5/12 relative bg-primary">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent z-10" />
              <img
                src={happyChild}
                alt="Happy child learning"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-10 left-8 z-20 right-8">
                <div className="bg-white/20 backdrop-blur-md p-4 rounded-xl border border-white/30 text-white">
                  <GraduationCap size={28} className="mb-2" />
                  <h3 className="font-bold text-lg leading-tight mb-1">Begin Their Journey</h3>
                  <p className="text-white/80 text-xs">Join our nurturing environment focused on holistic development.</p>
                </div>
              </div>
            </div>

            {/* Right Form Side */}
            <div className="w-full md:w-7/12 p-8 md:p-10 flex flex-col justify-center">
              <div className="mb-6">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-2 tracking-tight">Admissions Open 2026</h2>
                <p className="text-gray-500 text-sm">Secure your child's future at The Paatashala Play School. Fill out the form below to initiate the admission process.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Parent Name</label>
                  <input required type="text" placeholder="John Doe" className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm shadow-sm" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Phone Number</label>
                    <input required type="tel" placeholder="+91" className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm shadow-sm" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Child's Age</label>
                    <select required className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm appearance-none text-gray-600 shadow-sm bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.4-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:0.7em_auto] bg-no-repeat bg-[position:right_1rem_center]">
                      <option value="" disabled selected>Select Program</option>
                      <option value="2-3">Playgroup (2-3 Yrs)</option>
                      <option value="3-4">Nursery (3-4 Yrs)</option>
                      <option value="4-5">L.K.G (4-5 Yrs)</option>
                      <option value="5-6">U.K.G (5-6 Yrs)</option>
                    </select>
                  </div>
                </div>

                <div className="pt-4">
                  <button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/30 transition-all hover:-translate-y-1 flex items-center justify-center gap-2 group transform active:scale-[0.98]">
                    Submit Application <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                  <p className="text-center text-xs text-gray-400 mt-4">Safe, secure, and spam-free.</p>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeBanner;
