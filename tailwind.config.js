/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html", // Ou o caminho correto dos seus arquivos
  ],
  theme: {
    extend: {
      fontFamily: {
        especial: ['"font-mustang"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}