import {
  BContainer,
  BGroupTitle,
  BIcon,
  BParagraph,
  BSection,
  BSubtitle,
  BTitle,
} from "@/components/elements";
import { HomeHeroProps } from "@/types/local";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Button } from "../ui/button";

const HomeHero: FC<HomeHeroProps> = ({ heroData }) => {
  const hero = heroData?.slides[0];

  return (
    <BSection
      className="relative h-[80vh] overflow-hidden"
      margins="exclude"
      // style={{
      //   backgroundImage: "url('/assets/images/image-1.jpg')",
      //   backgroundSize: "cover",
      //   backgroundPosition: "top",
      // }}
    >
      <BContainer className="flex items-center">
        <div className="max-w-[600px] space-y-7 md:space-y-9">
          <BGroupTitle>
            <BSubtitle size="large">{hero.subtitle}</BSubtitle>
            <BTitle>{hero.title}</BTitle>
          </BGroupTitle>
          <BParagraph>{hero.description}</BParagraph>
          <div className="flex flex-col items-start gap-0 sm:flex-row sm:gap-2">
            {hero.buttons.map((button, index) => (
              <Link href={button.href} key={index}>
                <Button
                  variant={button.variant}
                  size="lg"
                  title={button.title}
                  className="uppercase text-sm leading-4 gap-2"
                >
                  {button.label}
                  <BIcon
                    icon={button?.icon?.identifier as string}
                    className="w-5 h-5"
                  />
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </BContainer>
    </BSection>
  );
};

export default HomeHero;
