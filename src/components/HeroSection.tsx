
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Stats for the hero section
  const stats = [
    { value: '50 km/h', label: 'Speed' },
    { value: '80 km', label: 'Battery Range' },
    { value: '3.5 hr', label: 'Charging Time' }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-brand-teal/20 to-brand-light-blue/10 opacity-60"></div>
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-brand-mint/30 blur-3xl hero-mask animate-float"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brand-light-blue/30 blur-3xl hero-mask"></div>
      </div>

      <div className="container max-w-7xl mx-auto px-6 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full items-center py-16 md:py-24">
          {/* Left Content */}
          <div className={cn(
            "flex flex-col space-y-8 transform transition-all duration-700 delay-100",
            isVisible ? "translate-x-0 opacity-100" : "translate-x-[-50px] opacity-0"
          )}>
            <div className="space-y-2">
              <div className="inline-block glass px-4 py-1.5 rounded-full mb-4 animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-center space-x-2">
                  <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
                  <span className="text-sm font-medium">Revolutionary Urban Mobility</span>
                </div>
              </div>
              
              <h1 className="banner-text text-5xl md:text-6xl lg:text-7xl animate-fade-in opacity-0" style={{ animationDelay: '0.5s' }}>
                LET'S RIDE THE
                <br />
                <span className="text-brand-black">FUTURE</span>
              </h1>
              
              <p className="mt-4 text-lg text-foreground/80 max-w-md animate-fade-in opacity-0" style={{ animationDelay: '0.7s' }}>
                Simple and sleek design with users in mind. The perfect blend of style, 
                sustainability, and cutting-edge technology.
              </p>
              
              <div className="pt-8 flex flex-wrap gap-4 animate-fade-in opacity-0" style={{ animationDelay: '0.9s' }}>
                <Button 
                  className="bg-brand-teal hover:bg-brand-teal/90 text-white px-8 py-6 rounded-md btn-hover-effect group"
                  size="lg"
                >
                  <span>PRE-ORDER</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
                
                <Button 
                  variant="outline" 
                  className="border-brand-dark-blue text-brand-dark-blue hover:text-brand-dark-blue/90 hover:bg-brand-dark-blue/10 px-8 py-6 rounded-md"
                  size="lg"
                >
                  LEARN MORE
                </Button>
              </div>
            </div>
            
            {/* Quick features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 animate-fade-in opacity-0" style={{ animationDelay: '1.1s' }}>
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="text-xl md:text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-foreground/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Bike Image */}
          <div className={cn(
            "relative h-full flex items-center justify-center transform transition-all duration-700 delay-300",
            isVisible ? "translate-x-0 opacity-100" : "translate-x-[50px] opacity-0"
          )}>
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] rounded-full border-2 border-dashed border-brand-teal/30 animate-rotate-slow opacity-40"></div>
              
              <div className="relative animate-float">
                <img
                  src="https://images.unsplash.com/photo-1593764592116-bfb2a97c642a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3"
                  alt="Electric Bike"
                  className="max-w-full h-auto object-cover rounded-lg"
                />
                
                {/* "EV B" overlay text */}
                <div className="absolute top-0 right-0 text-9xl font-display font-bold text-white opacity-20 blur-[2px]">
                  EV B
                </div>
              </div>
              
              {/* Feature badges */}
              <div className="absolute top-[15%] right-[5%] glass-card px-4 py-2 animate-fade-in opacity-0" style={{ animationDelay: '1.3s' }}>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Eco-friendly</span>
                </div>
              </div>
              
              <div className="absolute bottom-[15%] left-[5%] glass-card px-4 py-2 animate-fade-in opacity-0" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Smart Integration</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-fade-in opacity-0" style={{ animationDelay: '1.7s' }}>
          <div className="h-12 w-0.5 bg-foreground/20 animate-pulse"></div>
          <span className="mt-2 text-xs text-foreground/60">SCROLL DOWN</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
