import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getAnalyticsData } from "@/lib/analytics-service";
import { AnalyticsStats } from "@/components/analytics/AnalyticsStats";
import { StatusPieChart } from "@/components/analytics/StatusPieChart";
import { WeeklyActivityChart } from "@/components/analytics/WeeklyActivityChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Analytics | Jobio",
  description: "View insights about your job search progress",
};

export default async function AnalyticsPage() {
  const [data, t] = await Promise.all([
    getAnalyticsData(),
    getTranslations("analytics"),
  ]);

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">
          {t("dashboard")}
        </h2>
      </div>

      {/* Summary Cards */}
      <AnalyticsStats data={data} />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* Weekly Activity - Takes up 4 columns on large screens */}
        <div className="md:col-span-1 lg:col-span-4">
          <WeeklyActivityChart data={data.weeklyActivity} />
        </div>

        {/* Status Distribution - Takes up 3 columns */}
        <div className="md:col-span-1 lg:col-span-3">
          <StatusPieChart
            title={t("applicationStatus")}
            data={data.statusDistribution}
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* Work Type Distribution - Takes up 3 columns */}
        <div className="md:col-span-1 lg:col-span-3">
          <StatusPieChart
            title={t("workTypePreference")}
            data={data.workTypeDistribution}
          />
        </div>

        {/* Placeholder for future insights or another chart */}
        <Card className="md:col-span-1 lg:col-span-4">
          <CardHeader>
            <CardTitle>{t("insightsTitle")}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              {t("insightsDescription")}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
