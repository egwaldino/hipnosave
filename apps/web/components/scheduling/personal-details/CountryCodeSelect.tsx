"use client";

import { Select } from "@base-ui/react/select";
import { Check, ChevronDown } from "lucide-react";
import { CPLP_COUNTRIES } from "./cplp-countries";

interface CountryCodeSelectProps {
  value: string;
  onValueChange: (value: string) => void;
  accentClassName: string;
}

export function CountryCodeSelect({
  value,
  onValueChange,
  accentClassName,
}: CountryCodeSelectProps) {
  const selected = CPLP_COUNTRIES.find((country) => country.code === value);

  return (
    <Select.Root
      value={value}
      onValueChange={(nextValue) => {
        if (nextValue) onValueChange(nextValue);
      }}
    >
      <Select.Trigger
        aria-label="Indicativo do país"
        className={`flex h-11 w-28 shrink-0 items-center justify-between gap-1 rounded-lg border border-ink-200/60 bg-white px-2.5 text-base text-ink-900 outline-none transition sm:text-sm dark:border-white/10 dark:bg-white/5 dark:text-white ${accentClassName}`}
      >
        <span className="flex items-center gap-1.5">
          {selected && (
            <img
              src={`https://flagcdn.com/${selected.iso2}.svg`}
              alt=""
              className="h-3.5 w-5 shrink-0 rounded-xs object-cover"
            />
          )}
          {selected?.code}
        </span>
        <Select.Icon>
          <ChevronDown className="size-3.5 text-ink-400 dark:text-sand-100/50" />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Positioner sideOffset={6} align="start">
          <Select.Popup className="min-w-56 rounded-xl bg-white p-1.5 shadow-soft outline-none dark:bg-ink-800">
            <Select.List>
              {CPLP_COUNTRIES.map((country) => (
                <Select.Item
                  key={country.code}
                  value={country.code}
                  className="flex cursor-pointer items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-ink-700 outline-none transition hover:bg-brand-500/10 data-selected:font-bold dark:text-sand-100/80"
                >
                  <span className="flex items-center gap-2.5">
                    <img
                      src={`https://flagcdn.com/${country.iso2}.svg`}
                      alt=""
                      className="h-3.5 w-5 shrink-0 rounded-xs object-cover"
                    />
                    <Select.ItemText>{country.name}</Select.ItemText>
                    <span className="text-ink-400 dark:text-sand-100/50">{country.code}</span>
                  </span>
                  <Select.ItemIndicator>
                    <Check className="size-4 text-brand-500" />
                  </Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.List>
          </Select.Popup>
        </Select.Positioner>
      </Select.Portal>
    </Select.Root>
  );
}
