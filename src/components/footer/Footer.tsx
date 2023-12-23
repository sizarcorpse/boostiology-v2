import {
  BContainer,
  BIcon,
  BLink,
  BParagraph,
  BSection,
  BTitle,
} from "@/components/elements";
import Image from "next/image";
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
const SocialLink = ({
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
  console.log(facebook);
  return (
    <div className="flex items-center space-x-2">
      <SocialLinkItem
        href={facebook?.href}
        icon={facebook?.icon}
        title={facebook?.title}
        target={facebook?.target}
      />
      <SocialLinkItem
        href={github?.href}
        icon={github?.icon}
        title={github?.title}
        target={github?.target}
      />
      <SocialLinkItem
        href={instagram?.href}
        icon={instagram?.icon}
        title={instagram?.title}
        target={instagram?.target}
      />
      <SocialLinkItem
        href={linkedin?.href}
        icon={linkedin?.icon}
        title={linkedin?.title}
        target={linkedin?.target}
      />
      <SocialLinkItem
        href={twitter?.href}
        icon={twitter?.icon}
        title={twitter?.title}
        target={twitter?.target}
      />
    </div>
  );
};

const FooterInfo = ({ info }: { info: any }) => {
  console.log(info);
  return (
    <div className="w-full h-full flex flex-col items-start gap-7">
      <Link href="/">
        <p className="text-2xl font-bold text-primary-foreground first-letter:font-bold first-letter:text-4xl first-letter:uppercase">
          B
        </p>
      </Link>
      <BParagraph>{info.description}</BParagraph>
      <SocialLink
        facebook={info.socials.facebook}
        github={info.socials.github}
        instagram={info.socials.instagram}
        linkedin={info.socials.linkedin}
        twitter={info.socials.twitter}
      />
    </div>
  );
};

const FooterContact = ({ contact }: { contact: any }) => {
  return (
    <div className="space-y-7">
      <BTitle component="h3" size="xs" color="light">
        {contact.title}
      </BTitle>
      <div className="flex flex-col items-start gap-3">
        {contact?.contacts.map((item: any, index: number) => (
          <div key={index} className="flex items-start gap-4">
            <BIcon icon={item.icon} className="mt-0.5 w-5 h-5 shrink-0" />
            <Link
              href={item.href || "#"}
              title={item.title}
              target={item.target || undefined}
              className="text-base hover:text-accent transition-colors"
            >
              {item.value}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const FooterNav = ({ nav }: { nav: any }) => {
  return (
    <div className="space-y-7">
      <BTitle component="h3" size="xs" color="light">
        {nav.title}
      </BTitle>
      <div className="flex flex-col items-start gap-2">
        {nav?.links.map((item: any, index: number) => (
          <BLink
            key={index}
            href={item.href || "#"}
            title={item.title}
            target={item.target || undefined}
            className="text-base hover:text-accent transition-colors"
          >
            {item.label}
          </BLink>
        ))}
      </div>
    </div>
  );
};

const FooterPost = ({ post }: { post: any }) => {
  return (
    <div className="w-full h-full flex flex-col items-start gap-7">
      <BTitle component="h3" size="xs" color="light">
        {post.title}
      </BTitle>
      <div className="grid grid-cols-3 gap-2">
        {post?.posts.map((item: any, index: number) => (
          <div key={index}>
            <Image
              src={item.image.src}
              alt={item.title}
              width={85}
              height={85}
              className="aspect-square object-cover rounded-md mix-blend-luminosity opacity-75  transition-opacity cursor-pointer hover:opacity-100 hover:mix-blend-normal"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const Footer = ({ footerData }: { footerData: any }) => {
  const {
    contents: { footerInfo, footerContact, footerNav, footerPost },
  } = footerData;
  return (
    <BSection className="bg-primary" margins="exclude">
      <BContainer className="">
        <div className="text-primary-foreground grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-4">
            <FooterInfo info={footerInfo} />
          </div>
          <div className="col-span-12 sm:col-span-4 lg:col-span-3">
            <FooterContact contact={footerContact} />
          </div>
          <div className="col-span-12 sm:col-span-4 lg:col-span-2">
            <FooterNav nav={footerNav} />
          </div>
          <div className="col-span-12 sm:col-span-4 lg:col-span-3">
            <FooterPost post={footerPost} />
          </div>
        </div>
      </BContainer>
    </BSection>
  );
};

export default Footer;
