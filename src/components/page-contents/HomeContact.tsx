import { BContactForm, BContainer, BSection } from "@/components/elements";

const HomeContact = ({ contactData }: any) => {
  return (
    <BSection>
      <BContainer className="grid grid-cols-1 md:grid-cols-2">
        <div className=""></div>
        <div className="">
          <BContactForm />
        </div>
      </BContainer>
    </BSection>
  );
};

export default HomeContact;
