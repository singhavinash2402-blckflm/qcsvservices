import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Hero } from "@/components/sections/hero";
import { Statement } from "@/components/sections/statement";
import { Services } from "@/components/sections/services";
import { HowWeWork } from "@/components/sections/how-we-work";
import { Industries } from "@/components/sections/industries";
import { SuccessStories } from "@/components/sections/success-stories";
import { Faq } from "@/components/sections/faq";
import { WhyQcsv } from "@/components/sections/why-qcsv";
import { Contact } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header overlay />

      <main id="main-content">
        <Hero />
        <Statement />
        <Services />
        <Industries />
        <HowWeWork />
        <WhyQcsv />
        <SuccessStories />
        <Faq />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
