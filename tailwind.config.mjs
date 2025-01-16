/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {}
  },
  plugins: [
    function ({ addUtilities, matchUtilities }) {
      addUtilities({
        ".flex-grow-2": {
          flexGrow: "2"
        }
      });

      debugger;
      matchUtilities({
        "text-clamp": (value) => ({
          "font-size": `clamp(${value.split("-").join(",")})`
        })
      });
    }
  ]
};
