import Image from "next/image";
import { ButtonGhostLink, ButtonPrimaryLink } from "./ui/button";
import { SpecBadge } from "./ui/spec-badge";

const badges = [
  "Hand-laid FRP",
  "Master molds & plugs",
  "Gelcoat finish",
  "Worldwide crating",
];

export function Hero() {
  return (
    <section id="top" className="border-b border-line">
      <div className="shell pt-14 pb-14 md:pt-24 md:pb-24">
        <p className="t-meta uppercase text-muted">
          Toyota, Aichi, Japan{" "}
          <span className="text-line-strong">{"//"}</span> Composite fabrication
        </p>

        <h1 className="t-display mt-6 max-w-[16ch] text-ink">
          FRP body panels and molds, built to fit.
        </h1>

        <p className="t-body measure mt-6 text-muted">
          We hand-lay FRP bodywork in Toyota, Aichi. Custom molds, replica
          panels, and one-off aero, crated for export worldwide.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <ButtonPrimaryLink href="#rfq">Submit Part RFQ</ButtonPrimaryLink>
          <ButtonGhostLink href="#scope">View Fabrication Scope</ButtonGhostLink>
        </div>

        <ul className="mt-9 flex flex-wrap gap-2">
          {badges.map((badge) => (
            <li key={badge}>
              <SpecBadge>{badge}</SpecBadge>
            </li>
          ))}
        </ul>

        <figure className="mt-12 border border-line md:mt-16">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src="/images/hero/nagare-frp-hero-jig.png"
              alt="Raw white gelcoat FRP aero bumper panel clamped in a steel tooling jig, mold parting line and glass weave visible"
              width={1536}
              height={1024}
              priority
              sizes="(min-width: 1200px) 1136px, 100vw"
              className="h-full w-full object-cover"
            />
          </div>
          <figcaption className="t-meta border-t border-line bg-elevated px-4 py-3 uppercase text-muted">
            Front aero panel in tooling jig <span className="text-line-strong">/</span>{" "}
            parting line and glass weave visible
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
