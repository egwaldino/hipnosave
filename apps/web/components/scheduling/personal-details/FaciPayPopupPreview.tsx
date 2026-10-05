"use client";

import { useEffect, useState } from "react";
import { CreditCard, Hash, Loader2, Lock, Smartphone, X } from "lucide-react";
import { Dialog, DialogClose, DialogContent } from "@/components/ui/dialog";

type Method = "facipay" | "multicaixa" | "referencia";

const METHOD_TABS: { id: Method; label: string; Icon: typeof CreditCard }[] = [
  { id: "facipay", label: "FaciPay", Icon: CreditCard },
  { id: "multicaixa", label: "Multicaixa Express", Icon: Smartphone },
  { id: "referencia", label: "Referência EMIS", Icon: Hash },
];

const PROCESSING_DURATION_MS = 5_000;

const fieldClassName =
  "h-11 w-full rounded-lg border border-neutral-700 bg-neutral-800 px-3.5 text-sm text-white outline-none transition placeholder:text-neutral-500 focus:border-[#22C55E]";

interface FaciPayPopupPreviewProps {
  amount: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
}

function ProcessingView({ subtitle }: { subtitle: string }) {
  return (
    <div className="flex flex-col items-center gap-3 py-6 text-center">
      <span className="relative flex size-12 items-center justify-center">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22C55E]/40" />
        <span className="relative flex size-12 items-center justify-center rounded-full bg-[#22C55E]/15 text-[#22C55E]">
          <Loader2 className="size-5 animate-spin" />
        </span>
      </span>
      <p className="text-sm font-semibold">A processar pagamento...</p>
      <p className="text-xs text-neutral-400">{subtitle}</p>
    </div>
  );
}

function PopupBody({
  amount,
  onOpenChange,
  onSuccess,
}: {
  amount: string;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
}) {
  const [method, setMethod] = useState<Method>("facipay");
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    if (!isProcessing) return;

    const timeout = setTimeout(() => {
      onOpenChange(false);
      onSuccess();
    }, PROCESSING_DURATION_MS);

    return () => clearTimeout(timeout);
  }, [isProcessing, onOpenChange, onSuccess]);

  function selectMethod(id: Method) {
    setMethod(id);
    setIsProcessing(false);
  }

  return (
    <div className="flex h-full flex-col bg-neutral-900 text-white">
      <div className="flex shrink-0 items-center justify-between border-b border-neutral-800 px-5 py-4">
        <div className="flex items-center gap-2">
          <span className="flex size-6 items-center justify-center rounded-full bg-[#22C55E] text-xs font-black text-neutral-900">
            F
          </span>
          <span className="text-sm font-bold tracking-tight">
            Faci<span className="text-[#22C55E]">connect</span>
          </span>
        </div>
        <DialogClose
          aria-label="Fechar"
          className="flex size-7 items-center justify-center rounded-full text-neutral-400 transition hover:bg-neutral-800 hover:text-white"
        >
          <X className="size-4" />
        </DialogClose>
      </div>

      <div className="shrink-0 border-b border-neutral-800 px-5 py-4 text-center">
        <p className="text-xs text-neutral-400">A pagar a</p>
        <p className="text-sm font-semibold">HipnoSave — Bernardo Cassuende</p>
        <p className="mt-1 text-2xl font-extrabold text-[#22C55E]">{amount}</p>
      </div>

      <div className="flex shrink-0 border-b border-neutral-800">
        {METHOD_TABS.map(({ id, label, Icon }) => (
          <button
            key={id}
            type="button"
            disabled={isProcessing}
            onClick={() => selectMethod(id)}
            className={`flex flex-1 flex-col items-center gap-1 border-b-2 px-2 py-2.5 text-[11px] font-semibold transition disabled:cursor-not-allowed disabled:opacity-40 ${
              method === id
                ? "border-[#22C55E] text-[#22C55E]"
                : "border-transparent text-neutral-400 hover:text-neutral-200"
            }`}
          >
            <Icon className="size-4" />
            {label}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-5">
        {method === "facipay" &&
          (isProcessing ? (
            <ProcessingView subtitle="Estamos a confirmar os dados do seu cartão com o seu banco." />
          ) : (
            <div className="flex flex-col gap-3">
              <div>
                <label className="mb-1 block text-xs font-semibold text-neutral-400">
                  Número do Cartão
                </label>
                <input placeholder="0000 0000 0000 0000" className={fieldClassName} />
              </div>
              <div>
                <label className="mb-1 block text-xs font-semibold text-neutral-400">
                  Nome no Cartão
                </label>
                <input placeholder="Como aparece no cartão" className={fieldClassName} />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="mb-1 block text-xs font-semibold text-neutral-400">
                    Validade
                  </label>
                  <input placeholder="MM/AA" className={fieldClassName} />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-semibold text-neutral-400">
                    CVV
                  </label>
                  <input placeholder="•••" className={fieldClassName} />
                </div>
              </div>
            </div>
          ))}

        {method === "multicaixa" &&
          (isProcessing ? (
            <ProcessingView
              subtitle={`Abra a app Multicaixa Express e aprove o pedido de ${amount}.`}
            />
          ) : (
            <div className="flex flex-col gap-3">
              <div>
                <label className="mb-1 block text-xs font-semibold text-neutral-400">
                  Número de Telefone
                </label>
                <input defaultValue="+244 923 000 000" className={fieldClassName} />
              </div>
              <p className="text-xs text-neutral-400">
                Vai receber uma notificação na app Multicaixa Express para confirmar o
                pagamento.
              </p>
              <button
                type="button"
                onClick={() => setIsProcessing(true)}
                className="mt-1 flex h-11 items-center justify-center gap-2 rounded-lg bg-[#22C55E] text-sm font-bold text-neutral-900 transition hover:bg-[#22C55E]/90"
              >
                Enviar Pedido
              </button>
            </div>
          ))}

        {method === "referencia" && (
          <div className="flex flex-col gap-3">
            <div className="rounded-lg border border-neutral-700 bg-neutral-800 p-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-neutral-400">Entidade</span>
                <span className="font-mono font-bold">00321</span>
              </div>
              <div className="mt-2 flex items-center justify-between text-sm">
                <span className="text-neutral-400">Referência</span>
                <span className="font-mono font-bold">123 456 789</span>
              </div>
              <div className="mt-2 flex items-center justify-between text-sm">
                <span className="text-neutral-400">Valor</span>
                <span className="font-mono font-bold text-[#22C55E]">{amount}</span>
              </div>
            </div>
            <p className="text-xs text-neutral-400">
              Pague num ATM, Multicaixa Express ou Internet Banking até às 23:59 de hoje.
            </p>
            <button
              type="button"
              className="mt-1 flex h-11 items-center justify-center gap-2 rounded-lg border border-neutral-700 text-sm font-bold text-white transition hover:bg-neutral-800"
            >
              Copiar Referência
            </button>
          </div>
        )}
      </div>

      {method === "facipay" && !isProcessing && (
        <div className="shrink-0 border-t border-neutral-800 px-5 py-4">
          <button
            type="button"
            onClick={() => setIsProcessing(true)}
            className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#22C55E] text-sm font-bold text-neutral-900 transition hover:bg-[#22C55E]/90"
          >
            Pagar {amount}
          </button>
        </div>
      )}

      <div className="flex shrink-0 items-center justify-center gap-1.5 border-t border-neutral-800 px-5 py-3 text-[11px] text-neutral-500">
        <Lock className="size-3" />
        Pagamento processado com segurança pela FaciPay
      </div>
    </div>
  );
}

export function FaciPayPopupPreview({
  amount,
  open,
  onOpenChange,
  onSuccess,
}: FaciPayPopupPreviewProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="w-full max-w-sm overflow-hidden rounded-2xl border-0 bg-neutral-900 p-0 ring-1 ring-neutral-800"
      >
        <PopupBody amount={amount} onOpenChange={onOpenChange} onSuccess={onSuccess} />
      </DialogContent>
    </Dialog>
  );
}
