import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Search, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-500 py-4 w-full',
        isScrolled 
          ? 'bg-white/10 backdrop-blur-lg shadow-md border-b border-white/10' 
          : 'bg-transparent'
      )}
    >
      <div className="container max-w-7xl mx-auto flex items-center justify-between px-4 lg:px-8">
        <div className="flex items-center">
          {/* Logo */}
          <a href="#" className="relative z-10 flex items-center">
            <div className="flex items-center">
              <div className="text-brand-teal text-5xl font-bold mr-1 shine-effect">
                <span className="flex items-center">
                  e<span className="text-4xl">∞</span>
                </span>
              </div>
            </div>
          </a>
        </div>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink 
                href="/"
                className="nav-link"
              >
                HOME
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink 
                href="/products"
                className="nav-link"
              >
                PRODUCTS
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink 
                href="/features"
                className="nav-link"
              >
                FEATURES
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink 
                href="/contact"
                className="nav-link"
              >
                CONTACT
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right elements */}
        <div className="hidden lg:flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="text-foreground hover:text-brand-teal transition-colors hover:bg-transparent">
            <Search className="h-5 w-5" />
          </Button>
          <Button 
            className="border border-brand-teal/60 bg-transparent hover:bg-brand-teal/10 text-foreground hover:text-brand-teal rounded-md transition-all duration-300"
            onClick={() => window.location.href = '/login'}
          >
            LOGIN
          </Button>
          <Button 
            className="bg-brand-teal hover:bg-brand-teal/90 text-white rounded-md btn-hover-effect group shine-effect"
          >
            GET STARTED
            <ArrowUpRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 rounded-md"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity duration-300',
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setIsMobileMenuOpen(false)}
      />
      <div
        className={cn(
          'fixed top-0 right-0 h-full w-3/4 max-w-sm premium-glass z-50 transform transition-transform duration-500 ease-in-out lg:hidden overflow-y-auto',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <div className="text-brand-teal text-2xl font-bold shine-effect">
              <span className="flex items-center">
                e<span className="text-xl">∞</span>
              </span>
            </div>
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="flex flex-col space-y-4">
            <MobileNavLink href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</MobileNavLink>
            <MobileNavLink href="#products" onClick={() => setIsMobileMenuOpen(false)}>Products</MobileNavLink>
            <MobileNavLink href="#features" onClick={() => setIsMobileMenuOpen(false)}>Features</MobileNavLink>
            <MobileNavLink href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</MobileNavLink>
            <Button 
              className="mt-4 bg-brand-teal hover:bg-brand-teal/90 text-white w-full btn-hover-effect"
            >
              LOGIN
            </Button>
            <Button 
              variant="outline"
              className="border border-brand-teal/60 bg-transparent hover:bg-brand-teal/10 text-foreground w-full group"
            >
              GET STARTED
              <ArrowUpRight className="h-4 w-4 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

const MobileNavLink = ({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className="flex items-center justify-between py-2 text-foreground hover:text-brand-teal transition-colors border-b border-white/10 pb-2 hover:pl-2 duration-300"
    >
      {children}
      <ChevronRight className="h-5 w-5" />
    </a>
  );
};

export default Navbar;
