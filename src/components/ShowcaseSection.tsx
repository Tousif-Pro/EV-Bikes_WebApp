// import { useRef, useState, useEffect } from 'react';
// import { useInView } from 'react-intersection-observer';
// import { cn } from '@/lib/utils';
// import { Play, ArrowRight, Layers } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// const showcaseItems = [
//   {
//     title: "Precision Engineering",
//     description: "Every component meticulously designed for optimal performance and durability.",
//     image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?q=80&w=2022&auto=format&fit=crop",
//     color: "from-brand-teal/80 to-brand-dark-blue/80"
//   },
//   {
//     title: "Smart Integration",
//     description: "Seamlessly connect with your digital life through our intuitive companion app.",
//     image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop",
//     color: "from-brand-dark-blue/80 to-brand-light-blue/80"
//   },
//   {
//     title: "Sustainable Design",
//     description: "Environmentally conscious materials and processes for a greener future.",
//     image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop",
//     color: "from-brand-mint/80 to-brand-teal/80"
//   },
//   {
//     title: "Premium Craftsmanship",
//     description: "Handcrafted with attention to detail for an exceptional riding experience.",
//     image: "https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=2070&auto=format&fit=crop",
//     color: "from-brand-light-blue/80 to-brand-mint/80"
//   },
// ];

// const ShowcaseSection = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const containerRef = useRef(null);
  
//   const { ref, inView } = useInView({
//     triggerOnce: false,
//     threshold: 0.2,
//   });
  
//   const { ref: titleRef, inView: titleInView } = useInView({
//     triggerOnce: false,
//     threshold: 0.5,
//   });

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prevIndex) => (prevIndex + 1) % showcaseItems.length);
//     }, 3000); // Change image every 3 seconds

//     return () => clearInterval(interval); // Clear interval on unmount
//   }, []);

//   return (
//     <section 
//       id="showcase"
//       ref={ref}
//       className="relative py-28 md:py-36 overflow-hidden bg-gradient-to-b from-brand-teal/20 to-brand-light-blue/10 "
//     >
//       {/* 3D decorative elements */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
//         <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-brand-teal/5 blur-3xl animate-float-slow"></div>
//         <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-brand-mint/5 blur-3xl animate-float-slow" style={{ animationDelay: '2s' }}></div>
//         <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] rounded-full bg-brand-light-blue/5 blur-3xl animate-float-slow" style={{ animationDelay: '1s' }}></div>
//       </div>
      
//       <div className="container relative z-10">
//         {/* Section header */}
//         <div className="text-center mb-20" ref={titleRef}>
//           <div className={cn(
//             "inline-block premium-glass px-4 py-1.5 rounded-full mb-4 transition-all duration-700 ease-out transform-gpu",
//             titleInView ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-6 -rotate-3"
//           )}>
//             <span className="text-sm font-medium flex items-center">
//               <Layers className="h-4 w-4 mr-2 text-brand-teal" />
//               3D Experience
//             </span>
//           </div>
          
//           <h2 className={cn(
//             "text-4xl md:text-5xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-teal via-brand-dark-blue to-brand-mint transition-all duration-700 delay-100 ease-out",
//             titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//           )}>
//             Immersive Innovation
//           </h2>
          
//           <div className={cn(
//             "decorative-line mx-auto my-5 transition-all duration-700 delay-200 ease-out",
//             titleInView ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-90"
//           )}></div>
          
//           <p className={cn(
//             "text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto transition-all duration-700 delay-300 ease-out",
//             titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
//           )}>
//             Discover the cutting-edge features that define our commitment to excellence
//             and innovation in electric mobility.
//           </p>
//         </div>
        
//         {/* 3D Scroll Stack */}
//         <div 
//           ref={containerRef}
//           className={cn(
//             "perspective-3d max-w-5xl mx-auto relative transition-all duration-1000",
//             inView ? "opacity-100" : "opacity-0"
//           )}
//         >
//           <div className="relative h-[300px] md:h-[400px]">
//             {showcaseItems.map((item, index) => (
//               <div
//                 key={index}
//                 className={cn(
//                   "absolute inset-0 w-full rounded-2xl overflow-hidden transition-all duration-700 scroll-stagger-item transform-3d",
//                   index === activeIndex 
//                     ? "z-40 scale-100 rotate-x-0 rotate-y-0 translate-z-0" 
//                     : index < activeIndex
//                       ? "z-30 scale-95 -rotate-x-2 rotate-y-3 -translate-z-20 opacity-80"
//                       : "z-20 scale-90 -rotate-x-4 rotate-y-6 -translate-z-40 opacity-70"
//                 )}
//                 style={{
//                   transform: `scale(${1 - Math.abs(index - activeIndex) * 0.05}) 
//                               perspective(1500px) 
//                               rotateX(${(index - activeIndex) * -2}deg) 
//                               rotateY(${(index - activeIndex) * 3}deg) 
//                               translateZ(${(index - activeIndex) * -20}px)`,
//                   zIndex: 40 - Math.abs(index - activeIndex),
//                   opacity: 1 - Math.abs(index - activeIndex) * 0.1,
//                 }}
//                 onClick={() => setActiveIndex(index)}
//               >
//                 {/* Card with glass morphism effect */}
//                 <div className="relative h-full rounded-2xl premium-shadow-3d">
//                   {/* Background image with gradient overlay */}
//                   <div className="absolute inset-0 rounded-2xl overflow-hidden">
//                     <img 
//                       src={item.image} 
//                       alt={item.title} 
//                       className="w-full h-full object-cover"
//                     />
//                     <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-90`}></div>
//                   </div>
                  
//                   {/* Content */}
//                   <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-between text-white z-10">
//                     <div>
//                       <h3 className="text-2xl md:text-3xl font-playfair font-semibold mb-4 drop-shadow-sm shine-effect">{item.title}</h3>
//                       <p className="text-white/90 text-lg md:text-xl max-w-lg">{item.description}</p>
//                     </div>
                    
//                     <div className="flex items-center justify-between mt-4">
//                       <Button 
//                         className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 rounded-full group transition-all duration-300"
//                       >
//                         Learn more
//                         <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
//                       </Button>
                      
//                       <div className="flex space-x-2">
//                         {showcaseItems.map((_, i) => (
//                           <button
//                             key={i}
//                             onClick={(e) => {
//                               e.stopPropagation();
//                               setActiveIndex(i);
//                             }}
//                             className={cn(
//                               "w-3 h-3 rounded-full transition-all duration-300",
//                               i === activeIndex 
//                                 ? "bg-white scale-125" 
//                                 : "bg-white/40 hover:bg-white/60"
//                             )}
//                             aria-label={`Go to slide ${i + 1}`}
//                           />
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
                
//                 {/* 3D floating play button for current slide */}
//                 {index === activeIndex && (
//                   <Button
//                     size="icon"
//                     className="absolute top-1/2 right-8 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 border border-white/30 shadow-xl z-50 transition-all duration-500 hover:scale-110 group"
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       console.log(`Play video for ${item.title}`);
//                     }}
//                   >
//                     <Play className="h-5 w-5 text-white group-hover:scale-110 transition-transform fill-white" />
//                   </Button>
//                 )}
//               </div>
//             ))}
//           </div>
//  </div>
//       </div>
//     </section>
//   );
// };

// export default ShowcaseSection;
