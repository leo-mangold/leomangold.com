/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['ibm-plex-mono', 'sans-serif'],
        serif: ['new-spirit-condensed', 'serif'],
      },
    },
  },
  plugins: [],
}
