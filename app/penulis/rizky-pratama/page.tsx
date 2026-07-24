import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { CheckIcon } from "@/components/icons";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import {
  createPersonSchema,
  getAuthorUrl,
  rizkyPratama,
} from "@/data/authors";

export const metadata: Metadata = {
  title: "Rizky Pratama - Penulis & Peneliti Tradisi Jawa",
  description:
    "Profil Rizky Pratama, penulis dan peneliti tradisi Jawa yang membahas perhitungan hari selamatan, kalender Jawa, dan budaya Indonesia.",
  alternates: {
    canonical: getAuthorUrl(),
  },
  openGraph: {
    type: "profile",
    title: "Rizky Pratama - Penulis & Peneliti Tradisi Jawa",
    description:
      "Kenali latar belakang, bidang keahlian, dan proses editorial Rizky Pratama.",
    url: getAuthorUrl(),
    images: [
      {
        url: rizkyPratama.imagePath,
        width: 800,
        height: 800,
        alt: `Foto profil ${rizkyPratama.name}`,
      },
    ],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  ...createPersonSchema(),
  mainEntityOfPage: getAuthorUrl(),
};

export default function RizkyPratamaPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Lewati ke konten utama
      </a>
      <SiteHeader />

      <main id="main-content" className="inner-page-main">
        <section className="author-profile-hero">
          <Image
            src={rizkyPratama.imagePath}
            alt={`Foto profil ${rizkyPratama.name}`}
            width={800}
            height={800}
            sizes="(max-width: 640px) 150px, 210px"
            priority
          />
          <div>
            <h1>{rizkyPratama.name}</h1>
            <p className="author-profile-role">{rizkyPratama.role}</p>
            <p>
              Rizky meneliti cara hitungan tradisi dijelaskan dan digunakan
              dalam kehidupan keluarga. Fokusnya adalah membuat informasi
              kalender Jawa lebih mudah dipahami tanpa menghapus variasi
              kebiasaan yang hidup di berbagai daerah.
            </p>
          </div>
        </section>

        <div className="inner-page-shell author-profile-page">
          <section className="author-profile-section author-biography">
            <div>
              <h2>Tentang Rizky</h2>
              <p>
                Ketertarikan Rizky pada tradisi Jawa berawal dari pertanyaan
                sederhana yang sering muncul dalam keluarga: mengapa hasil
                hitungan selamatan dapat berbeda satu hari, dan bagaimana
                Pasaran ditentukan bersama hari biasa? Dari sana, ia mulai
                membandingkan istilah, urutan peringatan, dan cara kerja kalender
                agar penjelasannya dapat diperiksa kembali.
              </p>
              <p>
                Dalam tulisannya, Rizky memisahkan hal yang dapat dihitung secara
                pasti dari hal yang bergantung pada kebiasaan. Rumus tanggal
                diterangkan langkah demi langkah, sedangkan variasi setelah
                Maghrib, awal hitungan, dan Pendhak diberi konteks agar pembaca
                tidak menerima hasil otomatis sebagai satu-satunya jawaban.
              </p>
              <p>
                Ia menulis untuk pembaca umum, terutama keluarga yang membutuhkan
                panduan cepat tetapi tetap ingin memahami dasar hasilnya. Rizky
                tidak menetapkan keputusan adat atau agama; ia mendorong pembaca
                mengonfirmasi tanggal penting kepada keluarga, kalender Jawa
                tepercaya, atau tokoh setempat.
              </p>
            </div>
            <aside className="author-expertise-card">
              <h2>Bidang keahlian</h2>
              <ul>
                {rizkyPratama.expertise.map((item) => (
                  <li key={item}>
                    <CheckIcon /> {item}
                  </li>
                ))}
              </ul>
            </aside>
          </section>

          <section className="author-profile-section">
            <h2>Proses editorial</h2>
            <p>
              Setiap panduan disusun dengan proses yang mengutamakan kejelasan
              dan kemampuan pembaca untuk memeriksa hasil sendiri.
            </p>
            <ol className="author-process">
              <li>
                <span>1</span>
                <div>
                  <h3>Menentukan pertanyaan utama</h3>
                  <p>
                    Pembahasan dimulai dari kebutuhan nyata pengguna, bukan dari
                    pengulangan kata kunci.
                  </p>
                </div>
              </li>
              <li>
                <span>2</span>
                <div>
                  <h3>Membandingkan rujukan</h3>
                  <p>
                    Istilah, rumus, dan acuan kalender dibandingkan untuk
                    menemukan bagian yang konsisten serta bagian yang bervariasi.
                  </p>
                </div>
              </li>
              <li>
                <span>3</span>
                <div>
                  <h3>Menguji hasil hitungan</h3>
                  <p>
                    Contoh tanggal diperiksa terhadap logika inklusif, siklus
                    tujuh hari, dan siklus lima hari Pasaran.
                  </p>
                </div>
              </li>
              <li>
                <span>4</span>
                <div>
                  <h3>Menjelaskan batasannya</h3>
                  <p>
                    Perkiraan dan perbedaan kebiasaan ditandai secara terbuka,
                    lalu isi diperbarui ketika ada koreksi yang dapat dibuktikan.
                  </p>
                </div>
              </li>
            </ol>
          </section>

          <section className="author-profile-section">
            <h2>Artikel oleh Rizky Pratama</h2>
            <div className="author-articles">
              {rizkyPratama.articles.map((article) => (
                <article key={article.path}>
                  <h3>
                    <Link href={article.path}>{article.title}</Link>
                  </h3>
                  <p>{article.description}</p>
                  <Link href={article.path}>
                    Baca artikel <span aria-hidden="true">→</span>
                  </Link>
                </article>
              ))}
            </div>
          </section>

          <section className="about-contact-band author-contact-band">
            <div>
              <h2>Koreksi dan masukan</h2>
              <p>
                Menemukan perbedaan hasil atau memiliki rujukan yang layak
                diperiksa? Kirim detailnya agar dapat ditinjau secara editorial.
              </p>
            </div>
            <Link className="button button-primary" href="/hubungi-kami/">
              Hubungi Kami
            </Link>
          </section>
        </div>
      </main>

      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
