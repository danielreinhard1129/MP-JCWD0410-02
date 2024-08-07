import type { Config } from "tailwindcss";

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mochiy: ["var(--font-mochiy)", "sans-serif"],
      },
      animation: {
        slide: "slide var(--speed) ease-in-out infinite alternate",
        pulse: "pulse var(--duration) ease-out infinite",
        bounce: "bounce 15s ease-in-out infinite",
        "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
      },
      boxShadow: {
        active: "0 5px 10px rgba(0, 0, 0, 0.2)",
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 2px rgba(30, 41, 59, 0.25)`,
      },
      keyframes: {
        slide: {
          to: {
            transform: "translate(calc(100cqw - 100%), 0)",
          },
        },
        pulse: {
          "0%, 100%": { boxShadow: "0 0 0 0 var(--pulse-color)" },
          "50%": { boxShadow: "0 0 0 8px var(--pulse-color)" },
        },
        bounce: {
          "0%, 100%": {
            transform: "translateY(-21%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "none",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
        "spin-around": {
          "0%": {
            transform: "translateZ(0) rotate(0)",
          },
          "15%, 35%": {
            transform: "translateZ(0) rotate(90deg)",
          },
          "65%, 85%": {
            transform: "translateZ(0) rotate(270deg)",
          },
          "100%": {
            transform: "translateZ(0) rotate(360deg)",
          },
        },
      },
      colors: {
        "custom-pink": "#F03066",
        "custom-red": "#D80072",
        "custom-off-white": "#F7E7F6",
      },
      backgroundImage: {
        "dark-gradient": "linear-gradient(135deg, #F03066, #D80072, #F7E7F6)",
      },
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
