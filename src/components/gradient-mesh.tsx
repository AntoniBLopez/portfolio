import { cn } from "@/lib/utils";

/** Decorative blurred colour field used behind hero and CTA areas. */
export function GradientMesh({
  className,
  grid = true,
}: {
  className?: string;
  grid?: boolean;
}) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      {grid && (
        <div className="grid-backdrop absolute inset-0 [mask-image:radial-gradient(ellipse_at_50%_0%,black,transparent_72%)]" />
      )}
      <div
        className="absolute -top-40 left-1/2 h-[34rem] w-[52rem] -translate-x-1/2 rounded-full blur-3xl animate-aurora"
        style={{ background: "radial-gradient(closest-side, var(--mesh-1), transparent)" }}
      />
      <div
        className="absolute top-24 -right-32 h-[26rem] w-[26rem] rounded-full blur-3xl animate-aurora [animation-delay:-6s]"
        style={{ background: "radial-gradient(closest-side, var(--mesh-2), transparent)" }}
      />
      <div
        className="absolute -bottom-24 -left-24 h-[24rem] w-[30rem] rounded-full blur-3xl animate-aurora [animation-delay:-12s]"
        style={{ background: "radial-gradient(closest-side, var(--mesh-3), transparent)" }}
      />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-canvas to-transparent" />
    </div>
  );
}
