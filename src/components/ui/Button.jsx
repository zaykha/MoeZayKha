import React from 'react'
import styled from 'styled-components'

const Btn = styled.button`
  appearance: none; border: 1px solid rgba(255,255,255,0.15); background: rgba(255,255,255,0.04);
  color: #fff; padding: 10px 14px; border-radius: 10px; cursor: pointer; transition: background .2s ease;
  &:hover { background: rgba(255,255,255,0.08); }
  &:focus-visible { outline: 2px solid #00f7ff; }
`

export default function Button(props) {
  return <Btn {...props} />
}

