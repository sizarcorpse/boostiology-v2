import { BIcon, BParagraph } from "@/components/elements";
import { cn } from "@/libs/utils";
import { Terminal as DefaultListIcon } from "lucide-react";
import { HTMLAttributes, ReactElement, ReactNode, forwardRef } from "react";

interface BListItemProps extends HTMLAttributes<HTMLLIElement> {
  data?: any;
  className?: string;
  children?: ReactNode;
}

export const BListItem = forwardRef<HTMLLIElement, BListItemProps>(
  ({ data, className, children, ...rest }, ref) => {
    if (data) {
      const { icon, text, link } = data;
      return (
        <li
          ref={ref}
          {...rest}
          className={cn(
            `flex flex-row items-center justify-start gap-3`,
            className
          )}
        >
          <span className="flex-shrink-0 bg-accent p-2 rounded-full">
            {icon ? (
              <BIcon
                icon={icon as any}
                className="w-4 h-4 text-accent-foreground stroke-2"
              />
            ) : (
              <DefaultListIcon className="w-4 h-4 text-accent-foreground stroke-2" />
            )}
          </span>
          <BParagraph className="font-medium" size="lg">
            {text}
          </BParagraph>
        </li>
      );
    } else {
      return (
        <li
          ref={ref}
          {...rest}
          className={cn(`flex flex-row justify-start gap-4`, className)}
        >
          {children}
        </li>
      );
    }
  }
);

interface BListProps extends HTMLAttributes<HTMLUListElement> {
  className?: string;
  children: ReactElement<typeof BListItem> | ReactElement<typeof BListItem>[];
}

const BList = forwardRef<HTMLUListElement, BListProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <ul
        ref={ref}
        className={cn(`grid grid-cols-1 gap-3`, className)}
        {...rest}
      >
        {children}
      </ul>
    );
  }
);

BListItem.displayName = "BListItem";
BList.displayName = "BList";
export default BList;
