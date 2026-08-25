'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const SECTIONS = [
  {
    id: 'building',
    label: 'Building',
    number: '01',
    content: (
      <>
        <p>
          <strong>PotPlanner</strong> — a personal budgeting app built around the envelope method. You
          split your money into named "pots" (rent, food, fun, whatever), and you stop when a pot
          runs dry. Simple premise, surprisingly hard to stick to without the right tool.
        </p>
        <p>
          I had a working version. Lost it entirely during an OS switch — a git mishap that I still
          think about. So I&apos;m rebuilding from scratch. Slower this time. Better scaffolding.
          Fewer shortcuts I&apos;ll regret in six months.
        </p>
      </>
    ),
  },
  {
    id: 'watching',
    label: 'Watching',
    number: '02',
    content: (
      <>
        <p>
          <strong>The Lincoln Lawyer</strong> on Netflix. I&apos;m not going to say anything else
          because the last person who spoiled something for me is still not forgiven.
        </p>
      </>
    ),
  },
  {
    id: 'listening',
    label: 'Listening',
    number: '03',
    content: (
      <>
        <p>
          Podcasts, almost exclusively. Two I keep coming back to:
        </p>
        <p>
          <strong>Have a Word</strong> — two UK stand-up comedians talking about life, mental health,
          and mostly nothing in particular. Consistently funny. The exact opposite of a productivity
          podcast.
        </p>
        <p>
          <strong>Mike and Vittorio&apos;s Guide to Parenting</strong> — two dads figuring it out in
          real time. Neither are about tech and that&apos;s entirely the point. A reminder that the
          world is bigger than pull requests.
        </p>
      </>
    ),
  },
  {
    id: 'football',
    label: 'Football',
    number: '04',
    content: (
      <>
        <p>
          <strong>Cardiff City FC.</strong> Just got promoted to the EFL Championship from League One.
        </p>
        <p>
          Make of that what you will.
        </p>
      </>
    ),
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function NowPage() {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate the vertical rule drawing down on mount
    const el = lineRef.current;
    if (!el) return;
    el.style.transition = 'height 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.5s';
    requestAnimationFrame(() => {
      el.style.height = '100%';
    });
  }, []);

  return (
    <main className="bg-ink min-h-screen pt-32 pb-32">
      <div className="container-site">

        {/* ── Hero ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 md:mb-32"
        >
          <span className="label text-accent block mb-6">Now</span>
          <h1
            className="font-heading font-bold text-text mb-6"
            style={{
              fontSize: 'clamp(4rem, 14vw, 10rem)',
              lineHeight: 0.88,
              letterSpacing: '-0.04em',
            }}
          >
            What I&apos;m
            <br />
            up to.
          </h1>
          <p className="font-body text-text/60 mt-8 max-w-md" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
            A snapshot of what I&apos;m currently up to — updated occasionally.
          </p>
        </motion.div>

        {/* ── Sections ─────────────────────────────────────── */}
        <div className="relative">
          {/* Vertical rule */}
          <div className="absolute left-0 top-0 bottom-0 hidden md:block" style={{ width: '1px' }}>
            <div
              ref={lineRef}
              className="bg-border"
              style={{ height: '0%', width: '100%' }}
            />
          </div>

          <div className="md:pl-16 flex flex-col">
            {SECTIONS.map((section, i) => (
              <motion.article
                key={section.id}
                id={section.id}
                custom={0.2 + i * 0.12}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={fadeUp}
                className="relative py-16 md:py-20 border-b border-border last:border-b-0"
              >
                {/* Tick mark on the rule */}
                <div
                  className="absolute hidden md:block bg-accent"
                  style={{
                    left: '-17px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '1px',
                    height: '32px',
                  }}
                />

                <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 items-start">
                  {/* Label col */}
                  <div className="flex md:flex-col gap-4 md:gap-2 items-center md:items-start">
                    <span
                      className="font-mono text-border"
                      style={{ fontSize: '0.6rem', letterSpacing: '0.2em' }}
                    >
                      {section.number}
                    </span>
                    <h2
                      className="font-heading font-semibold text-accent"
                      style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', letterSpacing: '-0.02em', lineHeight: 1 }}
                    >
                      {section.label}
                    </h2>
                  </div>

                  {/* Body col */}
                  <div
                    className="font-body text-text/80 space-y-4"
                    style={{ fontSize: '1.0625rem', lineHeight: 1.75 }}
                  >
                    {section.content}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* ── Footer meta ──────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 pt-10 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
        >
          <span className="label text-text/50">
            Last updated: June 2026
          </span>
          <a
            href="https://nownownow.com"
            target="_blank"
            rel="noopener noreferrer"
            className="label text-text/50 hover:text-accent transition-colors duration-200"
          >
            Inspired by nownownow.com ↗
          </a>
        </motion.div>

        {/* ── Back link ────────────────────────────────────── */}
        <div className="mt-12">
          <Link
            href="/"
            className="label text-text/50 hover:text-text transition-colors duration-200 inline-flex items-center gap-2"
          >
            ← Back home
          </Link>
        </div>

      </div>
    </main>
  );
}
