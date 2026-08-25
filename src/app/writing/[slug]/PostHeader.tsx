'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';

interface Props {
  title: string;
  date: string;
  tags: string[];
  readingTime: number;
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default function PostHeader({ title, date, tags, readingTime }: Props) {
  const reduced = useReducedMotion();
  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <header className="mb-12 md:mb-16">
      {/* Back link */}
      <motion.div
        initial={{ opacity: 0, x: reduced ? 0 : -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease }}
        className="mb-10"
      >
        <Link
          href="/writing"
          className="inline-flex items-center gap-2 label text-muted hover:text-text transition-colors duration-200"
        >
          <svg width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden="true">
            <path d="M16 5H2M8 1L2 5l6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          All Writing
        </Link>
      </motion.div>

      {/* Meta */}
      <motion.div
        initial={{ opacity: 0, y: reduced ? 0 : 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.05, ease }}
        className="flex items-center gap-4 mb-5"
      >
        <span className="label text-muted">{formatDate(date)}</span>
        <span className="label text-border" aria-hidden="true">·</span>
        <span className="label text-muted">{readingTime} min read</span>
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: reduced ? 0 : 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease }}
        className="font-heading text-heading font-semibold text-text mb-6"
        style={{ letterSpacing: '-0.03em' }}
      >
        {title}
      </motion.h1>

      {/* Tags */}
      <motion.div
        initial={{ opacity: 0, y: reduced ? 0 : 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.18, ease }}
        className="flex flex-wrap gap-2"
      >
        {tags.map((tag) => (
          <span
            key={tag}
            className="label text-muted border border-border px-3 py-1.5"
          >
            {tag}
          </span>
        ))}
      </motion.div>

      <div className="divider mt-10" aria-hidden="true" />
    </header>
  );
}
