import Link from "next/link";

import { Logo } from "@/components/Logo";

type SiteFooterProps = {
  homePage?: boolean;
};

export function SiteFooter({ homePage = false }: SiteFooterProps) {
  const anchor = (id: string) => (homePage ? `#${id}` : `/#${id}`);

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <Link href="/" className="brand-link" aria-label="Kalkulator Selamatan, beranda">
            <Logo />
          </Link>
          <p>
            Alat bantu menghitung jadwal selamatan, hari, dan Pasaran Jawa
            langsung di perangkat Anda.
          </p>
        </div>
        <nav aria-label="Navigasi footer">
          <Link href={anchor("kalkulator")}>Kalkulator</Link>
          <Link href={anchor("tabel-hitungan")}>Tabel Hitungan</Link>
          <Link href={anchor("faq")}>FAQ</Link>
          <Link href="/tentang-kami/">Tentang Kami</Link>
          <Link href="/hubungi-kami/">Hubungi Kami</Link>
        </nav>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Kalkulator Selamatan</span>
        <span>kalkulatorselamatanorangmeninggal.pro</span>
      </div>
    </footer>
  );
}
