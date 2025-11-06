import React from 'react'
import styled from 'styled-components'

const Bar = styled.header`
  position: sticky;
  top: 0;
  z-index: ${({ theme }) => theme.z.header};
  background: rgba(10,10,10,0.6);
  backdrop-filter: blur(6px);
  border-bottom: 1px solid rgba(255,255,255,0.06);
`

const Wrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
`

export default function Header() {
  return (
    <Bar role="banner" aria-label="Site header">
      <Wrap>
        <strong aria-label="Site title">&lt;MZK/&gt;</strong>
      </Wrap>
    </Bar>
  )
}
