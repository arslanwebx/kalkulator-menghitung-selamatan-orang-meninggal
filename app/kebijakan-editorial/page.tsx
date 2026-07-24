import type { Metadata } from "next";

import { PolicyPage } from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Kebijakan Editorial | Kalkulator Selamatan",
  description:
    "Pelajari cara Kalkulator Selamatan menyusun, memeriksa, memperbarui, dan mengoreksi panduan hitungan tradisi Jawa.",
  alternates: {
    canonical:
      "https://kalkulatorselamatanorangmeninggal.pro/kebijakan-editorial/",
  },
};

export default function EditorialPolicyPage() {
  return (
    <PolicyPage
      title="Kebijakan Editorial"
      introduction="Kami ingin setiap penjelasan mudah dipahami, rumus dapat diperiksa, dan perbedaan tradisi disampaikan secara jujur."
      updated="24 Juli 2026"
      summary="Konten ditulis untuk membantu pengguna memahami hitungan, bukan untuk menetapkan satu kebiasaan sebagai aturan bagi semua keluarga."
      sections={[
        {
          title: "Tujuan penerbitan",
          content: (
            <p>
              Kalkulator Selamatan menerbitkan alat dan penjelasan praktis
              tentang perhitungan hari selamatan serta Pasaran Jawa. Prioritas
              kami adalah kejelasan, kegunaan, dan keterbukaan mengenai cara
              hasil diperoleh. Kami menghindari judul sensasional, janji yang
              berlebihan, dan tulisan yang hanya dibuat untuk memenuhi kata
              kunci pencarian.
            </p>
          ),
        },
        {
          title: "Cara konten disusun",
          content: (
            <>
              <p>
                Penjelasan dimulai dari kebutuhan nyata pengguna: menentukan
                tanggal, memahami apakah hari wafat dihitung sebagai hari
                pertama, dan membaca pasangan hari serta Pasaran. Rumus penting
                ditampilkan agar hasil tidak menjadi angka tanpa dasar.
              </p>
              <p>
                Bahasa Indonesia yang sederhana dipilih agar dapat digunakan di
                ponsel dan dipahami tanpa pengetahuan teknis. Istilah Jawa tetap
                dipertahankan ketika diperlukan, lalu dijelaskan melalui konteks
                atau contoh.
              </p>
            </>
          ),
        },
        {
          title: "Pemeriksaan hitungan",
          content: (
            <p>
              Logika tanggal diuji dengan tanggal acuan dan beberapa rentang
              waktu. Hitungan inklusif diperiksa dengan prinsip bahwa tanggal
              wafat adalah hari pertama, sehingga hari ke-N diperoleh dengan
              menambahkan N−1 hari. Hasil Pasaran diperiksa terhadap acuan
              kalender yang digunakan oleh situs.
            </p>
          ),
        },
        {
          title: "Menghormati keragaman tradisi",
          content: (
            <p>
              Kebiasaan keluarga dan daerah dapat berbeda, termasuk awal
              hitungan serta perlakuan terhadap peristiwa setelah Maghrib. Kami
              tidak menyatakan satu metode berlaku mutlak. Ketika terdapat
              variasi yang bermakna, konten harus menjelaskannya dan mendorong
              pengguna mencocokkan hasil dengan keluarga atau tokoh setempat.
            </p>
          ),
        },
        {
          title: "Ketidakpastian dan perkiraan",
          content: (
            <p>
              Informasi yang tidak dapat dinyatakan sebagai tanggal pasti harus
              diberi keterangan yang jelas. Pendhak, misalnya, ditampilkan
              sebagai perkiraan karena tahun Jawa bersifat lunar dan tidak sama
              panjang dengan tahun Gregorian. Kami tidak menyamarkan perkiraan
              sebagai kepastian.
            </p>
          ),
        },
        {
          title: "Pembaruan dan koreksi",
          content: (
            <>
              <p>
                Isi ditinjau ketika rumus, fitur, atau informasi pendukung
                berubah. Kesalahan yang dapat memengaruhi hasil akan
                diprioritaskan untuk diperbaiki. Perubahan kecil pada ejaan atau
                tampilan dapat dilakukan tanpa catatan khusus.
              </p>
              <p>
                Laporan koreksi sebaiknya menyertakan tanggal masukan, metode,
                hasil yang muncul, hasil pembanding, dan sumber pembanding jika
                tersedia. Identitas pengirim tidak akan dicantumkan tanpa izin.
              </p>
            </>
          ),
        },
        {
          title: "Independensi dan kepentingan komersial",
          content: (
            <p>
              Isi panduan dan hasil kalkulator tidak boleh diubah untuk
              menyenangkan pengiklan, sponsor, atau penyedia layanan. Jika suatu
              hari ada kerja sama berbayar atau tautan afiliasi, hubungannya
              harus diberi label yang mudah terlihat dan tidak boleh
              memengaruhi rumus perhitungan.
            </p>
          ),
        },
        {
          title: "Kirim masukan",
          content: (
            <p>
              Koreksi, pertanyaan, dan saran bahasa dapat dikirim melalui
              halaman Hubungi Kami atau email{" "}
              <a href="mailto:halo@kalkulatorselamatanorangmeninggal.pro">
                halo@kalkulatorselamatanorangmeninggal.pro
              </a>
              . Setiap masukan akan dinilai berdasarkan bukti dan manfaatnya
              bagi pengguna.
            </p>
          ),
        },
      ]}
    />
  );
}
