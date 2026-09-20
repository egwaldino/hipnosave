"use client";

import { useCountUp } from "@/lib/hooks/use-count-up";

interface StatItemProps {
  target: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export function StatItem({ target, prefix = "", suffix = "", label }: StatItemProps) {
  const { value, ref } = useCountUp(target);

  return (
    <div ref={ref}>
      <p className="text-3xl font-extrabold text-white sm:text-4xl">
        {prefix}
        {value}
        {suffix}
      </p>
      <p className="mt-2 text-xs font-semibold text-white sm:text-sm">{label}</p>
    </div>
  );
}
