import {
  BContainer,
  BGroupTitle,
  BIconBox,
  BParagraph,
  BSection,
  BSubtitle,
  BTitle,
} from "@/components/elements";
import Image from "next/image";

const ServiceBlock2 = ({ serviceBlock2Data: block }: any) => {
  return (
    <BSection margins="exclude">
      <BContainer>
        <div className="grid grid-col-1 gap-7 md:grid-cols-2 md:gap-9">
          <div className="col-span-2 order-1 relative min-h-[320px] md:col-span-1">
            <div className="absolute w-auto inset-0 ">
              <Image
                src={block.image?.src}
                alt={block.image?.alt}
                fill={true}
                quality={100}
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center rounded-2xl filter grayscale contrast-125 brightness-90 hover:grayscale-0 z-10"
              />
            </div>
          </div>
          <div className="col-span-2 order-2 space-y-7 p-4 md:col-span-1">
            <BGroupTitle>
              <BSubtitle>{block?.subtitle}</BSubtitle>
              <BTitle size="md">{block.title}</BTitle>
            </BGroupTitle>
            {block.lists.map((list: any, index: number) => (
              <div key={index}>
                <BIconBox
                  icon={list.icon}
                  title={list.title}
                  description={list.text}
                  orientation="horizontal"
                  noAnimation
                />
              </div>
            ))}
            <BParagraph className="italic font-semibold">
              {'"'}
              {block.quote}
              {'"'}
            </BParagraph>
          </div>
        </div>
      </BContainer>
    </BSection>
  );
};

export default ServiceBlock2;
