"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Briefcase, Trophy, TrendingUp } from "lucide-react";
import { useTranslations } from "next-intl";

interface AnalyticsStatsProps {
  data: {
    totalApplications: number;
    totalInterviews: number;
    totalOffers: number;
    responseRate: number;
  };
}

export function AnalyticsStats({ data }: AnalyticsStatsProps) {
  const t = useTranslations("analytics");

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            {t("totalApplications")}
          </CardTitle>
          <Briefcase className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data.totalApplications}</div>
          <p className="text-xs text-muted-foreground">{t("allTime")}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{t("interviews")}</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data.totalInterviews}</div>
          <p className="text-xs text-muted-foreground">
            {t("technicalHrInterviews")}
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{t("offers")}</CardTitle>
          <Trophy className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data.totalOffers}</div>
          <p className="text-xs text-muted-foreground">{t("receivedOffers")}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{t("responseRate")}</CardTitle>
          <TrendingUp className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data.responseRate}%</div>
          <p className="text-xs text-muted-foreground">{t("interviewOfferRatio")}</p>
        </CardContent>
      </Card>
    </div>
  );
}
