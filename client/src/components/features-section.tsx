import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Feature {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

const features: Feature[] = [
  {
    id: "precision",
    title: "Precision Engineering",
    description: "With our advanced 3D printing technology, every piece is crafted with unparalleled accuracy and attention to detail. From intricate mechanical parts to artistic sculptures, we achieve tolerances as tight as ±0.02mm, ensuring your vision becomes reality with perfect precision.",
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    imageAlt: "Precision 3D printed mechanical components"
  },
  {
    id: "materials",
    title: "Advanced Materials",
    description: "Choose from our extensive selection of premium materials including PLA+, PETG, TPU, Nylon, and specialty filaments. Each material is carefully selected for its unique properties, whether you need flexibility, strength, heat resistance, or beautiful aesthetics for your project.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    imageAlt: "Various 3D printing materials and colorful filaments"
  },
  {
    id: "customization",
    title: "Complete Customization",
    description: "Every project is unique, and we embrace that. From initial concept to final finishing, we work closely with you to ensure your vision is perfectly realized. Whether it's a one-off prototype or a small production run, we adapt our process to your specific needs.",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    imageAlt: "Custom 3D printed architectural models and prototypes"
  },
  {
    id: "support",
    title: "Expert Support",
    description: "Our team of experienced engineers and designers are here to guide you through every step of the process. From design optimization to material selection and post-processing recommendations, we provide comprehensive support to ensure project success.",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    imageAlt: "3D printing expert working with advanced equipment"
  }
];

export function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState<string>("precision");

  const toggleFeature = (featureId: string) => {
    // Always keep one item open - if clicking the currently active item, don't close it
    if (activeFeature !== featureId) {
      setActiveFeature(featureId);
    }
  };

  const activeFeatureData = features.find(f => f.id === activeFeature);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Significant <span className="rainbow-gradient">capabilities</span>
          </h2>
        </div>
        
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Expandable list */}
          <div className="space-y-4">
            {features.map((feature) => (
              <div key={feature.id} className="border border-border rounded-2xl overflow-hidden">
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
            <div key={feature.id} className="border border-border rounded-2xl overflow-hidden">
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