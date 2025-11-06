import React from 'react'
import styled from 'styled-components'
import { asset } from '../../utils/asset'

const Bar = styled.div`
  display: none;
  z-index: ${({ theme }) => theme.z.nav};
  @media (max-width: 1024px) {
    display: flex;
    position: fixed; left: 8px; right: 8px; bottom: 10px;
    justify-content: center; gap: 10px;
    padding: 8px;
    background: rgba(10,10,10,0.5);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 12px;
  }
`

const Item = styled.button`
  width: 48px; height: 48px; border-radius: 12px;
  border: 2px solid rgba(255,255,255,0.15); background: rgba(10,10,10,0.6);
  cursor: pointer; padding: 6px;
  display: grid; place-items: center;
  transition: border-color .15s ease, background .15s ease;
  &:focus-visible { outline: 2px solid #00f7ff; }
  &:hover { border-color: rgba(0,247,255,0.7); }
  &[data-active="true"] { border-color: rgba(0,247,255,0.9); background: rgba(0,247,255,0.08); }
  img { width: 100%; height: 100%; object-fit: contain; }
`

const items = [
  { id: 'home', label: 'Home', static: 'icons/hackericon.png' },
  { id: 'cv', label: 'CV', static: 'icons/id.png' },
  { id: 'skills', label: 'Skills', static: 'icons/mortarboard.png' },
  { id: 'industries', label: 'Industries', static: 'icons/hexagonal.png' },
  { id: 'portfolio', label: 'Portfolio', static: 'icons/briefcase.png' },
  { id: 'softskills', label: 'Soft Skills', static: 'icons/infographic.png' },
  { id: 'contact', label: 'Contact', static: 'icons/phone.png' },
]

export default function IconToolbar({ active, onNavigate }) {
  return (
    <Bar aria-label="Quick navigation">
      {items.map((it) => (
        <Item key={it.id} onClick={() => onNavigate(it.id)} aria-label={it.label} title={it.label} data-active={active === it.id}>
          <img src={asset(it.static)} alt="" aria-hidden />
        </Item>
      ))}
    </Bar>
  )
}
