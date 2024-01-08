import { BIcon, BParagraph, BTitle } from "@/components/elements";
import { Button } from "@/components/ui/button";
import { cn } from "@/libs/utils";
import Image from "next/image";

const BProjectCard = ({ data: project, currentItem: current }: any) => {
  return (
    <div className="group cursor-pointer w-full max-w-md sm:max-w-md md:max-w-lg">
      <div className="relative">
        <Image
          src={project.cover.src}
          alt={project.title}
          width={952}
          height={1140}
          quality={100}
          className={cn(
            `aspect-[952/1140] object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500`,
            current && "grayscale-0"
          )}
        />
        <div className="l"></div>
        <div className="absolute top-0 left-0 z-20 w-full h-full flex flex-row items-end justify-between gap-2 p-6 bg-gradient-to-t from-[rgba(0,1,38,0.9)] to bg-transparent lg:p-8">
          <div>
            <BTitle
              component="h4"
              size="md"
              className="text-primary-foreground"
            >
              {project.title}
            </BTitle>
            <BParagraph className="text-accent font-medium">
              {project.type.label}
            </BParagraph>
          </div>
          <Button
            title={project.link.label}
            variant="secondary"
            className="h-auto rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out"
          >
            <BIcon icon="ArrowRightIcon" className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BProjectCard;
