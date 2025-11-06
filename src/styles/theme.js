const theme = {
  colors: {
    bg: '#0a0a0a',
    text: '#e6e6e6',
    muted: '#9aa0a6',
    accent: '#00f7ff',
    purple: '#a020f0',
  },
  radii: { sm: '6px', md: '10px', lg: '16px' },
  space: (n) => `${n * 8}px`,
  breakpoints: { sm: 480, md: 768, lg: 1024, xl: 1280 },
  z: { header: 100, nav: 90, modal: 1000 },
}

export default theme

