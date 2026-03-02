/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // 8pt spacing system
      spacing: {
        '0':'0px','1':'4px','2':'8px','3':'12px','4':'16px','5':'20px','6':'24px','7':'28px','8':'32px','10':'40px','12':'48px','14':'56px','16':'64px','20':'80px','24':'96px','28':'112px','32':'128px'
      },
      borderRadius: {
        md2:'10px',
        lg2:'14px'
      },
      maxWidth: {
        content:'68ch',
        'content-wide':'76ch'
      },
      colors: {
        trueAutumn: {
          // Light mode (unused — site is dark-only)
          light: '#F0F5FF',
          textLight: '#0B1120',
          textSecondaryLight: '#3B5278',
          accentLight: '#0284C7',
          buttonLight: '#0284C7',
          buttonLightHover: '#0369A1',
          linkLight: '#7C3AED',
          cardLight: '#FFFFFF',
          borderLight: '#BFD0EB',

          // NOC / Technical dark theme
          dark: '#060D18',               // deep navy page background
          textDark: '#B8D4F0',           // cool blue-white primary text
          textSecondaryDark: '#4A6A8A',  // steel blue muted text
          accentDark: '#00D9FF',         // electric cyan — primary accent
          buttonDark: '#00D9FF',         // button background
          buttonDarkHover: '#00B8E0',    // button hover
          linkDark: '#FF6B35',           // engineering orange — secondary accent
          cardDark: '#0A1628',           // dark navy surface/panel
          borderDark: '#1A3A5C',         // technical blue border
        },
        primary: {
          50: '#f0fdff',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#5fdafa',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'spin-slow': 'spin 60s linear infinite',
        'spin-reverse-slow': 'spinReverse 45s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'flow': 'flow 1.2s linear infinite',
        'scan-line': 'scanLine 8s linear infinite',
        'blink': 'blink 1s step-end infinite',
        'node-pulse': 'nodePulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        spinReverse: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        flow: {
          'to': { strokeDashoffset: '-20' },
        },
        scanLine: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(400%)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        nodePulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.04)', opacity: '0.85' },
        },
      },
      screens: {
        'xs': '475px',
        '3xl': '1600px',
      },
      fontFamily: {
        sans: ['var(--font-ibm)', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['var(--font-rajdhani)', 'system-ui', 'sans-serif'],
        display: ['var(--font-rajdhani)', 'system-ui', 'sans-serif'],
        body: ['var(--font-ibm)', 'sans-serif'],
        mono: ['var(--font-mono)', 'Courier New', 'monospace'],
      },
      fontWeight: {
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'extrabold': '800',
      },
    },
  },
  plugins: [],
};
