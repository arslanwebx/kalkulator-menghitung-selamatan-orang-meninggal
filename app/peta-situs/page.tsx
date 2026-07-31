import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Peta Situs | Kalkulator Selamatan",
  description:
    "Temukan seluruh halaman, panduan, profil penulis, dan kebijakan Kalkulator Selamatan melalui peta situs HTML.",
  alternates: {
    canonical: "https://kalkulatorselamatanorangmeninggal.pro/peta-situs/",
  },
};

const sitemapGroups = [
  {
    title: "Kalkulator dan panduan",
    description:
      "Akses alat utama dan langsung menuju bagian panduan yang Anda butuhkan.",
    links: [
      {
        href: "/",
        label: "Kalkulator Selamatan",
        description:
          "Hitung jadwal 3, 7, 40, 100, Pendhak, dan 1000 hari.",
      },
      {
        href: "/tabel-hitungan-orang-meninggal/",
        label: "Tabel Hitungan Orang Meninggal",
        description:
          "Tabel lengkap tahapan, istilah Jawa, hari ke-, dan tambahan hari.",
      },
      {
        href: "/#cara-menghitung",
        label: "Cara Menghitung Selamatan",
        description:
          "Langkah menggunakan metode inklusif dan memeriksa hasil.",
      },
      {
        href: "/panduan/",
        label: "Panduan Selamatan Jawa",
        description:
          "Kumpulan artikel dan panduan perhitungan selamatan Jawa.",
      },
      {
        href: "/panduan/cara-menghitung-7-hari-orang-meninggal/",
        label: "Cara Menghitung 7 Hari Orang Meninggal",
        description:
          "Panduan Mitung Dina dengan metode inklusif dan contoh tanggal.",
      },
      {
        href: "/#faq",
        label: "Pertanyaan Umum",
        description:
          "Jawaban singkat mengenai metode, Pasaran, dan perbedaan hasil.",
      },
    ],
  },
  {
    title: "Tentang situs",
    description:
      "Kenali tujuan situs, proses penulisan, dan cara menghubungi pengelola.",
    links: [
      {
        href: "/tentang-kami/",
        label: "Tentang Kami",
        description:
          "Tujuan, prinsip, metode, dan batas penggunaan kalkulator.",
      },
      {
        href: "/penulis/rizky-pratama/",
        label: "Rizky Pratama",
        description:
          "Profil penulis, keahlian, proses editorial, dan daftar artikel.",
      },
      {
        href: "/hubungi-kami/",
        label: "Hubungi Kami",
        description:
          "Kirim pertanyaan, koreksi hitungan, atau masukan melalui formulir.",
      },
    ],
  },
  {
    title: "Kebijakan dan ketentuan",
    description:
      "Informasi mengenai privasi, penggunaan layanan, dan standar penerbitan.",
    links: [
      {
        href: "/kebijakan-privasi/",
        label: "Kebijakan Privasi",
        description:
          "Data yang diproses oleh kalkulator dan formulir kontak.",
      },
      {
        href: "/kebijakan-cookie/",
        label: "Kebijakan Cookie",
        description:
          "Penggunaan cookie, penyimpanan peramban, dan pilihan pengguna.",
      },
      {
        href: "/kebijakan-editorial/",
        label: "Kebijakan Editorial",
        description:
          "Cara konten disusun, diperiksa, diperbarui, dan dikoreksi.",
      },
      {
        href: "/syarat-dan-ketentuan/",
        label: "Syarat dan Ketentuan",
        description:
          "Ketentuan penggunaan kalkulator, konten, dan layanan situs.",
      },
      {
        href: "/penafian/",
        label: "Penafian",
        description:
          "Batas hasil hitungan dan pentingnya verifikasi dengan rujukan lain.",
      },
    ],
  },
] as const;

export default function HtmlSitemapPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Lewati ke konten utama
      </a>
      <SiteHeader />

      <main id="main-content" className="inner-page-main">
        <section className="inner-page-hero sitemap-page-hero">
          <h1>Peta Situs</h1>
          <p>
            Jelajahi seluruh halaman Kalkulator Selamatan melalui daftar yang
            tersusun berdasarkan fungsi dan topik.
          </p>
        </section>

        <div className="inner-page-shell html-sitemap">
          {sitemapGroups.map((group) => (
            <section className="sitemap-group" key={group.title}>
              <div className="sitemap-group-heading">
                <h2>{group.title}</h2>
                <p>{group.description}</p>
              </div>
              <ul>
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>
                      <span>{link.label}</span>
                      <small>{link.description}</small>
                      <strong aria-hidden="true">→</strong>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <aside className="sitemap-xml-note">
            <div>
              <h2>Mencari peta situs untuk mesin pencari?</h2>
              <p>
                Versi XML tersedia untuk membantu mesin pencari menemukan URL
                kanonis situs.
              </p>
            </div>
            <a href="/sitemap.xml">Buka Sitemap XML</a>
          </aside>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
