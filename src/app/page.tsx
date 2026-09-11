import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Industries } from "@/components/sections/industries";
import { WhyQCSV } from "@/components/sections/why-qcsv";
import { SuccessStories } from "@/components/sections/success-stories";
import { Methodology } from "@/components/sections/methodology";
import { FinalCTA } from "@/components/sections/final-cta";
import { Contact } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header />

      <main>
        <Hero />
        <Services />
        <Industries />
        <WhyQCSV />
        <SuccessStories />
        <Methodology />
        <FinalCTA />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}