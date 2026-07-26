import { cn } from "@/lib/utils";
import { Container } from "./container";

type SectionProps = React.ComponentProps<"section"> & {
  containerSize?: "default" | "narrow" | "wide";
  containerClassName?: string;
  bleed?: boolean;
};

export function Section({
  className,
  children,
  containerSize = "default",
  containerClassName,
  bleed = false,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn("relative scroll-mt-24 py-20 sm:py-28", className)}
      {...props}
    >
      {bleed ? (
        children
      ) : (
        <Container size={containerSize} className={containerClassName}>
          {children}
        </Container>
      )}
    </section>
  );
}
