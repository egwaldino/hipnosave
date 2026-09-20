import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { FacebookIcon, InstagramIcon, LinkedInIcon } from "./SocialIcons";

// TODO: confirmar horário real com o Bernardo
const OPENING_HOURS = [
  { days: "Segunda-feira", hours: "09:00 – 18:00" },
  { days: "Terça-feira", hours: "09:00 – 18:00" },
  { days: "Quarta-feira", hours: "09:00 – 18:00" },
  { days: "Quinta-feira", hours: "09:00 – 18:00" },
  { days: "Sexta-feira", hours: "09:00 – 18:00" },
  { days: "Sábado", hours: "09:00 – 13:00" },
  { days: "Domingo", hours: "Encerrado" },
];

const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://facebook.com", Icon: FacebookIcon },
  { label: "Instagram", href: "https://instagram.com", Icon: InstagramIcon },
  { label: "LinkedIn", href: "https://linkedin.com", Icon: LinkedInIcon },
];

export function Footer() {
  return (
    <footer className="bg-ink-900 py-16 text-sand-100">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 md:grid-cols-[1.2fr_1fr_1fr] md:px-8">
        <div>
          <Image
            src="/logo-hipnosave-on-dark.webp"
            alt="HipnoSave — Consultório de Hipnoterapia"
            width={166}
            height={110}
            className="h-24 w-auto"
          />
          <p className="mt-4 max-w-xs text-sm text-sand-100/70">
            Garantindo as melhores abordagens em hipnoterapia clínica e psicologia para a
            superação de perturbações emocionais em Luanda.
          </p>
          <div className="mt-5 flex gap-3">
            {SOCIAL_LINKS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex size-9 items-center justify-center rounded-full bg-white/5 text-brand-500 transition hover:bg-white/10"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-bold text-white">Contacto &amp; Localização</h3>
          <ul className="mt-4 space-y-3 text-sm text-sand-100/70">
            <li className="flex items-center gap-2">
              <Mail className="size-4 shrink-0 text-brand-500" />
              hipnosaveangola@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <Phone className="size-4 shrink-0 text-brand-500" />
              +244 923 435 995
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-brand-500" />
              Rua 28 de Maio, Bairro da Maianga, Luanda, Angola
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-white">Horário de Funcionamento</h3>
          <ul className="mt-4 space-y-3 text-sm text-sand-100/70">
            {OPENING_HOURS.map((entry) => (
              <li key={entry.days} className="flex items-center justify-between gap-4">
                <span>{entry.days}</span>
                <span className="text-sand-100/90">{entry.hours}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-white/10 px-4 pt-6 md:px-8">
        <div className="flex flex-col items-center justify-between gap-2 text-xs text-sand-100/50 sm:flex-row">
          <p>© {new Date().getFullYear()} HipnoSave. Todos os direitos reservados.</p>
          <p>
            Desenvolvido por{" "}
            <a
              href="https://www.egwaldinocassuente.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline transition hover:text-white"
            >
              Egwaldino Cassuente
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
