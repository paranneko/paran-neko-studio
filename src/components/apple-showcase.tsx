import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

interface AppleShowcaseProps {
  image: string;
  alt: string;
}

export function AppleShowcase({ image, alt }: AppleShowcaseProps) {
  const isMobile = useIsMobile();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 30,
  });

  const scale = useTransform(smoothProgress, [0, 1], [1, 0.88]);
  const y = useTransform(smoothProgress, [0, 1], [0, isMobile ? -10 : -20]);
  const rotateX = useTransform(smoothProgress, [0, 1], [0, -2]);
  const opacity = useTransform(smoothProgress, [0, 0.7, 1], [1, 1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: isMobile ? "90vh" : "120vh" }}
    >
      <div
        className="sticky top-0 h-screen flex items-center justify-center overflow-hidden"
        style={{ perspective: 1200 }}
      >
        <motion.div
          style={{
            scale,
            y,
            rotateX,
            opacity,
          }}
          className="w-full max-w-none sm:max-w-6xl px-1 sm:px-4"
        >
          <img
            src={image}
            alt={alt}
            className="rounded-3xl shadow-2xl w-full object-cover"
            draggable={false}
          />
        </motion.div>
      </div>
    </section>
  );
}
