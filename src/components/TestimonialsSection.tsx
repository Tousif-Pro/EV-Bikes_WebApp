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

  useEffect(() => {
    if (!inView) return;
    
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    
    return () => clearInterval(interval);
  }, [inView]);

  return (
    <section id="testimonials" className="relative py-20 bg-white overflow-hidden" ref={ref}>
  {/* Background Styling */}
  <div className="absolute inset-0 -z-10 flex justify-center items-center">
    <div className="w-64 h-64 rounded-full bg-brand-mint/20 blur-3xl absolute top-10 right-20"></div>
    <div className="w-64 h-64 rounded-full bg-brand-light-blue/20 blur-3xl absolute bottom-10 left-20"></div>
  </div>

  <div className="container max-w-5xl mx-auto px-6">
    {/* Section Header */}
    <div className="text-center mb-16">
      <span className={cn("inline-block bg-white shadow-md px-4 py-1.5 rounded-full mb-4 text-brand-teal font-medium", inView ? "opacity-100" : "opacity-0 translate-y-4 transition-all duration-500")}>
        What Our Riders Say
      </span>
      <h2 className={cn("text-4xl font-bold text-gray-900 mb-4", inView ? "opacity-100" : "opacity-0 translate-y-4 transition-all duration-500 delay-100")}>
        Trusted by Urban Commuters
      </h2>
      <p className={cn("text-lg text-gray-600 max-w-2xl mx-auto", inView ? "opacity-100" : "opacity-0 translate-y-4 transition-all duration-500 delay-200")}>
        Hear from our community of riders who have experienced the difference our electric bikes make in their daily lives.
      </p>
    </div>

    {/* Testimonial Slider */}
    <div className="relative mx-auto max-w-4xl">
      <div className="relative min-h-[400px] flex items-center justify-center">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={cn(
              "absolute w-full transition-opacity duration-700 ease-in-out",
              index === activeIndex ? "opacity-100" : "opacity-0"
            )}
          >
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Testimonial Image */}
                <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-full h-full rounded-full object-cover border-4 border-brand-teal shadow-sm"
                  />
                </div>

                {/* Testimonial Content */}
                <div className="text-center md:text-left relative">
                  {/* Double Quotes */}
                  <span className="absolute -top-6 -left-6 text-6xl text-brand-teal opacity-50 transform -translate-y-2">“</span>
                  <span className="absolute -bottom-6 -right-6 text-6xl text-brand-teal opacity-50 transform translate-y-2">”</span>

                  {/* Feedback */}
                  <p className="text-lg md:text-xl italic text-gray-800 leading-relaxed pl-8 pr-8">
                    {testimonial.quote}
                  </p>

                  {/* Author Details */}
                  <div className="mt-6">
                    <h4 className="font-semibold text-gray-900 text-lg">{testimonial.author}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>

                  {/* Star Rating */}
                  <div className="flex justify-center md:justify-start mt-4">
                    {Array(5).fill(0).map((_, i) => (
                      <Star key={i} className={cn("h-5 w-5", i < testimonial.stars ? "text-yellow-400 fill-yellow-400" : "text-gray-300")} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center space-x-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={cn(
              "h-2.5 w-2.5 rounded-full transition-all duration-300",
              index === activeIndex ? "bg-brand-teal w-6" : "bg-gray-400/40"
            )}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  </div>
</section>
  );
};

export default TestimonialsSection;
