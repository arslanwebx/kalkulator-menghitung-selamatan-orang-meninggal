import Link from "next/link";

import { FooterNewsletter } from "@/components/FooterNewsletter";
import { Logo } from "@/components/Logo";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand-column">
          <Link href="/" className="brand-link" aria-label="Kalkulator Selamatan, beranda">
            <Logo />
          </Link>
          <p>
            Alat bantu menghitung jadwal selamatan, hari, dan Pasaran Jawa
            langsung di perangkat Anda.
          </p>
          <FooterNewsletter />
        </div>

        <div className="footer-links-column">
          <h2>Informasi</h2>
          <ul>
            <li><Link href="/tentang-kami/">Tentang Kami</Link></li>
            <li><Link href="/hubungi-kami/">Hubungi Kami</Link></li>
            <li><span aria-disabled="true">Kebijakan Privasi</span></li>
            <li><span aria-disabled="true">Syarat dan Ketentuan</span></li>
            <li><span aria-disabled="true">Penafian</span></li>
          </ul>
        </div>

        <div className="footer-contact-column">
          <h2>Kontak</h2>
          <p>
            Pertanyaan, koreksi, atau masukan dapat dikirim melalui email.
          </p>
          <div className="footer-contact-item">
            <span>Email</span>
            <a href="mailto:halo@kalkulatorselamatanorangmeninggal.pro">
              halo@kalkulatorselamatanorangmeninggal.pro
            </a>
          </div>
          <Link className="footer-contact-link" href="/hubungi-kami/">
            Buka halaman kontak
          </Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Kalkulator Selamatan</span>
        <span>kalkulatorselamatanorangmeninggal.pro</span>
      </div>
    </footer>
  );
}
