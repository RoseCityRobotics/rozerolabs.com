/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,md,liquid,erb,serb,rb}',
    './frontend/javascript/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'outrageous-orange': {
          '50': '#fff4f1',
          '100': '#ffe8e1',
          '200': '#ffd3c7',
          '300': '#ffb5a0',
          '400': '#ff9d81',
          '500': '#f46036',
          '600': '#cc4018',
          '700': '#b73317',
          '800': '#912a1b',
          '900': '#752519',
          '950': '#41090a',
        },
        'green': {
          '50': '#F5F7ED',
          '100': '#EDF2DF',
          '200': '#D1DEB1',
          '300': '#B4C989',
          '400': '#7BA147',
          '500': '#497718',
          '600': '#3E6B13',
          '700': '#30590D',
          '800': '#234709',
          '900': '#173605',
          '950': '#0D2402'
        },
        'light-green': {
          '50': '#FDFFF7',
          '100': '#F8FCED',
          '200': '#EEFAD2',
          '300': '#E0F5B8',
          '400': '#C2ED85',
          '500': '#A0E656',
          '600': '#87CF44',
          '700': '#67AB30',
          '800': '#4B8A1E',
          '900': '#306611',
          '950': '#1B4207'
        },
        'dark-green': {
          '50': '#F5F7ED',
          '100': '#E7EDD8',
          '200': '#C6D4A7',
          '300': '#A3B879',
          '400': '#638535',
          '500': '#2E4F0B',
          '600': '#274709',
          '700': '#1E3B06',
          '800': '#163004',
          '900': '#0E2402',
          '950': '#081701'
        },
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'], // Set Manrope as the default sans-serif font
      },
      typography: {
        DEFAULT: {
          css: {
            img: {
              borderRadius: '1rem', // Equivalent to rounded-2xl
              aspectRatio: '16/9',  // Equivalent to aspect-[16/9]
              width: '100%',        // Equivalent to w-full
              backgroundColor: '#f3f4f6', // Equivalent to bg-gray-100 (Gray-100 in Tailwind)
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

