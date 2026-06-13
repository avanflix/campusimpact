import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Workshops from "@/components/Workshops";
import Competition from "@/components/Competition";
import Timeline from "@/components/Timeline";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <Hero />
      <Marquee />
      <Workshops />
      <Competition />
      <Timeline />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
