module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '350px',
        md: '650px',
        lg: '950px',
        xl: '1250px',
      },
    },
  },
  plugins: [],
};
