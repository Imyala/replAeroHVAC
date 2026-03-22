import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

interface ZoomableImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
}

export function ZoomableImage({ src, alt, className = "", containerClassName = "" }: ZoomableImageProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={`relative group cursor-zoom-in ${containerClassName}`}
        onClick={() => setOpen(true)}
      >
        <img
          src={src}
          alt={alt}
          className={`w-full object-contain transition-transform duration-200 group-hover:scale-[1.01] ${className}`}
          style={{ imageRendering: "auto" }}
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/10 rounded-xl">
          <div className="bg-black/60 text-white rounded-full p-2 backdrop-blur-sm">
            <ZoomIn className="w-5 h-5" />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 cursor-zoom-out"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={src}
                alt={alt}
                className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl bg-white p-4"
                style={{ imageRendering: "auto" }}
              />
              <button
                onClick={() => setOpen(false)}
                className="absolute -top-3 -right-3 bg-white text-gray-800 rounded-full p-1.5 shadow-lg hover:bg-gray-100 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </motion.div>
            <p className="absolute bottom-4 text-white/50 text-xs">Click anywhere to close</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
