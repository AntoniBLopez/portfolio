import { cn } from "@/lib/utils";

type CardProps = React.ComponentProps<"div"> & {
  interactive?: boolean;
  glow?: boolean;
};

export function Card({
  className,
  interactive = false,
  glow = false,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl bg-panel ring-1 ring-line",
        interactive &&
          "transition-all duration-300 hover:ring-line-hi hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-950/20",
        className,
      )}
      {...props}
    >
      {glow && (
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -right-16 h-56 w-56 rounded-full bg-brand-500/15 blur-3xl"
        />
      )}
      {children}
    </div>
  );
}
