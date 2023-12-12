import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/libs/utils";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center rounded-xl text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 overflow-hidden z-[1]",
  {
    variants: {
      variant: {
        default:
          "bg-accent text-primary-foreground after:content-[''] after:absolute after:w-[200%] after:h-[200%] after:top-[110%] after:left-[50%] after:bg-primary after:translate-x-[-50%] after:rounded-[50%] after:z-[-1] hover:after:top-[-40%] after:transition-all after:duration-500",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-primary text-primary-foreground  after:content-[''] after:absolute after:w-[200%] after:h-[200%] after:top-[110%] after:left-[50%] after:bg-accent after:translate-x-[-50%] after:rounded-[50%] after:z-[-1] hover:after:top-[-40%] after:transition-all after:duration-500",

        muted:
          "bg-muted text-primary after:content-[''] after:absolute after:w-[200%] after:h-[200%] after:top-[110%] after:left-[50%] after:bg-primary after:translate-x-[-50%] after:rounded-[50%] after:z-[-1] hover:after:top-[-40%] after:transition-all after:duration-500 transition-colors duration-700 hover:text-primary-foreground",

        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-10 rounded-xl px-3",
        lg: "h-11 rounded-xl px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
