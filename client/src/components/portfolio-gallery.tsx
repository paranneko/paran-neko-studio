import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { ImageModal } from "./image-modal";

const portfolioItems = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Detailed 3D printed robot miniature",
    title: "Mechanical Robot Miniature",
    description: "This intricate robot figure showcases the precision capabilities of modern 3D printing. Every mechanical detail, from the smallest gear to the articulated joints, demonstrates the perfect fusion of engineering and artistry.",
    details: [
      { label: "Material", value: "PLA+ Premium" },
      { label: "Layer Height", value: "0.1mm" },
      { label: "Print Time", value: "18 hours" },
      { label: "Post-Processing", value: "Hand-painted details" }
    ]
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Geometric patterned vase in rainbow colors",
    title: "Rainbow Lattice Vase",
    description: "A stunning example of how 3D printing can create complex geometric patterns impossible to achieve with traditional manufacturing. The rainbow PLA filament creates a mesmerizing gradient effect throughout the intricate lattice structure.",
    details: [
      { label: "Material", value: "Rainbow PLA" },
      { label: "Height", value: "180mm" },
      { label: "Infill", value: "25% Lattice" },
      { label: "Special Feature", value: "Food-safe coating" }
    ]
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Miniature architectural model house",
    title: "Architectural Scale Model",
    description: "This detailed architectural model demonstrates the precision possible in miniature construction. Every window, door, and texture has been carefully designed and printed to create a perfect scale representation.",
    details: [
      { label: "Scale", value: "1:200" },
      { label: "Material", value: "White Resin" },
      { label: "Details", value: "Laser-etched windows" },
      { label: "Finish", value: "UV-cured coating" }
    ]
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Colorful 3D printed puzzle pieces",
    title: "Interlocking Puzzle System",
    description: "These precision-engineered puzzle pieces showcase the ability to create complex interlocking mechanisms with tight tolerances. Each piece fits perfectly with its neighbors, creating satisfying tactile feedback.",
    details: [
      { label: "Pieces", value: "64 unique parts" },
      { label: "Tolerance", value: "±0.05mm" },
      { label: "Material", value: "Multi-color PETG" },
      { label: "Assembly", value: "No glue required" }
    ]
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Detailed dragon sculpture 3D print",
    title: "Fantasy Dragon Sculpture",
    description: "This majestic dragon sculpture pushes the boundaries of detail possible in 3D printing. Every scale, wing membrane, and facial feature has been meticulously crafted to create a truly impressive display piece.",
    details: [
      { label: "Height", value: "250mm" },
      { label: "Print Time", value: "32 hours" },
      { label: "Material", value: "Bronze-filled PLA" },
      { label: "Finish", value: "Polished and patinated" }
    ]
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Premium smartphone case with geometric design",
    title: "Geometric Phone Case",
    description: "This premium smartphone case combines protection with style. The geometric pattern isn't just aesthetic—it's engineered to provide maximum impact absorption while maintaining a slim profile.",
    details: [
      { label: "Compatibility", value: "iPhone 15 Pro" },
      { label: "Material", value: "TPU Flexible" },
      { label: "Protection", value: "Drop-tested 3m" },
      { label: "Features", value: "Wireless charging compatible" }
    ]
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Minimalist desk organizer with compartments",
    title: "Modular Desk Organizer",
    description: "Clean lines and functional design meet in this modular desk organizer. Each compartment is precisely sized for common office items, while the modular design allows for customization and expansion.",
    details: [
      { label: "Modules", value: "5 interlocking pieces" },
      { label: "Material", value: "Recycled PETG" },
      { label: "Capacity", value: "Pens, clips, phone" },
      { label: "Surface", value: "Non-slip base" }
    ]
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Futuristic curved lamp design",
    title: "Parametric Table Lamp",
    description: "This organic lamp design was created using parametric modeling techniques. The flowing curves aren't just beautiful—they're mathematically optimized for both structural integrity and optimal light distribution.",
    details: [
      { label: "Power", value: "LED 12W warm white" },
      { label: "Material", value: "Translucent PETG" },
      { label: "Control", value: "Touch dimmer" },
      { label: "Design", value: "Parametric algorithm" }
    ]
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Complex mechanical gear system",
    title: "Functional Gear Train",
    description: "This working mechanical system demonstrates the precision possible in 3D printing. All gears mesh perfectly and rotate smoothly, showcasing the potential for creating functioning mechanical assemblies.",
    details: [
      { label: "Gears", value: "12 precision gears" },
      { label: "Tolerance", value: "±0.02mm" },
      { label: "Material", value: "Nylon PA12" },
      { label: "Assembly", value: "Print-in-place" }
    ]
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Intricate jewelry with filigree patterns",
    title: "Filigree Pendant",
    description: "This delicate jewelry piece showcases the incredible detail possible with high-resolution 3D printing. The intricate filigree pattern would be impossible to create by hand, yet 3D printing makes it achievable.",
    details: [
      { label: "Material", value: "Sterling silver" },
      { label: "Technique", value: "Lost-PLA casting" },
      { label: "Weight", value: "8.5 grams" },
      { label: "Finish", value: "Hand-polished" }
    ]
  }
];

export function PortfolioGallery() {
  const [selectedImage, setSelectedImage] = useState<typeof portfolioItems[0] | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    const gallery = document.getElementById('mainGallery');
    if (gallery) {
      const scrollLeft = gallery.scrollLeft;
      const maxScrollLeft = gallery.scrollWidth - gallery.clientWidth;
      
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < maxScrollLeft - 10);
    }
  };

  useEffect(() => {
    const gallery = document.getElementById('mainGallery');
    if (gallery) {
      updateScrollButtons();
      gallery.addEventListener('scroll', updateScrollButtons);
      return () => gallery.removeEventListener('scroll', updateScrollButtons);
    }
  }, []);

  const scrollGallery = (direction: 'left' | 'right') => {
    const gallery = document.getElementById('mainGallery');
    if (gallery) {
      // Get the first image item to calculate its actual width + margin
      const firstItem = gallery.querySelector('.gallery-item') as HTMLElement;
      if (firstItem) {
        const itemRect = firstItem.getBoundingClientRect();
        const itemWidth = itemRect.width;
        
        // Get computed style to find the actual gap
        const computedStyle = window.getComputedStyle(gallery);
        const gap = parseFloat(computedStyle.gap) || 24; // fallback to 24px
        
        // Calculate scroll amount
        const scrollAmount = itemWidth + gap;
        
        const scrollLeft = direction === 'left' ? -scrollAmount : scrollAmount;
        gallery.scrollBy({ left: scrollLeft, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Featured <span className="rainbow-gradient">Creations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Each piece represents hours of meticulous design and precision printing, showcasing the endless possibilities of 3D technology.
          </p>
        </div>
        
        {/* Horizontal Scrolling Gallery */}
        <div className="relative">
          <div 
            className="gallery-container flex space-x-6 overflow-x-auto pb-6" 
            id="mainGallery"
            style={{ paddingLeft: '64px', paddingRight: 'calc(100vw - 448px)' }}
          >
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="gallery-item flex-none relative group cursor-pointer image-hover"
                onClick={() => setSelectedImage(item)}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-96 h-96 object-cover rounded-2xl shadow-lg"
                />
                <Button
                  size="icon"
                  className="plus-icon absolute bottom-4 right-4 w-10 h-10 bg-white/70 hover:bg-white/95 rounded-full text-foreground border-0"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
          
          {/* Navigation Controls positioned at bottom right of gallery */}
          <div className="flex justify-end mt-6 space-x-4">
            <Button
              variant="secondary"
              size="icon"
              className={`nav-button w-12 h-12 bg-white/70 hover:bg-white/90 rounded-full shadow-lg border-0 transition-opacity ${
                !canScrollLeft ? 'opacity-40 cursor-not-allowed' : ''
              }`}
              onClick={() => canScrollLeft && scrollGallery('left')}
              disabled={!canScrollLeft}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              className={`nav-button w-12 h-12 bg-white/70 hover:bg-white/90 rounded-full shadow-lg border-0 transition-opacity ${
                !canScrollRight ? 'opacity-40 cursor-not-allowed' : ''
              }`}
              onClick={() => canScrollRight && scrollGallery('right')}
              disabled={!canScrollRight}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          image={selectedImage}
        />
      )}
    </section>
  );
}
