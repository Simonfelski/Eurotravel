/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderColor: {
        correct: '#00d397',
        wrong: '#FF4A4A',
      },
      backgroundColor: {
        correct: '#dffff2',
        wrong: '#FFEBEB',
      },
    },
  },
  plugins: [],
};
