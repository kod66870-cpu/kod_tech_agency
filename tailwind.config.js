/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#E5F0FF',
          100: '#CCE1FF',
          200: '#99C3FF',
          300: '#66A5FF',
          400: '#3387FF',
          500: '#0066FF',
          600: '#0052CC',
          700: '#003D99',
          800: '#002966',
          900: '#001A40',
        },
        navy: {
          50: '#EEF2F9',
          100: '#D5DDEC',
          200: '#A9B8D5',
          300: '#7C8FB8',
          400: '#4C5F8A',
          500: '#2A3D66',
          600: '#1A2E52',
          700: '#0B1F44',
          800: '#081733',
          900: '#050E22',
        },
        accent: {
          DEFAULT: '#00E0FF',
          soft: '#7FF0FF',
          deep: '#00AFC9',
        },
        cloud: '#F8FAFC',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Sora"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 24px rgba(0, 224, 255, 0.35)',
        card: '0 8px 30px rgba(11, 31, 68, 0.08)',
        'card-lg': '0 24px 60px rgba(11, 31, 68, 0.14)',
        'brand-lg': '0 20px 50px rgba(0, 102, 255, 0.35)',
      },
      backgroundImage: {
        'hero-radial':
          'radial-gradient(ellipse 80% 60% at 70% 20%, rgba(0, 224, 255, 0.18), transparent 60%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 12px rgba(0,224,255,.6)' },
          '50%': { opacity: '.6', boxShadow: '0 0 4px rgba(0,224,255,.2)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'dash-flow': {
          to: { strokeDashoffset: '-24' },
        },
      },
      animation: {
        'fade-up': 'fade-up .8s cubic-bezier(.22,1,.36,1) both',
        float: 'float 6s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out 1.2s infinite',
        'pulse-glow': 'pulse-glow 2.4s ease-in-out infinite',
        'spin-slow': 'spin-slow 24s linear infinite',
        'dash-flow': 'dash-flow 1.4s linear infinite',
      },
    },
  },
  plugins: [],
};
