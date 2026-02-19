"use client";

import { useParams } from "next/navigation";
import { ApplicationForm } from "@/components/applications/application-form";
import { useApplicationStore } from "@/store";
import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useTranslations } from "next-intl";

export default function EditApplicationPage() {
  const params = useParams();
  const t = useTranslations();
  const { getApplicationById, fetchApplications, _hasHydrated, isLoading } =
    useApplicationStore();

  useEffect(() => {
    if (!_hasHydrated) {
      fetchApplications();
    }
  }, [_hasHydrated, fetchApplications]);

  const application = getApplicationById(params.id as string);

  if (!_hasHydrated || isLoading) {
    return (
      <div className="flex items-center justify-center py-16">
        <p className="text-muted-foreground">{t("common.loading")}</p>
      </div>
    );
  }

  if (!application) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <p className="text-muted-foreground">{t("application.notFound")}</p>
        <Link href="/applications" className="mt-4">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t("application.backToList")}
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <ApplicationForm application={application} isEditing />
    </div>
  );
}
