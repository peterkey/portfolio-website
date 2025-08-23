"use client";
import React from "react";
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
    <section id='about' className='py-16 sm:py-24 bg-trueAutumn-cardLight dark:bg-trueAutumn-cardDark' aria-labelledby="about-heading">
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
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
              <div className="inline-flex items-center gap-2 bg-trueAutumn-accentLight/10 dark:bg-trueAutumn-accentDark/10 border border-trueAutumn-accentLight/20 dark:border-trueAutumn-accentDark/20 text-trueAutumn-accentLight dark:text-trueAutumn-accentDark px-4 py-2 rounded-full font-body text-sm font-medium">
                <ComputerDesktopIcon className="w-4 h-4" />
                <span>Help Desk Support Specialist</span>
              </div>
              <h2 id="about-heading" className='text-4xl sm:text-5xl font-bold text-trueAutumn-textLight dark:text-trueAutumn-textDark font-heading leading-tight'>
                Customer-Focused IT Support Professional
              </h2>
            </div>

            {/* Professional Summary */}
            <div className="space-y-4">
                            <p className='text-lg text-trueAutumn-textSecondaryLight dark:text-trueAutumn-textSecondaryDark font-body leading-relaxed max-w-content'>
            I am a customer-focused IT Service Desk professional with hands-on experience delivering first-line technical support in a high-volume environment. 
            My role at Tesco has given me practical experience in diagnosing and resolving Microsoft 365, Windows OS, and Active Directory issues, 
            while providing excellent customer service to colleagues and customers alike.
          </p>
              <p className='text-lg text-trueAutumn-textSecondaryLight dark:text-trueAutumn-textSecondaryDark font-body leading-relaxed max-w-content'>
            Currently pursuing Microsoft 365 Fundamentals (MS-900) and CompTIA A+ certification, I bring a calm, professional, and solutions-driven approach 
                to technical support. I&apos;m known as the go-to troubleshooting contact for colleagues, with a proven ability to resolve login, device, and system
                problems within minutes.
              </p>
            </div>

            {/* Skills Snapshot */}
            <div className="space-y-6">
                            <h3 className="text-2xl font-semibold text-trueAutumn-textLight dark:text-trueAutumn-textDark font-heading">Skills Snapshot</h3>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Technical Skills */}
                <div className="bg-trueAutumn-light dark:bg-trueAutumn-dark rounded-lg2 p-8 border border-trueAutumn-borderLight dark:border-trueAutumn-borderDark">
                  <div className="flex items-center gap-3 mb-4">
                    <ComputerDesktopIcon className="h-6 w-6 text-trueAutumn-accentLight dark:text-trueAutumn-accentDark" />
                    <h4 className="text-lg font-semibold text-trueAutumn-textLight dark:text-trueAutumn-textDark font-heading">Technical Skills</h4>
                  </div>
                  <div className="space-y-4">
                    {technicalSkills.map((skill, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircleIcon className="h-4 w-4 text-trueAutumn-accentLight dark:text-trueAutumn-accentDark flex-shrink-0" />
                        <span className="text-trueAutumn-textSecondaryLight dark:text-trueAutumn-textSecondaryDark text-sm font-body">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Soft Skills */}
                <div className="bg-trueAutumn-light dark:bg-trueAutumn-dark rounded-lg2 p-8 border border-trueAutumn-borderLight dark:border-trueAutumn-borderDark">
                  <div className="flex items-center gap-3 mb-4">
                    <UserGroupIcon className="h-6 w-6 text-trueAutumn-accentLight dark:text-trueAutumn-accentDark" />
                    <h4 className="text-lg font-semibold text-trueAutumn-textLight dark:text-trueAutumn-textDark font-heading">Soft Skills</h4>
                  </div>
                  <div className="space-y-4">
                    {softSkills.map((skill, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircleIcon className="h-4 w-4 text-trueAutumn-accentLight dark:text-trueAutumn-accentDark flex-shrink-0" />
                        <span className="text-trueAutumn-textSecondaryLight dark:text-trueAutumn-textSecondaryDark text-sm font-body">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Career Goals */}
            <div className="bg-trueAutumn-light dark:bg-trueAutumn-dark rounded-lg2 p-8 sm:p-12 border border-trueAutumn-borderLight dark:border-trueAutumn-borderDark">
              <div className="flex items-center gap-3 mb-4">
                <AcademicCapIcon className="h-6 w-6 text-trueAutumn-accentLight dark:text-trueAutumn-accentDark" />
                <h4 className="text-lg font-semibold text-trueAutumn-textLight dark:text-trueAutumn-textDark font-heading">Career Goals</h4>
              </div>
              <p className="text-trueAutumn-textSecondaryLight dark:text-trueAutumn-textSecondaryDark font-body leading-relaxed max-w-content">
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
              <div className="absolute inset-0 bg-gradient-to-r from-trueAutumn-accentLight/20 dark:from-trueAutumn-accentDark/20 to-trueAutumn-accentLight/10 dark:to-trueAutumn-accentDark/10 rounded-2xl blur-3xl scale-110"></div>
              
              {/* Profile Image */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <Image
                  src="/images/about-image.png"
                  alt="Peter Williams-Key - Help Desk Support Specialist at work"
                  fill
                  className="object-cover rounded-2xl border-4 border-trueAutumn-accentLight/20 dark:border-trueAutumn-accentDark/20 shadow-2xl shadow-trueAutumn-accentLight/10 dark:shadow-trueAutumn-accentDark/10"
                  priority
                />
                
                {/* Floating Stats */}
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-4 -right-4 bg-trueAutumn-accentLight dark:bg-trueAutumn-accentDark text-trueAutumn-light dark:text-trueAutumn-dark p-4 rounded-xl shadow-lg"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold font-heading">8+</div>
                    <div className="text-xs font-body">Years Experience</div>
                  </div>
                </motion.div>
                
                <motion.div
                  animate={{ 
                    y: [0, 10, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute -bottom-4 -left-4 bg-trueAutumn-cardLight dark:bg-trueAutumn-cardDark text-trueAutumn-textLight dark:text-trueAutumn-textDark p-4 rounded-xl shadow-lg"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold font-heading">20+</div>
                    <div className="text-xs font-body">Colleagues Supported</div>
                  </div>
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