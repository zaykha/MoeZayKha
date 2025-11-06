import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  /* Minimal reset */
  *, *::before, *::after { box-sizing: border-box; }
  html, body, #root { height: 100%; }
  body { margin: 0; font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, 'Helvetica Neue', 'Noto Sans', 'Liberation Sans', Arial, 'Apple Color Emoji', 'Segoe UI Emoji'; background:#0a0a0a; color:#e6e6e6; }
  img { max-width: 100%; display: block; }
  a { color: inherit; text-decoration: none; }
  :focus-visible { outline: 2px solid #00f7ff; outline-offset: 2px; }
`

export default GlobalStyle

