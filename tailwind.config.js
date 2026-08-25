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
      colors: {
        // Dark, engineered palette — deep near-black base, luminous teal/blue accents
        ink:            '#0A0F0D',   // deepest — footer, terminal wells
        base:           '#0E1512',   // page background
        surface:        '#121A16',   // alternating sections
        lift:           '#17211C',   // elevated cards
        border:         '#243129',   // hairline borders on dark
        text:           '#FAFAFA',   // primary text — off-white
        muted:          '#93A69C',   // secondary text — cool grey-green, AA on base/surface
        faint:          '#5C6E64',   // tertiary — large labels/ornaments only
        accent:         '#2E7D6F',   // deep teal — fills, borders, glows, large type
        'accent-bright':'#4FB3A0',   // teal tint — small text on dark (AA)
        'accent-alt':   '#5B7FA6',   // dusty blue — large type, borders
        'blue-bright':  '#8FAECE',   // dusty blue tint — small text on dark (AA)
        'accent-fg':    '#FFFFFF',   // text on accent fills
      },
      fontFamily: {
        heading: ["'Clash Display'", 'system-ui', 'sans-serif'],
        body:    ['var(--font-plex)', 'system-ui', 'sans-serif'],
        mono:    ['var(--font-mono)', 'Courier New', 'monospace'],
        sans:    ['var(--font-plex)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Fluid display scale — defined as [size, lineHeight]
        'display-xl': ['clamp(3.15rem, 12.6vw, 11.7rem)', { lineHeight: '0.90', letterSpacing: '-0.04em' }],
        'display':    ['clamp(2.5rem, 8vw, 7.5rem)',  { lineHeight: '0.92', letterSpacing: '-0.03em' }],
        'section':    ['clamp(2.25rem, 6vw, 5rem)',   { lineHeight: '1.05', letterSpacing: '-0.025em' }],
        'heading':    ['clamp(1.75rem, 4vw, 3.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'title':      ['clamp(1.25rem, 2.5vw, 2rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'label':      ['0.6875rem',                   { lineHeight: '1',    letterSpacing: '0.18em'  }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      screens: {
        'xs': '475px',
        '3xl': '1600px',
      },
      transitionTimingFunction: {
        'expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      animation: {
        'fade-up':   'fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in':   'fadeIn 0.5s ease forwards',
        'grain':     'grain 8s steps(10) infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -10%)' },
          '30%': { transform: 'translate(7%, -25%)' },
          '50%': { transform: 'translate(-15%, 10%)' },
          '70%': { transform: 'translate(0%, 15%)' },
          '90%': { transform: 'translate(-10%, 10%)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
