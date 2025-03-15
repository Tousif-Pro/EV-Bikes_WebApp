
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
  navigationMenuTriggerStyle
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
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3',
        isScrolled 
          ? 'bg-white/8 backdrop-blur-lg shadow-sm border-b border-white/10' 
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 lg:px-8">
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
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink 
                href="#home"
                className={cn(
                  "px-4 py-2 text-sm font-medium text-foreground hover:text-brand-teal transition-colors hover:bg-transparent focus:bg-transparent",
                )}
              >
                HOME
              </NavigationMenuLink>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuLink 
                href="#products"
                className={cn(
                  "px-4 py-2 text-sm font-medium text-foreground hover:text-brand-teal transition-colors hover:bg-transparent focus:bg-transparent",
                )}
              >
                PRODUCTS
              </NavigationMenuLink>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger 
                className="px-4 py-2 text-sm font-medium text-foreground hover:text-brand-teal transition-colors hover:bg-transparent focus:bg-transparent bg-transparent"
              >
                GALLERY
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-brand-teal/20 to-brand-mint/20 p-6 no-underline outline-none focus:shadow-md"
                        href="#gallery"
                      >
                        <div className="mt-4 mb-2 text-lg font-medium">
                          Premium Collection
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Explore our premium electric bike collection through stunning visuals
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="#gallery" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Urban Series</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Perfect for city commuting
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="#gallery" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Adventure Series</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Built for off-road exploration
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="#gallery" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Performance Series</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Maximum speed and efficiency
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuLink 
                href="#features"
                className={cn(
                  "px-4 py-2 text-sm font-medium text-foreground hover:text-brand-teal transition-colors hover:bg-transparent focus:bg-transparent",
                )}
              >
                FEATURES
              </NavigationMenuLink>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuLink 
                href="#contact"
                className={cn(
                  "px-4 py-2 text-sm font-medium text-foreground hover:text-brand-teal transition-colors hover:bg-transparent focus:bg-transparent",
                )}
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
          >
            LOGIN
          </Button>
          <Button 
            className="bg-brand-teal hover:bg-brand-teal/90 text-white rounded-md transition-all duration-300 group"
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

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity duration-300',
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setIsMobileMenuOpen(false)}
      />
      <div
        className={cn(
          'fixed top-0 right-0 h-full w-3/4 max-w-sm bg-white/10 backdrop-blur-xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto border-l border-white/20',
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
            <Button 
              variant="outline"
              className="border border-brand-teal/60 bg-transparent hover:bg-brand-teal/10 text-foreground w-full"
            >
              GET STARTED
              <ArrowUpRight className="h-4 w-4 ml-1" />
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
      className="flex items-center justify-between py-2 text-foreground hover:text-brand-teal transition-colors border-b border-white/10 pb-2"
    >
      {children}
      <ChevronRight className="h-5 w-5" />
    </a>
  );
};

export default Navbar;
