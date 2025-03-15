
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, ChevronDown } from 'lucide-react';
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
    <section id="home" className="relative min-h-screen overflow-hidden pt-16">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-brand-teal/30 to-brand-light-blue/15 opacity-60"></div>
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-brand-mint/30 blur-3xl hero-mask animate-float-slow"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brand-light-blue/30 blur-3xl hero-mask"></div>
      </div>

      <div className="container max-w-7xl mx-auto px-6 h-full relative">
        {/* Decorative elements */}
        <div className="absolute top-24 left-0 w-24 h-24 rounded-full border border-brand-teal/20 animate-float-slow opacity-70"></div>
        <div className="absolute top-48 right-24 w-16 h-16 rounded-full border border-brand-mint/20 animate-float-slow opacity-70" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-24 left-24 w-32 h-32 rounded-full border border-brand-light-blue/20 animate-float-slow opacity-70" style={{ animationDelay: '2s' }}></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full items-center py-16 md:py-28">
          {/* Left Content */}
          <div className={cn(
            "flex flex-col space-y-8 transform transition-all duration-700 delay-100",
            isVisible ? "translate-x-0 opacity-100" : "translate-x-[-50px] opacity-0"
          )}>
            <div className="space-y-2">
              <div className="inline-block premium-glass shine-effect px-4 py-1.5 rounded-full mb-4 animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-center space-x-2">
                  <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                  <span className="text-sm font-medium">Revolutionary Urban Mobility</span>
                </div>
              </div>
              
              <h1 className="banner-text text-5xl md:text-6xl lg:text-7xl animate-fade-in opacity-0" style={{ animationDelay: '0.5s' }}>
                RIDE THE
                <br />
                <span className="gradient-text">FUTURE</span>
              </h1>
              
              <div className="decorative-line mt-4 mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}></div>
              
              <p className="mt-4 text-lg text-foreground/80 max-w-md animate-fade-in opacity-0" style={{ animationDelay: '0.7s' }}>
                Experience the perfect fusion of <span className="font-semibold">advanced technology</span>, 
                <span className="font-semibold"> sustainable design</span>, and 
                <span className="font-semibold"> unparalleled performance</span> for the modern urban commuter.
              </p>
              
              <div className="pt-8 flex flex-wrap gap-4 animate-fade-in opacity-0" style={{ animationDelay: '0.9s' }}>
                <Button 
                  className="bg-brand-teal hover:bg-brand-teal/90 text-white px-8 py-6 rounded-md btn-hover-effect group shine-effect"
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
                  DISCOVER MORE
                </Button>
              </div>
            </div>
            
            {/* Quick features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 animate-fade-in opacity-0" style={{ animationDelay: '1.1s' }}>
              {stats.map((stat, index) => (
                <div key={index} className="stat-card shine-effect">
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
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border-2 border-dashed border-brand-teal/30 animate-rotate-slow opacity-40"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[105%] h-[105%] rounded-full border border-brand-mint/20 animate-rotate-slow opacity-30" style={{ animationDirection: 'reverse', animationDuration: '25s' }}></div>
              
              <div className="relative animate-float-slow">
                <img
                  src="https://images.unsplash.com/photo-1557254719-da117996c2e8?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3"
                  alt="Premium Electric Bike"
                  className="max-w-full h-auto object-cover rounded-2xl shadow-2xl shine-effect"
                />
                
                {/* "e∞" overlay text */}
                <div className="absolute top-5 right-5 text-8xl font-playfair font-bold text-white opacity-20 blur-[1px]">
                  e∞
                </div>
              </div>
              
              {/* Feature badges */}
              <div className="absolute top-[15%] right-[5%] premium-glass px-4 py-2 animate-fade-in opacity-0 shine-effect" style={{ animationDelay: '1.3s' }}>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span className="text-sm font-medium">Eco-friendly</span>
                </div>
              </div>
              
              <div className="absolute bottom-[15%] left-[5%] premium-glass px-4 py-2 animate-fade-in opacity-0 shine-effect" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span className="text-sm font-medium">Smart Integration</span>
                </div>
              </div>
              
              <div className="absolute top-[40%] left-[5%] premium-glass px-4 py-2 animate-fade-in opacity-0 shine-effect" style={{ animationDelay: '1.7s' }}>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span className="text-sm font-medium">Premium Design</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-fade-in opacity-0" style={{ animationDelay: '1.7s' }}>
          <span className="mb-2 text-xs uppercase tracking-wider text-foreground/60">Scroll to Explore</span>
          <div className="h-12 w-0.5 bg-foreground/20 animate-pulse"></div>
          <ChevronDown className="h-4 w-4 mt-1 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
