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
  completion?: string;
  status?: string;
  heroImage: string;
  description: string;
  interiorImages: string[];
  exteriorImages?: string[];
  curations: Curation[];
  isPlaceholder?: boolean;
}

function cld(...segments: string[]) {
  const root = segments.slice(0, -1).join("/");
  const file = segments[segments.length - 1];
  return toPublicId(`${root}/${file}`);
}

function rootFile(file: string) {
  return toPublicId(file);
}

const PLACEHOLDER_IMAGE = "floatingboxes2_wpxpwj";

export const projects: Project[] = [
// 01. Tathastu, Woods Ville (Existing)
  {
    slug: "tathastu-woods-ville",
    title: "Tathastu",
    location: "Woods Ville, Vadodara",
    completion: "2025",
    heroImage: "https://res.cloudinary.com/diqslwugu/image/upload/v1789573486/Screenshot_2026-09-16_at_9.06.45_PM_ssrxt4.png",
    description:
      "A space designed with intention and elegance, where every detail serves a purpose. The interplay of light, texture, and form creates an environment that feels both refined and deeply comfortable.",
    interiorImages: [
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789573659/Screenshot_2026-09-16_at_9.10.50_PM_amxhep.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789573629/Screenshot_2026-09-16_at_9.09.00_PM_xrncko.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789573616/Screenshot_2026-09-16_at_9.12.53_PM_rep3wi.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789573616/Screenshot_2026-09-16_at_9.12.25_PM_dwfg90.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789573614/Screenshot_2026-09-16_at_9.12.43_PM_vcaihh.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789573613/Screenshot_2026-09-16_at_9.12.32_PM_zggajn.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789573612/Screenshot_2026-09-16_at_9.11.39_PM_skua5k.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789573610/Screenshot_2026-09-16_at_9.11.49_PM_xjbmcx.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789573609/Screenshot_2026-09-16_at_9.11.29_PM_hyaaey.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789573608/Screenshot_2026-09-16_at_9.09.24_PM_ohjjvd.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789573606/Screenshot_2026-09-16_at_9.11.13_PM_aeodf9.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789573605/Screenshot_2026-09-16_at_9.10.10_PM_tull8k.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789573604/Screenshot_2026-09-16_at_9.10.59_PM_sv9elu.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789573599/Screenshot_2026-09-16_at_9.10.41_PM_dbgm0x.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789573598/Screenshot_2026-09-16_at_9.10.31_PM_lpl2lm.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789573595/Screenshot_2026-09-16_at_9.10.21_PM_uxrl8s.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789573592/Screenshot_2026-09-16_at_9.10.00_PM_aqhwxg.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789573591/Screenshot_2026-09-16_at_9.09.34_PM_eskqlj.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789573591/Screenshot_2026-09-16_at_9.08.25_PM_rojdit.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789573590/Screenshot_2026-09-16_at_9.09.17_PM_khozfd.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789573587/Screenshot_2026-09-16_at_9.08.51_PM_y8bpak.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789573587/Screenshot_2026-09-16_at_9.09.08_PM_opkdtm.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789573587/Screenshot_2026-09-16_at_9.08.42_PM_jn9hoj.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789573488/Screenshot_2026-09-16_at_9.07.48_PM_nkoo7d.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789573486/Screenshot_2026-09-16_at_9.06.45_PM_ssrxt4.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789573485/Screenshot_2026-09-16_at_9.08.07_PM_hmksre.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789573484/Screenshot_2026-09-16_at_9.05.49_PM_izrwlh.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789573482/Screenshot_2026-09-16_at_9.08.15_PM_dofkam.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789573480/Screenshot_2026-09-16_at_9.07.39_PM_jobkwj.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789573479/Screenshot_2026-09-16_at_9.07.58_PM_jr0whq.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789573478/Screenshot_2026-09-16_at_9.07.28_PM_vinehv.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789573475/Screenshot_2026-09-16_at_9.07.08_PM_fs7zsf.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789573473/Screenshot_2026-09-16_at_9.06.59_PM_rusrjq.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789573472/Screenshot_2026-09-16_at_9.07.18_PM_j2l8vw.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789573471/Screenshot_2026-09-16_at_9.06.28_PM_gtmvbi.png"
    ],
    curations: [],
    isPlaceholder: false,
  },


  // 02. The Hanging Pyramids (Existing)
  {
    slug: "our-project-p2",
    title: "The Hanging Pyramids",
    location: "Woods Ville, Vadodara",
    completion: "2025",
    heroImage: "https://res.cloudinary.com/diqslwugu/image/upload/v1789625811/Screenshot_2026-09-17_at_11.37.35_AM_dx8obn.png",
    description:
      "A space designed with intention and elegance, where every detail serves a purpose. The interplay of light, texture, and form creates an environment that feels both refined and deeply comfortable.",
    interiorImages: [
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789625819/Screenshot_2026-09-17_at_11.38.06_AM_bwjiai.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789625817/Screenshot_2026-09-17_at_11.43.38_AM_r69zry.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789625811/Screenshot_2026-09-17_at_11.37.35_AM_dx8obn.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789625808/Screenshot_2026-09-17_at_11.43.54_AM_absvza.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789625805/Screenshot_2026-09-17_at_11.44.25_AM_honfma.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789625803/Screenshot_2026-09-17_at_11.44.17_AM_lggkmp.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789625801/Screenshot_2026-09-17_at_11.43.46_AM_llyuv9.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789625797/Screenshot_2026-09-17_at_11.44.10_AM_zmhjii.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789625795/Screenshot_2026-09-17_at_11.43.20_AM_b9pzae.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789625792/Screenshot_2026-09-17_at_11.42.53_AM_txpzfr.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789625790/Screenshot_2026-09-17_at_11.42.45_AM_pkffeo.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789625788/Screenshot_2026-09-17_at_11.41.58_AM_ro7php.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789625785/Screenshot_2026-09-17_at_11.41.50_AM_wpsusy.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789625782/Screenshot_2026-09-17_at_11.41.42_AM_e2pcn1.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789625779/Screenshot_2026-09-17_at_11.41.32_AM_znzume.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789625778/Screenshot_2026-09-17_at_11.42.37_AM_hses3p.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789625774/Screenshot_2026-09-17_at_11.39.02_AM_mwe0xq.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789625774/Screenshot_2026-09-17_at_11.40.01_AM_cttxwf.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789625774/Screenshot_2026-09-17_at_11.39.02_AM_mwe0xq.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789625774/Screenshot_2026-09-17_at_11.40.01_AM_cttxwf.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789625771/Screenshot_2026-09-17_at_11.39.20_AM_akf5w7.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789625770/Screenshot_2026-09-17_at_11.39.28_AM_kpetfe.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789625768/Screenshot_2026-09-17_at_11.38.45_AM_cszabf.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789625767/Screenshot_2026-09-17_at_11.38.53_AM_b6rxrk.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789625758/Screenshot_2026-09-17_at_11.38.38_AM_ijawzl.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789625758/Screenshot_2026-09-17_at_11.38.13_AM_lqnech.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789625755/Screenshot_2026-09-17_at_11.37.49_AM_uilvtt.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789625750/Screenshot_2026-09-17_at_11.43.11_AM_wjh1ya.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789625749/Screenshot_2026-09-17_at_11.44.02_AM_kuqwmq.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789625743/Screenshot_2026-09-17_at_11.43.02_AM_ybv8q4.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789625740/Screenshot_2026-09-17_at_11.42.14_AM_vsvvha.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789625738/Screenshot_2026-09-17_at_11.42.29_AM_nw8me2.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789625735/Screenshot_2026-09-17_at_11.42.06_AM_xxjuq3.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789625733/Screenshot_2026-09-17_at_11.39.35_AM_soxogk.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789625730/Screenshot_2026-09-17_at_11.41.15_AM_xn0ulg.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789625727/Screenshot_2026-09-17_at_11.41.22_AM_cgqrx8.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789625725/Screenshot_2026-09-17_at_11.40.09_AM_msvemi.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789625722/Screenshot_2026-09-17_at_11.41.06_AM_rgf2d8.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789625719/Screenshot_2026-09-17_at_11.40.51_AM_btxo3p.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789625717/Screenshot_2026-09-17_at_11.39.53_AM_o2hznt.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789625714/Screenshot_2026-09-17_at_11.40.58_AM_nanwmd.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789625711/Screenshot_2026-09-17_at_11.40.30_AM_ywusxx.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789625711/Screenshot_2026-09-17_at_11.40.37_AM_myj0vr.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789625706/Screenshot_2026-09-17_at_11.40.22_AM_qd9lpb.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789625704/Screenshot_2026-09-17_at_11.39.45_AM_bmuiht.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789625703/Screenshot_2026-09-17_at_11.37.26_AM_o6dwhm.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789625698/Screenshot_2026-09-17_at_11.37.42_AM_u64u81.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789625695/Screenshot_2026-09-17_at_11.38.29_AM_z75wtc.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789625693/Screenshot_2026-09-17_at_11.39.11_AM_dhhyi2.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789625690/Screenshot_2026-09-17_at_11.37.57_AM_bcziu2.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789625689/Screenshot_2026-09-17_at_11.38.20_AM_ux93dc.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789625688/Screenshot_2026-09-17_at_11.43.28_AM_kut8ov.png"
    ],
    curations: [],
    isPlaceholder: false,
  },


  // 03. Cafe Lemon (Existing)
  {
    slug: "cafe-lemon",
    title: "Cafe Lemon",
    location: "Khanpur, Vadodara",
    completion: "2025",
    heroImage: "https://res.cloudinary.com/diqslwugu/image/upload/v1789575216/IMG_4864_uynrvi.png",
    description:
      "A commercial hospitality space crafted with intention and character. Every detail—from the material palette to the ambient illumination—is designed to create an inviting, memorable environment.",
    interiorImages: [
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789575218/IMG_4886_yeudch.jpg",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789575218/IMG_4885_okaxw9.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789575217/IMG_4884_ropwtf.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789575217/IMG_4871_dfpvtd.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789575217/IMG_4872_xmrcti.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789575217/IMG_4882_pqwa0y.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789575217/IMG_4881_jaazyh.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789575217/IMG_4866_oq4l3m.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789575216/IMG_4864_uynrvi.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789575216/IMG_4865_hmmx0p.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789575215/IMG_4859_lhrzzv.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789575215/IMG_4880_f9xjh7.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789575215/IMG_4857_ysuumg.png"
    ],
    curations: [],
    isPlaceholder: false,
  },


  // 04. The Cottage House
  {
    slug: "cottage-house",
    title: "The Cottage House",
    location: "",
    completion: "2025",
    status: "Completed",
    heroImage: "https://res.cloudinary.com/diqslwugu/image/upload/v1789576016/Screenshot_2026-09-16_at_9.55.00_PM_h0jjsn.png",
    description:
      "A space designed with intention and elegance, where every detail serves a purpose. The interplay of light, texture, and form creates an environment that feels both refined and deeply comfortable.",
    interiorImages: [
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789576018/Screenshot_2026-09-16_at_9.52.55_PM_cppq3b.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789576016/Screenshot_2026-09-16_at_9.55.00_PM_h0jjsn.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789576014/Screenshot_2026-09-16_at_9.53.42_PM_kdwhaa.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789576013/Screenshot_2026-09-16_at_9.54.47_PM_e8hiwo.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789576011/Screenshot_2026-09-16_at_9.54.16_PM_y84apl.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789576010/Screenshot_2026-09-16_at_9.54.08_PM_rbcohl.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789576010/Screenshot_2026-09-16_at_9.54.34_PM_xmmtii.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789576007/Screenshot_2026-09-16_at_9.54.27_PM_mjz3uy.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789576006/Screenshot_2026-09-16_at_9.53.55_PM_xcjkuj.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789576005/Screenshot_2026-09-16_at_9.53.22_PM_stvrqw.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789576005/Screenshot_2026-09-16_at_9.53.03_PM_otxk9t.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789576005/Screenshot_2026-09-16_at_9.53.12_PM_p00gha.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789576004/Screenshot_2026-09-16_at_9.52.42_PM_ptsoya.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789576003/Screenshot_2026-09-16_at_9.53.28_PM_q2coct.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789576001/Screenshot_2026-09-16_at_9.52.35_PM_pryp8o.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789576000/Screenshot_2026-09-16_at_9.52.28_PM_t3rdmy.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789576000/Screenshot_2026-09-16_at_9.52.20_PM_qyru0e.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789575999/Screenshot_2026-09-16_at_9.52.09_PM_kak4ft.png"
    ],
    curations: [],
    isPlaceholder: false,
  },


  // 05. Villa Hacienda (Existing)
  {
    slug: "our-project-p3",
    title: "Villa Hacienda",
    location: "Sherkhi, Vadodara",
    completion: "2022",
    heroImage: "https://res.cloudinary.com/diqslwugu/image/upload/v1789582804/Screenshot_2026-09-16_at_11.12.33_PM_rbovmg.png",
    description:
      "A space designed with intention and elegance, where every detail serves a purpose. The interplay of light, texture, and form creates an environment that feels both refined and deeply comfortable.",
    interiorImages: [
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789582808/Screenshot_2026-09-16_at_11.13.27_PM_aknocs.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789582806/Screenshot_2026-09-16_at_11.13.19_PM_tvr7qi.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789582806/Screenshot_2026-09-16_at_11.13.04_PM_f2gzqm.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789582804/Screenshot_2026-09-16_at_11.12.33_PM_rbovmg.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789582802/Screenshot_2026-09-16_at_11.12.24_PM_uc1ldq.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789582809/Screenshot_2026-09-16_at_11.13.35_PM_hf5dxx.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789582812/Screenshot_2026-09-16_at_11.13.42_PM_vfa97g.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789582814/Screenshot_2026-09-16_at_11.13.50_PM_rzd2qw.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789582814/Screenshot_2026-09-16_at_11.13.57_PM_a9hmsn.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789582816/Screenshot_2026-09-16_at_11.14.05_PM_norq29.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789582817/Screenshot_2026-09-16_at_11.12.56_PM_ojqt1j.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789582817/Screenshot_2026-09-16_at_11.13.12_PM_sxhpjb.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789582820/Screenshot_2026-09-16_at_11.14.12_PM_vud473.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789582822/Screenshot_2026-09-16_at_11.14.25_PM_v01qea.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789582823/Screenshot_2026-09-16_at_11.12.42_PM_yn0g4c.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789582827/Screenshot_2026-09-16_at_11.12.49_PM_jwlbzr.png"
    ],
    curations: [],
    isPlaceholder: false,
  },


  // 06. Resort Halol
  {
    slug: "resort-halol",
    title: "Resort Halol",
    location: "Halol, Gujarat",
    heroImage: "https://res.cloudinary.com/diqslwugu/image/upload/v1789580029/IMG_3868_hsyi5l.png",
    description: "",
    interiorImages: [
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789580029/IMG_3868_hsyi5l.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789580031/IMG_3873_pas5lo.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789580034/IMG_3875_qkjj5i.png",
    ],
    curations: [],
    isPlaceholder: false,
  },


  // 07. Saanidhya Greens
  {
    slug: "saanidhya-greens",
    title: "Saanidhya Greens",
    location: "Hansapura, Vadodara",
    heroImage: "https://res.cloudinary.com/diqslwugu/image/upload/v1789580216/Screenshot_2026-09-16_at_11.06.51_PM_gepror.png",
    description: "",
    interiorImages: [
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789580216/Screenshot_2026-09-16_at_11.06.51_PM_gepror.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789580236/Screenshot_2026-09-16_at_11.07.12_PM_x5ujry.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789580228/Screenshot_2026-09-16_at_11.07.02_PM_m4qd47.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789580216/Screenshot_2026-09-16_at_11.06.51_PM_gepror.png",
    ],
    curations: [],
    isPlaceholder: false,
  },

  {
    slug: "sama-residence",
    title: "Shah's Residence",
    location: "Sama, Vadodara",
    heroImage: "https://res.cloudinary.com/diqslwugu/image/upload/v1789583519/Screenshot_2026-09-16_at_11.59.57_PM_lnoje5.png",
    description:
      "A space designed with intention and elegance, where every detail serves a purpose. The interplay of light, texture, and form creates an environment that feels both refined and deeply comfortable.",
    interiorImages: [
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789583526/Screenshot_2026-09-16_at_11.59.08_PM_nxakyf.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789583525/Screenshot_2026-09-16_at_11.59.43_PM_nfhbxz.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789583521/Screenshot_2026-09-16_at_11.59.22_PM_za2hzz.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789583522/Screenshot_2026-09-16_at_11.59.02_PM_xrmf5o.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789583519/Screenshot_2026-09-16_at_11.59.57_PM_lnoje5.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789583516/Screenshot_2026-09-16_at_11.58.55_PM_qhkdei.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789583516/Screenshot_2026-09-16_at_11.59.38_PM_mbjoxh.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789583515/Screenshot_2026-09-16_at_11.58.19_PM_dsptik.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789583513/Screenshot_2026-09-16_at_11.59.14_PM_nqbnof.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789583512/Screenshot_2026-09-16_at_11.58.26_PM_mwhqrd.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789583506/Screenshot_2026-09-16_at_11.58.49_PM_rvbn6z.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789583506/Screenshot_2026-09-16_at_11.58.40_PM_k8shji.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789583505/Screenshot_2026-09-16_at_11.57.59_PM_rwgbxh.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789583503/Screenshot_2026-09-16_at_11.58.09_PM_xr6ft9.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789583501/Screenshot_2026-09-16_at_11.58.32_PM_jvodus.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789583497/Screenshot_2026-09-17_at_12.00.18_AM_mqbtad.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789583479/Screenshot_2026-09-17_at_12.00.04_AM_l7aax0.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789583479/Screenshot_2026-09-17_at_12.00.12_AM_vicyws.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789623062/Screenshot_2026-09-17_at_11.00.46_AM_lnzzhv.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789623073/Screenshot_2026-09-17_at_11.00.59_AM_x3hixd.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789623076/Screenshot_2026-09-17_at_11.01.11_AM_tppjzw.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789623100/Screenshot_2026-09-17_at_11.01.28_AM_cb8nxl.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789623103/Screenshot_2026-09-17_at_11.01.38_AM_auqch3.png"
    ],
    curations: [],
    isPlaceholder: false,
  },


  // 09. Shah's Dream Home
  {
    slug: "shahs-dream-home",
    title: "Shah's Dream Home",
    location: "Suramya Altis, Vadodara",
    heroImage: "https://res.cloudinary.com/diqslwugu/image/upload/v1789584027/LR_MKGs-55_yhmmpt.jpg",
    description: "",
    interiorImages: [
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789584080/LR_MKGs-78_ilizf6.jpg",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789584079/LR_MKGs-77_z8fpg1.jpg",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789584078/LR_MKGs-76_m4mx0g.jpg",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789584077/LR_MKGs-75_dy2cit.jpg",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789584076/LR_MKGs-74_des3px.jpg",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789584075/LR_MKGs-73_anqazb.jpg",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789584070/LR_MKGs-69_zgzhyw.jpg",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789584069/LR_MKGs-68_b2aiqh.jpg",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789584068/LR_MKGs-67_xbnw2t.jpg",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789584034/LR_MKGs-62_woegmu.jpg",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789584033/LR_MKGs-61_zflg5i.jpg",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789584032/LR_MKGs-60_xbpwls.jpg",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789584028/LR_MKGs-56_belq3y.jpg",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789584027/LR_MKGs-55_yhmmpt.jpg",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789584025/LR_MKGs-53_fazfxy.jpg",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789584035/LR_MKGs-63_sh7wrj.jpg",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789584031/LR_MKGs-59_w30xsw.jpg",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789584067/LR_MKGs-66_ckvdpk.jpg",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789584036/LR_MKGs-64_f4zxjn.jpg",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789584066/LR_MKGs-65_ktcuhc.jpg",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789584022/LR_MKGs-50_pfxb9r.jpg",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789584019/LR_MKGs-46_vwo6rh.jpg",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789584020/LR_MKGs-47_e7dfzg.jpg",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789584023/LR_MKGs-51_qszacq.jpg",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789584014/LR_MKGs-41_wpifym.jpg",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789584012/LR_MKGs-39_dsviva.jpg",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789584011/LR_MKGs-38_zwsekq.jpg",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789584010/LR_MKGs-37_zbt3bo.jpg",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789584009/LR_MKGs-36_gpznrq.jpg",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789584004/LR_MKGs-31_di8poq.jpg",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789584005/LR_MKGs-32_laqnrd.jpg",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789584007/LR_MKGs-34_xuge8h.jpg",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789584006/LR_MKGs-33_lgoqmx.jpg",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789584024/LR_MKGs-52_v3n0iz.jpg",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789584017/LR_MKGs-44_dhatl4.jpg",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789584015/LR_MKGs-42_bohugg.jpg",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789584016/LR_MKGs-43_ed3zgq.jpg",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789584003/LR_MKGs-30_bjnv6i.jpg",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789584001/LR_MKGs-28_k0kmb3.jpg",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789584000/LR_MKGs-27_lpwts6.jpg",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789583998/LR_MKGs-25_mbegda.jpg",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789583997/LR_MKGs-24_h72azu.jpg",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789583995/LR_MKGs-22_tfsxqy.jpg",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789583994/LR_MKGs-21_ma1mm1.jpg",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789583993/LR_MKGs-20_juz33t.jpg",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789583980/LR_MKGs-17_nkkqkj.jpg",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789583976/LR_MKGs-14_aru8q6.jpg",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789583978/LR_MKGs-16_tngjsr.jpg",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789583974/LR_MKGs-10_jkbizj.jpg",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789583973/LR_MKGs-9_optbaq.jpg",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789583972/LR_MKGs-8_ourwn0.jpg",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789583972/LR_MKGs-7_xopwfh.jpg",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789583971/LR_MKGs-6_ir1rd7.jpg",
    ],
    curations: [],
    isPlaceholder: false,
  },


  // 10. Bhoiwala's Residence
  {
    slug: "bhoiwala",
    title: "Bhoiwala's Residence",
    location: "",
    heroImage: "https://res.cloudinary.com/diqslwugu/image/upload/v1789622698/Screenshot_2026-09-17_at_10.54.48_AM_vxzwzr.png",
    description: "",
    interiorImages: [
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789622698/Screenshot_2026-09-17_at_10.54.48_AM_vxzwzr.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789622701/Screenshot_2026-09-17_at_10.54.55_AM_jsxpyc.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789622708/Screenshot_2026-09-17_at_10.55.02_AM_y8uar1.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789622714/Screenshot_2026-09-17_at_10.55.09_AM_tvtbxu.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789622720/Screenshot_2026-09-17_at_10.55.16_AM_bpykey.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789622727/Screenshot_2026-09-17_at_10.55.22_AM_lwf5yw.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789622733/Screenshot_2026-09-17_at_10.55.29_AM_dpxg5k.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789624484/Screenshot_2026-09-17_at_11.24.36_AM_t23ofr.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789624487/Screenshot_2026-09-17_at_11.24.43_AM_ajng20.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789624493/Screenshot_2026-09-17_at_11.24.49_AM_gpevms.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789624499/Screenshot_2026-09-17_at_11.24.55_AM_qhbctr.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789624505/Screenshot_2026-09-17_at_11.25.01_AM_gcxahj.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789624511/Screenshot_2026-09-17_at_11.25.07_AM_nipbvf.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789624517/Screenshot_2026-09-17_at_11.25.13_AM_y3pce8.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789624525/Screenshot_2026-09-17_at_11.25.19_AM_whaszq.png"
    ],
    curations: [],
    isPlaceholder: false,
  },


  // 19. The Grid Residence
  {
    slug: "the-grid-residence",
    title: "The Grid Residence",
    location: "Vadodara",
    status: "Ongoing",
    heroImage: "https://res.cloudinary.com/wkqz5bnk/image/upload/c_limit,w_3840/f_auto/q_auto/v1/unknown/10a20530-5bea-4898-b7be-a5a093f59533?_a=BAVT+ODY0",
    description: "",
    interiorImages: [
      "https://res.cloudinary.com/wkqz5bnk/image/upload/c_limit,w_3840/f_auto/q_auto/v1/unknown/10a20530-5bea-4898-b7be-a5a093f59533?_a=BAVT+ODY0",
      "https://res.cloudinary.com/wkqz5bnk/image/upload/c_limit,w_1920/f_auto/q_auto/v1/unknown/12dafd73-05c5-4c2b-84af-db7e7b1e3f30?_a=BAVT+ODY0",
      "https://res.cloudinary.com/wkqz5bnk/image/upload/c_limit,w_1920/f_auto/q_auto/v1/unknown/534a5811-c20b-4863-ae99-c1a0151f1a14?_a=BAVT+ODY0",
      "https://res.cloudinary.com/wkqz5bnk/image/upload/c_limit,w_1920/f_auto/q_auto/v1/unknown/6cfd58ea-c2e5-4593-a36b-edc0ad0b2a4f?_a=BAVT+ODY0",
      "https://res.cloudinary.com/wkqz5bnk/image/upload/c_limit,w_1920/f_auto/q_auto/v1/unknown/911d2000-05d9-4c5b-b2d0-8686dae670e1?_a=BAVT+ODY0"
    ],
    curations: [],
    isPlaceholder: false,
  },


  // 11. Anhaya Store (Existing)
  {
    slug: "anhaya-store-kolhapur",
    title: "Anhaya Store",
    location: "Kolhapur",
    completion: "2022",
    heroImage: "https://res.cloudinary.com/diqslwugu/image/upload/v1789618942/Screenshot_2026-09-17_at_9.49.10_AM_cucywh.png",
    description:
      "A retail space designed to immerse visitors in a world of curated experiences. Every detail—from the material palette to the lighting—has been crafted to elevate the shopping journey into something memorable.",
    interiorImages: [
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789618942/Screenshot_2026-09-17_at_9.49.10_AM_cucywh.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789618942/Screenshot_2026-09-17_at_9.49.30_AM_dhkcq0.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789618943/Screenshot_2026-09-17_at_9.48.06_AM_dlu76m.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789618936/Screenshot_2026-09-17_at_9.47.40_AM_jlcpjr.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789618936/Screenshot_2026-09-17_at_9.47.00_AM_eycfb0.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789618933/Screenshot_2026-09-17_at_9.49.19_AM_xbagls.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789618932/Screenshot_2026-09-17_at_9.47.56_AM_thzct9.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789618932/Screenshot_2026-09-17_at_9.48.15_AM_ow7pxl.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789618927/Screenshot_2026-09-17_at_9.49.39_AM_sm2v1s.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789618925/Screenshot_2026-09-17_at_9.48.33_AM_cnoexy.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789618927/Screenshot_2026-09-17_at_9.49.00_AM_vglejk.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789618924/Screenshot_2026-09-17_at_9.48.43_AM_tu2nm6.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789618923/Screenshot_2026-09-17_at_9.49.55_AM_dt5rp2.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789618919/Screenshot_2026-09-17_at_9.49.47_AM_gtmi0j.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789618910/Screenshot_2026-09-17_at_9.48.51_AM_nuh5se.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789618900/11_xlvrjn.jpg",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789618898/9_rfwqyq.jpg",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789618898/15_kptodj.jpg",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789618893/2B_jszyt7.jpg",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789618889/10_iybtmy.jpg",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789618577/2_ua8oys.jpg",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789618581/2B_bwojnf.jpg",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789618835/5_rkrgoi.jpg",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789618880/6_lt5ale.jpg",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789618883/5_z7tncl.jpg",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789618886/18_ca2fdn.jpg",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789618888/G_xzs1qd.jpg",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789618891/2_oeno9v.jpg"
    ],
    curations: [],
    isPlaceholder: false,
  },


  // 12. The Walnut Residence (Existing)
  {
    slug: "ankur-bhai",
    title: "The Walnut Residence",
    location: "Vadodara",
    heroImage: "https://res.cloudinary.com/diqslwugu/image/upload/v1789624646/Screenshot_2026-09-17_at_11.27.21_AM_pprsnf.png",
    description:
      "Rooted in the idea of openness, the residence dissolves boundaries between spaces through flowing forms, natural illumination, and carefully framed moments of connection. Warm minimalism, layered textures, and an abundance of daylight create a home that feels both serene and vibrant.",
    interiorImages: [
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789624646/Screenshot_2026-09-17_at_11.27.21_AM_pprsnf.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789624653/Screenshot_2026-09-17_at_11.27.28_AM_ybqntk.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789624661/Screenshot_2026-09-17_at_11.27.36_AM_mdzy1t.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789624668/Screenshot_2026-09-17_at_11.27.44_AM_yl0cm3.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789624675/Screenshot_2026-09-17_at_11.27.51_AM_j4m9qw.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789624699/Screenshot_2026-09-17_at_11.28.14_AM_or9jvz.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789624712/Screenshot_2026-09-17_at_11.28.28_AM_m0ru4h.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789624728/Screenshot_2026-09-17_at_11.28.43_AM_tms71n.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789624744/Screenshot_2026-09-17_at_11.28.59_AM_izyev1.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789624757/Screenshot_2026-09-17_at_11.29.12_AM_hwi9nl.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789624768/Screenshot_2026-09-17_at_11.29.24_AM_l11k4l.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789624781/Screenshot_2026-09-17_at_11.29.36_AM_wbs3ax.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789624794/Screenshot_2026-09-17_at_11.29.49_AM_fwcduy.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789624806/Screenshot_2026-09-17_at_11.29.58_AM_g8pndv.png"
    ],
    curations: [],
    isPlaceholder: false,
  },


  // 13. The Floating Boxes (Existing)
  {
    slug: "our-project-p1",
    title: "The Floating Boxes",
    location: "Vemali, Vadodara",
    completion: "2020",
    status: "Completed",
    heroImage: "https://res.cloudinary.com/diqslwugu/image/upload/v1789577267/Screenshot_2026-09-16_at_10.09.52_PM_yq2hkn.png",
    description:
      "A space designed with intention and elegance, where every detail serves a purpose. The interplay of light, texture, and form creates an environment that feels both refined and deeply comfortable.",
    interiorImages: [
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789577253/Screenshot_2026-09-16_at_10.10.25_PM_gpczk7.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789577256/Screenshot_2026-09-16_at_10.09.59_PM_uxythm.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789577256/Screenshot_2026-09-16_at_10.10.15_PM_ossi7f.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789577259/Screenshot_2026-09-16_at_10.09.45_PM_y82d6v.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789577257/Screenshot_2026-09-16_at_10.10.07_PM_oylx3k.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789577262/Screenshot_2026-09-16_at_10.10.36_PM_qdxwug.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789577264/Screenshot_2026-09-16_at_10.11.29_PM_jesopu.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789577264/Screenshot_2026-09-16_at_10.10.45_PM_v9h0we.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789577265/Screenshot_2026-09-16_at_10.10.54_PM_b0uozp.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789577266/Screenshot_2026-09-16_at_10.12.51_PM_gjutg4.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789577267/Screenshot_2026-09-16_at_10.12.44_PM_t5ilbv.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789577267/Screenshot_2026-09-16_at_10.09.52_PM_yq2hkn.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789577270/Screenshot_2026-09-16_at_10.13.16_PM_inws1j.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789577271/Screenshot_2026-09-16_at_10.13.06_PM_vr720v.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789577272/Screenshot_2026-09-16_at_10.13.32_PM_oqk5ms.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789577272/Screenshot_2026-09-16_at_10.12.58_PM_ms1hxf.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789577276/Screenshot_2026-09-16_at_10.13.24_PM_mftoba.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789577276/Screenshot_2026-09-16_at_10.14.16_PM_msjnq5.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789577281/Screenshot_2026-09-16_at_10.13.56_PM_jjwdkc.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789577279/Screenshot_2026-09-16_at_10.14.23_PM_ki3xtz.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789577285/Screenshot_2026-09-16_at_10.13.39_PM_asbm1o.png"
    ],
    curations: [],
    isPlaceholder: false,
  },


  // 14. Ishaanti
  {
    slug: "ishaanti",
    title: "Ishaanti Group",
    location: "Harni, Vadodara",
    status: "Ongoing",
    heroImage: "https://res.cloudinary.com/diqslwugu/image/upload/v1789620513/Screenshot_2026-09-17_at_10.18.21_AM_n9s0jm.png",
    description: "",
    interiorImages: [
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789620513/Screenshot_2026-09-17_at_10.18.21_AM_n9s0jm.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789620527/Screenshot_2026-09-17_at_10.18.41_AM_nvfdbb.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789620534/Screenshot_2026-09-17_at_10.18.48_AM_c1jxif.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789620540/Screenshot_2026-09-17_at_10.18.56_AM_ymxaix.png"
    ],
    curations: [],
    isPlaceholder: false,
  },


  // 15. The Courtyard Estate (Existing)
  {
    slug: "kolhapur",
    title: "The Courtyard Estate",
    location: "Kolhapur",
    status: "Ongoing",
    heroImage: "https://res.cloudinary.com/wkqz5bnk/image/upload/c_limit,w_1920/f_auto/q_auto/v1/kolhapur/50ff5272-b0b8-4412-bf31-5a461466cedd?_a=BAVT+ODY0",
    description:
      "A space designed with intention and elegance, where every detail serves a purpose. The interplay of light, texture, and form creates an environment that feels both refined and deeply comfortable.",
    interiorImages: [
      "https://res.cloudinary.com/wkqz5bnk/image/upload/c_limit,w_1920/f_auto/q_auto/v1/kolhapur/50ff5272-b0b8-4412-bf31-5a461466cedd?_a=BAVT+ODY0",
      "https://res.cloudinary.com/wkqz5bnk/image/upload/c_limit,w_1920/f_auto/q_auto/v1/kolhapur/5e25c365-fb4d-4063-a64d-a2340cf0295b?_a=BAVT+ODY0",
      "https://res.cloudinary.com/wkqz5bnk/image/upload/c_limit,w_1920/f_auto/q_auto/v1/kolhapur/b2055604-9676-466a-a033-81e2d51516a7?_a=BAVT+ODY0"
    ],
    curations: [],
    isPlaceholder: false,
  },


  // 16. The Ivory House (Existing)
  {
    slug: "birens-villa",
    title: "The Ivory House",
    location: "Vadodara",
    heroImage: "https://res.cloudinary.com/wkqz5bnk/image/upload/c_limit,w_3840/f_auto/q_auto/v1/biren-s-villa/image-2?_a=BAVT+ODY0",
    description:
      "A distinctive residence shaped around light, scale, and the rhythm of everyday living. Generous volumes and carefully curated textures come together to create a home that feels both grounded and effortlessly elegant.",
    interiorImages: [
      "https://res.cloudinary.com/wkqz5bnk/image/upload/c_limit,w_1920/f_auto/q_auto/v1/biren-s-villa/image-2?_a=BAVT+ODY0",
      "https://res.cloudinary.com/wkqz5bnk/image/upload/c_limit,w_1920/f_auto/q_auto/v1/biren-s-villa/image-3?_a=BAVT+ODY0",
      "https://res.cloudinary.com/wkqz5bnk/image/upload/c_limit,w_1920/f_auto/q_auto/v1/biren-s-villa/image-4?_a=BAVT+ODY0",
      "https://res.cloudinary.com/wkqz5bnk/image/upload/c_limit,w_1920/f_auto/q_auto/v1/biren-s-villa/image-5?_a=BAVT+ODY0",
      "https://res.cloudinary.com/wkqz5bnk/image/upload/c_limit,w_1920/f_auto/q_auto/v1/biren-s-villa/image-6?_a=BAVT+ODY0",
      "https://res.cloudinary.com/wkqz5bnk/image/upload/c_limit,w_1920/f_auto/q_auto/v1/biren-s-villa/image-7?_a=BAVT+ODY0"
    ],
    curations: [],
    isPlaceholder: false,
  },


  // 17. The Skyhigh Retreat (Existing)
  {
    slug: "our-project-p4",
    title: "The Skyhigh Retreat",
    location: "Vadodara",
    heroImage: "https://res.cloudinary.com/diqslwugu/image/upload/v1789621861/Screenshot_2026-09-17_at_10.38.17_AM_bdhyzn.png",
    description:
      "A space designed with intention and elegance, where every detail serves a purpose. The interplay of light, texture, and form creates an environment that feels both refined and deeply comfortable.",
    interiorImages: [
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789621508/SRA_6247-Edit_pxf1e4.jpg",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789621510/SRA_6226-Edit_wgmhmy.jpg",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789621516/SRA_6297-Edit_mfwaxe.jpg",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789621518/SRA_6468-Edit_o7fsmm.jpg",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789621520/SRA_6886-Edit_hidwva.jpg",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789621527/SRA_6614-Edit_ncnvr6.jpg",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789621528/SRA_6830-Edit_p8mpm0.jpg",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789621529/SRA_6177-Edit_suflyx.jpg",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789621530/SRA_6579-Edit_nhthzw.jpg",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789621533/SRA_6386-Edit_fry4ov.jpg",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789621838/Screenshot_2026-09-17_at_10.35.59_AM_gpexvp.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789621539/SRA_6482-Edit_hya99f.jpg",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789621838/Screenshot_2026-09-17_at_10.35.52_AM_d5rgfd.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789621839/Screenshot_2026-09-17_at_10.36.25_AM_oiiv8l.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789621839/Screenshot_2026-09-17_at_10.37.16_AM_pvbxvh.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789621840/Screenshot_2026-09-17_at_10.36.33_AM_mlyeen.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789621842/Screenshot_2026-09-17_at_10.37.45_AM_yslqgs.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789621843/Screenshot_2026-09-17_at_10.37.52_AM_dfzmxo.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789621844/Screenshot_2026-09-17_at_10.38.08_AM_bmk3mm.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789621845/Screenshot_2026-09-17_at_10.37.36_AM_ksasd3.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789621845/Screenshot_2026-09-17_at_10.38.52_AM_jemyij.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789621847/Screenshot_2026-09-17_at_10.39.08_AM_oeidf8.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789621846/Screenshot_2026-09-17_at_10.38.59_AM_tcgmmb.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789621848/Screenshot_2026-09-17_at_10.40.04_AM_vd0xnf.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789621850/Screenshot_2026-09-17_at_10.40.11_AM_icx0os.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789621851/Screenshot_2026-09-17_at_10.35.45_AM_gvznna.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789621852/Screenshot_2026-09-17_at_10.35.38_AM_vnhyiv.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789621853/Screenshot_2026-09-17_at_10.36.10_AM_pr2huh.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789621857/Screenshot_2026-09-17_at_10.37.00_AM_nz96rj.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789621859/Screenshot_2026-09-17_at_10.36.47_AM_hqbf8i.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789621861/Screenshot_2026-09-17_at_10.38.17_AM_bdhyzn.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789621863/Screenshot_2026-09-17_at_10.38.36_AM_nbgsj1.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789621863/Screenshot_2026-09-17_at_10.38.01_AM_pteyil.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789621869/Screenshot_2026-09-17_at_10.36.54_AM_vcrqzk.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789621870/Screenshot_2026-09-17_at_10.38.45_AM_lhnmxy.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789621870/Screenshot_2026-09-17_at_10.39.17_AM_o782yb.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789621871/Screenshot_2026-09-17_at_10.36.40_AM_vhbyvt.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789621873/Screenshot_2026-09-17_at_10.37.08_AM_x3mies.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789621875/Screenshot_2026-09-17_at_10.39.28_AM_iwvetx.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789621875/Screenshot_2026-09-17_at_10.39.46_AM_ppvyht.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789621875/Screenshot_2026-09-17_at_10.39.54_AM_w4sssy.png"
    ],
    curations: [],
    isPlaceholder: false,
  },


  // 18. Tapas
  {
    slug: "tapas",
    title: "Tapas",
    location: "Vadodara",
    status: "Ongoing",
    heroImage: "https://res.cloudinary.com/diqslwugu/image/upload/v1789619680/Screenshot_2026-09-17_at_10.04.29_AM_kh6oir.png",
    description: "",
    interiorImages: [
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789619680/Screenshot_2026-09-17_at_10.04.29_AM_kh6oir.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789619701/Screenshot_2026-09-17_at_10.04.57_AM_mrkz4i.png",
      "https://res.cloudinary.com/diqslwugu/image/upload/v1789619695/Screenshot_2026-09-17_at_10.04.48_AM_tt3nqv.png"
    ],
    curations: [],
    isPlaceholder: false,
  }
];

export function getProjectBySlug(slug: string) {
  const project = projects.find((p) => p.slug === slug);
  if (!project || project.isPlaceholder) return null;
  return project;
}

export function getProjectSlugs() {
  return projects.filter((p) => !p.isPlaceholder).map((p) => p.slug);
}
