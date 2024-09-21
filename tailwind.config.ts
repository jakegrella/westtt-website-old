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
        black: '#000000',
        'indigo-1': '#11131F',
        'indigo-3': '#182449',
        'indigo-5': '#253974',
        'blue-9': '#0090FF'
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
        'h-tall': {
          'raw': '(min-height: 600px)'
        },
        'h-xs': {
          'raw': '(min-height: 450px)'
        },
        
      }
    },
  },
  plugins: [],
};
export default config;
