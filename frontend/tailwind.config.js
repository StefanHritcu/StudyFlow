/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', "serif"],
      },
      colors: {
        // background and layouts
        mainColor: "#2c303a",
        secondColor: "#131417",

        //main & paragraph text color
        mainTextColor: "#d6d6d6",
        paragraphColor: "#61646f",

        //special colors & tag colors
        specialViolet: "#ae63e4",
        specialGreen: "#47cf73",
        specialYellow: "#ffdd40",
        specialBlue: "#46baff",

        // tag colors & special colors
        tagBlue: "#0b46b2",
        tagBlueShadow: "#1d2635",

        tagGreen: "#4f9c4f",
        tagGreenShadow: "#242d28",

        tagYellow: "#f0eb02",
        tagYellowShadow: "#313221",

        tagOrange: "#9e532c",
        tagOrangeShadow: "#312825",

        //seniority colors
        juniorColor: "#3087d2",
        juniorColorShadow: "#212b36",

        middleColor: "#f8a301",
        middleColorShadow: "#312c21",

        seniorColor: "#ba4f4f",
        seniorColorShadow: "#2f2629",
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
