// "use client";

// import { cn } from "@/libs/utils";
// import { cva } from "class-variance-authority";
// import { AnimationDefinition, motion, useAnimation } from "framer-motion";
// import React, { forwardRef, useEffect } from "react";
// import { useInView } from "react-intersection-observer";

// interface BTitleProps {
//   component?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
//   size?: "xl" | "lg" | "md" | "sm" | "xs" | "xxs";
//   color?: "light";
//   className?: string;
//   noAnimation?: boolean;
//   children?: React.ReactNode;
//   onAnimationStart?: (definition: AnimationDefinition) => void;
// }

// const BTitleVariants = cva("font-bold font-outfit my-0", {
//   variants: {
//     size: {
//       xl: "text-4xl lg:text-5xl xl:text-6xl",
//       lg: "text-3xl lg:text-4xl xl:text-5xl",
//       md: "text-2xl lg:text-3xl",
//       sm: "text-xl lg:text-2xl",
//       xs: "text-lg lg:text-xl",
//       xxs: "text-base lg:text-lg",
//     },
//     color: {
//       default: "text-primary",
//       light: "text-secondary",
//     },
//   },
//   defaultVariants: {
//     size: "xl",
//     color: "default",
//   },
// });

// const BTitle = forwardRef<HTMLHeadingElement, BTitleProps>(
//   (
//     { className, component = "h2", color, size, noAnimation, ...props },
//     ref
//   ) => {
//     const controls = useAnimation();
//     const { ref: inViewRef, inView } = useInView();

//     useEffect(() => {
//       if (inView && !noAnimation) {
//         controls.start("visible");
//       }
//     }, [controls, inView, noAnimation]);

//     const combinedRef = (node: HTMLHeadingElement) => {
//       if (typeof ref === "function") {
//         ref(node);
//       } else if (ref) {
//         ref.current = node;
//       }
//       inViewRef(node);
//     };

//     const MotionComponent = motion[component];

//     return (
//       <MotionComponent
//         ref={combinedRef}
//         className={cn(BTitleVariants({ size, color, className }))}
//         initial={noAnimation ? undefined : "hidden"}
//         animate={noAnimation ? undefined : controls}
//         variants={
//           noAnimation
//             ? undefined
//             : {
//                 hidden: { opacity: 0, y: 30 },
//                 visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//               }
//         }
//         {...props}
//       />
//     );
//   }
// );

// BTitle.displayName = "BTitle";

// export default BTitle;

"use client";

import { cn } from "@/libs/utils";
import { cva } from "class-variance-authority";
import React, { forwardRef } from "react";

interface BTitleProps {
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "xl" | "lg" | "md" | "sm" | "xs" | "xxs";
  color?: "light";
  className?: string;
  noAnimation?: boolean;
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
