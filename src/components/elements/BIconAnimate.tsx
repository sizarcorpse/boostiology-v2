"use client";

import { BIconProps, dynamicIcon } from "@/components/elements/BIcon";
import { motion, useAnimation } from "framer-motion";
import { FC, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const appear = {
  opacity: [0, 1],
  transition: {
    duration: 0.5,
  },
};

const slideUp = {
  y: 0,
  transition: {
    type: "spring",
    stiffness: 200,
    damping: 10,
    velocity: 1,
  },
};

const BIconAnimate: FC<BIconProps> = ({ icon, className }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start(appear).then(() => {
        controls.start(slideUp);
      });
    }
  }, [controls, inView]);

  const Icon = dynamicIcon[icon];

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 10 }} animate={controls}>
      <Icon className={className} />
    </motion.div>
  );
};

export default BIconAnimate;
