"use client";

import { Column, Text } from "@once-ui-system/core";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { DotPattern } from "../magicui/dot-pattern";
import { cn } from "@/lib/utils";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <Column>
      <Column className="!w-full font-sans md:px-10" ref={containerRef}>
        {/* Header */}
        <Column
          fillWidth
          horizontal="center"
          align="center"
          className="!max-w-full !mx-auto !mb-20 !py-20 !px-4 md:px-8 lg:px-10"
        >
          <Text
            wrap="balance"
            onBackground="neutral-weak"
            variant="heading-default-xl"
            className="!text-3xl md:text-4xl mb-4 max-w-4xl"
          >
            The Chapters of My Story
          </Text>
          {/* <Text
            wrap="balance"
            onBackground="neutral-weak"
            variant="heading-default-m"
            className="
          !text-xl md:text-base max-w-4xl"
          >
            A timeline showcasing the milestones, projects, and experiences that
            define my journey.
          </Text> */}
          
        </Column>

        {/* Timeline items */}
        <div ref={ref} className="!relative !max-w-7xl !mx-auto !pb-20">
          {data.map((item, index) => (
            <div
              key={index}
              className="!flex !justify-start !pt-10 md:pt-40 md:gap-10"
            >
              {/* Left side (title + dot) */}
              <div className="!sticky !flex !flex-col md:flex-row !z-40 !items-center !top-40 !self-start !max-w-xs lg:max-w-sm md:w-full">
                <div className="h-8 absolute left-2 md:left-3 w-8 rounded-full bg-white dark:bg-neutral-200 flex items-center justify-center">
                  <div className="h-3 w-3 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2.5" />
                </div>
                <Text
                  variant="heading-default-xl"
                  className="hidden md:block !text-3xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 "
                >
                  {item.title}
                </Text>
              </div>

              {/* Right side (content) */}
              <div className="relative pl-20 pr-4 md:pl-4 w-full">
                <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                  {item.title}
                </h3>
                {item.content}
              </div>
            </div>
          ))}

          {/* Scroll line */}
          <div
            style={{ height: height + "px" }}
            className="absolute md:left-8 !left-4 top-0 overflow-hidden w-[4px] 
                       bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] 
                       from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 
                       to-transparent to-[99%]  
                       [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0  w-[4px] 
                         bg-gradient-to-t from-purple-500 via-blue-500 to-transparent 
                         from-[0%] via-[10%] rounded-full"
            />
          </div>
        </div>
      </Column>
    </Column>
  );
};
