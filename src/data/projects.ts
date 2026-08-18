export interface Curation {
  title: string;
  subtitle: string;
  image: string;
  description: string;
}

import { toPublicId } from "@/data/images";

export interface Project {
  slug: string;
  title: string;
  location: string;
  area?: string;
  client?: string;
  heroImage: string;
  description: string;
  interiorImages: string[];
  exteriorImages?: string[];
  curations: Curation[];
}

function cld(...segments: string[]) {
  const root = segments.slice(0, -1).join("/");
  const file = segments[segments.length - 1];
  return toPublicId(`${root}/${file}`);
}

function rootFile(file: string) {
  return toPublicId(file);
}

export const projects: Project[] = [
  {
    slug: "our-project-p2",
    title: "Project Two",
    location: "India",
    heroImage: cld("Our_Project_p2", "image_1.webp"),
    description:
      "A space designed with intention and elegance, where every detail serves a purpose. The interplay of light, texture, and form creates an environment that feels both refined and deeply comfortable.",
    interiorImages: [
      cld("Our_Project_p2", "image_2.webp"),
      cld("Our_Project_p2", "image_3.webp"),
      cld("Our_Project_p2", "image_4.webp"),
      cld("Our_Project_p2", "image_5.webp"),
      cld("Our_Project_p2", "image_6.webp"),
    ],
    curations: [],
  },
  {
    slug: "our-project-p3",
    title: "Project Three",
    location: "India",
    heroImage: cld("Our_Project_p3", "image_1.webp"),
    description:
      "A space designed with intention and elegance, where every detail serves a purpose. The interplay of light, texture, and form creates an environment that feels both refined and deeply comfortable.",
    interiorImages: [
      cld("Our_Project_p3", "image_2.webp"),
      cld("Our_Project_p3", "image_3.webp"),
      cld("Our_Project_p3", "image_4.webp"),
    ],
    curations: [],
  },
  {
    slug: "our-project-p1",
    title: "Project One",
    location: "India",
    heroImage: cld("Our_Project_p1", "image_1.webp"),
    description:
      "A space designed with intention and elegance, where every detail serves a purpose. The interplay of light, texture, and form creates an environment that feels both refined and deeply comfortable.",
    interiorImages: [
      cld("Our_Project_p1", "image_2.webp"),
      cld("Our_Project_p1", "image_3.webp"),
      cld("Our_Project_p1", "image_4.webp"),
      cld("Our_Project_p1", "image_5.webp"),
      cld("Our_Project_p1", "image_6.webp"),
    ],
    curations: [],
  },
  {
    slug: "our-project-p4",
    title: "Project Four",
    location: "India",
    heroImage: cld("Our_Project_p4", "image_1.webp"),
    description:
      "A space designed with intention and elegance, where every detail serves a purpose. The interplay of light, texture, and form creates an environment that feels both refined and deeply comfortable.",
    interiorImages: [
      cld("Our_Project_p4", "image_2.webp"),
      cld("Our_Project_p4", "image_3.webp"),
      cld("Our_Project_p4", "image_4.webp"),
      cld("Our_Project_p4", "image_5.webp"),
      cld("Our_Project_p4", "image_6.webp"),
    ],
    curations: [],
  },
  {
    slug: "sama-residence",
    title: "Sama Residence",
    location: "India",
    heroImage: cld("sama residence", "IMG_1607.webp"),
    description:
      "A space designed with intention and elegance, where every detail serves a purpose. The interplay of light, texture, and form creates an environment that feels both refined and deeply comfortable.",
    interiorImages: [
      cld("sama residence", "IMG_1621.webp"),
      cld("sama residence", "IMG_1623.webp"),
      cld("sama residence", "IMG_1627.webp"),
      cld("sama residence", "IMG_1628.webp"),
      cld("sama residence", "IMG_1629.webp"),
    ],
    curations: [],
  },
  {
    slug: "birens-villa",
    title: "The Ivory House",
    location: "Vadodara",
    heroImage: cld("Biren's Villa", "image_1.webp"),
    description:
      "A distinctive residence shaped around light, scale, and the rhythm of everyday living. Generous volumes and carefully curated textures come together to create a home that feels both grounded and effortlessly elegant.",
    interiorImages: [
      cld("Biren's Villa", "image_2.webp"),
      cld("Biren's Villa", "image_3.webp"),
      cld("Biren's Villa", "image_4.webp"),
      cld("Biren's Villa", "image_5.webp"),
      cld("Biren's Villa", "image_6.webp"),
      cld("Biren's Villa", "image_7.webp"),
    ],
    curations: [],
  },
  {
    slug: "unknown",
    title: "Unknown",
    location: "India",
    heroImage: cld("unknown", "10a20530-5bea-4898-b7be-a5a093f59533.webp"),
    description:
      "A space designed with intention and elegance, where every detail serves a purpose. The interplay of light, texture, and form creates an environment that feels both refined and deeply comfortable.",
    interiorImages: [
      cld("unknown", "12dafd73-05c5-4c2b-84af-db7e7b1e3f30.webp"),
      cld("unknown", "534a5811-c20b-4863-ae99-c1a0151f1a14.webp"),
      cld("unknown", "6cfd58ea-c2e5-4593-a36b-edc0ad0b2a4f.webp"),
      cld("unknown", "911d2000-05d9-4c5b-b2d0-8686dae670e1.webp"),
    ],
    curations: [],
  },
  {
    slug: "karelibaug",
    title: "Karelibaug",
    location: "India",
    heroImage: cld("karelibaug", "7210a478-ec5e-4eea-a9f1-e99411c290b2.webp"),
    description:
      "A space designed with intention and elegance, where every detail serves a purpose. The interplay of light, texture, and form creates an environment that feels both refined and deeply comfortable.",
    interiorImages: [
      cld("karelibaug", "72b09f90-b46d-4ef5-9aa2-9fabed44401f.webp"),
      cld("karelibaug", "af660f91-2908-44b1-86c4-956b3dea21d1.webp"),
      cld("karelibaug", "fb6de847-3f37-4543-87bb-1d717b8c7cfc.webp"),
    ],
    curations: [],
  },
  {
    slug: "kolhapur",
    title: "Kolhapur",
    location: "India",
    heroImage: cld("kolhapur", "40cc7527-beb5-448f-8fe0-36044e29fd9d.webp"),
    description:
      "A space designed with intention and elegance, where every detail serves a purpose. The interplay of light, texture, and form creates an environment that feels both refined and deeply comfortable.",
    interiorImages: [
      cld("kolhapur", "50ff5272-b0b8-4412-bf31-5a461466cedd.webp"),
      cld("kolhapur", "5e25c365-fb4d-4063-a64d-a2340cf0295b.webp"),
      cld("kolhapur", "b2055604-9676-466a-a033-81e2d51516a7.webp"),
    ],
    curations: [],
  },
  {
    slug: "ankur-bhai",
    title: "The Walnut Residence",
    location: "Vadodara",
    area: "5,160 sqft.",
    client: "AVM GSPN Chowdary",
    heroImage: cld("Ankur's-villa", "ANKUR'S-VILLA", "BPD_0902 - Copy.webp"),
    description:
      "Rooted in the idea of openness, the residence dissolves boundaries between spaces through flowing forms, natural illumination, and carefully framed moments of connection. Warm minimalism, layered textures, and an abundance of daylight create a home that feels both serene and vibrant.",
    interiorImages: [
      cld("Ankur's-villa", "ANKUR'S-VILLA", "BPD_0945.webp"),
      cld("Ankur's-villa", "ANKUR'S-VILLA", "BPD_0974.webp"),
      cld("Ankur's-villa", "ANKUR'S-VILLA", "BPD_0982.webp"),
      cld("Ankur's-villa", "ANKUR'S-VILLA", "BPD_1129.webp"),
      cld("Ankur's-villa", "ANKUR'S-VILLA", "BPD_1134.webp"),
      cld("Ankur's-villa", "ANKUR'S-VILLA", "BPD_1156.webp"),
      cld("Ankur's-villa", "ANKUR'S-VILLA", "BPD_1172.webp"),
      cld("Ankur's-villa", "ANKUR'S-VILLA", "BPD_1187.webp"),
    ],
    curations: [],
  },
  {
    slug: "anhaya-store-kolhapur",
    title: "Casa Sutra",
    location: "Kolhapur, Maharashtra",
    area: "4,200 sqft.",
    heroImage: cld(
      "Anhaya Store, Kolhapur",
      "Anhaya Store, Kolhapur (A+I)",
      "Photoshoot",
      "10.webp"
    ),
    description:
      "A retail space designed to immerse visitors in a world of curated experiences. Every detail—from the material palette to the lighting—has been crafted to elevate the shopping journey into something memorable.",
    interiorImages: [
      cld("Anhaya Store, Kolhapur", "Anhaya Store, Kolhapur (A+I)", "Photoshoot", "11.webp"),
      cld("Anhaya Store, Kolhapur", "Anhaya Store, Kolhapur (A+I)", "Photoshoot", "12.webp"),
      cld("Anhaya Store, Kolhapur", "Anhaya Store, Kolhapur (A+I)", "Photoshoot", "13.webp"),
      cld("Anhaya Store, Kolhapur", "Anhaya Store, Kolhapur (A+I)", "Photoshoot", "14.webp"),
      cld("Anhaya Store, Kolhapur", "Anhaya Store, Kolhapur (A+I)", "Photoshoot", "15.webp"),
      cld("Anhaya Store, Kolhapur", "Anhaya Store, Kolhapur (A+I)", "Photoshoot", "16.webp"),
      cld("Anhaya Store, Kolhapur", "Anhaya Store, Kolhapur (A+I)", "Photoshoot", "17.webp"),
      cld("Anhaya Store, Kolhapur", "Anhaya Store, Kolhapur (A+I)", "Photoshoot", "18.webp"),
      cld("Anhaya Store, Kolhapur", "Anhaya Store, Kolhapur (A+I)", "Photoshoot", "2.webp"),
      cld("Anhaya Store, Kolhapur", "Anhaya Store, Kolhapur (A+I)", "Photoshoot", "2B.webp"),
      cld("Anhaya Store, Kolhapur", "Anhaya Store, Kolhapur (A+I)", "Photoshoot", "3.webp"),
    ],
    curations: [],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug) ?? null;
}

export function getProjectSlugs() {
  return projects.map((p) => p.slug);
}
