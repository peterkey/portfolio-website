'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const NAV_LINKS = [
  { label: 'Experience', href: '#experience' },
  { label: 'Home Lab',   href: '#lab'        },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Projects',   href: '#work'       },
  { label: 'About',      href: '#about'      },
  { label: 'Contact',    href: '#contact'    },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        hamburgerRef.current?.focus();
        return;
      }
      if (e.key !== 'Tab') return;

      const dialog = document.querySelector<HTMLElement>('[role="dialog"]');
      const focusable = dialog?.querySelectorAll<HTMLElement>(
        'a[href], button, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable || focusable.length === 0) return;
      const first = focusable[0];
      const last  = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const handleNavClick = (href: string) => {
    setOpen(false);
    const lenis = (window as any).__lenis;
    if (lenis) {
      lenis.scrollTo(href, { offset: -64, duration: 1.2 });
    } else {
      const el = document.querySelector(href);
      if (el) window.scrollTo({ top: (el as HTMLElement).offsetTop - 64, behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-base/85 backdrop-blur-md border-b border-border' : ''
        }`}
      >
        <div className="container-site flex items-center justify-between h-16">
          {/* Brand */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              const lenis = (window as any).__lenis;
              if (lenis) { lenis.scrollTo(0); }
              else { window.scrollTo({ top: 0, behavior: 'smooth' }); }
            }}
            aria-label="Peter Williams-Key — home"
            className="hit font-mono text-xs tracking-[0.2em] text-text hover:text-accent-bright transition-colors duration-200"
          >
            PWK
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="hit label text-muted hover:text-text transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/writing"
              className="hit label text-muted hover:text-text transition-colors duration-200"
            >
              Writing
            </Link>
            <Link
              href="/now"
              className="hit label text-muted hover:text-text transition-colors duration-200"
            >
              Now
            </Link>
            <Link
              href="/uses"
              className="hit label text-muted hover:text-text transition-colors duration-200"
            >
              Uses
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            ref={hamburgerRef}
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-[5px] p-3 -mr-1"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <span className={`block h-px w-5 bg-white transition-all duration-300 origin-center ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`block h-px w-5 bg-white transition-all duration-200 ${open ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block h-px w-5 bg-white transition-all duration-300 origin-center ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </button>
        </div>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-nav"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-base flex flex-col justify-center px-8"
            aria-modal="true"
            role="dialog"
            aria-label="Navigation menu"
          >
            <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="font-heading text-[clamp(2.5rem,10vw,5rem)] font-semibold text-text hover:text-accent-bright transition-colors duration-200 leading-tight"
                  style={{ letterSpacing: '-0.03em' }}
                >
                  {link.label}
                </a>
              ))}
              <Link
                href="/writing"
                onClick={() => setOpen(false)}
                className="font-heading text-[clamp(2.5rem,10vw,5rem)] font-semibold text-text hover:text-accent-bright transition-colors duration-200 leading-tight"
                style={{ letterSpacing: '-0.03em' }}
              >
                Writing
              </Link>
              <Link
                href="/now"
                onClick={() => setOpen(false)}
                className="font-heading text-[clamp(2.5rem,10vw,5rem)] font-semibold text-text hover:text-accent-bright transition-colors duration-200 leading-tight"
                style={{ letterSpacing: '-0.03em' }}
              >
                Now
              </Link>
              <Link
                href="/uses"
                onClick={() => setOpen(false)}
                className="font-heading text-[clamp(2.5rem,10vw,5rem)] font-semibold text-text hover:text-accent-bright transition-colors duration-200 leading-tight"
                style={{ letterSpacing: '-0.03em' }}
              >
                Uses
              </Link>
            </nav>

            <div className="mt-12 flex items-center gap-6 border-t border-border pt-8">
              <a href="https://github.com/peterkey" target="_blank" rel="noopener noreferrer"
                className="label text-muted hover:text-text transition-colors">GitHub</a>
              <a href="https://linkedin.com/in/pkey" target="_blank" rel="noopener noreferrer"
                className="label text-muted hover:text-text transition-colors">LinkedIn</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
