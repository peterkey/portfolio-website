"use client";
import { motion, useReducedMotion } from "framer-motion";
import {
  ComputerDesktopIcon,
  WrenchScrewdriverIcon,
  CpuChipIcon,
  ServerIcon,
  CommandLineIcon,
} from "@heroicons/react/24/outline";

interface ToolCategory {
  name: string;
  icon: React.ReactNode;
  tools: string[];
  description: string;
}

const toolCategories: ToolCategory[] = [
  {
    name: "Operating Systems",
    icon: <ComputerDesktopIcon className="h-6 w-6" />,
    tools: ["Windows OS", "Microsoft 365", "Google Workspace"],
    description: "Diagnose and resolve Microsoft 365 login, access, sync, and licence issues for colleagues daily. Windows OS troubleshooting: user accounts, Group Policy, system errors.",
  },
  {
    name: "Hardware & Devices",
    icon: <WrenchScrewdriverIcon className="h-6 w-6" />,
    tools: ["Handheld Scanners", "Laptops", "Desktop PCs", "Mobile Devices"],
    description: "Reset, reconfigure, and return handheld delivery devices to service — minimising shift downtime. Diagnose laptop and desktop faults: power, connectivity, peripheral failure.",
  },
  {
    name: "Support Tools",
    icon: <ServerIcon className="h-6 w-6" />,
    tools: ["Remote Support Tools", "Ticketing Systems", "Active Directory"],
    description: "Manage user accounts and access permissions in Active Directory. Track and resolve issues through ticketing workflows; use remote tools to diagnose problems without physical access.",
  },
  {
    name: "Development Tools",
    icon: <CommandLineIcon className="h-6 w-6" />,
    tools: ["Git", "REST APIs", "Terminal/CLI", "HTML/CSS/JavaScript"],
    description: "Version control with Git across all personal projects. Built REST API integrations, automated repetitive tasks with Bash scripts, and maintain infrastructure config as code.",
  },
  {
    name: "Networking",
    icon: <CpuChipIcon className="h-6 w-6" />,
    tools: ["TCP/IP Networking", "Microsoft Teams", "VPN Configuration"],
    description: "Configure and troubleshoot TCP/IP networks: DHCP, DNS, routing, VPN. Manage Docker network isolation — bridge, host, and custom networks for containerised services.",
  },
  {
    name: "Infrastructure & Automation",
    icon: <ServerIcon className="h-6 w-6" />,
    tools: ["Docker", "Docker Compose", "Bash Scripting", "Linux CLI"],
    description: "Build and manage containerised services with Docker Compose — persistent volumes, isolated networks, multi-service stacks. Terminal-driven Linux administration: package management, service control, system diagnostics.",
  },
];

const ToolsSection = () => {
  const shouldReduceMotion = useReducedMotion();
  return (
    <section id="skills" className="py-20 sm:py-28 bg-trueAutumn-cardDark relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? undefined : { duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="eyebrow mb-3">What I work with</span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-trueAutumn-textDark mb-4">
            Technical Proficiencies
          </h2>
          <p className="text-trueAutumn-textSecondaryDark font-body text-lg max-w-2xl mx-auto leading-relaxed">
            Tools and technologies from my current role and self-study, focused on practical IT support capabilities.
          </p>
        </motion.div>

        {/* Card grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {toolCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={shouldReduceMotion ? undefined : { duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="glow-card glass border rounded-2xl p-6 group"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-xl bg-[#00D9FF]/10 flex items-center justify-center text-[#00D9FF] mb-5 group-hover:bg-[#00D9FF]/20 transition-colors duration-300">
                {category.icon}
              </div>

              <h3 className="text-trueAutumn-textDark font-heading font-semibold text-lg mb-2">
                {category.name}
              </h3>
              <p className="text-trueAutumn-textSecondaryDark font-body text-sm mb-5 leading-relaxed">
                {category.description}
              </p>

              {/* Tool pills */}
              <div className="flex flex-wrap gap-2">
                {category.tools.map((tool) => (
                  <span
                    key={tool}
                    className="font-mono text-xs border border-[#FF6B35]/25 text-[#FF6B35] bg-[#FF6B35]/5 rounded-full px-3 py-1"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Problem-solving methodology */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? undefined : { duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="glass border rounded-2xl p-8 max-w-4xl mx-auto">
            <p className="eyebrow text-center mb-6">Methodology</p>
            <h3 className="text-trueAutumn-textDark font-heading font-semibold text-xl text-center mb-8">
              Problem-Solving Approach
            </h3>
            <div className="grid md:grid-cols-3 gap-8 text-sm">
              {[
                { step: "01", title: "Identify", body: "Understand the issue and gather all relevant information from the user" },
                { step: "02", title: "Troubleshoot", body: "Apply a systematic, methodical approach to diagnose and resolve" },
                { step: "03", title: "Escalate", body: "Document thoroughly and escalate when resolution requires additional expertise" },
              ].map((s) => (
                <div key={s.step} className="text-center">
                  <span className="font-mono text-[#00D9FF]/40 text-xs">{s.step}</span>
                  <div className="font-heading font-bold text-lg mt-1 mb-2 text-trueAutumn-textDark">
                    {s.title}
                  </div>
                  <p className="text-trueAutumn-textSecondaryDark font-body leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ToolsSection;
