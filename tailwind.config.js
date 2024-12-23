// /** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/*.{html,js,jsx}"],
  theme: {
    extend: {
      animation: {
        carouselAnim: 'carouselAnim 10s infinite alternate linear',
      },
      keyframes: {
        carouselAnim: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
};
