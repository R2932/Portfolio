import type { MDXComponents } from "mdx/types"
import Image from "next/image"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/changelog/accordion"
import { cn } from "@/lib/utils"

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    img: ({
      className,
      alt,
      src,
      width,
      height,
      ...props
    }: React.ComponentProps<"img">) => {
      // This check prevents the error if an image has a non-string src
      if (!src || typeof src !== "string") {
        return null
      }
      return (
        <Image
          className={cn("rounded-md border mb-5", className)}
          alt={alt || ""}
          width={typeof width === "string" ? parseInt(width, 10) : width || 800}
          height={
            typeof height === "string" ? parseInt(height, 10) : height || 600
          }
          src={src}
          {...props}
        />
      )
    },
    Video: ({ className, ...props }: React.ComponentProps<"video">) => (
      <video
        className={cn("rounded-md border mb-5", className)}
        controls
        loop
        {...props}
      />
    ),
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
    ...components,
  }
}