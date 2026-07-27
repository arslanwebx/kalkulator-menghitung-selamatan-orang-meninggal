import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { rizkyPratama, siteUrl } from "@/data/authors";

const guides = rizkyPratama.articles.filter((article) => article.path !== "/");

export const metadata: Metadata = {
  title: "Panduan Selamatan Jawa | Kalkulator Selamatan",
  description:
    "Kumpulan panduan praktis menghitung hari selamatan orang meninggal berdasarkan tradisi Jawa, lengkap dengan contoh dan rumus tanggal.",
  alternates: { canonical: "/panduan/" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/panduan/",
    title: "Panduan Selamatan Jawa | Kalkulator Selamatan",
    description:
      "Kumpulan panduan praktis menghitung hari selamatan orang meninggal berdasarkan tradisi Jawa.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Panduan Selamatan Jawa",
  url: `${siteUrl}/panduan/`,
  inLanguage: "id-ID",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: guides.map((article, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${siteUrl}${article.path}`,
      name: article.title,
    })),
  },
};

export default function PanduanPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">Lewati ke konten utama</a>
      <SiteHeader />
      <main id="main-content" className="inner-page-main guides-page">
        <section className="inner-page-hero guides-page-hero">
          <p className="guides-kicker">Kumpulan artikel</p>
          <h1>Panduan Selamatan Jawa</h1>
          <p>
            Temukan panduan yang jelas untuk menghitung hari selamatan, memahami istilah Jawa, dan memeriksa tanggal penting bersama keluarga.
          </p>
        </section>
        <section className="guides-shell" aria-labelledby="guides-title">
          <div className="guides-heading">
            <div>
              <h2 id="guides-title">Artikel terbaru</h2>
              <p>Panduan ditulis untuk membantu Anda memeriksa hitungan secara bertahap.</p>
            </div>
            <Link href="/" className="guides-calculator-link">Buka kalkulator <span aria-hidden="true">→</span></Link>
          </div>
          <div className="guides-grid">
            {guides.map((guide) => (
              <article className="guide-card" key={guide.path}>
                <Link href={guide.path} className="guide-card-image" aria-label={`Baca ${guide.title}`}>
                  <Image src="/images/cara-menghitung-7-hari-orang-meninggal.webp" alt="Kalender Mitung Dina untuk menghitung hari ke-7" width={1536} height={1024} sizes="(max-width: 700px) calc(100vw - 56px), (max-width: 1100px) calc(50vw - 36px), 350px" />
                </Link>
                <div className="guide-card-content">
                  <p>Perhitungan tanggal</p>
                  <h2><Link href={guide.path}>{guide.title}</Link></h2>
                  <p className="guide-card-description">{guide.description}</p>
                  <div className="guide-card-meta"><span>Rizky Pratama</span><Link href={guide.path}>Baca panduan <span aria-hidden="true">→</span></Link></div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    </>
  );
}
