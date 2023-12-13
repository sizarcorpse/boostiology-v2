import {
  BContainer,
  BGroupTitle,
  BIcon,
  BParagraph,
  BSection,
  BSubtitle,
  BTitle,
} from "@/components/elements";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const ServiceHero = ({ serviceHeroData: hero }: any) => {
  return (
    <BSection margins="exclude">
      <BContainer paddings="exclude">
        <div className="col-span-1 grid grid-cols-2 items-center bg-primary">
          <div className="col-span-2 order-2 p-6 space-y-7 md:order-1 md:col-span-1 md:space-y-9 md:p-12">
            <BGroupTitle>
              <BSubtitle className="inline-flex gap-2 items-center justify-center">
                <BIcon icon={hero?.icon?.name} />
                {hero?.subtitle}
              </BSubtitle>
              <BTitle size="lg" color="light">
                {hero?.title}
              </BTitle>
            </BGroupTitle>
            <BParagraph size="lg" className="text-primary-foreground">
              {hero?.description}
            </BParagraph>
            {hero.buttons &&
              hero.buttons.map((button: any, index: number) => (
                <Button key={index} className="w-auto uppercase">
                  {button?.label}
                </Button>
              ))}
          </div>

          <div className="col-span-2 order-1 min-h-[320px] relative w-full h-full md:order-2 md:col-span-1">
            <div className="absolute w-auto inset-4">
              <Image
                src={hero.cover?.src}
                alt={hero.cover?.alt}
                fill={true}
                quality={100}
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center rounded-2xl z-10"
              />
            </div>
          </div>
        </div>
      </BContainer>
    </BSection>
  );
};

export default ServiceHero;
