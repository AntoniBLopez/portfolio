import Image from "next/image";
import { images } from "@/config/images";
import { cn } from "@/lib/utils";

type ProfileLogoProps = {
  className?: string;
  priority?: boolean;
};

export function ProfileLogo({ className, priority = false }: ProfileLogoProps) {
  return (
    <span
      className={cn(
        "relative size-9 overflow-hidden rounded-xl ring-1 ring-brand-400/35 shadow-lg shadow-brand-950/30",
        className,
      )}
    >
      <Image
        src={images.logo}
        alt=""
        width={1312}
        height={1750}
        className="absolute left-1/2 top-0 h-auto w-[230%] max-w-none -translate-x-[calc(50%+2px)] object-cover object-top"
        sizes="256px"
        quality={95}
        priority={priority}
      />
    </span>
  );
}
