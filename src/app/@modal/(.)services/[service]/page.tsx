export const dynamic = "force-dynamic";
import BDialog from "@/components/elements/BDialog";
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

interface ServiceModalProps {
  params: { service: string };
}

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

const ServiceModal: NextPage<ServiceModalProps> = async ({ params }) => {
  const { service: slug } = params;
  const {
    contents: { services },
  } = page;
  const service = services.find((item) => item.slug === slug) || null;

  return (
    <main>
      <BDialog>
        <ServiceHero serviceHeroData={service?.serviceHero} />
        <ServiceDescription
          serviceDescriptionData={service?.serviceDescription}
        />
        <ServiceBlock1 serviceBlock1Data={service?.serviceBlock1} />
        <ServiceFeatures serviceFeaturesData={service?.serviceFeature} />
        <ServiceBlock2 serviceBlock2Data={service?.serviceBlock2} />
        <ServiceFaq serviceFaqData={service?.serviceFaq} />
        <ServiceCta />
      </BDialog>
    </main>
  );
};

export default ServiceModal;
