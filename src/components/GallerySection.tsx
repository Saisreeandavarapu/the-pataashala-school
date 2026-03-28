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

// ✅ Cloud shape variations (clean + consistent)
const getCloudShape = (type: string) => {
  switch (type) {
    case 'cloud1':
      return 'ellipse(55% 45% at 50% 50%)';

    case 'cloud2':
      return 'ellipse(70% 45% at 50% 55%)';

    case 'cloud3':
      return 'ellipse(50% 60% at 50% 45%)';

    case 'cloud4':
      return 'ellipse(60% 40% at 50% 60%)';

    default:
      return 'ellipse(55% 45% at 50% 50%)';
  }
};

// ✅ Assign shapes (ONLY 4 types — don't overdo it)
const galleryImages = [
  { id: 1, src: img1, shape: 'cloud1' },
  { id: 2, src: img2, shape: 'cloud2' },
  { id: 3, src: img3, shape: 'cloud3' },
  { id: 4, src: img4, shape: 'cloud4' },
  { id: 5, src: img5, shape: 'cloud1' },
  { id: 6, src: img6, shape: 'cloud2' },
  { id: 7, src: img7, shape: 'cloud3' },
  { id: 8, src: img8, shape: 'cloud4' },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<any>(null);

  return (
    <section className="py-20 bg-sky-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            Cloud <span className="text-orange-500">Gallery</span>
          </h2>
          <p className="text-gray-600">
            Soft moments captured in a playful cloud style.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">

          {galleryImages.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              onClick={() => setSelectedImage(img)}
              className="relative group cursor-pointer aspect-square"
            >

              {/* Glow */}
              <div
                style={{ clipPath: getCloudShape(img.shape) }}
                className="absolute inset-0 bg-white/70 blur-2xl scale-110"
              />

              {/* Image */}
              <img
                src={img.src}
                alt="gallery"
                style={{ clipPath: getCloudShape(img.shape) }}
                className="relative w-full h-full object-cover transition duration-500 group-hover:scale-110 shadow-lg"
              />

              {/* Overlay (FIXED) */}
              <div
                style={{ clipPath: getCloudShape(img.shape) }}
                className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition"
              >
                <span className="text-white font-semibold">View</span>
              </div>

            </motion.div>
          ))}

        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white"
            >
              <X size={32} />
            </button>

            {/* Image preview */}
            <motion.img
              src={selectedImage.src}
              alt="preview"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="max-w-full max-h-full object-contain rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default GallerySection;