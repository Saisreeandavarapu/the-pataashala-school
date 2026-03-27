import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

import img1 from '../assets/image copy 2.png';
import img2 from '../assets/image copy 3.png';
import img3 from '../assets/image copy 4.png';
import img4 from '../assets/image copy 5.png';
import img5 from '../assets/image copy 6.png';
import img6 from '../assets/image copy 7.png';
import img7 from '../assets/image copy 8.png';
import img8 from '../assets/image copy 9.png';
import img9 from '../assets/image copy 10.png';

const galleryImages = [
  { id: 1, src: img1, shape: 'rounded-[40%_60%_70%_30%/40%_50%_60%_50%]', delay: 0.1 },
  { id: 2, src: img2, shape: 'rounded-[60%_40%_30%_70%/60%_30%_70%_40%]', delay: 0.2 },
  { id: 3, src: img3, shape: 'rounded-[50%_50%_20%_80%/25%_80%_20%_75%]', delay: 0.3 },
  { id: 4, src: img4, shape: 'rounded-[30%_70%_70%_30%/30%_30%_70%_70%]', delay: 0.4 },
  { id: 5, src: img5, shape: 'rounded-[80%_20%_50%_50%/50%_50%_50%_50%]', delay: 0.5 },
  { id: 6, src: img6, shape: 'rounded-[40%_60%_70%_30%/80%_20%_80%_20%]', delay: 0.6 },
  { id: 7, src: img7, shape: 'rounded-[30%_70%_50%_50%/50%_30%_70%_50%]', delay: 0.1 },
  { id: 8, src: img8, shape: 'rounded-[70%_30%_50%_50%/50%_70%_30%_50%]', delay: 0.2 },
  { id: 9, src: img9, shape: 'rounded-[50%_50%_70%_30%/30%_70%_50%_50%]', delay: 0.3 },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  return (
    <section id="gallery" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl z-0" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6"
          >
            A Glimpse of <span className="text-secondary">Joy</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            Explore our vibrant campus, interactive classrooms, and the joyful moments of our little learners.
          </motion.p>
        </div>

        {/* Mobile horizontal scroll */}
        <div className="sm:hidden flex overflow-x-auto gap-4 p-4 no-scrollbar">
          {galleryImages.map((img) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: img.delay }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedImage(img)}
              className="relative flex-shrink-0 w-72 h-72 group cursor-pointer overflow-hidden rounded-2xl shadow-xl border-4 border-white"
            >
              <img
                src={img.src}
                alt="Gallery Visual"
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
              />
              <div
                className="absolute inset-0 bg-gray-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm"
              >
                <div className="bg-white/20 p-4 rounded-full border border-white/50">
                  <span className="text-white font-bold text-lg">View Full</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Larger screens grid */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {galleryImages.map((img) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: img.delay }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedImage(img)}
              className="relative group aspect-square flex items-center justify-center cursor-pointer overflow-hidden rounded-3xl"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary opacity-20 group-hover:opacity-40 transition-opacity duration-300 ${img.shape} blur-2xl`}
              />
              <img
                src={img.src}
                alt="Gallery Visual"
                className={`w-full h-full object-cover shadow-2xl border-4 border-white ${img.shape} transition-all duration-500 group-hover:rotate-2 group-hover:scale-105`}
              />
              <div
                className={`absolute inset-0 bg-gray-900/40 opacity-0 group-hover:opacity-100 transition-all duration-300 ${img.shape} flex items-center justify-center backdrop-blur-sm border-2 border-white/50 scale-90 group-hover:scale-100`}
              >
                <motion.div 
                   whileHover={{ scale: 1.1 }}
                   className="bg-white text-gray-900 px-6 py-2 rounded-full font-bold shadow-lg"
                >
                  View
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-900/95 backdrop-blur-md p-4 md:p-12 cursor-zoom-out"
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-6 right-6 text-white bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </motion.button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt="Full View"
                className="max-w-full max-h-full object-contain rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border-4 border-white/10"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
