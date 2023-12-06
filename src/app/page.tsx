import {
  HomeAbout,
  HomeBrand,
  HomeHero,
  HomeOffer,
  HomeProject,
  HomeReview,
  HomeTeam,
  HomeWhy,
} from "@/components/page-contents";
import { dbConfig as config, dbHome as page } from "@/db";
import { FC } from "react";

export const metadata = {
  title: config.meta.company + " - " + page.meta.title,
  description: page.meta.description,
  keywords: page.meta.keywords,
  author: config.meta.author,
  company: config.meta.company,
  robots: page.meta.robots,
  ogTitle: config.meta.company + " - " + page.meta.ogTitle,
  ogDescription: page.meta.ogDescription,
  ogImage: page.meta.ogImage,
  ogUrl: page.meta.ogUrl,
};

const Page: FC = () => {
  const {
    contents: { hero, about, offer, project, brand, team, review, why },
  } = page;
  return (
    <main className="bg-slate-50">
      <HomeHero heroData={hero as any} />
      <HomeBrand brandData={brand as any} />
      <HomeWhy whyData={why as any} />
      <HomeAbout aboutData={about as any} />
      <HomeOffer offerData={offer as any} />
      <HomeProject projectData={project as any} />
      <HomeTeam teamData={team as any} />
      <HomeReview reviewData={review as any} />
    </main>
  );
};

export default Page;
