
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    quote: "This electric bike has completely transformed my daily commute. I save money on fuel and parking, plus I arrive at work energized instead of stressed.",
    author: "Sarah Jenkins",
    role: "Urban Commuter",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    stars: 5
  },
  {
    quote: "As someone concerned about the environment, this e-bike allows me to reduce my carbon footprint while still enjoying the freedom of personal transportation.",
    author: "Michael Chen",
    role: "Environmental Analyst",
    avatar: "https://randomuser.me/api/portraits/men/9.jpg",
    stars: 5
  },
  {
    quote: "The battery life is incredible! I can go for multiple days of city riding before needing to recharge. The app integration makes tracking my rides effortless.",
    author: "Jasmine Rodriguez",
    role: "Fitness Enthusiast",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    stars: 4
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-rotate testimonials
  useEffect(() => {
    if (!inView) return;
    
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    
    return () => clearInterval(interval);
  }, [inView]);

  return (
    <section id="testimonials" className="section-spacing relative" ref={ref}>
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-brand-mint/20 blur-3xl hero-mask"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-brand-light-blue/20 blur-3xl hero-mask"></div>
      </div>

      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className={cn(
            "inline-block glass px-4 py-1.5 rounded-full mb-4 transition-all duration-500",
            inView ? "opacity-100" : "opacity-0 transform translate-y-4"
          )}>
            <span className="text-sm font-medium">What Our Riders Say</span>
          </div>
          
          <h2 className={cn(
            "section-title transition-all duration-500 delay-100",
            inView ? "opacity-100" : "opacity-0 transform translate-y-4"
          )}>
            Trusted by Urban Commuters
          </h2>
          
          <p className={cn(
            "section-subtitle transition-all duration-500 delay-200",
            inView ? "opacity-100" : "opacity-0 transform translate-y-4"
          )}>
            Hear from our community of riders who have experienced the difference 
            our electric bikes make in their daily lives.
          </p>
        </div>

        <div className={cn(
          "relative max-w-4xl mx-auto transition-all duration-700 delay-300",
          inView ? "opacity-100" : "opacity-0 scale-95"
        )}>
          {/* Large quote mark */}
          <div className="absolute -top-10 -left-8 text-brand-teal/20">
            <Quote className="h-24 w-24" />
          </div>
          
          {/* Testimonial cards */}
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={cn(
                  "glass-card p-8 md:p-10 transition-all duration-500 absolute inset-0",
                  index === activeIndex 
                    ? "opacity-100 transform translate-x-0" 
                    : index < activeIndex 
                      ? "opacity-0 transform -translate-x-8" 
                      : "opacity-0 transform translate-x-8"
                )}
              >
                <div className="flex flex-col space-y-6">
                  {/* Stars */}
                  <div className="flex">
                    {Array(5).fill(0).map((_, i) => (
                      <Star 
                        key={i} 
                        className={cn(
                          "h-5 w-5 mr-1", 
                          i < testimonial.stars ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                        )} 
                      />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <p className="text-lg md:text-xl italic">"{testimonial.quote}"</p>
                  
                  {/* Author info */}
                  <div className="flex items-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.author} 
                      className="h-12 w-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.author}</h4>
                      <p className="text-sm text-foreground/70">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation dots */}
          <div className="flex justify-center mt-80 md:mt-72 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "h-2.5 w-2.5 rounded-full transition-all duration-300",
                  index === activeIndex ? "bg-brand-teal w-8" : "bg-brand-teal/30"
                )}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
          
          {/* Navigation buttons */}
          <div className="absolute top-1/2 -mt-20 left-0 right-0 flex justify-between items-center px-4">
            <button
              className="h-10 w-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-md transition-all duration-300"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-5 w-5 text-brand-teal" />
            </button>
            
            <button
              className="h-10 w-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-md transition-all duration-300"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-5 w-5 text-brand-teal" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
