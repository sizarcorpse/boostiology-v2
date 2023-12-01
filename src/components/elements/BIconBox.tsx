import { BIcon, BIconType, BParagraph, BTitle } from "@/components/elements";
import { cn } from "@/libs/utils";
import { FC } from "react";
interface BIconBoxProps {
  icon: BIconType;
  title?: string;
  description?: string;
  orientation?: "vertical" | "horizontal";
  size?: "md" | "lg";
  component?: "h3" | "h4" | "h5" | "h6";
}

const BIconBox: FC<BIconBoxProps> = ({
  icon,
  title,
  description,
  orientation = "vertical",
  size = "md",
  component = "h4",
}) => {
  const isVertical = orientation === "vertical";
  const computedSize = isVertical ? "lg" : "md";

  return (
    <div
      className={`group flex flex-${
        isVertical ? "col" : "row"
      } items-start justify-center gap-4`}
    >
      <div
        className={`basis-19 aspect-square rounded-lg bg-accent/20 p-4 ${
          computedSize === "md" ? " md:p-4" : " md:p-5"
        }`}
      >
        <BIcon icon={icon} className="w-7 h-7 text-accent md:w-9 md:h-9" />
      </div>
      {(title || description) && (
        <div className="flex flex-col">
          {title && (
            <BTitle
              component={component}
              size={computedSize === "md" ? "xs" : "sm"}
              className="font-semibold"
            >
              {title}
            </BTitle>
          )}
          {description && <BParagraph>{description}</BParagraph>}
        </div>
      )}
    </div>
  );
};

export default BIconBox;
