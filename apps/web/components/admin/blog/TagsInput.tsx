"use client";

import { useState } from "react";
import { X } from "lucide-react";

interface TagsInputProps {
  tags: string[];
  onAdd: (tag: string) => void;
  onRemove: (tag: string) => void;
}

export function TagsInput({ tags, onAdd, onRemove }: TagsInputProps) {
  const [draft, setDraft] = useState("");

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter" || event.key === ",") {
      event.preventDefault();
      onAdd(draft);
      setDraft("");
    }
  }

  return (
    <div className="flex min-h-11 flex-wrap items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 focus-within:border-brand-500">
      {tags.map((tag) => (
        <span
          key={tag}
          className="flex items-center gap-1 rounded-full bg-brand-500/15 px-2.5 py-1 text-xs font-semibold text-brand-500"
        >
          {tag}
          <button type="button" onClick={() => onRemove(tag)} aria-label={`Remover tag ${tag}`}>
            <X className="size-3" />
          </button>
        </span>
      ))}
      <input
        type="text"
        value={draft}
        onChange={(event) => setDraft(event.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={tags.length === 0 ? "Adicione tags..." : "Adicionar +"}
        className="min-w-24 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-sand-100/40"
      />
    </div>
  );
}
