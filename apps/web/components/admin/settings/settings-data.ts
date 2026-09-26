export interface ProfileSettings {
  fullName: string;
  email: string;
  phone: string;
  postalCode: string;
  specialty: string;
  avatarUrl: string;
}

export const DEFAULT_PROFILE_SETTINGS: ProfileSettings = {
  fullName: "Bernardo Cassuende",
  email: "suporte@hipnosave.com",
  phone: "+244 923 435 995",
  postalCode: "003973",
  specialty: "Psicólogo e Hipnoterapeuta",
  avatarUrl: "/bernardo-cassuende-portrait.webp",
};

export interface OpeningHoursDay {
  id: string;
  label: string;
  isOpen: boolean;
  startTime: string;
  endTime: string;
}

export const DEFAULT_OPENING_HOURS: OpeningHoursDay[] = [
  { id: "mon", label: "Segunda", isOpen: true, startTime: "09:00", endTime: "18:00" },
  { id: "tue", label: "Terça", isOpen: true, startTime: "09:00", endTime: "18:00" },
  { id: "wed", label: "Quarta", isOpen: true, startTime: "09:00", endTime: "18:00" },
  { id: "thu", label: "Quinta", isOpen: true, startTime: "09:00", endTime: "18:00" },
  { id: "fri", label: "Sexta", isOpen: true, startTime: "09:00", endTime: "18:00" },
  { id: "sat", label: "Sábado", isOpen: true, startTime: "09:00", endTime: "13:00" },
  { id: "sun", label: "Domingo", isOpen: false, startTime: "", endTime: "" },
];
