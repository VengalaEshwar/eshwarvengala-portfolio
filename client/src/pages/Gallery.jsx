import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    'https://res.cloudinary.com/dddkksq5w/image/upload/v1749392466/WhatsApp_Image_2025-06-08_at_19.38.43_a2761c82_ylryzd.jpg',
    'https://res.cloudinary.com/dddkksq5w/image/upload/v1749392464/WhatsApp_Image_2025-06-08_at_19.38.42_6434b945_tiv6wt.jpg',
    'https://res.cloudinary.com/dddkksq5w/image/upload/v1749392466/WhatsApp_Image_2025-06-08_at_19.38.43_74dbdea9_hnfrut.jpg',
    'https://res.cloudinary.com/dddkksq5w/image/upload/v1749392465/WhatsApp_Image_2025-06-08_at_19.38.41_446c4288_zgpoia.jpg',
  //  'https://res.cloudinary.com/dddkksq5w/image/upload/v1749392470/WhatsApp_Image_2025-06-08_at_19.39.05_acdd4644_gow8sd.jpg',
   'https://res.cloudinary.com/dddkksq5w/image/upload/v1749392469/WhatsApp_Image_2025-06-08_at_19.38.44_f1b5c8df_bdb2ai.jpg',
   'https://res.cloudinary.com/dddkksq5w/image/upload/v1749392464/IMG_0412_hgrkqe.jpg',
  //  'https://res.cloudinary.com/dddkksq5w/image/upload/v1749392466/WhatsApp_Image_2025-06-08_at_19.38.43_3d02d56d_mxuesc.jpg',
   'https://res.cloudinary.com/dddkksq5w/image/upload/v1749392464/WhatsApp_Image_2025-06-08_at_19.38.42_11c8816c_gwcb7m.jpg',
   'https://res.cloudinary.com/dddkksq5w/image/upload/v1749392468/WhatsApp_Image_2025-06-08_at_19.38.44_ae8ef763_qx0qjl.jpg',
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-center">Gallery</h2>

      <motion.div 
        layout 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        {images.map((src, index) => (
          <motion.div 
            key={index}
            className="cursor-pointer overflow-hidden rounded-lg"
            onClick={() => setSelectedImage(src)}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 }
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <img 
              src={src} 
              alt={`Gallery item ${index}`} 
              className="w-full h-48 object-cover"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative bg-white rounded-lg p-4 max-w-3xl w-full"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-3 right-3 bg-gray-200 rounded-full p-1 hover:bg-gray-300"
              >
                <X size={20} />
              </button>
              <img
                src={selectedImage}
                alt="Full view"
                className="w-full max-h-[80vh] object-contain rounded"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
