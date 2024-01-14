import { allPosts } from '@/.contentlayer/generated';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="prose dark:prose-invert">
      {allPosts
        .sort((a, b) => {
          if (a.date > b.date) return -1;
          return 0;
        })
        .map((post) => (
          <article key={post._id}>
            <Link href={post.slug}>
              <h2>{post.title}</h2>
            </Link>
            <div className="flex flex-col gap-0">
              <span className="text-sm">
                Escrito em: {new Date(post.date).toLocaleDateString('pt-Br')}
              </span>
              <span className="text-xs font-semibold flex gap-2">
                {post.tags &&
                  post.tags.map((t, i) => <span key={`tag-${i}`}>{t}</span>)}
              </span>
            </div>

            {post.description && <p>{post.description}</p>}
          </article>
        ))}
    </div>
  );
}
