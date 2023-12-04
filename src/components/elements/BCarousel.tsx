"use client";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import dynamic from "next/dynamic";

interface BCarouselProps {
  contents: any;
  component: "BProjectCard" | "BrandLogoCard";
  styles?: {
    size?: "container" | "full";
    gap?: number;
    align?: "center" | "start" | "end";
  };
}

const dynamicComponents = {
  BProjectCard: dynamic(() => import("@/components/elements/BProjectCard"), {
    ssr: true,
  }),
  BrandLogoCard: dynamic(() => import("@/components/elements/BBrandLogoCard"), {
    ssr: true,
  }),
};

const BCarousel: React.FC<BCarouselProps> = ({
  contents,
  component,
  styles,
}) => {
  const { size } = styles || {};

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: (styles?.align as EmblaOptionsType["align"]) || "start",
    slidesToScroll: 1,
    inViewThreshold: 0.1,
  });

  const Element =
    dynamicComponents[component as keyof typeof dynamicComponents];

  const gap = styles?.gap || 0;

  return (
    <div
      className={`overflow-hidden block ${
        size === "container"
          ? "container max-w-sm sm:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl"
          : "w-full"
      }`}
    >
      <div className="embla h-full relative">
        <div
          className={`embla__viewport overflow-hidden w-auto h-full`}
          ref={emblaRef}
        >
          <div
            style={{ marginLeft: gap ? `-${gap * 4}px` : "0" }}
            className={`embla__container flex touch-pan-y flex-row h-full bg-transparent`}
          >
            {contents &&
              contents.map((data: any, index: any) => (
                <div
                  style={{ paddingLeft: gap ? `${gap * 4}px` : "0" }}
                  className={`embla__slide relative mr-lg bg-none bg-transparent overflow-hidden grow-0 shrink-0 basis-auto`}
                  key={index}
                >
                  <div className="h-full w-full flex items-center justify-center">
                    <Element data={data} />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BCarousel;
