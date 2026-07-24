import type { Metadata } from "next";

import { PolicyPage } from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Kebijakan Privasi | Kalkulator Selamatan",
  description:
    "Pelajari data yang diproses saat menggunakan Kalkulator Selamatan, cara formulir kontak bekerja, dan pilihan privasi Anda.",
  alternates: {
    canonical:
      "https://kalkulatorselamatanorangmeninggal.pro/kebijakan-privasi/",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <PolicyPage
      title="Kebijakan Privasi"
      introduction="Halaman ini menjelaskan dengan bahasa sederhana data apa yang digunakan, kapan data dikirim, dan bagaimana Anda dapat menjaga privasi saat memakai situs."
      updated="24 Juli 2026"
      summary="Hitungan tanggal berlangsung di perangkat Anda. Data baru dikirim keluar ketika Anda sendiri mengirim formulir kontak atau berlangganan pembaruan."
      sections={[
        {
          title: "Data pada kalkulator",
          content: (
            <>
              <p>
                Tanggal wafat, nama almarhum atau almarhumah, dan pilihan metode
                yang Anda masukkan dipakai untuk menampilkan hasil hitungan di
                peramban. Situs ini tidak meminta akun dan tidak mengirim
                masukan kalkulator tersebut melalui formulir kontak.
              </p>
              <p>
                Karena hasil dibuat langsung saat halaman digunakan, Anda dapat
                mengosongkan masukan dengan memuat ulang halaman atau menutup
                tab. Hindari memasukkan informasi pribadi yang tidak diperlukan
                untuk memperoleh hasil.
              </p>
            </>
          ),
        },
        {
          title: "Formulir kontak dan langganan",
          content: (
            <>
              <p>
                Jika Anda mengirim pesan, nama, alamat email, dan isi pesan akan
                dikirim melalui layanan FormSubmit menuju alamat email kami.
                Data tersebut digunakan untuk membaca pertanyaan, menanggapi
                masukan, atau memeriksa koreksi yang Anda sampaikan.
              </p>
              <p>
                Jika Anda memasukkan email pada formulir langganan, alamat itu
                dikirim untuk mencatat permintaan pembaruan. Jangan mengirim
                data sensitif, dokumen identitas, informasi kesehatan, atau
                informasi rahasia keluarga melalui formulir.
              </p>
            </>
          ),
        },
        {
          title: "Data teknis",
          content: (
            <p>
              Penyedia hosting dan jaringan dapat mencatat informasi teknis
              dasar seperti alamat IP, jenis peramban, waktu akses, dan halaman
              yang diminta untuk keamanan, pencegahan penyalahgunaan, serta
              menjaga layanan tetap tersedia. Catatan teknis tersebut dikelola
              sesuai kebijakan penyedia terkait.
            </p>
          ),
        },
        {
          title: "Cookie dan penyimpanan peramban",
          content: (
            <p>
              Kalkulator tidak memerlukan cookie untuk melakukan hitungan.
              Namun, penyedia infrastruktur atau layanan formulir dapat memakai
              teknologi keamanan yang diperlukan untuk mengirim permintaan dan
              mencegah spam. Pengaturan cookie dapat dikelola melalui peramban
              Anda.
            </p>
          ),
        },
        {
          title: "Penyimpanan, keamanan, dan pihak lain",
          content: (
            <>
              <p>
                Pesan yang masuk dapat tersimpan di kotak email selama masih
                diperlukan untuk menanggapi atau mencatat percakapan. Kami
                berupaya membatasi akses, tetapi pengiriman data melalui
                internet tidak pernah bebas risiko sepenuhnya.
              </p>
              <p>
                Tautan menuju situs lain berada di luar pengelolaan kami.
                Sebelum memberikan informasi pada layanan lain, baca kebijakan
                privasinya terlebih dahulu.
              </p>
            </>
          ),
        },
        {
          title: "Pilihan dan pertanyaan Anda",
          content: (
            <p>
              Anda dapat meminta koreksi atau penghapusan pesan yang pernah
              dikirim dengan menghubungi{" "}
              <a href="mailto:halo@kalkulatorselamatanorangmeninggal.pro">
                halo@kalkulatorselamatanorangmeninggal.pro
              </a>
              . Jelaskan alamat email yang digunakan dan konteks pesannya agar
              permintaan dapat ditemukan. Kami dapat meminta verifikasi yang
              wajar sebelum memprosesnya.
            </p>
          ),
        },
        {
          title: "Perubahan kebijakan",
          content: (
            <p>
              Kebijakan ini dapat diperbarui ketika fitur, penyedia layanan,
              atau cara pengelolaan data berubah. Tanggal pembaruan terbaru akan
              selalu ditampilkan di bagian atas halaman ini.
            </p>
          ),
        },
      ]}
    />
  );
}
