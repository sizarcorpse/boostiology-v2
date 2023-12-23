import { cn } from "@/libs/utils";
import { cva } from "class-variance-authority";
import React, { forwardRef } from "react";

interface BParagraphProps {
  size?: "default" | "xl" | "lg" | "sm" | "xs";
  color?: "light" | "dark";
  className?: string;
  children?: React.ReactNode;
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
  ({ className, size, ...props }, ref) => {
    return (
      <p
        {...props}
        ref={ref}
        className={cn(BParagraphVariants({ size, className }))}
      />
    );
  }
);

BParagraph.displayName = "BParagraph";

export default BParagraph;
