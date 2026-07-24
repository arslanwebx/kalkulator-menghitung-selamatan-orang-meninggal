import type { ReactNode } from "react";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

type PolicySection = {
  title: string;
  content: ReactNode;
};

type PolicyPageProps = {
  title: string;
  introduction: string;
  updated: string;
  summary: string;
  sections: PolicySection[];
};

export function PolicyPage({
  title,
  introduction,
  updated,
  summary,
  sections,
}: PolicyPageProps) {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Lewati ke konten utama
      </a>
      <SiteHeader />

      <main id="main-content" className="inner-page-main">
        <section className="inner-page-hero policy-page-hero">
          <h1>{title}</h1>
          <p>{introduction}</p>
        </section>

        <div className="inner-page-shell policy-layout">
          <aside className="policy-summary">
            <strong>Ringkasnya</strong>
            <p>{summary}</p>
            <span>Terakhir diperbarui</span>
            <time dateTime="2026-07-24">{updated}</time>
          </aside>

          <article className="policy-content">
            {sections.map((section) => (
              <section key={section.title}>
                <h2>{section.title}</h2>
                {section.content}
              </section>
            ))}
          </article>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
