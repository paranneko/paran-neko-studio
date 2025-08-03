import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function EssentialsSection() {
  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold">
            <span className="rainbow-gradient-skyblue">looong</span> keyboard
          </h2>
          {/* <Button variant="link" className="text-blue-600 p-0 h-auto">
            All 3D printing services <ArrowRight className="ml-2 h-4 w-4" />
          </Button> */}
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Custom Prototypes */}
          <div className="bg-background rounded-3xl p-8 shadow-sm">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Custom Prototypes</h3>
              <p className="text-muted-foreground mb-4">
                Bring your ideas to life with precision prototyping, 
                functional testing models, and more.
              </p>
              {/* <Button variant="link" className="text-blue-600 p-0">
                Shop Custom Prototypes <ArrowRight className="ml-2 h-4 w-4" />
              </Button> */}
            </div>
            
            <div className="grid grid-cols-1">
              <div className="bg-muted rounded-2xl p-4 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=200"
                  alt="Mechanical prototype"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              {/* <div className="bg-muted rounded-2xl p-4 aspect-square flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200"
                  alt="Architectural model"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="bg-muted rounded-2xl p-4 aspect-square flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200"
                  alt="Functional parts"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div> */}
            </div>
          </div>
          
          {/* Design Services */}
          <div className="bg-background rounded-3xl p-8 shadow-sm">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Design Services</h3>
              <p className="text-muted-foreground mb-4">
                Professional design consultation, 3D modeling, 
                and optimization for perfect prints.
              </p>
              {/* <Button variant="link" className="text-blue-600 p-0">
                Explore Design Services <ArrowRight className="ml-2 h-4 w-4" />
              </Button> */}
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-4 gap-2">
                {/* First row */}
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
                
                {/* Second row */}
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
                
                {/* Third row */}
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
          </div>
        </div>
      </div>
    </section>
  );
}