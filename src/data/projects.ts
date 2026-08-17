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
    slug: "spinal-stone",
    title: "Spinal Stone",
    location: "Vadodara",
    area: "12,000 sqft.",
    client: "Mr Ramakanth",
    heroImage: cld("SPINAL STONE-20260721", "SPINAL STONE", "11.webp"),
    description:
      "A stunning vision of modern architecture, this space captures the essence of tranquility and functionality. Natural light cascades through expansive windows, highlighting the bespoke finishes and natural textures woven seamlessly throughout the environment. It is a quiet escape meant to rejuvenate the spirit and inspire the mind.",
    interiorImages: [
      cld("SPINAL STONE-20260721", "SPINAL STONE", "15.webp"),
      cld("SPINAL STONE-20260721", "SPINAL STONE", "18.webp"),
      cld("SPINAL STONE-20260721", "SPINAL STONE", "20.webp"),
      cld("SPINAL STONE-20260721", "SPINAL STONE", "22.webp"),
      cld("SPINAL STONE-20260721", "SPINAL STONE", "26.webp"),
      cld("SPINAL STONE-20260721", "SPINAL STONE", "27.webp"),
      cld("SPINAL STONE-20260721", "SPINAL STONE", "29.webp"),
      cld("SPINAL STONE-20260721", "SPINAL STONE", "30a.webp"),
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
  {
    slug: "suramya-altis",
    title: "Shah's Dream Home",
    location: "Vadodara",
    area: "6,800 sqft.",
    heroImage: cld(
      "Shah's Dream Home, Suramya Altis (I)-20260721",
      "Shah_s Dream Home, Suramya Altis (I)",
      "PHOTOGRAPHS",
      "LR_MKGs-10.webp"
    ),
    description:
      "Designed for generations, this home embodies the essence of togetherness, tranquility, and contemporary living. Every space is crafted to nurture relationships, celebrate everyday moments, and create a lasting sense of belonging.",
    interiorImages: [
      cld("Shah's Dream Home, Suramya Altis (I)-20260721", "Shah_s Dream Home, Suramya Altis (I)", "PHOTOGRAPHS", "LR_MKGs-11.webp"),
      cld("Shah's Dream Home, Suramya Altis (I)-20260721", "Shah_s Dream Home, Suramya Altis (I)", "PHOTOGRAPHS", "LR_MKGs-13.webp"),
      cld("Shah's Dream Home, Suramya Altis (I)-20260721", "Shah_s Dream Home, Suramya Altis (I)", "PHOTOGRAPHS", "LR_MKGs-14.webp"),
      cld("Shah's Dream Home, Suramya Altis (I)-20260721", "Shah_s Dream Home, Suramya Altis (I)", "PHOTOGRAPHS", "LR_MKGs-15.webp"),
      cld("Shah's Dream Home, Suramya Altis (I)-20260721", "Shah_s Dream Home, Suramya Altis (I)", "PHOTOGRAPHS", "LR_MKGs-16.webp"),
      cld("Shah's Dream Home, Suramya Altis (I)-20260721", "Shah_s Dream Home, Suramya Altis (I)", "PHOTOGRAPHS", "LR_MKGs-18.webp"),
      cld("Shah's Dream Home, Suramya Altis (I)-20260721", "Shah_s Dream Home, Suramya Altis (I)", "PHOTOGRAPHS", "LR_MKGs-20.webp"),
      cld("Shah's Dream Home, Suramya Altis (I)-20260721", "Shah_s Dream Home, Suramya Altis (I)", "PHOTOGRAPHS", "LR_MKGs-21.webp"),
    ],
    curations: [],
  },
  {
    slug: "colortek-bhayli",
    title: "The Surface Lab",
    location: "Vadodara",
    area: "8,000 sqft.",
    heroImage: cld(
      "Colortek, Bhayli (I)-20260721T150227Z-1-001",
      "Colortek, Bhayli (I)",
      "PHOTOGRAPHS",
      "DSC_7984.webp"
    ),
    description:
      "An industrial-commercial space transformed through thoughtful architecture. Function meets aesthetics in a design that prioritizes workflow efficiency without compromising on visual identity.",
    interiorImages: [
      cld("Colortek, Bhayli (I)-20260721T150227Z-1-001", "Colortek, Bhayli (I)", "PHOTOGRAPHS", "DSC_8011.webp"),
      cld("Colortek, Bhayli (I)-20260721T150227Z-1-001", "Colortek, Bhayli (I)", "PHOTOGRAPHS", "DSC_8012.webp"),
      cld("Colortek, Bhayli (I)-20260721T150227Z-1-001", "Colortek, Bhayli (I)", "PHOTOGRAPHS", "DSC_8018.webp"),
      cld("Colortek, Bhayli (I)-20260721T150227Z-1-001", "Colortek, Bhayli (I)", "PHOTOGRAPHS", "DSC_8044.webp"),
      cld("Colortek, Bhayli (I)-20260721T150227Z-1-001", "Colortek, Bhayli (I)", "PHOTOGRAPHS", "DSC_8063.webp"),
      cld("Colortek, Bhayli (I)-20260721T150227Z-1-001", "Colortek, Bhayli (I)", "PHOTOGRAPHS", "DSC_8070.webp"),
      cld("Colortek, Bhayli (I)-20260721T150227Z-1-001", "Colortek, Bhayli (I)", "PHOTOGRAPHS", "DSC_8083.webp"),
      cld("Colortek, Bhayli (I)-20260721T150227Z-1-001", "Colortek, Bhayli (I)", "PHOTOGRAPHS", "DSC_8088.webp"),
    ],
    curations: [],
  },
  {
    slug: "panchal-residence-sama",
    title: "The Brick Wave",
    location: "Sama, Vadodara",
    area: "3,600 sqft.",
    heroImage: cld(
      "Panchal's Residence, Sama (A+I)-20260721",
      "Panchal_s Residence, Sama (A+I)",
      "PHOTOSHOOT",
      "DSC_9340 [Desktop Resolution].webp"
    ),
    description:
      "A warm family home where every corner tells a story. Designed for multi-generational living, the residence balances privacy with togetherness through carefully planned zones and intimate gathering spaces.",
    interiorImages: [
      cld("Panchal's Residence, Sama (A+I)-20260721", "Panchal_s Residence, Sama (A+I)", "PHOTOSHOOT", "DSC_9346 [Desktop Resolution].webp"),
      cld("Panchal's Residence, Sama (A+I)-20260721", "Panchal_s Residence, Sama (A+I)", "PHOTOSHOOT", "DSC_9355 [Desktop Resolution].webp"),
      cld("Panchal's Residence, Sama (A+I)-20260721", "Panchal_s Residence, Sama (A+I)", "PHOTOSHOOT", "DSC_9359 [Desktop Resolution].webp"),
      cld("Panchal's Residence, Sama (A+I)-20260721", "Panchal_s Residence, Sama (A+I)", "PHOTOSHOOT", "DSC_9523 [Desktop Resolution].webp"),
      cld("Panchal's Residence, Sama (A+I)-20260721", "Panchal_s Residence, Sama (A+I)", "RENDERS", "B4.webp"),
    ],
    curations: [],
  },
  {
    slug: "thavrani-residence",
    title: "A Sky-high Retreat",
    location: "Hyderabad, India",
    heroImage: cld(
      "Thavrani's Residence (I)-20260721",
      "Thavrani_s Residence (I)",
      "RENDERS",
      "cats area",
      "1.webp"
    ),
    description:
      "A thoughtfully designed home that reflects the personality and lifestyle of its inhabitants. Clean lines, warm materials, and a seamless indoor-outdoor connection define this contemporary residence.",
    interiorImages: [
      cld("Thavrani's Residence (I)-20260721", "Thavrani_s Residence (I)", "RENDERS", "cats area", "2.webp"),
      cld("Thavrani's Residence (I)-20260721", "Thavrani_s Residence (I)", "RENDERS", "5. FF DAUGHTERS BEDROOM", "OP 1", "1.webp"),
      cld("Thavrani's Residence (I)-20260721", "Thavrani_s Residence (I)", "RENDERS", "5. FF DAUGHTERS BEDROOM", "OP 1", "4.webp"),
    ],
    curations: [],
  },
  {
    slug: "arpita-sidhhpura",
    title: "The Living Composition",
    location: "Vadodara",
    heroImage: cld(
      "ARPITA SIDHHPURA-20260721T150020Z-1-001",
      "ARPITA SIDHHPURA",
      "1 (10).webp"
    ),
    description:
      "A space designed with intention and elegance, where every detail serves a purpose. The interplay of light, texture, and form creates an environment that feels both luxurious and deeply comfortable.",
    interiorImages: [
      cld("ARPITA SIDHHPURA-20260721T150020Z-1-001", "ARPITA SIDHHPURA", "1 (11).webp"),
      cld("ARPITA SIDHHPURA-20260721T150020Z-1-001", "ARPITA SIDHHPURA", "1 (12).webp"),
      cld("ARPITA SIDHHPURA-20260721T150020Z-1-001", "ARPITA SIDHHPURA", "1 (14).webp"),
      cld("ARPITA SIDHHPURA-20260721T150020Z-1-001", "ARPITA SIDHHPURA", "1 (17).webp"),
      cld("ARPITA SIDHHPURA-20260721T150020Z-1-001", "ARPITA SIDHHPURA", "1 (19).webp"),
      cld("ARPITA SIDHHPURA-20260721T150020Z-1-001", "ARPITA SIDHHPURA", "1 (22).webp"),
    ],
    curations: [],
  },
  {
    slug: "cafe-lemon",
    title: "Cafe Lemon",
    location: "Hyderabad, India",
    heroImage: cld("Cafe Lemon", "image_1.webp"),
    description:
      "A warm, inviting café designed around light, texture, and the joy of gathering. Every corner is composed to make long conversations feel effortless.",
    interiorImages: [
      cld("Cafe Lemon", "image_2.webp"),
      cld("Cafe Lemon", "image_3.webp"),
      cld("Cafe Lemon", "image_4.webp"),
      cld("Cafe Lemon", "image_5.webp"),
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
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug) ?? null;
}

export function getProjectSlugs() {
  return projects.map((p) => p.slug);
}
