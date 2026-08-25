'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function WritingNavbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-ink/90 backdrop-blur-md border-b border-border"
    >
      <div className="container-site flex items-center justify-between h-16">
        <Link
          href="/"
          className="font-mono text-xs tracking-[0.2em] text-muted hover:text-text transition-colors duration-200"
        >
          PWK
        </Link>

        <nav className="flex items-center gap-6" aria-label="Writing navigation">
          <Link
            href="/writing"
            className="label text-text"
          >
            Writing
          </Link>
          <Link
            href="/#work"
            className="label text-muted hover:text-text transition-colors duration-200"
          >
            Work
          </Link>
          <Link
            href="/#contact"
            className="label text-muted hover:text-text transition-colors duration-200"
          >
            Contact
          </Link>
        </nav>
      </div>
    </motion.header>
  );
}
