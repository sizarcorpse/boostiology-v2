import {
  BCarousel,
  BContainer,
  BReviewCard,
  BSection,
  BSlider,
} from "@/components/elements";

const HomeReview = ({ reviewData }: any) => {
  return (
    <BSection margins="exclude">
      <BContainer className="flex flex-col items-start md:flex-row">
        <div className="basis-full w-full md:basis-1/2">x</div>
        <div className="basis-full w-full md:basis-1/2">
          <div className="block w-auto">
            <BSlider contents={reviewData.reviews} component="BReviewCard" />
          </div>
        </div>
      </BContainer>
    </BSection>
  );
};

export default HomeReview;
