import type { Metadata } from "next";

import { PolicyPage } from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Penafian | Kalkulator Selamatan",
  description:
    "Pahami batas hasil Kalkulator Selamatan, perbedaan tradisi, perkiraan Pendhak, dan pentingnya memeriksa kembali tanggal.",
  alternates: {
    canonical: "https://kalkulatorselamatanorangmeninggal.pro/penafian/",
  },
};

export default function DisclaimerPage() {
  return (
    <PolicyPage
      title="Penafian"
      introduction="Kalkulator ini membantu menyusun hitungan tanggal, tetapi tidak menggantikan kesepakatan keluarga, kalender Jawa yang tepercaya, atau nasihat tokoh setempat."
      updated="24 Juli 2026"
      summary="Hasil bersifat informatif. Periksa kembali tanggal sebelum menjadikannya dasar undangan, pemesanan, perjalanan, atau keputusan penting lainnya."
      sections={[
        {
          title: "Alat bantu informasi",
          content: (
            <p>
              Seluruh hasil, tabel, dan penjelasan di situs disediakan sebagai
              bantuan praktis. Informasi tersebut bukan keputusan agama, nasihat
              hukum, atau penetapan adat yang wajib diikuti. Situs ini juga
              tidak memprediksi waktu kematian atau peristiwa lain.
            </p>
          ),
        },
        {
          title: "Tradisi dapat berbeda",
          content: (
            <>
              <p>
                Cara menghitung selamatan tidak selalu sama. Sebagian keluarga
                menjadikan tanggal wafat sebagai hari pertama, sedangkan yang
                lain mulai menghitung pada hari berikutnya. Peristiwa setelah
                Maghrib juga dapat diperlakukan berbeda menurut kebiasaan
                setempat.
              </p>
              <p>
                Jika hasil situs berbeda dengan pedoman keluarga, kalender
                lokal, sesepuh, atau tokoh agama yang dipercaya, bicarakan dan
                gunakan rujukan yang disepakati keluarga.
              </p>
            </>
          ),
        },
        {
          title: "Ketepatan tanggal dan Pasaran",
          content: (
            <p>
              Kami berusaha menjaga rumus dan acuan Pasaran tetap konsisten,
              tetapi kesalahan masukan, gangguan perangkat, perubahan kode, atau
              perbedaan acuan kalender tetap mungkin terjadi. Pastikan tanggal
              wafat dan metode hitung sudah benar, lalu bandingkan hasil dengan
              kalender lain sebelum dipakai.
            </p>
          ),
        },
        {
          title: "Pendhak adalah perkiraan",
          content: (
            <p>
              Pendhak Pisan dan Pendhak Pindho berkaitan dengan tahun Jawa yang
              mengikuti siklus lunar. Karena panjangnya tidak sama dengan tahun
              Gregorian, kalkulator menampilkan pendekatan 354 dan 708 hari.
              Hasil ini perlu dicocokkan dengan kalender Jawa atau rujukan
              setempat untuk menentukan tanggal yang akan digunakan.
            </p>
          ),
        },
        {
          title: "Keputusan dan biaya",
          content: (
            <p>
              Jangan menjadikan hasil otomatis sebagai satu-satunya dasar untuk
              mencetak undangan, memesan tempat, membeli perlengkapan, mengatur
              perjalanan, atau mengeluarkan biaya. Pemeriksaan akhir berada pada
              pengguna. Kami tidak bertanggung jawab atas kerugian yang timbul
              dari penggunaan hasil tanpa verifikasi yang memadai, sejauh
              diizinkan oleh hukum.
            </p>
          ),
        },
        {
          title: "Tautan dan layanan pihak ketiga",
          content: (
            <p>
              Situs dapat memakai atau menautkan layanan pihak ketiga, termasuk
              penyedia hosting dan pengiriman formulir. Ketersediaan, keamanan,
              serta isi layanan tersebut berada di bawah pengelolaan
              penyedianya. Tautan tidak selalu berarti kami menyetujui seluruh
              isi situs tujuan.
            </p>
          ),
        },
        {
          title: "Laporkan kekeliruan",
          content: (
            <p>
              Jika Anda menemukan hasil yang tampak keliru, kirim tanggal
              masukan, metode yang dipilih, hasil yang muncul, dan rujukan
              pembanding melalui halaman Hubungi Kami atau email{" "}
              <a href="mailto:halo@kalkulatorselamatanorangmeninggal.pro">
                halo@kalkulatorselamatanorangmeninggal.pro
              </a>
              . Jangan sertakan informasi pribadi yang tidak diperlukan.
            </p>
          ),
        },
      ]}
    />
  );
}
