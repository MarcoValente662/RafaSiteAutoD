import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Differentials from "@/components/sections/Differentials";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main data-testid="home-page" className="relative">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Differentials />
      {/* <Gallery /> */}
      {/* <Testimonials /> */}
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
