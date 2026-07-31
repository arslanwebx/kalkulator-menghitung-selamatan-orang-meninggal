export const siteUrl = "https://kalkulatorselamatanorangmeninggal.pro";

export const rizkyPratama = {
  id: "rizky-pratama",
  name: "Rizky Pratama",
  role: "Penulis & Peneliti Tradisi Jawa",
  profilePath: "/penulis/rizky-pratama/",
  imagePath: "/images/rizky-pratama.webp",
  shortBio:
    "Rizky menulis panduan praktis tentang tradisi Jawa dan perhitungan hari selamatan dengan bahasa yang mudah diperiksa. Ia membandingkan rumus, acuan kalender, dan variasi kebiasaan keluarga sebelum menyusun penjelasan.",
  expertise: [
    "Tradisi Jawa",
    "Perhitungan hari selamatan",
    "Budaya Indonesia",
    "Kalender Jawa",
    "Konten edukasi",
  ],
  articles: [
    {
      title: "Tabel Hitungan Orang Meninggal Lengkap",
      description:
        "Tabel tahapan selamatan Jawa, istilah, hari ke-, dan tambahan hari dengan metode inklusif.",
      path: "/tabel-hitungan-orang-meninggal/",
      imagePath: "/images/tabel-hitungan-orang-meninggal.webp",
      imageAlt:
        "Tabel hitungan orang meninggal lengkap dengan tahapan selamatan Jawa",
    },
    {
      title: "Cara Menghitung 7 Hari Orang Meninggal (Mitung Dina)",
      description:
        "Panduan menghitung Mitung Dina dengan metode inklusif, rumus tambah 6 hari, dan contoh tanggal.",
      path: "/panduan/cara-menghitung-7-hari-orang-meninggal/",
      imagePath: "/images/cara-menghitung-7-hari-orang-meninggal.webp",
      imageAlt: "Kalender Mitung Dina untuk menghitung hari ke-7",
    },
    {
      title: "Kalkulator Menghitung Selamatan Orang Meninggal",
      description:
        "Panduan dan kalkulator untuk menghitung jadwal 3, 7, 40, 100, Pendhak, dan 1000 hari beserta Pasaran Jawa.",
      path: "/",
      imagePath: "/og-image.svg",
      imageAlt: "Kalkulator Selamatan dengan Pasaran Jawa",
    },
  ],
} as const;

export type SiteAuthor = typeof rizkyPratama;

export function getAuthorUrl(author: SiteAuthor = rizkyPratama) {
  return `${siteUrl}${author.profilePath}`;
}

export function getAuthorImageUrl(author: SiteAuthor = rizkyPratama) {
  return `${siteUrl}${author.imagePath}`;
}

export function createPersonSchema(author: SiteAuthor = rizkyPratama) {
  const url = getAuthorUrl(author);

  return {
    "@type": "Person",
    "@id": `${url}#person`,
    name: author.name,
    url,
    image: {
      "@type": "ImageObject",
      url: getAuthorImageUrl(author),
      width: 800,
      height: 800,
    },
    jobTitle: author.role,
    description: author.shortBio,
    knowsAbout: [...author.expertise],
  };
}

type ArticleSchemaInput = {
  headline: string;
  description: string;
  url: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
};

export function createArticleNode({
  headline,
  description,
  url,
  image,
  datePublished,
  dateModified,
}: ArticleSchemaInput) {
  return {
    "@type": "Article",
    headline,
    description,
    url,
    mainEntityOfPage: url,
    inLanguage: "id-ID",
    author: {
      "@id": `${getAuthorUrl()}#person`,
    },
    publisher: {
      "@type": "Organization",
      name: "Kalkulator Selamatan",
      url: `${siteUrl}/`,
    },
    ...(image ? { image } : {}),
    ...(datePublished ? { datePublished } : {}),
    ...(dateModified ? { dateModified } : {}),
  };
}

export function createArticleSchema(input: ArticleSchemaInput) {
  return {
    "@context": "https://schema.org",
    ...createArticleNode(input),
  };
}
