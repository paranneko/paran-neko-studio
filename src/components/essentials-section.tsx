import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import looong from "../images/looong.webp";
import long_tinker from "../images/long_tinker.webp";
import long_diode from "../images/long_diode.webp";
import long_keycap from "../images/long_keycap.webp";
import looong_all from "../images/looong-a.webp";

export function EssentialsSection() {
  const isMobile = useIsMobile();
  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 30,
  });

  const translateX = useTransform(
    smoothProgress,
    [0, 1],
    ["25%", isMobile ? "-85%" : "-70%"]
  );

  return (
    <section className="bg-muted">
      <div className="flex justify-between items-end mb-8 max-w-7xl mx-auto px-6 sm:px-8 pt-20">
        <h2 className="text-4xl sm:text-5xl font-bold">
          <span className="rainbow-gradient-skyblue">looong</span> keyboard
        </h2>
      </div>

      <div
        ref={scrollRef}
        className="relative"
        style={{ height: isMobile ? "120vh" : "200vh" }}
      >
        <div className="sticky top-[25vh] h-[50vh] flex items-center overflow-hidden">
          <motion.img
            src={looong_all}
            alt="A very long, custom mechanical keyboard."
            style={{ translateX }}
            className="max-w-none h-auto rounded-3xl max-h-[125px] select-none will-change-transform"
            draggable={false}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 pb-20">
        <div className="grid md:grid-cols gap-8">
          {/* Custom Prototypes */}
          <div className="bg-background rounded-3xl p-8 shadow-sm">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">from prototype to the real thing.</h3>
              <p className="text-muted-foreground mb-4">
                inspired by gboard.
              </p>
              {/* <Button variant="link" className="text-blue-600 p-0">
                Shop Custom Prototypes <ArrowRight className="ml-2 h-4 w-4" />
              </Button> */}
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-muted rounded-2xl p-4 flex items-center justify-center">
                <img
                  src={long_tinker}
                  alt="STL Model"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="bg-muted rounded-2xl p-4 aspect-square flex items-center justify-center">
                <img
                  src={long_diode}
                  alt="Keycap Diodes"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="bg-muted rounded-2xl p-4 aspect-square flex items-center justify-center">
                <img
                  src={long_keycap}
                  alt="Keycaps"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
          
          {/* Design Services */}
          {/* <div className="bg-background rounded-3xl p-8 shadow-sm">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Design Services</h3>
              <p className="text-muted-foreground mb-4">
                Professional design consultation, 3D modeling, 
                and optimization for perfect prints.
              </p>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-4 gap-2">
                
                <div className="bg-blue-100 rounded-xl aspect-square flex items-center justify-center">
                  <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                </div>
                <div className="bg-green-100 rounded-xl aspect-square flex items-center justify-center">
                  <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                </div>
                <div className="bg-purple-100 rounded-xl aspect-square flex items-center justify-center">
                  <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
                </div>
                <div className="bg-gray-100 rounded-xl aspect-square flex items-center justify-center">
                  <div className="w-8 h-8 bg-gray-500 rounded-full"></div>
                </div>
                
                
                <div className="bg-yellow-100 rounded-xl aspect-square flex items-center justify-center">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full"></div>
                </div>
                <div className="bg-red-100 rounded-xl aspect-square flex items-center justify-center">
                  <div className="w-8 h-8 bg-red-500 rounded-full"></div>
                </div>
                <div className="bg-pink-100 rounded-xl aspect-square flex items-center justify-center">
                  <div className="w-8 h-8 bg-pink-500 rounded-full"></div>
                </div>
                <div className="bg-indigo-100 rounded-xl aspect-square flex items-center justify-center">
                  <div className="w-8 h-8 bg-indigo-500 rounded-full"></div>
                </div>
                
                
                <div className="bg-teal-100 rounded-xl aspect-square flex items-center justify-center">
                  <div className="w-8 h-8 bg-teal-500 rounded-full"></div>
                </div>
                <div className="bg-orange-100 rounded-xl aspect-square flex items-center justify-center">
                  <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
                </div>
                <div className="bg-cyan-100 rounded-xl aspect-square flex items-center justify-center">
                  <div className="w-8 h-8 bg-cyan-500 rounded-full"></div>
                </div>
                <div className="bg-emerald-100 rounded-xl aspect-square flex items-center justify-center">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}