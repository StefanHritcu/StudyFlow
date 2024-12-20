/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', "serif"],
      },
      screens: {
        // Extra small phones and old devices
        xs: "320px",
        xs2: "350px",

        // Small smartphones (older iPhones, and small Android models)
        sm: "375px",
        sm2: "414px",

        // Medium to large smartphones (current generation devices)
        md: "480px",
        md2: "540px",

        // Tablets
        tablet: "600px",
        "tablet-lg": "768px",
        "tablet-xl": "900px",

        // Laptops and medium-sized devices
        laptop: "1024px",
        "laptop-md": "1100px",
        "laptop-lg": "1366px",

        // Desktops and monitors
        desktop: "1440px",
        "desktop-lg": "1600px",
        "desktop-xl": "1920px",

        // Ultra-large devices
        "ultra-desktop": "2560px",
      },
    },
  },
  plugins: [],
};
