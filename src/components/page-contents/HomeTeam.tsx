import {
  BContainer,
  BGroupTitle,
  BParagraph,
  BSection,
  BSubtitle,
  BTeamMemberCard,
  BTitle,
} from "@/components/elements";

const HomeTeam = ({ teamData }: any) => {
  return (
    <BSection margins="exclude">
      <BContainer className="flex flex-col items-start gap-10">
        <div className="flex flex-col items-start gap-6 md:flex-row">
          <BGroupTitle className="basis-full md:basis-1/2">
            <BSubtitle>{teamData.subtitle}</BSubtitle>
            <BTitle size="lg" className="max-w-full md:max-w-md">
              {teamData.title}
            </BTitle>
          </BGroupTitle>
          <BParagraph className="basis-full md:basis-1/2">
            {teamData.description}
          </BParagraph>
        </div>

        <div className="flex flex-row flex-wrap justify-center items-center gap-6 lg:gap-9">
          {teamData.members.map((member: any, index: number) => (
            <div
              key={index}
              className="basis-full max-w-lg grow sm:basis-[calc(100%/2-24px)] lg:basis-[calc(100%/4-36px)] "
            >
              <BTeamMemberCard data={member} index={index} />
            </div>
          ))}
        </div>
      </BContainer>
    </BSection>
  );
};

export default HomeTeam;
