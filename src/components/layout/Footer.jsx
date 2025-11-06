import React from 'react'
import styled from 'styled-components'

const Bar = styled.footer`
  border-top: 1px solid rgba(255,255,255,0.06);
  padding: 24px 16px;
  color: ${({ theme }) => theme.colors.muted};
`

const Wrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  font-size: 14px;
`

export default function Footer() {
  return (
    <Bar role="contentinfo">
      <Wrap>
        <span>© {new Date().getFullYear()} Moe Zay Kha</span>
        <a href="#contact" aria-label="Jump to contact">Contact</a>
      </Wrap>
    </Bar>
  )
}

