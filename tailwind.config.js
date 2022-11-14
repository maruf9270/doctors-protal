/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
        


"primary": "#0FCFEC",
        


"secondary": "#3A4256",
        


"accent": "#19D3AE",
        


"neutral": "#211424",
        


"base-100": "#FFFFFF",
        


"info": "#A0CFF8",
        


"success": "#1E7662",
        


"warning": "#AE930F",
        


"error": "#F83F4E",
        },
      },
    ],
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

}
