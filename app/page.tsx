import { Archive } from "@/components/archive";
import { Hero } from "@/components/hero";
import { Intake } from "@/components/intake";
import { Process } from "@/components/process";
import { Rfq } from "@/components/rfq";
import { Scope } from "@/components/scope";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Teams } from "@/components/teams";

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Scope />
        <Intake />
        <Process />
        <Archive />
        <Teams />
        <Rfq />
      </main>
      <SiteFooter />
    </>
  );
}
