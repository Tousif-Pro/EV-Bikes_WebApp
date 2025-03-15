
import { useState, useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { ArrowRight, ArrowLeft, Camera, Sparkles, ChevronRight, ChevronLeft, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1623468872670-d6bf1da3ca2e?q=80&w=2346&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "Electric bike on urban street",
    caption: "Urban Explorer",
    description: "Perfect for navigating busy city streets with style and efficiency."
  },
  {
    src: "https://images.unsplash.com/photo-1558979159-2b18a4070a87?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "Close-up of electric bike components",
    caption: "Premium Components",
    description: "Each part meticulously engineered for performance and durability."
  },
  {
    src: "https://images.unsplash.com/photo-1642751410355-bc92748dad35?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "Electric bike dashboard display",
    caption: "Smart Technology",
    description: "Integrated smart systems for an enhanced riding experience."
  },
  {
    src: "https://images.unsplash.com/photo-1598983268103-b155fb7abfcb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "Electric bike parked in nature",
    caption: "Eco-friendly Adventure",
    description: "Explore nature with zero emissions and minimal environmental impact."
  }
];

const GallerySection = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  
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
    // Update the sectionRef
    sectionRef.current = element;
    // Update the inViewRef
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
      
      // Calculate how far we've scrolled into the section
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

  return (
    <section 
      id="gallery" 
      ref={setRefs} 
      className="section-spacing relative bg-gradient-to-b from-brand-dark-blue/95 to-brand-mint/30 text-white py-32"
    >
      {/* Decorative elements with parallax effect */}
      <div 
        className="absolute top-24 left-20 w-24 h-24 rounded-full border border-brand-teal/20 animate-float-slow opacity-30"
        style={{ transform: `translateY(${scrollProgress * 50}px)` }}
      ></div>
      <div 
        className="absolute bottom-48 right-24 w-16 h-16 rounded-full border border-brand-mint/20 animate-float-slow opacity-30" 
        style={{ animationDelay: '1s', transform: `translateY(${-scrollProgress * 30}px)` }}
      ></div>
      
      {/* 3D floating orbs */}
      <div 
        className="absolute top-1/3 right-[10%] w-40 h-40 bg-gradient-to-br from-brand-teal/20 to-brand-mint/10 rounded-full blur-xl"
        style={{ transform: `translate3d(${scrollProgress * 40}px, ${-scrollProgress * 60}px, 0)` }}
      ></div>
      <div 
        className="absolute bottom-1/4 left-[5%] w-32 h-32 bg-gradient-to-tr from-brand-mint/20 to-brand-light-blue/5 rounded-full blur-xl"
        style={{ transform: `translate3d(${-scrollProgress * 30}px, ${scrollProgress * 40}px, 0)` }}
      ></div>

      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-16" ref={titleRef}>
          <div className={cn(
            "inline-block bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full mb-4 transition-all duration-500 shine-effect",
            titleInView ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-4"
          )}>
            <span className="text-sm font-medium flex items-center">
              <Camera className="h-4 w-4 mr-2" />
              Visual Showcase
            </span>
          </div>
          
          <h2 className={cn(
            "section-title transition-all duration-500 delay-100",
            titleInView ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-4"
          )}>
            <span className="text-brand-teal">Beauty</span> in Motion
          </h2>
          
          <div className={cn(
            "decorative-line bg-gradient-to-r from-brand-teal to-brand-mint mx-auto my-4 transition-all duration-500 delay-150",
            titleInView ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-4"
          )}></div>
          
          <p className={cn(
            "section-subtitle text-white/70 transition-all duration-500 delay-200 max-w-2xl mx-auto",
            titleInView ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-4"
          )}>
            Experience the elegance and sophistication of our electric bikes 
            through this curated collection of images.
          </p>
        </div>

        <div className={cn(
          "relative overflow-visible transition-all duration-700 delay-300 perspective-3d",
          inView ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"
        )}>
          {/* Main image carousel with 3D effect */}
          <div 
            className="relative aspect-[16/9] overflow-hidden rounded-2xl premium-image shine-effect transform-3d"
            style={{ transform: `rotateY(${scrollProgress * 3}deg) rotateX(${scrollProgress * -1}deg)` }}
          >
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={cn(
                  "absolute inset-0 transition-all duration-700 ease-in-out transform-3d",
                  index === activeImage 
                    ? "opacity-100 transform scale-100 z-10" 
                    : "opacity-0 transform scale-110 z-0"
                )}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                
                {/* Caption overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-dark-blue/90 via-brand-dark-blue/50 to-transparent p-8">
                  <div className="max-w-7xl mx-auto">
                    <div className="flex items-start">
                      <div className="mr-auto">
                        <div className="flex items-center mb-2">
                          <Sparkles className="h-5 w-5 mr-3 text-brand-teal" />
                          <h3 className="text-3xl font-playfair font-medium">{image.caption}</h3>
                        </div>
                        <p className="text-white/70 max-w-xl">{image.description}</p>
                      </div>
                      <Button 
                        variant="outline" 
                        className="ml-4 border-brand-teal/60 text-brand-teal hover:bg-brand-teal/20 rounded-full"
                        size="icon"
                      >
                        <Play className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
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
          </div>
          
          {/* Thumbnail navigation with 3D hover effect */}
          <div className="flex space-x-4 mt-6 overflow-x-auto pb-2 hide-scrollbar">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                className={cn(
                  "flex-shrink-0 w-1/4 aspect-video rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 perspective-card",
                  index === activeImage 
                    ? "ring-2 ring-brand-teal scale-[1.02] shadow-lg shadow-brand-teal/20" 
                    : "opacity-60 hover:opacity-90 grayscale hover:grayscale-0"
                )}
                onClick={() => setActiveImage(index)}
              >
                <div className="w-full h-full card-content">
                  <img
                    src={image.src}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </button>
            ))}
          </div>
          
          {/* Gallery information card with 3D effect */}
          <div 
            className={cn(
              "absolute -right-12 -bottom-12 premium-glass p-6 rounded-xl shadow-xl max-w-xs transform-3d hidden lg:block",
              inView ? "animate-fade-in-right" : ""
            )}
            style={{ 
              transform: `translate3d(${-scrollProgress * 40}px, ${scrollProgress * 30}px, ${scrollProgress * 50}px) rotateY(${-scrollProgress * 5}deg)`,
            }}
          >
            <div className="text-lg font-medium mb-2">Premium Collection</div>
            <p className="text-sm text-white/70 mb-4">Browse our showcase of meticulously crafted electric bikes designed for the modern rider.</p>
            <Button 
              variant="outline" 
              className="border-brand-teal/60 text-brand-teal hover:bg-brand-teal/20 w-full rounded-md group"
              size="sm"
            >
              View all models
              <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
