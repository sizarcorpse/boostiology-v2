import plugin from "tailwindcss/plugin";

export const shadcnPlugin = plugin(
  function ({ addBase }) {
    addBase({
      ":root": {
        "--background": "210 40% 98%",
        "--foreground": "238 30% 35%",
        "--muted": "197 58% 95%",
        "--muted-foreground": "238 69% 25%",
        "--popover": "210 40% 98%",
        "--popover-foreground": "238 69% 25%",
        "--card": "210 40% 98%",
        "--card-foreground": "238 69% 32%",
        "--border": "196 25% 85%",
        "--input": "214.3 31.8% 91.4%",
        "--primary": "238 69% 32%",
        "--primary-foreground": "210 40% 98%",
        "--secondary": "210 40% 98%",
        "--secondary-foreground": "238 69% 25%",
        "--accent": "40 100% 48%",
        "--accent-foreground": "210 40% 98%",
        "--destructive": "0 84.2% 60.2%",
        "--destructive-foreground": "238 69% 25%",
        "--ring": "215 20.2% 65.1%",
        "--radius": "0.5rem",
      },
      ".dark": {
        "--background": "210 40% 98%",
        "--foreground": "238 30% 35%",
        "--muted": "197 58% 95%",
        "--muted-foreground": "238 69% 25%",
        "--popover": "210 40% 98%",
        "--popover-foreground": "238 69% 25%",
        "--card": "210 40% 98%",
        "--card-foreground": "238 69% 32%",
        "--border": "196 25% 85%",
        "--input": "214.3 31.8% 91.4%",
        "--primary": "238 69% 32%",
        "--primary-foreground": "210 40% 98%",
        "--secondary": "210 40% 98%",
        "--secondary-foreground": "238 69% 25%",
        "--accent": "40 100% 48%",
        "--accent-foreground": "210 40% 98%",
        "--destructive": "0 84.2% 60.2%",
        "--destructive-foreground": "238 69% 25%",
        "--ring": "215 20.2% 65.1%",
        "--radius": "0.5rem",
      },
    });

    addBase({
      "*": {
        "@apply border-border": {},
      },
      body: {
        "@apply bg-background text-foreground": {},
      },
    });
  },
  {
    theme: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      extend: {
        fontSize: {
          "5xl": "40px",
        },
        fontFamily: {
          inter: ["var(--font-inter)"],
          outfit: ["var(--font-outfit)"],
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
        },
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
        },
        keyframes: {
          "accordion-down": {
            from: { height: "0" },
            to: { height: "var(--radix-accordion-content-height)" },
          },
          "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: "0" },
          },
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
        },
      },
    },
  }
);
