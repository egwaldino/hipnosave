"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useLoginForm } from "@/lib/hooks/use-login-form";

function inputClassName(hasError?: string) {
  return `h-11 w-full rounded-lg border bg-white/5 pr-4 pl-11 text-base text-white outline-none transition placeholder:text-sand-100/40 sm:text-sm ${
    hasError ? "border-sos-500 focus:border-sos-500" : "border-white/10 focus:border-brand-500"
  }`;
}

export function AdminLogin() {
  const { email, setEmail, password, setPassword, errors, isSubmitting } = useLoginForm();
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    // TODO: validar credenciais e chamar submit(login) quando a API estiver ligada
    router.push("/admin/painel");
  }

  return (
    <section className="dark flex min-h-screen flex-col items-center justify-center gap-10 bg-ink-900 px-4">
      <div className="flex w-full max-w-sm flex-col rounded-2xl bg-white/5 p-8 shadow-soft">
        <div className="mb-2 flex flex-col items-center">
          <Image
            src="/logo-hipnosave-on-dark.webp"
            alt="HipnoSave"
            width={130}
            height={86}
            className="mx-auto h-24 w-auto"
          />
          <h1 className="mt-4 text-center text-xl font-extrabold text-white">
            Painel de Administração
          </h1>
          <p className="mt-1 text-center text-sm text-sand-100/70">
            Acesso exclusivo para profissionais autorizados. Por favor, insira as
            suas credenciais.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-bold text-white">
              Email
            </label>
            <div className="relative">
              <Mail className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-sand-100/50" />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Digite o seu email"
                className={inputClassName(errors.email)}
              />
            </div>
            {errors.email && <p className="mt-1 text-xs text-sos-500">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="password" className="mb-1 block text-sm font-bold text-white">
              Palavra-passe
            </label>
            <div className="relative">
              <Lock className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-sand-100/50" />
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Digite a sua palavra-passe"
                className={`${inputClassName(errors.password)} pr-11`}
              />
              <button
                type="button"
                onClick={() => setShowPassword((value) => !value)}
                aria-label={showPassword ? "Ocultar palavra-passe" : "Mostrar palavra-passe"}
                className="absolute top-1/2 right-4 -translate-y-1/2 text-sand-100/50 transition hover:text-sand-100/80"
              >
                {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
              </button>
            </div>
            {errors.password && <p className="mt-1 text-xs text-sos-500">{errors.password}</p>}
          </div>

          {errors.form && <p className="text-center text-xs text-sos-500">{errors.form}</p>}

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 flex h-12 items-center justify-center rounded-xl bg-brand-500 text-sm font-bold text-white transition hover:bg-brand-600 disabled:opacity-60"
          >
            {isSubmitting ? "A entrar..." : "Entrar"}
          </button>
        </form>
      </div>

      <p className="text-sm text-sand-100/50">© 2026 HipnoSave. Acesso restrito e confidencial.</p>
    </section>
  );
}
