"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Bars3Icon, 
  XMarkIcon, 
  DocumentArrowDownIcon 
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Logo from "../../../public/peterkey-black.png";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin.svg";
import ThemeToggle from "./ThemeToggle";

interface NavLink {
  title: string;
  path: string;
  description?: string;
}

const navLinks: NavLink[] = [
  { title: "Home", path: "#home", description: "Back to top" },
  { title: "About", path: "#about", description: "Professional summary" },
  { title: "Skills", path: "#skills", description: "Technical & soft skills" },
  { title: "Certifications", path: "#certifications", description: "Current studies" },
  { title: "Experience", path: "#experience", description: "Work history" },
  { title: "Projects", path: "#projects", description: "Technical projects" },
  { title: "Achievements", path: "#achievements", description: "Key metrics" },
  { title: "Contact", path: "#contact", description: "Get in touch" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Smooth scroll function
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    const targetId = path.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    
    setIsOpen(false); // Close mobile menu
  };

  const downloadCV = () => {
    // Replace with actual CV download link
    const link = document.createElement('a');
    link.href = '/cv.txt'; // Update with actual CV file path
    link.download = 'Peter_Williams-Key_CV.pdf';
    link.click();
  };

  return (
    <>
      {/* Backdrop for mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Main Navbar */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-trueAutumn-light/95 dark:bg-trueAutumn-dark/95 backdrop-blur-md border-b border-trueAutumn-borderLight/50 dark:border-trueAutumn-borderDark/50 shadow-lg' 
            : 'bg-trueAutumn-light dark:bg-trueAutumn-dark'
        }`}
      role="navigation"
      aria-label="Main navigation"
    >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex items-center justify-between h-16 lg:h-20">
            
            {/* Logo/Name */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-3"
            >
              {/* <Image 
                src={Logo} 
                alt="Peter Williams-Key" 
                className="w-10 h-10 lg:w-12 lg:h-12 rounded-full"
              priority
              /> */}
              <span className="text-trueAutumn-textLight dark:text-trueAutumn-textDark font-heading font-semibold text-lg lg:text-xl hidden sm:block">
                Peter Williams-Key
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.title}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <a
                    href={link.path}
                    onClick={(e) => handleNavClick(e, link.path)}
                    className="relative text-trueAutumn-textSecondaryLight dark:text-trueAutumn-textSecondaryDark hover:text-trueAutumn-accentLight dark:hover:text-trueAutumn-accentDark transition-colors duration-200 font-body font-medium text-sm group"
                    aria-label={`Navigate to ${link.title} section`}
                  >
                    {link.title}
                    {/* Hover underline effect */}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-trueAutumn-accentLight dark:bg-trueAutumn-accentDark transition-all duration-300 group-hover:w-full"></span>
                    {/* Tooltip */}
                    <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-trueAutumn-cardDark dark:bg-trueAutumn-cardLight text-trueAutumn-textDark dark:text-trueAutumn-textLight text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                      {link.description}
                    </span>
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Social Links */}
              <div className="flex items-center space-x-2">
                <a
                  href="https://github.com/peterkey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-trueAutumn-textSecondaryLight dark:text-trueAutumn-textSecondaryDark hover:text-trueAutumn-accentLight dark:hover:text-trueAutumn-accentDark transition-colors duration-200"
                  aria-label="Visit GitHub profile"
                >
                  <Image src={GithubIcon} alt="GitHub" className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/pkey/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 transition-all duration-200 hover:scale-110"
                  aria-label="Visit LinkedIn profile"
          >
            <Image 
              src={LinkedinIcon} 
                    alt="LinkedIn" 
                    className="w-5 h-5"
                    style={{ filter: 'brightness(0) saturate(100%) invert(23%) sepia(87%) saturate(1734%) hue-rotate(191deg) brightness(93%) contrast(91%)' }}
                  />
                </a>
        </div>
        
              {/* Theme Toggle */}
              <ThemeToggle />
        
              {/* Download CV Button */}
              <motion.button
                onClick={downloadCV}
                className="flex items-center space-x-2 bg-trueAutumn-buttonLight dark:bg-trueAutumn-buttonDark hover:bg-trueAutumn-buttonLightHover dark:hover:bg-trueAutumn-buttonDarkHover text-trueAutumn-light dark:text-trueAutumn-dark px-4 py-2 rounded-lg font-body font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-trueAutumn-accentLight dark:focus:ring-trueAutumn-accentDark focus:ring-offset-2 focus:ring-offset-trueAutumn-light dark:focus:ring-offset-trueAutumn-dark"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Download CV"
              >
                <DocumentArrowDownIcon className="w-4 h-4" />
                <span className="hidden sm:inline">Download CV</span>
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-trueAutumn-textLight dark:text-trueAutumn-textDark hover:text-trueAutumn-accentLight dark:hover:text-trueAutumn-accentDark transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-trueAutumn-accentLight dark:focus:ring-trueAutumn-accentDark focus:ring-offset-2 focus:ring-offset-trueAutumn-light dark:focus:ring-offset-trueAutumn-dark rounded"
              aria-expanded={isOpen}
            aria-controls="mobile-menu"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <XMarkIcon className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Bars3Icon className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden bg-trueAutumn-cardLight dark:bg-trueAutumn-cardDark border-t border-trueAutumn-borderLight dark:border-trueAutumn-borderDark"
            >
              <div className="px-4 py-6 space-y-4">
                {/* Mobile Navigation Links */}
                <div className="space-y-2">
            {navLinks.map((link, index) => (
                    <motion.a
                      key={link.title}
                      href={link.path}
                      onClick={(e) => handleNavClick(e, link.path)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="block py-3 px-4 text-trueAutumn-textLight dark:text-trueAutumn-textDark hover:text-trueAutumn-accentLight dark:hover:text-trueAutumn-accentDark hover:bg-trueAutumn-borderLight dark:hover:bg-trueAutumn-borderDark rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-trueAutumn-accentLight dark:focus:ring-trueAutumn-accentDark focus:ring-offset-2 focus:ring-offset-trueAutumn-cardLight dark:focus:ring-offset-trueAutumn-cardDark font-body"
                      aria-label={`Navigate to ${link.title} section`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{link.title}</span>
                        {link.description && (
                          <span className="text-trueAutumn-textSecondaryLight dark:text-trueAutumn-textSecondaryDark text-sm">{link.description}</span>
                        )}
                      </div>
                    </motion.a>
                  ))}
        </div>

                {/* Mobile Actions */}
                <div className="pt-4 border-t border-trueAutumn-borderLight dark:border-trueAutumn-borderDark space-y-4">
                  {/* Social Links */}
                  <div className="flex items-center justify-center space-x-4">
                    <a
                      href="https://github.com/peterkey"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 text-trueAutumn-textSecondaryLight dark:text-trueAutumn-textSecondaryDark hover:text-trueAutumn-accentLight dark:hover:text-trueAutumn-accentDark transition-colors duration-200"
                      aria-label="Visit GitHub profile"
                    >
                      <Image src={GithubIcon} alt="GitHub" className="w-6 h-6" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/pkey/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 transition-all duration-200 hover:scale-110"
                      aria-label="Visit LinkedIn profile"
                    >
                      <Image 
                        src={LinkedinIcon} 
                        alt="LinkedIn" 
                        className="w-6 h-6"
                        style={{ filter: 'brightness(0) saturate(100%) invert(23%) sepia(87%) saturate(1734%) hue-rotate(191deg) brightness(93%) contrast(91%)' }}
                      />
                    </a>
                    
                    {/* Theme Toggle */}
                    <ThemeToggle className="!w-10 !h-10" />
      </div>
      
                  {/* Download CV Button */}
                  <motion.button
                    onClick={downloadCV}
                    className="w-full flex items-center justify-center space-x-2 bg-trueAutumn-buttonLight dark:bg-trueAutumn-buttonDark hover:bg-trueAutumn-buttonLightHover dark:hover:bg-trueAutumn-buttonDarkHover text-trueAutumn-light dark:text-trueAutumn-dark px-4 py-3 rounded-lg font-body font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-trueAutumn-accentLight dark:focus:ring-trueAutumn-accentDark focus:ring-offset-2 focus:ring-offset-trueAutumn-cardLight dark:focus:ring-offset-trueAutumn-cardDark"
                    whileTap={{ scale: 0.95 }}
                    aria-label="Download CV"
                  >
                    <DocumentArrowDownIcon className="w-5 h-5" />
                    <span>Download CV</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
    </nav>

      {/* Spacer to prevent content from hiding under navbar */}
      <div className="h-16 lg:h-20"></div>
    </>
  );
};

export default Navbar; 