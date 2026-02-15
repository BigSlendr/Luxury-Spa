import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        cream: '#f8f7f3',
        charcoal: '#222222',
        sage: '#78866b'
      },
      boxShadow: {
        soft: '0 12px 30px rgba(0,0,0,0.08)'
      }
    }
  },
  plugins: []
};

export default config;
