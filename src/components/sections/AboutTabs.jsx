import React, { useState, useMemo } from 'react'
import styled from 'styled-components'
import { cvDetails } from './cvData'

const Wrap = styled.div`
  display: grid; gap: 12px;
`
const Tabs = styled.div`
  display: flex; gap: 8px; overflow-x: auto; padding-bottom: 6px;
  border-bottom: 1px solid rgba(255,255,255,0.12);
`
const Tab = styled.button`
  flex: 0 0 auto; border: 1px solid rgba(255,255,255,0.15); border-radius: 10px;
  background: ${({ $active }) => ($active ? 'rgba(0,247,255,0.12)' : 'rgba(255,255,255,0.04)')};
  color: ${({ $active }) => ($active ? '#fff' : '#c9c9c9')};
  padding: 8px 12px; cursor: pointer; font-family: inherit; white-space: nowrap;
  &:hover { border-color: rgba(0,247,255,0.6); }
  &:focus-visible { outline: 2px solid #00f7ff; }
`
const Panel = styled.div`
  max-height: 58vh; overflow: auto; padding-right: 6px;
`
const Section = styled.div`
  margin-bottom: 12px;
  h4 { margin: 10px 0 6px; }
  ul { margin: 0; padding-left: 1.2em; }
`

export default function AboutTabs() {
  const [i, setI] = useState(0)
  const jobs = useMemo(() => cvDetails, [])
  const job = jobs[i]
  return (
    <Wrap>
      <Tabs role="tablist" aria-label="Work experience">
        {jobs.map((j, idx) => (
          <Tab key={j.title} role="tab" aria-selected={i === idx} $active={i === idx} onClick={() => setI(idx)}>
            {j.period}
          </Tab>
        ))}
      </Tabs>
      <Panel role="tabpanel" aria-label={`${job.title} – ${job.place}`}>
        <h3 style={{margin:'8px 0 4px'}}>{job.title}</h3>
        <div style={{color:'#9aa0a6', marginBottom:10}}>{job.place} • {job.period}</div>
        {(job.sections || []).map((s) => (
          <Section key={s.h}>
            <h4>{s.h}</h4>
            <ul>
              {s.items.map((it, k) => (<li key={k}>{it}</li>))}
            </ul>
          </Section>
        ))}
      </Panel>
    </Wrap>
  )
}

