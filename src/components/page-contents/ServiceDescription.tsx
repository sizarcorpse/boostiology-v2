import { BContainer, BParagraph, BSection } from "@/components/elements";

const ServiceDescription = ({ serviceDescriptionData: description }: any) => {
  return (
    <BSection margins="exclude">
      <BContainer>
        <article className="space-y-6">
          {description?.map((item: any, index: number) => (
            <BParagraph key={index} size="lg">
              {item.d}
            </BParagraph>
          ))}
        </article>
      </BContainer>
    </BSection>
  );
};

export default ServiceDescription;
