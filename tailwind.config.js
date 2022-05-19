const production = !process.env.ROLLUP_WATCH;
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  plugins: [
  ],
  theme: {
    colors: {
      'purple': '#6552B5',
      'light-purple': '#252930',
      'dark-purple': '#151618',
      'beige': '#EEE4DB',
      'red' : "#EF5758",
      'dark-red' : "#EF4044",
      'light-red' : "#D9A58B",
      'white': '#FFFFFF',
      'rose-gold' : "#F8E0D4",
      'black' : '#151618',
      'transparent': 'transparent',
      'dark-rose-gold':'rgba(245,211,194,0.3)',
      'dark-grey': '#262830',
      'light-beige': '#EFB598',
    },
    extend: {
      width: {
        '32/50': '63.5%',
      }
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1300px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  purge: {
    content: [
      "./src/App.svelte",
      "./src/Home.svelte",
      "./src/Book.svelte",
      "./src/Footer.svelte",
      "./src/Event.svelte",
      "./src/Concept.svelte",
    ],
  },
};