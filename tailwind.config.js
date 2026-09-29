module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        rose: {
          50: '#fffaf7',
          600: '#d69aa4',
          900: '#4d312d',
          950: '#2b1f1d',
        },
      },
    },
  },
  plugins: [],
};
