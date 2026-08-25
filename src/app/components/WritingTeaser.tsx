import Link from 'next/link';
import { getAllPosts } from '@/lib/writing';

function shortDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' });
}

export default function WritingTeaser() {
  const posts = getAllPosts().slice(0, 3);
  if (posts.length === 0) return null;

  return (
    <section className="py-20 sm:py-24 px-4 bg-ink border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="label text-accent-bright block mb-3">Writing</span>
            <h2
              className="font-heading font-bold text-text"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', letterSpacing: '-0.03em', lineHeight: 1.1 }}
            >
              Thinking out loud.
            </h2>
          </div>
          <Link
            href="/writing"
            className="hit hidden sm:inline-flex items-center gap-2 label text-muted hover:text-text transition-colors duration-200"
          >
            All posts
            <svg width="12" height="10" viewBox="0 0 12 10" fill="none" aria-hidden="true">
              <path d="M0 5h10M6 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/writing/${post.slug}`}
              className="group bg-ink p-8 flex flex-col gap-4 hover:bg-text/[0.03] transition-colors duration-200"
            >
              <div className="flex items-center gap-3">
                <span className="label text-text/40">{shortDate(post.date)}</span>
                <span className="label text-text/20">·</span>
                <span className="label text-text/40">{post.readingTime} min</span>
              </div>
              <h3
                className="font-heading font-semibold text-text group-hover:text-accent-bright transition-colors duration-200 leading-snug"
                style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', letterSpacing: '-0.02em' }}
              >
                {post.title}
              </h3>
              <p className="font-body text-text/50 text-sm leading-relaxed line-clamp-2 flex-1">
                {post.summary}
              </p>
              <span className="label text-accent-bright opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Read →
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-6 sm:hidden">
          <Link href="/writing" className="hit label text-muted hover:text-text transition-colors duration-200">
            All posts →
          </Link>
        </div>
      </div>
    </section>
  );
}
