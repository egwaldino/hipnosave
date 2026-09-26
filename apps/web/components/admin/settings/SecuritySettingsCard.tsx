"use client";

import { useState } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";

const fieldClassName =
  "h-11 w-full rounded-lg border border-white/10 bg-white/5 pr-11 pl-11 text-sm text-white outline-none transition placeholder:text-sand-100/40 focus:border-brand-500";

interface SecuritySettingsCardProps {
  currentPassword: string;
  onCurrentPasswordChange: (value: string) => void;
  newPassword: string;
  onNewPasswordChange: (value: string) => void;
  confirmPassword: string;
  onConfirmPasswordChange: (value: string) => void;
  isSaving: boolean;
  onSubmit: (event: React.FormEvent) => void;
}

function PasswordField({
  id,
  label,
  value,
  onChange,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-sm font-bold text-white">
        {label}
      </label>
      <div className="relative">
        <Lock className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-sand-100/50" />
        <input
          id={id}
          type={visible ? "text" : "password"}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className={fieldClassName}
        />
        <button
          type="button"
          onClick={() => setVisible((current) => !current)}
          aria-label={visible ? "Ocultar senha" : "Mostrar senha"}
          className="absolute top-1/2 right-4 -translate-y-1/2 text-sand-100/50 transition hover:text-sand-100/80"
        >
          {visible ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
        </button>
      </div>
    </div>
  );
}

export function SecuritySettingsCard({
  currentPassword,
  onCurrentPasswordChange,
  newPassword,
  onNewPasswordChange,
  confirmPassword,
  onConfirmPasswordChange,
  isSaving,
  onSubmit,
}: SecuritySettingsCardProps) {
  return (
    <form onSubmit={onSubmit} className="rounded-2xl bg-white/5 p-6 shadow-soft">
      <h2 className="text-lg font-bold text-white">Segurança</h2>

      <div className="mt-5 flex flex-col gap-4 border-t border-white/10 pt-5">
        <PasswordField
          id="currentPassword"
          label="Senha atual"
          value={currentPassword}
          onChange={onCurrentPasswordChange}
        />
        <PasswordField
          id="newPassword"
          label="Nova senha"
          value={newPassword}
          onChange={onNewPasswordChange}
        />
        <PasswordField
          id="confirmPassword"
          label="Confirmar nova senha"
          value={confirmPassword}
          onChange={onConfirmPasswordChange}
        />

        <button
          type="submit"
          disabled={isSaving}
          className="mt-2 flex h-11 items-center justify-center rounded-xl bg-brand-500 text-sm font-bold text-white transition hover:bg-brand-600 disabled:opacity-60"
        >
          {isSaving ? "A alterar..." : "Alterar Senha"}
        </button>
      </div>
    </form>
  );
}
