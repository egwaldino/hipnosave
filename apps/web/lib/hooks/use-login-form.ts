"use client";

import { useState } from "react";
import { login } from "@/lib/api/login";
import { loginSchema } from "@/lib/validators/login.schema";

type LoginFormErrors = Partial<Record<"email" | "password" | "form", string>>;

export function useLoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<LoginFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function submit(onSuccess: () => void) {
    const result = loginSchema.safeParse({ email, password });

    if (!result.success) {
      const nextErrors: LoginFormErrors = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0];
        if (typeof field === "string" && !(field in nextErrors)) {
          nextErrors[field as "email" | "password"] = issue.message;
        }
      }
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      await login(result.data);
      onSuccess();
    } catch {
      setErrors({ form: "Email ou senha incorretos." });
    } finally {
      setIsSubmitting(false);
    }
  }

  return { email, setEmail, password, setPassword, errors, isSubmitting, submit };
}
