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
        // Light mode
        light: '#F0F5FF',              // background
        textLight: '#0B1120',          // primary text
        textSecondaryLight: '#3B5278', // secondary text
        accentLight: '#0284C7',        // cyan accent
        buttonLight: '#0284C7',        // button bg
        buttonLightHover: '#0369A1',   // button hover
        linkLight: '#7C3AED',          // violet links
        cardLight: '#FFFFFF',          // surfaces/cards
        borderLight: '#BFD0EB',        // borders

        // Dark mode
        dark: '#06090F',               // background
        textDark: '#CDD9FF',           // primary text
        textSecondaryDark: '#6E88B5',  // secondary text
        accentDark: '#22D3EE',         // cyan accent
        buttonDark: '#22D3EE',         // button bg
        buttonDarkHover: '#38BDF8',    // button hover
        linkDark: '#A78BFA',           // violet links
        cardDark: '#0B1120',           // surfaces/cards
        borderDark: '#1A2744',         // borders
      },
        // Legacy colors (for backward compatibility during transition)
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
      },
      screens: {
        'xs': '475px',
        '3xl': '1600px',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Lora', 'serif'],
        display: ['Lora', 'serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
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
