import Image from "next/image";
import { SectionHead } from "./ui/section-head";

const steps = [
  {
    index: "01",
    title: "Datum & reference intake",
    description:
      "Send an OEM part, 3D scan data, or name a chassis we already hold tooling for.",
  },
  {
    index: "02",
    title: "Plug & mold preparation",
    description:
      "Plugs are aligned to factory chassis points so panel gaps and flange depths stay uniform.",
  },
  {
    index: "03",
    title: "Layup & gelcoat release",
    description:
      "Multi-layer wet layup, cured at controlled room temperature, released in black or white gelcoat.",
  },
];

export function Intake() {
  return (
    <section id="intake" className="border-b border-line">
      <div className="shell py-14 md:py-24 lg:py-32">
        <SectionHead index="02 / Intake protocol" title="How a part gets started">
          Most clients never visit the workshop. Fitment is settled on
          references and datum points before any glass is cut.
        </SectionHead>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <figure className="border border-line lg:col-span-5">
            <Image
              src="/images/intake/nagare-intake-gap-gauge.png"
              alt="FRP fender mounted on a steel chassis jig with a feeler gauge and ruler set against the shut line to check panel clearance"
              width={1536}
              height={1024}
              sizes="(min-width: 1024px) 460px, 100vw"
              className="aspect-[4/3] w-full object-cover"
            />
            <figcaption className="t-meta border-t border-line bg-elevated px-4 py-3 uppercase text-muted">
              Fender on chassis jig{" "}
              <span className="text-line-strong">/</span> shut line checked
              against datum
            </figcaption>
          </figure>

          <ol className="border-b border-line lg:col-span-7">
            {steps.map((step) => (
              <li
                key={step.index}
                className="grid grid-cols-[auto_1fr] gap-x-5 border-t border-line py-6"
              >
                <span className="font-mono text-[13px] font-medium text-accent">
                  {step.index}
                </span>
                <div>
                  <h3 className="t-h3 text-ink">{step.title}</h3>
                  <p className="t-body measure mt-2 text-muted">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
