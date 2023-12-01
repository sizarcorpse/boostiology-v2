"use client";

import { cn } from "@/libs/utils";
import { cva } from "class-variance-authority";
import { AnimationDefinition, motion, useAnimation } from "framer-motion";
import React, { forwardRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface BSubtitleProps {
  size?: "large" | "small";
  color?: "light" | "dark";
  className?: string;
  noAnimation?: boolean;
  children?: React.ReactNode;
  onAnimationStart?: (definition: AnimationDefinition) => void;
}

const BSubtitleVariants = cva("uppercase tracking-widest my-0 font-semibold", {
  variants: {
    size: {
      default: "text-xs xl:text-sm",
      large: "text-xs md:text-sm xl:text-base",
      small: "text-xs ",
    },
    color: {
      default: "text-accent",
      dark: "text-primary",
      light: "text-secondary",
    },
  },
  defaultVariants: {
    size: "default",
    color: "default",
  },
});

const BSubtitle = forwardRef<HTMLParagraphElement, BSubtitleProps>(
  ({ className, size, color, noAnimation, ...props }, ref) => {
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
        ref={combinedRef}
        className={cn(BSubtitleVariants({ size, color, className }))}
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
        {...props}
      />
    );
  }
);

BSubtitle.displayName = "BSubtitle";

export default BSubtitle;
