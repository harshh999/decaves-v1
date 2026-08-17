import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import SpacesList from "../components/SpacesList";
import SpacesHero from "../components/SpacesHero";
import { projects } from "@/data/projects";

export default function SpacesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-cream pt-20">
        <SpacesHero />

        <div className="px-6 md:px-12 xl:px-16 pt-4 pb-12">
          <SpacesList projects={projects} />
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}