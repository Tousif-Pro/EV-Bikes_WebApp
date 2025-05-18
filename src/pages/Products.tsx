import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, ChevronRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const productCategories = [
  {
    title: "Urban Series",
    description: "Perfect for city commuting with sleek design and practical features",
    image: "/images/Electromagnetic Propulsion Futuristic Bicycle Concept Design (1).jpeg",
    features: ["Up to 40km range", "Lightweight design", "Smart connectivity"]
  },
  {
    title: "Adventure Series",
    description: "Tackle any terrain with powerful motors and rugged construction",
    image: "/images/ea9aedfc-b865-4d30-aef8-66ebaa465b21.jpeg",
    features: ["Up to 80km range", "All-terrain tires", "Advanced suspension"]
  },
  {
    title: "Performance Series",
    description: "Experience maximum speed and efficiency with our premium models",
    image: "/images/cb4a7fee-0fda-4541-8b30-6d2e00497dcb.jpeg",
    features: ["Up to 50km/h speeds", "Aerodynamic design", "Premium components"]
  }
];

// Bike details for all products
const bikeDetails = [
  {
    id: 1,
    name: "EVOLVE X1",
    price: 1999,
    image: "https://images.unsplash.com/photo-1560518883-4d1d1f3b3a0d?q=80&w=2970&auto=format&fit=crop",
    description: "The EVOLVE X1 is designed for urban commuters who value style and efficiency.",
    specifications: {
      range: "40km",
      weight: "15kg",
      motor: "250W",
      battery: "36V 10Ah",
      maxSpeed: "25km/h",
      chargingTime: "4 hours"
    },
    features: ["Lightweight aluminum frame", "Smartphone app integration", "LED display"]
  },
  {
    id: 2,
    name: "EVOLVE X2",
    price: 2199,
    image: "https://images.unsplash.com/photo-1560518883-4d1d1f3b3a0d?q=80&w=2970&auto=format&fit=crop",
    description: "The EVOLVE X2 offers enhanced performance for longer commutes.",
    specifications: {
      range: "50km",
      weight: "16kg",
      motor: "350W",
      battery: "48V 12Ah",
      maxSpeed: "30km/h",
      chargingTime: "5 hours"
    },
    features: ["Hydraulic disc brakes", "Shimano 7-speed gears", "Integrated lights"]
  },
  {
    id: 3,
    name: "EVOLVE X3",
    price: 2399,
    image: "https://images.unsplash.com/photo-1560518883-4d1d1f3b3a0d?q=80&w=2970&auto=format&fit=crop",
    description: "The EVOLVE X3 is built for speed and performance.",
    specifications: {
      range: "60km",
      weight: "17kg",
      motor: "500W",
      battery: "52V 14Ah",
      maxSpeed: "45km/h",
      chargingTime: "6 hours"
    },
    features: ["Carbon fiber frame", "Advanced suspension system", "High-capacity battery"]
  },
  // Add more bike details as needed
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("Urban Series");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const openModal = (productId) => {
    const product = bikeDetails.find((bike) => bike.id === productId);
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-white via-brand-gray/40 to-white pt-24 pb-16">
        {/* Hero section */}
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Our <span className="gradient-text">Product</span> Collection
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-8">
              Discover our lineup of premium electric bikes designed for every journey and adventure.
            </p>
            <div className="decorative-line mx-auto w-24 h-1 bg-brand-teal my-8"></div>
          </div>

          {/* Category navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {productCategories.map((category) => (
              <button
                key={category.title}
                onClick={() => setActiveCategory(category.title)}
                className={cn(
                  "px-6 py-3 rounded-full transition-all duration-300",
                  activeCategory === category.title
                    ? "bg-brand-teal text-white shadow-lg"
                    : "bg-white/50 hover:bg-white/80"
                )}
              >
                {category.title}
              </button>
            ))}
          </div>

          {/* Products display */}
          <div
            ref={ref}
            className={cn(
              "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            {bikeDetails.map((bike) => (
              <div key={bike.id} className="premium-glass rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src= '/images/b8bcee83-54c5-438b-bb17-004efed4bf59.jpeg' alt='image'
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-brand-teal/90 text-white px-3 py-1 rounded-full text-sm">
                    New
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{bike.name}</h3>
                  <div className="flex items-center text-brand-teal font-bold text-xl mb-3">
                    ${bike.price.toLocaleString()}
                  </div>
                  <p className="text-foreground/70 mb-6">{bike.description}</p>
                  <Button
                    onClick={() => openModal(bike.id)}
                    className="w-full bg-transparent hover:bg-brand-teal/10 text-brand-teal border border-brand-teal/30 group"
                  >
                    View Details
                    <ChevronRight className="m'l-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Featured category section */}
          <div className="mt-24 mb-16">
            <h2 className="text-3xl font-display font-bold text-center mb-12">Featured Collection: {activeCategory}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {productCategories.filter(cat => cat.title === activeCategory).map((category) => (
                <React.Fragment key={category.title}>
                  <div className="perspective-3d">
                    <div className="transform-3d premium-shadow-3d rounded-2xl overflow-hidden">
                      <img
                        src='/images/ea9aedfc-b865-4d30-aef8-66ebaa465b21.jpeg' alt='image'
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
                    <p className="text-lg text-foreground/70 mb-6">
                      {category.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {category.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <div className="mt-1 mr-3 bg-brand-teal/20 rounded-full p-1">
                            <Check className="h-4 w-4 text-brand-teal" />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/model-comparison">
                      <Button className="bg-brand-teal hover:bg-brand-teal/90 text-white btn-hover-effect group">
                        Compare Models
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-3xl mx-4 p-8 relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition"
            >
              <X className="h-5 w-5 text-gray-600" />
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Bike Image */}
              <div className="aspect-[4/3] relative overflow-hidden rounded-xl">
                <img
                  src='/images/b8bcee83-54c5-438b-bb17-004efed4bf59.jpeg' alt='image'
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Bike Details */}
              <div>
                <h3 className="text-2xl font-bold mb-4">{selectedProduct.name}</h3>
                <div className="flex items-center text-brand-teal font-bold text-2xl mb-4">
                  ${selectedProduct.price.toLocaleString()}
                </div>
                <p className="text-foreground/70 mb-6">{selectedProduct.description}</p>

                {/* Specifications */}
                <div className="mb-6">
                  <h4 className="text-lg font-bold mb-3">Specifications</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(selectedProduct.specifications).map(([key, value]) => (
                      <div key={key} className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-600 capitalize">{key}</p>
                       +
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-bold mb-3">Features</h4>
                  <ul className="space-y-2">
                    {selectedProduct.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="mt-1 mr-3 bg-brand-teal/20 rounded-full p-1">
                          <Check className="h-4 w-4 text-brand-teal" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Call to Action */}
                <Button className="w-full bg-brand-teal hover:bg-brand-teal/90 text-white">
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Products;