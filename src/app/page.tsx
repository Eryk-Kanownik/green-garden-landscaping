import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <AboutUs />
      <Services />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
