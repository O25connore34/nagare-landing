import Image from "next/image";
import { SectionHead } from "./ui/section-head";

const pillars = [
  {
    title: "Reinforcement matrix",
    description:
      "Multi-directional glass at stress corners and mounting lugs.",
  },
  {
    title: "Surface prep",
    description:
      "Uniform polyester gelcoat, ready for block sanding and primer.",
  },
  {
    title: "Edge trimming",
    description:
      "Edges scribed to meet factory liners, fasteners and shut lines.",
  },
  {
    title: "Export packaging",
    description:
      "Timber-reinforced crates built around the panel for freight.",
  },
];

export function Process() {
  return (
    <section id="process" className="border-b border-line">
      <div className="shell py-14 md:py-24 lg:py-32">
        <SectionHead index="03 / Craftsmanship" title="Tooling, layup, finish">
          Ordinary composite practice, done carefully. Orthophthalic and
          isophthalic resins, woven roving and chopped strand matting, high-temp
          epoxy tooling coats on the molds.
        </SectionHead>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <figure className="border border-line lg:col-span-6">
            <Image
              src="/images/process/nagare-frp-hand-layup.png"
              alt="Gloved hands working glass fiber cloth and resin into a negative composite mold with a laminating roller"
              width={1536}
              height={1024}
              sizes="(min-width: 1024px) 560px, 100vw"
              className="aspect-[4/3] w-full object-cover"
            />
            <figcaption className="t-meta border-t border-line bg-elevated px-4 py-3 uppercase text-muted">
              Wet layup into a negative mold{" "}
              <span className="text-line-strong">/</span> roller consolidation
            </figcaption>
          </figure>

          <dl className="border-b border-line lg:col-span-6">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="border-t border-line py-6"
              >
                <dt className="t-h3 text-ink">{pillar.title}</dt>
                <dd className="t-body measure mt-2 text-muted">
                  {pillar.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
