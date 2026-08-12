import { useState } from "react";

export function useContactForm() {
  const [name, setName] = useState("");
  const [reason, setReason] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const [hasConsent, setHasConsent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = "244923435995";
    const selectedReason = reason[0];
    const text = [
      `Olá, Dr. Bernardo. O meu nome é ${name}.`,
      selectedReason && `Gostaria de ${selectedReason}.`,
      message,
    ].filter(Boolean).join(" ");
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return {
    name,
    message,
    setName,
    setReason,
    setMessage,
    hasConsent,
    setHasConsent,
    handleSubmit,
  };
}
