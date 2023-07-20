/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        landing1: "url('/public/images/landing1.jpeg')",
      },
    },
    borderWidth: {
      1: '1px',
      2: '2px',
      3: '3px',
      4: '4px',
      5: '5px',
    },
    fontFamily: {
      neue: ['Neue Machina'],
      vietnam: ['Be Vietnam'],
      aldrich: ['Aldrich'],
      avaunt: ['Avaunt Stencil'],
    },
    colors: {
      APP_BACKGROUND: '#FFFFFF',
      RED_MEDIUM: '#00FF3C',
      GREY_LIGHT: '#E0FFEC',
      GREEN_MEDIUM: '#0EBE54',
      GREY_LIGHT: '#F6F8FF',
      GREY_MEDIUM: '#F4F4F4',
      GREY_DARK: '#989897',
      BLUE_LIGHT: '#B0B5D3',
      RED_MEDIUM: '#CF142A',
      BLUE_DARK: '#2F2F4D',
      PURPLE_ONU: '#5D2C80',
      WHITE: '#FFFFFF',
      BLACK: '#000000',
    },
  },
  safelist: [
    'bg-[transparent]',
    'bg-RED_MEDIUM',
    'bg-GREY_LIGHT',
    'bg-GREEN_MEDIUM',
    'bg-GREY_LIGHT',
    'bg-GREY_MEDIUM',
    'bg-GREY_DARK',
    'bg-BLUE_LIGHT',
    'bg-RED_MEDIUM',
    'bg-BLUE_DARK',
    'bg-PURPLE_ONU',
    'bg-WHITE',
    'bg-BLACK',
    'border-RED_MEDIUM',
    'border-GREEN_MEDIUM',
    'border-GREY_MEDIUM',
    'border-GREY_DARK',
    'border-GREY_LIGHT',
    'border-RED_MEDIUM',
    'border-BLUE_LIGHT',
    'border-BLUE_DARK',
    'border-PURPLE_ONU',
    'border-WHITE',
    'border-BLACK',
    'hover:border-RED_MEDIUM',
    'hover:border-GREEN_MEDIUM',
    'hover:border-GREY_LIGHT',
    'hover:border-GREY_MEDIUM',
    'hover:border-GREY_DARK',
    'hover:border-GREY_LIGHT',
    'hover:border-RED_MEDIUM',
    'hover:border-BLUE_LIGHT',
    'hover:border-BLUE_DARK',
    'hover:border-PURPLE_ONU',
    'hover:border-WHITE',
    'hover:border-BLACK',
    'text-RED_MEDIUM',
    'text-GREY_LIGHT',
    'text-GREEN_MEDIUM',
    'text-GREY_MEDIUM',
    'text-GREY_DARK',
    'text-GREY_LIGHT',
    'text-BLUE_LIGHT',
    'text-RED_MEDIUM',
    'text-BLUE_DARK',
    'text-PURPLE_ONU',
    'text-WHITE',
    'text-BLACK',
  ],
  plugins: [],
};
