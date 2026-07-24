import type { Metadata } from "next";

import { PolicyPage } from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Kebijakan Cookie | Kalkulator Selamatan",
  description:
    "Ketahui penggunaan cookie dan penyimpanan peramban pada Kalkulator Selamatan serta cara mengelola pilihan Anda.",
  alternates: {
    canonical:
      "https://kalkulatorselamatanorangmeninggal.pro/kebijakan-cookie/",
  },
};

export default function CookiePolicyPage() {
  return (
    <PolicyPage
      title="Kebijakan Cookie"
      introduction="Halaman ini menjelaskan apa itu cookie, bagaimana teknologi serupa dapat digunakan, dan pilihan yang tersedia bagi Anda."
      updated="24 Juli 2026"
      summary="Kalkulator tidak membutuhkan cookie untuk menghitung tanggal. Penyedia infrastruktur atau formulir dapat memakai teknologi penting untuk keamanan dan pengiriman layanan."
      sections={[
        {
          title: "Apa itu cookie?",
          content: (
            <p>
              Cookie adalah berkas teks kecil yang dapat disimpan oleh peramban
              ketika Anda mengunjungi situs. Teknologi serupa, seperti
              penyimpanan lokal, juga dapat membantu situs mengingat pengaturan
              atau menjalankan fungsi tertentu. Cookie tidak dapat membaca
              seluruh isi perangkat Anda.
            </p>
          ),
        },
        {
          title: "Cara kalkulator bekerja",
          content: (
            <>
              <p>
                Perhitungan tanggal wafat, hari selamatan, dan Pasaran Jawa
                berlangsung di peramban. Fungsi utama kalkulator tidak
                memerlukan akun, cookie pemasaran, atau penyimpanan masukan
                tanggal di server kami.
              </p>
              <p>
                Memuat ulang halaman atau menutup tab akan mengakhiri sesi
                hitungan yang sedang digunakan. Anda sebaiknya tetap tidak
                memasukkan informasi pribadi yang tidak diperlukan.
              </p>
            </>
          ),
        },
        {
          title: "Cookie yang penting untuk layanan",
          content: (
            <p>
              Penyedia hosting, jaringan, atau keamanan dapat menggunakan
              cookie dan penanda teknis yang diperlukan untuk mengirim halaman,
              mencegah penyalahgunaan, membatasi lalu lintas berbahaya, dan
              menjaga situs tetap tersedia. Teknologi ini digunakan untuk
              menjalankan layanan, bukan untuk mengubah hasil kalkulator.
            </p>
          ),
        },
        {
          title: "Formulir dan layanan pihak ketiga",
          content: (
            <p>
              Formulir kontak dan langganan dikirim melalui FormSubmit.
              Saat Anda memilih untuk mengirim formulir, layanan tersebut dapat
              menjalankan pemeriksaan keamanan atau anti-spam dan memproses data
              sesuai kebijakannya. Informasi formulir tidak dikirim sebelum
              Anda menekan tombol kirim.
            </p>
          ),
        },
        {
          title: "Analitik dan periklanan",
          content: (
            <p>
              Saat kebijakan ini diterbitkan, fungsi kalkulator tidak bergantung
              pada cookie analitik atau cookie iklan. Jika di kemudian hari kami
              menambahkan teknologi yang tidak penting untuk fungsi dasar,
              halaman ini akan diperbarui dan pilihan persetujuan akan
              ditampilkan apabila diwajibkan.
            </p>
          ),
        },
        {
          title: "Mengelola cookie di peramban",
          content: (
            <>
              <p>
                Sebagian besar peramban memungkinkan Anda melihat, menghapus,
                atau memblokir cookie melalui menu privasi dan keamanan. Anda
                juga dapat menghapus data situs setelah selesai menggunakan
                layanan.
              </p>
              <p>
                Memblokir seluruh cookie dapat memengaruhi pemeriksaan keamanan
                atau pengiriman formulir, tetapi seharusnya tidak menghalangi
                hitungan utama. Nama menu dan langkah pengaturan berbeda pada
                setiap peramban.
              </p>
            </>
          ),
        },
        {
          title: "Pembaruan dan pertanyaan",
          content: (
            <p>
              Kebijakan ini dapat berubah jika fitur atau penyedia layanan
              berubah. Pertanyaan mengenai cookie dapat dikirim melalui halaman
              Hubungi Kami atau ke{" "}
              <a href="mailto:halo@kalkulatorselamatanorangmeninggal.pro">
                halo@kalkulatorselamatanorangmeninggal.pro
              </a>
              .
            </p>
          ),
        },
      ]}
    />
  );
}
