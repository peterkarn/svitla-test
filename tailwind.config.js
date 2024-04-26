/** @type {import('tailwindcss').Config} */
function getSpaces({ isMinus } = {}) {
  const spaces = {}

  for (let i = 0.5; i <= 400; i = i + 0.5) {
    spaces[`${isMinus ? '-' : ''}${i}`] = `${isMinus ? '-' : ''}${i * 4}px`
  }

  return spaces
}

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        'primary-linear-gradient': 'linear-gradient(180deg, #000119 0%, #01032b 100%)',
        'logo-page': 'radial-gradient(circle at 10% 20%, rgba(178,224,255,1) 11%, rgba(245,250,254,0) 54%), radial-gradient(circle at 50% 20%, rgba(220,195,255,0.5) 30%, rgba(245,250,254,0) 100%), linear-gradient(180deg, rgba(175,224,255,1) 0%, rgba(245,250,254,1) 100%)'
      },

      fontFamily: {
        familyPrimary: 'Roboto, sans-serif',
        familySecondary: 'Prata, serif',
      },

      fontSize: {
        '1xl': ['40px', '1.2'],
        '2xl': ['60px', '1.2'],
        '4xl': ['148px', '1.2'],
      },
  
      fontWeight: {
        thin: '100',
        regular: '400',
        medium: '500',
        semibold: '600',
        extrabold: '800',
      },

      margin: {
        ...getSpaces(),
      },

      padding: {
        ...getSpaces(),
      },

      minHeight: {
        ...getSpaces(),
      },

      width: {
        max: 'max-content',
        ...getSpaces(),
      },

      maxHeight: {
        ...getSpaces(),
      },

      maxWidth: {
        ...getSpaces(),
      },

      borderRadius: {
        'xxl': '80px'
      },

      boxShadow: {
        primary: '0px 0px 18px 0px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}

