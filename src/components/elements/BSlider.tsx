"use client";
import useEmblaCarousel from "embla-carousel-react";
import dynamic from "next/dynamic";

type NrImageSliderProps = {
  contents: any;
  component: string;
  styles?: {};
};

const dynamicComponents = {
  BProjectCard: dynamic(() => import("@/components/elements/BProjectCard"), {
    ssr: true,
  }),
  BrandLogoCard: dynamic(() => import("@/components/elements/BBrandLogoCard"), {
    ssr: true,
  }),
  BReviewCard: dynamic(() => import("@/components/elements/BReviewCard"), {
    ssr: true,
  }),
};

const BSlider: React.FC<NrImageSliderProps> = ({ contents, component }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    slidesToScroll: 1,
    inViewThreshold: 0.1,
  });
  const Element =
    dynamicComponents[component as keyof typeof dynamicComponents];

  return (
    <div className="embla h-full relative">
      <div
        className={`embla__viewport overflow-hidden w-auto h-full`}
        ref={emblaRef}
      >
        <div className="embla__container flex touch-pan-y flex-row h-full bg-transparent">
          {contents &&
            contents.map((event: any, index: any) => (
              <div
                className="embla__slide bg-none bg-transparent overflow-hidden grow-0 shrink-0 basis-full relative"
                key={index}
              >
                <div className="h-full">
                  <Element data={event} />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BSlider;
