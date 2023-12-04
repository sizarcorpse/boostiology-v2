import { BCarousel, BContainer, BSection } from "@/components/elements";
const HomeBrand = ({ brandData }: any) => {
  return (
    <BSection margins="exclude" className="bg-primary/90">
      <BContainer paddings="exclude" className="px-6 py-10 bg-red-0 ">
        <BCarousel
          contents={brandData.brands}
          component="BrandLogoCard"
          styles={{ gap: 20, align: "start" }}
        />
      </BContainer>
    </BSection>
  );
};

export default HomeBrand;
