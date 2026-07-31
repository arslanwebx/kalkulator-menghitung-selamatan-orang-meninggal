"use client";

import { useState } from "react";
import Link from "next/link";

import { Logo } from "@/components/Logo";

type SiteHeaderProps = {
  homePage?: boolean;
};

export function SiteHeader({ homePage = false }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const anchor = (id: string) => (homePage ? `#${id}` : `/#${id}`);
  const menuLinks = [
    { href: anchor("kalkulator"), label: "Kalkulator" },
    { href: "/tabel-hitungan-orang-meninggal/", label: "Tabel Hitungan" },
    { href: anchor("faq"), label: "FAQ" },
    {
      href: "/panduan/",
      label: "Panduan",
    },
    { href: "/tentang-kami/", label: "Tentang Kami" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand-link" aria-label="Kalkulator Selamatan, beranda">
          <Logo />
        </Link>
        <nav className="desktop-navigation" aria-label="Navigasi utama">
          {menuLinks.map((link) => (
            <Link key={link.href} href={link.href}>{link.label}</Link>
          ))}
          <Link className="nav-contact-button" href="/hubungi-kami/">
            Hubungi Kami
          </Link>
        </nav>
        <button
          className="mobile-menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <nav
        id="mobile-navigation"
        className={`mobile-navigation ${menuOpen ? "is-open" : ""}`}
        aria-label="Navigasi seluler"
      >
        <div>
          {menuLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </Link>
          ))}
          <Link className="mobile-nav-contact" href="/hubungi-kami/" onClick={closeMenu}>
            Hubungi Kami
          </Link>
        </div>
      </nav>
    </header>
  );
}
