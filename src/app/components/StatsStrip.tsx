'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';

const STATS = [
  { num: 10,  suffix: '+', label: 'Years of\nwork experience'    },
  { num: 120, suffix: '+', label: 'Customers supported\nper week' },
  { num: 6,   suffix: '+', label: 'Services\nself-hosted'         },
];

function StatItem({
  stat,
  inView,
  index,
}: {
  stat: typeof STATS[0];
  inView: boolean;
  index: number;
}) {
  const numRef  = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current || !numRef.current) return;
    started.current = true;

    const obj = { val: 0 };
    gsap.to(obj, {
      val: stat.num,
      duration: 1.6,
      delay: index * 0.18,
      ease: 'power2.out',
      onUpdate() {
        if (numRef.current) {
          numRef.current.textContent = Math.round(obj.val).toString();
        }
      },
    });
  }, [inView, stat.num, index]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="py-10 px-6 md:px-10 flex flex-col gap-2"
    >
      <span
        className="font-heading font-bold text-accent leading-none tabular-nums"
        style={{ fontSize: 'clamp(2.75rem, 6vw, 5rem)', letterSpacing: '-0.04em' }}
      >
        <span ref={numRef}>0</span>{stat.suffix}
      </span>
      <span className="label text-muted whitespace-pre-line leading-relaxed">
        {stat.label}
      </span>
    </motion.div>
  );
}

export default function StatsStrip() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-15% 0px' });

  return (
    <div ref={ref} className="border-y border-border bg-base">
      <div className="container-site">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border">
          {STATS.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} inView={inView} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
