import { cn } from "@/libs/utils";
import { cva } from "class-variance-authority";
import React, { forwardRef } from "react";

interface BTitleProps {
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "xl" | "lg" | "md" | "sm" | "xs" | "xxs";
  color?: "light";
  className?: string;
  children?: React.ReactNode;
}

const BTitleVariants = cva("font-bold font-outfit my-0", {
  variants: {
    size: {
      xl: "text-4xl lg:text-5xl xl:text-6xl",
      lg: "text-3xl lg:text-4xl xl:text-5xl",
      md: "text-2xl lg:text-3xl",
      sm: "text-xl lg:text-2xl",
      xs: "text-lg lg:text-xl",
      xxs: "text-base lg:text-lg",
    },
    color: {
      default: "text-primary",
      light: "text-secondary",
    },
  },
  defaultVariants: {
    size: "xl",
    color: "default",
  },
});

const BTitle = forwardRef<HTMLHeadingElement, BTitleProps>(
  ({ className, component = "h2", color, size, ...props }, ref) => {
    const Component = component;

    return (
      <Component
        ref={ref}
        className={cn(BTitleVariants({ size, color, className }))}
        {...props}
      />
    );
  }
);

BTitle.displayName = "BTitle";

export default BTitle;
