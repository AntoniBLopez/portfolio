import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  as: Heading = "h2",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && (
        <div className="flex items-center gap-3">
          <span aria-hidden className="h-px w-8 bg-gradient-to-r from-brand-500 to-transparent" />
          <span className="text-xs font-semibold tracking-[0.18em] text-brand uppercase">
            {eyebrow}
          </span>
        </div>
      )}
      <Heading
        className={cn(
          "font-semibold text-ink",
          Heading === "h1"
            ? "text-4xl sm:text-5xl lg:text-6xl"
            : "text-3xl sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]",
        )}
      >
        {title}
      </Heading>
      {subtitle && (
        <p
          className={cn(
            "text-base leading-relaxed text-ink-2 sm:text-lg",
            align === "center" ? "max-w-2xl" : "max-w-2xl",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
