import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Procedures from "@/components/Procedures";
import BeforeAfter from "@/components/BeforeAfter";
import Testimonials from "@/components/Testimonials";
import Differentials from "@/components/Differentials";
import FAQ from "@/components/FAQ";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Procedures />
        <BeforeAfter />
        <Testimonials />
        <Differentials />
        <FAQ />
        <CtaSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  );
}
