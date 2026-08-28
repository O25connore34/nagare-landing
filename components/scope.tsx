import Image from "next/image";
import { SectionHead } from "./ui/section-head";

const capabilities = [
  {
    id: "A1",
    title: "Front & rear bumpers",
    description:
      "Aero-corrected shells with reinforced mounting tabs at every fixing point.",
  },
  {
    id: "A2",
    title: "Wide & replacement fenders",
    description:
      "Replacement arches and wide panels from +20 mm to +55 mm clearance.",
  },
  {
    id: "A3",
    title: "Hoods & aero bonnets",
    description:
      "Reinforced inner sub-frames, optional heat extraction ducting.",
  },
  {
    id: "A4",
    title: "Splitters, trays & canards",
    description:
      "High-density core reinforcement where load goes into the chassis.",
  },
  {
    id: "A5",
    title: "One-off prototype aero",
    description:
      "Single pieces for time attack cars and private builds, plugged from scratch.",
  },
];

export function Scope() {
  return (
    <section id="scope" className="border-b border-line">
      <div className="shell py-14 md:py-24 lg:py-32">
        <SectionHead index="01 / Scope" title="What we fabricate">
          Panels for street tuning, circuit privateers and low-volume race
          teams, on Japanese and international sports chassis alike.
        </SectionHead>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <ul className="border-b border-line lg:col-span-7">
            {capabilities.map((item) => (
              <li
                key={item.id}
                className="group grid grid-cols-[auto_1fr] gap-x-5 gap-y-2 border-t border-line py-6 transition-colors duration-150 ease-out hover:border-line-strong"
              >
                <span className="t-meta pt-1 uppercase text-muted transition-colors duration-150 ease-out group-hover:text-accent">
                  {item.id}
                </span>
                <div>
                  <h3 className="t-h3 text-ink">{item.title}</h3>
                  <p className="t-body measure mt-2 text-muted">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="lg:col-span-5">
            <figure className="border border-line">
              <Image
                src="/images/capabilities/nagare-frp-bumper-flange.png"
                alt="Macro view of a trimmed FRP bumper mounting flange showing the layered composite edge and a drilled fixing tab"
                width={1536}
                height={1024}
                sizes="(min-width: 1024px) 460px, 100vw"
                className="aspect-[4/3] w-full object-cover"
              />
              <figcaption className="t-meta border-t border-line bg-elevated px-4 py-3 uppercase text-muted">
                Trimmed flange <span className="text-line-strong">/</span>{" "}
                laminate thickness at the cut line
              </figcaption>
            </figure>

            <dl className="mt-6 border border-line bg-elevated">
              <div className="flex items-baseline justify-between gap-4 border-b border-line px-4 py-3">
                <dt className="t-meta uppercase text-muted">Use case</dt>
                <dd className="font-mono text-[13px] text-ink">Street / circuit</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4 border-b border-line px-4 py-3">
                <dt className="t-meta uppercase text-muted">Finish</dt>
                <dd className="font-mono text-[13px] text-ink">Gelcoat, unpainted</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4 px-4 py-3">
                <dt className="t-meta uppercase text-muted">Carbon</dt>
                <dd className="font-mono text-[13px] text-ink">Not our default</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
