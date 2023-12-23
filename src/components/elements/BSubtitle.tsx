import { cn } from "@/libs/utils";
import { cva } from "class-variance-authority";
import React, { forwardRef } from "react";

interface BSubtitleProps {
  size?: "large" | "small";
  color?: "light" | "dark";
  className?: string;
  children?: React.ReactNode;
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
  ({ className, size, color, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(BSubtitleVariants({ size, color, className }))}
        {...props}
      />
    );
  }
);

BSubtitle.displayName = "BSubtitle";

export default BSubtitle;
