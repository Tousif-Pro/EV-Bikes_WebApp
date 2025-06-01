
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
// import Gallery from "./pages/Gallery";
import Products from "./pages/Products";
import Features from "./pages/Features";
import Contact from "./pages/Contact";
import Login from "./pages/login";
import Signup from "./pages/Signup";
import InnovationSection from "./pages/inovationsection";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/urban" element={<Gallery />} />
          <Route path="/gallery/adventure" element={<Gallery />} />
          <Route path="/gallery/performance" element={<Gallery />} /> */}
          <Route path="/products" element={<Products />} />
          <Route path="/features" element={<Features />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/innovation-section" element={<InnovationSection />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
