"use client";

import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import React, {
  ComponentPropsWithoutRef,
  FC,
  ReactNode,
  useRef,
} from "react";

import { cn } from "@/lib/utils";

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
}

export const TextReveal: FC<TextRevealProps> = ({ children, className }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Convert children to an array, so we can animate each one
  const elements = React.Children.toArray(children);

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[200vh]", className)}>
      <div className="sticky top-0 mx-auto flex h-[50%] max-w-4xl items-center bg-transparent px-[1rem] pt-[5rem] md:pt-[15rem] lg:pt[15rem] xl:pt-[15rem]">
        <div
          ref={targetRef}
          className="flex flex-col items-center justify-center p-5 text-xl font-bold text-black/20 dark:text-white/20 md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl"
        >
          {elements.map((element, i) => {
            const start = i / elements.length;
            const end = start + 1 / elements.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {element}
              </Word>
            );
          })}
        </div>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    // Using a div to better wrap block-level children
    <div className="relative my-2">
      <div className="absolute opacity-0">{children}</div>
      <motion.div style={{ opacity }} className="text-black dark:text-white">
        {children}
      </motion.div>
    </div>
  );
};

//py-[5rem]