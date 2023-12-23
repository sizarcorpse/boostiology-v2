import { cn } from "@/libs/utils";
import Link, { LinkProps } from "next/link";
import { forwardRef, ForwardRefRenderFunction } from "react";

interface BLinkProps extends LinkProps {
  title?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  href: string;
  children: React.ReactNode;
  className?: string;
}

const BLink: ForwardRefRenderFunction<HTMLAnchorElement, BLinkProps> = (
  { href, title, target, className, children },
  ref
) => {
  return (
    <Link
      href={href}
      passHref
      ref={ref}
      title={title}
      target={target}
      className={cn(
        `relative content-[''] before:absolute before:left-0 before:bottom-[-1.5px] before:w-full before:h-[1.5px] before:bg-accent before:origin-top-right before:scale-x-0 before:transition-transform before:duration-300 before:ease-in-out hover:before:origin-top-left hover:before:scale-100`,
        className
      )}
    >
      {children}
    </Link>
  );
};

export default forwardRef(BLink);
