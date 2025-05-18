import { useState, useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { Camera, Sparkles, ChevronRight, ChevronLeft, Maximize } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const galleryImages = [
  {
    src: "images/images 2.jpg",
    alt: "Electric bike on urban street",
    caption: "Urban Explorer",
    description: "Perfect for navigating busy city streets with style and efficiency."
  },
  {
    src: "IMAGE 4.webp",
    alt: "Close-up of electric bike components",
    caption: "Premium Components",
    description: "Each part meticulously engineered for performance and durability."
  },
  {
    src: "IMAGE 5.webp",
    alt: "Electric bike dashboard display",
    caption: "Smart Technology",
    description: "Integrated smart systems for an enhanced riding experience."
  },
  {
    src: "image 2.jpg",
    alt: "Electric bike parked in nature",
    caption: "Eco-friendly Adventure",
    description: "Explore nature with zero emissions and minimal environmental impact."
  }
];

const GallerySection = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const { ref: inViewRef, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1
  });

  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: false,
    threshold: 0.5
  });

  // Combine refs for the section
  const setRefs = (element: HTMLDivElement | null) => {
    sectionRef.current = element;
    if (typeof inViewRef === 'function') {
      inViewRef(element);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const scrollY = window.scrollY;

      const relativeScroll = Math.max(0, scrollY - sectionTop + window.innerHeight / 2);
      const progress = Math.min(relativeScroll / (sectionHeight * 0.8), 1);

      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const openLightbox = () => setIsLightboxOpen(true);
  const closeLightbox = () => setIsLightboxOpen(false);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Touch/swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;

    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX;

    if (deltaX > 50) prevImage(); // Swipe right
    if (deltaX < -50) nextImage(); // Swipe left

    setTouchStartX(null);
  };

  return (
    <section
      id="gallery"
      ref={setRefs}
      className="section-spacing relative bg-gradient-to-b from-brand-dark-blue/95 to-brand-mint/30 text-white py-16"
    >
      {/* Decorative elements with parallax effect */}
      <motion.div
        className="absolute top-24 left-20 w-24 h-24 rounded-full border border-brand-teal/20 animate-float-slow opacity-30"
        style={{ y: scrollProgress * 50 }}
      ></motion.div>
      <motion.div
        className="absolute bottom-48 right-24 w-16 h-16 rounded-full border border-brand-mint/20 animate-float-slow opacity-30"
        style={{ y: -scrollProgress * 30 }}
      ></motion.div>

      {/* 3D floating orbs */}
      <motion.div
        className="absolute top-1/3 right-[10%] w-40 h-40 bg-gradient-to-br from-brand-teal/20 to-brand-mint/10 rounded-full blur-xl"
        style={{ x: scrollProgress * 40, y: -scrollProgress * 60 }}
      ></motion.div>
      <motion.div
        className="absolute bottom-1/4 left-[5%] w-32 h-32 bg-gradient-to-tr from-brand-mint/20 to-brand-light-blue/5 rounded-full blur-xl"
        style={{ x: -scrollProgress * 30, y: scrollProgress * 40 }}
      ></motion.div>

      <div className="container max-w-5xl mx-auto px-4">
        <div className="text-center mb-8" ref={titleRef}>
          <motion.div
            className={cn(
              "inline-block bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full mb-4 transition-all duration-500 shine-effect",
              titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: titleInView ? 1 : 0, y: titleInView ? 0 : 20 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-medium flex items-center">
              <Camera className="h-4 w-4 mr-2" />
              Visual Showcase
            </span>
          </motion.div>

          <motion.h2
            className={cn(
              "section-title transition-all duration-500 delay-100",
              titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: titleInView ? 1 : 0, y: titleInView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="text-brand-teal">Beauty</span> in Motion
          </motion.h2>

          <motion.div
            className={cn(
              "decorative-line bg-gradient-to-r from-brand-teal to-brand-mint mx-auto my-4 transition-all duration-500 delay-150",
              titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: titleInView ? 1 : 0, y: titleInView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          ></motion.div>

          <motion.p
            className={cn(
              "section-subtitle text-white/70 transition-all duration-500 delay-200 max-w-2xl mx-auto",
              titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: titleInView ? 1 : 0, y: titleInView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Experience the elegance and sophistication of our electric bikes through this curated collection of images.
          </motion.p>
        </div>

        <motion.div
          className={cn(
            "relative overflow-visible transition-all duration-700 delay-300 perspective-3d",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {/* Main image carousel with 3D effect */}
          <motion.div
            className="relative aspect-[16/9] overflow-hidden rounded-2xl premium-image shine-effect transform-3d"
            style={{ rotateY: scrollProgress * 3, rotateX: scrollProgress * -1 }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeImage}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={galleryImages[activeImage].src}
                  alt={galleryImages[activeImage].alt}
                  className="w-full h-full object-cover"
                />

                {/* Hover overlay with smooth animation */}
                <motion.div
                  className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ opacity: 1 }}
                >
                  <motion.div
                    className="text-center p-6"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-3xl font-playfair font-medium text-white">
                      {galleryImages[activeImage].caption}
                    </h3>
                    <p className="text-white/70 mt-2">
                      {galleryImages[activeImage].description}
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Navigation arrows with glass effect */}
          <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2 h-12 w-12 rounded-full bg-brand-dark-blue/30 backdrop-blur-md hover:bg-brand-dark-blue/50 flex items-center justify-center transition-all duration-300 border border-white/10 z-20"
            onClick={prevImage}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 h-12 w-12 rounded-full bg-brand-dark-blue/30 backdrop-blur-md hover:bg-brand-dark-blue/50 flex items-center justify-center transition-all duration-300 border border-white/10 z-20"
            onClick={nextImage}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </motion.div>

        {/* Thumbnail navigation */}
        <div className="flex justify-center gap-4 mt-6">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              className={cn(
                "w-20 h-12 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105",
                index === activeImage ? "ring-2 ring-brand-teal" : "opacity-60 hover:opacity-90"
              )}
              onClick={() => setActiveImage(index)}
            >
              <img
                src={image.src}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {isLightboxOpen && (
            <motion.div
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
            >
              <motion.img
                src={galleryImages[activeImage].src}
                alt={galleryImages[activeImage].alt}
                className="max-w-full max-h-full rounded-lg"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default GallerySection;