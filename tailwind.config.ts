import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'monospace'],
        exo: ['Exo', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Gaming-inspired color palette
        neon: {
          blue: "hsl(var(--neon-blue))",
          green: "hsl(var(--neon-green))",
          purple: "hsl(var(--neon-purple))",
          pink: "hsl(var(--neon-pink))",
          cyan: "hsl(var(--neon-cyan))",
        },
        dark: {
          900: "hsl(var(--dark-900))",
          800: "hsl(var(--dark-800))",
          700: "hsl(var(--dark-700))",
          600: "hsl(var(--dark-600))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        'neon-blue': '0 0 5px hsl(var(--neon-blue)), 0 0 10px hsl(var(--neon-blue)), 0 0 15px hsl(var(--neon-blue))',
        'neon-green': '0 0 5px hsl(var(--neon-green)), 0 0 10px hsl(var(--neon-green)), 0 0 15px hsl(var(--neon-green))',
        'neon-purple': '0 0 5px hsl(var(--neon-purple)), 0 0 10px hsl(var(--neon-purple)), 0 0 15px hsl(var(--neon-purple))',
        'glow-sm': '0 0 10px rgba(0, 255, 255, 0.3)',
        'glow': '0 0 20px rgba(0, 255, 255, 0.5)',
        'glow-lg': '0 0 30px rgba(0, 255, 255, 0.7)',
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "glow-pulse": {
          "0%, 100%": {
            boxShadow: "0 0 5px hsl(var(--neon-blue)), 0 0 10px hsl(var(--neon-blue)), 0 0 15px hsl(var(--neon-blue))",
          },
          "50%": {
            boxShadow: "0 0 10px hsl(var(--neon-blue)), 0 0 20px hsl(var(--neon-blue)), 0 0 30px hsl(var(--neon-blue))",
          },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "grid-flow": {
          "0%": { transform: "translateX(0) translateY(0)" },
          "100%": { transform: "translateX(-50px) translateY(-50px)" },
        },
        "text-glow": {
          "0%, 100%": {
            textShadow: "0 0 10px hsl(var(--neon-blue)), 0 0 20px hsl(var(--neon-blue))",
          },
          "50%": {
            textShadow: "0 0 20px hsl(var(--neon-blue)), 0 0 30px hsl(var(--neon-blue)), 0 0 40px hsl(var(--neon-blue))",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
        "grid-flow": "grid-flow 20s linear infinite",
        "text-glow": "text-glow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
