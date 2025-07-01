/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'cyber': {
          'primary': '#0d1117',
          'secondary': '#161b22',
          'accent': '#21262d',
          'border': '#30363d',
          'neon-cyan': '#00e0ff',
          'neon-green': '#27ff9a',
          'neon-purple': '#a855f7',
          'text-primary': '#f0f6fc',
          'text-secondary': '#8b949e',
          'danger': '#ff4757',
          'warning': '#ffa502',
          'success': '#2ed573',
        }
      },
      fontFamily: {
        'mono': ['Fira Code', 'monospace'],
        'sans': ['Inter', 'sans-serif'],
      },
      animation: {
        'glitch': 'glitch 0.5s infinite',
        'neon-flicker': 'neon-flicker 3s infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
        'gradient-shift': 'gradient-shift 3s ease infinite',
        'typing': 'typing 3.5s steps(40, end)',
        'blink-caret': 'blink-caret 0.75s step-end infinite',
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'neon-cyan': '0 0 20px #00e0ff',
        'neon-green': '0 0 20px #27ff9a',
        'neon-purple': '0 0 20px #a855f7',
        'cyber': '0 8px 32px rgba(0, 0, 0, 0.5)',
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(0, 224, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 224, 255, 0.1) 1px, transparent 1px)',
        'cyber-gradient': 'linear-gradient(45deg, #00e0ff, #27ff9a, #a855f7)',
      },
      backgroundSize: {
        'grid': '50px 50px',
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
};