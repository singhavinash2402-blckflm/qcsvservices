"use client";

import { useConsultation } from "@/components/consultation/consultation-provider";

/** Opens the consultation popup, so visitors never leave the page they are on. */
export function ConsultationButton({
  service,
  className,
  onClick,
  children
}: Readonly<{
  service?: string;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}>) {
  const { open } = useConsultation();

  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        onClick?.();
        open(service);
      }}
    >
      {children}
    </button>
  );
}
