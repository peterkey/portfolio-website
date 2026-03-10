"use client";
import { motion } from "framer-motion";
import {
  BriefcaseIcon,
  AcademicCapIcon,
  ServerIcon,
  CalendarIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";

interface TimelineEntry {
  id: number;
  title: string;
  org: string;
  period: string;
  type: "work" | "education" | "project";
  summary: string;
  highlights: string[];
  tags?: string[];
  accentColor: string;
  accentBg: string;
  icon: React.ReactNode;
}

const entries: TimelineEntry[] = [
  {
    id: 2,
    title: "Home Lab — Linux Migration & Self-Hosted Infrastructure",
    org: "Personal Project",
    period: "2024 – Present",
    type: "project",
    summary:
      "Independently planned and executed a full environment migration from macOS to Linux, and repurposed a legacy iMac into a production-grade Docker server. All infrastructure is managed entirely through the command line.",
    highlights: [
      "Migrated primary workstation from macOS to Linux — full backup, partitioning, driver config",
      "Deployed a headless Docker server on legacy hardware running multiple production services",
      "Configured Docker Compose stacks with persistent volumes, isolated networks, and port management",
      "Established terminal-driven workflows for system diagnostics, package management, and updates",
      "Running services include media management, network utilities, and self-hosted productivity tools",
    ],
    tags: ["Linux", "Docker", "Docker Compose", "Bash", "Networking", "Self-Hosting"],
    accentColor: "#00D9FF",
    accentBg: "rgba(0, 217, 255, 0.06)",
    icon: <ServerIcon className="h-5 w-5" />,
  },
  {
    id: 1,
    title: "Customer Delivery Driver & Informal IT Support",
    org: "Tesco Stores PLC",
    period: "2016 – Present",
    type: "work",
    summary:
      "My on-site colleagues' first call for any technical problem — I provide first-line IT support in a high-volume environment, diagnosing and resolving Microsoft 365, Windows OS, Active Directory, and device issues without escalation. The delivery role is the contract; IT support is the work I actually do.",
    highlights: [
      "Diagnosed and resolved Microsoft 365 login, access, and sync failures for 20+ colleagues",
      "Administered, reset, and reconfigured handheld delivery devices to minimise downtime",
      "Delivered one-to-one training sessions on new internal scheduling and HR systems",
      "Provided technical assistance to 120+ customers weekly — triage, signposting, and resolution",
      "Consistently resolved issues within minutes, maintaining operational continuity",
    ],
    tags: ["Microsoft 365", "Windows", "Active Directory", "Device Management", "User Training"],
    accentColor: "#FF6B35",
    accentBg: "rgba(255, 107, 53, 0.06)",
    icon: <BriefcaseIcon className="h-5 w-5" />,
  },
  {
    id: 3,
    title: "Full-Stack Web Development",
    org: "Udemy Bootcamp",
    period: "2022 – 2024",
    type: "education",
    summary:
      "Completed an intensive full-stack bootcamp covering the complete web development stack. Gained practical experience in scripting, version control, and REST APIs — all directly transferable to IT systems work.",
    highlights: [
      "Built applications end-to-end: HTML, CSS, JavaScript, React, Node.js, Express, MongoDB",
      "Developed version control discipline using Git and GitHub across all projects",
      "Worked with REST APIs and JSON data — skills applicable to IT automation and tooling",
      "Strengthened debugging, documentation, and systematic problem-solving habits",
    ],
    tags: ["JavaScript", "React", "Node.js", "Git", "REST APIs", "MongoDB"],
    accentColor: "#FF6B35",
    accentBg: "rgba(255, 107, 53, 0.06)",
    icon: <CodeBracketIcon className="h-5 w-5" />,
  },
  {
    id: 4,
    title: "B.Sc. Sound Technology",
    org: "University of South Wales",
    period: "2012 – 2015",
    type: "education",
    summary:
      "Degree in an applied technical discipline requiring hands-on use of complex hardware and software systems, project leadership, and rigorous documentation — skills that translate directly to IT environments.",
    highlights: [
      "Led technical projects requiring precise hardware configuration and system integration",
      "Developed strong documentation, reporting, and technical writing practices",
      "Worked with professional-grade signal processing and recording hardware/software",
      "Managed time-critical deliverables under pressure across collaborative team projects",
    ],
    tags: ["Technical Leadership", "Documentation", "Systems Thinking", "Project Management"],
    accentColor: "#00D9FF",
    accentBg: "rgba(0, 217, 255, 0.06)",
    icon: <AcademicCapIcon className="h-5 w-5" />,
  },
];

const typeLabel: Record<TimelineEntry["type"], string> = {
  work:      "Work Experience",
  project:   "Personal Project",
  education: "Education",
};

const ExperienceTimeline = () => {
  return (
    <section
      id="experience"
      className="py-20 sm:py-28 bg-trueAutumn-dark relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="eyebrow mb-3">Where I&apos;ve been</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-trueAutumn-textDark mb-4 font-heading">
            Experience & Education
          </h2>
          <p className="text-trueAutumn-textSecondaryDark text-lg max-w-2xl mx-auto font-body leading-relaxed">
            From customer-facing support to hands-on infrastructure — each step building
            toward a career in IT engineering.
          </p>
        </motion.div>

        {/* ── Timeline ── */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-5 top-2 bottom-2 w-px"
            style={{
              background:
                "linear-gradient(to bottom, #00D9FF 0%, #FF6B35 50%, transparent 100%)",
              opacity: 0.25,
            }}
          />

          <div className="space-y-8">
            {entries.map((entry, index) => (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-14"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-[14px] top-6 w-[22px] h-[22px] rounded-full flex items-center justify-center border-2 -translate-x-1/2"
                  style={{
                    borderColor: entry.accentColor,
                    background: "#060D18",
                    color: entry.accentColor,
                    boxShadow: `0 0 0 4px ${entry.accentColor}15`,
                  }}
                >
                  <div className="scale-[0.55]">{entry.icon}</div>
                </div>

                {/* Card */}
                <div
                  className="glow-card glass border rounded-2xl overflow-hidden"
                >
                  {/* Card header stripe */}
                  <div
                    className="px-6 pt-6 pb-5 border-b border-[#1A3A5C]"
                    style={{ background: entry.accentBg }}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                      <div>
                        <h3 className="text-lg font-semibold text-trueAutumn-textDark font-heading leading-snug">
                          {entry.title}
                        </h3>
                        <p
                          className="text-sm font-body mt-0.5"
                          style={{ color: entry.accentColor }}
                        >
                          {entry.org}
                        </p>
                      </div>
                      <div className="flex items-center gap-3 shrink-0">
                        <span
                          className="text-[10px] font-mono tracking-widest px-2.5 py-1 rounded-full border"
                          style={{
                            color: entry.accentColor,
                            borderColor: `${entry.accentColor}40`,
                            background: `${entry.accentColor}10`,
                          }}
                        >
                          {typeLabel[entry.type]}
                        </span>
                        <div className="flex items-center gap-1.5 text-trueAutumn-textSecondaryDark text-xs font-body">
                          <CalendarIcon className="h-3.5 w-3.5 shrink-0" />
                          {entry.period}
                        </div>
                      </div>
                    </div>

                    <p className="text-trueAutumn-textSecondaryDark text-sm font-body leading-relaxed">
                      {entry.summary}
                    </p>
                  </div>

                  {/* Card body */}
                  <div className="px-6 py-5">
                    <h4 className="text-trueAutumn-textSecondaryDark text-xs font-mono tracking-widest uppercase mb-3 opacity-60">
                      Key Highlights
                    </h4>
                    <ul className="space-y-2 mb-5">
                      {entry.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm font-body text-trueAutumn-textSecondaryDark">
                          <span
                            className="mt-1.5 w-1 h-1 rounded-full shrink-0"
                            style={{ background: entry.accentColor }}
                          />
                          {h}
                        </li>
                      ))}
                    </ul>

                    {entry.tags && (
                      <div className="flex flex-wrap gap-1.5">
                        {entry.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-mono text-trueAutumn-textSecondaryDark border border-[#1A3A5C] rounded-full px-2.5 py-0.5"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Bottom callout ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 glass border rounded-2xl p-8 text-center max-w-2xl mx-auto"
        >
          <h3 className="text-trueAutumn-textDark font-semibold mb-2 font-heading">Currently In Progress</h3>
          <p className="text-trueAutumn-textSecondaryDark font-body leading-relaxed text-sm mb-4">
            Actively studying toward industry certifications to formalise and credential the
            technical skills I&apos;ve built through hands-on work.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {["CompTIA A+", "Microsoft MS-900", "Linux Fundamentals"].map((cert) => (
              <span
                key={cert}
                className="text-xs font-mono text-[#FF6B35] border border-[#FF6B35]/25 bg-[#FF6B35]/5 rounded-full px-3 py-1"
              >
                {cert}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
