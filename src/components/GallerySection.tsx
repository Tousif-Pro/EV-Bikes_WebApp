
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { ArrowRight, ArrowLeft, Camera, Sparkles } from 'lucide-react';

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1623468872670-d6bf1da3ca2e?q=80&w=2346&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "Electric bike on urban street",
    caption: "Urban Explorer"
  },
  {
    src: "https://images.unsplash.com/photo-1558979159-2b18a4070a87?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "Close-up of electric bike components",
    caption: "Premium Components"
  },
  {
    src: "https://images.unsplash.com/photo-1642751410355-bc92748dad35?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "Electric bike dashboard display",
    caption: "Smart Technology"
  },
  {
    src: "https://images.unsplash.com/photo-1598983268103-b155fb7abfcb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "Electric bike parked in nature",
    caption: "Eco-friendly Adventure"
  }
];

const GallerySection = () => {
  const [activeImage, setActiveImage] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section id="gallery" className="section-spacing relative bg-brand-black text-white" ref={ref}>
      {/* Decorative elements */}
      <div className="absolute top-24 left-20 w-24 h-24 rounded-full border border-brand-teal/20 animate-float-slow opacity-30"></div>
      <div className="absolute bottom-48 right-24 w-16 h-16 rounded-full border border-mint/20 animate-float-slow opacity-30" style={{ animationDelay: '1s' }}></div>

      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className={cn(
            "inline-block bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full mb-4 transition-all duration-500 shine-effect",
            inView ? "opacity-100" : "opacity-0 transform translate-y-4"
          )}>
            <span className="text-sm font-medium flex items-center">
              <Camera className="h-4 w-4 mr-2" />
              Visual Showcase
            </span>
          </div>
          
          <h2 className={cn(
            "section-title transition-all duration-500 delay-100",
            inView ? "opacity-100" : "opacity-0 transform translate-y-4"
          )}>
            <span className="text-brand-teal">Beauty</span> in Motion
          </h2>
          
          <div className={cn(
            "decorative-line bg-gradient-to-r from-brand-teal to-brand-mint mx-auto my-4 transition-all duration-500 delay-150",
            inView ? "opacity-100" : "opacity-0 transform translate-y-4"
          )}></div>
          
          <p className={cn(
            "section-subtitle text-white/70 transition-all duration-500 delay-200",
            inView ? "opacity-100" : "opacity-0 transform translate-y-4"
          )}>
            Experience the elegance and sophistication of our electric bikes 
            through this curated collection of images.
          </p>
        </div>

        <div className={cn(
          "relative overflow-hidden rounded-2xl transition-all duration-700 delay-300",
          inView ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"
        )}>
          {/* Main image carousel */}
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl premium-image shine-effect">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={cn(
                  "absolute inset-0 transition-all duration-500 ease-in-out",
                  index === activeImage 
                    ? "opacity-100 transform scale-100" 
                    : "opacity-0 transform scale-110"
                )}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                
                {/* Caption overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                  <div className="max-w-7xl mx-auto flex items-center">
                    <Sparkles className="h-5 w-5 mr-3 text-brand-teal" />
                    <p className="text-2xl font-playfair font-medium">{image.caption}</p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Navigation arrows */}
            <button
              className="absolute top-1/2 left-4 transform -translate-y-1/2 h-12 w-12 rounded-full bg-black/40 backdrop-blur-sm hover:bg-black/60 flex items-center justify-center transition-all duration-300"
              onClick={prevImage}
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            
            <button
              className="absolute top-1/2 right-4 transform -translate-y-1/2 h-12 w-12 rounded-full bg-black/40 backdrop-blur-sm hover:bg-black/60 flex items-center justify-center transition-all duration-300"
              onClick={nextImage}
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
          
          {/* Thumbnail navigation */}
          <div className="flex space-x-3 mt-4">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                className={cn(
                  "flex-shrink-0 w-1/4 aspect-video rounded-lg overflow-hidden transition-all duration-300",
                  index === activeImage ? "ring-2 ring-brand-teal scale-[1.02]" : "opacity-60 hover:opacity-90"
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
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
