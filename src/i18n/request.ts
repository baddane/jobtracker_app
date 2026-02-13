import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const locale = cookieStore.get("locale")?.value || "fr";

  const messages =
    locale === "fr"
      ? (await import("@/messages/fr.json")).default
      : (await import("@/messages/en.json")).default;

  return {
    locale,
    messages,
  };
});
