import {
  BContactForm,
  BContainer,
  BIcon,
  BParagraph,
  BSection,
  BTitle,
} from "@/components/elements";
import Link from "next/link";

const ContactListItems = ({ item }: any) => {
  return (
    <div className="grid grid-cols-[60px,1fr] gap-4 items-center">
      <div className="bg-muted rounded-full flex items-center justify-center aspect-square">
        <BIcon icon={item.icon} className="text-primary w-7 h-7" />
      </div>
      <div className="space-y-0">
        <BTitle size="xxs" component="h4">
          {item.title}
        </BTitle>
        {item.link ? (
          <Link href={item.link.href} className="hover:text-accent">
            <BParagraph>{item.content}</BParagraph>
          </Link>
        ) : (
          <BParagraph>{item.content}</BParagraph>
        )}
      </div>
    </div>
  );
};

const HomeContact = ({ contactData }: any) => {
  return (
    <BSection>
      <BContainer className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col justify-center items-start gap-7 max-w-lg md:gap-10">
          <div className="space-y-7">
            <BTitle component="h3" size="lg">
              {contactData.title}
            </BTitle>
            <BParagraph>{contactData.description}</BParagraph>
          </div>
          <div className="flex flex-col gap-5">
            <ContactListItems item={contactData.info.address} />
            <ContactListItems item={contactData.info.phone} />
            <ContactListItems item={contactData.info.email} />
          </div>
        </div>
        <div className="">
          <BContactForm />
        </div>
      </BContainer>
    </BSection>
  );
};

export default HomeContact;
