
import { useInView } from 'react-intersection-observer';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <footer id="contact" className="bg-brand-black text-white pt-20 pb-6" ref={ref}>
      <div className="container max-w-7xl mx-auto px-6">
        {/* Newsletter Section */}
        <div className={cn(
          "mb-16 transition-all duration-700",
          inView ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"
        )}>
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-2xl font-display font-bold mb-4">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-white/70 mb-6">
              Stay updated with our latest releases, special offers, and e-mobility insights.
            </p>
            <div className="flex">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 rounded-l-md rounded-r-none border-r-0 bg-white/10 border-white/20 focus:border-brand-teal text-white"
              />
              <Button className="bg-brand-teal hover:bg-brand-teal/90 text-white rounded-l-none">
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer */}
        <div className={cn(
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-10 border-t border-white/10 transition-all duration-700 delay-200",
          inView ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"
        )}>
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="text-brand-teal text-3xl font-bold mr-1">
                <span className="flex items-center">
                  e<span className="text-2xl">∞</span>
                </span>
              </div>
            </div>
            <p className="text-white/70 mb-6">
              Revolutionizing urban mobility with premium electric bikes designed for the modern commuter.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Facebook className="h-4 w-4" />} />
              <SocialIcon icon={<Twitter className="h-4 w-4" />} />
              <SocialIcon icon={<Instagram className="h-4 w-4" />} />
              <SocialIcon icon={<Youtube className="h-4 w-4" />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '#home' },
                { label: 'Products', href: '#products' },
                { label: 'Gallery', href: '#gallery' },
                { label: 'Features', href: '#features' },
                { label: 'Testimonials', href: '#testimonials' }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-white/70 hover:text-brand-teal transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us', href: '#' },
                { label: 'Sustainability', href: '#' },
                { label: 'Careers', href: '#' },
                { label: 'Press', href: '#' },
                { label: 'Privacy Policy', href: '#' }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-white/70 hover:text-brand-teal transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 text-brand-teal mr-3 flex-shrink-0" />
                <span className="text-white/70">
                  123 Electric Avenue, Innovation District, San Francisco, CA 94103
                </span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-brand-teal mr-3 flex-shrink-0" />
                <span className="text-white/70">+1 (888) 123-4567</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-brand-teal mr-3 flex-shrink-0" />
                <span className="text-white/70">info@ebike-infinity.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className={cn(
          "pt-10 border-t border-white/10 text-center text-white/50 text-sm transition-all duration-700 delay-300",
          inView ? "opacity-100" : "opacity-0"
        )}>
          <p>© {new Date().getFullYear()} e∞ Bikes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon }) => {
  return (
    <a href="#" className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-teal/90 transition-colors duration-300">
      {icon}
    </a>
  );
};

export default Footer;
