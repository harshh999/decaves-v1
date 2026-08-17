import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";

import Projects from "./components/Projects";
import FAQ from "./components/FAQ";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />

        <Projects />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
