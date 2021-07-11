module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'  
  theme: {        
    extend: {
      colors: {
        backgroundColor: '#1B1B1B',
        backgroundColor2: '#272727',
        blue: '#3ADCFF',
        white: '#fff',
        black: '#000000'
      },
      keyframes: {
        reveal: {
          '0%': { transform: 'translate(100%, 0%)' },
          '100%': { transform: 'translate(0%, 0%)' },
        },   
        hide: {
          '0%': { transform: 'translate(0%, 0%)' },
          '100%': { transform: 'translate(100%, 0%)' },
        },   
      },
      animation: {
        'reveal': 'reveal .2s linear',
        'hide': 'hide .2s linear',
      },
      rotate: {
        '225': '225deg',
        '-225': '-225deg'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
