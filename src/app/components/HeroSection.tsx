"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { DocumentArrowDownIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

/* ── Animated SVG Network Topology ─────────────────────────────── */
const NetworkDiagram = () => (
  <svg
    viewBox="0 0 620 520"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
    role="img"
    aria-label="Network topology diagram showing IT infrastructure"
  >
    <defs>
      {/* Profile photo clip */}
      <clipPath id="clip-photo">
        <circle cx="310" cy="410" r="48" />
      </clipPath>

      {/* Motion paths */}
      <path id="p-wan-fw"    d="M310,68  L310,95"  />
      <path id="p-fw-gw"    d="M310,133 L310,177" />
      <path id="p-gw-ws"    d="M279,236 L88,365"  />
      <path id="p-gw-peter" d="M310,253 L310,358" />
      <path id="p-gw-srv"   d="M341,236 L532,365" />

      {/* Glow filters */}
      <filter id="f-glow" x="-60%" y="-60%" width="220%" height="220%">
        <feGaussianBlur stdDeviation="4" result="blur" />
        <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
      <filter id="f-node" x="-80%" y="-80%" width="260%" height="260%">
        <feGaussianBlur stdDeviation="12" result="blur" />
        <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>

      {/* Scan line gradient */}
      <linearGradient id="scan-grad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%"   stopColor="#00D9FF" stopOpacity="0" />
        <stop offset="50%"  stopColor="#00D9FF" stopOpacity="1" />
        <stop offset="100%" stopColor="#00D9FF" stopOpacity="0" />
      </linearGradient>
    </defs>

    {/* ── NOC Scan Line ── */}
    <rect x="0" y="0" width="620" height="8" fill="url(#scan-grad)" opacity="0.055">
      <animateTransform attributeName="transform" type="translate"
        from="0,-8" to="0,528" dur="8s" repeatCount="indefinite" />
    </rect>

    {/* ── Connection Lines ── */}
    {/* WAN → FW */}
    <line x1="310" y1="68"  x2="310" y2="95"
      stroke="#00D9FF" strokeWidth="1.2" strokeDasharray="6 4" strokeOpacity="0.35" />
    {/* FW → GW */}
    <line x1="310" y1="133" x2="310" y2="177"
      stroke="#00D9FF" strokeWidth="2"   strokeDasharray="7 4" strokeOpacity="0.50" />
    {/* GW → WS (left) */}
    <line x1="279" y1="236" x2="88"  y2="365"
      stroke="#00D9FF" strokeWidth="1.2" strokeDasharray="5 4" strokeOpacity="0.25" />
    {/* GW → PETER (active — solid) */}
    <line x1="310" y1="253" x2="310" y2="358"
      stroke="#00D9FF" strokeWidth="2.5"              strokeOpacity="0.70" />
    {/* GW → SRV (right) */}
    <line x1="341" y1="236" x2="532" y2="365"
      stroke="#FF6B35" strokeWidth="1.2" strokeDasharray="5 4" strokeOpacity="0.30" />

    {/* Interface labels */}
    <text x="318" y="302" fill="#00D9FF" fontSize="8" fontFamily="var(--font-mono)" opacity="0.40">eth0</text>
    <text x="335" y="316" fill="#FF6B35" fontSize="8" fontFamily="var(--font-mono)" opacity="0.35">eth1</text>

    {/* ── Data Packets ── */}
    <circle r="3"   fill="#00D9FF" filter="url(#f-glow)" opacity="0.90">
      <animateMotion dur="2.0s" repeatCount="indefinite" begin="0.0s">
        <mpath href="#p-wan-fw" />
      </animateMotion>
    </circle>
    <circle r="3.5" fill="#00D9FF" filter="url(#f-glow)">
      <animateMotion dur="1.7s" repeatCount="indefinite" begin="0.4s">
        <mpath href="#p-fw-gw" />
      </animateMotion>
    </circle>
    <circle r="4"   fill="#FF6B35" filter="url(#f-glow)" opacity="0.85">
      <animateMotion dur="1.2s" repeatCount="indefinite" begin="0.2s">
        <mpath href="#p-gw-peter" />
      </animateMotion>
    </circle>
    <circle r="2.5" fill="#00D9FF" filter="url(#f-glow)" opacity="0.70">
      <animateMotion dur="2.4s" repeatCount="indefinite" begin="1.1s">
        <mpath href="#p-gw-ws" />
      </animateMotion>
    </circle>
    <circle r="2.5" fill="#FF6B35" filter="url(#f-glow)" opacity="0.65">
      <animateMotion dur="2.1s" repeatCount="indefinite" begin="0.8s">
        <mpath href="#p-gw-srv" />
      </animateMotion>
    </circle>

    {/* ══════════════════════════
        NODES
    ══════════════════════════ */}

    {/* WAN / INTERNET */}
    <circle cx="310" cy="38" r="30"
      fill="#0A1628" stroke="#00D9FF" strokeWidth="1.5" strokeOpacity="0.45" />
    <text x="310" y="34" textAnchor="middle" fill="#00D9FF" fontSize="10"
      fontFamily="var(--font-mono)" letterSpacing="0.1em">WAN</text>
    <text x="310" y="48" textAnchor="middle" fill="#4A6A8A" fontSize="8"
      fontFamily="var(--font-mono)">INTERNET</text>
    <circle cx="333" cy="14" r="4" fill="#22C55E">
      <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
    </circle>

    {/* FW-01 */}
    <rect x="255" y="95" width="110" height="38" rx="4"
      fill="#0A1628" stroke="#FF6B35" strokeWidth="1.5" />
    <text x="310" y="110" textAnchor="middle" fill="#FF6B35" fontSize="10"
      fontFamily="var(--font-mono)" fontWeight="600" letterSpacing="0.08em">FW-01</text>
    <text x="310" y="124" textAnchor="middle" fill="#4A6A8A" fontSize="7.5"
      fontFamily="var(--font-mono)">FIREWALL</text>
    <circle cx="360" cy="99" r="4" fill="#FF6B35">
      <animate attributeName="opacity" values="0.9;0.2;0.9" dur="1.4s" repeatCount="indefinite" />
    </circle>
    <text x="310" y="148" textAnchor="middle" fill="#4A6A8A" fontSize="7"
      fontFamily="var(--font-mono)" letterSpacing="0.05em">0.0.0.254/24</text>

    {/* GW-01 — Hub node */}
    {/* Ambient glow */}
    <circle cx="310" cy="215" r="62" fill="#00D9FF" opacity="0.025" />
    {/* Main circle */}
    <circle cx="310" cy="215" r="38"
      fill="#0D1F35" stroke="#00D9FF" strokeWidth="1.8" filter="url(#f-node)" />
    {/* Rotating inner ring */}
    <circle cx="310" cy="215" r="30"
      fill="none" stroke="#00D9FF" strokeWidth="0.8" strokeDasharray="4 6" strokeOpacity="0.30">
      <animateTransform attributeName="transform" type="rotate"
        from="0 310 215" to="360 310 215" dur="22s" repeatCount="indefinite" />
    </circle>
    <text x="310" y="212" textAnchor="middle" fill="#00D9FF" fontSize="9"
      fontFamily="var(--font-mono)" fontWeight="600" letterSpacing="0.08em">GW-01</text>
    <text x="310" y="225" textAnchor="middle" fill="#4A6A8A" fontSize="7"
      fontFamily="var(--font-mono)">192.168.0.1</text>
    {/* Pulsing status */}
    <circle cx="340" cy="190" r="5" fill="#22C55E">
      <animate attributeName="r"       values="5;7;5"   dur="3s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="1;0.3;1" dur="3s" repeatCount="indefinite" />
    </circle>
    <text x="310" y="268" textAnchor="middle" fill="#4A6A8A" fontSize="7"
      fontFamily="var(--font-mono)" letterSpacing="0.05em">GATEWAY / ROUTER</text>

    {/* WS-01 */}
    <rect x="50" y="365" width="76" height="36" rx="3"
      fill="#0A1628" stroke="#00D9FF" strokeWidth="1.2" strokeOpacity="0.40" />
    <text x="88" y="381" textAnchor="middle" fill="#B8D4F0" fontSize="9"
      fontFamily="var(--font-mono)">WS-01</text>
    <text x="88" y="393" textAnchor="middle" fill="#4A6A8A" fontSize="7"
      fontFamily="var(--font-mono)">.1.10</text>
    <circle cx="120" cy="369" r="3" fill="#22C55E" opacity="0.8" />
    <text x="88" y="416" textAnchor="middle" fill="#4A6A8A" fontSize="7"
      fontFamily="var(--font-mono)">WORKSTATION</text>

    {/* SRV-01 */}
    <rect x="494" y="365" width="76" height="36" rx="3"
      fill="#0A1628" stroke="#FF6B35" strokeWidth="1.2" strokeOpacity="0.40" />
    <text x="532" y="381" textAnchor="middle" fill="#B8D4F0" fontSize="9"
      fontFamily="var(--font-mono)">SRV-01</text>
    <text x="532" y="393" textAnchor="middle" fill="#4A6A8A" fontSize="7"
      fontFamily="var(--font-mono)">.1.20</text>
    <circle cx="564" cy="369" r="3" fill="#22C55E" opacity="0.8" />
    <text x="532" y="416" textAnchor="middle" fill="#4A6A8A" fontSize="7"
      fontFamily="var(--font-mono)">SERVER</text>

    {/* PETER-WK — Profile photo node */}
    {/* Outer orbit ring (clockwise) */}
    <circle cx="310" cy="410" r="70"
      fill="none" stroke="#00D9FF" strokeWidth="0.8" strokeDasharray="6 6" strokeOpacity="0.18">
      <animateTransform attributeName="transform" type="rotate"
        from="0 310 410" to="360 310 410" dur="35s" repeatCount="indefinite" />
    </circle>
    {/* Counter-orbit ring */}
    <circle cx="310" cy="410" r="62"
      fill="none" stroke="#FF6B35" strokeWidth="0.5" strokeDasharray="3 8" strokeOpacity="0.12">
      <animateTransform attributeName="transform" type="rotate"
        from="0 310 410" to="-360 310 410" dur="50s" repeatCount="indefinite" />
    </circle>
    {/* Glow halo */}
    <circle cx="310" cy="410" r="56" fill="#00D9FF" opacity="0.04" />
    {/* Main border circle */}
    <circle cx="310" cy="410" r="50"
      fill="#0A1628" stroke="#00D9FF" strokeWidth="2.5" />
    {/* Profile photo */}
    <image
      href="/images/profile-pic.png"
      x="262" y="362" width="96" height="96"
      clipPath="url(#clip-photo)"
      preserveAspectRatio="xMidYMid slice"
    />
    {/* Online status indicator */}
    <circle cx="352" cy="382" r="10" fill="#060D18" />
    <circle cx="352" cy="382" r="6"  fill="#22C55E">
      <animate attributeName="opacity" values="1;0.35;1" dur="2s" repeatCount="indefinite" />
    </circle>
    {/* Labels */}
    <text x="310" y="474" textAnchor="middle" fill="#00D9FF" fontSize="10"
      fontFamily="var(--font-mono)" fontWeight="600" letterSpacing="0.12em">PETER-WK</text>
    <text x="310" y="487" textAnchor="middle" fill="#4A6A8A" fontSize="8"
      fontFamily="var(--font-mono)">192.168.1.5 // ACTIVE</text>

    {/* Legend strip */}
    <g transform="translate(4, 505)">
      <circle cx="6"  cy="6" r="3.5" fill="#22C55E" opacity="0.8" />
      <text x="14" y="10" fill="#4A6A8A" fontSize="7" fontFamily="var(--font-mono)">ONLINE</text>
      <circle cx="68" cy="6" r="3.5" fill="#FF6B35" opacity="0.8" />
      <text x="76" y="10" fill="#4A6A8A" fontSize="7" fontFamily="var(--font-mono)">MONITORED</text>
    </g>
  </svg>
);

/* ── Hero Section ─────────────────────────────────────────────── */
const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-trueAutumn-dark"
      aria-labelledby="hero-heading"
    >
      {/* Technical grid */}
      <div className="absolute inset-0 bg-grid opacity-100" />

      {/* Ambient glows */}
      <div className="absolute top-1/4 -left-64 w-[600px] h-[600px] bg-[#00D9FF] rounded-full blur-[220px] opacity-[0.04] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[700px] h-[700px] bg-[#00D9FF] rounded-full blur-[240px] opacity-[0.055] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FF6B35] rounded-full blur-[180px] opacity-[0.03] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-24 sm:py-32">
        {/* Asymmetric grid: 2fr text | 3fr diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-center">

          {/* ── Left Column — Text ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-center lg:text-left space-y-7"
          >
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
            >
              <span className="inline-flex items-center gap-2.5 glass border rounded-full px-4 py-2 font-mono text-[0.65rem] tracking-[0.2em] uppercase text-[#00D9FF]">
                <span className="status-led shrink-0" />
                Available for new opportunities
              </span>
            </motion.div>

            {/* Heading */}
            <div className="space-y-2">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0 }}
                className="font-mono text-xs text-[#4A6A8A] tracking-widest uppercase"
              >
                <span className="text-[#00D9FF]/50">// </span>HOSTNAME: PETER-WK
              </motion.p>

              <motion.h1
                id="hero-heading"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-none text-trueAutumn-textDark uppercase tracking-wide"
              >
                Peter<br />
                <span style={{
                  background: "linear-gradient(135deg, #B8D4F0 0%, #00D9FF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  Williams-Key
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0 }}
                className="text-xl sm:text-2xl font-heading font-semibold min-h-[2rem] uppercase tracking-wide"
              >
                <span style={{ color: "#00D9FF" }}>IT Support Specialist</span>
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0 }}
              className="text-trueAutumn-textSecondaryDark font-body leading-relaxed text-base max-w-[50ch] mx-auto lg:mx-0"
            >
              I keep businesses running by resolving IT issues before they become problems.
            </motion.p>

            {/* System metrics strip */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              {[
                { value: "8+",          label: "YRS EXPERIENCE" },
                { value: "FCR-FOCUSED", label: "" },
                { value: "120+",        label: "USERS / WEEK" },
              ].map((stat) => (
                <div
                  key={stat.label || stat.value}
                  className="glass border rounded-lg px-4 py-2.5 tech-corner"
                >
                  <div className="font-mono font-bold text-lg text-[#00D9FF] leading-none">{stat.value}</div>
                  {stat.label && (
                    <div className="font-mono text-[0.55rem] text-[#4A6A8A] tracking-widest mt-0.5">{stat.label}</div>
                  )}
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="/peter-key-cv.pdf"
                download="Peter_Williams-Key_CV.pdf"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2.5 bg-[#00D9FF] text-[#060D18] font-body font-bold px-8 py-3.5 rounded-lg text-sm tracking-wider uppercase transition-all duration-200 hover:bg-[#00B8E0] focus:outline-none focus:ring-2 focus:ring-[#00D9FF] focus:ring-offset-2 focus:ring-offset-[#060D18]"
                style={{ boxShadow: "0 0 28px rgba(0,217,255,0.3), 0 4px 16px rgba(0,0,0,0.4)" }}
                aria-label="Download my CV"
              >
                <DocumentArrowDownIcon className="w-4 h-4" />
                Download CV
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2.5 border border-[#00D9FF]/35 text-[#00D9FF] font-body font-semibold px-8 py-3.5 rounded-lg text-sm tracking-wider uppercase transition-all duration-200 hover:border-[#00D9FF]/70 hover:bg-[#00D9FF]/6 focus:outline-none focus:ring-2 focus:ring-[#00D9FF] focus:ring-offset-2 focus:ring-offset-[#060D18]"
                aria-label="Contact me"
              >
                <EnvelopeIcon className="w-4 h-4" />
                Get in Touch
              </motion.a>
            </motion.div>

            {/* Social / connect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0 }}
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
              <span className="font-mono text-[0.6rem] text-[#4A6A8A] tracking-widest uppercase">// CONNECT</span>
              <div className="h-px w-8 bg-[#1A3A5C]" />
              <a
                href="https://github.com/peterkey"
                target="_blank" rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="text-trueAutumn-textSecondaryDark hover:text-[#00D9FF] transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/pkey/"
                target="_blank" rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="text-trueAutumn-textSecondaryDark hover:text-[#00D9FF] transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* ── Right Column — Network Diagram ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0, ease: "easeOut", delay: 0.15 }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full">
              {/* Panel header bar */}
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#1A3A5C]" />
                <div className="flex items-center gap-2 glass border rounded-full px-3 py-1">
                  <span className="status-led" style={{ width: 5, height: 5 }} />
                  <span className="font-mono text-[0.58rem] text-[#00D9FF] tracking-[0.18em] whitespace-nowrap uppercase">
                    Network_Topology_Map
                  </span>
                </div>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#1A3A5C]" />
              </div>

              {/* SVG panel with glass frame */}
              <div className="glass border rounded-2xl p-5 tech-corner relative overflow-hidden">
                {/* Window chrome dots */}
                <div className="absolute top-3 right-4 flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#FF6B35] opacity-70" />
                  <div className="w-2 h-2 rounded-full bg-[#FFB347] opacity-70" />
                  <div className="w-2 h-2 rounded-full bg-[#22C55E] opacity-70" />
                </div>

                <NetworkDiagram />
              </div>

              {/* Status strip */}
              <div className="flex items-center justify-between mt-3 px-1">
                <span className="font-mono text-[0.58rem] text-[#4A6A8A] tracking-widest">
                  STATUS: <span className="text-[#22C55E]">ALL NODES ONLINE</span>
                </span>
                <span className="font-mono text-[0.58rem] text-[#1A3A5C]">
                  192.168.0.0/24
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[0.55rem] text-[#4A6A8A] tracking-widest uppercase">scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="w-5 h-8 border border-[#00D9FF]/20 rounded-full flex justify-center pt-1.5"
        >
          <div className="w-0.5 h-2 bg-[#00D9FF]/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
