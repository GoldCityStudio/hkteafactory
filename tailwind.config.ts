import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'cream': {
          50: '#FAF7F4',
          100: '#F5EFE9',
          200: '#EBDFD3',
          300: '#E1CFBD',
          400: '#D7BFA7',
          500: '#CDAF91',
          600: '#C39F7B',
          700: '#B98F65',
          800: '#AF7F4F',
          900: '#A56F39',
        },
        'darkgreen': {
          50: '#e6f4ea',
          100: '#c3e3ce',
          200: '#8fc7a2',
          300: '#5ba976',
          400: '#388d54',
          500: '#206e3a',
          600: '#18562e',
          700: '#134324',
          800: '#0e321b',
          900: '#0a2413',
        },
        emerald: {
          50: '#e6f4ea',
          100: '#c3e3ce',
          200: '#8fc7a2',
          300: '#5ba976',
          400: '#388d54',
          500: '#206e3a',
          600: '#18562e',
          700: '#134324',
          800: '#0e321b',
          900: '#0a2413',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config; 