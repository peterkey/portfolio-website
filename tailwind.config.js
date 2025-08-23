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
        light: '#FAF7F2',              // background
        textLight: '#2F332A',          // primary text
        textSecondaryLight: '#6B6B61', // secondary text
        accentLight: '#8A9A5B',        // sage accent
        buttonLight: '#8A9A5B',        // button bg
        buttonLightHover: '#7B8C52',   // button hover
        linkLight: '#6F8250',          // links
        cardLight: '#FFFFFF',          // surfaces/cards
        borderLight: '#E9E4DD',        // borders

        // Dark mode
        dark: '#131414',               // background
        textDark: '#E7E4DF',           // primary text
        textSecondaryDark: '#B8B3AC',  // secondary text
        accentDark: '#B3A369',         // brass accent
        buttonDark: '#B3A369',         // button bg
        buttonDarkHover: '#C2AE79',    // button hover
        linkDark: '#D6D3CD',           // links
        cardDark: '#1C1E1D',           // surfaces/cards
        borderDark: '#2A2C2A',         // borders
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
