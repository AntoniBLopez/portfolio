import type { ProjectEngagement } from "@/content/site";

/** Localized label for a project's commission type (and price when client work). */
export function engagementLabel(
  engagement: ProjectEngagement,
  t: (key: string, values?: Record<string, string>) => string,
): string {
  if (engagement.kind === "client") {
    return engagement.price
      ? t("engagementClientPrice", { price: engagement.price })
      : t("engagementClient");
  }
  if (engagement.kind === "altruistic") return t("engagementAltruistic");
  if (engagement.kind === "interview") return t("engagementInterview");
  return t("engagementPersonal");
}
