import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import mai_switch from "../images/mai_switch.webp";
import mai_ito from "../images/mai_ito.webp";
import mai_small from "../images/mai_small.webp";
import mai_first from "../images/mai_first.webp";

interface Feature {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

const features: Feature[] = [
  {
    id: "mai2",
    title: "custom mai^2 controller",
    description: "The buttons and base have been recreated (via blender) to feature a special curvature that makes spins and slides easier.",
    image: mai_first,
    imageAlt: "Precision 3D printed mechanical components"
  },
  {
    id: "materials",
    title: "switch mounting system",
    description: "Custom-built with a remixed switch mount for 150g TTC Silent Frozen V2 switches, running QMK/VIA on an STM32 microcontroller.",
    image: mai_switch,
    imageAlt: "button base"
  },
  {
    id: "customization",
    title: "ito film touch panel",
    description: "The touch panel is made of glass and lined with ITO conductive film connected through wire to emulate the 34 touch zones.",
    image: mai_ito,
    imageAlt: "ito film"
  },
  {
    id: "support",
    title: "small prototype build",
    description: "The first prototype build was made with a 32 inch and using scaled up 3d printed buttons from whowechina. Uses a wood base instead of aluminum extrusion base.",
    image: mai_small,
    imageAlt: "small prototype"
  }
];

export function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState<string>("mai2");

  const toggleFeature = (featureId: string) => {
    // Always keep one item open - if clicking the currently active item, don't close it
    if (activeFeature !== featureId) {
      setActiveFeature(featureId);
    }
  };

  const activeFeatureData = features.find(f => f.id === activeFeature);

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            mai <span className="rainbow-gradient">^2</span>
          </h2>
        </div> */}

        <div className="flex justify-between items-end mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold">
            mai <span className="rainbow-gradient">^2</span>
          </h2>
        </div>
        
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Expandable list */}
          <div className="space-y-4">
            {features.map((feature) => (
              <div key={feature.id} className="bg-background border border-border rounded-2xl overflow-hidden">
                <Button
                  variant="ghost"
                  className="w-full p-6 text-left justify-between h-auto hover:bg-muted/50"
                  onClick={() => toggleFeature(feature.id)}
                >
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{feature.title}</h3>
                  </div>
                  {activeFeature === feature.id ? (
                    <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  )}
                </Button>
                
                {activeFeature === feature.id && (
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Right side - Dynamic image */}
          <div className="lg:pl-8">
            {activeFeatureData && (
              <div className="relative">
                <img
                  src={activeFeatureData.image}
                  alt={activeFeatureData.imageAlt}
                  className="w-full h-[500px] object-cover rounded-3xl shadow-2xl transition-all duration-500 ease-in-out"
                  key={activeFeatureData.id}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-4">
          {features.map((feature) => (
            <div key={feature.id} className="bg-background border border-border rounded-2xl overflow-hidden">
              <Button
                variant="ghost"
                className="w-full p-6 text-left justify-between h-auto hover:bg-muted/50"
                onClick={() => toggleFeature(feature.id)}
              >
                <div>
                  <h3 className="text-xl font-semibold mb-1">{feature.title}</h3>
                </div>
                {activeFeature === feature.id ? (
                  <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                )}
              </Button>
              
              {activeFeature === feature.id && (
                <div className="px-6 pb-6 space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="relative">
                    <img
                      src={feature.image}
                      alt={feature.imageAlt}
                      className="w-full h-[300px] object-cover rounded-2xl shadow-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}