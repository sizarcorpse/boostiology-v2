import { BIcon, BParagraph, BTitle } from "@/components/elements";
import { cn } from "@/libs/utils";
import { FC, forwardRef } from "react";

interface BIconBoxProps {
  icon: string;
  title?: string;
  description?: string;
  orientation?: "vertical" | "horizontal";
  component?: "h3" | "h4" | "h5" | "h6";
  className?: string;
}

const BIconBoxVertical = forwardRef<HTMLDivElement, BIconBoxProps>(
  (props, ref) => {
    return (
      <div
        className={cn(
          `group flex flex-col items-start gap-4 overflow-hidden`,
          props.className
        )}
        ref={ref}
      >
        <div className={`aspect-square rounded-lg bg-accent/20 p-4 shrink-0`}>
          <BIcon
            icon={props.icon}
            className="w-7 h-7 text-accent md:w-9 md:h-9"
          />
        </div>
        {(props.title || props.description) && (
          <div className="flex flex-col gap-2">
            {props.title && (
              <BTitle
                component={props.component}
                size="sm"
                className="font-semibold"
              >
                {props.title}
              </BTitle>
            )}
            {props.description && <BParagraph>{props.description}</BParagraph>}
          </div>
        )}
      </div>
    );
  }
);

const BIconBoxHorizontal = forwardRef<HTMLDivElement, BIconBoxProps>(
  (props, ref) => {
    return (
      <div
        className={cn(
          `group flex flex-row items-start justify-start gap-4`,
          props.className
        )}
        ref={ref}
      >
        <div
          className={`basis-19 aspect-square rounded-lg bg-accent/20 p-4 shrink-0`}
        >
          <BIcon
            icon={props.icon}
            className="w-7 h-7 text-accent md:w-9 md:h-9"
          />
        </div>
        {(props.title || props.description) && (
          <div className="flex flex-col gap-0">
            {props.title && (
              <BTitle
                component={props.component}
                size="xs"
                className="font-semibold"
              >
                {props.title}
              </BTitle>
            )}
            {props.description && <BParagraph>{props.description}</BParagraph>}
          </div>
        )}
      </div>
    );
  }
);

const BIconBox = forwardRef<HTMLDivElement, BIconBoxProps>((props, ref) => {
  const orientation =
    props.orientation === "horizontal" ? "horizontal" : "vertical";

  if (orientation === "vertical") {
    return <BIconBoxVertical {...props} ref={ref} />;
  }

  return <BIconBoxHorizontal {...props} ref={ref} />;
});

BIconBox.displayName = "BIconBox";
BIconBoxVertical.displayName = "BIconBoxVertical";
BIconBoxHorizontal.displayName = "BIconBoxHorizontal";

export default BIconBox;
