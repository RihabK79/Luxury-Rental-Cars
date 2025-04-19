module.exports = {
    theme: {
      extend: {
        fontFamily: {
            special: ['"Special Elite"', 'cursive'], // Added as a new font family
           
            sans: ['"Special Elite"', 'cursive'],        
            },
      },
      keyframes: {
        scroll: {
          'to': {
            // Using template literal for the calc() function
            transform: 'translateX(calc(-50% - 4rem))',
          }
        }
      },
      animation: {
        scroll: 'scroll linear infinite',
      },
    },
    // ...
  }