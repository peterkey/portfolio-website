"use client";
import { motion } from "framer-motion";
import {
  ExclamationTriangleIcon,
  MagnifyingGlassIcon,
  WrenchScrewdriverIcon,
  CheckCircleIcon,
  ClockIcon,
  UserGroupIcon,
  ServerIcon
} from "@heroicons/react/24/outline";

interface CaseStudy {
  id: number;
  title: string;
  category: string;
  problem: string;
  process: string[];
  solution: string;
  result: string;
  metrics: {
    resolutionTime: string;
    usersAffected: number;
    costSavings?: string;
  };
  icon: React.ReactNode;
}

const CaseStudiesSection = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: "Microsoft 365 Login Resolution",
      category: "Software Support",
      problem: "Multiple colleagues unable to access Microsoft 365 accounts, preventing access to email, documents, and scheduling systems. Business operations affected as staff couldn't access critical work tools.",
      process: [
        "Identified scope of login issues affecting multiple users",
        "Checked account status and authentication settings",
        "Diagnosed common login problems and error messages",
        "Tested login process on different devices",
        "Identified password expiration and account lockout issues"
      ],
      solution: "Reset passwords, unlocked accounts, and provided clear instructions for future login issues. Ensured all users could access Microsoft 365 services within minutes.",
      result: "5 users restored to full M365 access within 10 minutes each — zero escalation, zero downtime.",
      metrics: {
        resolutionTime: "5-10 minutes per user",
        usersAffected: 5,
        costSavings: "Maintained operational efficiency"
      },
      icon: <ExclamationTriangleIcon className="h-8 w-8 text-red-500" />
    },
    {
      id: 2,
      title: "Handheld Device Troubleshooting",
      category: "Hardware Support",
      problem: "Delivery devices malfunctioning, causing delivery delays and customer service issues. Staff unable to process orders and complete deliveries efficiently.",
      process: [
        "Diagnosed hardware and software issues on affected devices",
        "Identified common malfunction patterns and error codes",
        "Performed device resets and configuration updates",
        "Tested device functionality after troubleshooting",
        "Coordinated with management for device replacement when needed"
      ],
      solution: "Administered device resets, updated configurations, and replaced faulty hardware. Provided training on proper device handling to prevent future issues.",
      result: "3 delivery devices returned to full operation before shift end, preventing route delays for the affected drivers.",
      metrics: {
        resolutionTime: "15-30 minutes per device",
        usersAffected: 3,
        costSavings: "Prevented delivery delays"
      },
      icon: <WrenchScrewdriverIcon className="h-8 w-8 text-blue-500" />
    },
    {
      id: 3,
      title: "Internal System Training Implementation",
      category: "User Training",
      problem: "Colleagues struggling with new online shift and holiday request system, creating dependency on management for basic scheduling tasks and reducing operational efficiency.",
      process: [
        "Identified training needs and common user challenges",
        "Created step-by-step documentation for system usage",
        "Conducted 1:1 training sessions with affected colleagues",
        "Provided ongoing support during initial system adoption",
        "Gathered feedback to improve training materials"
      ],
      solution: "Delivered personalized training sessions and created clear documentation. Provided ongoing support to ensure independent system usage.",
      result: "8 colleagues fully independent on the new system after a single training session each — eliminated recurring management requests for basic scheduling tasks.",
      metrics: {
        resolutionTime: "30-45 minutes per training session",
        usersAffected: 8,
        costSavings: "Reduced management dependency"
      },
      icon: <MagnifyingGlassIcon className="h-8 w-8 text-green-500" />
    },
    {
      id: 4,
      title: "Home Lab & Linux Migration",
      category: "Infrastructure & Linux",
      problem: "Overreliance on macOS and third-party cloud services limiting system control, performance tuning, and hands-on Linux administration experience. A legacy iMac sat idle — capable hardware with no productive purpose.",
      process: [
        "Evaluated Linux distributions for hardware compatibility and long-term stability",
        "Performed full data backup and planned a zero-loss migration workflow",
        "Executed clean OS installation with custom disk partitioning and driver configuration",
        "Established terminal-driven workflows for package management, system diagnostics, and configuration",
        "Repurposed legacy iMac as a dedicated server with a clean OS install optimised for headless use",
        "Deployed Docker Compose stacks for media management, network utilities, and productivity tools with persistent volumes and isolated networking"
      ],
      solution: "Fully migrated primary workstation to Linux and transformed a legacy iMac into a self-hosted Docker server running multiple containerised services — all managed via command line with no ongoing cloud dependency.",
      result: "A production-grade home lab running multiple containerised services — fully self-hosted, zero cloud dependency, managed entirely via CLI.",
      metrics: {
        resolutionTime: "Ongoing personal project",
        usersAffected: 1,
        costSavings: "Zero cloud costs — fully self-hosted"
      },
      icon: <ServerIcon className="h-8 w-8 text-[#00D9FF]" />
    }
  ];

  return (
    <section id="case-studies" className="py-20 sm:py-28 px-4 bg-trueAutumn-cardDark relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="status-led flex-shrink-0" aria-hidden="true" />
            <span className="eyebrow">Problem → Solution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-trueAutumn-textDark mb-4 font-heading">Technical Support Case Studies</h2>
          <p className="text-trueAutumn-textSecondaryDark text-lg max-w-content mx-auto font-body">
            Real-world examples of technical issues I&apos;ve resolved in my current role, demonstrating systematic problem-solving and efficient resolution.
          </p>
        </motion.div>

        <div className="space-y-8">
          {caseStudies.map((study, index) => {
            const hasTechCorner = index === 0 || index === 3;
            const rackLabel = index === 0 ? "1U" : index === 3 ? "2U" : null;
            const card = (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glow-card glass border rounded-2xl overflow-hidden"
              >
                {/* Header */}
                <div className="bg-[#00D9FF]/5 p-8 border-b border-[#1A3A5C] relative">
                  {rackLabel && (
                    <span
                      aria-hidden="true"
                      className="absolute bottom-2 right-3 font-mono text-[9px] text-[#00D9FF] opacity-20 tracking-widest select-none pointer-events-none"
                    >
                      {rackLabel}
                    </span>
                  )}
                <div className="flex items-center gap-4 mb-3">
                  {study.icon}
                  <div>
                    <h3 className="text-xl font-semibold text-trueAutumn-textDark font-heading">{study.title}</h3>
                    <span className="text-[#FF6B35] text-xs font-mono bg-[#FF6B35]/10 px-3 py-1 rounded-full font-body tracking-wide">
                      {study.category}
                    </span>
                  </div>
                </div>

                {/* Metrics */}
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-1 text-trueAutumn-textSecondaryDark">
                    <ClockIcon className="h-4 w-4" />
                    <span>Resolution: {study.metrics.resolutionTime}</span>
                  </div>
                  <div className="flex items-center gap-1 text-trueAutumn-textSecondaryDark">
                    <UserGroupIcon className="h-4 w-4" />
                    <span>Users Affected: {study.metrics.usersAffected}</span>
                  </div>
                  {study.metrics.costSavings && (
                    <div className="flex items-center gap-1 text-green-600">
                      <CheckCircleIcon className="h-4 w-4" />
                      <span>Impact: {study.metrics.costSavings}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Problem & Process */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-trueAutumn-textDark font-semibold mb-2 flex items-center gap-2">
                        <ExclamationTriangleIcon className="h-5 w-5 text-red-500" />
                        Problem
                      </h4>
                      <p className="text-trueAutumn-textSecondaryDark text-sm">{study.problem}</p>
                    </div>

                    <div>
                      <h4 className="text-trueAutumn-textDark font-semibold mb-2 flex items-center gap-2">
                        <MagnifyingGlassIcon className="h-5 w-5 text-blue-500" />
                        Process
                      </h4>
                      <ol className="list-decimal list-inside space-y-1">
                        {study.process.map((step, stepIndex) => (
                          <li key={stepIndex} className="text-trueAutumn-textSecondaryDark text-sm">
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>

                  {/* Solution & Result */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-trueAutumn-textDark font-semibold mb-2 flex items-center gap-2">
                        <WrenchScrewdriverIcon className="h-5 w-5 text-green-500" />
                        Solution
                      </h4>
                      <p className="text-trueAutumn-textSecondaryDark text-sm">{study.solution}</p>
                    </div>

                    <div>
                      <h4 className="text-trueAutumn-textDark font-semibold mb-2 flex items-center gap-2">
                        <CheckCircleIcon className="h-5 w-5 text-green-500" />
                        Result
                      </h4>
                      <p className="text-trueAutumn-textSecondaryDark text-sm">{study.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            );
            return hasTechCorner ? (
              <div key={study.id} className="tech-corner relative">{card}</div>
            ) : <div key={study.id}>{card}</div>;
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="glass border rounded-2xl p-8 max-w-content mx-auto">
            <h3 className="text-trueAutumn-textDark font-semibold mb-2">Systematic Problem-Solving Approach</h3>
            <p className="text-trueAutumn-textSecondaryDark text-sm">
              Every technical issue follows a structured methodology: Identify the problem, analyze the root cause,
              implement the solution, and verify the resolution. This approach ensures consistent, reliable results in fast-paced environments.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
