import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-200 disabled:pointer-events-none disabled:opacity-55";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-600 text-white shadow-lg shadow-brand-600/25 hover:bg-brand-500 hover:shadow-brand-500/35 hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "bg-panel-hi text-ink ring-1 ring-line hover:ring-line-hi hover:-translate-y-0.5 active:translate-y-0",
  outline:
    "text-ink ring-1 ring-line-hi hover:bg-panel-hi hover:-translate-y-0.5 active:translate-y-0",
  ghost: "text-ink-2 hover:text-ink hover:bg-panel-hi",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm sm:text-[0.95rem]",
  lg: "h-13 px-7 text-base",
};

type StyleProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
};

export function buttonStyles({ variant = "primary", size = "md", className }: StyleProps = {}) {
  return cn(base, variants[variant], sizes[size], className);
}

type ButtonProps = StyleProps & React.ComponentProps<"button">;
type LinkButtonProps = StyleProps & React.ComponentProps<typeof Link>;
type AnchorButtonProps = StyleProps & React.ComponentProps<"a">;

export function Button({ variant, size, className, ...rest }: ButtonProps) {
  return <button className={buttonStyles({ variant, size, className })} {...rest} />;
}

export function LinkButton({ variant, size, className, ...rest }: LinkButtonProps) {
  return <Link className={buttonStyles({ variant, size, className })} {...rest} />;
}

export function ExternalLinkButton({
  variant,
  size,
  className,
  ...rest
}: AnchorButtonProps) {
  return (
    <a
      className={buttonStyles({ variant, size, className })}
      target="_blank"
      rel="noopener noreferrer"
      {...rest}
    />
  );
}
