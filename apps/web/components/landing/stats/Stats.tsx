import { StatItem } from "./StatItem";

const STATS = [
  { target: 6, prefix: "+", suffix: " Anos", label: "de Experiência Clínica" },
  { target: 129, prefix: "+", suffix: "", label: "Pacientes Atendidos" },
  { target: 243, prefix: "+", suffix: "", label: "Sessões Realizadas" },
  { target: 98, prefix: "", suffix: "%", label: "Taxa de Satisfação" },
];

export function Stats() {
  return (
    <section className="bg-ink-900 py-14">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 text-center md:grid-cols-4 md:px-8">
        {STATS.map((stat) => (
          <StatItem key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}
