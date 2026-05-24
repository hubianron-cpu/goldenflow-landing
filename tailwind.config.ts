import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        card: "#0B0B0B",
        gold: "#D4AF37",
        "gold-dark": "#B8942E",
      },
    },
  },
  plugins: [],
};

export default config;
