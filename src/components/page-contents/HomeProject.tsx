import { BCarousel, BContainer, BSection } from "@/components/elements";

const HomeProject = ({ projectData }: any) => {
  return (
    <BSection margins="exclude">
      <BContainer size="full" paddings="exclude">
        <BCarousel
          contents={projectData.projects}
          component="BProjectCard"
          styles={{ gap: 1.5 }}
        />
      </BContainer>
    </BSection>
  );
};

export default HomeProject;
