import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import TechIconsGrid from './TechIconsGrid'
import TechSkills from './TechSkills'
import Industries from './Industries'

const Wrap = styled.div`
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 12px;
  overflow: hidden;
  background: rgba(255,255,255,0.08);
`

const Slide = styled.div`
  padding: 40px 24px;
  min-height: 360px;
`

export default function Experience({ variant = 'industries' }) {
  if (variant === 'skills') {
    return (
      <Wrap data-aos="fade-up">
        <TechSkills />
      </Wrap>
    )
  }

  if (variant === 'softskills') {
    const skills = [
      'Clear written and verbal communication with cross-functional teams',
      'Ownership mindset; proactively unblocks and follows through',
      'Mentoring juniors; establishing patterns and guidelines',
      'Adaptability across remote and on-site environments',
      'Strong prioritization; balancing UX, performance, and delivery',
    ]
    return (
      <Wrap data-aos="fade-up">
        <Slide>
          <h3 style={{margin:'0 0 10px'}}>Soft Skills</h3>
          <ul style={{margin:0, paddingLeft:'1.2em'}}>
            {skills.map((s) => (<li key={s}>{s}</li>))}
          </ul>
        </Slide>
      </Wrap>
    )
  }

  if (variant === 'industries') {
    return (
      <Wrap data-aos="fade-up">
        <Industries />
      </Wrap>
    )
  }

  const items = [
    { t: 'Darmax Global', d: 'Full Stack • 2022-2023' },
    { t: 'One Atkhayar', d: 'Full Stack • 2020-2022' },
    { t: 'Strategy First University', d: 'Junior Developer • 2020' },
    { t: 'Dnata', d: 'Customer Service Agent • 2016-2020' },
  ]

  return (
    <Wrap data-aos="fade-up">
      <Swiper direction="vertical" loop mousewheel modules={[Mousewheel, Pagination]} pagination={{ clickable: true }} style={{ height: 420 }}>
        {items.map((x, i) => (
          <SwiperSlide key={i}>
            <Slide>
              <div style={{color:'#9aa0a6', marginBottom: 8}}>{i+1} / {items.length}</div>
              <h3 style={{margin:'0 0 6px'}}>{x.t}</h3>
              <p style={{margin:0}}>{x.d}</p>
            </Slide>
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrap>
  )
}
