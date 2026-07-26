import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ProfileLogo } from "@/components/profile-logo";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { profile } from "@/content/site";

export async function SiteFooter({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "Footer" });
  const tn = await getTranslations({ locale, namespace: "Nav" });

  const exploreLinks = [
    { href: "/#about", label: tn("about") },
    { href: "/#experience", label: tn("experience") },
    { href: "/projects", label: tn("projects") },
    { href: "/#contact", label: tn("contact") },
  ];

  const serviceLinks = [
    { href: "/services/web-development", label: tn("services_web") },
    { href: "/services/ai-automation", label: tn("services_ai") },
  ];

  return (
    <footer className="relative mt-auto border-t border-line bg-canvas-2">
      <Container size="wide" className="py-14">
        <div className="grid gap-12 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <ProfileLogo />
              <span className="text-sm font-semibold text-ink">{profile.name}</span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-ink-2">{t("tagline")}</p>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex w-fit items-center gap-2 text-sm font-medium text-brand hover:underline"
            >
              <Icon name="mail" className="size-4" />
              {profile.email}
            </a>
          </div>

          <FooterColumn title={t("navTitle")}>
            {exploreLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-ink-2 transition-colors hover:text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title={t("servicesTitle")}>
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-ink-2 transition-colors hover:text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title={t("connectTitle")}>
            {profile.socials.map((social) => (
              <li key={social.href}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-ink-2 transition-colors hover:text-ink"
                >
                  <Icon name={social.icon} className="size-4" />
                  {social.label}
                </a>
              </li>
            ))}
          </FooterColumn>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-xs text-ink-3 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {profile.name}. {t("rights")}
          </p>
          <p>{t("builtWith")}</p>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xs font-semibold tracking-[0.18em] text-ink-3 uppercase">
        {title}
      </h2>
      <ul className="flex flex-col gap-3">{children}</ul>
    </div>
  );
}
