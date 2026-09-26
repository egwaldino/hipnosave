"use client";

import { useState } from "react";
import {
  DEFAULT_OPENING_HOURS,
  DEFAULT_PROFILE_SETTINGS,
  type OpeningHoursDay,
  type ProfileSettings,
} from "@/components/admin/settings/settings-data";

export function useSettingsForm() {
  const [profile, setProfile] = useState<ProfileSettings>(DEFAULT_PROFILE_SETTINGS);
  const [openingHours, setOpeningHours] = useState<OpeningHoursDay[]>(DEFAULT_OPENING_HOURS);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSavingProfile, setIsSavingProfile] = useState(false);
  const [isSavingPassword, setIsSavingPassword] = useState(false);

  function updateProfileField<K extends keyof ProfileSettings>(field: K, value: ProfileSettings[K]) {
    setProfile((current) => ({ ...current, [field]: value }));
  }

  function toggleDayOpen(id: string) {
    setOpeningHours((current) =>
      current.map((day) => (day.id === id ? { ...day, isOpen: !day.isOpen } : day)),
    );
  }

  function updateDayTime(id: string, field: "startTime" | "endTime", value: string) {
    setOpeningHours((current) =>
      current.map((day) => (day.id === id ? { ...day, [field]: value } : day)),
    );
  }

  async function handleSaveProfile(event: React.FormEvent) {
    event.preventDefault();
    setIsSavingProfile(true);
    // TODO: chamar lib/api quando existir um endpoint para guardar o perfil
    setIsSavingProfile(false);
  }

  async function handleChangePassword(event: React.FormEvent) {
    event.preventDefault();
    setIsSavingPassword(true);
    // TODO: chamar lib/api quando existir um endpoint para alterar a senha
    setIsSavingPassword(false);
  }

  return {
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
  };
}
