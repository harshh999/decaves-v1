import Header from "../components/Header";
import SpacesShowcase from "../components/SpacesShowcase";
import { projects } from "@/data/projects";

export default function SpacesPage() {
  return (
    <>
      <Header />
      <main className="relative w-full h-[100dvh] overflow-hidden">
        <SpacesShowcase projects={projects} />
      </main>
    </>
  );
}