import React from 'react'
import styled from 'styled-components'

const Grid = styled.div`
  display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px;
`
const Card = styled.article`
  border: 1px solid rgba(255,255,255,0.12); border-radius: 12px; padding: 16px; background: rgba(255,255,255,0.08);
`

export default function Projects() {
  const data = [
    { t: 'MyHelper App', d: 'React Native • Firebase • Heroku' },
    { t: 'ChatChin', d: 'Ionic React • Maps • Social' },
  ]
  return (
    <Grid>
      {data.map((p) => (
        <Card key={p.t} data-aos="fade-up">
          <h3 style={{margin:'0 0 6px'}}>{p.t}</h3>
          <p style={{margin:0, color:'#9aa0a6'}}>{p.d}</p>
        </Card>
      ))}
    </Grid>
  )
}
