import { notFound } from "next/navigation";
import Link from "next/link";
import CloudinaryImage from "../../components/CloudinaryImage";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";
import ProjectInterior from "../../components/ProjectInterior";
import { getProjectBySlug, getProjectSlugs, projects } from "@/data/projects";

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Not Found" };
  return {
    title: `${project.title} — De'Caves`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  const visionImage = project.interiorImages[0] || project.heroImage;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-cream">
        <section className="w-full bg-cream pt-20 md:pt-24">
          <div className="px-6 pb-10 text-center md:px-12 md:pb-4">
            <h1 className="font-display text-center text-5xl text-brown-deep md:text-7xl">
              {project.title}
            </h1>
            <div className="mx-auto mt-10 flex w-full flex-wrap justify-center border-t-2 border-brown/20 pt-8 md:mt-14 md:pt-10">
              {project.client && (
                <div className="w-1/2 px-4 py-3 text-center md:w-1/4 md:py-0">
                  <p className="mb-1 text-xs font-medium tracking-wider text-black/80 uppercase md:text-sm">Client</p>
                  <p className="text-sm leading-relaxed text-brown-deep md:text-base">{project.client}</p>
                </div>
              )}
              <div className="w-1/2 px-4 py-3 text-center md:w-1/4 md:py-0">
                <p className="mb-1 text-xs font-medium tracking-wider text-black/80 uppercase md:text-sm">Location</p>
                <p className="text-sm leading-relaxed text-brown-deep md:text-base">{project.location}</p>
              </div>
              {project.area && (
                <div className="w-1/2 px-4 py-3 text-center md:w-1/4 md:py-0">
                  <p className="mb-1 text-xs font-medium tracking-wider text-black/80 uppercase md:text-sm">Area</p>
                  <p className="text-sm leading-relaxed text-brown-deep md:text-base">{project.area}</p>
                </div>
              )}
              <div className="w-1/2 px-4 py-3 text-center md:w-1/4 md:py-0">
                <p className="mb-1 text-xs font-medium tracking-wider text-black/80 uppercase md:text-sm">Status</p>
                <p className="text-sm leading-relaxed text-brown-deep md:text-base">Completed</p>
              </div>
            </div>
          </div>
        </section>

        <div className="relative w-full aspect-[4/3] md:aspect-[16/9] md:max-h-[85vh]">
          <CloudinaryImage
            src={project.heroImage}
            alt={project.title}
            fill
            sizes="100vw"
            priority
            className="h-full w-full object-cover object-center"
          />
        </div>

        <section className="w-full overflow-hidden bg-tan-light/30 pt-20 pb-24 md:pt-28 md:pb-16">
          <div className="mx-auto w-full px-6 md:px-14">
            <h2 className="font-display mb-10 text-3xl text-brown-deep md:mb-14 md:text-4xl">
              Project Vision
            </h2>
            <div className="flex w-full flex-col gap-8 md:flex-row md:items-start md:justify-between md:gap-12">
              <div className="w-full md:max-w-[50%] md:flex-1">
                <p className="mb-9 text-base leading-relaxed text-brown-dark md:text-lg">
                  {project.description}
                </p>
              </div>
              <div className="relative aspect-[16/9] w-full shrink-0 md:w-[50%] lg:w-[50%]">
                <CloudinaryImage
                  src={visionImage}
                  alt=""
                  fill
                  sizes="(max-width: 767px) 100vw, 50vw"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <hr className="mt-10 h-px w-full border-0 bg-brown/10 md:mt-14" />
          </div>
        </section>

        {project.interiorImages.length > 0 && (
          <section className="w-full px-6 pb-20 md:px-14 md:pb-32">
            <div className="mx-auto flex w-full flex-col gap-12 md:gap-20">
              <div>
                <div className="mb-8 h-px w-full bg-brown/10 md:mb-10" />
                <h2 className="font-display mb-8 text-2xl font-light text-brown-deep md:mb-10 md:text-3xl">
                  Interior
                </h2>
                <ProjectInterior images={project.interiorImages} />
              </div>
            </div>
          </section>
        )}

        {project.curations.length > 0 && (
          <section className="w-full overflow-hidden bg-tan-light/30 pt-4 pb-24 md:pb-32">
            <div className="mx-auto px-6 md:px-14">
              <div className="mb-10 md:mb-14">
                <div className="mb-8 h-px w-full bg-brown/10 md:mb-10" />
                <h2 className="font-display text-2xl font-light text-brown-deep md:text-3xl">
                  Curation
                </h2>
              </div>
              <div className="mx-auto grid max-w-[680px] grid-cols-2 gap-5 md:gap-6">
                {project.curations.map((c, i) => (
                  <div
                    key={i}
                    className="group relative h-[450px] w-full cursor-pointer overflow-hidden bg-brown-deep/5 sm:h-[350px] md:h-[415px] lg:h-[460px]"
                  >
                    <CloudinaryImage
                      src={c.image}
                      alt={c.title}
                      fill
                      sizes="(max-width: 767px) 50vw, 340px"
                      className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brown-deep/80 via-brown-deep/20 to-brown-deep/10 transition-opacity duration-500" />

                    <div className="absolute right-0 bottom-0 left-0 z-10 p-5 opacity-100 transition-opacity duration-500 md:p-7 group-hover:pointer-events-none group-hover:opacity-0">
                      <p className="mb-1 text-xs tracking-wider text-cream/60 uppercase">{c.subtitle}</p>
                      <h3 className="w-[80%] text-xl leading-tight font-light tracking-tight text-cream md:w-auto md:text-2xl">
                        {c.title}
                      </h3>
                    </div>

                    <div className="absolute inset-0 z-30 flex flex-col justify-start bg-brown-deep/65 p-5 backdrop-blur-md opacity-0 transition-opacity duration-500 md:p-7 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100">
                      <p className="mb-2 text-xs tracking-wider text-cream/55 uppercase">{c.subtitle}</p>
                      <h3 className="mb-4 text-xl leading-tight font-light tracking-tight text-cream md:text-2xl">
                        {c.title}
                      </h3>
                      <p className="text-sm font-light leading-relaxed text-cream/75 md:text-base">
                        {c.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <div className="px-6 pt-20 pb-20 md:px-14">
          <div className="flex items-center justify-between">
            <div>
              {prevProject && (
                <Link
                  href={`/spaces/${prevProject.slug}`}
                  className="group text-sm text-brown transition-colors hover:text-brown-deep"
                >
                  <span className="tracking-wider text-brown/40 uppercase">Previous</span>
                  <p className="font-display text-lg group-hover:underline">{prevProject.title}</p>
                </Link>
              )}
            </div>
            <div className="text-right">
              {nextProject && (
                <Link
                  href={`/spaces/${nextProject.slug}`}
                  className="group text-sm text-brown transition-colors hover:text-brown-deep"
                >
                  <span className="tracking-wider text-brown/40 uppercase">Next</span>
                  <p className="font-display text-lg group-hover:underline">{nextProject.title}</p>
                </Link>
              )}
            </div>
          </div>
        </div>

      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
