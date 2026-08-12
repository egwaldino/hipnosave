import { useState } from "react";

export function useContactForm() {
  const [name, setName] = useState("");
  const [reason, setReason] = useState<string[]>([]);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = "244923435995";
    const text = `Olá Dr.Bernardo, meu nome é ${name}. Serviço: ${reason}. ${message}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return {
    name,
    message,
    setName,
    setReason,
    setMessage,
    handleSubmit,
  };
}
