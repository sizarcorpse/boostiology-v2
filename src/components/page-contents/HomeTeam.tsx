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
      <BContainer className="flex flex-col items-start gap-7 md:gap-12">
        <div className="flex flex-col items-start gap-6 md:flex-row">
          <BGroupTitle className="basis-full flex items-center text-center self-center md:basis-1/2 md:items-start md:self-start md:text-start">
            <BSubtitle>{teamData.subtitle}</BSubtitle>
            <BTitle size="lg" className="max-w-[500px]">
              {teamData.title}
            </BTitle>
          </BGroupTitle>
          <BParagraph className="basis-full items-center text-center md:basis-1/2 md:text-start">
            {teamData.description}
          </BParagraph>
        </div>

        <div className="flex flex-row flex-wrap justify-center items-center gap-7 max-w-screen-xl lg:gap-9">
          {teamData.members.map((member: any, index: number) => (
            <div
              className="flex justify-center basis-full sm:basis-[calc(50%-28px)] lg:basis-[calc(33.33%-28px)] xl:basis-[calc(25%-28px)]"
              key={index}
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
