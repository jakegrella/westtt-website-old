import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: '#11131F',
        secondary: '#FF6F61',
        foreground: '#FEFCFB',
        'indigo-1': '#11131F',
        'indigo-3': '#182449',
        'indigo-5': '#253974',
      },
      backgroundColor: {
        'card-blue-10': 'rgba(214, 225, 255, 0.1)',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        'tall': {
          'raw': '(min-height: 600px)'
        },
      }
    },
  },
  plugins: [],
};
export default config;
