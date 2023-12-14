import { useRouter } from "next/navigation";

import {
  ServiceBlock1,
  ServiceBlock2,
  ServiceDescription,
  ServiceFaq,
  ServiceFeatures,
  ServiceHero,
} from "@/components/page-contents";

import { dbConfig as config, dbService as page } from "@/db";

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
    <main>
      {/* <ServiceHero serviceHeroData={service?.serviceHero} /> */}
      {/* <ServiceDescription
        serviceDescriptionData={service?.serviceDescription}
      /> */}
      {/* <ServiceBlock1 serviceBlock1Data={service?.serviceBlock1} /> */}
      <ServiceFeatures serviceFeaturesData={service?.serviceFeature} />
    </main>
  );
};

export default ServicePage;
