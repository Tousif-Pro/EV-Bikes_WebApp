
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Battery, Cpu, Gauge, Smartphone, Navigation, Lock, Clock, Wind } from 'lucide-react';

const features = [
  {
    icon: <Battery className="h-8 w-8 text-brand-teal" />,
    title: "Long Range Battery",
    description: "Our proprietary battery technology provides up to 80km of range on a single charge, keeping you moving longer."
  },
  {
    icon: <Cpu className="h-8 w-8 text-brand-teal" />,
    title: "Smart Control System",
    description: "Advanced on-board computer with user-friendly interface for complete control of your riding experience."
  },
  {
    icon: <Gauge className="h-8 w-8 text-brand-teal" />,
    title: "Powerful Performance",
    description: "Reach speeds of up to 50km/h with our efficient motors that provide smooth acceleration and reliable power."
  },
  {
    icon: <Smartphone className="h-8 w-8 text-brand-teal" />,
    title: "Mobile Connectivity",
    description: "Connect to our dedicated app for ride tracking, statistics, remote locking, and firmware updates."
  },
  {
    icon: <Navigation className="h-8 w-8 text-brand-teal" />,
    title: "GPS Navigation",
    description: "Built-in GPS for route planning, location tracking, and anti-theft protection gives you peace of mind."
  },
  {
    icon: <Lock className="h-8 w-8 text-brand-teal" />,
    title: "Advanced Security",
    description: "Multi-layer security features including electronic locking, motion detection, and location alerts."
  },
  {
    icon: <Clock className="h-8 w-8 text-brand-teal" />,
    title: "Quick Charging",
    description: "Rapid charging technology gets you back on the road quickly, with full charges in as little as 3.5 hours."
  },
  {
    icon: <Wind className="h-8 w-8 text-brand-teal" />,
    title: "Aerodynamic Design",
    description: "Precisely engineered frame and components to minimize drag and maximize efficiency during your ride."
  }
];

const Features = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: techRef, inView: techInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-white via-brand-gray/40 to-white pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Hero section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Advanced <span className="gradient-text">Features</span>
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Discover the innovative technology and design elements that make our electric bikes stand out.
            </p>
            <div className="decorative-line mx-auto my-8"></div>
          </div>
          
          {/* Features grid */}
          <div 
            ref={ref}
            className={cn(
              "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24 transition-all duration-700",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            {features.map((feature, index) => (
              <div 
                key={index}
                className="premium-glass p-6 rounded-xl transition-all duration-500 hover:shadow-lg hover:-translate-y-2"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="bg-brand-teal/10 p-3 rounded-full w-fit mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </div>
            ))}
          </div>
          
          {/* Technology showcase */}
          <div 
            ref={techRef}
            className={cn(
              "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center transition-all duration-700",
              techInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <div className="perspective-3d">
              <div className="transform-3d premium-shadow-3d rounded-2xl overflow-hidden">
                <img 
                  src="/images/mybike.jpeg" 
                  alt="Electric bike technology" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Cutting-Edge Technology</h2>
              <p className="text-lg text-foreground/70 mb-8">
                Our electric bikes incorporate the latest advancements in battery technology, motor efficiency, and smart connectivity to deliver an unparalleled riding experience.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4 p-1 rounded-full bg-brand-teal/20">
                    <Battery className="h-6 w-6 text-brand-teal" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Battery Technology</h4>
                    <p className="text-foreground/70">Advanced lithium-ion cells with smart power management systems optimize energy usage and provide industry-leading range.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4 p-1 rounded-full bg-brand-teal/20">
                    <Cpu className="h-6 w-6 text-brand-teal" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Intelligent Control System</h4>
                    <p className="text-foreground/70">Our proprietary control system continuously adjusts power output based on riding conditions, ensuring optimal efficiency and performance.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4 p-1 rounded-full bg-brand-teal/20">
                    <Smartphone className="h-6 w-6 text-brand-teal" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">App Integration</h4>
                    <p className="text-foreground/70">Seamlessly connect your bike to our mobile app to track performance metrics, customize settings, and receive maintenance updates.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Materials section
          <div className="mt-24">
            <h2 className="text-3xl font-bold mb-12 text-center">Premium Materials</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="premium-glass p-6 rounded-xl text-center">
                <div className="aspect-square rounded-xl overflow-hidden mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=2070&auto=format&fit=crop" 
                    alt="Aluminum frame" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Aircraft-Grade Aluminum</h3>
                <p className="text-foreground/70">Lightweight yet incredibly strong frame construction provides durability without adding unnecessary weight.</p>
              </div>
              
              <div className="premium-glass p-6 rounded-xl text-center">
                <div className="aspect-square rounded-xl overflow-hidden mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1582516732443-4a07e77e391a?q=80&w=2807&auto=format&fit=crop" 
                    alt="Carbon components" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Carbon Fiber Components</h3>
                <p className="text-foreground/70">Premium carbon fiber parts reduce weight and increase strength in critical areas of the bike's construction.</p>
              </div>
              
              <div className="premium-glass p-6 rounded-xl text-center">
                <div className="aspect-square rounded-xl overflow-hidden mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1571068316344-75bc76f77890?q=80&w=2970&auto=format&fit=crop" 
                    alt="Premium tires" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">High-Performance Tires</h3>
                <p className="text-foreground/70">Specially formulated rubber compounds provide optimal grip and durability for all riding conditions.</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Features;