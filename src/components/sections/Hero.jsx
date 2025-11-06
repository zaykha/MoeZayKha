import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  position: relative;
  height: 80vh;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.08);
`

const Overlay = styled.div`
  position: absolute; inset: 0;
  display: grid; place-items: center;
  pointer-events: none;
  padding: 16px;
  background: linear-gradient(0deg, rgba(10,10,10,0.0) 20%, rgba(10,10,10,0.2) 80%);
`

const CTA = styled.div`
  pointer-events: auto;
  text-align: center;
  background: rgba(10,10,10,0.5);
  backdrop-filter: blur(8px);
  padding: 16px 20px;
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.08);
`

export default function Hero({ onNavigate }) {

  return (
    <Wrap>
      <Overlay>
        <CTA>
          <h1 style={{margin: '0 0 8px'}}>Moe Zay Kha</h1>
          <p style={{margin: 0, color: '#9aa0a6'}}>Full‑stack Developer • 3D • UX</p>
          <div style={{marginTop: 12, display:'flex', gap: 8, justifyContent:'center'}}>
            <button onClick={() => onNavigate('cv')} aria-label="Go to CV">CV</button>
            <button onClick={() => onNavigate('portfolio')} aria-label="Go to Portfolio">Portfolio</button>
            <a href="#contact" onClick={(e)=>{e.preventDefault(); onNavigate('contact')}}>Contact</a>
          </div>
        </CTA>
      </Overlay>
    </Wrap>
  )
}
