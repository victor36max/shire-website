import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { WhatIsShire } from "@/components/sections/what-is-shire";
import { DemoVideo } from "@/components/sections/demo-video";
import { Features } from "@/components/sections/features";
import { HowItWorks } from "@/components/sections/how-it-works";
import { OpenSourceCta } from "@/components/sections/open-source-cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <WhatIsShire />
        <DemoVideo />
        <Features />
        <HowItWorks />
        <OpenSourceCta />
      </main>
      <Footer />
    </>
  );
}
