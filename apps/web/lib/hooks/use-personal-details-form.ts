"use client";

import { useState } from "react";
import { CPLP_COUNTRIES } from "@/components/scheduling/personal-details/cplp-countries";
import { createAppointmentSchema } from "@/lib/validators/booking.schema";

const personalDetailsSchema = createAppointmentSchema.omit({ slotId: true });

type PersonalDetailsFormErrors = Partial<
  Record<"patientName" | "patientPhone" | "patientEmail" | "reason" | "acceptedTerms", string>
>;

export function usePersonalDetailsForm() {
  const [patientName, setPatientName] = useState("");
  const [patientEmail, setPatientEmail] = useState("");
  const [countryCode, setCountryCode] = useState(CPLP_COUNTRIES[0].code);
  const [localPhone, setLocalPhone] = useState("");
  const [reason, setReason] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(true);
  const [errors, setErrors] = useState<PersonalDetailsFormErrors>({});

  function submit(onValid: () => void) {
    const patientPhone = `${countryCode}${localPhone.replace(/\s+/g, "")}`;

    const result = personalDetailsSchema.safeParse({
      patientName,
      patientPhone,
      patientEmail,
      reason,
    });

    const nextErrors: PersonalDetailsFormErrors = {};

    if (!result.success) {
      for (const issue of result.error.issues) {
        const field = issue.path[0];
        if (typeof field === "string" && !(field in nextErrors)) {
          nextErrors[field as keyof PersonalDetailsFormErrors] = issue.message;
        }
      }
    }

    if (!acceptedTerms) {
      nextErrors.acceptedTerms = "É necessário aceitar os termos para continuar.";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      onValid();
    }
  }

  return {
    patientName,
    setPatientName,
    patientEmail,
    setPatientEmail,
    countryCode,
    setCountryCode,
    localPhone,
    setLocalPhone,
    reason,
    setReason,
    acceptedTerms,
    setAcceptedTerms,
    errors,
    submit,
  };
}
