"use client";

import { AlertDialog, AlertDialogContent } from "@/components/ui/alert-dialog";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { Suspense } from "react";

const BDialog = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const handleModalDismiss = () => {
    router.back();
  };

  return (
    <AlertDialog defaultOpen onOpenChange={handleModalDismiss}>
      <AlertDialogContent className="max-w-screen-lg h-screen p-0 border-none overflow-y-scroll">
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default BDialog;
