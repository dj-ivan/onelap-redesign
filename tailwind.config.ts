import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Include all paths where Tailwind CSS classes might be used
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF0000", // Red
        background: "#1B1B1B", // Dark Background
        grayDark: "#2D2D2D", // Dark Gray
        grayLight: "#E5E5E5", // Light Gray
        white: "#FFFFFF", // White
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
