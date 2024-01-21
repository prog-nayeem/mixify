import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#FFFFFF",
        primary1: "#363738",
        secondary: "#F5F5F5",
        secondary1: "#FEFAF1",
        secondary2: "#DB4444",
        bg: "#FFFFFF",
        bg2: "#000000",
        text: "#FAFAFA",
        text1: "#D37643",
        text2: "#000000",
        button: "#000000",
        button1: "#47B486",
        button2: "#DB4444",
        hoverButton: "#E2B93B",
        hoverButton1: "#EB5757",
      },
      maxWidth: {
        "screen-xl": "1170px",
      },
    },
  },
  plugins: [],
};
export default config;
