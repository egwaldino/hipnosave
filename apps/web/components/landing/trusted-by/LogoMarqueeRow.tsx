"use client";

import Image from "next/image";
import { useTheme } from "next-themes";

interface Entity {
  name: string;
  slug: string;
  size: string;
  hasDarkVariant?: boolean;
}

interface LogoMarqueeRowProps {
  entities: Entity[];
  reverse?: boolean;
  className?: string;
}

export function LogoMarqueeRow({ entities, reverse, className }: LogoMarqueeRowProps) {
  const { resolvedTheme } = useTheme();
  const loopedEntities = [...entities, ...entities];
  const isDark = resolvedTheme === "dark";

  return (
    <div
      className={`overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] ${className ?? ""}`}
    >
      <div
        className={`flex w-max items-center gap-10 md:gap-25 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
      >
        {loopedEntities.map((entity, index) => {
          const suffix = isDark && entity.hasDarkVariant ? "-on-dark" : "";

          return (
            <Image
              key={`${entity.slug}-${index}`}
              src={`/trusted-by/${entity.slug}${suffix}.webp`}
              alt={entity.name}
              width={120}
              height={60}
              className={`${entity.size} w-auto shrink-0 object-contain`}
            />
          );
        })}
      </div>
    </div>
  );
}
