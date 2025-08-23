"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = "" }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Get initial theme from localStorage or default to light
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    const initialTheme = savedTheme || 'light';
    setTheme(initialTheme);
    
    // Apply theme to document
    const root = document.documentElement;
    if (initialTheme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    
    // Apply theme to document
    const root = document.documentElement;
    if (newTheme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    // Save to localStorage
    localStorage.setItem('theme', newTheme);
  };

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className={`
        relative inline-flex items-center justify-center
        w-12 h-12 rounded-full
        bg-trueAutumn-cardLight dark:bg-trueAutumn-cardDark
        border-2 border-trueAutumn-borderLight dark:border-trueAutumn-borderDark
        ${className}
      `}>
        <SunIcon className="w-6 h-6 text-trueAutumn-accentLight dark:text-trueAutumn-accentDark" />
      </div>
    );
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className={`
        relative inline-flex items-center justify-center
        w-12 h-12 rounded-full
        bg-trueAutumn-cardLight dark:bg-trueAutumn-cardDark
        border-2 border-trueAutumn-borderLight dark:border-trueAutumn-borderDark
        text-trueAutumn-accentLight dark:text-trueAutumn-accentDark
        hover:bg-trueAutumn-borderLight dark:hover:bg-trueAutumn-borderDark
        focus:outline-none focus:ring-2 focus:ring-trueAutumn-accentLight dark:focus:ring-trueAutumn-accentDark
        focus:ring-offset-2 focus:ring-offset-trueAutumn-light dark:focus:ring-offset-trueAutumn-dark
        transition-all duration-300 ease-in-out
        shadow-lg hover:shadow-xl
        ${className}
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -180, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 180, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {theme === 'light' ? (
          <MoonIcon className="w-6 h-6" />
        ) : (
          <SunIcon className="w-6 h-6" />
        )}
      </motion.div>
      
      {/* Tooltip */}
      <div className="
        absolute -bottom-10 left-1/2 transform -translate-x-1/2
        px-2 py-1 text-xs font-body
        bg-trueAutumn-cardDark dark:bg-trueAutumn-cardLight
        text-trueAutumn-textDark dark:text-trueAutumn-textLight
        rounded shadow-lg
        opacity-0 group-hover:opacity-100
        pointer-events-none
        transition-opacity duration-200
        whitespace-nowrap
      ">
        {theme === 'light' ? 'Dark mode' : 'Light mode'}
      </div>
    </motion.button>
  );
};

export default ThemeToggle;
