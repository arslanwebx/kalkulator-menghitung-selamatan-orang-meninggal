import Link from "next/link";

import { AuthorBox } from "@/components/AuthorBox";
import { Calculator } from "@/components/Calculator";
import { Faq } from "@/components/Faq";
import { CheckIcon } from "@/components/icons";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import {
  createArticleNode,
  createPersonSchema,
  getAuthorUrl,
} from "@/data/authors";
import { faqs, glossary } from "@/data/content";
import {
  calculateSchedule,
  formatDate,
  parseDateInput,
  type CalendarDate,
} from "@/lib/calendar";

const canonicalUrl = "https://kalkulatorselamatanorangmeninggal.pro/";
const description =
  "Hitung jadwal selamatan orang meninggal dengan mudah berdasarkan tradisi Jawa, mulai dari 3 hari, 7 hari, 40 hari, 100 hari, hingga 1000 hari.";
const parsedExampleDate = parseDateInput("2025-02-14");

if (!parsedExampleDate) {
  throw new Error("Tanggal contoh tidak valid.");
}

const exampleDate: CalendarDate = parsedExampleDate;
const exampleResults = calculateSchedule(exampleDate).filter((result) =>
  ["nelung-dina", "mitung-dina", "matangpuluh", "nyatus", "nyewu"].includes(
    result.id,
  ),
);

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${canonicalUrl}#website`,
      name: "Kalkulator Selamatan",
      alternateName: "Kalkulator Menghitung Selamatan Orang Meninggal",
      url: canonicalUrl,
      inLanguage: "id-ID",
    },
    {
      "@type": "WebPage",
      "@id": `${canonicalUrl}#webpage`,
      name: "Kalkulator Menghitung Selamatan Orang Meninggal - (Online)",
      description,
      url: canonicalUrl,
      inLanguage: "id-ID",
      isPartOf: { "@id": `${canonicalUrl}#website` },
      mainEntity: { "@id": `${canonicalUrl}#application` },
      primaryImageOfPage: { "@id": `${canonicalUrl}#primary-image` },
      author: { "@id": `${getAuthorUrl()}#person` },
    },
    createPersonSchema(),
    createArticleNode({
      headline: "Kalkulator Menghitung Selamatan Orang Meninggal",
      description,
      url: canonicalUrl,
      image: `${canonicalUrl}og-image.svg`,
    }),
    {
      "@type": "ImageObject",
      "@id": `${canonicalUrl}#primary-image`,
      name: "Kalkulator Selamatan",
      caption:
        "Kalkulator untuk menghitung jadwal selamatan dan Pasaran Jawa.",
      contentUrl: `${canonicalUrl}og-image.svg`,
      url: `${canonicalUrl}og-image.svg`,
      width: 1200,
      height: 630,
      encodingFormat: "image/svg+xml",
      inLanguage: "id-ID",
      representativeOfPage: true,
    },
    {
      "@type": "WebApplication",
      "@id": `${canonicalUrl}#application`,
      name: "Kalkulator Selamatan",
      description,
      url: canonicalUrl,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Any",
      browserRequirements: "Requires a modern web browser with JavaScript enabled",
      isAccessibleForFree: true,
      inLanguage: "id-ID",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "IDR",
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${canonicalUrl}#faq-schema`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Lewati ke konten utama
      </a>

      <SiteHeader homePage />

      <main id="main-content">
        <section className="intro">
          <h1>Kalkulator Menghitung Selamatan Orang Meninggal</h1>
          <p className="intro-copy">
            Masukkan tanggal wafat untuk menghitung jadwal selamatan 3, 7, 40,
            100, Pendhak, dan 1000 hari secara otomatis.
            <br />
            Hasil menampilkan tanggal Masehi, hari, dan Pasaran Jawa dengan
            metode tanggal wafat sebagai hari pertama.
          </p>
        </section>

        <div className="calculator-shell">
          <Calculator />
        </div>

        <div className="content-flow">
          <section className="content-section table-teaser">
            <h2>Tabel Hitungan Orang Meninggal</h2>
            <p>
              Tabel lengkap merangkum tahapan selamatan, istilah Jawa, hari ke-,
              dan tambahan hari dalam metode inklusif. Gunakan tabel sebagai
              rujukan cepat untuk memeriksa hitungan manual dan memahami urutan
              Geblag hingga Nyewu.
            </p>
            <Link className="button button-secondary" href="/tabel-hitungan-orang-meninggal/">
              Lihat tabel hitungan orang meninggal lengkap
            </Link>
          </section>

          <section id="cara-menghitung" className="content-section">
            <h2>Cara Menghitung Selamatan Orang Meninggal</h2>
            <ol className="steps">
              <li>
                <span>1</span>
                <div>
                  <h3>Catat tanggal wafat</h3>
                  <p>
                    Gunakan tanggal kalender yang benar tanpa menambahkan waktu
                    atau mengubah zona waktu.
                  </p>
                </div>
              </li>
              <li>
                <span>2</span>
                <div>
                  <h3>Jadikan tanggal itu hari pertama</h3>
                  <p>
                    Untuk mencari hari ke-N, tambahkan N−1 hari. Hari ketiga
                    berarti menambah dua hari.
                  </p>
                </div>
              </li>
              <li>
                <span>3</span>
                <div>
                  <h3>Tentukan hari dan Pasaran</h3>
                  <p>
                    Tambahkan selisih tanggal, lalu ikuti siklus lima hari
                    Pasaran Jawa.
                  </p>
                </div>
              </li>
            </ol>

            <div className="cycle-card">
              <div>
                <strong>7 hari</strong>
                <span>Siklus hari biasa</span>
              </div>
              <span aria-hidden="true">×</span>
              <div>
                <strong>5 hari</strong>
                <span>Siklus Pasaran Jawa</span>
              </div>
              <span aria-hidden="true">=</span>
              <div>
                <strong>35 hari</strong>
                <span>Weton berulang</span>
              </div>
            </div>
            <p>
              Hari biasa berulang setiap tujuh hari, sedangkan Pasaran Jawa
              berulang setiap lima hari. Gabungan keduanya, yang sering disebut
              weton, kembali sama setiap 35 hari.
            </p>
            <p>
              Karena siklusnya berbeda, hasil bisa memiliki hari biasa yang
              benar tetapi Pasaran yang salah. Kesalahan itu biasanya muncul
              saat program hanya memakai pembagian tujuh hari atau memakai
              tanggal acuan Pasaran yang keliru.
            </p>
            <p>
              Kalkulator mengolah setiap masukan sebagai tanggal kalender murni.
              Cara ini penting karena sebuah tanggal tidak memiliki jam; jika
              diperlakukan sebagai waktu tengah malam dalam zona waktu lain,
              tanggal dapat bergeser ke hari sebelumnya.
            </p>
          </section>

          <section className="content-section">
            <h2>Contoh Hitungan Selamatan</h2>
            <p>
              Ibu Sulastri wafat pada {formatDate(exampleDate)}. Dengan tanggal
              wafat sebagai hari pertama, jadwal berikut dihasilkan oleh fungsi
              perhitungan yang sama dengan kalkulator di atas.
            </p>
            <div className="example-grid">
              {exampleResults.map((result) => (
                <article key={result.id}>
                  <span>Hari ke-{result.dayNumber}</span>
                  <h3>{result.name}</h3>
                  <p>{result.longDate}</p>
                  <strong>{result.weekday} {result.pasaran}</strong>
                </article>
              ))}
            </div>
            <p className="inline-note">
              Contohnya, Nelung Dina dihitung dengan menambahkan dua hari pada
              tanggal 14 Februari. Hasilnya adalah {exampleResults[0].longDate},
              bukan tiga hari penuh sesudah tanggal wafat.
            </p>
            <p>
              Setiap baris contoh menghitung Pasaran dari selisih hari terhadap
              acuan yang sama. Karena itu, contoh tidak ditulis manual dan akan
              tetap sejalan bila fungsi perhitungan diperbaiki di kemudian hari.
            </p>
          </section>

          <section className="content-section">
            <h2>Arti Istilah dalam Hitungan Selamatan Jawa</h2>
            <p>
              Dalam sebagian tradisi Jawa, setiap tahapan memiliki sebutan yang
              membantu keluarga mengenali urutan waktu. Pelaksanaan dan
              pemakaiannya tidak selalu sama di setiap keluarga.
            </p>
            <dl className="glossary-grid">
              {glossary.map((item) => (
                <div key={item.term}>
                  <dt>{item.term}</dt>
                  <dd>{item.definition}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="content-section split-section">
            <div>
              <h2>Mengapa Hasil Hitungan Bisa Berbeda?</h2>
              <p>
                Sebagian keluarga menghitung tanggal wafat sebagai hari pertama.
                Keluarga lain baru memulai hitungan pada hari berikutnya.
                Pilihan metode ini menggeser jadwal satu hari.
              </p>
              <p>
                Kebiasaan untuk peristiwa pada malam hari atau setelah Maghrib
                juga dapat berbeda menurut komunitas. Pendhak mengikuti tahun
                lunar Jawa, bukan satu tahun Gregorian biasa, sehingga
                panjangnya tidak selalu tepat 365 hari.
              </p>
              <p>
                Kalender rujukan, sesepuh, dan tradisi keluarga mungkin memakai
                konvensi lain. Acuan Pasaran yang salah juga dapat menggeser
                seluruh hasil meskipun tanggal Masehinya benar.
              </p>
              <p className="inline-note">
                Gunakan hasil kalkulator sebagai alat bantu. Jika keluarga
                memiliki pedoman khusus, utamakan kesepakatan keluarga dan
                rujukan setempat.
              </p>
            </div>

            <div>
              <h2>Kesalahan Umum Saat Menghitung Hari Selamatan</h2>
              <ul className="check-list">
                <li><CheckIcon /> Menambahkan tiga hari penuh untuk hari ketiga.</li>
                <li><CheckIcon /> Menambahkan 1.000 hari, bukan 999, pada hitungan inklusif.</li>
                <li><CheckIcon /> Menganggap Pendhak selalu tepat satu tahun Gregorian.</li>
                <li><CheckIcon /> Menghitung hari biasa tetapi mengabaikan Pasaran.</li>
                <li><CheckIcon /> Mencampur dua metode dalam satu jadwal.</li>
                <li><CheckIcon /> Memproses tanggal melalui zona waktu hingga bergeser sehari.</li>
              </ul>
            </div>
          </section>

          <section id="faq" className="content-section">
            <h2>Pertanyaan Umum</h2>
            <p>
              Jawaban ringkas untuk pertanyaan yang paling sering muncul saat
              memakai hitungan orang meninggal online.
            </p>
            <Faq />
          </section>

          <section className="content-section references">
            <h2>Rujukan Perhitungan</h2>
            <p>
              Kalkulator memakai siklus lima hari dan acuan tanggal yang diuji.
              Bacaan berikut memberi konteks tentang Pasaran, kalender Jawa, dan
              tahapan tradisi selamatan:
            </p>
            <p>
              Rujukan tersebut menjelaskan struktur kalender dan konteks budaya,
              bukan menggantikan keputusan keluarga. Kebiasaan setiap keluarga
              atau daerah dapat berbeda, terutama untuk waktu pelaksanaan malam
              hari dan penetapan tanggal Pendhak.
            </p>
            <ul>
              <li>
                <a
                  href="https://sonobudoyo.jogjaprov.go.id/en/tulisan/read/pandangan-dunia-jawa-dalam-koleksi-kalender-dan-penanggalan-tradisional-di-sonobudoyo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Museum Sonobudoyo: kalender dan penanggalan tradisional Jawa
                </a>
              </li>
              <li>
                <a
                  href="https://arxiv.org/abs/2012.10064"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kajian etnoaritmetika tentang siklus kalender Jawa
                </a>
              </li>
              <li>
                <a
                  href="https://download.garuda.kemdikbud.go.id/article.php?article=2070051&title=Tradisi+Keagamaan+Sebagai+Bentuk+Pelestarian+Budaya+Masyarakat+Jawa+Pada+Masa+Pandemi&val=16959"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Publikasi Garuda tentang tahapan tradisi selamatan kematian
                </a>
              </li>
            </ul>
          </section>

          <AuthorBox />

          <aside className="closing-notice" aria-label="Catatan penggunaan">
            <div>
              <h2>Gunakan sebagai panduan awal</h2>
              <p>
                Kalkulator ini dibuat untuk membantu perhitungan awal. Tradisi
                selamatan dapat berbeda menurut keluarga, daerah, dan rujukan
                kalender yang digunakan.
              </p>
            </div>
            <a className="button button-primary" href="#kalkulator">
              Kembali ke Kalkulator
            </a>
          </aside>
        </div>
      </main>

      <SiteFooter />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
