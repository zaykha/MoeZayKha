import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  display: grid; gap: 16px;
`
const Grid = styled.div`
  display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px;
`
const Card = styled.article`
  border: 1px solid rgba(255,255,255,0.12); border-radius: 12px; padding: 14px; background: rgba(255,255,255,0.08);
`

function Bar({ label, value, total }) {
  const pct = Math.round((value / total) * 100)
  return (
    <div>
      <div style={{display:'flex', justifyContent:'space-between', marginBottom:6}}>
        <strong>{label}</strong>
        <span style={{color:'#9aa0a6'}}>{pct}%</span>
      </div>
      <div style={{height:8, background:'rgba(255,255,255,0.12)', borderRadius:6}}>
        <div style={{width:`${pct}%`, height:'100%', background:'linear-gradient(90deg,#00f7ff,#a020f0)', borderRadius:6}} />
      </div>
    </div>
  )
}

export default function Industries() {
  const data = [
    { label: 'Marketing Services', value: 10 },
    { label: 'Commercial Tech', value: 6 },
    { label: 'HRM / CMS', value: 4 },
    { label: 'Futures Trading', value: 4 },
  ]
  const total = data.reduce((a,b)=>a+b.value,0)
  return (
    <Wrap>
      <Grid>
        {data.map((d) => (
          <Card key={d.label} data-aos="fade-up">
            <Bar label={d.label} value={d.value} total={total} />
          </Card>
        ))}
      </Grid>
    </Wrap>
  )
}

