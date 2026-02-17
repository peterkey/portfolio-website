"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  ComputerDesktopIcon, 
  UserGroupIcon, 
  AcademicCapIcon,
  CheckCircleIcon 
} from "@heroicons/react/24/outline";

const AboutSection = () => {
  const technicalSkills = [
    "Microsoft 365 Support",
    "Windows OS Troubleshooting", 
    "Active Directory (Basic)",
    "Remote Support Tools",
    "Microsoft Teams",
    "Google Workspace",
    "Git & REST APIs",
    "Basic Networking"
  ];

  const softSkills = [
    "Customer Service Excellence",
    "Problem Solving",
    "Technical Documentation",
    "Team Collaboration",
    "User Training",
    "Time Management",
    "Communication",
    "Adaptability"
  ];

  return (
    <section id='about' className='py-20 sm:py-28 bg-trueAutumn-cardDark relative overflow-hidden' aria-labelledby="about-heading">
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center'>
          
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Professional Headline */}
            <div className="space-y-4">
              <span className="eyebrow mb-3">Who I am</span>
              <h2 id="about-heading" className='text-3xl sm:text-4xl font-bold text-trueAutumn-textDark font-heading leading-tight'>
                Customer-Focused IT Support Professional
              </h2>
            </div>

            {/* Professional Summary */}
            <div className="space-y-4">
                            <p className='text-lg text-trueAutumn-textSecondaryDark font-body leading-relaxed max-w-content'>
            I am a customer-focused IT Service Desk professional with hands-on experience delivering first-line technical support in a high-volume environment. 
            My role at Tesco has given me practical experience in diagnosing and resolving Microsoft 365, Windows OS, and Active Directory issues, 
            while providing excellent customer service to colleagues and customers alike.
          </p>
              <p className='text-lg text-trueAutumn-textSecondaryDark font-body leading-relaxed max-w-content'>
            Currently pursuing Microsoft 365 Fundamentals (MS-900) and CompTIA A+ certification, I bring a calm, professional, and solutions-driven approach 
                to technical support. I&apos;m known as the go-to troubleshooting contact for colleagues, with a proven ability to resolve login, device, and system
                problems within minutes.
              </p>
            </div>

            {/* Skills Snapshot */}
            <div className="space-y-6">
                            <h3 className="text-2xl font-semibold text-trueAutumn-textDark font-heading">Skills Snapshot</h3>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Technical Skills */}
                <div className="glow-card glass border rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-[#22D3EE]/10 flex items-center justify-center text-[#22D3EE]">
                      <ComputerDesktopIcon className="h-5 w-5" />
                    </div>
                    <h4 className="text-base font-semibold text-trueAutumn-textDark font-heading">Technical Skills</h4>
                  </div>
                  <div className="space-y-3">
                    {technicalSkills.map((skill, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircleIcon className="h-4 w-4 text-[#22D3EE] flex-shrink-0" />
                        <span className="text-trueAutumn-textSecondaryDark text-sm font-body">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Soft Skills */}
                <div className="glow-card glass border rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-[#A78BFA]/10 flex items-center justify-center text-[#A78BFA]">
                      <UserGroupIcon className="h-5 w-5" />
                    </div>
                    <h4 className="text-base font-semibold text-trueAutumn-textDark font-heading">Soft Skills</h4>
                  </div>
                  <div className="space-y-3">
                    {softSkills.map((skill, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircleIcon className="h-4 w-4 text-[#A78BFA] flex-shrink-0" />
                        <span className="text-trueAutumn-textSecondaryDark text-sm font-body">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Career Goals */}
            <div className="glow-card glass border rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[#22D3EE]/10 flex items-center justify-center text-[#22D3EE]">
                  <AcademicCapIcon className="h-5 w-5" />
                </div>
                <h4 className="text-base font-semibold text-trueAutumn-textDark font-heading">Career Goals</h4>
              </div>
              <p className="text-trueAutumn-textSecondaryDark font-body leading-relaxed max-w-content">
                I&apos;m seeking a dedicated IT support role where I can apply my problem-solving skills, continue learning, and contribute to organizational success
                while growing professionally in the field. My goal is to transition from customer service to a full-time IT support position where I can leverage
                my technical abilities and customer service experience to provide exceptional support to end users.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Background Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#22D3EE]/15 to-[#A78BFA]/10 blur-3xl scale-110 pointer-events-none" />

              {/* Profile Image */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <Image
                  src="/images/about-image.png"
                  alt="Peter Williams-Key - Help Desk Support Specialist at work"
                  fill
                  className="object-cover rounded-2xl"
                  style={{ border: "1px solid rgba(34, 211, 238, 0.2)" }}
                  priority
                />

                {/* Floating Stats */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-3 -right-3 glass border rounded-xl px-4 py-3 text-center"
                  style={{ boxShadow: "0 0 20px rgba(34, 211, 238, 0.15)" }}
                >
                  <div className="font-mono font-bold text-xl" style={{ color: "#22D3EE" }}>8+</div>
                  <div className="text-[10px] font-mono text-[#6E88B5] tracking-wide mt-0.5">Years Exp.</div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  className="absolute -bottom-3 -left-3 glass border rounded-xl px-4 py-3 text-center"
                >
                  <div className="font-mono font-bold text-xl" style={{ color: "#22D3EE" }}>20+</div>
                  <div className="text-[10px] font-mono text-[#6E88B5] tracking-wide mt-0.5">Colleagues</div>
                </motion.div>
              </div>
          </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 