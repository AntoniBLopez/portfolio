import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { LinkButton } from "@/components/ui/button";
import { GradientMesh } from "@/components/gradient-mesh";

export default async function NotFound() {
  const t = await getTranslations("NotFound");
  const tc = await getTranslations("Common");

  return (
    <section className="relative isolate flex min-h-[70vh] items-center overflow-hidden py-32">
      <GradientMesh />
      <Container size="narrow" className="relative text-center">
        <p className="font-mono text-6xl font-bold text-brand sm:text-7xl">{t("code")}</p>
        <h1 className="mt-6 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          {t("title")}
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-ink-2">{t("body")}</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <LinkButton href="/" size="lg">
            {tc("backToHome")}
            <Icon name="arrow-right" className="size-4" />
          </LinkButton>
          <LinkButton href="/projects" variant="secondary" size="lg">
            {tc("viewAllProjects")}
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
