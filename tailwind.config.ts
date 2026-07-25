import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FEFDFB",
        cream: "#FBF6F1",
        nude: {
          DEFAULT: "#F1E4D8",
          light: "#F8EFE7",
          dark: "#E3CDB8",
        },
        blush: {
          DEFAULT: "#F3D9D4",
          light: "#F9EBE8",
          dark: "#E8B4B8",
        },
        rose: {
          DEFAULT: "#B76E79",
          deep: "#95505C",
        },
        gold: {
          DEFAULT: "#C6A664",
          light: "#DCC48F",
          dark: "#A8894F",
        },
        ink: {
          DEFAULT: "#3A3532",
          soft: "#6B615C",
          faint: "#9C918A",
        },
        mist: "#F6F4F2",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-poppins)", "sans-serif"],
      },
      borderRadius: {
        arch: "50% 50% 0 0",
        soft: "1.75rem",
      },
      boxShadow: {
        soft: "0 20px 60px -15px rgba(58, 53, 50, 0.12)",
        card: "0 10px 40px -10px rgba(183, 110, 121, 0.18)",
        gold: "0 8px 30px -8px rgba(198, 166, 100, 0.35)",
      },
      backgroundImage: {
        "petal-gradient":
          "linear-gradient(135deg, #FBF6F1 0%, #F3D9D4 45%, #F1E4D8 100%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
