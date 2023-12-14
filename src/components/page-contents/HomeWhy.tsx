"use client";

import {
  BContainer,
  BGroupTitle,
  BIcon,
  BList,
  BListItem,
  BParagraph,
  BSection,
  BSubtitle,
  BTitle,
} from "@/components/elements";
import { Button } from "../ui/button";

const data = [
  {
    icon: "TargetIcon",
    text: "Medicare Advantage Plans",
  },
  {
    icon: "SendIcon",
    text: "Analysis Research",
  },
  {
    icon: "MonitorIcon",
    text: "100% Secure Money Back",
  },
  {
    icon: "ShareIcon",
    text: "100% Money Growth",
  },
];

const HomeWhy = ({ whyData: why }: { whyData: any }) => {
  return (
    <BSection margins="exclude">
      <BContainer className="flex flex-row items-start justify-start flex-wrap">
        <div className="basis-full md:basis-1/2 grow flex flex-col items-start space-y-7 md:space-y-9">
          <BGroupTitle>
            <BSubtitle size="large">{why?.subtitle}</BSubtitle>
            <BTitle component="h2" size="lg">
              {why?.title}
            </BTitle>
          </BGroupTitle>
          <BParagraph>{why?.description}</BParagraph>
          <BList className="sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2">
            {why.reasons?.map((item: any, index: any) => (
              <BListItem key={index} data={item} />
            ))}
          </BList>
          <div>
            {why?.buttons?.map((button: any, index: number) => (
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
        <div className="basis-full md:basis-1/2 grow"></div>
      </BContainer>
    </BSection>
  );
};

export default HomeWhy;
