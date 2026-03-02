"use client";
import { motion } from "framer-motion";
import {
  CheckCircleIcon,
  ClockIcon,
  AcademicCapIcon
} from "@heroicons/react/24/outline";

interface Certification {
  name: string;
  issuer: string;
  status: string;
  date?: string;
  progress?: number;
  description: string;
}

const CertificationsSection = () => {
  const certifications: Certification[] = [
    {
      name: "Microsoft 365 Fundamentals (MS-900)",
      issuer: "Microsoft",
      status: "in-progress",
      progress: 60,
      description: "Self-study via Microsoft Learn. Covers Microsoft 365 services, security, compliance, and pricing fundamentals."
    },
    {
      name: "Basic Active Directory Administration",
      issuer: "Microsoft Learning",
      status: "in-progress",
      progress: 40,
      description: "Self-study via Microsoft Learn & YouTube Labs. User management and basic administration tasks."
    },
    {
      name: "ServiceNow & Jira Service Desk Ticketing Basics",
      issuer: "Self-Directed Learning",
      status: "in-progress",
      progress: 30,
      description: "Self-study via YouTube tutorials. Ticket management and workflow processes for IT support."
    },
    {
      name: "Google IT Support Skills",
      issuer: "Google Digital Garage",
      status: "in-progress",
      progress: 50,
      description: "IT fundamentals and support methodologies through Google's digital skills program."
    },
    {
      name: "CompTIA A+ Certification",
      issuer: "CompTIA",
      status: "in-progress",
      progress: 25,
      description: "Hardware, software, and troubleshooting fundamentals for IT support professionals."
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircleIcon className="h-6 w-6 text-green-500" />;
      case "in-progress":
        return <ClockIcon className="h-6 w-6 text-yellow-500" />;
      case "planned":
        return <AcademicCapIcon className="h-6 w-6 text-blue-500" />;
      default:
        return <AcademicCapIcon className="h-6 w-6 text-gray-500" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "Completed";
      case "in-progress":
        return "In Progress";
      case "planned":
        return "Planned";
      default:
        return "Unknown";
    }
  };

  return (
    <section id="certifications" className="py-20 sm:py-28 bg-trueAutumn-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-100" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="eyebrow mb-3">Professional development</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-trueAutumn-textDark mb-4 font-heading">Certifications & Training</h2>
          <p className="text-trueAutumn-textSecondaryDark text-lg max-w-3xl mx-auto font-body leading-relaxed">
            Ongoing professional development and certifications to strengthen my technical foundation and stay current with industry standards.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glow-card glass border rounded-2xl p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  {getStatusIcon(cert.status)}
                  <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                    cert.status === 'completed' ? 'bg-green-500/20 text-green-600' :
                    cert.status === 'in-progress' ? 'bg-[#00D9FF]/10 text-[#00D9FF]' :
                    'bg-blue-500/20 text-blue-600'
                  }`}>
                    {getStatusText(cert.status)}
                  </span>
                </div>
                {cert.progress && (
                  <div className="text-right">
                    <div className="text-2xl font-bold text-[#00D9FF] font-heading">{cert.progress}%</div>
                    <div className="text-sm text-trueAutumn-textSecondaryDark font-body">Complete</div>
                  </div>
                )}
              </div>

              <h3 className="text-xl font-semibold text-trueAutumn-textDark mb-2 font-heading">{cert.name}</h3>
              <p className="text-[#FF6B35] text-sm mb-4 font-body">{cert.issuer}</p>
              <p className="text-trueAutumn-textSecondaryDark text-sm font-body leading-relaxed">{cert.description}</p>

              {cert.progress && (
                <div className="mt-6">
                  <div className="flex justify-between text-sm text-trueAutumn-textSecondaryDark mb-2 font-body">
                    <span>Progress</span>
                    <span>{cert.progress}%</span>
                  </div>
                  <div className="w-full bg-[#1A3A5C] rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-[#00D9FF] to-[#FF6B35] h-2 rounded-full transition-all duration-500"
                      style={{ width: `${cert.progress}%` }}
                    />
                  </div>
                </div>
              )}
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
          <div className="glass border rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-trueAutumn-textDark font-semibold mb-4 text-xl font-heading">Commitment to Learning</h3>
            <p className="text-trueAutumn-textSecondaryDark font-body leading-relaxed">
              I&apos;m actively pursuing these certifications to demonstrate my commitment to professional growth and technical excellence in IT support.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;
