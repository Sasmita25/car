/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
   "./src/**/*.{js,jsx,ts,tsx}",
 ],
 theme: {
   extend: {
    backgroundImage: {
      'custom-image': "url('../src/images/back.avif')",
    },
   },
 },
 plugins: [],
}

