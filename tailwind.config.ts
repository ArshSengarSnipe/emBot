import type { Config } from "tailwindcss";

const config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: "800px",
        tablet: "1024px",
        laptop: "1440px",
        desktop: "1920px",
        tv: "3840px",
      },
      colors: {
        background_color: {
          gray_1: "#2A2B31",
          gray_2: "#1E1F25",
          black_1: "#131517",
        },
        bar_color: {
          green_1: "#E5EBB2",
        },
        bullet_color: {
          green_1: "#E5EBB2",
          orange_1: "#F8C4B4",
          red_1: "#FF8787",
        },
        text_color: {
          white_1: "#E9E9E9",
          white_2: "#8A8A8A",
          green_1: "#BCE29E",
          green_2: "#6DC956",
          black_1: "#1E1F25",
        },
        button_color: {
          green_1: "#BCE29E",
          green_2: "#6DC956",
        },
      },
    },
  },
  plugins: [],
  prefix: "",
} satisfies Config;

export default config;
