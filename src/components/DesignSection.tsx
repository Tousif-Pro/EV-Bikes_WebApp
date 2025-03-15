
import { useInView } from 'react-intersection-observer';
import { Check, Award } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const DesignSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="section-spacing relative bg-brand-gray" ref={ref}>
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className={cn(
            "relative transition-all duration-700",
            inView ? "opacity-100 transform translate-x-0" : "opacity-0 transform -translate-x-8"
          )}>
            <div className="relative rounded-2xl overflow-hidden premium-image shine-effect">
              <img 
                src="https://images.unsplash.com/photo-1571068316344-75bc76f77890?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3" 
                alt="Electric Bike Design" 
                className="w-full h-auto object-cover"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/50 to-transparent"></div>
              
              {/* Design badge */}
              <div className="absolute top-4 left-4 px-4 py-2 premium-glass shine-effect rounded-full">
                <div className="flex items-center">
                  <Award className="h-4 w-4 mr-2 text-brand-teal" />
                  <span className="text-sm font-medium">Award-winning Design</span>
                </div>
              </div>
              
              {/* Front image - foreground */}
              <div className="absolute -bottom-6 right-0 w-3/4 transform translate-x-1/6">
                <img 
                  src="https://images.unsplash.com/photo-1609899464726-704967d92a1e?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3" 
                  alt="Electric Bike Detail" 
                  className="w-full h-auto object-cover rounded-lg shadow-xl premium-image shine-effect"
                />
              </div>
            </div>
          </div>
          
          {/* Right Content */}
          <div className={cn(
            "transition-all duration-700 delay-300",
            inView ? "opacity-100 transform translate-x-0" : "opacity-0 transform translate-x-8"
          )}>
            <div className="inline-block premium-glass shine-effect px-4 py-1.5 rounded-full mb-4">
              <span className="text-sm font-medium flex items-center">
                <Award className="h-4 w-4 mr-2 text-brand-teal" />
                Premium Design
              </span>
            </div>
            
            <h2 className="section-title text-left">Sleek. Modern.<br/><span className="gradient-text">Unmistakable.</span></h2>
            
            <div className="decorative-line my-4"></div>
            
            <p className="text-lg text-foreground/80 mb-8">
              Our electric bikes are crafted with meticulous attention to detail, 
              combining cutting-edge technology with elegant design. Every curve and 
              component serves a purpose, creating a seamless riding experience.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                "Aerodynamic frame for reduced drag",
                "Lightweight yet durable materials",
                "Seamless integration of all components",
                "Customizable color options",
                "Ergonomic design for rider comfort"
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-br from-brand-teal/30 to-brand-mint/20 flex items-center justify-center mr-3">
                    <Check className="h-4 w-4 text-brand-teal" />
                  </div>
                  <p>{item}</p>
                </div>
              ))}
            </div>
            
            <Button 
              className="bg-gradient-to-r from-brand-teal to-brand-dark-blue hover:bg-brand-teal/90 text-white px-8 py-6 rounded-md btn-hover-effect shine-effect"
              size="lg"
            >
              EXPLORE DESIGN
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignSection;
