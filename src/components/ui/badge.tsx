import { cn } from "@/lib/utils";

type BadgeProps = React.ComponentProps<"span"> & {
  variant?: "default" | "brand" | "outline" | "tech";
};

const variants = {
  default: "bg-panel-hi text-ink-2 ring-1 ring-line",
  brand: "bg-brand-500/10 text-brand ring-1 ring-brand-500/25",
  outline: "text-ink-3 ring-1 ring-line",
  tech: "bg-brand-500/14 text-brand ring-1 ring-brand-400/35 shadow-[inset_0_0_0_1px_rgb(96_165_250_/_0.08)]",
} as const;

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium tracking-tight whitespace-nowrap",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
