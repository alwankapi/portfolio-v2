/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        pixel: ['"Press Start 2P"', 'monospace'],
      },
      colors: {
        pixel: {
          ink: '#161616',
          paper: '#fff8e8',
          cream: '#fffdf5',
          blue: '#2563eb',
          red: '#ef4444',
          yellow: '#facc15',
          green: '#22c55e',
          purple: '#7c3aed',
        },
      },
      boxShadow: {
        pixel: '6px 6px 0 #161616',
        'pixel-sm': '3px 3px 0 #161616',
        glow: '0 0 0 4px rgba(34,197,94,.18), 0 0 28px rgba(34,197,94,.35)',
      },
      keyframes: {
        blink: {
          '0%, 45%': { opacity: '1' },
          '46%, 100%': { opacity: '0' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
      animation: {
        blink: 'blink 1s steps(2, end) infinite',
        scan: 'scan 8s linear infinite',
      },
    },
  },
  plugins: [],
}