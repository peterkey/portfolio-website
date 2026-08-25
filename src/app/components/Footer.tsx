'use client';

import Link from 'next/link';

const NAV_LINKS = [
  { label: 'Projects',   href: '#work'       },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Home Lab',   href: '#lab'        },
  { label: 'Contact',    href: '#contact'    },
  { label: 'Writing',    href: '/writing'    },
  { label: 'Now',        href: '/now'        },
  { label: 'Uses',       href: '/uses'       },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink border-t border-border">
      <div className="container-site py-16 md:py-20">

        {/* Top row: nav + social */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 mb-16">
          <nav>
            <p className="label text-muted mb-5">Navigate</p>
            <ul className="flex flex-wrap gap-x-7 gap-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hit font-body text-sm text-muted hover:text-text transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="label text-muted mb-5">Find me</p>
            <div className="flex gap-7">
              <a
                href="https://github.com/peterkey"
                target="_blank"
                rel="noopener noreferrer"
                className="hit font-body text-sm text-muted hover:text-text transition-colors duration-200"
              >
                GitHub ↗
              </a>
              <a
                href="https://linkedin.com/in/pkey"
                target="_blank"
                rel="noopener noreferrer"
                className="hit font-body text-sm text-muted hover:text-text transition-colors duration-200"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>

        {/* Sign-off */}
        <div className="border-t border-border pt-10 mb-10">
          <p
            className="font-heading font-bold text-text mb-8"
            style={{
              fontSize: 'clamp(2.5rem, 7vw, 6.5rem)',
              letterSpacing: '-0.04em',
              lineHeight: '0.92',
            }}
          >
            Good work.
            <br />
            <span style={{ color: '#2E7D6F' }}>No ego.</span>
          </p>
          <a
            href="#contact"
            className="hit label text-accent-bright hover:opacity-70 transition-opacity duration-200"
          >
            ◦ Open to work — get in touch →
          </a>
        </div>

        {/* Now teaser */}
        <div className="mb-6 flex flex-col gap-3">
          <Link
            href="/now"
            className="hit label text-muted hover:text-accent-bright transition-colors duration-200 inline-flex items-center gap-2"
          >
            ◦ See what I&apos;m up to — updated June 2026 →
          </Link>
          <a
            href="https://linkedin.com/in/pkey"
            target="_blank"
            rel="noopener noreferrer"
            className="hit label text-muted hover:text-accent-bright transition-colors duration-200 inline-flex items-center gap-2"
          >
            ◦ Follow on LinkedIn for updates →
          </a>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <span className="label text-muted">© {year} Peter Williams-Key</span>
          <span className="label text-muted">Wales, UK · Built with Next.js</span>
        </div>

      </div>
    </footer>
  );
}
