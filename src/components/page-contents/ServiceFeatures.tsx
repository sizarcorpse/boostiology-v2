import {
  BContainer,
  BGroupTitle,
  BIconBox,
  BParagraph,
  BSection,
  BSubtitle,
  BTitle,
} from "@/components/elements";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const FeatureCard = ({ feature }: any) => {
  return (
    <div className="p-6 w-full h-full rounded-2xl shadow-[rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.06)_0px_2px_4px_-1px]">
      <BIconBox
        icon={feature.icon}
        title={feature.title}
        description={feature.description}
        orientation="vertical"
        noAnimation
      />
    </div>
  );
};

const ServiceFeatures = ({ serviceFeaturesData: feature }: any) => {
  return (
    <BSection margins="exclude">
      <BContainer className="space-y-7 md:space-y-9">
        <div className="space-y-7 max-w-screen-sm mx-auto md:space-y-9">
          <BGroupTitle alignment="center">
            <BSubtitle>{feature?.subtitle}</BSubtitle>
            <BTitle size="md">{feature?.title}</BTitle>
          </BGroupTitle>
          <BParagraph size="lg" className="text-center">
            {feature?.description}
          </BParagraph>
        </div>
        <div>
          <Tabs defaultValue={feature.features[0].value} className="w-full">
            <TabsList className="h-auto mb-7 w-full bg-transparent flex items-center justify-center md:mb-9">
              <div className="bg-muted rounded-md p-2">
                {feature.features.map((item: any, index: number) => (
                  <TabsTrigger
                    key={index}
                    value={item?.value}
                    className="h-10 px-6 text-base"
                  >
                    {item?.label}
                  </TabsTrigger>
                ))}
              </div>
            </TabsList>
            {feature.features.map((item: any, index: number) => (
              <TabsContent key={index} value={item.value}>
                <div className="flex flex-row flex-wrap justify-start items-stretch gap-7 max-w-screen-xl lg:gap-6">
                  {item.items.map((x: any, index: number) => (
                    <div
                      className="flex-1 grow-0 flex justify-stretch items-stretch basis-full sm:basis-[calc(50%-24px)] lg:basis-[calc(33.33%-24px)]"
                      key={index}
                    >
                      <FeatureCard feature={x} />
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </BContainer>
    </BSection>
  );
};

export default ServiceFeatures;
