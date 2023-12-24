import {
  ServiceBlock1,
  ServiceBlock2,
  ServiceCta,
  ServiceDescription,
  ServiceFaq,
  ServiceFeatures,
  ServiceHero,
} from "@/components/page-contents";
import { dbConfig as config, dbService as page } from "@/db";
import type { NextPage } from "next";

export async function generateMetadata({
  params,
}: {
  params: { service: string };
}) {
  const {
    contents: { services },
  } = page;
  const service = services.find((item) => item.slug === params.service);

  return {
    title: config.meta.company + " - " + service?.serviceHero?.subtitle,
    description: service?.serviceHero?.description,
    keywords: page.meta.keywords,
    author: config.meta.author,
    company: config.meta.company,
    robots: page.meta.robots,
    ogTitle: config.meta.company + " - " + page.meta.ogTitle,
    ogDescription: page.meta.ogDescription,
    ogImage: page.meta.ogImage,
    ogUrl: page.meta.ogUrl,
  };
}

export async function generateStaticParams() {
  const {
    contents: { services },
  } = page;

  return services.map((service) => ({
    service: service.slug,
  }));
}

interface ServicePageProps {
  params: { service: string };
}

const ServicePage: NextPage<ServicePageProps> = ({ params }) => {
  const {
    contents: { services },
  } = page;
  const { service: slug } = params;
  const service = services.find((item) => item.slug === slug) || null;

  return (
    <main className="px-6 mx-auto max-w-screen-xl">
      <ServiceHero serviceHeroData={service?.serviceHero} />
      <ServiceDescription
        serviceDescriptionData={service?.serviceDescription}
      />
      <ServiceBlock1 serviceBlock1Data={service?.serviceBlock1} />
      <ServiceFeatures serviceFeaturesData={service?.serviceFeature} />
      <ServiceBlock2 serviceBlock2Data={service?.serviceBlock2} />
      <ServiceFaq serviceFaqData={service?.serviceFaq} />
      <ServiceCta />
    </main>
  );
};

export default ServicePage;
