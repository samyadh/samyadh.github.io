module.exports = {
  mode: 'jit',
  purge: ['./apps/web/**/*.{js,jsx,ts,tsx,html}'],
  darkMode: false,
  theme: {
    extend: {
      screens: {
        print: { raw: 'print' },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
