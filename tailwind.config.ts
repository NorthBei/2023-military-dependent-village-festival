import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './src/assets/arcade-*.svg'],
  theme: {
    colors: {
      orange: '#E86546',
      orange2: '#E58169',
      dark: '#231815',
      dark2: '#333434',
      green: '#74D194',
      white: '#FFFFFF',
      yellow: '#FFE600',
      yellow2: '#FFE177',
      blue: '#00698A',
      blue2: '#368AA5',
      gray: '#888888',
      gray2: '#E2DDD9',
      pink: '#F590A8',
      red: '#FF002A',
      purple: '#C860FF',
      khak: '#E2CCAF'
    },
    extend: {
      keyframes: ({ theme }) => ({
        // use in arcade-*.svg
        'slot-machine-1': {
          '0%, 100%': { fill: theme('colors.khak') },
          '50%': { fill: theme('colors.orange') }
        },
        // use in arcade-*.svg
        'slot-machine-2': {
          '0%, 100%': { fill: theme('colors.orange') },
          '50%': { fill: theme('colors.khak') }
        },
        'pull-bar': {
          '0%, 100%': {
            top: '-3%'
          },
          '30%, 65%': {
            top: '90%'
          },
          '50%': {
            top: '25%'
          }
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)'
          },
          '50%': {
            transform: 'translateY(-20px)'
          }
        }
      }),
      animation: {
        'spin-slow': 'spin 5s linear infinite',
        'bounce-slime': 'float 1s ease-in-out infinite',
        'slot-machine-1': 'slot-machine-1 0.5s ease-in-out infinite',
        'slot-machine-2': 'slot-machine-2 0.5s ease-in-out infinite',
        'pull-bar': 'pull-bar 1.9s ease-in-out'
      },
      zIndex: {
        menu: '300',
        'top-button': '200',
        nav: '100',
        'top-marquee': '80',
        title: '60',
        footer: '40',
        'x-marquee': '-10',
        background: '-30'
      }
    }
  },
  plugins: []
} satisfies Config;
