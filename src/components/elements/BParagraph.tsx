"use client";
import { cn } from "@/libs/utils";
import { cva } from "class-variance-authority";
import { AnimationDefinition, motion, useAnimation } from "framer-motion";
import React, { forwardRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface BParagraphProps {
  size?: "default" | "xl" | "lg" | "sm" | "xs";
  color?: "light" | "dark";
  className?: string;
  noAnimation?: boolean;
  children?: React.ReactNode;
  onAnimationStart?: (definition: AnimationDefinition) => void;
}

const BParagraphVariants = cva("font-inter leading-5", {
  variants: {
    size: {
      default: "text-sm md:text-base",
      xl: "text-lg md:text-xl",
      lg: "text-base md:text-lg",
      sm: "text-xs md:text-sm",
      xs: "text-xs",
    },
  },
});

const BParagraph = forwardRef<HTMLParagraphElement, BParagraphProps>(
  ({ className, size, noAnimation, ...props }, ref) => {
    const controls = useAnimation();
    const { ref: inViewRef, inView } = useInView();

    useEffect(() => {
      if (inView && !noAnimation) {
        controls.start("visible");
      }
    }, [controls, inView, noAnimation]);

    const combinedRef = (node: HTMLParagraphElement) => {
      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
      inViewRef(node);
    };

    return (
      <motion.p
        {...props}
        ref={combinedRef}
        className={cn(BParagraphVariants({ size, className }))}
        initial={noAnimation ? undefined : "hidden"}
        animate={noAnimation ? undefined : controls}
        variants={
          noAnimation
            ? undefined
            : {
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }
        }
      />
    );
  }
);

BParagraph.displayName = "BParagraph";

export default BParagraph;
