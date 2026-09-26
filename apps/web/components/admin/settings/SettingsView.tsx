"use client";

import { CalendarDays } from "lucide-react";
import { useSettingsForm } from "@/lib/hooks/use-settings-form";
import { OpeningHoursCard } from "./OpeningHoursCard";
import { ProfileSettingsCard } from "./ProfileSettingsCard";
import { SecuritySettingsCard } from "./SecuritySettingsCard";

const TODAY_LABEL = "Quarta-feira, 28 de Agosto 2026";

export function SettingsView() {
  const {
    profile,
    updateProfileField,
    openingHours,
    toggleDayOpen,
    updateDayTime,
    currentPassword,
    setCurrentPassword,
    newPassword,
    setNewPassword,
    confirmPassword,
    setConfirmPassword,
    isSavingProfile,
    isSavingPassword,
    handleSaveProfile,
    handleChangePassword,
  } = useSettingsForm();

  return (
    <div className="flex h-full flex-col">
      <div className="flex shrink-0 flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-white">Configurações</h1>
          <p className="mt-1 text-sm text-sand-100/70">Gerencie as configurações do seu painel.</p>
        </div>
        <span className="flex items-center gap-2 rounded-xl border border-brand-500/20 bg-brand-500/10 px-4 py-2 text-sm font-semibold text-brand-500">
          <CalendarDays className="size-4" />
          {TODAY_LABEL}
        </span>
      </div>

      <div className="mt-6 min-h-0 flex-1 overflow-y-auto">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
          <div className="flex flex-1 flex-col gap-6">
            <ProfileSettingsCard
              profile={profile}
              onChange={updateProfileField}
              isSaving={isSavingProfile}
              onSubmit={handleSaveProfile}
            />
            <SecuritySettingsCard
              currentPassword={currentPassword}
              onCurrentPasswordChange={setCurrentPassword}
              newPassword={newPassword}
              onNewPasswordChange={setNewPassword}
              confirmPassword={confirmPassword}
              onConfirmPasswordChange={setConfirmPassword}
              isSaving={isSavingPassword}
              onSubmit={handleChangePassword}
            />
          </div>

          <OpeningHoursCard
            days={openingHours}
            onToggleDay={toggleDayOpen}
            onTimeChange={updateDayTime}
          />
        </div>
      </div>
    </div>
  );
}
