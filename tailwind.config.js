/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "normal"],
        helvatica: ["Helvetica", "normal"]
      },
      fontWeight: {
        bold: 600,
      },
      boxShadow: {
        products: '0px 4px 24px rgba(93, 62, 188, 0.04);',
        product: '0px 2.35332px 4.70663px rgba(120, 73, 247, 0.197067);',
        search: '0px 4px 4px rgba(0, 0, 0, 0.25)'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
  variants: {
    scrollbar: ['rounded']
  }
}
