"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  DocumentArrowDownIcon, 
  EnvelopeIcon,
  SparklesIcon 
} from "@heroicons/react/24/outline";

const HeroSection = () => {
  // Temporarily disable the theme switching to fix any issues
  const isDarkMode = false;
  const imageKey = 0;

  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-trueAutumn-light dark:bg-trueAutumn-dark"
      aria-labelledby="hero-heading"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-trueAutumn-accentLight/5 dark:from-trueAutumn-accentDark/5 to-transparent"></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-trueAutumn-accentLight/10 dark:from-trueAutumn-accentDark/10 via-transparent to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left space-y-6"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-trueAutumn-accentLight/10 dark:bg-trueAutumn-accentDark/10 border border-trueAutumn-accentLight/20 dark:border-trueAutumn-accentDark/20 text-trueAutumn-accentLight dark:text-trueAutumn-accentDark px-4 py-2 rounded-full font-body text-sm font-medium"
            >
              <SparklesIcon className="w-4 h-4" />
              <span>Available for new opportunities</span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1
                id="hero-heading"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl sm:text-5xl font-display font-bold text-trueAutumn-textLight dark:text-trueAutumn-textDark leading-tight"
              >
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-trueAutumn-textLight dark:from-trueAutumn-textDark via-trueAutumn-accentLight dark:via-trueAutumn-accentDark to-trueAutumn-textLight dark:to-trueAutumn-textDark">
              Hello, I&apos;m{" "}
            </span>
                <span className="block text-trueAutumn-textLight dark:text-trueAutumn-textDark">
            <TypeAnimation
              sequence={[
                "Peter Williams-Key",
                      2000,
                      "Help Desk Support Specialist",
                      2000,
                      "IT Service Desk Professional",
                      2000,
                      "Technical Support Expert",
                      2000,
                      "Peter"
                    ]}
                    wrapper="span"
                    speed={50}
                    deletionSpeed={75}
                    repeat={0}
                    className="text-trueAutumn-accentLight dark:text-trueAutumn-accentDark"
                    aria-label="I am Peter Williams-Key, a Help Desk Support Specialist"
                  />
                </span>
              </motion.h1>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl text-trueAutumn-textSecondaryLight dark:text-trueAutumn-textSecondaryDark font-body leading-relaxed max-w-content mx-auto lg:mx-0"
            >
            Customer-focused IT Service Desk professional with hands-on experience delivering first-line technical support in a high-volume environment. 
              Skilled at diagnosing and resolving Microsoft 365, Windows OS, and Active Directory issues with proven ability to resolve problems within minutes.
            </motion.p>

            {/* Key Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="grid grid-cols-2 gap-4 max-w-content mx-auto lg:mx-0"
            >
              <div className="text-center lg:text-left">
                <div className="text-2xl font-heading font-bold text-trueAutumn-accentLight dark:text-trueAutumn-accentDark">8+</div>
                <div className="text-sm text-trueAutumn-textSecondaryLight dark:text-trueAutumn-textSecondaryDark font-body">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-heading font-bold text-trueAutumn-accentLight dark:text-trueAutumn-accentDark">20+</div>
                <div className="text-sm text-trueAutumn-textSecondaryLight dark:text-trueAutumn-textSecondaryDark font-body">Colleagues Supported</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              {/* Primary CTA - Download CV */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center justify-center gap-3 bg-trueAutumn-buttonLight dark:bg-trueAutumn-buttonDark hover:bg-trueAutumn-buttonLightHover dark:hover:bg-trueAutumn-buttonDarkHover text-trueAutumn-light dark:text-trueAutumn-dark px-6 py-3 rounded-lg font-body font-semibold text-base transition-all duration-300 hover:shadow-lg hover:shadow-trueAutumn-accentLight/25 dark:hover:shadow-trueAutumn-accentDark/25 focus:outline-none focus:ring-2 focus:ring-trueAutumn-accentLight dark:focus:ring-trueAutumn-accentDark focus:ring-offset-2 focus:ring-offset-trueAutumn-light dark:focus:ring-offset-trueAutumn-dark"
                aria-label="Download my CV"
              >
                <DocumentArrowDownIcon className="w-5 h-5 transition-transform group-hover:translate-y-1" />
                <span>Download CV</span>
              </motion.button>

              {/* Secondary CTA - Contact Me */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center justify-center gap-3 bg-transparent border-2 border-trueAutumn-accentLight/30 dark:border-trueAutumn-accentDark/30 text-trueAutumn-accentLight dark:text-trueAutumn-accentDark px-4 py-2 rounded-lg font-body font-semibold text-sm transition-all duration-300 hover:bg-trueAutumn-accentLight/10 dark:hover:bg-trueAutumn-accentDark/10 hover:border-trueAutumn-accentLight dark:hover:border-trueAutumn-accentDark focus:outline-none focus:ring-2 focus:ring-trueAutumn-accentLight dark:focus:ring-trueAutumn-accentDark focus:ring-offset-2 focus:ring-offset-trueAutumn-light dark:focus:ring-offset-trueAutumn-dark"
                aria-label="Contact me for opportunities"
              >
                <EnvelopeIcon className="w-5 h-5 transition-transform group-hover:translate-y-1" />
                <span>Contact Me</span>
            </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex items-center justify-center lg:justify-start gap-6 pt-4"
            >
              <span className="text-trueAutumn-textSecondaryLight dark:text-trueAutumn-textSecondaryDark font-body text-sm">Connect with me:</span>
              <div className="flex gap-4">
                <a
                  href="https://github.com/peterkey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-trueAutumn-textSecondaryLight dark:text-trueAutumn-textSecondaryDark hover:text-trueAutumn-accentLight dark:hover:text-trueAutumn-accentDark transition-colors duration-300"
                  aria-label="Visit my GitHub profile"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/pkey/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0a66c2] hover:text-[#004182] transition-colors duration-300"
                  aria-label="Visit my LinkedIn profile"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
          </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Profile Image Container */}
            <div className="relative">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-trueAutumn-accentLight/20 dark:from-trueAutumn-accentDark/20 to-trueAutumn-accentLight/10 dark:to-trueAutumn-accentDark/10 rounded-full blur-3xl scale-110"></div>
              
                            {/* Profile Image */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <Image
                  src="/images/profile-pic-light.png"
                  alt="Peter Williams-Key - Help Desk Support Specialist"
                  fill
                  className="object-cover rounded-full border-4 border-trueAutumn-accentLight/20 dark:border-trueAutumn-accentDark/20 shadow-2xl shadow-trueAutumn-accentLight/10 dark:shadow-trueAutumn-accentDark/10"
                  priority
                />
                
                {/* Floating Elements */}
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
                  className="absolute -top-4 -right-4 bg-trueAutumn-accentLight dark:bg-trueAutumn-accentDark text-trueAutumn-light dark:text-trueAutumn-dark p-3 rounded-full shadow-lg"
                >
                  <DocumentArrowDownIcon className="w-6 h-6" />
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
                  className="absolute -bottom-4 -left-4 bg-trueAutumn-cardLight dark:bg-trueAutumn-cardDark text-trueAutumn-textLight dark:text-trueAutumn-textDark p-3 rounded-full shadow-lg"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </motion.div>
              </div>
          </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-trueAutumn-accentLight/30 dark:border-trueAutumn-accentDark/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-trueAutumn-accentLight dark:bg-trueAutumn-accentDark rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection; 