'use client';

import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

// Line sizes are deliberately different — line 1 is the power statement,
// line 2 is the consequence. The scale contrast creates the hierarchy.
const LINES = [
  { text: 'Systems up.',       color: '#FAFAFA', size: 'clamp(3.5rem, 14.5vw, 14rem)' },
  { text: 'Users unblocked.',  color: '#2E7D6F', size: 'clamp(2.5rem, 8.8vw, 8.5rem)' },
];

const PROOF_POINTS = [
  { num: '01', text: 'Root cause, not workaround' },
  { num: '02', text: 'Documented so it stays fixed' },
  { num: '03', text: 'Escalate when it matters, resolve when it doesn\'t' },
];

export default function StatementSection() {
  const ref     = useRef<HTMLElement>(null);
  const inView  = useInView(ref, { once: true, margin: '-15% 0px' });
  const reduced = useReducedMotion();

  return (
    <section
      ref={ref}
      className="relative py-28 md:py-40 bg-ink overflow-hidden"
      aria-label="Approach"
    >
      {/* Glow — off-left, behind the headline */}
      <div
        className="pointer-events-none absolute inset-0 select-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 90% 70% at -5% 55%, rgba(46,125,111,0.14) 0%, transparent 60%),' +
            'radial-gradient(ellipse 45% 55% at 80% 30%, rgba(46,125,111,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Full-bleed horizontal rules */}
      <div
        className="absolute left-0 right-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, rgba(46,125,111,0.4) 0%, transparent 60%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute left-0 right-0 bottom-0 h-px"
        style={{ background: 'linear-gradient(90deg, rgba(46,125,111,0.4) 0%, transparent 60%)' }}
        aria-hidden="true"
      />

      <div className="container-site relative z-10">
        {/* Layout: headline left, proof points right */}
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-16 items-end">

          {/* Left — signature type statement */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="label text-muted mb-8"
            >
              Approach
            </motion.div>

            <h2
              className="font-heading font-bold"
              style={{ letterSpacing: '-0.04em', lineHeight: '0.88' }}
              aria-label="Systems up. Users unblocked."
            >
              {LINES.map((line, i) => (
                <div key={line.text} className="overflow-hidden">
                  <motion.span
                    initial={{ y: reduced ? '0%' : '110%' }}
                    animate={inView ? { y: '0%' } : {}}
                    transition={{
                      duration: 1.0,
                      delay: 0.08 + i * 0.18,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="block"
                    style={{
                      fontSize: line.size,
                      color: line.color,
                    }}
                  >
                    {line.text}
                  </motion.span>
                </div>
              ))}
            </h2>
          </div>

          {/* Right — proof points, staggered in */}
          <div className="flex flex-col justify-end gap-5 lg:pb-2">
            {PROOF_POINTS.map((pt, i) => (
              <motion.div
                key={pt.num}
                initial={{ opacity: 0, x: reduced ? 0 : 16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.55,
                  delay: 0.5 + i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex items-start gap-3"
              >
                <span
                  className="font-mono shrink-0 mt-0.5"
                  style={{ fontSize: '0.6rem', color: '#4FB3A0', letterSpacing: '0.12em' }}
                >
                  {pt.num}
                </span>
                <span className="font-body text-sm leading-snug" style={{ color: "rgba(250,250,250,0.66)" }}>{pt.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
