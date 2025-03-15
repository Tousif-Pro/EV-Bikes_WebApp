
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, ChevronDown, CirclePlay, Sparkles, Zap, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Stats for the hero section
  const stats = [
    { value: '50 km/h', label: 'Speed', icon: <Zap className="h-4 w-4 text-brand-teal" /> },
    { value: '80 km', label: 'Battery Range', icon: <ShieldCheck className="h-4 w-4 text-brand-teal" /> },
    { value: '3.5 hr', label: 'Charging Time', icon: <CirclePlay className="h-4 w-4 text-brand-teal" /> }
  ];

  // Refs for scroll animation sections
  const { ref: parallaxRef1, inView: inView1 } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: parallaxRef2, inView: inView2 } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  // Handle scroll progress
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      
      const scrollY = window.scrollY;
      const heroHeight = heroRef.current.offsetHeight;
      const progress = Math.min(scrollY / (heroHeight * 0.7), 1);
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen overflow-hidden pt-24">
      {/* Background elements with parallax effects */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-brand-teal/20 to-brand-light-blue/10 opacity-60"
          style={{ transform: `translateY(${scrollProgress * 80}px)` }}
        ></div>
        <div 
          className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-brand-mint/20 blur-3xl hero-mask animate-float-slow"
          style={{ transform: `translate(${scrollProgress * 40}px, ${-scrollProgress * 60}px)` }}
        ></div>
        <div 
          className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brand-light-blue/20 blur-3xl hero-mask"
          style={{ transform: `translate(${-scrollProgress * 40}px, ${scrollProgress * 60}px)` }}
        ></div>
      </div>

      <div className="container max-w-7xl mx-auto px-6 h-full relative">
        {/* Decorative elements */}
        <div 
          className="absolute top-24 left-0 w-24 h-24 rounded-full border border-brand-teal/20 animate-float-slow opacity-70"
          style={{ transform: `translateY(${scrollProgress * 100}px)` }}
        ></div>
        <div 
          className="absolute top-48 right-24 w-16 h-16 rounded-full border border-brand-mint/20 animate-float-slow opacity-70" 
          style={{ animationDelay: '1s', transform: `translateY(${scrollProgress * 60}px)` }}
        ></div>
        <div 
          className="absolute bottom-24 left-24 w-32 h-32 rounded-full border border-brand-light-blue/20 animate-float-slow opacity-70" 
          style={{ animationDelay: '2s', transform: `translateY(${-scrollProgress * 80}px)` }}
        ></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full items-center py-16 md:py-28">
          {/* Left Content */}
          <div 
            className={cn(
              "flex flex-col space-y-8 transform transition-all duration-700 delay-100",
              isVisible ? "translate-x-0 opacity-100" : "translate-x-[-50px] opacity-0"
            )}
            style={{ transform: `translateY(${scrollProgress * -50}px)` }}
            ref={parallaxRef1}
          >
            <div className="space-y-2">
              <div className="inline-block premium-glass shine-effect px-4 py-1.5 rounded-full mb-4 animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-center space-x-2">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-teal"></span>
                  </span>
                  <span className="text-sm font-medium">Revolutionary Urban Mobility</span>
                </div>
              </div>
              
              <h1 className={cn(
                "banner-text text-5xl md:text-6xl lg:text-7xl animate-fade-in opacity-0",
                inView1 ? "animate-scale-in" : ""
              )} style={{ animationDelay: '0.5s' }}>
                RIDE THE
                <br />
                <span className="gradient-text relative">
                  FUTURE
                  <span className="absolute -top-6 -right-6 text-xl text-brand-teal animate-float-slow">
                    <Sparkles className="h-5 w-5" />
                  </span>
                </span>
              </h1>
              
              <div className="decorative-line mt-4 mb-6 animate-fade-in opacity-0 w-32" style={{ animationDelay: '0.6s' }}></div>
              
              <p className="mt-4 text-lg text-foreground/80 max-w-md animate-fade-in opacity-0" style={{ animationDelay: '0.7s' }}>
                Experience the perfect fusion of <span className="font-semibold text-brand-teal">advanced technology</span>, 
                <span className="font-semibold text-brand-mint"> sustainable design</span>, and 
                <span className="font-semibold text-brand-dark-blue"> unparalleled performance</span> for the modern urban commuter.
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
                <div key={index} className="stat-card flex flex-col items-center justify-center space-y-1 group perspective-card">
                  <div className="card-content">
                    <div className="flex items-center justify-center mb-2">
                      {stat.icon}
                    </div>
                    <div className="text-xl md:text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-foreground/70">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Bike Image with 3D effect */}
          <div 
            className={cn(
              "relative h-full flex items-center justify-center transform transition-all duration-700 delay-300",
              isVisible ? "translate-x-0 opacity-100" : "translate-x-[50px] opacity-0"
            )}
            style={{ transform: `translateY(${scrollProgress * 50}px)` }}
            ref={parallaxRef2}
          >
            <div className="relative perspective-3d">
              {/* Decorative elements */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border-2 border-dashed border-brand-teal/30 animate-rotate-slow opacity-40"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[105%] h-[105%] rounded-full border border-brand-mint/20 animate-rotate-slow opacity-30" style={{ animationDirection: 'reverse', animationDuration: '25s' }}></div>
              
              <div className="relative animate-float-slow transform-3d" style={{ transform: `rotateY(${scrollProgress * 10}deg) rotateX(${scrollProgress * -5}deg)` }}>
                <img
                  src="https://images.unsplash.com/photo-1557254719-da117996c2e8?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3"
                  alt="Premium Electric Bike"
                  className="max-w-full h-auto object-cover rounded-2xl shadow-2xl shine-effect transform-3d"
                />
                
                {/* "e∞" overlay text */}
                <div className="absolute top-5 right-5 text-8xl font-playfair font-bold text-white opacity-20 blur-[1px]">
                  e∞
                </div>
                
                {/* Floating elements that move independently */}
                <div className="absolute w-full h-full top-0 left-0 overflow-hidden rounded-2xl">
                  <div 
                    className="absolute top-[30%] right-[-5%] premium-glass px-4 py-2 shine-effect transform-3d"
                    style={{ transform: `translate3d(${-scrollProgress * 20}px, ${scrollProgress * 10}px, ${scrollProgress * 50}px)` }}
                  >
                    <div className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-sm font-medium">Premium Design</span>
                    </div>
                  </div>
                  
                  <div 
                    className="absolute bottom-[20%] left-[-5%] premium-glass px-4 py-2 shine-effect transform-3d"
                    style={{ transform: `translate3d(${scrollProgress * 20}px, ${-scrollProgress * 10}px, ${scrollProgress * 30}px)` }}
                  >
                    <div className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-sm font-medium">Smart Integration</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating badge with 3D transform */}
              <div 
                className={cn(
                  "absolute -bottom-10 right-10 premium-glass px-5 py-3 rounded-xl shadow-xl shine-effect transform-3d",
                  inView2 ? "animate-fade-in-right" : ""
                )}
                style={{ 
                  transform: `translate3d(${-scrollProgress * 30}px, ${scrollProgress * 20}px, ${scrollProgress * 40}px) rotateY(${-scrollProgress * 10}deg)`,
                  opacity: isVisible ? 1 : 0,
                  transition: "all 0.7s ease-out 0.8s"
                }}
              >
                <div className="flex items-center space-x-3">
                  <div className="bg-brand-teal/20 p-2 rounded-lg">
                    <Sparkles className="h-6 w-6 text-brand-teal" />
                  </div>
                  <div>
                    <div className="font-bold">Premium Quality</div>
                    <div className="text-sm text-foreground/70">Built to last</div>
                  </div>
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
