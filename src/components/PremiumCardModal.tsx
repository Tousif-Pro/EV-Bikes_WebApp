import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, Shield, PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Premium plan features
const premiumPlans = [
  {
    name: "Elite",
    price: "$2,499",
    description: "The ultimate premium experience with exclusive materials and custom design options.",
    features: [
      "Premium carbon fiber frame",
      "Custom color options",
      "Titanium components package",
      "Premium leather accents",
      "Extended 3-year warranty"
    ],
    highlightColor: "from-brand-teal to-brand-mint"
  },
  {
    name: "Professional",
    price: "$1,899",
    description: "Professional-grade performance with advanced technology and premium finish.",
    features: [
      "Aerospace-grade aluminum frame",
      "Performance motor system",
      "Carbon fiber accents",
      "Premium digital display",
      "2-year comprehensive warranty"
    ],
    highlightColor: "from-brand-dark-blue to-brand-light-blue"
  }
];

interface PremiumCardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PremiumCardModal: React.FC<PremiumCardModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [rotateX, setRotateX] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Handle card rotation based on mouse movement
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate rotation (limited range for subtle effect)
    const rotX = ((y - rect.height / 2) / rect.height) * 6;
    const rotY = ((rect.width / 2 - x) / rect.width) * 6;

    setRotateX(rotX);
    setRotateY(rotY);

    // Update CSS variables for light effect
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleMouseLeave = () => {
    // Reset rotation when mouse leaves
    setRotateX(0);
    setRotateY(0);
  };

  // Control visibility with delay to allow for animations
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    } else {
      document.body.style.overflow = 'auto'; // Re-enable scrolling when modal is closed
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 500);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />

          {/* 3D Card */}
          <motion.div
            ref={cardRef}
            className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto perspective-3d"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
              transformStyle: "preserve-3d"
            }}
          >
            <div
              className="relative p-1 rounded-2xl shadow-3d transform-gpu"
              style={{
                background: `radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(107, 206, 206, 0.4), rgba(45, 76, 128, 0.2) 70%)`,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
            >
              <div className="relative h-full rounded-2xl bg-gradient-to-br from-white/95 via-white/90 to-white/95 overflow-hidden">
                {/* Holographic effects */}
                <div className="absolute inset-0 holographic-glow opacity-10"></div>
                <div className="absolute inset-0 overlay-grid"></div>

                {/* Close button */}
                <button
                  className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 hover:bg-white backdrop-blur-sm shadow-lg transition-all duration-300"
                  onClick={handleClose}
                >
                  <X className="w-5 h-5 text-gray-700" />
                </button>

                <div className="p-8 md:p-10 h-full">
                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="font-display text-3xl md:text-4xl font-bold">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-light-blue">
                        Premium Experience Options
                      </span>
                    </h3>
                    <div className="decorative-line my-3"></div>
                    <p className="text-foreground/70">Select the premium package that matches your ambition</p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-7 gap-8">
                    {/* Left: Bike 3D View */}
                    <div className="lg:col-span-3">
                      <div className="premium-glass rounded-xl p-1 overflow-hidden h-full">
                        <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg h-full transform-gpu perspective-child">
                          {/* 3D Bike Image with rotation animation */}
                          <div className="relative aspect-square w-full overflow-hidden flex items-center justify-center">
                            <motion.img
                              src="https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?q=80&w=2022&auto=format&fit=crop"
                              alt="Premium Electric Bike"
                              className="w-4/5 h-4/5 object-contain drop-shadow-2xl"
                              style={{
                                transformStyle: "preserve-3d",
                                transform: `rotateY(${rotateY * 2}deg)`
                              }}
                              animate={{
                                rotateY: [0, 5, 0, -5, 0],
                              }}
                              transition={{
                                duration: 20,
                                ease: "linear",
                                repeat: Infinity
                              }}
                            />

                            {/* Floating badge */}
                            <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full text-white text-sm font-semibold">
                              <div className="flex items-center">
                                <Shield className="w-4 h-4 text-brand-teal mr-1.5" />
                                <span>{premiumPlans[activeTab].name} Edition</span>
                              </div>
                            </div>

                            {/* Price tag */}
                            <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-lg px-4 py-2 rounded-lg">
                              <div className="text-white font-bold text-xl">{premiumPlans[activeTab].price}</div>
                            </div>

                            {/* Interactive shine effect */}
                            <div className="absolute inset-0 shine-overlay pointer-events-none"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right: Plans and Features */}
                    <div className="lg:col-span-4 flex flex-col">
                      {/* Tabs */}
                      <div className="flex mb-6 premium-glass p-1 rounded-full">
                        {premiumPlans.map((plan, index) => (
                          <button
                            key={index}
                            className={`flex-1 py-2 px-4 rounded-full text-sm font-medium transition-all duration-300 ${
                              activeTab === index
                                ? `bg-gradient-to-r ${plan.highlightColor} text-white shadow-lg`
                                : 'text-gray-700 hover:bg-gray-100'
                            }`}
                            onClick={() => setActiveTab(index)}
                          >
                            {plan.name}
                          </button>
                        ))}
                      </div>

                      {/* Features */}
                      <div className="flex-grow space-y-5 overflow-auto max-h-[350px] pr-2 premium-scrollbar">
                        <div className="premium-glass p-5 rounded-xl bg-white/50">
                          <h4 className="font-semibold text-lg mb-2">{premiumPlans[activeTab].description}</h4>
                        </div>

                        {premiumPlans[activeTab].features.map((feature, index) => (
                          <motion.div
                            key={index}
                            className="premium-glass p-4 rounded-xl bg-white/50"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <div className="flex items-center">
                              <div className={`p-2 rounded-full bg-gradient-to-r ${premiumPlans[activeTab].highlightColor} mr-3`}>
                                <Shield className="w-4 h-4 text-white" />
                              </div>
                              <span>{feature}</span>
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Action buttons */}
                      <div className="flex gap-3 mt-6">
                        <Button
                          className={`flex-1 bg-gradient-to-r ${premiumPlans[activeTab].highlightColor} hover:opacity-90 text-white py-5 rounded-lg btn-hover-effect group shine-effect`}
                          size="lg"
                        >
                          <span>ORDER NOW</span>
                          <ChevronRight className="ml-1 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </Button>

                        <Button
                          className="flex-1 bg-white border border-gray-200 hover:bg-gray-50 text-gray-800 py-5 rounded-lg transition-all duration-300"
                          size="lg"
                          variant="outline"
                        >
                          <span>CUSTOMIZE</span>
                          <PlusCircle className="ml-1 h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PremiumCardModal;