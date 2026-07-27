SYSTEM/TASK: Store content strategy — do not write articles yet.

Create a file at the root of this repo named `CONTENT-STRATEGY.md` and save the full content strategy below into it, exactly as provided, with no summarizing, shortening, or reformatting. This file is our persistent reference for the "Kalkulator Selamatan Orang Meninggal" blog cluster (kalkulatorselamatanorangmeninggal.pro).

After saving the file, do the following and nothing else:
1. Confirm the file was created and its path.
2. Output a simple checklist of all 50 article slugs from the strategy, grouped by cluster, with a status column set to "Not started" for every row.
3. Do NOT generate, draft, or write any article content in this session.
4. Do NOT create any files under /panduan/ yet.

In future sessions, when I say "write article #[N]" or "write [slug]", read `CONTENT-STRATEGY.md`, pull that entry's Title/Meta/Slug/H1/H2 outline/Schema/Link-to fields, and write only that one article following the Universal Template rules in the same file (900–1,400 words, people-first, Indonesian, author Rizky Pratama, correct schema types, internal links to the specified cluster articles and pillar page). Update the status of that row to "Done" in CONTENT-STRATEGY.md after writing it.

# On-Page SEO Template — 50 Artikel Topical Authority
**Site:** kalkulatorselamatanorangmeninggal.pro
**Pillar page:** `/` (Kalkulator Menghitung Selamatan Orang Meninggal)
**Struktur URL cluster:** `/panduan/[slug]/`

---

## 0. TEMPLATE UNIVERSAL (berlaku untuk semua 50 artikel)

**Title formula:** `[Primary Keyword] — [Angle/Benefit] | Kalkulator Selamatan` (maks 60 karakter)
**Meta formula:** `[Jawaban langsung 1 kalimat]. [Detail pendukung]. [CTA ke kalkulator].` (maks 155 karakter)
**URL formula:** `/panduan/[primary-keyword-slug]/`
**H1 formula:** Match search intent persis dengan primary keyword, natural phrasing.

**Struktur H2 standar (sesuaikan per artikel):**
1. H2: Jawaban singkat / definisi (untuk featured snippet — 40–60 kata di awal)
2. H2: Cara / langkah-langkah (numbered list jika prosedural)
3. H2: Contoh perhitungan atau ilustrasi konkret
4. H2: Variasi/perbedaan menurut daerah atau keluarga (E-E-A-T signal)
5. H2: Kesalahan umum atau hal yang perlu diperhatikan
6. H2: Pertanyaan Umum (FAQ, 3–5 pertanyaan, jadi FAQPage schema)
7. H2: CTA — link ke kalkulator utama

**Schema wajib per artikel:**
- `Article` (headline, datePublished, dateModified, author: Rizky Pratama, publisher: Kalkulator Selamatan)
- `FAQPage` (dari section FAQ)
- `BreadcrumbList` (Beranda > Panduan > Judul Artikel)
- `HowTo` tambahan HANYA untuk artikel prosedural bertahap (ditandai 🔧 di bawah)

**Internal linking wajib:**
- 1 link ke pillar page kalkulator (anchor: variasi "kalkulator selamatan online")
- 2–3 link ke artikel cluster terkait (lihat kolom "Link ke" tiap entri)
- Semua link internal pakai URL kanonik, tanpa parameter

**Word count target:** 900–1.400 kata (people-first, no filler, sesuai checklist E-E-A-T yang sudah ditetapkan)

**Author attribution:** Rizky Pratama, Penulis & Peneliti Tradisi Jawa (byline + link ke halaman penulis di setiap artikel)

---

## CLUSTER 1 — Core Calculation & Metode

### 1. cara menghitung 7 hari orang meninggal 🔧
- **Title:** Cara Menghitung 7 Hari Orang Meninggal (Mitung Dina) | Kalkulator Selamatan
- **Meta:** Cara menghitung 7 hari kematian dengan metode inklusif dan contoh tanggal nyata. Cek otomatis dengan kalkulator selamatan.
- **Slug:** /panduan/cara-menghitung-7-hari-orang-meninggal/
- **H1:** Cara Menghitung 7 Hari Orang Meninggal (Mitung Dina)
- **H2:** Apa itu Mitung Dina · Rumus hari ke-7 (tambah 6 hari) · Contoh perhitungan tanggal · Perbedaan metode inklusif/eksklusif · Kesalahan umum · FAQ
- **Schema:** Article, FAQPage, HowTo
- **Link ke:** #4 (rumus hari ke-40), #21 (urutan lengkap selamatan), #45 (kesalahan umum)

### 2. cara menghitung 100 hari orang meninggal 🔧
- **Title:** Cara Menghitung 100 Hari Orang Meninggal (Nyatus) | Kalkulator Selamatan
- **Meta:** Panduan menghitung hari ke-100 kematian (Nyatus) dengan metode inklusif plus contoh tanggal lengkap dan Pasaran Jawa.
- **Slug:** /panduan/cara-menghitung-100-hari-orang-meninggal/
- **H1:** Cara Menghitung 100 Hari Orang Meninggal (Nyatus)
- **H2:** Apa itu Nyatus · Rumus hari ke-100 (tambah 99 hari) · Contoh tanggal · Kaitan dengan Pasaran Jawa · FAQ
- **Schema:** Article, FAQPage, HowTo
- **Link ke:** #22 (arti nyatus), #10 (contoh manual), #16 (pasaran jawa)

### 3. cara menghitung 1000 hari kematian 🔧
- **Title:** Cara Menghitung 1000 Hari Kematian (Nyewu) | Kalkulator Selamatan
- **Meta:** Rumus dan contoh menghitung 1000 hari (Nyewu) dari tanggal wafat, termasuk cara menghindari salah tambah 1 hari.
- **Slug:** /panduan/cara-menghitung-1000-hari-kematian/
- **H1:** Cara Menghitung 1000 Hari Kematian (Nyewu)
- **H2:** Apa itu Nyewu · Rumus hari ke-1000 (tambah 999 hari) · Contoh tanggal lengkap · Mengapa orang salah hitung 999 vs 1000 · FAQ
- **Schema:** Article, FAQPage, HowTo
- **Link ke:** #45 (kesalahan umum), #22 (istilah nyewu), pillar page

### 4. perbedaan metode inklusif dan eksklusif menghitung selamatan
- **Title:** Metode Inklusif vs Eksklusif Menghitung Selamatan, Apa Bedanya?
- **Meta:** Penjelasan perbedaan metode inklusif dan eksklusif dalam menghitung hari selamatan beserta dampaknya pada jadwal.
- **Slug:** /panduan/metode-inklusif-eksklusif-selamatan/
- **H1:** Perbedaan Metode Inklusif dan Eksklusif Menghitung Selamatan
- **H2:** Definisi kedua metode · Contoh perbandingan sisi-sisi · Mengapa keluarga bisa beda hasil · Metode mana yang dipakai kalkulator · FAQ
- **Schema:** Article, FAQPage
- **Link ke:** #41 (kenapa hari selamatan berbeda), #1, #2

### 5. cara menghitung weton orang meninggal 🔧
- **Title:** Cara Menghitung Weton Orang Meninggal dari Tanggal Wafat
- **Meta:** Cara mencari weton kematian dari tanggal wafat dengan siklus hari dan Pasaran Jawa, lengkap contoh perhitungan.
- **Slug:** /panduan/cara-menghitung-weton-orang-meninggal/
- **H1:** Cara Menghitung Weton Orang Meninggal
- **H2:** Apa itu weton · Cara mencari pasaran dari tanggal · Contoh perhitungan · Kegunaan weton dalam selamatan · FAQ
- **Schema:** Article, FAQPage, HowTo
- **Link ke:** #13 (cara mencari weton lahir), #16, #46

### 6. cara menghitung neptu kematian
- **Title:** Cara Menghitung Neptu Kematian dalam Primbon Jawa
- **Meta:** Penjelasan cara menghitung neptu dari hari dan pasaran kematian serta fungsinya dalam tradisi Jawa.
- **Slug:** /panduan/cara-menghitung-neptu-kematian/
- **H1:** Cara Menghitung Neptu Kematian
- **H2:** Apa itu neptu · Nilai neptu hari dan pasaran · Cara menjumlahkan neptu · Penggunaan dalam primbon · FAQ
- **Schema:** Article, FAQPage
- **Link ke:** #15 (apa itu neptu), #11 (pasaran jawa), #5

### 7. rumus menghitung hari ke-40 kematian dengan contoh 🔧
- **Title:** Rumus Menghitung Hari ke-40 Kematian (Matangpuluh) + Contoh
- **Meta:** Rumus hari ke-40 kematian dengan tambahan 39 hari, dilengkapi contoh tanggal nyata dan Pasaran Jawa.
- **Slug:** /panduan/rumus-menghitung-hari-40-kematian/
- **H1:** Rumus Menghitung Hari ke-40 Kematian (Matangpuluh)
- **H2:** Apa itu Matangpuluh · Rumus (tambah 39 hari) · Contoh tanggal · Perbandingan dengan hari ke-7 dan ke-100 · FAQ
- **Schema:** Article, FAQPage, HowTo
- **Link ke:** #23 (arti matangpuluh), #1, #2

### 8. cara menghitung pendhak pisan dan pendhak pindho
- **Title:** Cara Menghitung Pendhak Pisan dan Pendhak Pindho
- **Meta:** Perbedaan cara menghitung Pendhak Pisan dan Pendhak Pindho berdasarkan tahun Jawa, bukan Gregorian.
- **Slug:** /panduan/cara-menghitung-pendhak-pisan-pindho/
- **H1:** Cara Menghitung Pendhak Pisan dan Pendhak Pindho
- **H2:** Apa itu Pendhak · Kenapa bukan 365 hari tepat · Cara menentukan tanggal Pendhak · Contoh kasus · FAQ
- **Schema:** Article, FAQPage
- **Link ke:** #48 (pendhak vs haul), #26, pillar page

### 9. cara menghitung geblag dan nelung dina 🔧
- **Title:** Cara Menghitung Geblag dan Nelung Dina dalam Tradisi Jawa
- **Meta:** Penjelasan Geblag sebagai hari wafat dan cara menghitung Nelung Dina (hari ketiga) dengan metode inklusif.
- **Slug:** /panduan/cara-menghitung-geblag-nelung-dina/
- **H1:** Cara Menghitung Geblag dan Nelung Dina
- **H2:** Apa itu Geblag · Apa itu Nelung Dina · Rumus hari ke-3 · Contoh tanggal · FAQ
- **Schema:** Article, FAQPage, HowTo
- **Link ke:** #22 (istilah lengkap), #1, #4

### 10. contoh perhitungan selamatan manual tanpa kalkulator
- **Title:** Contoh Perhitungan Selamatan Manual Tanpa Kalkulator
- **Meta:** Contoh lengkap menghitung jadwal selamatan 3-7-40-100-1000 hari secara manual dengan kalender biasa.
- **Slug:** /panduan/contoh-perhitungan-selamatan-manual/
- **H1:** Contoh Perhitungan Selamatan Manual Tanpa Kalkulator
- **H2:** Langkah dasar perhitungan manual · Contoh kasus lengkap · Cara cek ulang hasil · Kapan sebaiknya pakai kalkulator · FAQ
- **Schema:** Article, FAQPage, HowTo
- **Link ke:** pillar page, #1–#3, #45

---

## CLUSTER 2 — Pasaran Jawa & Kalender

### 11. apa itu pasaran jawa dan cara menghitungnya
- **Title:** Apa Itu Pasaran Jawa dan Cara Menghitungnya?
- **Meta:** Penjelasan lengkap Pasaran Jawa: Legi, Pahing, Pon, Wage, Kliwon, dan cara menghitungnya dari tanggal Masehi.
- **Slug:** /panduan/apa-itu-pasaran-jawa/
- **H1:** Apa Itu Pasaran Jawa dan Cara Menghitungnya?
- **H2:** Definisi Pasaran Jawa · Lima nama pasaran · Cara menghitung dari tanggal acuan · Fungsi dalam selamatan · FAQ
- **Schema:** Article, FAQPage
- **Link ke:** #12, #16, pillar page

### 12. urutan pasaran jawa legi pahing pon wage kliwon
- **Title:** Urutan Pasaran Jawa: Legi, Pahing, Pon, Wage, Kliwon
- **Meta:** Urutan lengkap lima pasaran Jawa beserta siklus perulangannya setiap lima hari.
- **Slug:** /panduan/urutan-pasaran-jawa/
- **H1:** Urutan Pasaran Jawa: Legi, Pahing, Pon, Wage, Kliwon
- **H2:** Urutan baku 5 pasaran · Siklus 5 hari · Cara mengingat urutan · Contoh dalam kalender · FAQ
- **Schema:** Article, FAQPage
- **Link ke:** #11, #17, #5

### 13. cara mencari weton dari tanggal lahir 🔧
- **Title:** Cara Mencari Weton dari Tanggal Lahir dengan Cepat
- **Meta:** Cara mencari weton dari tanggal lahir menggunakan kombinasi hari dan Pasaran Jawa, lengkap contoh.
- **Slug:** /panduan/cara-mencari-weton-dari-tanggal-lahir/
- **H1:** Cara Mencari Weton dari Tanggal Lahir
- **H2:** Apa itu weton · Langkah mencari weton · Contoh perhitungan · Kegunaan weton di luar selamatan · FAQ
- **Schema:** Article, FAQPage, HowTo
- **Link ke:** #5, #46, #16

### 14. perbedaan kalender jawa dan kalender masehi
- **Title:** Perbedaan Kalender Jawa dan Kalender Masehi
- **Meta:** Perbandingan struktur kalender Jawa dan Masehi serta pengaruhnya pada perhitungan hari selamatan.
- **Slug:** /panduan/perbedaan-kalender-jawa-masehi/
- **H1:** Perbedaan Kalender Jawa dan Kalender Masehi
- **H2:** Struktur kalender Jawa · Struktur kalender Masehi · Titik temu keduanya dalam selamatan · Kenapa Pendhak tidak pas 365 hari · FAQ
- **Schema:** Article, FAQPage
- **Link ke:** #8, #18, #26

### 15. apa itu neptu dalam primbon jawa
- **Title:** Apa Itu Neptu dalam Primbon Jawa?
- **Meta:** Definisi neptu, nilai neptu hari dan pasaran, serta fungsinya dalam primbon Jawa.
- **Slug:** /panduan/apa-itu-neptu-primbon-jawa/
- **H1:** Apa Itu Neptu dalam Primbon Jawa?
- **H2:** Definisi neptu · Tabel nilai neptu hari · Tabel nilai neptu pasaran · Penggunaan umum neptu · FAQ
- **Schema:** Article, FAQPage
- **Link ke:** #6, #47, #11

### 16. siklus 35 hari weton dalam budaya jawa
- **Title:** Siklus 35 Hari Weton dalam Budaya Jawa, Ini Penjelasannya
- **Meta:** Penjelasan kenapa weton berulang setiap 35 hari dari perkalian siklus 7 hari dan 5 pasaran.
- **Slug:** /panduan/siklus-35-hari-weton/
- **H1:** Siklus 35 Hari Weton dalam Budaya Jawa
- **H2:** Kenapa 7×5=35 · Contoh siklus dalam kalender · Kaitan dengan hari selamatan · FAQ
- **Schema:** Article, FAQPage
- **Link ke:** #12, #5, pillar page

### 17. cara membaca kalender jawa untuk acara selamatan
- **Title:** Cara Membaca Kalender Jawa untuk Acara Selamatan
- **Meta:** Panduan membaca kalender Jawa cetak atau digital untuk menentukan tanggal dan pasaran acara selamatan.
- **Slug:** /panduan/cara-membaca-kalender-jawa-selamatan/
- **H1:** Cara Membaca Kalender Jawa untuk Acara Selamatan
- **H2:** Elemen dalam kalender Jawa · Cara membaca hari dan pasaran · Cara membaca wuku · Tips praktis · FAQ
- **Schema:** Article, FAQPage
- **Link ke:** #18, #12, #38

### 18. apa itu wuku dalam penanggalan jawa
- **Title:** Apa Itu Wuku dalam Penanggalan Jawa?
- **Meta:** Penjelasan wuku sebagai siklus 30 minggu dalam penanggalan Jawa dan fungsinya dalam tradisi.
- **Slug:** /panduan/apa-itu-wuku-penanggalan-jawa/
- **H1:** Apa Itu Wuku dalam Penanggalan Jawa?
- **H2:** Definisi wuku · Siklus 30 wuku · Contoh penggunaan · Kaitan wuku dengan selamatan · FAQ
- **Schema:** Article, FAQPage
- **Link ke:** #14, #17, #11

---

## CLUSTER 3 — Istilah & Tradisi Selamatan

### 19. arti selamatan dalam tradisi jawa
- **Title:** Arti Selamatan dalam Tradisi Jawa, Ini Penjelasan Lengkapnya
- **Meta:** Penjelasan makna dan tujuan selamatan dalam tradisi Jawa, termasuk kaitannya dengan kematian.
- **Slug:** /panduan/arti-selamatan-tradisi-jawa/
- **H1:** Arti Selamatan dalam Tradisi Jawa
- **H2:** Definisi selamatan · Jenis-jenis selamatan · Selamatan dalam konteks kematian · Nilai sosial di baliknya · FAQ
- **Schema:** Article, FAQPage
- **Link ke:** #21, #25, #26

### 20. perbedaan selamatan dan tahlilan
- **Title:** Perbedaan Selamatan dan Tahlilan, Sering Dikira Sama
- **Meta:** Penjelasan perbedaan selamatan sebagai tradisi budaya dan tahlilan sebagai praktik keagamaan.
- **Slug:** /panduan/perbedaan-selamatan-dan-tahlilan/
- **H1:** Perbedaan Selamatan dan Tahlilan
- **H2:** Definisi selamatan · Definisi tahlilan · Titik temu keduanya · Kenapa sering dianggap sama · FAQ
- **Schema:** Article, FAQPage
- **Link ke:** #19, #29, #33

### 21. urutan lengkap selamatan kematian jawa dari hari 1 sampai 1000
- **Title:** Urutan Lengkap Selamatan Kematian Jawa: Hari 1–1000
- **Meta:** Daftar lengkap urutan selamatan kematian Jawa dari Geblag hingga Nyewu beserta istilah dan harinya.
- **Slug:** /panduan/urutan-lengkap-selamatan-kematian-jawa/
- **H1:** Urutan Lengkap Selamatan Kematian Jawa dari Hari 1 sampai 1000
- **H2:** Tabel urutan lengkap · Penjelasan tiap tahapan · Variasi antar daerah · FAQ
- **Schema:** Article, FAQPage
- **Link ke:** pillar page, #22, #23, #24

### 22. apa itu nyewu dalam tradisi jawa
- **Title:** Apa Itu Nyewu dalam Tradisi Jawa?
- **Meta:** Penjelasan Nyewu sebagai peringatan hari ke-1000 kematian dan makna di baliknya.
- **Slug:** /panduan/apa-itu-nyewu-tradisi-jawa/
- **H1:** Apa Itu Nyewu dalam Tradisi Jawa?
- **H2:** Definisi Nyewu · Makna filosofis · Perbedaan dengan Pendhak · Praktik umum saat Nyewu · FAQ
- **Schema:** Article, FAQPage
- **Link ke:** #3, #21, #26

### 23. apa itu matangpuluh dan maknanya
- **Title:** Apa Itu Matangpuluh dan Apa Maknanya?
- **Meta:** Penjelasan Matangpuluh sebagai peringatan hari ke-40 kematian dan makna simbolisnya.
- **Slug:** /panduan/apa-itu-matangpuluh/
- **H1:** Apa Itu Matangpuluh dan Maknanya?
- **H2:** Definisi Matangpuluh · Makna simbolis · Praktik umum · Perbedaan antar keluarga · FAQ
- **Schema:** Article, FAQPage
- **Link ke:** #7, #21, #26

### 24. tradisi mitung dina di berbagai daerah jawa
- **Title:** Tradisi Mitung Dina di Berbagai Daerah Jawa
- **Meta:** Perbandingan praktik Mitung Dina (hari ke-7) di Jawa Tengah, Jawa Timur, dan Yogyakarta.
- **Slug:** /panduan/tradisi-mitung-dina-berbagai-daerah/
- **H1:** Tradisi Mitung Dina di Berbagai Daerah Jawa
- **H2:** Apa itu Mitung Dina · Praktik di Jawa Tengah · Praktik di Jawa Timur · Praktik di Yogyakarta · FAQ
- **Schema:** Article, FAQPage
- **Link ke:** #1, #27, #21

### 25. sejarah tradisi selamatan orang meninggal di jawa
- **Title:** Sejarah Tradisi Selamatan Orang Meninggal di Jawa
- **Meta:** Asal-usul dan perkembangan tradisi selamatan kematian di Jawa dari masa ke masa.
- **Slug:** /panduan/sejarah-tradisi-selamatan-jawa/
- **H1:** Sejarah Tradisi Selamatan Orang Meninggal di Jawa
- **H2:** Akar tradisi pra-Islam · Akulturasi dengan Islam · Perkembangan modern · Referensi akademik · FAQ
- **Schema:** Article, FAQPage
- **Link ke:** #19, #28, #26
- **Catatan:** cite sumber Garuda/Kemdikbud yang sudah dipakai di pillar page untuk konsistensi E-E-A-T

### 26. makna filosofis di balik hitungan hari selamatan
- **Title:** Makna Filosofis di Balik Hitungan Hari Selamatan
- **Meta:** Penjelasan makna filosofis tiap tahapan hitungan selamatan dari hari ke-3 hingga ke-1000.
- **Slug:** /panduan/makna-filosofis-hitungan-selamatan/
- **H1:** Makna Filosofis di Balik Hitungan Hari Selamatan
- **H2:** Filosofi angka dalam tradisi Jawa · Makna tiap tahapan · Kaitan dengan proses berduka · FAQ
- **Schema:** Article, FAQPage
- **Link ke:** #19, #22, #23

### 27. perbedaan tradisi selamatan jawa tengah dan jawa timur
- **Title:** Perbedaan Tradisi Selamatan Jawa Tengah dan Jawa Timur
- **Meta:** Perbandingan praktik selamatan kematian antara Jawa Tengah dan Jawa Timur, dari menu hingga waktu.
- **Slug:** /panduan/perbedaan-selamatan-jateng-jatim/
- **H1:** Perbedaan Tradisi Selamatan Jawa Tengah dan Jawa Timur
- **H2:** Persamaan dasar · Perbedaan waktu pelaksanaan · Perbedaan menu dan susunan acara · FAQ
- **Schema:** Article, FAQPage
- **Link ke:** #24, #36, #41

### 28. selamatan kematian menurut pandangan islam jawa
- **Title:** Selamatan Kematian Menurut Pandangan Islam Jawa
- **Meta:** Penjelasan posisi selamatan kematian dalam tradisi Islam Jawa dan perdebatan seputar hukumnya.
- **Slug:** /panduan/selamatan-kematian-pandangan-islam-jawa/
- **H1:** Selamatan Kematian Menurut Pandangan Islam Jawa
- **H2:** Akulturasi Islam dan budaya Jawa · Pandangan yang mendukung · Pandangan yang berbeda · FAQ
- **Schema:** Article, FAQPage
- **Link ke:** #33, #25, #42

---

## CLUSTER 4 — Tahlilan, Yasinan & Praktik Keagamaan

### 29. cara mengadakan tahlilan 7 hari yang benar 🔧
- **Title:** Cara Mengadakan Tahlilan 7 Hari yang Benar
- **Meta:** Panduan praktis mengadakan tahlilan 7 hari, dari susunan acara hingga bacaan yang dibutuhkan.
- **Slug:** /panduan/cara-mengadakan-tahlilan-7-hari/
- **H1:** Cara Mengadakan Tahlilan 7 Hari yang Benar
- **H2:** Persiapan sebelum acara · Susunan acara · Bacaan yang dipakai · Hal yang perlu diperhatikan · FAQ
- **Schema:** Article, FAQPage, HowTo
- **Link ke:** #31, #32, #1

### 30. bacaan yasin dan tahlil untuk selamatan kematian
- **Title:** Bacaan Yasin dan Tahlil untuk Selamatan Kematian
- **Meta:** Penjelasan susunan bacaan Yasin dan tahlil yang umum dipakai saat selamatan kematian.
- **Slug:** /panduan/bacaan-yasin-tahlil-selamatan/
- **H1:** Bacaan Yasin dan Tahlil untuk Selamatan Kematian
- **H2:** Struktur bacaan Yasin · Struktur bacaan tahlil · Urutan umum dalam acara · FAQ
- **Schema:** Article, FAQPage
- **Link ke:** #29, #32, #33

### 31. susunan acara tahlilan 40 hari
- **Title:** Susunan Acara Tahlilan 40 Hari, Contoh Lengkap
- **Meta:** Contoh susunan acara tahlilan 40 hari dari pembukaan hingga penutup beserta estimasi waktu.
- **Slug:** /panduan/susunan-acara-tahlilan-40-hari/
- **H1:** Susunan Acara Tahlilan 40 Hari
- **H2:** Susunan acara langkah demi langkah · Estimasi waktu tiap sesi · Variasi susunan antar daerah · FAQ
- **Schema:** Article, FAQPage, HowTo
- **Link ke:** #7, #35, #38

### 32. doa selamatan orang meninggal lengkap
- **Title:** Doa Selamatan Orang Meninggal Lengkap
- **Meta:** Kumpulan doa yang umum dibaca saat acara selamatan orang meninggal beserta konteks penggunaannya.
- **Slug:** /panduan/doa-selamatan-orang-meninggal/
- **H1:** Doa Selamatan Orang Meninggal Lengkap
- **H2:** Doa pembuka · Doa arwah · Doa penutup · Kapan tiap doa dibaca · FAQ
- **Schema:** Article, FAQPage
- **Link ke:** #30, #29, #37
- **Catatan:** hindari menulis ulang teks Arab panjang tanpa sumber rujukan yang jelas; fokus pada konteks dan urutan

### 33. hukum tahlilan menurut empat mazhab
- **Title:** Hukum Tahlilan Menurut Pandangan Beberapa Mazhab
- **Meta:** Ringkasan pandangan beberapa mazhab dan ormas mengenai hukum tahlilan sebagai tradisi.
- **Slug:** /panduan/hukum-tahlilan-mazhab/
- **H1:** Hukum Tahlilan Menurut Pandangan Beberapa Mazhab
- **H2:** Ringkasan pandangan yang mendukung · Ringkasan pandangan yang berbeda · Konteks sosial di Indonesia · FAQ
- **Schema:** Article, FAQPage
- **Link ke:** #34, #28, #42
- **Catatan:** topik sensitif — sajikan sebagai perbandingan pandangan, bukan klaim benar/salah; cite sumber primer/ormas resmi

### 34. perbedaan tahlilan nu dan muhammadiyah
- **Title:** Perbedaan Pandangan NU dan Muhammadiyah soal Tahlilan
- **Meta:** Ringkasan perbedaan pandangan NU dan Muhammadiyah terhadap praktik tahlilan sebagai tradisi.
- **Slug:** /panduan/perbedaan-tahlilan-nu-muhammadiyah/
- **H1:** Perbedaan Pandangan NU dan Muhammadiyah soal Tahlilan
- **H2:** Posisi NU · Posisi Muhammadiyah · Titik temu di masyarakat · FAQ
- **Schema:** Article, FAQPage
- **Link ke:** #33, #28
- **Catatan:** sama seperti #33, jaga nada netral dan berbasis rujukan resmi kedua ormas

---

## CLUSTER 5 — Persiapan & Etika Acara

### 35. contoh susunan acara selamatan 1000 hari
- **Title:** Contoh Susunan Acara Selamatan 1000 Hari
- **Meta:** Contoh lengkap susunan acara selamatan 1000 hari (Nyewu) dari persiapan hingga penutup.
- **Slug:** /panduan/contoh-susunan-acara-selamatan-1000-hari/
- **H1:** Contoh Susunan Acara Selamatan 1000 Hari
- **H2:** Persiapan sebelum acara · Susunan acara · Perlengkapan yang dibutuhkan · FAQ
- **Schema:** Article, FAQPage, HowTo
- **Link ke:** #3, #22, #37

### 36. daftar menu selamatan kematian tradisional jawa
- **Title:** Daftar Menu Selamatan Kematian Tradisional Jawa
- **Meta:** Daftar menu dan makanan yang umum disajikan saat selamatan kematian dalam tradisi Jawa.
- **Slug:** /panduan/daftar-menu-selamatan-kematian-jawa/
- **H1:** Daftar Menu Selamatan Kematian Tradisional Jawa
- **H2:** Menu wajib dan maknanya · Variasi menu antar daerah · Tips menyiapkan menu · FAQ
- **Schema:** Article, FAQPage
- **Link ke:** #27, #37, #19

### 37. perlengkapan yang dibutuhkan saat selamatan 7 hari
- **Title:** Perlengkapan yang Dibutuhkan Saat Selamatan 7 Hari
- **Meta:** Daftar perlengkapan yang umum disiapkan untuk acara selamatan 7 hari, dari tempat hingga konsumsi.
- **Slug:** /panduan/perlengkapan-selamatan-7-hari/
- **H1:** Perlengkapan yang Dibutuhkan Saat Selamatan 7 Hari
- **H2:** Daftar perlengkapan utama · Perlengkapan tambahan opsional · Tips persiapan H-1 · FAQ
- **Schema:** Article, FAQPage
- **Link ke:** #29, #36, #39

### 38. tata cara undangan selamatan kematian
- **Title:** Tata Cara Undangan Selamatan Kematian
- **Meta:** Panduan menyusun dan menyebarkan undangan selamatan kematian, termasuk waktu yang tepat.
- **Slug:** /panduan/tata-cara-undangan-selamatan-kematian/
- **H1:** Tata Cara Undangan Selamatan Kematian
- **H2:** Waktu ideal menyebar undangan · Format undangan · Undangan digital vs langsung · FAQ
- **Schema:** Article, FAQPage
- **Link ke:** #40, #35, #17

### 39. estimasi biaya mengadakan selamatan 40 hari
- **Title:** Estimasi Biaya Mengadakan Selamatan 40 Hari
- **Meta:** Rincian estimasi biaya selamatan 40 hari, dari konsumsi hingga perlengkapan acara.
- **Slug:** /panduan/estimasi-biaya-selamatan-40-hari/
- **H1:** Estimasi Biaya Mengadakan Selamatan 40 Hari
- **H2:** Komponen biaya utama · Kisaran biaya per komponen · Tips menghemat tanpa mengurangi kekhidmatan · FAQ
- **Schema:** Article, FAQPage
- **Link ke:** #37, #31, #36

### 40. etika bertamu saat menghadiri selamatan
- **Title:** Etika Bertamu Saat Menghadiri Selamatan
- **Meta:** Panduan etika bertamu saat menghadiri acara selamatan kematian, dari pakaian hingga sikap.
- **Slug:** /panduan/etika-bertamu-selamatan/
- **H1:** Etika Bertamu Saat Menghadiri Selamatan
- **H2:** Etika berpakaian · Etika saat acara berlangsung · Hal yang sebaiknya dihindari · FAQ
- **Schema:** Article, FAQPage
- **Link ke:** #38, #19, #29

---

## CLUSTER 6 — Pertanyaan Umum & Kesalahan

### 41. kenapa hari selamatan bisa berbeda antar keluarga
- **Title:** Kenapa Hari Selamatan Bisa Berbeda Antar Keluarga?
- **Meta:** Penjelasan penyebab perbedaan hasil hitungan selamatan antar keluarga, dari metode hingga acuan pasaran.
- **Slug:** /panduan/kenapa-hari-selamatan-berbeda-antar-keluarga/
- **H1:** Kenapa Hari Selamatan Bisa Berbeda Antar Keluarga?
- **H2:** Perbedaan metode inklusif/eksklusif · Perbedaan acuan pasaran · Perbedaan kebiasaan waktu malam · FAQ
- **Schema:** Article, FAQPage
- **Link ke:** #4, #45, pillar page

### 42. apakah selamatan kematian wajib dalam islam
- **Title:** Apakah Selamatan Kematian Wajib dalam Islam?
- **Meta:** Ringkasan pandangan mengenai status selamatan kematian dalam Islam, tradisi budaya vs kewajiban agama.
- **Slug:** /panduan/apakah-selamatan-wajib-dalam-islam/
- **H1:** Apakah Selamatan Kematian Wajib dalam Islam?
- **H2:** Status selamatan sebagai tradisi · Pandangan yang berbeda-beda · Konteks lokal di Indonesia · FAQ
- **Schema:** Article, FAQPage
- **Link ke:** #33, #28, #34

### 43. bolehkah selamatan diundur karena halangan
- **Title:** Bolehkah Selamatan Diundur Karena Halangan?
- **Meta:** Penjelasan praktik menunda selamatan karena halangan keluarga dan bagaimana kebiasaan menyesuaikannya.
- **Slug:** /panduan/bolehkah-selamatan-diundur/
- **H1:** Bolehkah Selamatan Diundur Karena Halangan?
- **H2:** Alasan umum penundaan · Cara menyesuaikan jadwal · Pandangan keluarga vs tradisi setempat · FAQ
- **Schema:** Article, FAQPage
- **Link ke:** #41, #38, pillar page

### 44. cara menghitung selamatan jika tanggal wafat tidak diketahui pasti
- **Title:** Cara Menghitung Selamatan Jika Tanggal Wafat Tidak Pasti
- **Meta:** Solusi praktis menentukan jadwal selamatan saat tanggal wafat pasti tidak diketahui.
- **Slug:** /panduan/selamatan-jika-tanggal-wafat-tidak-pasti/
- **H1:** Cara Menghitung Selamatan Jika Tanggal Wafat Tidak Diketahui Pasti
- **H2:** Situasi umum penyebab · Cara memperkirakan tanggal · Kesepakatan keluarga sebagai acuan · FAQ
- **Schema:** Article, FAQPage
- **Link ke:** pillar page, #41, #45

### 45. kesalahan umum menghitung hari ke-3 dan ke-7 kematian
- **Title:** Kesalahan Umum Menghitung Hari ke-3 dan ke-7 Kematian
- **Meta:** Daftar kesalahan yang paling sering terjadi saat menghitung hari ke-3 dan ke-7 kematian secara manual.
- **Slug:** /panduan/kesalahan-umum-menghitung-hari-3-7/
- **H1:** Kesalahan Umum Menghitung Hari ke-3 dan ke-7 Kematian
- **H2:** Kesalahan menambah hari penuh · Kesalahan mengabaikan pasaran · Cara menghindarinya · FAQ
- **Schema:** Article, FAQPage
- **Link ke:** #1, #9, #4

---

## CLUSTER 7 — Topik Terkait & Internal Linking Bridges

### 46. cara menghitung weton jodoh dari tanggal lahir 🔧
- **Title:** Cara Menghitung Weton Jodoh dari Tanggal Lahir
- **Meta:** Panduan menghitung kecocokan weton jodoh dari tanggal lahir pasangan menggunakan neptu.
- **Slug:** /panduan/cara-menghitung-weton-jodoh/
- **H1:** Cara Menghitung Weton Jodoh dari Tanggal Lahir
- **H2:** Apa itu weton jodoh · Cara menjumlahkan neptu pasangan · Cara membaca hasilnya · FAQ
- **Schema:** Article, FAQPage, HowTo
- **Link ke:** #13, #15, #6

### 47. cara menghitung hari baik pernikahan menurut primbon
- **Title:** Cara Menghitung Hari Baik Pernikahan Menurut Primbon
- **Meta:** Panduan menentukan hari baik pernikahan berdasarkan primbon Jawa dan neptu kedua calon pengantin.
- **Slug:** /panduan/cara-menghitung-hari-baik-pernikahan/
- **H1:** Cara Menghitung Hari Baik Pernikahan Menurut Primbon
- **H2:** Dasar perhitungan primbon · Langkah menentukan hari baik · Contoh kasus · FAQ
- **Schema:** Article, FAQPage, HowTo
- **Link ke:** #46, #15, #11

### 48. perbedaan pendhak dan haul dalam tradisi jawa
- **Title:** Perbedaan Pendhak dan Haul dalam Tradisi Jawa
- **Meta:** Penjelasan perbedaan Pendhak (tahun Jawa) dan haul (peringatan tahunan) dalam tradisi kematian.
- **Slug:** /panduan/perbedaan-pendhak-dan-haul/
- **H1:** Perbedaan Pendhak dan Haul dalam Tradisi Jawa
- **H2:** Definisi Pendhak · Definisi haul · Perbedaan acuan kalender · FAQ
- **Schema:** Article, FAQPage
- **Link ke:** #8, #14, #22

### 49. cara menghitung usia jawa dari tanggal lahir
- **Title:** Cara Menghitung Usia Jawa dari Tanggal Lahir
- **Meta:** Panduan menghitung usia menurut penanggalan Jawa yang berbeda dari usia Masehi biasa.
- **Slug:** /panduan/cara-menghitung-usia-jawa/
- **H1:** Cara Menghitung Usia Jawa dari Tanggal Lahir
- **H2:** Perbedaan usia Jawa dan Masehi · Cara menghitungnya · Contoh kasus · FAQ
- **Schema:** Article, FAQPage, HowTo
- **Link ke:** #14, #18, #13

### 50. cara menghitung hari pasaran untuk acara pindah rumah
- **Title:** Cara Menghitung Hari Pasaran untuk Acara Pindah Rumah
- **Meta:** Panduan memilih hari dan pasaran yang baik untuk acara pindah rumah menurut tradisi Jawa.
- **Slug:** /panduan/hari-pasaran-pindah-rumah/
- **H1:** Cara Menghitung Hari Pasaran untuk Acara Pindah Rumah
- **H2:** Dasar pemilihan hari baik · Cara menghitung pasaran yang cocok · Contoh kasus · FAQ
- **Schema:** Article, FAQPage
- **Link ke:** #11, #16, #17

---

## CATATAN IMPLEMENTASI

- **Prioritas publikasi:** Cluster 1 → Cluster 6 → Cluster 3 → Cluster 4 → Cluster 2 → Cluster 5 → Cluster 7 (sesuai roadmap sebelumnya).
- **Topik sensitif (#33, #34, #42):** posisikan sebagai perbandingan pandangan berbasis rujukan resmi, bukan klaim keagamaan tunggal — penting untuk AdSense compliance dan menghindari YMYL risk.
- **Hub-cluster linking:** setiap artikel wajib link balik ke pillar page (`/`) dan minimal 2 artikel cluster lain agar tidak ada orphan page.
- **Schema konsisten:** author `Rizky Pratama` dan publisher `Kalkulator Selamatan` dipakai di semua 50 artikel agar entity signal konsisten dengan halaman penulis yang sudah ada.
- **Artikel bertanda 🔧:** wajib pakai `HowTo` schema selain `Article` + `FAQPage` karena bersifat prosedural/langkah demi langkah.


[Paste the full contents of onpage-template-50-artikel.md in this spot before running]

--- END CONTENT STRATEGY ---
