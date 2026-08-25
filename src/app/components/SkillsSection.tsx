'use client';

import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

interface SkillGroup {
  category: string;
  skills: string[];
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Infrastructure',
    skills: ['Docker', 'Linux', 'Proxmox', 'Bash', 'Nginx', 'Tailscale'],
  },
  {
    category: 'Networking',
    skills: ['TCP/IP', 'DNS', 'DHCP', 'VPN', 'Routing & Switching', 'Pi-hole', 'WireGuard'],
  },
  {
    category: 'IT Support',
    skills: ['Windows OS', 'Microsoft 365', 'Active Directory', 'Device Management', 'Remote Support', 'ServiceNow'],
  },
  {
    category: 'Backend',
    skills: ['FastAPI', 'Python', 'Node.js', 'PostgreSQL'],
  },
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
  },
];

export default function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  const reduced = useReducedMotion();

  return (
    <section id="skills" className="py-24 md:py-32 bg-base">
      <div className="container-site" ref={ref}>
        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-4"
          >
            <span className="label text-muted">Technical Skills</span>
            <div className="h-px flex-1 bg-border max-w-16" aria-hidden="true" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: reduced ? 0 : 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-section font-semibold text-text"
            style={{ letterSpacing: '-0.03em' }}
          >
            What I Know
          </motion.h2>
        </div>

        {/* Skill groups — editorial table style */}
        <div className="max-w-3xl space-y-0">
          {SKILL_GROUPS.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: reduced ? 0 : 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-10 py-5 border-b last:border-b-0 group"
              style={{ borderColor: 'rgba(46,125,111,0.20)' }}
            >
              {/* Category label */}
              <div className="sm:w-36 shrink-0">
                <span className="label text-muted group-hover:text-text transition-colors duration-200">
                  {group.category}
                </span>
              </div>

              {/* Skills — flowing inline */}
              <div className="flex flex-wrap gap-x-4 gap-y-1">
                {group.skills.map((skill, si) => (
                  <span key={skill} className="font-body text-sm text-text">
                    {skill}
                    {si < group.skills.length - 1 && (
                      <span className="text-muted ml-4" aria-hidden="true">·</span>
                    )}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Approach callout */}
        <motion.div
          initial={{ opacity: 0, y: reduced ? 0 : 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-border border border-border"
          style={{ boxShadow: '0 0 0 1px rgba(250,250,250,0.02), 0 12px 28px rgba(0,0,0,0.3)', borderColor: 'var(--border)' }}
        >
          {[
            { num: '01', heading: 'Research', body: 'Understand the problem before writing a line.' },
            { num: '02', heading: 'Design',   body: 'Plan structure, data flow, and interfaces first.' },
            { num: '03', heading: 'Code',     body: 'Build with proven tools. No unnecessary abstractions.' },
            { num: '04', heading: 'Ship',     body: 'Working software beats perfect software.' },
          ].map((step) => (
            <div key={step.num} className="bg-lift p-6 flex flex-col gap-4">
              <span
                className="font-heading font-bold leading-none tabular-nums"
                style={{
                  fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                  letterSpacing: '-0.04em',
                  color: '#2E7D6F',
                }}
                aria-hidden="true"
              >
                {step.num}
              </span>
              <div>
                <h3 className="font-heading font-semibold text-text mb-1.5" style={{ fontSize: '1rem', letterSpacing: '-0.015em' }}>
                  {step.heading}
                </h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(250,250,250,0.72)' }}>{step.body}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
