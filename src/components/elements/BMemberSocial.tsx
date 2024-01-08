import { BIcon } from "@/components/elements";
import Link from "next/link";

const SocialLinkItem = ({
  href,
  title,
  icon,
  target = undefined,
}: {
  href: string;
  icon?: string;
  title?: string;
  target?: "_blank" | "_self" | "_parent" | "_top" | undefined;
}) => {
  return (
    <Link
      href={href || "#"}
      title={title}
      target={target}
      className="bg-muted p-3 rounded-sm text-primary hover:text-accent transition-colors"
    >
      <BIcon icon={icon || ""} className="w-5 h-5" />
    </Link>
  );
};
const BMemberSocial = ({
  facebook,
  github,
  instagram,
  linkedin,
  twitter,
}: {
  facebook?: any;
  github?: any;
  instagram?: any;
  linkedin?: any;
  twitter?: any;
}) => {
  return (
    <div className="flex items-center space-x-2">
      {facebook && (
        <SocialLinkItem
          href={facebook?.href}
          icon={facebook?.icon}
          title={facebook?.title}
          target={facebook?.target}
        />
      )}
      {github && (
        <SocialLinkItem
          href={github?.href}
          icon={github?.icon}
          title={github?.title}
          target={github?.target}
        />
      )}

      {instagram && (
        <SocialLinkItem
          href={instagram?.href}
          icon={instagram?.icon}
          title={instagram?.title}
          target={instagram?.target}
        />
      )}

      {linkedin && (
        <SocialLinkItem
          href={linkedin?.href}
          icon={linkedin?.icon}
          title={linkedin?.title}
          target={linkedin?.target}
        />
      )}

      {twitter && (
        <SocialLinkItem
          href={twitter?.href}
          icon={twitter?.icon}
          title={twitter?.title}
          target={twitter?.target}
        />
      )}
    </div>
  );
};

export default BMemberSocial;
