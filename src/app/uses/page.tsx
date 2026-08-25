'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

// ── Types ──────────────────────────────────────────────────
interface UseItem {
  name: string;
  description: string;
}

interface UseSection {
  id: string;
  label: string;
  number: string;
  items: UseItem[];
}

// ── Content ────────────────────────────────────────────────
const SECTIONS: UseSection[] = [
  {
    id: 'hardware',
    label: 'Hardware',
    number: '01',
    items: [
      {
        name: '2017 MacBook Pro',
        description:
          "My main development machine — running Fedora Workstation. Apple dropped support for it, so I put Linux on it instead of retiring it. Works great. The hardware is still solid; Apple just decided it wasn't worth their time any more.",
      },
      {
        name: '2012 iMac (home lab)',
        description:
          'Repurposed as a home server running Docker. Hosts Nextcloud, Plex, Home Assistant, and Portainer. It hums away in the corner and does its job without complaining. Good machine.',
      },
      {
        name: 'Pi-hole',
        description:
          "On the router, handling DNS-level ad blocking across the whole network. Probably my most-used piece of kit — set it up once and forgot it exists. That's exactly how infrastructure should work. The absence of it is the feature.",
      },
    ],
  },
  {
    id: 'development',
    label: 'Development',
    number: '02',
    items: [
      {
        name: 'VSCode',
        description:
          'Editor of choice. Catppuccin theme. I know there are more hardcore options, and I genuinely don\'t care — it works, the extension ecosystem is good, and I spend my energy on the code rather than the editor.',
      },
      {
        name: 'React & Next.js',
        description:
          'My default frontend stack. The App Router took some getting used to but server components are genuinely useful once you stop fighting the mental model.',
      },
      {
        name: 'FastAPI',
        description:
          'For Python APIs. Fast to write, fast to run, and the auto-generated docs mean you stop having to explain your endpoints to yourself three months later.',
      },
      {
        name: 'PostgreSQL',
        description:
          'My default database. Reliable, well-understood, and the right answer for most things. I reach for it without much deliberation and it rarely gives me reason to regret it.',
      },
      {
        name: 'Docker',
        description:
          'Used for local development and everything on the home lab. Compose files for local stacks, containers on the server. The consistency between environments is worth it.',
      },
      {
        name: 'Claude Code',
        description:
          "AI-assisted development. It's changed how I work more than anything else in the last year. Not a replacement for thinking — more like a collaborator who's available at 11pm and doesn't mind if you change your mind.",
      },
    ],
  },
  {
    id: 'system',
    label: 'Terminal & System',
    number: '03',
    items: [
      {
        name: 'Fedora Workstation',
        description:
          'Daily driver OS. Stable, well-maintained, and the package ecosystem is solid. Switching from macOS took a week of adjustment and I haven\'t looked back.',
      },
      {
        name: 'Tailscale',
        description:
          'Remote access into the home lab from anywhere. Zero-config mesh VPN — I can SSH into the iMac from my laptop regardless of where I am. One of those tools you install and immediately wonder how you managed without it.',
      },
    ],
  },
];

// ── Animation variants ─────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay: number) => ({
    opacity: 1,
    transition: { duration: 0.5, delay, ease: 'easeOut' },
  }),
};

// ── Page ───────────────────────────────────────────────────
export default function UsesPage() {
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
          <span className="label text-accent block mb-6">Uses</span>
          <h1
            className="font-heading font-bold text-text"
            style={{
              fontSize: 'clamp(4rem, 14vw, 10rem)',
              lineHeight: 0.88,
              letterSpacing: '-0.04em',
            }}
          >
            What I
            <br />
            actually use.
          </h1>
          <p className="font-body text-text/60 mt-8 max-w-md" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
            The hardware and software I use every day. No affiliate links, no sponsorships.
          </p>
        </motion.div>

        {/* ── Sections ─────────────────────────────────────── */}
        <div className="flex flex-col">
          {SECTIONS.map((section, si) => (
            <motion.section
              key={section.id}
              id={section.id}
              custom={0.2 + si * 0.1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              className="py-16 md:py-20 border-b border-border last:border-b-0"
            >
              {/* Section header */}
              <div className="flex items-baseline gap-4 mb-12">
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

              {/* Items */}
              <div className="grid md:grid-cols-2 gap-x-16 gap-y-10 md:pl-16">
                {section.items.map((item, ii) => (
                  <motion.div
                    key={item.name}
                    custom={0.3 + si * 0.1 + ii * 0.08}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-40px' }}
                    variants={fadeIn}
                    className="group"
                  >
                    <h3
                      className="font-heading font-semibold text-text mb-2"
                      style={{ fontSize: 'clamp(1rem, 1.5vw, 1.1875rem)', letterSpacing: '-0.015em', lineHeight: 1.2 }}
                    >
                      {item.name}
                    </h3>
                    <p
                      className="font-body text-text/60"
                      style={{ fontSize: '1rem', lineHeight: 1.75 }}
                    >
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>

        {/* ── Back link ────────────────────────────────────── */}
        <div className="mt-16">
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
