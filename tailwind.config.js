/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          50: '#f0fdfa',
          100: '#e0faf7',
          200: '#b3f1ed',
          300: '#85e8e2',
          400: '#57dfd7',
          500: '#2dd4bf',
          600: '#14b8a6',
          700: '#0d9488',
          800: '#0f766e',
          900: '#134e4a',
        },
      },
    },
  },
  plugins: [],
}
