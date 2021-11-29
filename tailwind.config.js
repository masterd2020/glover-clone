module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}','./components/**/*.{js,ts,jsx,tsx}', './public/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
     extend: {
       colors: {
        c1: '#F0EBFD',
        c2: '#FFF6F5',
        c3: '#FFF5DC',
        c4: '#FFE1DF',
        c5: '#EAFDFF',
      },
       fontFamily: {
        nunito: ['Nunito Sans'],
      },
      height: {
        110: '25rem',
        115: '27rem',
        120: '30rem',
        125: '35rem',
        130: '37rem',
        140: '40rem',
        145: '45rem',
      },
      fontSize: {
        'ls': '0.6rem',
        'lss': '0.7rem',
        'mds': '.8rem',
      },
      skew: {
        x: {
          20: '20deg'
        },
        y: {
          20: '20deg'
        }
      },
      backgroundImage: {
       'header': "url('/images/black.webp')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: []
}
