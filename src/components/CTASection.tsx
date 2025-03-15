
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="section-spacing relative overflow-hidden" ref={ref}>
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-brand-mint/20 blur-3xl hero-mask"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brand-light-blue/20 blur-3xl hero-mask"></div>
      </div>

      <div className="container max-w-7xl mx-auto px-6">
        <div className="relative">
          {/* Main CTA card */}
          <div className={cn(
            "glass-card p-8 md:p-12 transition-all duration-700",
            inView ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"
          )}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left content */}
              <div>
                <div className="inline-block glass px-4 py-1.5 rounded-full mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
                    <span className="text-sm font-medium">Limited Time Offer</span>
                  </div>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 tracking-tight">
                  Ready to Transform Your Commute?
                </h2>
                
                <p className="text-lg text-foreground/80 mb-8">
                  Experience the freedom of electric mobility with our premium e-bikes. 
                  Pre-order now and be among the first to ride the future.
                </p>
                
                <ul className="space-y-3 mb-8">
                  {[
                    "Free home delivery",
                    "2-year comprehensive warranty",
                    "30-day money-back guarantee",
                    "Flexible payment options"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <div className="h-5 w-5 rounded-full bg-brand-teal/20 flex items-center justify-center mr-3">
                        <Check className="h-3 w-3 text-brand-teal" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-4">
                  <Button 
                    className="bg-brand-teal hover:bg-brand-teal/90 text-white px-8 py-6 rounded-md btn-hover-effect group"
                    size="lg"
                  >
                    <span>PRE-ORDER NOW</span>
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="border-brand-dark-blue text-brand-dark-blue hover:text-brand-dark-blue/90 hover:bg-brand-dark-blue/10 px-8 py-6 rounded-md"
                    size="lg"
                  >
                    CONTACT SALES
                  </Button>
                </div>
              </div>
              
              {/* Right image */}
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1575674485118-1b0383a560c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" 
                  alt="Electric Bike" 
                  className="rounded-xl w-full h-auto object-cover"
                />
                
                {/* Price tag */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full py-2 px-4 shadow-lg">
                  <div className="flex flex-col items-center">
                    <span className="text-xs text-foreground/70">Starting at</span>
                    <span className="text-xl font-bold text-brand-teal">$1,999</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative element */}
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-brand-teal/10 rounded-full blur-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
