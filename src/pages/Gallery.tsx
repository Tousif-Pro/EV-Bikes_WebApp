
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const galleryImages = [
  {
    category: "urban",
    images: [
      "https://images.unsplash.com/photo-1571068316344-75bc76f77890?q=80&w=2970&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582516732443-4a07e77e391a?q=80&w=2807&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558981359-219d6364c9c8?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558981033-0f0309284409?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558981001-1995369a39cd?q=80&w=2070&auto=format&fit=crop"
    ]
  },
  {
    category: "adventure",
    images: [
      "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?q=80&w=2022&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558980394-da1f85d3b540?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558980664-10e7170b5df9?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558980394-0a0c3e0d00b1?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558980664-769f84786dc7?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2070&auto=format&fit=crop"
    ]
  },
  {
    category: "performance",
    images: [
      "https://images.unsplash.com/photo-1557254719-da117996c2e8?q=80&w=2970&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558980664-3a031cf67ea8?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558981420-87aa9dad1c89?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558981852-426c6c22a060?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558981001-792f6c0d5068?q=80&w=2070&auto=format&fit=crop"
    ]
  }
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("urban");
  
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-brand-gray/60 via-white to-brand-gray/40 pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Product <span className="gradient-text">Gallery</span>
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Explore our stunning collection of premium electric bikes through high-quality visuals.
            </p>
            <div className="decorative-line mx-auto my-8"></div>
          </div>
          
          <Tabs defaultValue="urban" className="w-full" onValueChange={setActiveCategory}>
            <div className="flex justify-center mb-12">
              <TabsList className="bg-white/30 p-1 rounded-full">
                <TabsTrigger 
                  value="urban"
                  className="rounded-full px-6 py-2 data-[state=active]:bg-brand-teal data-[state=active]:text-white"
                >
                  Urban Series
                </TabsTrigger>
                <TabsTrigger 
                  value="adventure"
                  className="rounded-full px-6 py-2 data-[state=active]:bg-brand-teal data-[state=active]:text-white"
                >
                  Adventure Series
                </TabsTrigger>
                <TabsTrigger 
                  value="performance"
                  className="rounded-full px-6 py-2 data-[state=active]:bg-brand-teal data-[state=active]:text-white"
                >
                  Performance Series
                </TabsTrigger>
              </TabsList>
            </div>
            
            {galleryImages.map((category) => (
              <TabsContent 
                key={category.category} 
                value={category.category}
                className={cn(
                  "transition-all duration-700",
                  (category.category === activeCategory && inView) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                )}
              >
                <div 
                  ref={category.category === activeCategory ? ref : undefined}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {category.images.map((image, index) => (
                    <div 
                      key={index}
                      className="perspective-3d overflow-hidden rounded-xl premium-shadow-3d"
                      style={{ 
                        transitionDelay: `${index * 100}ms` 
                      }}
                    >
                      <div className="transform-3d hover:scale-[1.02] transition-all duration-500">
                        <div className="relative group aspect-[4/3] overflow-hidden rounded-xl">
                          <img 
                            src={image} 
                            alt={`${category.category} image ${index + 1}`} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                            <span className="text-white text-lg font-medium">EVOLVE X{index + 1}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
          
          {/* Gallery description */}
          <div className="max-w-3xl mx-auto mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">About Our {activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)} Collection</h2>
            <p className="text-foreground/70 mb-4">
              {activeCategory === "urban" ? 
                "Our Urban Series is designed for city commuters who need reliability, style, and practicality. These bikes feature lightweight frames, long battery life, and smart connectivity features for the modern rider." : 
                activeCategory === "adventure" ? 
                "The Adventure Series is built to tackle any terrain with confidence. Featuring powerful motors, rugged construction, and all-terrain tires, these bikes are perfect for those who want to explore beyond the beaten path." :
                "Experience peak performance with our Performance Series electric bikes. With aerodynamic designs, premium components, and top speeds, these models represent the pinnacle of electric bike engineering."}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
