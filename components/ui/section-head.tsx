import type { ReactNode } from "react";

type SectionHeadProps = {
  index: string;
  title: string;
  children?: ReactNode;
};

export function SectionHead({ index, title, children }: SectionHeadProps) {
  return (
    <header className="border-t border-line pt-6">
      <p className="t-meta uppercase text-accent">{index}</p>
      <h2 className="t-h2 mt-4 max-w-[16ch] text-ink">{title}</h2>
      {children ? (
        <div className="t-body measure mt-5 text-muted">{children}</div>
      ) : null}
    </header>
  );
}
