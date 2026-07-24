import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kalkulator Menghitung Selamatan Orang Meninggal",
    short_name: "Kalkulator Selamatan",
    description:
      "Hitung jadwal selamatan dari tanggal wafat, lengkap dengan hari dan Pasaran Jawa.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f3e9",
    theme_color: "#174c3a",
    lang: "id-ID",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
