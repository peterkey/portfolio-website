"use client";
import { motion } from "framer-motion";
import { 
  ComputerDesktopIcon, 
  WrenchScrewdriverIcon, 
  ShieldCheckIcon,
  CpuChipIcon,
  ServerIcon,
  CommandLineIcon
} from "@heroicons/react/24/outline";

interface ToolCategory {
  name: string;
  icon: React.ReactNode;
  tools: string[];
  description: string;
}

const ToolsSection = () => {
  const toolCategories: ToolCategory[] = [
    {
      name: "Operating Systems",
      icon: <ComputerDesktopIcon className="h-8 w-8 text-trueAutumn-accentLight dark:text-trueAutumn-accentDark" />,
      tools: ["Windows OS", "Microsoft 365", "Google Workspace"],
      description: "Proficient in Windows administration and Microsoft 365 troubleshooting"
    },
    {
      name: "Hardware & Devices",
      icon: <WrenchScrewdriverIcon className="h-8 w-8 text-trueAutumn-accentLight dark:text-trueAutumn-accentDark" />,
      tools: ["Handheld Scanners", "Laptops", "Desktop PCs", "Mobile Devices"],
      description: "Experienced with device administration and hardware troubleshooting"
    },
    {
      name: "Support Tools",
      icon: <ServerIcon className="h-8 w-8 text-trueAutumn-accentLight dark:text-trueAutumn-accentDark" />,
      tools: ["Remote Support Tools", "Ticketing Systems", "Active Directory (Basic)"],
      description: "Skilled in first-line support and issue management"
    },
    {
      name: "Development Tools",
      icon: <CommandLineIcon className="h-8 w-8 text-trueAutumn-accentLight dark:text-trueAutumn-accentDark" />,
      tools: ["Git", "REST APIs", "Terminal/CLI", "HTML/CSS/JavaScript"],
      description: "Basic programming and version control experience"
    },
    {
      name: "Networking",
      icon: <CpuChipIcon className="h-8 w-8 text-trueAutumn-accentLight dark:text-trueAutumn-accentDark" />,
      tools: ["Basic Networking", "Microsoft Teams", "VPN Configuration"],
      description: "Fundamental networking knowledge and collaboration tools"
    },
    {
      name: "Professional Skills",
      icon: <ShieldCheckIcon className="h-8 w-8 text-trueAutumn-accentLight dark:text-trueAutumn-accentDark" />,
      tools: ["Problem Solving", "Documentation", "Team Collaboration", "Customer Service"],
      description: "Strong soft skills essential for IT support roles"
    }
  ];

  return (
    <section id="skills" className="py-16 sm:py-24 bg-trueAutumn-cardLight dark:bg-trueAutumn-cardDark">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-trueAutumn-textLight dark:text-trueAutumn-textDark mb-6 font-heading">Technical Proficiencies</h2>
          <p className="text-trueAutumn-textSecondaryLight dark:text-trueAutumn-textSecondaryDark text-lg max-w-3xl mx-auto font-body leading-relaxed">
            Skills and technologies I&apos;ve used in my current role and through self-study, focused on practical IT support capabilities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {toolCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-trueAutumn-light dark:bg-trueAutumn-dark rounded-xl p-8 border border-trueAutumn-borderLight dark:border-trueAutumn-borderDark hover:border-trueAutumn-accentLight dark:hover:border-trueAutumn-accentDark transition-colors group shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-trueAutumn-textLight dark:text-trueAutumn-textDark font-heading">{category.name}</h3>
              </div>
              
              <p className="text-trueAutumn-textSecondaryLight dark:text-trueAutumn-textSecondaryDark text-sm mb-6 font-body leading-relaxed">
                {category.description}
              </p>
              
              <div className="space-y-2">
                {category.tools.map((tool, toolIndex) => (
                  <div
                    key={toolIndex}
                    className="text-trueAutumn-accentLight dark:text-trueAutumn-accentDark text-sm bg-trueAutumn-accentLight/10 dark:bg-trueAutumn-accentDark/10 px-4 py-2 rounded-lg inline-block mr-2 mb-2 font-body"
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-trueAutumn-light dark:bg-trueAutumn-dark rounded-xl p-8 border border-trueAutumn-borderLight dark:border-trueAutumn-borderDark max-w-4xl mx-auto shadow-lg">
            <h3 className="text-trueAutumn-textLight dark:text-trueAutumn-textDark font-semibold mb-6 text-xl font-heading">Problem-Solving Approach</h3>
            <div className="grid md:grid-cols-3 gap-8 text-sm">
              <div className="text-center">
                <div className="text-trueAutumn-accentLight dark:text-trueAutumn-accentDark font-bold mb-3 text-lg font-heading">1. Identify</div>
                <div className="text-trueAutumn-textSecondaryLight dark:text-trueAutumn-textSecondaryDark font-body leading-relaxed">Understand the issue and gather relevant information</div>
              </div>
              <div className="text-center">
                <div className="text-trueAutumn-accentLight dark:text-trueAutumn-accentDark font-bold mb-3 text-lg font-heading">2. Troubleshoot</div>
                <div className="text-trueAutumn-textSecondaryLight dark:text-trueAutumn-textSecondaryDark font-body leading-relaxed">Use systematic approach to diagnose and resolve</div>
              </div>
              <div className="text-center">
                <div className="text-trueAutumn-accentLight dark:text-trueAutumn-accentDark font-bold mb-3 text-lg font-heading">3. Escalate</div>
                <div className="text-trueAutumn-textSecondaryLight dark:text-trueAutumn-textSecondaryDark font-body leading-relaxed">Document and escalate when resolution requires additional support</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ToolsSection; 