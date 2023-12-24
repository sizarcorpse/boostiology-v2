import { BContainer, BSection, BTitle } from "@/components/elements";
import { Button } from "@/components/ui/button";

const ServiceCta = () => {
  return (
    <BSection margins="exclude">
      <BContainer className="bg-primary space-y-7 md:space-y-9">
        <BTitle size="xl" className="text-center text-primary-foreground">
          Choose a better way to work
        </BTitle>
        <div className="flex justify-center gap-4">
          <Button size="lg" className="uppercase">
            Get Started
          </Button>
          <Button size="lg" className="uppercase" variant="muted">
            Get in touch
          </Button>
        </div>
      </BContainer>
    </BSection>
  );
};

export default ServiceCta;
