"use client";

import Image from "next/image";
import { useState } from "react";
import { SectionHead } from "./ui/section-head";

type Project = {
  index: string;
  title: string;
  platform: string;
  image: string;
  alt: string;
  specs: { label: string; value: string }[];
};

const projects: Project[] = [
  {
    index: "01",
    title: "Front aero bumper & under-tray",
    platform: "Track coupe platform",
    image: "/images/archive/nagare-archive-track-bumper.png",
    alt: "Unpainted white gelcoat FRP front bumper and under-tray fitted to a stripped track coupe chassis with even panel gaps",
    specs: [
      { label: "Part type", value: "Bumper + under-tray" },
      { label: "Material", value: "FRP / chopped strand + roving" },
      { label: "Fitment", value: "OEM replacement" },
      { label: "Surface", value: "White gelcoat, unpainted" },
    ],
  },
  {
    index: "02",
    title: "Wide over-fender set, +35 mm",
    platform: "Historic FR chassis",
    image: "/images/archive/nagare-archive-wide-fenders.png",
    alt: "Pair of matte black gelcoat FRP wide over-fenders mounted on a steel test frame",
    specs: [
      { label: "Part type", value: "Front fender pair" },
      { label: "Material", value: "FRP / woven roving" },
      { label: "Fitment", value: "Widebody, +35 mm" },
      { label: "Surface", value: "Black gelcoat, unpainted" },
    ],
  },
  {
    index: "03",
    title: "Vented bonnet, inner skeleton",
    platform: "Circuit sedan",
    image: "/images/archive/nagare-archive-vented-bonnet.png",
    alt: "FRP vented bonnet on a stand showing bonded reinforcement ribs and heat extraction openings on the underside",
    specs: [
      { label: "Part type", value: "Bonnet with sub-frame" },
      { label: "Material", value: "FRP / reinforced layup" },
      { label: "Fitment", value: "OEM replacement" },
      { label: "Surface", value: "Raw laminate, primer-ready" },
    ],
  },
  {
    index: "04",
    title: "One-off rear diffuser assembly",
    platform: "Time attack build",
    image: "/images/archive/nagare-archive-diffuser-assembly.png",
    alt: "Multi-piece FRP rear diffuser with vertical strakes bolted together on a steel workshop stand",
    specs: [
      { label: "Part type", value: "Diffuser, multi-piece" },
      { label: "Material", value: "FRP / high-density core" },
      { label: "Fitment", value: "Custom prototype" },
      { label: "Surface", value: "Grey gelcoat, unpainted" },
    ],
  },
];

function ArchiveCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const panelId = `project-${project.index}-specs`;

  return (
    <article className="border border-line transition-colors duration-150 ease-out hover:border-line-strong">
      <div className="overflow-hidden">
        <Image
          src={project.image}
          alt={project.alt}
          width={1536}
          height={1024}
          sizes="(min-width: 1024px) 560px, 100vw"
          className="aspect-[4/3] w-full object-cover transition-transform duration-200 ease-out hover:scale-[1.01]"
        />
      </div>

      <div className="border-t border-line bg-elevated px-4 py-5">
        <p className="t-meta uppercase text-muted">
          Project <span className="text-line-strong">{"//"}</span>{" "}
          {project.index}
        </p>
        <h3 className="t-h3 mt-3 text-ink">{project.title}</h3>
        <p className="mt-1 font-mono text-[13px] text-muted">
          {project.platform}
        </p>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls={panelId}
          className="mt-4 font-mono text-[12px] uppercase tracking-[0.04em] text-accent transition-colors duration-150 ease-out hover:text-accent-hover"
        >
          {open ? "Hide specification" : "Specification"}
        </button>

        {open ? (
          <dl id={panelId} className="mt-4 border-t border-line">
            {project.specs.map((spec) => (
              <div
                key={spec.label}
                className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-line py-3 last:border-b-0"
              >
                <dt className="t-meta uppercase text-muted">{spec.label}</dt>
                <dd className="font-mono text-[13px] text-ink">{spec.value}</dd>
              </div>
            ))}
          </dl>
        ) : null}
      </div>
    </article>
  );
}

export function Archive() {
  return (
    <section id="archive" className="border-b border-line">
      <div className="shell py-14 md:py-24 lg:py-32">
        <SectionHead index="04 / Archive" title="Fabrication archive">
          Reference builds shown to illustrate part types and fitment. Platforms
          are described generically; no client names or vehicle years attached.
        </SectionHead>

        <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8">
          {projects.map((project) => (
            <ArchiveCard key={project.index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
