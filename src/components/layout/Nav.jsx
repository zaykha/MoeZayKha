import React from 'react'
import styled from 'styled-components'

const Bar = styled.nav`
  position: fixed;
  left: 16px;
  top: 88px;
  z-index: ${({ theme }) => theme.z.nav};
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 8px;
  background: rgba(10,10,16,0.7);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px;
  backdrop-filter: blur(8px);
  @media (max-width: 1024px) {
    display: none; /* hide top bar on mobile */
  }
`

const Item = styled.button`
  appearance: none;
  border: 1px solid rgba(255,255,255,0.15);
  background: ${({ active }) => (active ? 'rgba(0,247,255,0.12)' : 'rgba(255,255,255,0.03)')};
  color: ${({ active }) => (active ? '#fff' : '#9aa0a6')};
  border-radius: 10px;
  padding: 8px 12px;
  cursor: pointer;
  text-align: left;
  font-family: inherit;
  transition: all .2s ease;
  &:focus-visible { outline: 2px solid #00f7ff; }
  &:hover { border-color: rgba(0,247,255,0.6); }
`

export default function Nav({ items, active, onNavigate }) {
  return (
    <Bar aria-label="Primary">
      {items.map((it) => (
        <Item key={it.id} active={active === it.id} onClick={() => onNavigate(it.id)} aria-current={active === it.id ? 'page' : undefined} aria-label={it.label}>
          {it.label}
        </Item>
      ))}
    </Bar>
  )
}
