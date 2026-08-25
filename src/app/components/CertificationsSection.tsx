'use client';

import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

interface Cert {
  num: string;
  name: string;
  issuer: string;
  detail: string;
  primary?: boolean;
}

// All in progress — shown honestly. Order reflects study priority.
const CERTS: Cert[] = [
  {
    num: '01',
    name: 'CompTIA Network+',
    issuer: 'CompTIA',
    primary: true,
    detail: 'Network infrastructure, operations, security, and troubleshooting.',
  },
  {
    num: '02',
    name: 'CompTIA A+',
    issuer: 'CompTIA',
    detail: 'Hardware, OS, networking, security, and operational procedures.',
  },
  {
    num: '03',
    name: 'Microsoft 365 Fundamentals',
    issuer: 'MS-900 · Microsoft Learn',
    detail: 'Microsoft 365 services, cloud concepts, security, and compliance.',
  },
  {
    num: '04',
    name: 'Google IT Support Skills',
    issuer: 'Google Digital Garage',
    detail: 'IT fundamentals, troubleshooting, networking, and support methodologies.',
  },
];

function CertCard({ cert, index, inView }: { cert: Cert; index: number; inView: boolean }) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: reduced ? 0 : 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: 0.12 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col gap-4 p-7 md:p-8 border bg-lift"
      style={{
        borderColor: cert.primary ? 'rgba(79,179,160,0.35)' : 'var(--border)',
        boxShadow: cert.primary
          ? '0 0 0 1px rgba(79,179,160,0.08), 0 0 32px rgba(46,125,111,0.12), 0 12px 28px rgba(0,0,0,0.3)'
          : '0 0 0 1px rgba(250,250,250,0.02), 0 12px 28px rgba(0,0,0,0.3)',
      }}
    >
      {/* Top row */}
      <div className="flex items-start justify-between gap-4">
        {/* Ordinal */}
        <span
          className="font-heading font-bold leading-none tabular-nums shrink-0"
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            letterSpacing: '-0.04em',
            color: cert.primary ? '#2E7D6F' : 'rgba(79,179,160,0.3)',
          }}
          aria-hidden="true"
        >
          {cert.num}
        </span>

        {/* Status badge — everything here is honestly in progress */}
        <span
          className="label shrink-0 mt-1.5 px-2.5 py-1 flex items-center gap-2"
          style={{
            background: 'rgba(91,127,166,0.10)',
            color: '#8FAECE',
            border: '1px solid rgba(91,127,166,0.3)',
          }}
        >
          <span className="status-dot inline-block w-1.5 h-1.5 rounded-full bg-accent-alt" aria-hidden="true" />
          In Progress
        </span>
      </div>

      {/* Cert name */}
      <div>
        <h3
          className="font-heading font-semibold text-text"
          style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.65rem)', letterSpacing: '-0.02em' }}
        >
          {cert.name}
        </h3>
        <p className="label text-muted mt-1.5">{cert.issuer}</p>
      </div>

      {/* Detail */}
      <p className="font-body text-sm leading-relaxed max-w-[52ch]" style={{ color: 'rgba(250,250,250,0.72)' }}>
        {cert.detail}
      </p>

      {cert.primary && (
        <p className="label mt-auto pt-2" style={{ color: '#4FB3A0' }}>
          Current focus
        </p>
      )}
    </motion.div>
  );
}

export default function CertificationsSection() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <section id="certifications" className="py-24 md:py-32 bg-surface">
      <div className="container-site" ref={ref}>
        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-4"
          >
            <span className="label text-muted">Certifications</span>
            <div className="h-px flex-1 bg-border max-w-16" aria-hidden="true" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-section font-semibold text-text"
            style={{ letterSpacing: '-0.03em' }}
          >
            Credentials
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 font-body text-base max-w-[55ch]"
            style={{ color: 'rgba(250,250,250,0.74)' }}
          >
            Formalising what I already know from hands-on experience — studied
            alongside full-time work, shown honestly as in progress.
          </motion.p>
        </div>

        {/* Cert grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {CERTS.map((cert, i) => (
            <CertCard key={cert.num} cert={cert} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
