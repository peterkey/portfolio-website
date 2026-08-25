'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { PostMeta } from '@/lib/writing';

function PostRow({ post, index }: { post: PostMeta; index: number }) {
  const rowRef   = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const inView   = useInView(rowRef, { once: true, margin: '-8% 0px' });
  const reduced  = useReducedMotion();

  // Parallax: each title drifts at a staggered rate — deeper items move further
  useEffect(() => {
    if (reduced) return;
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!rowRef.current || !titleRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const offset = 10 + index * 5; // stagger per post — later posts move more

    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { y: offset },
        {
          y: -offset,
          ease: 'none',
          scrollTrigger: {
            trigger: rowRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.6,
          },
        },
      );
    });

    return () => ctx.revert();
  }, [reduced, index]);

  return (
    <motion.div
      ref={rowRef}
      initial={{ opacity: 0, y: reduced ? 0 : 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <div className="divider" aria-hidden="true" />

      <Link href={`/writing/${post.slug}`} className="block py-10 md:py-12" data-cursor="read">
        {/* Meta row */}
        <div className="flex items-center gap-4 mb-4">
          <span className="label text-muted">{formatDate(post.date)}</span>
          <span className="label text-border" aria-hidden="true">·</span>
          <span className="label text-muted">{post.readingTime} min read</span>
        </div>

        {/* Title + arrow */}
        <div className="flex items-start justify-between gap-6 mb-4">
          <h2
            ref={titleRef}
            className="font-heading text-heading font-semibold text-text leading-tight group-hover:text-accent transition-colors duration-300"
            style={{ letterSpacing: '-0.03em' }}
          >
            {post.title}
          </h2>
          <span
            className="text-text/20 group-hover:text-accent transition-all duration-300 group-hover:translate-x-1 transform shrink-0 mt-2"
            aria-hidden="true"
          >
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
              <path d="M0 7h18M12 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </div>

        {/* Summary */}
        <p className="text-muted font-body text-base leading-relaxed max-w-[60ch] mb-5">
          {post.summary}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="label text-muted border border-border px-3 py-1.5 group-hover:border-accent/40 transition-colors duration-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </motion.div>
  );
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default function WritingList({ posts }: { posts: PostMeta[] }) {
  const headingRef    = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true });
  const reduced       = useReducedMotion();

  return (
    <div className="pt-32 pb-24 md:pb-32 bg-ink min-h-screen">
      <div className="container-site">

        {/* Section header */}
        <div ref={headingRef} className="mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: reduced ? 0 : 10 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
            className="flex items-center gap-4 mb-5"
          >
            <span className="label text-muted">Writing</span>
            <div className="h-px flex-1 bg-border max-w-16" aria-hidden="true" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: reduced ? 0 : 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-heading font-semibold text-text"
            style={{ letterSpacing: '-0.03em' }}
          >
            Notes &amp; Writing
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: reduced ? 0 : 12 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 text-muted font-body text-base max-w-[50ch] leading-relaxed"
          >
            Build diaries, project writeups, and occasional opinions. Informal by design — no pressure for polished essays.
          </motion.p>
        </div>

        {/* Post list */}
        {posts.length === 0 ? (
          <p className="label text-muted">Nothing published yet.</p>
        ) : (
          <div>
            {posts.map((post, i) => (
              <PostRow key={post.slug} post={post} index={i} />
            ))}
            <div className="divider" aria-hidden="true" />
          </div>
        )}
      </div>
    </div>
  );
}
