"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { DocumentArrowDownIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-trueAutumn-dark"
      aria-labelledby="hero-heading"
    >
      {/* Dot grid texture */}
      <div className="absolute inset-0 bg-grid opacity-100" />

      {/* Ambient glow blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#22D3EE] rounded-full blur-[160px] opacity-[0.07] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#A78BFA] rounded-full blur-[160px] opacity-[0.07] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#22D3EE] rounded-full blur-[200px] opacity-[0.03] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-24 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ── Left Column ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-center lg:text-left space-y-8"
          >
            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <span className="inline-flex items-center gap-2 glass border rounded-full px-4 py-2 eyebrow">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] animate-pulse" />
                Available for new opportunities
              </span>
            </motion.div>

            {/* Main heading */}
            <div className="space-y-2">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="text-trueAutumn-textSecondaryDark font-body text-lg"
              >
                Hi, I&apos;m
              </motion.p>

              <motion.h1
                id="hero-heading"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-none tracking-tight"
                style={{
                  background: "linear-gradient(135deg, #ffffff 0%, #CDD9FF 50%, #22D3EE 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Peter Williams-Key
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="text-2xl sm:text-3xl font-heading font-semibold min-h-[2.5rem]"
              >
                <TypeAnimation
                  sequence={[
                    "Help Desk Support Specialist",
                    2400,
                    "IT Service Desk Professional",
                    2400,
                    "Technical Support Expert",
                    2400,
                    "Microsoft 365 Troubleshooter",
                    2400,
                  ]}
                  wrapper="span"
                  speed={55}
                  deletionSpeed={75}
                  repeat={Infinity}
                  style={{
                    background: "linear-gradient(135deg, #22D3EE, #A78BFA)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                  aria-label="IT Support Specialist roles"
                />
              </motion.div>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="text-trueAutumn-textSecondaryDark font-body leading-relaxed text-lg max-w-[52ch] mx-auto lg:mx-0"
            >
              Customer-focused IT professional delivering first-line technical support in high-volume
              environments. Skilled at resolving Microsoft 365, Windows OS, and Active Directory
              issues within minutes.
            </motion.p>

            {/* Stat pills */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              {[
                { value: "8+", label: "Years Experience" },
                { value: "20+", label: "Colleagues Supported" },
                { value: "120+", label: "Customers Weekly" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="glass border rounded-full px-5 py-2 flex items-center gap-2"
                >
                  <span
                    className="font-mono font-bold text-sm"
                    style={{
                      background: "linear-gradient(135deg, #22D3EE, #A78BFA)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-trueAutumn-textSecondaryDark text-xs font-body">{stat.label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.95 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="/cv.txt"
                download="Peter_Williams-Key_CV.pdf"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2.5 bg-[#22D3EE] text-[#06090F] font-body font-bold px-8 py-3.5 rounded-full text-sm tracking-wide transition-all duration-200 hover:bg-[#38BDF8] focus:outline-none focus:ring-2 focus:ring-[#22D3EE] focus:ring-offset-2 focus:ring-offset-[#06090F]"
                style={{ boxShadow: "0 0 28px rgba(34, 211, 238, 0.35)" }}
                aria-label="Download my CV"
              >
                <DocumentArrowDownIcon className="w-4 h-4" />
                Download CV
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2.5 border border-[#22D3EE]/40 text-[#22D3EE] font-body font-semibold px-8 py-3.5 rounded-full text-sm tracking-wide transition-all duration-200 hover:border-[#22D3EE] hover:bg-[#22D3EE]/10 focus:outline-none focus:ring-2 focus:ring-[#22D3EE] focus:ring-offset-2 focus:ring-offset-[#06090F]"
                aria-label="Contact me"
              >
                <EnvelopeIcon className="w-4 h-4" />
                Get in Touch
              </motion.a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.1 }}
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
              <span className="eyebrow opacity-60">Connect</span>
              <div className="h-px w-8 bg-[#1A2744]" />
              <a
                href="https://github.com/peterkey"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="text-trueAutumn-textSecondaryDark hover:text-[#22D3EE] transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/pkey/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="text-trueAutumn-textSecondaryDark hover:text-[#22D3EE] transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* ── Right Column — Profile Image ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Outer rotating dashed ring */}
              <div
                className="absolute inset-0 rounded-full border border-dashed border-[#22D3EE]/20 animate-spin-slow"
                style={{ margin: "-24px" }}
              />
              {/* Inner counter-rotating ring */}
              <div
                className="absolute inset-0 rounded-full border border-[#A78BFA]/15 animate-spin-reverse-slow"
                style={{ margin: "-12px" }}
              />

              {/* Glow behind image */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#22D3EE]/20 to-[#A78BFA]/15 blur-2xl scale-110" />

              {/* Profile image */}
              <div className="relative w-full h-full rounded-full overflow-hidden glow-ring" style={{ border: "2px solid rgba(34, 211, 238, 0.25)" }}>
                <Image
                  src="/images/profile-pic-light.png"
                  alt="Peter Williams-Key — IT Support Specialist"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating badge — top right */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-2 -right-6 glass border rounded-xl px-3 py-2 text-xs font-mono text-[#22D3EE] whitespace-nowrap"
              >
                <span className="opacity-50">$</span> status: <span className="text-green-400">online</span>
              </motion.div>

              {/* Floating badge — bottom left */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute -bottom-2 -left-6 glass border rounded-xl px-3 py-2 text-xs font-mono text-trueAutumn-textSecondaryDark whitespace-nowrap"
              >
                CompTIA A+ <span className="text-[#22D3EE]">↗</span>
              </motion.div>
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
        <span className="eyebrow opacity-40 text-[0.6rem]">scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="w-5 h-8 border border-[#22D3EE]/25 rounded-full flex justify-center pt-1.5"
        >
          <div className="w-0.5 h-2 bg-[#22D3EE]/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
