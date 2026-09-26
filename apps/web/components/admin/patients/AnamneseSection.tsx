import type { AnamneseSection as AnamneseSectionType } from "./anamnese-data";

const fieldClassName =
  "w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none transition placeholder:text-sand-100/40 focus:border-brand-500";

const ROW_COLUMNS_CLASSNAME: Record<number, string> = {
  1: "",
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-3",
};

interface AnamneseSectionProps {
  section: AnamneseSectionType;
  values: Record<string, string>;
  onChange: (id: string, value: string) => void;
}

export function AnamneseSection({ section, values, onChange }: AnamneseSectionProps) {
  return (
    <div className="rounded-2xl bg-white/5 p-6 shadow-soft">
      <h2 className="text-lg font-bold text-white">
        {section.number}. {section.title}
      </h2>
      <p className="mt-1 text-sm text-sand-100/60">{section.description}</p>

      <div className="mt-5 flex flex-col gap-4">
        {section.rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`grid grid-cols-1 gap-4 ${ROW_COLUMNS_CLASSNAME[row.length] ?? ""}`}
          >
            {row.map((field) => (
              <div key={field.id}>
                <label
                  htmlFor={field.id}
                  className="mb-1 block text-sm font-bold text-white"
                >
                  {field.label}
                </label>
                {field.type === "textarea" ? (
                  <textarea
                    id={field.id}
                    rows={3}
                    value={values[field.id] ?? ""}
                    onChange={(event) => onChange(field.id, event.target.value)}
                    placeholder={field.placeholder}
                    className={`${fieldClassName} resize-none`}
                  />
                ) : (
                  <input
                    id={field.id}
                    type="text"
                    value={values[field.id] ?? ""}
                    onChange={(event) => onChange(field.id, event.target.value)}
                    placeholder={field.placeholder}
                    className={fieldClassName}
                  />
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
