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
        'radial-custom1': 'radial-gradient(circle at center, var(--blue) 46%, rgba(var(--mantle-rgb), 0.0) 50%)',
        'radial-noise': `radial-gradient(circle at 50% 50%, rgba(25,0,255,1), FFFFFFFF),
	url("data:image/svg+xml,%3Csvg viewBox='0 0 208 208' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='10' numOctaves='6' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");`,
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
        serif: ['Cardo', 'ui-serif', 'Georgia'],
      },
      fontSize: {
        '2xs': '0.625rem', // 10px
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
