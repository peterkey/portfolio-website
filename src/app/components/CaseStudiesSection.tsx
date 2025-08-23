"use client";
import { motion } from "framer-motion";
import { 
  ExclamationTriangleIcon, 
  MagnifyingGlassIcon, 
  WrenchScrewdriverIcon, 
  CheckCircleIcon,
  ClockIcon,
  UserGroupIcon
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
      result: "Resolved all login issues without escalation, maintaining business continuity. Users regained access to email, documents, and scheduling systems immediately.",
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
      result: "Minimized delivery downtime and maintained customer service standards. Staff could process orders and complete deliveries without interruption.",
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
      result: "Enabled colleagues to use the system independently, reducing management workload and improving operational efficiency.",
      metrics: {
        resolutionTime: "30-45 minutes per training session",
        usersAffected: 8,
        costSavings: "Reduced management dependency"
      },
      icon: <MagnifyingGlassIcon className="h-8 w-8 text-green-500" />
    }
  ];

  return (
    <section id="case-studies" className="py-16 sm:py-24 px-4 bg-trueAutumn-cardLight dark:bg-trueAutumn-cardDark">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-trueAutumn-textLight dark:text-trueAutumn-textDark mb-4 font-heading">Technical Support Case Studies</h2>
          <p className="text-trueAutumn-textSecondaryLight dark:text-trueAutumn-textSecondaryDark text-lg max-w-content mx-auto font-body">
            Real-world examples of technical issues I&apos;ve resolved in my current role, demonstrating systematic problem-solving and efficient resolution.
          </p>
        </motion.div>

        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-trueAutumn-light dark:bg-trueAutumn-dark rounded-lg2 border border-trueAutumn-borderLight dark:border-trueAutumn-borderDark overflow-hidden"
            >
              {/* Header */}
              <div className="bg-trueAutumn-accentLight/10 dark:bg-trueAutumn-accentDark/10 p-8 border-b border-trueAutumn-borderLight dark:border-trueAutumn-borderDark">
                <div className="flex items-center gap-4 mb-3">
                  {study.icon}
                  <div>
                    <h3 className="text-xl font-semibold text-trueAutumn-textLight dark:text-trueAutumn-textDark font-heading">{study.title}</h3>
                    <span className="text-trueAutumn-accentLight dark:text-trueAutumn-accentDark text-sm bg-trueAutumn-accentLight/20 dark:bg-trueAutumn-accentDark/20 px-2 py-1 rounded-full font-body">
                      {study.category}
                    </span>
                  </div>
                </div>
                
                {/* Metrics */}
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-1 text-[#ADB7BE]">
                    <ClockIcon className="h-4 w-4" />
                    <span>Resolution: {study.metrics.resolutionTime}</span>
                  </div>
                  <div className="flex items-center gap-1 text-[#ADB7BE]">
                    <UserGroupIcon className="h-4 w-4" />
                    <span>Users Affected: {study.metrics.usersAffected}</span>
                  </div>
                  {study.metrics.costSavings && (
                    <div className="flex items-center gap-1 text-green-400">
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
                      <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                        <ExclamationTriangleIcon className="h-5 w-5 text-red-500" />
                        Problem
                      </h4>
                      <p className="text-[#ADB7BE] text-sm">{study.problem}</p>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                        <MagnifyingGlassIcon className="h-5 w-5 text-blue-500" />
                        Process
                      </h4>
                      <ol className="list-decimal list-inside space-y-1">
                        {study.process.map((step, stepIndex) => (
                          <li key={stepIndex} className="text-[#ADB7BE] text-sm">
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>

                  {/* Solution & Result */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                        <WrenchScrewdriverIcon className="h-5 w-5 text-green-500" />
                        Solution
                      </h4>
                      <p className="text-[#ADB7BE] text-sm">{study.solution}</p>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                        <CheckCircleIcon className="h-5 w-5 text-green-500" />
                        Result
                      </h4>
                      <p className="text-[#ADB7BE] text-sm">{study.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-[#1a1a1a] rounded-lg2 p-8 border border-[#333] max-w-content mx-auto">
            <h3 className="text-white font-semibold mb-2">Systematic Problem-Solving Approach</h3>
            <p className="text-[#ADB7BE] text-sm">
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