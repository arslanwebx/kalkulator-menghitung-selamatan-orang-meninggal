import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://kalkulatorselamatanorangmeninggal.pro/",
      changeFrequency: "monthly",
      priority: 1,
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
