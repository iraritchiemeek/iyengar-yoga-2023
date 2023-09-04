/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      // padding: '.5em',
      screens: {
        'sm': '100%',
        'md': '100%',
        'lg': '1200px',
        'xl': '1400px',
        '2xl': '1600px',
      }
    },
    extend: {
      colors: {
        'yoga-blue': 'rgba(119,196,217)',
      },
    },
  },
  plugins: [],
}