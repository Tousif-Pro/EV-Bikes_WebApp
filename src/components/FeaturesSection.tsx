
import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  Battery, 
  Zap, 
  Shield, 
  Smartphone, 
  Globe, 
  Wind
} from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
  {
    icon: <Battery className="h-8 w-8" />,
    title: "Long-lasting Battery",
    description: "80+ miles per charge, ensuring you never have to worry about running out of power on your daily commute."
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Quick Charging",
    description: "Full charge in just 3.5 hours, so your bike is always ready for your next adventure."
  },
  {
    icon: <Wind className="h-8 w-8" />,
    title: "Impressive Speed",
    description: "Reach speeds of up to 50 km/h, making your commute faster and more enjoyable."
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Advanced Security",
    description: "Built-in GPS tracking and alarm system keeps your investment safe at all times."
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: "Smart Integration",
    description: "Connect with your smartphone for ride stats, battery status, and navigation."
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Eco-friendly",
    description: "Zero emissions and sustainable materials make this the perfect choice for environmentally conscious riders."
  }
];

const FeaturesSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <section id="features" className="section-spacing relative overflow-hidden" ref={ref}>
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-brand-mint/20 blur-3xl hero-mask"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-brand-light-blue/20 blur-3xl hero-mask"></div>
      </div>

      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className={cn(
            "inline-block glass px-4 py-1.5 rounded-full mb-4 transition-all duration-500",
            inView ? "opacity-100" : "opacity-0 transform translate-y-4"
          )}>
            <span className="text-sm font-medium">Cutting-Edge Technology</span>
          </div>
          
          <h2 className={cn(
            "section-title transition-all duration-500 delay-100",
            inView ? "opacity-100" : "opacity-0 transform translate-y-4"
          )}>
            Designed for the Modern Commuter
          </h2>
          
          <p className={cn(
            "section-subtitle transition-all duration-500 delay-200",
            inView ? "opacity-100" : "opacity-0 transform translate-y-4"
          )}>
            Our electric bikes combine sleek design with powerful performance, 
            providing you with the ultimate riding experience for your daily urban adventures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              feature={feature} 
              index={index} 
              inView={inView} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ feature, index, inView }) => {
  const delay = 300 + (index * 100);
  
  return (
    <div className={cn(
      "feature-card transition-all duration-500",
      inView ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"
    )} style={{ transitionDelay: `${delay}ms` }}>
      <div className="mb-4 p-3 bg-brand-teal/10 inline-block rounded-md text-brand-teal">
        {feature.icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
      <p className="text-foreground/70">{feature.description}</p>
    </div>
  );
};

export default FeaturesSection;
