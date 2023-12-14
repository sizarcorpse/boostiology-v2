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

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ServiceFaq = ({ serviceFaqData: faq }: any) => {
  return (
    <BSection margins="exclude">
      <BContainer size="md" className="space-y-7 md:space-y-9">
        <div className="space-y-7">
          <BGroupTitle alignment="center">
            <BSubtitle>{faq?.subtitle}</BSubtitle>
            <BTitle size="md">{faq.title}</BTitle>
          </BGroupTitle>
          <BParagraph className="text-center">{faq?.description}</BParagraph>
        </div>
        <div>
          <Accordion type="single" collapsible>
            {faq?.questions.map((item: any, index: number) => (
              <AccordionItem key={index} value={item.id}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-base">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </BContainer>
    </BSection>
  );
};

export default ServiceFaq;
