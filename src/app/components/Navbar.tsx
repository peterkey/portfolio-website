"use client";
import { useState, useEffect, useRef, type MouseEvent } from "react";
import { motion } from "framer-motion";
import { DocumentArrowDownIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin.svg";

const navLinks = [
  { title: "About",          path: "#about",          num: "01" },
  { title: "Experience",     path: "#experience",     num: "02" },
  { title: "Case Studies",   path: "#case-studies",   num: "03" },
  { title: "Projects",       path: "#projects",       num: "04" },
  { title: "Skills",         path: "#skills",         num: "05" },
  { title: "Certifications", path: "#certifications", num: "06" },
  { title: "Contact",        path: "#contact",        num: "07" },
];

const ICON_FILTER = "brightness(0) invert(1)";

/* ── PWK Hexagonal Monogram ─────────────────────────────────────── */
const NavMonogram = () => (
  <svg
    width="82"
    height="76"
    viewBox="0 0 48 44"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    {/* Outer rotating dashed ring */}
    <circle
      cx="24" cy="22" r="20.5"
      stroke="#00D9FF" strokeWidth="0.6" strokeDasharray="3 4" strokeOpacity="0.22"
    >
      <animateTransform attributeName="transform" type="rotate"
        from="0 24 22" to="360 24 22" dur="24s" repeatCount="indefinite" />
    </circle>

    {/* Ambient glow */}
    <ellipse cx="24" cy="22" rx="18" ry="14" fill="#00D9FF" opacity="0.03" />

    {/* Main flat-top hexagon */}
    <polygon
      points="42,22 40,13 8,13 6,22 8,31 40,31"
      fill="#0A1628"
      stroke="#00D9FF"
      strokeWidth="1.5"
      strokeOpacity="0.65"
    />

    {/* Monogram text */}
    <text
      x="24" y="26"
      textAnchor="middle"
      fill="#00D9FF"
      fontSize="13"
      fontFamily="var(--font-rajdhani)"
      fontWeight="700"
      letterSpacing="0.04em"
    >
      PWK
    </text>

    {/* Status pulse dot — top-right vertex */}
    <circle cx="40" cy="13" r="4.5" fill="#060D18" />
    <circle cx="40" cy="13" r="3" fill="#22C55E">
      <animate attributeName="opacity" values="1;0.25;1" dur="2.5s" repeatCount="indefinite" />
    </circle>

    {/* Circuit trace marks — flat left/right sides */}
    <line x1="42" y1="22" x2="48" y2="22"
      stroke="#00D9FF" strokeWidth="1" strokeOpacity="0.28" />
    <line x1="0"  y1="22" x2="6"  y2="22"
      stroke="#00D9FF" strokeWidth="1" strokeOpacity="0.28" />
  </svg>
);

const Navbar = () => {
  const [isOpen,         setIsOpen]         = useState(false);
  const [scrolled,       setScrolled]       = useState(false);
  const [hidden,         setHidden]         = useState(false);
  const [activeSection,  setActiveSection]  = useState("");
  const lastScrollY = useRef(0);

  /* ── Hide-on-scroll-down behaviour ─────────────────────────── */
  useEffect(() => {
    const onScroll = () => {
      const curr = window.scrollY;
      setScrolled(curr > 20);
      setHidden(curr > lastScrollY.current && curr > 100);
      lastScrollY.current = curr;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Active section tracking ────────────────────────────────── */
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    navLinks.forEach(({ path }) => {
      const el = document.getElementById(path.slice(1));
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(path.slice(1)); },
        { rootMargin: "-30% 0px -60% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  /* ── Body scroll lock when overlay open ─────────────────────── */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  /* ── Escape key closes overlay ───────────────────────────────── */
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setIsOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const goto = (e: MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    const el = document.getElementById(path.slice(1));
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
    setIsOpen(false);
  };

  const downloadCV = () => {
    const a = document.createElement("a");
    a.href = "/peter-key-cv.pdf";
    a.download = "Peter-Key-CV.pdf";
    a.click();
  };

  return (
    <>
      {/* ── Full-screen mobile overlay ──────────────────────────── */}
      {isOpen && (
        <div id="mobile-overlay" className="fixed inset-0 z-[60] bg-[#060D18] flex flex-col">
          {/* Top bar */}
          <div className="flex items-center justify-between px-5 h-16 border-b border-[#1A3A5C] shrink-0">
            <NavMonogram />
            <button
              onClick={() => setIsOpen(false)}
              className="w-10 h-10 flex items-center justify-center text-trueAutumn-textSecondaryDark hover:text-[#00D9FF] transition-colors"
              aria-label="Close menu"
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <line x1="1" y1="1" x2="15" y2="15" />
                <line x1="15" y1="1" x2="1" y2="15" />
              </svg>
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex-1 flex flex-col justify-center px-8 sm:px-12 overflow-y-auto">
            {navLinks.map((link) => {
              const active = activeSection === link.path.slice(1);
              return (
                <a
                  key={link.title}
                  href={link.path}
                  onClick={(e) => goto(e, link.path)}
                  aria-current={active ? "location" : undefined}
                  className={`flex items-center gap-5 py-4 border-b border-[#1A3A5C]/40 last:border-0 group transition-colors ${
                    active ? "text-[#00D9FF]" : "text-trueAutumn-textDark hover:text-[#00D9FF]"
                  }`}
                >
                  <span className={`font-mono text-[10px] tracking-widest w-6 shrink-0 transition-colors ${
                    active ? "text-[#00D9FF]" : "text-[#00D9FF]/35 group-hover:text-[#00D9FF]/65"
                  }`}>
                    {link.num}
                  </span>
                  <span className="font-heading font-bold text-2xl sm:text-3xl leading-none">
                    {link.title}
                  </span>
                  {active && (
                    <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#00D9FF] shrink-0" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Bottom bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="flex items-center justify-between px-8 sm:px-12 py-5 border-t border-[#1A3A5C] shrink-0"
          >
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/peterkey"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-1 opacity-60 hover:opacity-100 transition-opacity"
              >
                <Image src={GithubIcon} alt="" className="w-5 h-5" style={{ filter: ICON_FILTER }} />
              </a>
              <a
                href="https://www.linkedin.com/in/pkey/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-1 opacity-60 hover:opacity-100 transition-opacity"
              >
                <Image src={LinkedinIcon} alt="" className="w-5 h-5" style={{ filter: ICON_FILTER }} />
              </a>
            </div>
            <button
              onClick={downloadCV}
              className="flex items-center gap-1.5 bg-[#00D9FF] text-[#060D18] px-4 py-2 rounded-full font-mono font-bold text-xs tracking-wide hover:bg-[#00B8E0] transition-colors"
              style={{ boxShadow: "0 4px 14px rgba(0,217,255,0.25)" }}
            >
              <DocumentArrowDownIcon className="w-4 h-4" />
              Download CV
            </button>
          </motion.div>
        </div>
      )}

      {/* ── Primary navbar ──────────────────────────────────────── */}
      <motion.nav
        animate={{ y: hidden ? "-100%" : "0%" }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
          scrolled ? "bg-[#060D18]/90 backdrop-blur-xl" : "bg-transparent"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 xl:h-20">

            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => goto(e, "#home")}
              className="flex items-center group"
              aria-label="Peter Williams-Key — back to top"
            >
              <span className="transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(0,217,255,0.45)]">
                <NavMonogram />
              </span>
            </a>

            {/* Desktop nav — visible at xl+ only to guarantee space */}
            <div className="hidden xl:flex items-center gap-7">
              {navLinks.map(({ title, path, num }) => {
                const active = activeSection === path.slice(1);
                return (
                  <a
                    key={title}
                    href={path}
                    onClick={(e) => goto(e, path)}
                    aria-current={active ? "location" : undefined}
                    className="relative group flex flex-col items-center gap-1 pb-1"
                  >
                    <span className={`flex items-baseline gap-1 font-mono leading-none transition-colors duration-200 ${
                      active ? "text-[#00D9FF]" : "text-trueAutumn-textSecondaryDark group-hover:text-trueAutumn-textDark"
                    }`}>
                      <span className={`text-[9px] tracking-widest transition-colors ${
                        active ? "text-[#00D9FF]" : "text-[#00D9FF]/35 group-hover:text-[#00D9FF]/60"
                      }`}>
                        {num}
                      </span>
                      <span className="text-[11px] tracking-wider">{title}</span>
                    </span>
                    {/* Scale-in underline */}
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-px origin-center transition-all duration-300 ${
                        active
                          ? "bg-[#00D9FF] scale-x-100"
                          : "bg-[#00D9FF]/50 scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </a>
                );
              })}
            </div>

            {/* Desktop actions */}
            <div className="hidden xl:flex items-center gap-2">
              <a
                href="https://github.com/peterkey"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 opacity-50 hover:opacity-100 transition-opacity duration-200"
              >
                <Image src={GithubIcon} alt="" className="w-[18px] h-[18px]" style={{ filter: ICON_FILTER }} />
              </a>
              <a
                href="https://www.linkedin.com/in/pkey/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 opacity-50 hover:opacity-100 transition-opacity duration-200"
              >
                <Image src={LinkedinIcon} alt="" className="w-[18px] h-[18px]" style={{ filter: ICON_FILTER }} />
              </a>

              <div className="w-px h-4 bg-[#1A3A5C] mx-1" aria-hidden="true" />

              <motion.button
                onClick={downloadCV}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-1.5 bg-[#00D9FF] text-[#060D18] px-3.5 py-2 rounded-full font-mono font-bold text-[11px] tracking-wide hover:bg-[#00B8E0] transition-colors focus:outline-none focus:ring-2 focus:ring-[#00D9FF] focus:ring-offset-2 focus:ring-offset-[#060D18]"
                style={{ boxShadow: "0 4px 14px rgba(0,217,255,0.25)" }}
                aria-label="Download CV"
              >
                <DocumentArrowDownIcon className="w-3.5 h-3.5" />
                Download CV
              </motion.button>
            </div>

            {/* Mobile hamburger — asymmetric two-line style */}
            <button
              onClick={() => setIsOpen(true)}
              className="xl:hidden flex flex-col gap-[5px] p-2 group"
              aria-label="Open navigation menu"
              aria-expanded={isOpen}
              aria-controls="mobile-overlay"
            >
              <span className="block w-5 h-0.5 bg-trueAutumn-textDark group-hover:bg-[#00D9FF] transition-colors" />
              <span className="block w-3 h-0.5 bg-trueAutumn-textDark group-hover:bg-[#00D9FF] transition-colors ml-auto" />
            </button>
          </div>
        </div>

        {/* Gradient separator — appears on scroll */}
        <motion.div
          animate={{ opacity: scrolled ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="h-px bg-gradient-to-r from-transparent via-[#00D9FF]/15 to-transparent"
          aria-hidden="true"
        />
      </motion.nav>
    </>
  );
};

export default Navbar;
