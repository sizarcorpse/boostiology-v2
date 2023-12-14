"use client";

import {
  BContainer,
  BGroupTitle,
  BIcon,
  BIconBox,
  BOfferCard,
  BParagraph,
  BSection,
  BSubtitle,
  BTitle,
} from "@/components/elements";

const HomeOffer = ({ offerData: offer }: any) => {
  return (
    <BSection margins="exclude">
      <BContainer className="flex flex-col gap-20">
        <div className="flex flex-col items-stretch justify-stretch gap-8 max-w-screen-md text-center mx-auto">
          <BGroupTitle alignment="center">
            <BSubtitle size="large">{offer.subtitle}</BSubtitle>
            <BTitle component="h2" size="lg">
              {offer.title}
            </BTitle>
          </BGroupTitle>
          <BParagraph>{offer.description}</BParagraph>
        </div>

        {/* <div className="mx-auto grid grid-cols-[repeat(auto-fill,minmax(286px,1fr))] gap-7 justify-items-end justify-center w-full md:max-w-2xl lg:max-w-5xl xl:max-w-full">
          {offer.offers.map((item: any, index: number) => (
            <BOfferCard key={index} offer={item} index={index} />
          ))}
        </div> */}
        <div className="flex flex-wrap justify-center gap-7">
          {offer.offers.map((item: any, index: number) => (
            <div
              className="flex-none basis-full sm:basis-[calc(50%-28px)] lg:basis-[calc(33.33%-28px)] xl:basis-[calc(25%-28px)]"
              key={index}
            >
              <BOfferCard key={index} offer={item} index={index} />
            </div>
          ))}
        </div>
      </BContainer>
    </BSection>
  );
};

export default HomeOffer;
