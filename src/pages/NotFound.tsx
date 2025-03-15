
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center glass-card p-12 max-w-md mx-auto">
        <div className="text-7xl font-display font-bold text-brand-teal mb-4">404</div>
        <h1 className="text-3xl font-display font-bold mb-4">Page Not Found</h1>
        <p className="text-foreground/70 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Button 
          className="bg-brand-teal hover:bg-brand-teal/90 text-white btn-hover-effect group"
          size="lg"
          onClick={() => window.location.href = "/"}
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          <span>Return to Home</span>
        </Button>
      </div>
      
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-brand-mint/20 blur-3xl hero-mask animate-float"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brand-light-blue/20 blur-3xl hero-mask"></div>
      </div>
    </div>
  );
};

export default NotFound;
