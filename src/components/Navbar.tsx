
import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

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
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-10 py-4',
        isScrolled ? 'bg-white/10 backdrop-blur-lg shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          {/* Logo */}
          <a href="#" className="relative z-10 flex items-center">
            <div className="flex items-center">
              <div className="text-brand-teal text-3xl font-bold mr-1">
                <span className="flex items-center">
                  e<span className="text-2xl">∞</span>
                </span>
              </div>
            </div>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <NavLink href="#home">HOME</NavLink>
          <NavLink href="#products">PRODUCTS</NavLink>
          <NavLink href="#gallery">GALLERY</NavLink>
          <NavLink href="#features">FEATURES</NavLink>
          <NavLink href="#contact">CONTACT</NavLink>
        </nav>

        {/* Right elements */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button 
            className="bg-brand-teal hover:bg-brand-teal/90 text-white rounded-md transition-all duration-300"
          >
            LOGIN
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-md"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300',
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setIsMobileMenuOpen(false)}
      />
      <div
        className={cn(
          'fixed top-0 right-0 h-full w-3/4 max-w-sm bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden overflow-y-auto',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <div className="text-brand-teal text-2xl font-bold">
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
            <MobileNavLink href="#gallery" onClick={() => setIsMobileMenuOpen(false)}>Gallery</MobileNavLink>
            <MobileNavLink href="#features" onClick={() => setIsMobileMenuOpen(false)}>Features</MobileNavLink>
            <MobileNavLink href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</MobileNavLink>
            <Button 
              className="mt-4 bg-brand-teal hover:bg-brand-teal/90 text-white w-full"
            >
              LOGIN
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <a
      href={href}
      className="relative px-3 py-2 text-sm font-medium text-foreground transition-colors hover:text-brand-teal group"
    >
      {children}
      <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-brand-teal transition-all duration-300 group-hover:w-full"></span>
    </a>
  );
};

const MobileNavLink = ({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className="flex items-center justify-between py-2 text-foreground hover:text-brand-teal transition-colors"
    >
      {children}
      <ChevronRight className="h-5 w-5" />
    </a>
  );
};

export default Navbar;
