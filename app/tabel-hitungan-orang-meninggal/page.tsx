import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ArticleLayout } from "@/components/ArticleLayout";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { siteUrl } from "@/data/authors";

const path = "/tabel-hitungan-orang-meninggal/";
const canonical = `${siteUrl}${path}`;
const title = "Tabel Hitungan Orang Meninggal – Metode Inklusif";
const description =
  "Tabel hitungan orang meninggal berisi tahapan selamatan Jawa, tambahan hari metode inklusif, serta konteks Pasaran Jawa. Gunakan sebagai rujukan cepat.";
const image = "/images/tabel-hitungan-orang-meninggal.webp";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  robots: { index: true, follow: true },
  openGraph: {
    type: "article",
    locale: "id_ID",
    url: path,
    title,
    description,
    images: [
      {
        url: image,
        width: 1536,
        height: 1024,
        alt: "Tabel hitungan orang meninggal lengkap dengan tahapan selamatan Jawa dan tambahan hari metode inklusif",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [image],
  },
};

const tableRows = [
  {
    stage: "Hari wafat",
    term: "Geblag",
    day: "1",
    offset: "0",
    note: "Tanggal wafat dihitung sebagai hari pertama.",
  },
  {
    stage: "Tiga hari",
    term: "Nelung Dina",
    day: "3",
    offset: "2",
    note: "Selamatan pada hari ke-3 setelah wafat.",
  },
  {
    stage: "Tujuh hari",
    term: "Mitung Dina",
    day: "7",
    offset: "6",
    note: "Selamatan pada hari ke-7 setelah wafat.",
  },
  {
    stage: "Empat puluh hari",
    term: "Matangpuluh Dina",
    day: "40",
    offset: "39",
    note: "Selamatan pada hari ke-40 setelah wafat.",
  },
  {
    stage: "Seratus hari",
    term: "Nyatus",
    day: "100",
    offset: "99",
    note: "Selamatan pada hari ke-100 setelah wafat.",
  },
  {
    stage: "Satu tahun Jawa",
    term: "Pendhak Pisan",
    day: "±354",
    offset: "±353",
    note: "Perkiraan satu tahun Jawa; dapat sedikit bervariasi.",
    approximate: true,
  },
  {
    stage: "Dua tahun Jawa",
    term: "Pendhak Pindho",
    day: "±708",
    offset: "±707",
    note: "Perkiraan dua tahun Jawa; dapat sedikit bervariasi.",
    approximate: true,
  },
  {
    stage: "Seribu hari",
    term: "Nyewu",
    day: "1000",
    offset: "999",
    note: "Selamatan pada hari ke-1000 setelah wafat.",
  },
] as const;

const faqs = [
  {
    question: "Apakah tabel ini berlaku untuk semua daerah?",
    answer:
      "Tabel ini memberi acuan hitungan inklusif yang umum digunakan, tetapi pelaksanaan dapat berbeda menurut keluarga dan daerah. Cocokkan hasil dengan pedoman keluarga atau tokoh setempat.",
  },
  {
    question: "Bagaimana jika keluarga memakai metode hitung berbeda?",
    answer:
      "Gunakan metode yang telah disepakati keluarga. Jangan mencampur metode inklusif dan metode yang mulai menghitung pada hari berikutnya dalam satu jadwal.",
  },
  {
    question: "Apakah kolom tambahan hari sama dengan nomor hari?",
    answer:
      "Tidak. Pada metode inklusif, tanggal wafat sudah menjadi hari pertama. Karena itu, hari ke-N diperoleh dengan menambahkan N−1 hari kalender.",
  },
  {
    question: "Apakah Pendhak selalu jatuh tepat setelah 354 atau 708 hari?",
    answer:
      "Tidak selalu. Angka Pendhak pada tabel adalah perkiraan berbasis tahun Jawa dan perlu diperiksa kembali menggunakan kalender Jawa atau rujukan keluarga.",
  },
] as const;

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Beranda",
      item: `${siteUrl}/`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Tabel Hitungan Orang Meninggal",
      item: canonical,
    },
  ],
};

export default function TabelHitunganPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Lewati ke konten utama
      </a>
      <SiteHeader />

      <main id="main-content" className="article-main table-reference-page">
        <header className="article-hero table-reference-hero">
          <nav className="article-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Beranda</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Tabel Hitungan Orang Meninggal</span>
          </nav>
          <h1>Tabel Hitungan Orang Meninggal Lengkap</h1>
          <p>
            Tabel ini merangkum hitungan hari orang meninggal dari Geblag sampai
            Nyewu untuk keluarga yang ingin memeriksa hitungan manual tanpa
            memasukkan tanggal. Untuk memperoleh tanggal, hari, dan Pasaran Jawa
            secara otomatis, gunakan <Link href="/#kalkulator">kalkulator selamatan</Link>.
          </p>
          <p className="article-meta">
            Ditulis oleh <Link href="/penulis/rizky-pratama/">Rizky Pratama</Link>
            {" · "}Diperbarui 31 Juli 2026
          </p>
        </header>

        <ArticleLayout
          title={title}
          description={description}
          path={path}
          image={image}
          datePublished="2026-07-31"
          dateModified="2026-07-31"
          className="table-reference-article"
        >
          <section className="table-reference-section" aria-labelledby="table-title">
            <h2 id="table-title">Tabel selamatan Jawa dan tambahan hari</h2>
            <p>
              Kolom “Hari ke-” menunjukkan posisi hari dalam rangkaian hitungan.
              Kolom “Tambahan Hari” menunjukkan jumlah hari kalender yang
              ditambahkan ketika tanggal wafat dihitung sebagai hari pertama.
            </p>

            <div className="table-wrap table-reference-wrap">
              <table className="result-table reference-table">
                <caption>
                  Tahapan selamatan Jawa dengan hitungan metode inklusif
                </caption>
                <thead>
                  <tr>
                    <th scope="col">Tahapan</th>
                    <th scope="col">Istilah Jawa</th>
                    <th scope="col">Hari ke-</th>
                    <th scope="col">Tambahan Hari</th>
                    <th scope="col">Keterangan</th>
                  </tr>
                </thead>
                <tbody>
                  {tableRows.map((row) => (
                    <tr key={row.term} className={"approximate" in row ? "approximate" : undefined}>
                      <th scope="row" data-label="Tahapan"><span>{row.stage}</span></th>
                      <td data-label="Istilah Jawa"><span>{row.term}</span></td>
                      <td data-label="Hari ke-"><span>{row.day}</span></td>
                      <td data-label="Tambahan Hari"><span>{row.offset}</span></td>
                      <td data-label="Keterangan"><span>{row.note}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="pendhak-note">
              <strong>Catatan Pendhak:</strong> nilai ±354/±708 hari ke- dan
              ±353/±707 tambahan hari adalah perkiraan berdasarkan tahun Jawa.
              Periksa kembali dengan kalender Jawa atau rujukan keluarga.
            </p>

            <figure className="calculation-table-figure table-reference-image">
              <Image
                src={image}
                alt="Tabel hitungan orang meninggal: Geblag, Nelung Dina, Mitung Dina, Matangpuluh, Nyatus, Pendhak Pisan, Pendhak Pindho, dan Nyewu"
                width={1536}
                height={1024}
                sizes="(max-width: 1160px) calc(100vw - 40px), 1120px"
                priority
              />
              <figcaption>
                Versi visual tabel hitungan orang meninggal. Data yang sama
                tersedia dalam tabel HTML di atas agar dapat dibaca perangkat
                bantu dan mesin pencari.
              </figcaption>
            </figure>
          </section>

          <aside className="table-calculator-cta">
            <div>
              <h2>Hitung jadwal selamatan Anda sendiri</h2>
              <p>
                Masukkan tanggal wafat untuk melihat tanggal Masehi, hari biasa,
                dan Pasaran Jawa pada setiap tahapan.
              </p>
            </div>
            <Link className="button button-primary" href="/#kalkulator">
              Buka Kalkulator Selamatan
            </Link>
          </aside>

          <section className="table-reference-section" aria-labelledby="reading-title">
            <h2 id="reading-title">Cara membaca tabel ini</h2>
            <p>
              Metode inklusif memasukkan tanggal wafat sebagai hari pertama.
              Rumus dasarnya adalah <strong>hari ke-N = tanggal wafat + (N−1)
              hari</strong>. Karena itu, Nelung Dina pada hari ke-3 memakai
              tambahan 2 hari, Mitung Dina pada hari ke-7 memakai tambahan 6
              hari, dan Nyewu pada hari ke-1000 memakai tambahan 999 hari.
            </p>
            <p>
              Hari biasa mengikuti siklus tujuh hari, sedangkan Pasaran Jawa
              mengikuti siklus Legi, Pahing, Pon, Wage, dan Kliwon. Keduanya
              perlu diperiksa secara terpisah. Penjelasan contoh perhitungan
              tersedia dalam <Link href="/panduan/">kumpulan panduan selamatan Jawa</Link>.
            </p>
          </section>

          <section className="table-reference-section" aria-labelledby="mistakes-title">
            <h2 id="mistakes-title">Kesalahan umum saat membaca tabel</h2>
            <ul className="check-list table-mistakes">
              <li>Menyamakan kolom “Hari ke-” dengan jumlah hari yang harus ditambahkan.</li>
              <li>Menghitung tanggal wafat dua kali ketika menyalin hasil manual.</li>
              <li>Menganggap siklus hari biasa dan Pasaran Jawa sebagai satu siklus yang sama.</li>
              <li>Menganggap Pendhak sebagai kelipatan tetap 365 dan 730 hari Gregorian.</li>
              <li>Menggunakan perkiraan Pendhak sebagai tanggal pasti tanpa pemeriksaan keluarga.</li>
            </ul>
          </section>

          <section className="table-reference-section article-faq" aria-labelledby="faq-title">
            <h2 id="faq-title">Pertanyaan umum tentang tabel</h2>
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </section>

          <section className="table-reference-section references" aria-labelledby="references-title">
            <h2 id="references-title">Rujukan</h2>
            <p>
              Rujukan berikut memberi konteks tentang kalender, Pasaran Jawa,
              dan tahapan tradisi. Perbedaan keluarga atau daerah tetap perlu
              dihormati ketika menetapkan tanggal pelaksanaan.
            </p>
            <ul>
              <li>
                <a href="https://sonobudoyo.jogjaprov.go.id/en/tulisan/read/pandangan-dunia-jawa-dalam-koleksi-kalender-dan-penanggalan-tradisional-di-sonobudoyo" target="_blank" rel="noopener noreferrer">
                  Museum Sonobudoyo: kalender dan penanggalan tradisional Jawa
                </a>
              </li>
              <li>
                <a href="https://arxiv.org/abs/2012.10064" target="_blank" rel="noopener noreferrer">
                  Kajian etnoaritmetika tentang siklus kalender Jawa
                </a>
              </li>
              <li>
                <a href="https://download.garuda.kemdikbud.go.id/article.php?article=2070051&title=Tradisi+Keagamaan+Sebagai+Bentuk+Pelestarian+Budaya+Masyarakat+Jawa+Pada+Masa+Pandemi&val=16959" target="_blank" rel="noopener noreferrer">
                  Publikasi Garuda tentang tahapan tradisi selamatan kematian
                </a>
              </li>
            </ul>
          </section>
        </ArticleLayout>
      </main>

      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
