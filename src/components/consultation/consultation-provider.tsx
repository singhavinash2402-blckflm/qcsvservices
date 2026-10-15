"use client";

import { X } from "lucide-react";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState
} from "react";

import { ConsultationForm } from "@/components/consultation/consultation-form";

type ConsultationContextValue = { open: (service?: string) => void };

const ConsultationContext = createContext<ConsultationContextValue | null>(
  null
);

export function useConsultation() {
  const context = useContext(ConsultationContext);
  if (!context) {
    throw new Error("useConsultation must be used inside ConsultationProvider");
  }
  return context;
}

export function ConsultationProvider({
  children
}: Readonly<{ children: React.ReactNode }>) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [service, setService] = useState("");
  const [session, setSession] = useState(0);

  const open = useCallback((nextService = "") => {
    setService(nextService);
    setSession((current) => current + 1);
    document.documentElement.style.overflow = "hidden";
    dialogRef.current?.showModal();
  }, []);

  const value = useMemo(() => ({ open }), [open]);

  return (
    <ConsultationContext.Provider value={value}>
      {children}

      <dialog
        ref={dialogRef}
        aria-labelledby="consultation-title"
        onClose={() => {
          document.documentElement.style.overflow = "";
        }}
        onClick={(event) => {
          if (event.target === dialogRef.current) dialogRef.current?.close();
        }}
        className="m-auto max-h-[calc(100dvh-2rem)] w-[min(600px,calc(100vw-2rem))] overflow-y-auto rounded-3xl border border-[var(--border)] bg-[var(--surface-elevated)] p-0 text-[var(--foreground)] shadow-[var(--shadow-card)] backdrop:bg-black/60"
      >
        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2
                id="consultation-title"
                className="text-2xl font-bold tracking-tight"
              >
                Request a consultation
              </h2>
              <p className="mt-2 text-sm text-[var(--foreground-muted)]">
                Share the system, site or process you are working on and we will
                suggest a way to support it.
              </p>
            </div>
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              aria-label="Close"
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--border)] text-[var(--foreground)] transition-colors hover:bg-[var(--surface)]"
            >
              <X aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-6">
            <ConsultationForm
              key={session}
              idPrefix="dialog"
              defaultService={service}
            />
          </div>
        </div>
      </dialog>
    </ConsultationContext.Provider>
  );
}
