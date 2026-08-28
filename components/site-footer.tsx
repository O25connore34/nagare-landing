const colophon = [
  { label: "Legal entity", value: "Nagare Composite Co., Ltd." },
  { label: "Registered", value: "ナガレ・コンポジット株式会社" },
  { label: "Workshop", value: "Toyota City, Aichi Prefecture, Japan" },
  { label: "Hours", value: "Mon–Fri 09:00–18:00 JST (UTC+9)" },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto">
      <div className="shell py-14 md:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <p className="font-display text-[15px] font-bold uppercase tracking-[0.08em] text-ink">
              Nagare Composite
            </p>
            <dl className="mt-6 border-b border-line">
              {colophon.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-[140px_1fr] gap-4 border-t border-line py-3"
                >
                  <dt className="t-meta uppercase text-muted">{row.label}</dt>
                  <dd className="font-mono text-[13px] text-ink">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-6 lg:justify-self-end lg:text-right">
            <p className="t-meta uppercase text-muted">
              Technical inquiries & export documents
            </p>
            <a
              href="mailto:rfq@nagare-composite.jp"
              className="mt-3 inline-block font-display text-[18px] font-semibold text-ink transition-colors duration-150 ease-out hover:text-accent md:text-[22px]"
            >
              rfq@nagare-composite.jp
            </a>
            <p className="mt-8">
              <a
                href="#top"
                className="font-mono text-[13px] uppercase tracking-[0.04em] text-muted transition-colors duration-150 ease-out hover:text-ink"
              >
                Back to top
              </a>
            </p>
          </div>
        </div>

        <p className="t-meta mt-12 border-t border-line pt-6 uppercase text-muted">
          © Nagare Composite Co., Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
