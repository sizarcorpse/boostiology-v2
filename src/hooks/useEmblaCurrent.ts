import { type EmblaCarouselType } from "embla-carousel-react";
import { FC, useEffect, useState } from "react";

const useEmblaCurrent: FC<EmblaCarouselType | undefined> = (emblaApi) => {
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    setCurrent(emblaApi.selectedScrollSnap() + 1);
    emblaApi.on("select", () => {
      setCurrent(emblaApi.selectedScrollSnap() + 1);
    });
  }, [emblaApi]);

  return current;
};

export default useEmblaCurrent;
