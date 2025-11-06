import React from 'react'
import styled from 'styled-components'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
`

const Card = styled.article`
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px;
  padding: 16px;
  background: rgba(255,255,255,0.02);
`

export default function About() {
  // Condensed summary; original detailed content can be migrated as needed
  const roles = [
    { title: 'Full Stack Developer (Remote)', place: 'Darmax Global (HongKong)', period: '04/2022 - 08/2023' },
    { title: 'Full Stack Developer', place: 'One Atkhayar Co. Ltd', period: '07/2020 - 03/2022' },
    { title: 'Junior Developer', place: 'Strategy First University', period: '01/2020 - 06/2020' },
    { title: 'Customer Service Agent', place: 'Dubai Intl Airport (UAE)', period: '01/2016 – 01/2020' },
    { title: 'Marketing Manager', place: 'JBB (Myanmar) Co. Ltd', period: '2015' },
  ]

  return (
    <Grid>
      {roles.map((r) => (
        <Card key={r.title} data-aos="fade-up">
          <h3 style={{margin:'0 0 4px'}}>{r.title}</h3>
          <small style={{color:'#9aa0a6'}}>{r.place}</small>
          <p style={{margin:'8px 0 0'}}>{r.period}</p>
        </Card>
      ))}
    </Grid>
  )
}

