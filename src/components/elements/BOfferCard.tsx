"use client";
import {
  BIcon,
  BIconBox,
  BIconType,
  BParagraph,
  BTitle,
} from "@/components/elements";
import { Button } from "@/components/ui/button";
import { motion, useAnimation } from "framer-motion";
import { BrainCircuit, Circle, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const BOfferCard = ({ offer, index }: any) => {
  const controls = useAnimation();
  const { ref, inView } = useInView();
  const delay = index * 0.2;

  useEffect(() => {
    if (inView) {
      controls.start({
        scale: [
          1, 0.7, 1.2, 0.8, 1.1, 0.9, 1.05, 0.95, 1.02, 0.98, 1.01, 0.99, 1,
        ],
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: delay,
          velocity: 1,
        },
      });
    }
  }, [controls, inView, index, delay]);
  return (
    <motion.div
      className={`mx-auto w-full h-full flex flex-col gap-6 border border-border/50 px-7 py-12 rounded-2xl max-w-md ${
        index % 2 === 0 ? "mt-0" : "sm:-mt-9"
      }`}
      style={{
        boxShadow: "rgba(0, 0, 0, 0.09) 0px 3px 12px",
      }}
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={controls}
      whileHover={{
        scale: 1.05,
        transition: {
          duration: 0.2,
        },
      }}
    >
      <div className="min-h-[100px] flex items-center justify-center relative">
        <div className="z-20">
          <BIcon
            icon={offer?.icon?.identifier as BIconType}
            className="w-10 h-10 text-accent "
          />
        </div>

        <div className="z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Image
            src={`/assets/svg/offerIconBg.svg`}
            width={100}
            height={90}
            alt="offer icon"
          />
          <X className="absolute top-1 right-3 w-3 h-3 text-accent animate-spin" />
          <Circle className="absolute bottom-2 left-7 w-[9px] h-[9px] text-accent animate-ping" />
        </div>
      </div>
      <div className="flex flex-col gap-4 text-center grow">
        <BTitle component="h3" size="xs">
          {offer.title}
        </BTitle>
        <BParagraph className="line-clamp-3 grow">
          {offer.description}
        </BParagraph>
        <Link href={`/services/${offer.slug}`}>
          <Button
            variant="muted"
            size="sm"
            className="text-xs px-6 uppercase tracking-wide font-semibold"
          >
            {offer.link.label}
            <BIcon icon="ArrowRightIcon" className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default BOfferCard;
