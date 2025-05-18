
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  
  const { ref: formRef, inView: formInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-brand-gray/60 via-white to-brand-gray/40 pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Have questions about our electric bikes? Our team is here to help you find the perfect ride.
            </p>
            <div className="decorative-line mx-auto my-8"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div 
              ref={formRef}
              className={cn(
                "rounded-2xl premium-glass p-8 premium-shadow-3d transition-all duration-700",
                formInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              )}
            >
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                    <Input id="name" placeholder="John Doe" className="bg-white/50 border-brand-teal/20 focus-visible:ring-brand-teal" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                    <Input id="email" type="email" placeholder="john@example.com" className="bg-white/50 border-brand-teal/20 focus-visible:ring-brand-teal" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                  <Input id="subject" placeholder="How can we help you?" className="bg-white/50 border-brand-teal/20 focus-visible:ring-brand-teal" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <Textarea id="message" placeholder="Tell us more about your inquiry..." className="bg-white/50 border-brand-teal/20 focus-visible:ring-brand-teal min-h-[150px]" />
                </div>
                <Button className="w-full bg-brand-teal hover:bg-brand-teal/90 text-white rounded-md btn-hover-effect group">
                  Send Message
                  <Send className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div 
              ref={ref}
              className={cn(
                "transition-all duration-700 flex flex-col justify-center",
                inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              )}
            >
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  <p className="text-foreground/70 mb-8">
                    Our team is available Monday through Friday, 9am to 6pm. 
                    We look forward to hearing from you and helping you find your perfect electric bike.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-brand-teal/10 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-brand-teal" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Email Us</h3>
                      <p className="text-foreground/70">info@evolveelectric.com</p>
                      <p className="text-foreground/70">support@evolveelectric.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-brand-teal/10 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-brand-teal" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Call Us</h3>
                      <p className="text-foreground/70">+1 (555) 123-4567</p>
                      <p className="text-foreground/70">Mon-Fri, 9am - 6pm</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-brand-teal/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-brand-teal" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Visit Our Showroom</h3>
                      <p className="text-foreground/70">123 Electric Avenue</p>
                      <p className="text-foreground/70">San Francisco, CA 94158</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-6">
                  <Button variant="outline" className="border border-brand-teal/60 bg-transparent hover:bg-brand-teal/10 text-foreground hover:text-brand-teal rounded-md transition-all duration-300 group">
                    View Store Locations
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Map Section */}
          <div className="mt-20 max-w-6xl mx-auto">
            <div className="rounded-xl overflow-hidden premium-shadow-3d h-[400px] relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100940.14245968247!2d-122.43759999999998!3d37.75769999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sca!4v1623211892937!5m2!1sen!2sca" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Our Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;