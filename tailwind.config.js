/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          "0%, 100%": { transform: "translateY(-90%) rotate(5deg)" },
          "50%": { transform: "translateY(0%) rotate(5deg)" },
        },
      },
      animation: {
        scroll: "scroll 15s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
