import React from 'react'
import styled, { css } from 'styled-components'

const Wrap = styled.section`
  min-height: 100vh;
  display: ${({ $active }) => ($active ? 'grid' : 'none')};
  align-items: center;
  padding: 64px 16px;
  scroll-margin-top: 80px;
  @media (max-width: 1024px) {
    padding: 24px 12px; /* move content closer to top on mobile */
    scroll-margin-top: 16px;
  }
`

const Inner = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  background: linear-gradient(180deg, rgba(16,16,24,0.86), rgba(12,12,18,0.86));
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.35);
  backdrop-filter: blur(10px);
  padding: 24px;
  ${({ $compact }) => $compact && css`
    max-width: 640px;
    width: auto;
  `}
  @media (max-width: 1024px) {
    width: 80vw; /* default sections use 80% on mobile */
    padding: 16px;
    ${({ $compact }) => $compact && css`
      width: 90vw; /* for compact sections like Contact, let it size closer to content on mobile */
    `}
  }
`

export default function Section({ id, title, children, active, compact }) {
  return (
    <Wrap id={id} aria-labelledby={`${id}-title`} $active={active}>
      <Inner $compact={compact}>
        {title ? <h2 id={`${id}-title`}>{title}</h2> : null}
        {children}
      </Inner>
    </Wrap>
  )
}
