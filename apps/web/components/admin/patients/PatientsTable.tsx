import { ChevronDown, Search } from "lucide-react";
import type { Patient, STATUS_OPTIONS } from "./patients-data";

const STATUS_BADGE = {
  Ativo: "bg-success-500/15 text-success-500",
  Inativo: "bg-white/10 text-sand-100/60",
  Pendente: "bg-amber-500/15 text-amber-400",
} as const;

interface PatientsTableProps {
  search: string;
  onSearchChange: (value: string) => void;
  statusFilter: string;
  statusOptions: readonly (typeof STATUS_OPTIONS)[number][];
  onStatusChange: (value: (typeof STATUS_OPTIONS)[number]) => void;
  patients: Patient[];
  selectedId?: string;
  onSelect: (id: string) => void;
}

export function PatientsTable({
  search,
  onSearchChange,
  statusFilter,
  statusOptions,
  onStatusChange,
  patients,
  selectedId,
  onSelect,
}: PatientsTableProps) {
  return (
    <div className="flex min-h-0 flex-1 flex-col rounded-2xl bg-white/5 p-6 shadow-soft">
      <div className="flex shrink-0 gap-3">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-sand-100/50" />
          <input
            type="text"
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Pesquisar paciente..."
            className="h-11 w-full rounded-lg border border-white/10 bg-white/5 pr-4 pl-11 text-sm text-white outline-none transition placeholder:text-sand-100/40 focus:border-brand-500"
          />
        </div>

        <div className="relative">
          <select
            value={statusFilter}
            onChange={(event) => onStatusChange(event.target.value as (typeof STATUS_OPTIONS)[number])}
            className="h-11 w-36 appearance-none rounded-lg border border-white/10 bg-white/5 pr-9 pl-4 text-sm text-white outline-none transition focus:border-brand-500 scheme-dark [&>option]:bg-ink-800 [&>option]:text-white"
          >
            {statusOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 text-sand-100/50" />
        </div>
      </div>

      <div className="mt-4 min-h-0 flex-1 overflow-y-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="text-xs font-semibold text-sand-100/50">
              <th className="pb-3 font-semibold">Nome</th>
              <th className="pb-3 font-semibold">Telefone</th>
              <th className="pb-3 font-semibold">Email</th>
              <th className="pb-3 font-semibold">Sessões</th>
              <th className="pb-3 font-semibold">Estado</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr
                key={patient.id}
                onClick={() => onSelect(patient.id)}
                className={`cursor-pointer border-t border-white/10 transition hover:bg-white/5 ${
                  patient.id === selectedId ? "bg-brand-500/10" : ""
                }`}
              >
                <td
                  className={`py-3 font-bold ${
                    patient.id === selectedId ? "text-brand-500" : "text-white"
                  }`}
                >
                  {patient.name}
                </td>
                <td className="py-3 text-sand-100/80">{patient.phone}</td>
                <td className="py-3 text-sand-100/70">{patient.email}</td>
                <td className="py-3 font-bold text-white">{patient.sessions}</td>
                <td className="py-3">
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-bold ${STATUS_BADGE[patient.status]}`}
                  >
                    {patient.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {patients.length === 0 && (
          <p className="mt-6 text-center text-sm text-sand-100/50">
            Nenhum paciente encontrado.
          </p>
        )}
      </div>
    </div>
  );
}
