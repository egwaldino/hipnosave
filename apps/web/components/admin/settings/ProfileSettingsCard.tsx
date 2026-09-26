"use client";

import { useRef } from "react";
import { Camera } from "lucide-react";
import type { ProfileSettings } from "./settings-data";

const fieldClassName =
  "h-11 w-full rounded-lg border border-white/10 bg-white/5 px-4 text-sm text-white outline-none transition placeholder:text-sand-100/40 focus:border-brand-500";
const labelClassName = "mb-1 block text-xs font-bold tracking-wide text-sand-100/60 uppercase";

interface ProfileSettingsCardProps {
  profile: ProfileSettings;
  onChange: <K extends keyof ProfileSettings>(field: K, value: ProfileSettings[K]) => void;
  isSaving: boolean;
  onSubmit: (event: React.FormEvent) => void;
}

export function ProfileSettingsCard({
  profile,
  onChange,
  isSaving,
  onSubmit,
}: ProfileSettingsCardProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    onChange("avatarUrl", URL.createObjectURL(file));
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col rounded-2xl bg-white/5 p-6 shadow-soft"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-white">Perfil Profissional</h2>
        <button
          type="submit"
          disabled={isSaving}
          className="flex h-10 items-center justify-center rounded-xl bg-brand-500 px-5 text-sm font-bold text-white transition hover:bg-brand-600 disabled:opacity-60"
        >
          {isSaving ? "A guardar..." : "Salvar"}
        </button>
      </div>

      <div className="mt-5 flex items-center gap-4 border-t border-white/10 pt-5">
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="group relative size-16 shrink-0 overflow-hidden rounded-full"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={profile.avatarUrl} alt="" className="size-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 text-white opacity-0 transition group-hover:bg-black/50 group-hover:opacity-100">
            <Camera className="size-4" />
          </div>
          <input
            ref={inputRef}
            type="file"
            accept="image/png,image/jpeg"
            onChange={handleFileChange}
            className="hidden"
          />
        </button>
        <div>
          <p className="text-sm font-bold text-white">Foto de Perfil</p>
          <p className="mt-0.5 text-sm text-sand-100/60">
            Esta foto será visível para os seus pacientes nos relatórios e agendamentos.
          </p>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="fullName" className={labelClassName}>
          Nome Completo
        </label>
        <input
          id="fullName"
          type="text"
          value={profile.fullName}
          onChange={(event) => onChange("fullName", event.target.value)}
          className={fieldClassName}
        />
      </div>

      <div className="mt-4">
        <label htmlFor="email" className={labelClassName}>
          E-mail Profissional
        </label>
        <input
          id="email"
          type="email"
          value={profile.email}
          onChange={(event) => onChange("email", event.target.value)}
          className={fieldClassName}
        />
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className={labelClassName}>
            Telefone
          </label>
          <input
            id="phone"
            type="text"
            value={profile.phone}
            onChange={(event) => onChange("phone", event.target.value)}
            className={fieldClassName}
          />
        </div>
        <div>
          <label htmlFor="postalCode" className={labelClassName}>
            CEP
          </label>
          <input
            id="postalCode"
            type="text"
            value={profile.postalCode}
            onChange={(event) => onChange("postalCode", event.target.value)}
            className={fieldClassName}
          />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="specialty" className={labelClassName}>
          Especialidade
        </label>
        <input
          id="specialty"
          type="text"
          value={profile.specialty}
          onChange={(event) => onChange("specialty", event.target.value)}
          className={fieldClassName}
        />
      </div>
    </form>
  );
}
