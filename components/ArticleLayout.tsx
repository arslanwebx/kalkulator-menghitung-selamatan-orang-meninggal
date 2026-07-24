import type { ReactNode } from "react";

import { AuthorBox } from "@/components/AuthorBox";
import { createArticleSchema, siteUrl } from "@/data/authors";

type ArticleLayoutProps = {
  children: ReactNode;
  title: string;
  description: string;
  path: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  className?: string;
};

export function ArticleLayout({
  children,
  title,
  description,
  path,
  image,
  datePublished,
  dateModified,
  className = "",
}: ArticleLayoutProps) {
  const url = new URL(path, `${siteUrl}/`).toString();
  const imageUrl = image
    ? new URL(image, `${siteUrl}/`).toString()
    : undefined;
  const schema = createArticleSchema({
    headline: title,
    description,
    url,
    image: imageUrl,
    datePublished,
    dateModified,
  });

  return (
    <article className={className || undefined}>
      {children}
      <AuthorBox />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
    </article>
  );
}
