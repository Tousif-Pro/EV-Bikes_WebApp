import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, ChevronDown, CirclePlay, Sparkles, Zap, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  const bikeRef = useRef(null);
  
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

  // Handle mouse movement for 3D effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!bikeRef.current) return;
      
      // Get dimensions of the container
      const rect = bikeRef.current.getBoundingClientRect();
      
      // Calculate mouse position relative to the center of the element
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1 to 1
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2; // -1 to 1
      
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    // Short delay to trigger entrance animations
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen overflow-hidden">
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

      <div className="container max-w-7xl mx-auto px-6 pt-6 h-full relative">
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
              <div className="inline-block premium-glass px-4 py-1.5 rounded-full mb-4">
                <div className="flex items-center space-x-2">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-teal"></span>
                  </span>
                  <span className="text-sm font-medium">Revolutionary Urban Mobility</span>
                </div>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
                RIDE THE
                <br />
                <span className="relative text-transparent gradient-text">
        FUTURE
                  <span className="absolute -top-6 -right-6 text-xl text-brand-teal animate-float-slow">
                    <Sparkles className="h-5 w-5" />
                  </span>
                </span>
              </h1>
              
              <div className="h-1 w-32 bg-gradient-to-r from-brand-teal to-brand-mint mt-4 mb-6"></div>
              
              <p className="mt-4 text-lg text-foreground/80 max-w-md">
                Experience the perfect fusion of <span className="font-semibold text-brand-teal">advanced technology</span>, 
                <span className="font-semibold text-brand-mint"> sustainable design</span>, and 
                <span className="font-semibold text-brand-dark-blue"> unparalleled performance</span> for the modern urban commuter.
              </p>
              
              <div className="pt-8 flex flex-wrap gap-4">
                <Button 
                  className="bg-brand-teal hover:bg-brand-teal/90 text-white px-8 py-6 rounded-md btn-hover-effect group"
                  size="lg"
                >
                  <span>PRE-ORDER</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
                
                <Button 
                  variant="outline" 
                  className="border-brand-dark-blue text-brand-dark-blue hover:text-brand-dark-blue/90 hover:bg-brand-dark-blue/10 px-8 py-6 rounded-md transition-all duration-300"
                  size="lg"
                >
                  DISCOVER MORE
                </Button>
              </div>
            </div>
            
            {/* Quick features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card flex flex-col items-center justify-center p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-center justify-center mb-2">
                    {stat.icon}
                  </div>
                  <div className="text-xl md:text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-foreground/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
{/* Right Content - Bike Image with 3D effect */}
<div
  className={cn(
    "relative h-full flex items-center justify-center transform transition-all duration-1000 delay-500",
    isVisible ? "translate-x-0 opacity-100" : "translate-x-[50px] opacity-0"
  )}
  style={{ transform: `translateY(${scrollProgress * 20}px)` }}
  ref={parallaxRef2}
>
  <div className="relative perspective-container w-[80%] max-w-[500px]" ref={bikeRef}>
    <div
      className="relative bike-container shadow-3xl rounded-3xl overflow-hidden bg-gradient-to-br from-black via-gray-900 to-gray-800 p-6 border border-gray-700 transform-gpu transition-all duration-700 ease-out hover:scale-105 hover:rotate-2 hover:-rotate-y-6 hover:shadow-glow"
      style={{
        transform: `rotateY(${mousePosition.x * 12}deg) rotateX(${mousePosition.y * -8}deg)`,
        transition: 'transform 0.8s ease-out, box-shadow 0.4s ease-out'
      }}
      // onMouseEnter={() => setIsHovering(true)}
      // onMouseLeave={() => setIsHovering(false)}
    >
      Light effects layer
      <div className="absolute inset-0 z-0">
  <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-cyan-200 to-transparent top-1/3 left-0 animate-light-sweep opacity-80"></div>
  <div className="absolute h-full w-1 bg-gradient-to-b from-transparent via-blue-200 to-transparent left-1/4 top-0 animate-light-sweep-vertical opacity-80"></div>
</div>
      
      {/* Wheel light effects */}
      <div className="absolute top-[40%] left-[10%] w-16 h-16 rounded-full border-4 border-transparent border-t-cyan-400 border-r-blue-400 opacity-0 hover:opacity-80 transition-opacity duration-500 animate-spin-medium"></div>
      <div className="absolute bottom-[25%] right-[15%] w-16 h-16 rounded-full border-4 border-transparent border-t-cyan-400 border-r-blue-400 opacity-0 hover:opacity-80 transition-opacity duration-500 animate-spin-medium"></div>
      
      {/* Main bike image with enhanced effects */}
      <img
        src="/Image_1-removebg-preview.png"
        alt="Premium Electric Bike"
        className="w-full h-auto object-cover rounded-3xl shadow-4xl bike-img hover:scale-110 hover:brightness-125 transition-all duration-700 transform-gpu relative z-10"
      />
      
      {/* Interactive glow points on the bike */}
      <div className="absolute top-[20%] left-[25%] w-6 h-6 glow-element opacity-0 hover:opacity-100 transition-opacity duration-300">
        <div className="absolute w-6 h-6 rounded-full bg-blue-400/20 animate-ping-slow"></div>
        <div className="absolute w-3 h-3 rounded-full bg-cyan-400 top-1.5 left-1.5 shadow-md hover:scale-150 hover:shadow-glow-cyan transition-all duration-300"></div>
      </div>
      
      <div className="absolute bottom-[30%] left-[55%] w-6 h-6 glow-element opacity-0 hover:opacity-100 transition-opacity duration-300">
        <div className="absolute w-6 h-6 rounded-full bg-blue-400/20 animate-ping-slow"></div>
        <div className="absolute w-3 h-3 rounded-full bg-blue-400 top-1.5 left-1.5 shadow-md hover:scale-150 hover:shadow-glow-blue transition-all duration-300"></div>
      </div>
      
      {/* Floating elements with enhanced 3D glass effect */}
      <div className="absolute w-full h-full top-0 left-0 overflow-hidden rounded-3xl">
        <div
          className="absolute top-[10%] right-[5%] bg-white/10 backdrop-blur-lg px-2 py-1 rounded-lg shadow-xl border border-white/30 transform-gpu transition-transform duration-700 ease-out hover:scale-110 hover:shadow-2xl animate-float"
          style={{ 
            transform: `translate(${-scrollProgress * 10}px, ${scrollProgress * 5}px) rotateY(${mousePosition.x * -5}deg)`, 
            transition: 'transform 0.8s ease-out, box-shadow 0.3s ease-out'
          }}
        >
        </div>
        
              
        {/* New feature tag that appears on hover */}
        <div
          className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-lg px-2 py-1 rounded-lg shadow-xl border border-white/30 opacity-0 hover:opacity-100 transition-opacity duration-500 hover:scale-110 hover:shadow-2xl animate-pulse-slow"
          style={{ 
            transform: `translate(-50%, -50%) rotateY(${mousePosition.x * -10}deg) rotateX(${mousePosition.y * 5}deg)`, 
            transition: 'transform 0.8s ease-out, opacity 0.5s ease-out'
          }}
        >
          <div className="flex items-center space-x-1 w-24">
            <div className="p-1 bg-gradient-to-br from-purple-400 to-blue-600 rounded-full">
              <Check className="h-3 w-3 text-white" />
            </div>
            <span className="text-xs font-extrabold text-white tracking-wider">Hyper Speed</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  {/* Add these to your CSS/tailwind.config.js */}
  <style>{`

  @keyframes light-sweep {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

@keyframes light-sweep-vertical {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
}

.animate-light-sweep {
  animation: light-sweep 2s linear infinite;
}

.animate-light-sweep-vertical {
  animation: light-sweep-vertical 3s linear infinite;
}
    @keyframes light-sweep {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }
    
    @keyframes light-sweep-vertical {
      0% { transform: translateY(-100%); }
      100% { transform: translateY(100%); }
    }
    
    @keyframes ping-slow {
      0% { transform: scale(1); opacity: 0.8; }
      70%, 100% { transform: scale(2); opacity: 0; }
    }
    
    @keyframes spin-medium {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    
    @keyframes float-particle {
      0% { transform: translateY(0) translateX(0); opacity: 0; }
      10% { opacity: 1; }
      90% { opacity: 1; }
      100% { transform: translateY(-100px) translateX(20px); opacity: 0; }
    }
    
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    
    @keyframes float-reverse {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(10px); }
    }
    
    @keyframes pulse-slow {
      0% { transform: scale(1); }
      50% { transform: scale(1.05); }
      100% { transform: scale(1); }
    }
    
    .animate-light-sweep {
      animation: light-sweep 3s linear infinite;
    }
    
    .animate-light-sweep-vertical {
      animation: light-sweep-vertical 4s linear infinite;
    }
    
    .animate-ping-slow {
      animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
    }
    
    .animate-spin-medium {
      animation: spin-medium 8s linear infinite;
    }
    
    .animate-float {
      animation: float 4s ease-in-out infinite;
    }
    
    .animate-float-reverse {
      animation: float-reverse 5s ease-in-out infinite;
    }
    
    .animate-pulse-slow {
      animation: pulse-slow 4s ease-in-out infinite;
    }
    
    .animate-spin-slow {
      animation: spin-medium 20s linear infinite;
    }
    
    .animate-spin-reverse {
      animation: spin-medium 25s linear infinite reverse;
    }
    
    .shadow-glow {
      box-shadow: 0 0 25px rgba(56, 189, 248, 0.4),
                  0 0 10px rgba(56, 189, 248, 0.2);
    }
    
    .shadow-glow-cyan {
      box-shadow: 0 0 15px rgba(34, 211, 238, 0.6);
    }
    
    .shadow-glow-blue {
      box-shadow: 0 0 15px rgba(59, 130, 246, 0.6);
    }
  `}</style>
</div>
</div>
</div>
    </section>
  );
};

export default HeroSection;