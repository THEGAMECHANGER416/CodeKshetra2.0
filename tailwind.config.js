/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bebas: ["Bebas Neue", "cursive"], // Add Bebas Neue as a font family
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        blob: {
          "0%, 100%": {
            borderRadius: "8% 8% 12% 12%",
            transform: "translate(0, 0)",
          }, // Initial and final state
          "25%": {
            borderRadius: "12% 10% 15% 5%",
            transform: "translate(4px, -2px)",
          }, // More curvature on top left and bottom right
          "50%": {
            borderRadius: "15% 5% 20% 10%",
            transform: "translate(-2px, 4px)",
          }, // Increased bend and slight move down
          "75%": {
            borderRadius: "5% 15% 10% 8%",
            transform: "translate(3px, -1px)",
          }, // Random bending and minimal upward movement
        },
      },
      animation: {
        blob: "blob 3s infinite ease-in-out",
      },
      colors: {
        primary: {
          DEFAULT: "#2C1E36", // Use your hex value here
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#151A20", // Hex value for secondary
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "#FF530A", // Fix the typo
          foreground: "hsl(var(--accent-foreground))",
        },
        purple: {
          DEFAULT: "#6319BE", // Fix the typo
          foreground: "hsl(var(--purple-foreground))",
        },
        pink: {
          DEFAULT: "#da39ae", // Fix the typo
          foreground: "hsl(var(--pink-foreground))",
        },
        background: "#000000",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["hover", "focus", "responsive"],
      borderRadius: ["responsive", "hover", "focus"],
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addUtilities }) {
      const newUtilities = {
        "@media (hover: none) and (pointer: coarse)": {
          ".disable-hover": {
            "&:hover": {
              backgroundColor: "transparent !important",
            },
          },
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
