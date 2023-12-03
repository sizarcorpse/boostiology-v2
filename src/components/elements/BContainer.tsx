import { cn } from "@/libs/utils";
import { cva } from "class-variance-authority";
import { forwardRef } from "react";

interface BContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  paddings?: "include" | "exclude";
  size?: "default" | "full" | "sm" | "md" | "lg" | "xl" | "xxl";
}

const BContainerVariants = cva("container mx-auto h-full", {
  variants: {
    paddings: {
      include: "px-6 py-20 md:py-24 lg:py-32",
      exclude: "p-0",
      top: "px-6 pt-20 md:pt-24 lg:pt-32",
      bottom: "px-6 pb-20 md:pb-24 lg:pb-32",
    },
    size: {
      default: "max-w-screen-xl",
      full: "max-w-full",
      sm: "max-w-screen-sm",
      md: "max-w-screen-md",
      lg: "max-w-screen-lg",
      xl: "max-w-screen-2xl",
      xxl: "max-w-[1740px]",
    },
  },
  defaultVariants: {
    size: "default",
    paddings: "include",
  },
});

const BContainer = forwardRef<HTMLDivElement, BContainerProps>(
  ({ className, size, paddings, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(BContainerVariants({ paddings, size, className }))}
        {...props}
      />
    );
  }
);

BContainer.displayName = "BContainer";

export default BContainer;
