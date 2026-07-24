import Image from "next/image";
import Link from "next/link";

import {
  rizkyPratama,
  type SiteAuthor,
} from "@/data/authors";

type AuthorBoxProps = {
  author?: SiteAuthor;
};

export function AuthorBox({ author = rizkyPratama }: AuthorBoxProps) {
  return (
    <aside className="author-box" aria-label={`Tentang penulis ${author.name}`}>
      <Link
        className="author-box-avatar"
        href={author.profilePath}
        aria-label={`Lihat profil ${author.name}`}
      >
        <Image
          src={author.imagePath}
          alt={`Foto profil ${author.name}`}
          width={800}
          height={800}
          sizes="96px"
        />
      </Link>
      <div className="author-box-content">
        <span className="author-box-label">Tentang penulis</span>
        <h2>
          <Link href={author.profilePath}>{author.name}</Link>
        </h2>
        <p className="author-box-role">{author.role}</p>
        <p>{author.shortBio}</p>
        <Link className="author-profile-link" href={author.profilePath}>
          Lihat Profil Penulis <span aria-hidden="true">→</span>
        </Link>
      </div>
    </aside>
  );
}
