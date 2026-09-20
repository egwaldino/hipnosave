import Image from "next/image";

export function About() {
  return (
    <section id="sobre" className="bg-sand-50 py-20 sm:py-28 dark:bg-ink-900">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 md:grid-cols-2 md:gap-16 md:px-8">
        <div className="relative max-w-[430px] overflow-hidden rounded-[19px]">
          <Image
            src="/bernardo-cassuende-portrait.png"
            alt="Bernardo Cassuende — Psicólogo e Hipnoterapeuta"
            width={860}
            height={1004}
            className="h-auto w-full"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div>
          <div className="flex items-center justify-center gap-3 text-xs font-bold tracking-[0.2em] text-brand-500 uppercase md:justify-start">
            <span className="h-px w-8 bg-brand-500/50" />
            Psicólogo &amp; hipnoterapeuta
            <span className="h-px w-8 bg-brand-500/50" />
          </div>

          <h2 className="mt-4 text-center text-3xl font-extrabold text-ink-900 sm:text-4xl md:text-left dark:text-white">
            Bernardo Cassuende
          </h2>

          <p className="mt-6 text-base leading-relaxed text-ink-600 text-justify dark:text-sand-100/80">
            Psicólogo e hipnoterapeuta clínico, dedicado a fornecer terapia compassiva e
            integrativa, baseada em evidências, dando um novo significado a tua vida.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-600 text-justify dark:text-sand-100/80">
            Com uma formação robusta e anos de prática clínica presencial e online, integro
            as melhores ferramentas da psicologia tradicional e da hipnose clínica para
            garantir que cada sessão proporcione avanços mensuráveis para sua saúde mental e
            bem-estar.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <h3 className="font-bold text-ink-900 dark:text-white">Cédula Profissional</h3>
              <p className="mt-1 text-sm text-ink-500 dark:text-sand-100/70">
                Registado na Ordem dos Psicólogos de Angola — CEP: 003973
              </p>
            </div>
            <div>
              <h3 className="font-bold text-ink-900 dark:text-white">Especialização</h3>
              <p className="mt-1 text-sm text-ink-500 dark:text-sand-100/70">
                Hipnose Clínica e Ericksoniana
                <br />
                Terapia Cognitiva Comportamental — TCC
                <br />
                Neurociência Aplicada
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
