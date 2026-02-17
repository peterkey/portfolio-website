"use client";
import { motion } from "framer-motion";
import {
  ComputerDesktopIcon,
  WrenchScrewdriverIcon,
  ShieldCheckIcon,
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
    description: "Proficient in Windows administration and Microsoft 365 troubleshooting",
  },
  {
    name: "Hardware & Devices",
    icon: <WrenchScrewdriverIcon className="h-6 w-6" />,
    tools: ["Handheld Scanners", "Laptops", "Desktop PCs", "Mobile Devices"],
    description: "Experienced with device administration and hardware troubleshooting",
  },
  {
    name: "Support Tools",
    icon: <ServerIcon className="h-6 w-6" />,
    tools: ["Remote Support Tools", "Ticketing Systems", "Active Directory (Basic)"],
    description: "Skilled in first-line support and issue management",
  },
  {
    name: "Development Tools",
    icon: <CommandLineIcon className="h-6 w-6" />,
    tools: ["Git", "REST APIs", "Terminal/CLI", "HTML/CSS/JavaScript"],
    description: "Basic programming and version control experience",
  },
  {
    name: "Networking",
    icon: <CpuChipIcon className="h-6 w-6" />,
    tools: ["Basic Networking", "Microsoft Teams", "VPN Configuration"],
    description: "Fundamental networking knowledge and collaboration tools",
  },
  {
    name: "Professional Skills",
    icon: <ShieldCheckIcon className="h-6 w-6" />,
    tools: ["Problem Solving", "Documentation", "Team Collaboration", "Customer Service"],
    description: "Strong soft skills essential for IT support roles",
  },
];

const ToolsSection = () => {
  return (
    <section id="skills" className="py-20 sm:py-28 bg-trueAutumn-cardDark relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="glow-card glass border rounded-2xl p-6 group"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-xl bg-[#22D3EE]/10 flex items-center justify-center text-[#22D3EE] mb-5 group-hover:bg-[#22D3EE]/20 transition-colors duration-300">
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
                    className="font-mono text-xs border border-[#22D3EE]/25 text-[#22D3EE] bg-[#22D3EE]/5 rounded-full px-3 py-1"
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
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
                  <span className="font-mono text-[#22D3EE]/40 text-xs">{s.step}</span>
                  <div className="font-heading font-bold text-lg mt-1 mb-2 text-white">
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
