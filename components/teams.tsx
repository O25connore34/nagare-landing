"use client";

import Image from "next/image";
import { SectionHead } from "./ui/section-head";

const offerings = [
  {
    title: "Short runs, not conveyors",
    description:
      "Batches of two to twenty units per cycle, released from the same mold.",
  },
  {
    title: "Mold storage & upkeep",
    description:
      "Customer tooling is stored and maintained here between production runs.",
  },
  {
    title: "Reinforcement on request",
    description:
      "Extra edge plies and Kevlar corner inserts for endurance and drift use.",
  },
];

export function Teams() {
  const preselectTeamRun = () => {
    const input = document.getElementById("run-team");
    if (input instanceof HTMLInputElement) input.click();
  };

  return (
    <section id="teams" className="border-b border-line">
      <div className="shell py-14 md:py-24 lg:py-32">
        <SectionHead index="05 / B2B & Teams" title="Short runs for shops and teams">
          For tuning shops, race teams and independent fabricators that need the
          same panel more than once.
        </SectionHead>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <dl className="border-b border-line">
              {offerings.map((item) => (
                <div
                  key={item.title}
                  className="border-t border-line py-6"
                >
                  <dt className="t-h3 text-ink">{item.title}</dt>
                  <dd className="t-body measure mt-2 text-muted">
                    {item.description}
                  </dd>
                </div>
              ))}
            </dl>

            <a
              href="#rfq"
              onClick={preselectTeamRun}
              className="mt-8 inline-flex items-center gap-2 font-mono text-[13px] uppercase tracking-[0.04em] text-accent transition-colors duration-150 ease-out hover:text-accent-hover"
            >
              Start a team run RFQ
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>

          <figure className="border border-line lg:col-span-6">
            <Image
              src="/images/b2b/nagare-b2b-batch-rack.png"
              alt="Batch of identical unpainted white gelcoat FRP bumper shells racked vertically in a workshop curing bay"
              width={1536}
              height={1024}
              sizes="(min-width: 1024px) 560px, 100vw"
              className="aspect-[4/3] w-full object-cover"
            />
            <figcaption className="t-meta border-t border-line bg-elevated px-4 py-3 uppercase text-muted">
              Batch run in curing rack{" "}
              <span className="text-line-strong">/</span> single mold, repeated
              releases
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
