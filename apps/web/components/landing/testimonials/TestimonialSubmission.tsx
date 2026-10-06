"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const inputClassName =
  "h-12 w-full rounded-lg border border-ink-200/60 bg-white px-4 text-base text-ink-900 outline-none transition placeholder:text-ink-400 focus:border-brand-500 sm:text-sm dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-sand-100/40";

export function TestimonialSubmission() {
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setOpen(false);
  }

  return (
    <div className="mx-auto mt-14 max-w-xl px-4 md:px-8">
      <div className="flex flex-col items-start gap-4 rounded-2xl bg-white p-6 shadow-soft sm:p-8 dark:bg-white/5">
        <div>
          <h3 className="text-xl font-bold text-ink-900 dark:text-white">Avaliações</h3>
          <p className="mt-1.5 text-sm text-ink-500 dark:text-sand-100/70">
            Seja o primeiro a nos avaliar e compartilhar suas impressões sobre sua
            experiência.
          </p>
        </div>

        <Dialog open={open} onOpenChange={setOpen}>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="h-11 rounded-full border border-ink-200/60 px-5 text-sm font-bold text-ink-900 transition hover:bg-sand-50 dark:border-white/10 dark:text-white dark:hover:bg-white/5"
          >
            Escrever uma avaliação
          </button>

          <DialogContent className="w-full max-w-sm rounded-2xl bg-white p-6 sm:p-8 dark:bg-ink-900">
            <form onSubmit={handleSubmit} className="flex flex-col items-center">
              <h3 className="text-sm font-bold tracking-wide text-ink-900 uppercase dark:text-white">
                Escrever uma avaliação
              </h3>

              <div className="mt-5 flex gap-1.5">
                {Array.from({ length: 5 }).map((_, index) => {
                  const value = index + 1;
                  const isFilled = value <= (hoverRating || rating);

                  return (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setRating(value)}
                      onMouseEnter={() => setHoverRating(value)}
                      onMouseLeave={() => setHoverRating(0)}
                      aria-label={`${value} estrelas`}
                      className="text-brand-500 transition hover:scale-110"
                    >
                      <Star className="size-7" fill={isFilled ? "currentColor" : "none"} />
                    </button>
                  );
                })}
              </div>

              <input
                type="tel"
                required
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                placeholder="O telefone usado na marcação"
                className={`${inputClassName} mt-5`}
              />

              <textarea
                required
                rows={4}
                value={comment}
                onChange={(event) => setComment(event.target.value)}
                placeholder="Conte como foi a sua experiência"
                className={`${inputClassName} mt-3 h-auto resize-none py-3`}
              />

              <button
                type="submit"
                className="mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-ink-900 text-sm font-bold text-white transition hover:bg-ink-800 dark:bg-white dark:text-ink-900 dark:hover:bg-sand-100"
              >
                Enviar avaliação
              </button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
