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

export async function generateStaticParams() {
  const {
    contents: { services },
  } = page;

  return services.map((service) => ({
    service: service.slug,
  }));
}

const ServicePage = ({
  params: { service: slug },
}: {
  params: { service: string };
}) => {
  const {
    contents: { services },
  } = page;

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
