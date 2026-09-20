"use client";

import { useState, type ReactElement } from "react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { SosDialogContent } from "./SosDialogContent";

const MOBILE_QUERY = "(max-width: 767px)";

export function SosDialog({ trigger }: { trigger: ReactElement }) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog
      open={open}
      onOpenChange={(nextOpen, eventDetails) => {
        const isMobile =
          typeof window !== "undefined" && window.matchMedia(MOBILE_QUERY).matches;

        if (isMobile && !nextOpen && eventDetails.reason !== "close-press") {
          return;
        }

        setOpen(nextOpen);
      }}
    >
      <DialogTrigger render={trigger} />
      <SosDialogContent />
    </Dialog>
  );
}
