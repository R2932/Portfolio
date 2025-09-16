"use client";

import { AnimatePresence, motion, useMotionTemplate } from "motion/react";
import type React from "react";
import { useCallback, useRef, useState } from "react";

interface Position {
  x: number;
  y: number;
}

interface LensProps {
  children: React.ReactNode;
  zoomFactor?: number;
  lensSize?: number;
  lensColor?: string;
}

export function Lens({
  children,
  zoomFactor = 1.3,
  lensSize = 170,
}: LensProps) {
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState<Position>({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    // This is the fix: Use offsetX and offsetY for accurate local coordinates.
    setMousePosition({
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY,
    });
  }, []);

  const maskImage = useMotionTemplate`radial-gradient(circle ${
    lensSize / 2
  }px at ${mousePosition.x}px ${mousePosition.y}px, black 100%, transparent 100%)`;

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden rounded-xl"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Original Content Layer */}
      {children}

      {/* Magnified Overlay Layer */}
      <AnimatePresence>
        {isHovering && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 50,
              pointerEvents: "none",
              maskImage: maskImage,
              WebkitMaskImage: maskImage,
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                transform: `scale(${zoomFactor})`,
                transformOrigin: `${mousePosition.x}px ${mousePosition.y}px`,
              }}
            >
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
