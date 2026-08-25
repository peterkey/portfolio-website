'use client';

import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

interface TimelineEntry {
  title: string;
  org: string;
  period: string;
  type: 'work' | 'project' | 'education';
  summary: string;
  highlights: string[];
  tags?: string[];
  current?: boolean;
  sectionLabel?: string;
}

const ENTRIES: TimelineEntry[] = [
  {
    sectionLabel: 'WORK HISTORY',
    title: 'IT Support & Customer Service',
    org: 'Tesco Stores PLC',
    period: '2016 – Present',
    type: 'work',
    current: true,
    summary:
      'In a customer-facing delivery role, I became the on-site go-to for technical problems — first-line IT support for colleagues, resolved issues that would otherwise require escalation.',
    highlights: [
      'Diagnosed and resolved Microsoft 365 login, access, and sync failures for 20+ colleagues',
      'Administered, reset, and reconfigured handheld delivery devices to minimise downtime',
      'Delivered one-to-one training on new internal scheduling and HR systems',
      'Provided technical assistance to 120+ customers weekly',
    ],
    tags: ['Microsoft 365', 'Windows', 'Active Directory', 'Device Management'],
  },
  {
    sectionLabel: 'PERSONAL PROJECTS',
    title: 'Home Lab — Linux Migration & Self-Hosted Infrastructure',
    org: 'Personal Project',
    period: '2024 – Present',
    type: 'project',
    current: true,
    summary:
      'Full environment migration from macOS to Linux, plus a legacy iMac repurposed into a production-grade Docker server. All infrastructure managed entirely via the command line.',
    highlights: [
      'Migrated primary workstation from macOS to Linux — backup, partitioning, driver config',
      'Deployed a headless Docker server running multiple production services',
      'Configured Docker Compose stacks with persistent volumes and isolated networks',
      'Running services: Nextcloud, Plex, Home Assistant, Tailscale, Portainer',
    ],
    tags: ['Linux', 'Docker', 'Docker Compose', 'Bash', 'Networking'],
  },
  {
    title: 'Full-Stack Web Development',
    org: 'Udemy Bootcamp',
    period: '2022 – 2024',
    type: 'education',
    summary:
      'Intensive full-stack bootcamp covering the complete web development stack — scripting, version control, REST APIs, and modern JavaScript frameworks.',
    highlights: [
      'Built applications end-to-end: HTML, CSS, JavaScript, React, Node.js, MongoDB',
      'Version control discipline across all projects using Git and GitHub',
      'REST APIs and JSON — skills applicable to automation and systems integration',
      'Strengthened debugging, documentation, and systematic problem-solving',
    ],
    tags: ['JavaScript', 'React', 'Node.js', 'Git', 'REST APIs'],
  },
  {
    title: 'B.Sc. Sound Technology',
    org: 'University of South Wales',
    period: '2012 – 2015',
    type: 'education',
    summary:
      'Applied technical degree requiring hands-on use of complex hardware and software systems, project leadership, and rigorous documentation — directly transferable to engineering and IT.',
    highlights: [
      'Led technical projects requiring precise hardware configuration and system integration',
      'Developed strong documentation, reporting, and technical writing practices',
      'Worked with professional-grade signal processing hardware and software',
      'Managed time-critical deliverables across collaborative team projects',
    ],
    tags: ['Systems Thinking', 'Documentation', 'Technical Leadership'],
  },
];

const TYPE_LABEL: Record<TimelineEntry['type'], string> = {
  work: 'Work',
  project: 'Project',
  education: 'Education',
};

function TimelineEntry({ entry, index }: { entry: TimelineEntry; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-8% 0px' });
  const reduced = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: reduced ? 0 : 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
    >
      {entry.sectionLabel && (
        <div className="label text-muted mb-6 mt-2">{entry.sectionLabel}</div>
      )}
    <div className="relative grid grid-cols-[auto_1fr] gap-x-6 md:gap-x-10">
      {/* Left: timeline spine */}
      <div className="flex flex-col items-center">
        {/* Dot */}
        <div
          className="relative z-10 w-2.5 h-2.5 rounded-full mt-1.5 shrink-0 border border-border"
          style={{
            backgroundColor: entry.current ? '#2E7D6F' : 'var(--surface)',
            boxShadow: entry.current ? '0 0 8px rgba(46, 125, 111, 0.5)' : 'none',
          }}
        />
        {/* Spine line — hidden on last item */}
        <div className="w-px flex-1 mt-2" style={{ backgroundColor: 'rgba(46,125,111,0.4)' }} />
      </div>

      {/* Right: content */}
      <div className="pb-12">
        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <span className="label text-muted">{entry.period}</span>
          <span className="label text-muted border border-border px-2 py-0.5">
            {TYPE_LABEL[entry.type]}
          </span>
          {entry.current && (
            <span className="label px-2 py-0.5 bg-accent !text-text">
              Current
            </span>
          )}
        </div>

        {/* Title / org */}
        <h3
          className="font-heading font-semibold text-text mb-1"
          style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', letterSpacing: '-0.02em' }}
        >
          {entry.title}
        </h3>
        <p className="font-body text-sm text-muted mb-4">{entry.org}</p>

        {/* Summary */}
        <p className="font-body text-sm leading-relaxed mb-5 max-w-[65ch]" style={{ color: 'rgba(250,250,250,0.80)' }}>
          {entry.summary}
        </p>

        {/* Highlights */}
        <ul className="space-y-2 mb-5 pl-3 border-l" style={{ borderColor: 'rgba(46,125,111,0.25)' }}>
          {entry.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-3 text-sm font-body" style={{ color: 'rgba(250,250,250,0.74)' }}>
              <span className="mt-2 w-1 h-1 rounded-full bg-accent shrink-0" aria-hidden="true" />
              {h}
            </li>
          ))}
        </ul>

        {/* Tags */}
        {entry.tags && (
          <div className="flex flex-wrap gap-2">
            {entry.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[0.65rem] text-muted border border-border px-2.5 py-1 hover:border-accent/40 hover:text-text transition-colors duration-200"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
    </motion.div>
  );
}

export default function ExperienceTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <section id="experience" className="py-24 md:py-32 bg-base relative overflow-hidden">
      {/* Dim spotlight — behind first timeline entry */}
      <div
        className="pointer-events-none absolute top-36 -left-24 w-[730px] h-[730px] select-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(46, 125, 111, 0.06) 0%, transparent 60%)',
        }}
      />

      <div className="container-site" ref={ref}>
        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-4"
          >
            <span className="label text-muted">Experience & Education</span>
            <div className="h-px flex-1 bg-border max-w-16" aria-hidden="true" />
          </motion.div>

          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: '110%' }}
              animate={inView ? { y: '0%' } : {}}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-section font-semibold text-text"
              style={{ letterSpacing: '-0.03em' }}
            >
              Where I&apos;ve Been
            </motion.h2>
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl">
          {ENTRIES.map((entry, i) => (
            <TimelineEntry key={entry.title} entry={entry} index={i} />
          ))}
        </div>

        {/* In-progress callout */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-4 max-w-3xl ml-[3.75rem] border border-border bg-lift p-6"
          style={{ boxShadow: '0 0 0 1px rgba(79,179,160,0.05), 0 12px 28px rgba(0,0,0,0.35)' }}
        >
          <div className="label text-muted mb-3">Currently Studying</div>
          <div className="flex flex-wrap gap-2">
            {['CompTIA Network+', 'CompTIA A+', 'Microsoft MS-900'].map((cert) => (
              <span
                key={cert}
                className="font-mono text-[0.65rem] text-accent-bright border border-accent/30 px-3 py-1"
              >
                {cert}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
