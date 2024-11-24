/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      willChange: {
        'transform': 'transform',
      },
      backgroundImage: {
        'radial-custom': 'radial-gradient(circle at center, var(--mantle) 36%, rgba(var(--mantle-rgb), 0.1) 100%)',
      },
      colors: {
        accent: 'var(--accent)',
        rosewater: 'var(--rosewater)',
        flamingo: 'var(--flamingo)',
        pink: 'var(--pink)',
        mauve: 'var(--mauve)',
        red: 'var(--red)',
        maroon: 'var(--maroon)',
        peach: 'var(--peach)',
        yellow: 'var(--yellow)',
        green: 'var(--green)',
        teal: 'var(--teal)',
        sky: 'var(--sky)',
        sapphire: 'var(--sapphire)',
        blue: 'var(--blue)',
        lavender: 'var(--lavender)',
        text: 'var(--text)',
        subtext1: 'var(--subtext1)',
        subtext0: 'var(--subtext0)',
        overlay2: 'var(--overlay2)',
        overlay1: 'var(--overlay1)',
        overlay0: 'var(--overlay0)',
        surface2: 'var(--surface2)',
        surface1: 'var(--surface1)',
        surface0: 'var(--surface0)',
        base: 'var(--base)',
        mantle: 'var(--mantle)',
        crust: 'var(--crust)',
      },
    },
  },
  plugins: [],
}