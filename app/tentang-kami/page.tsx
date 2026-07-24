import type { Metadata } from "next";

import { CheckIcon } from "@/components/icons";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Tentang Kami | Kalkulator Selamatan",
  description:
    "Kenali tujuan, cara kerja, prinsip privasi, dan batasan Kalkulator Selamatan sebagai alat bantu hitungan tradisi Jawa.",
  alternates: {
    canonical:
      "https://kalkulatorselamatanorangmeninggal.pro/tentang-kami/",
  },
  openGraph: {
    title: "Tentang Kami | Kalkulator Selamatan",
    description:
      "Kenali tujuan, cara kerja, prinsip privasi, dan batasan Kalkulator Selamatan sebagai alat bantu hitungan tradisi Jawa.",
    url: "https://kalkulatorselamatanorangmeninggal.pro/tentang-kami/",
  },
};

const principles = [
  {
    title: "Berguna sejak awal",
    description:
      "Pengguna langsung menemukan kalkulator tanpa harus melewati artikel panjang, iklan, atau langkah pendaftaran.",
  },
  {
    title: "Perhitungan transparan",
    description:
      "Tambahan hari, metode inklusif, acuan Pasaran, dan keterbatasan Pendhak dijelaskan agar hasil dapat diperiksa kembali.",
  },
  {
    title: "Menghormati perbedaan",
    description:
      "Kami tidak menganggap satu kebiasaan berlaku untuk semua keluarga Jawa. Pedoman keluarga dan rujukan setempat tetap penting.",
  },
  {
    title: "Privasi sederhana",
    description:
      "Tanggal wafat dan nama yang dimasukkan ke kalkulator diproses di peramban, tanpa akun dan tanpa penyimpanan masukan.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Lewati ke konten utama
      </a>
      <SiteHeader />

      <main id="main-content" className="inner-page-main">
        <section className="inner-page-hero">
          <h1>Tentang Kalkulator Selamatan</h1>
          <p>
            Kalkulator Selamatan dibuat sebagai alat bantu yang sederhana,
            transparan, dan mudah digunakan untuk menghitung jadwal peringatan
            berdasarkan tanggal wafat.
          </p>
        </section>

        <div className="inner-page-shell about-page">
          <section className="about-lead">
            <div>
              <h2>Membantu hitungan keluarga menjadi lebih jelas</h2>
              <p>
                Menghitung hari ke-3, 7, 40, 100, dan 1000 terlihat sederhana,
                tetapi hasil dapat bergeser ketika tanggal wafat tidak
                diperlakukan sebagai hari pertama. Kesalahan juga dapat muncul
                saat hari biasa dihitung tanpa mengikuti siklus Pasaran Jawa.
              </p>
              <p>
                Situs ini menyatukan hitungan tersebut dalam satu alat yang
                dapat dibuka melalui ponsel maupun komputer. Pengguna cukup
                memasukkan tanggal wafat, memilih metode yang sesuai, lalu
                memperoleh tanggal Masehi, nama hari, dan Pasaran untuk setiap
                tahapan.
              </p>
              <p>
                Kami sengaja menampilkan rumus dan tabel hitungan di halaman
                utama. Tujuannya bukan hanya memberikan hasil, tetapi juga
                membantu keluarga memahami dari mana tanggal itu berasal dan
                memeriksanya bersama kalender atau rujukan lain.
              </p>
            </div>
            <aside className="about-summary-card">
              <strong>Apa yang dihitung?</strong>
              <ul>
                <li><CheckIcon /> Geblag dan Nelung Dina</li>
                <li><CheckIcon /> Mitung Dina dan Matangpuluh</li>
                <li><CheckIcon /> Nyatus dan Nyewu</li>
                <li><CheckIcon /> Perkiraan Pendhak Pisan dan Pindho</li>
                <li><CheckIcon /> Hari biasa dan Pasaran Jawa</li>
              </ul>
            </aside>
          </section>

          <section className="about-section">
            <h2>Prinsip yang kami pegang</h2>
            <p>
              Tradisi berkaitan erat dengan keluarga dan daerah. Karena itu,
              desain, isi, dan cara kerja situs ini mengikuti empat prinsip
              berikut.
            </p>
            <div className="about-principles">
              {principles.map((principle) => (
                <article key={principle.title}>
                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="about-section about-method">
            <div>
              <h2>Bagaimana perhitungannya dibuat?</h2>
              <p>
                Metode bawaan memakai hitungan inklusif. Tanggal wafat menjadi
                hari pertama, sehingga hari ke-N diperoleh dengan menambahkan
                N−1 hari. Nelung Dina memakai tambahan dua hari, Mitung Dina
                enam hari, Matangpuluh 39 hari, Nyatus 99 hari, dan Nyewu 999
                hari.
              </p>
              <p>
                Tanggal diproses sebagai tanggal kalender tanpa jam. Pendekatan
                ini mencegah perubahan zona waktu menggeser hasil ke hari
                sebelumnya atau berikutnya. Pasaran dihitung melalui siklus
                Legi, Pahing, Pon, Wage, dan Kliwon menggunakan acuan 17
                Agustus 1945 sebagai Jumat Legi.
              </p>
            </div>
            <div>
              <h2>Mengapa Pendhak disebut perkiraan?</h2>
              <p>
                Pendhak mengikuti tahun Jawa yang bersifat lunar. Panjang
                tahunnya tidak selalu sama dengan 365 hari dalam kalender
                Gregorian dan dapat melibatkan penyesuaian kalender yang
                berbeda menurut rujukan.
              </p>
              <p>
                Agar tidak memberi kesan kepastian yang keliru, kalkulator
                menampilkan Pendhak Pisan dan Pendhak Pindho sebagai perkiraan
                354 dan 708 hari. Tanggal tersebut sebaiknya dicocokkan kembali
                dengan kalender Jawa, sesepuh keluarga, atau tokoh setempat.
              </p>
            </div>
          </section>

          <section className="about-section">
            <h2>Alat bantu, bukan pengganti kesepakatan keluarga</h2>
            <p>
              Kalkulator ini tidak memprediksi kematian, tidak menentukan
              kewajiban suatu tradisi, dan tidak memberikan keputusan
              keagamaan. Alat ini hanya mengolah tanggal wafat yang telah
              dimasukkan menjadi jadwal hitungan berdasarkan metode yang
              dipilih.
            </p>
            <p>
              Sebagian keluarga memulai hitungan pada tanggal wafat, sedangkan
              keluarga lain memulainya pada hari berikutnya. Kebiasaan untuk
              peristiwa setelah Maghrib juga dapat berbeda. Jika keluarga
              memiliki pedoman sendiri, pedoman tersebut sebaiknya diutamakan.
            </p>
          </section>

          <section className="about-contact-band">
            <div>
              <h2>Koreksi dan masukan selalu terbuka</h2>
              <p>
                Menemukan hasil yang perlu diperiksa atau memiliki saran agar
                penjelasan lebih mudah dipahami? Sampaikan kepada kami melalui
                halaman kontak.
              </p>
            </div>
            <a className="button button-primary" href="/hubungi-kami/">
              Hubungi Kami
            </a>
          </section>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
