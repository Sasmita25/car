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
   screens: {
    'xs': '375px',
    'sm':'510px',
    'md':'700px',
    'lg':'800px',
    'xl':'1024'
  },
 },
 plugins: [],
}

