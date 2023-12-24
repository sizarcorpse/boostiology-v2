import { cn } from "@/libs/utils";
import { cva } from "class-variance-authority";
import React, { forwardRef } from "react";

interface BSubtitleProps {
  size?: "large" | "small";
  className?: string;
  children?: React.ReactNode;
}

const BSubtitleVariants = cva(
  "uppercase tracking-widest my-0 font-semibold text-accent",
  {
    variants: {
      size: {
        default: "text-xs xl:text-sm",
        large: "text-xs md:text-sm xl:text-base",
        small: "text-xs ",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

const BSubtitle = forwardRef<HTMLParagraphElement, BSubtitleProps>(
  ({ className, size, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(BSubtitleVariants({ size, className }))}
        {...props}
      />
    );
  }
);

BSubtitle.displayName = "BSubtitle";

export default BSubtitle;
