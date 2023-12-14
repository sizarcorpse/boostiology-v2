"use client";

export const dynamic = "force-dynamic";
import { useRouter } from "next/navigation";

import {
  ServiceBlock1,
  ServiceBlock2,
  ServiceCta,
  ServiceDescription,
  ServiceFaq,
  ServiceFeatures,
  ServiceHero,
} from "@/components/page-contents";

import { AlertDialog, AlertDialogContent } from "@/components/ui/alert-dialog";
import { dbConfig as config, dbService as page } from "@/db";

export default function PhotoModal({
  params: { service: slug },
}: {
  params: { service: string };
}) {
  const router = useRouter();
  const {
    contents: { services },
  } = page;

  const service = services.find((item) => item.slug === slug) || null;

  const handleModalDismiss = () => {
    router.back();
  };

  return (
    <main>
      <AlertDialog defaultOpen onOpenChange={handleModalDismiss}>
        <AlertDialogContent className="max-w-screen-lg h-screen p-0 border-none overflow-y-scroll">
          <ServiceHero serviceHeroData={service?.serviceHero} />
          <ServiceDescription
            serviceDescriptionData={service?.serviceDescription}
          />
          <ServiceBlock1 serviceBlock1Data={service?.serviceBlock1} />
          <ServiceFeatures serviceFeaturesData={service?.serviceFeature} />
          <ServiceBlock2 serviceBlock2Data={service?.serviceBlock2} />
          <ServiceFaq serviceFaqData={service?.serviceFaq} />
          <ServiceCta />
        </AlertDialogContent>
      </AlertDialog>
    </main>
  );
}
