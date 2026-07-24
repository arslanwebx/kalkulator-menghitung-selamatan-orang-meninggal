import Link from "next/link";

import { Logo } from "@/components/Logo";

type SiteHeaderProps = {
  homePage?: boolean;
};

export function SiteHeader({ homePage = false }: SiteHeaderProps) {
  const anchor = (id: string) => (homePage ? `#${id}` : `/#${id}`);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand-link" aria-label="Kalkulator Selamatan, beranda">
          <Logo />
        </Link>
        <nav aria-label="Navigasi utama">
          <Link href={anchor("kalkulator")}>Kalkulator</Link>
          <Link href={anchor("tabel-hitungan")}>Tabel Hitungan</Link>
          <Link href={anchor("faq")}>FAQ</Link>
          <Link href="/tentang-kami/">Tentang Kami</Link>
          <Link className="nav-contact-button" href="/hubungi-kami/">
            Hubungi Kami
          </Link>
        </nav>
        <Link className="mobile-contact-link" href="/hubungi-kami/">
          Hubungi Kami
        </Link>
      </div>
    </header>
  );
}
