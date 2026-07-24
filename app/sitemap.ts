import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://kalkulatorselamatanorangmeninggal.pro/",
      changeFrequency: "monthly",
      priority: 1,
      images: [
        "https://kalkulatorselamatanorangmeninggal.pro/images/tabel-hitungan-orang-meninggal.webp",
      ],
    },
    {
      url: "https://kalkulatorselamatanorangmeninggal.pro/tentang-kami/",
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: "https://kalkulatorselamatanorangmeninggal.pro/hubungi-kami/",
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: "https://kalkulatorselamatanorangmeninggal.pro/peta-situs/",
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://kalkulatorselamatanorangmeninggal.pro/penulis/rizky-pratama/",
      changeFrequency: "monthly",
      priority: 0.6,
      images: [
        "https://kalkulatorselamatanorangmeninggal.pro/images/rizky-pratama.webp",
      ],
    },
    {
      url: "https://kalkulatorselamatanorangmeninggal.pro/kebijakan-privasi/",
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://kalkulatorselamatanorangmeninggal.pro/kebijakan-cookie/",
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://kalkulatorselamatanorangmeninggal.pro/kebijakan-editorial/",
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://kalkulatorselamatanorangmeninggal.pro/syarat-dan-ketentuan/",
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://kalkulatorselamatanorangmeninggal.pro/penafian/",
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
