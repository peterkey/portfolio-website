"use client";
import { motion } from "framer-motion";
import {
  ComputerDesktopIcon,
  AcademicCapIcon,
  ServerIcon,
  CommandLineIcon,
} from "@heroicons/react/24/outline";

const technicalSkills = [
  { label: "Microsoft 365 & Azure AD",   icon: "01" },
  { label: "Windows OS Troubleshooting", icon: "02" },
  { label: "Linux Administration",       icon: "03" },
  { label: "Docker & Containerisation",  icon: "04" },
  { label: "Bash / CLI Workflows",       icon: "05" },
  { label: "TCP/IP Networking",          icon: "06" },
  { label: "Active Directory",           icon: "07" },
  { label: "Remote Support Tools",       icon: "08" },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-20 sm:py-28 bg-trueAutumn-cardDark relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="eyebrow mb-3">Who I am</span>
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl font-bold text-trueAutumn-textDark font-heading leading-tight"
            >
              IT Support Professional<br />
              <span className="text-[#FF6B35]">with a Systems Mindset</span>
            </h2>
            <p className="text-trueAutumn-textSecondaryDark font-body leading-relaxed text-base lg:text-lg">
              I combine hands-on helpdesk experience with a genuine drive toward infrastructure
              and Linux systems administration — actively building the skills that bridge
              first-line support and systems engineering.
            </p>
          </div>
        </motion.div>

        {/* ── Bio + Skills grid ── */}
        <div className="grid lg:grid-cols-3 gap-6">

          {/* Bio card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 glow-card glass border rounded-2xl p-8 space-y-4 relative"
          >
            <span
              aria-hidden="true"
              className="absolute bottom-2 right-3 font-mono text-[9px] text-[#00D9FF] opacity-20 tracking-widest select-none pointer-events-none"
            >
              1U
            </span>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-[#00D9FF]/10 flex items-center justify-center text-[#00D9FF]">
                <CommandLineIcon className="h-5 w-5" />
              </div>
              <h3 className="font-heading font-semibold text-trueAutumn-textDark text-base">Background</h3>
            </div>
            <p className="text-trueAutumn-textSecondaryDark font-body leading-relaxed">
              In my current role I provide first-line IT support in a high-volume environment —
              diagnosing and resolving Microsoft 365, Windows OS, and Active Directory issues
              for colleagues and customers daily. I&apos;ve become the go-to troubleshooting contact
              on-site, consistently resolving issues within minutes.
            </p>
            <p className="text-trueAutumn-textSecondaryDark font-body leading-relaxed">
              Outside of work I run a personal home lab: I migrated my primary machine to Linux,
              repurposed a legacy iMac into a self-hosted Docker server, and manage containerised
              services using Docker Compose. This hands-on infrastructure work has given me
              practical experience in Linux administration, CLI-driven workflows, container
              networking, and service management — skills I&apos;m actively building on.
            </p>
            <p className="text-trueAutumn-textSecondaryDark font-body leading-relaxed">
              I&apos;m currently studying for CompTIA A+ and Microsoft 365 Fundamentals (MS-900),
              targeting roles in IT support or junior systems administration where I can grow
              from helpdesk foundations into infrastructure engineering.
            </p>
          </motion.div>

          {/* Career Goals card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="glow-card glass border rounded-2xl p-8 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-[#FF6B35]/10 flex items-center justify-center text-[#FF6B35]">
                <AcademicCapIcon className="h-5 w-5" />
              </div>
              <h3 className="font-heading font-semibold text-trueAutumn-textDark text-base">Goals</h3>
            </div>
            <div className="space-y-4 flex-1">
              {[
                { num: "→", text: "Land a dedicated IT support or junior sysadmin role" },
                { num: "→", text: "Earn CompTIA A+ and MS-900 certifications" },
                { num: "→", text: "Grow from helpdesk into systems & infrastructure engineering" },
                { num: "→", text: "Deepen Linux, Docker, and networking expertise through real projects" },
              ].map((item) => (
                <div key={item.text} className="flex gap-3">
                  <span className="font-mono text-[#00D9FF] text-sm mt-0.5 shrink-0">{item.num}</span>
                  <span className="text-trueAutumn-textSecondaryDark text-sm font-body leading-relaxed">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Skills row ── */}
        <div className="grid md:grid-cols-2 gap-6 mt-6">

          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="glow-card glass border rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-[#00D9FF]/10 flex items-center justify-center text-[#00D9FF]">
                <ComputerDesktopIcon className="h-5 w-5" />
              </div>
              <h3 className="font-heading font-semibold text-trueAutumn-textDark text-base">Technical Skills</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {technicalSkills.map((skill) => (
                <div key={skill.label} className="flex items-center gap-2.5">
                  <span className="font-mono text-[9px] text-[#00D9FF]/40 tracking-widest shrink-0 w-5">{skill.icon}</span>
                  <span className="text-trueAutumn-textSecondaryDark text-sm font-body">{skill.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Currently Studying */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="glow-card glass border rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-[#00D9FF]/10 flex items-center justify-center text-[#00D9FF]">
                <ServerIcon className="h-5 w-5" />
              </div>
              <h3 className="font-heading font-semibold text-trueAutumn-textDark text-base">Currently Studying</h3>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              {["CompTIA A+", "MS-900 (Microsoft 365 Fundamentals)"].map((item) => (
                <span
                  key={item}
                  className="text-xs font-mono text-[#FF6B35] border border-[#FF6B35]/25 bg-[#FF6B35]/5 rounded-full px-3 py-1"
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="text-trueAutumn-textSecondaryDark text-sm font-body">
              Targeting 2026 completion — active study via Microsoft Learn and Professor Messer.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
