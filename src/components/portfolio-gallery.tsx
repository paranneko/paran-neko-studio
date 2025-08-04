import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { ImageModal } from "./image-modal";

import capy_key from "../images/capy_key1.jpg";
import volley_girl from "../images/volleyball_girl.jpg";
import tokyo from "../images/tokyo_1.webp";
import super_auto_pets from "../images/super_auto_pets.jpg";
import anime_girl from "../images/forgot_her_name.jpg";
import mai_mai from "../images/mai6.jpg";
import long_keyboard from "../images/long_keyboard.jpg";

const portfolioItems = [
  {
    id: 1,
    src: mai_mai,
    alt: "mai^2",
    title: "mai^2 controller",
    description: "Based on the rhythm game MaiMai by Sega, this is a custom controller which emulates the game. Feels about 95% of the regular game with low latency delays.",
    details: [
      { label: "Button Controller", value: "Bonsai C4 STM32F411CEU6" },
      { label: "Touch Controller", value: "SAMD21" },
      { label: "NFC/AIME Reader", value: "Pi Pico w/ PN532" },
    ]
  },
  {
    id: 2,
    src: capy_key,
    alt: "capy keyboard",
    title: "Capybara Inspired Keyboard",
    description: "A Capybara inspired keyboard built for my friend, 2d image designed by his sister. Entirely 3d printed w/ RP2040 microcontroller. Multicolor prints w/ Bambu A1.",
    details: [
      { label: "Material", value: "PLA" },
      { label: "Controller", value: "RP2040" },
      { label: "Wiring/PCB", value: "handwired" },
    ]
  },
  {
    id: 3,
    src: long_keyboard,
    alt: "long keyboard",
    title: "loong keyboard",
    description: "This keyboard is inspired by the gboard by google. What started as a joke came to reality with a custom design and handwiring job to ensure a workable final build.",
    details: [
      { label: "Controller", value: "Bonsai C4 STM32F411CEU6" },
      { label: "Full Length", value: "~4 feet" },
      { label: "Switches", value: "Boba U4 Silent" },
      { label: "Keycaps", value: "XVX Skyline Low Profile" }
    ]
  },
  {
    id: 4,
    src: tokyo,
    alt: "nano block tokyo tower",
    title: "tokyo tower nano block (scaled up)",
    description: "",
    details: [
      { label: "Pieces", value: "~274 pieces" },
      { label: "unit size", value: "10mm" },
    ]
  },
  {
    id: 5,
    src: volley_girl,
    alt: "volleyball girl",
    title: "volleyball girl setting",
    description: "Poly model remixed to look like a volleyball player (my friend) setting a volleyball. Remixed volleyball to hold a switch to make it clickable.",
    details: [
      { label: "Switch", value: "clicky" }
    ]
  },
  {
    id: 6,
    src: super_auto_pets,
    alt: "Super auto pets inspired prints",
    title: "super auto pets prints",
    description: "Printed as a gift for my friend who likes super auto pets.",
    details: [
      { label: "game", value: "super auto pets" }
    ]
  },
  {
    id: 7,
    src: anime_girl,
    alt: "Iroha ishhiki",
    title: "anime girl 3d print w/ stand",
    description: "anime girl for my friend, iroha isshiki",
    details: [
      { label: "anime", value: "oregairu" }
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
      
      setCanScrollLeft(scrollLeft > 7);
      // Calculate the position where last image appears with correct left offset
      const imageWidth = 384;
      const gap = 24;
      const leftPadding = 64;
      const rightPadding = 64;
      const totalImages = portfolioItems.length;
      
      // Calculate the scroll position where last image has correct left offset
      const lastImageTargetPosition = (totalImages - 1) * (imageWidth + gap) + leftPadding - leftPadding;
      
      setCanScrollRight(scrollLeft < lastImageTargetPosition);
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
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <h2 className="text-left text-4xl sm:text-5xl font-bold mb-16">
            Showcase <span className="rainbow-gradient-pink">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {/* some projects. */}
          </p>
        
        {/* Horizontal Scrolling Gallery */}
        <div className="relative">
          <div 
            className="gallery-container flex space-x-6 overflow-x-auto pb-6" 
            id="mainGallery"
            style={{ paddingLeft: '64px', paddingRight: '64px' }}
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
                  className="w-[20rem] h-[30rem] object-cover rounded-2xl shadow-lg"
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
