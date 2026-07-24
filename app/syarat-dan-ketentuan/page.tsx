import type { Metadata } from "next";

import { PolicyPage } from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Syarat dan Ketentuan | Kalkulator Selamatan",
  description:
    "Baca ketentuan penggunaan Kalkulator Selamatan, tanggung jawab pengguna, hak atas konten, dan batas penggunaan layanan.",
  alternates: {
    canonical:
      "https://kalkulatorselamatanorangmeninggal.pro/syarat-dan-ketentuan/",
  },
};

export default function TermsPage() {
  return (
    <PolicyPage
      title="Syarat dan Ketentuan"
      introduction="Ketentuan ini dibuat agar tujuan dan batas penggunaan Kalkulator Selamatan mudah dipahami sebelum Anda memakai hasilnya."
      updated="24 Juli 2026"
      summary="Situs ini adalah alat bantu hitung. Gunakan hasil sebagai rujukan awal dan cocokkan keputusan akhir dengan kebiasaan keluarga atau sumber yang dipercaya."
      sections={[
        {
          title: "Persetujuan penggunaan",
          content: (
            <p>
              Dengan membuka atau memakai situs ini, Anda menyetujui ketentuan
              pada halaman ini. Jika tidak setuju, Anda dapat berhenti
              menggunakan situs. Layanan ditujukan untuk penggunaan yang sah
              dan wajar.
            </p>
          ),
        },
        {
          title: "Fungsi layanan",
          content: (
            <>
              <p>
                Kalkulator mengolah tanggal yang dimasukkan menjadi jadwal
                selamatan seperti 3, 7, 40, 100, dan 1000 hari. Hasil dapat
                memuat nama hari serta Pasaran Jawa berdasarkan metode yang
                tersedia.
              </p>
              <p>
                Situs tidak menentukan kewajiban adat atau agama. Perbedaan
                cara menghitung dapat terjadi antar keluarga, daerah, kalender,
                dan rujukan. Anda bertanggung jawab memeriksa apakah metode yang
                dipilih sesuai dengan kebutuhan.
              </p>
            </>
          ),
        },
        {
          title: "Penggunaan yang diperbolehkan",
          content: (
            <>
              <p>
                Anda boleh memakai kalkulator untuk kebutuhan pribadi, keluarga,
                pendidikan, atau membantu menjelaskan proses hitungan, selama
                penggunaannya tidak menyesatkan dan tidak merugikan pihak lain.
              </p>
              <p>
                Anda tidak boleh mengganggu keamanan situs, mengirim spam,
                mencoba mengakses sistem tanpa izin, menjalankan permintaan
                otomatis secara berlebihan, atau memakai situs untuk kegiatan
                yang melanggar hukum.
              </p>
            </>
          ),
        },
        {
          title: "Isi pesan pengguna",
          content: (
            <p>
              Anda bertanggung jawab atas pesan yang dikirim melalui halaman
              kontak. Jangan mengirim materi ilegal, mengancam, melanggar hak
              orang lain, atau memuat data pribadi pihak lain tanpa izin. Masukan
              dan koreksi boleh kami gunakan untuk memperbaiki isi serta fungsi
              situs tanpa menampilkan identitas pengirim.
            </p>
          ),
        },
        {
          title: "Konten dan penggunaan kembali",
          content: (
            <p>
              Desain, tulisan, susunan halaman, dan elemen merek pada situs ini
              dilindungi oleh hak yang berlaku. Anda boleh membagikan tautan dan
              menyebut hasil hitungan untuk penggunaan wajar. Menyalin seluruh
              situs, menghapus atribusi, atau menerbitkannya kembali sebagai
              layanan lain memerlukan izin tertulis.
            </p>
          ),
        },
        {
          title: "Ketersediaan dan perubahan layanan",
          content: (
            <p>
              Kami dapat memperbaiki rumus, mengubah tampilan, menambah atau
              menghapus fitur, maupun menghentikan layanan jika diperlukan.
              Situs mungkin tidak tersedia sementara karena pemeliharaan,
              gangguan jaringan, atau keadaan di luar kendali kami.
            </p>
          ),
        },
        {
          title: "Batas tanggung jawab",
          content: (
            <p>
              Kami berusaha menyajikan alat yang jelas dan dapat diperiksa,
              tetapi tidak menjamin setiap hasil cocok dengan seluruh tradisi
              setempat. Sejauh diizinkan hukum, keputusan dan akibat dari
              penggunaan hasil tetap menjadi tanggung jawab pengguna. Penjelasan
              lebih lengkap tersedia pada halaman Penafian.
            </p>
          ),
        },
        {
          title: "Perubahan ketentuan dan kontak",
          content: (
            <p>
              Ketentuan dapat diperbarui agar sesuai dengan perubahan layanan.
              Penggunaan situs setelah pembaruan berarti Anda menerima versi
              terbaru. Pertanyaan dapat dikirim ke{" "}
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
