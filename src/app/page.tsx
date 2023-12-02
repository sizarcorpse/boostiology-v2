import { HomeAbout, HomeHero, HomeOffer } from "@/components/page-contents";
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
    contents: { hero, about, offer },
  } = page;
  return (
    <main className="bg-slate-50">
      <HomeHero heroData={hero as any} />
      <HomeAbout aboutData={about as any} />
      <HomeOffer offerData={offer as any} />
    </main>
  );
};

export default Page;
