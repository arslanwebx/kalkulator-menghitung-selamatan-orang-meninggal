import type { Metadata } from "next";

import { ContactForm } from "@/components/ContactForm";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Hubungi Kami | Kalkulator Selamatan",
  description:
    "Hubungi Kalkulator Selamatan untuk menyampaikan pertanyaan, koreksi perhitungan, atau masukan mengenai pengalaman menggunakan situs.",
  alternates: {
    canonical:
      "https://kalkulatorselamatanorangmeninggal.pro/hubungi-kami/",
  },
  openGraph: {
    title: "Hubungi Kami | Kalkulator Selamatan",
    description:
      "Sampaikan pertanyaan, koreksi perhitungan, atau masukan mengenai Kalkulator Selamatan.",
    url: "https://kalkulatorselamatanorangmeninggal.pro/hubungi-kami/",
  },
};

export default function ContactPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Lewati ke konten utama
      </a>
      <SiteHeader />

      <main id="main-content" className="inner-page-main">
        <section className="inner-page-hero contact-page-hero">
          <h1>Hubungi Kami</h1>
          <p>
            Kirim pertanyaan, koreksi, atau masukan mengenai Kalkulator
            Selamatan. Setiap pesan membantu kami menjaga informasi tetap jelas
            dan bermanfaat.
          </p>
        </section>

        <div className="inner-page-shell contact-layout">
          <section className="contact-form-card" aria-labelledby="contact-form-title">
            <div className="contact-form-heading">
              <h2 id="contact-form-title">Kirim Pesan</h2>
              <p>
                Isi formulir berikut. Pesan akan dikirim tanpa memuat ulang
                halaman.
              </p>
            </div>
            <ContactForm />
          </section>

          <aside className="contact-info-card">
            <h2>Kontak melalui email</h2>
            <p>
              Jika lebih nyaman menggunakan aplikasi email, kirim pesan
              langsung ke:
            </p>
            <a href="mailto:halo@kalkulatorselamatanorangmeninggal.pro">
              halo@kalkulatorselamatanorangmeninggal.pro
            </a>

            <div className="contact-expectations">
              <h3>Pesan yang dapat dikirim</h3>
              <ul>
                <li>Koreksi hasil atau penjelasan perhitungan</li>
                <li>Masalah saat menggunakan kalkulator</li>
                <li>Saran aksesibilitas dan tampilan situs</li>
                <li>Pertanyaan umum mengenai cara kerja alat</li>
              </ul>
            </div>

            <p className="contact-privacy-note">
              Jangan cantumkan informasi pribadi yang tidak diperlukan. Nama
              dan alamat email pada formulir hanya digunakan untuk menanggapi
              pesan Anda.
            </p>
          </aside>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
