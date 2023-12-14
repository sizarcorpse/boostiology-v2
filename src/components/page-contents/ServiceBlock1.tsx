import {
  BContainer,
  BGroupTitle,
  BList,
  BListItem,
  BParagraph,
  BSection,
  BSubtitle,
  BTitle,
} from "@/components/elements";
import Image from "next/image";
import Link from "next/link";

const ServiceBlock1 = ({ serviceBlock1Data: block }: any) => {
  return (
    <BSection margins="exclude">
      <BContainer>
        <div className="grid grid-col-1 gap-7  md:grid-cols-2 md:gap-9">
          <div className="col-span-2 order-2 space-y-7 p-4 md:col-span-1 md:order-1">
            <BGroupTitle>
              <BSubtitle>{block?.subtitle}</BSubtitle>
              <BTitle size="md">{block.title}</BTitle>
            </BGroupTitle>
            <BList>
              {block.lists.map((item: any, index: number) => (
                <BListItem key={index} data={item} className="items-start" />
              ))}
            </BList>
            <BParagraph className="italic font-semibold">
              {'"'}
              {block.quote}
              {'"'}
            </BParagraph>
          </div>
          <div className="col-span-2 order-1 relative min-h-[320px] md:col-span-1 md:order-2">
            <div className="absolute w-auto inset-0 ">
              <Image
                src={block.image?.src}
                alt={block.image?.alt}
                fill={true}
                quality={100}
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center rounded-2xl grayscale contrast-125 brightness-90 hover:grayscale-0 z-10"
              />
            </div>
          </div>
        </div>
      </BContainer>
    </BSection>
  );
};

export default ServiceBlock1;
