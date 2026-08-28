import type { ReactNode } from "react";

export function SpecBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-edge border border-line bg-elevated px-2 py-1 font-mono text-[11px] uppercase tracking-[0.04em] text-muted">
      {children}
    </span>
  );
}
