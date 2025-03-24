/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        sunflower: ['"Sunflower"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

