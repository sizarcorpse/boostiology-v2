"use client";

import {
  BContainer,
  BGroupTitle,
  BIcon,
  BIconBox,
  BParagraph,
  BSection,
  BSubtitle,
  BTitle,
} from "@/components/elements";
import { Button } from "../ui/button";

const HomeAbout = ({ aboutData: about }: { aboutData: any }) => {
  return (
    <BSection margins="exclude">
      <BContainer className="flex flex-row items-start justify-start flex-wrap">
        <div className="basis-full md:basis-1/2 grow"></div>
        <div className="basis-full md:basis-1/2 grow flex flex-col items-start gap-7 md:gap-9">
          <BGroupTitle>
            <BSubtitle size="large">{about?.subtitle}</BSubtitle>
            <BTitle component="h2" size="lg">
              {about?.title}
            </BTitle>
          </BGroupTitle>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2">
            {about?.services?.map((service: any, index: number) => (
              <BIconBox
                key={index}
                icon={service?.icon?.identifier}
                title={service?.title}
                description={service?.description}
                orientation="horizontal"
                component="h4"
              />
            ))}
          </div>
          <BParagraph>{about?.description}</BParagraph>
          <div>
            {about?.buttons?.map((button: any, index: number) => (
              <Button
                key={index}
                variant={button?.variant}
                size="lg"
                title={button?.title}
                className="uppercase text-sm leading-4 gap-2"
              >
                {button?.label}
                <BIcon icon={button?.icon?.identifier} className="w-5 h-5" />
              </Button>
            ))}
          </div>
        </div>
      </BContainer>
    </BSection>
  );
};

export default HomeAbout;
