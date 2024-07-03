/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        primary: '#222831',
        secondary: '#393E46',
        tertiary: '#00ADB5',
        quaternary: '#EEEEEE',
      },
      backgroundColor: {
        primary: '#222831',
        secondary: '#393E46',
        tertiary: {
          dark: '#00ADB5',
          300: '#00ADB54D',
          500: '#00ADB580',
        },
        quaternary: '#EEEEEE',
        transparent: 'rgba(241, 245, 249, 0.5)',
      },
      borderColor: {
        primary: '#222831',
        secondary: '#393E46',
        tertiary: '#00ADB5',
        quaternary: '#EEEEEE',
      },
    },
  },
  plugins: [],
}
