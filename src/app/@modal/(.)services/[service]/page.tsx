export const dynamic = "force-dynamic";

import {
  ServiceBlock1,
  ServiceBlock2,
  ServiceCta,
  ServiceDescription,
  ServiceFaq,
  ServiceFeatures,
  ServiceHero,
} from "@/components/page-contents";

import BDialog from "@/components/elements/BDialog";

import { dbConfig as config, dbService as page } from "@/db";

export default function PhotoModal({
  params: { service: slug },
}: {
  params: { service: string };
}) {
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
}
