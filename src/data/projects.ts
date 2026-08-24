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
    slug: "our-project-p1",
    title: "The Floating boxes",
    location: "Vadodara",
    heroImage: "https://res.cloudinary.com/diqslwugu/image/upload/c_limit,w_1920/f_auto/q_auto/v1787238405/floatingboxes2_wpxpwj.webp",
    description:
      "A space designed with intention and elegance, where every detail serves a purpose. The interplay of light, texture, and form creates an environment that feels both refined and deeply comfortable.",
    interiorImages: [
      cld("Our_Project_p1", "image_2.webp"),
      cld("Our_Project_p1", "image_3.webp"),
      cld("Our_Project_p1", "image_4.webp"),
      cld("Our_Project_p1", "image_5.webp"),
      cld("Our_Project_p1", "image_6.webp"),
      "https://res.cloudinary.com/diqslwugu/image/upload/v1787238393/fb3_k4mjjw.webp",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1787238392/fb2_oqfhwt.webp",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1787238405/floatingboxes2_wpxpwj.webp",
    ],
    curations: [],
  },
  {
    slug: "our-project-p2",
    title: "The Hanging Pyramids ",
    location: "Sherkhi, Vadodara",
    heroImage: "https://res.cloudinary.com/diqslwugu/image/upload/v1787252823/ay_mggfm9.webp",
    description:
      "A space designed with intention and elegance, where every detail serves a purpose. The interplay of light, texture, and form creates an environment that feels both refined and deeply comfortable.",
    interiorImages: [
      cld("Our_Project_p2", "image_2.webp"),
      cld("Our_Project_p2", "image_3.webp"),
      cld("Our_Project_p2", "image_4.webp"),
      cld("Our_Project_p2", "image_5.webp"),
      cld("Our_Project_p2", "image_6.webp"),
      "https://res.cloudinary.com/diqslwugu/image/upload/v1787251347/th1_ds5o3z.webp",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1787251346/th4_v1obqf.webp",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1787251346/th3_ctn5y5.webp",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1787251346/th5_dsauio.webp",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1787251346/th2_wz0piz.webp",
    ],
    curations: [],
  },
  {
    slug: "our-project-p3",
    title: "Villa Hacienda",
    location: "Vadodara",
    heroImage: "https://res.cloudinary.com/wkqz5bnk/image/upload/c_limit,w_1920/f_auto/q_auto/v1/our-project-p3/image-4?_a=BAVT+ODY0",
    description:
      "A space designed with intention and elegance, where every detail serves a purpose. The interplay of light, texture, and form creates an environment that feels both refined and deeply comfortable.",
    interiorImages: [
      cld("Our_Project_p3", "image_2.webp"),
      cld("Our_Project_p3", "image_3.webp"),
      cld("Our_Project_p3", "image_4.webp"),
      "https://res.cloudinary.com/diqslwugu/image/upload/v1787252070/hac2_akk6bf.webp",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1787252072/hac5_hzch3z.webp",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1787252073/hac3_bdwps5.webp",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1787252075/hac4_xtydql.webp",
      "https://res.cloudinary.com/wkqz5bnk/image/upload/c_limit,w_3840/f_auto/q_auto/v1/our-project-p3/image-1?_a=BAVT+ODY0",
    ],
    curations: [],
  },



  {
    slug: "our-project-p4",
    title: "The Skyhigh Retreat",
    location: "Vadodara",
    heroImage: "https://res.cloudinary.com/wkqz5bnk/image/upload/c_limit,w_640/f_auto/q_auto/v1/our-project-p4/image-5?_a=BAVT+ODY0",
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
    title: "Shah's Residence",
    location: "Sama, Vadodara",
    heroImage: cld("sama residence", "IMG_1621.webp"),
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
    heroImage: cld("Biren's Villa", "image_2.webp"),
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
    title: "The Grid Residence",
    location: "Vadodara",
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
    slug: "kolhapur",
    title: "The Courtyard Estate",
    location: "Kolhapur",
    heroImage: cld("kolhapur", "50ff5272-b0b8-4412-bf31-5a461466cedd.webp"),
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
    heroImage: cld("Ankur's-villa", "ANKUR'S-VILLA", "BPD_0945.webp"),
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
    title: "Anhaya Store, Kolhapur",
    location: "Kolhapur",
    area: "4,200 sqft.",
    heroImage: cld(
      "Anhaya Store, Kolhapur",
      "Anhaya Store, Kolhapur (A+I)",
      "Photoshoot",
      "12.webp"
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
