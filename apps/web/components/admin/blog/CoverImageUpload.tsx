"use client";

import { useRef } from "react";
import { Camera } from "lucide-react";

interface CoverImageUploadProps {
  imageUrl: string;
  onChange: (url: string) => void;
}

export function CoverImageUpload({ imageUrl, onChange }: CoverImageUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    onChange(URL.createObjectURL(file));
  }

  const input = (
    <input
      ref={inputRef}
      type="file"
      accept="image/png,image/jpeg"
      onChange={handleFileChange}
      className="hidden"
    />
  );

  if (imageUrl) {
    return (
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="group relative block aspect-video w-full overflow-hidden rounded-xl border border-white/10"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={imageUrl} alt="" className="size-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center gap-2 bg-black/0 text-white opacity-0 transition group-hover:bg-black/50 group-hover:opacity-100">
          <Camera className="size-4" />
          <span className="text-sm font-semibold">Alterar Imagem</span>
        </div>
        {input}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={() => inputRef.current?.click()}
      className="flex aspect-video w-full flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-white/15 text-center transition hover:border-brand-500/50"
    >
      <span className="flex size-11 items-center justify-center rounded-full bg-brand-500/15 text-brand-500">
        <Camera className="size-5" />
      </span>
      <span className="text-sm font-semibold text-brand-500">
        Arraste uma imagem ou clique para fazer upload
      </span>
      <span className="text-xs text-sand-100/50">PNG, JPG até 5MB</span>
      {input}
    </button>
  );
}
