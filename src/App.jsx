import React, { Suspense, useMemo, useState } from 'react'
import styled from 'styled-components'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Nav from './components/layout/Nav'
import Section from './components/layout/Section'
import IconToolbar from './components/layout/IconToolbar'
import Canvas3D from './components/three/Canvas3D'
// Home shows only 3D background; no overlay content
const About = React.lazy(() => import('./components/sections/AboutTabs'))
const Experience = React.lazy(() => import('./components/sections/Experience'))
const Projects = React.lazy(() => import('./components/sections/Projects'))
const Contact = React.lazy(() => import('./components/sections/Contact'))
import ErrorBoundary from './components/ErrorBoundary'
import useAOS from './hooks/useAOS'

const Main = styled.main`
  min-height: 100vh;
  background: transparent;
  color: #e6e6e6;
  overflow-x: hidden;
`

export default function App() {
  useAOS()

  // Hash navigation (optional)
  const [active, setActive] = useState(() => (typeof window !== 'undefined' ? (window.location.hash.replace('#','') || 'home') : 'home'))

  const onNavigate = (id) => {
    setActive(id)
    if (history.replaceState) history.replaceState(null, '', `#${id}`)
  }

  const sections = useMemo(() => ([
    { id: 'home', label: '<Home/>' },
    { id: 'cv', label: '<CV/>' },
    { id: 'skills', label: '<Skills/>' },
    { id: 'industries', label: '<ExperienceByIndustries/>' },
    { id: 'portfolio', label: '<Portfolio/>' },
    { id: 'softskills', label: '<SoftSkills/>' },
    { id: 'contact', label: '<ContactMe/>' },
  ]), [])

  return (
    <>
      <Header />
      {/* Global 3D background canvas */}
      <div style={{position:'fixed', inset:0, zIndex:0, pointerEvents:'none'}} aria-hidden>
        <Canvas3D active={active} />
      </div>
      <div style={{position:'relative', zIndex:1}}>
      <Nav items={sections} active={active} onNavigate={onNavigate} />
      <IconToolbar active={active} onNavigate={onNavigate} />
      <ErrorBoundary>
        <Suspense fallback={<div style={{padding: 24}}>Loading…</div>}>
          <Main>
            {/* Home: no section overlay; 3D only */}
            <Section id="cv" title="Work Experiences" active={active === 'cv'}>
              <About />
            </Section>
            <Section id="skills" title="Skills" active={active === 'skills'}>
              <Experience variant="skills" />
            </Section>
            <Section id="industries" title="Experience By Industries" active={active === 'industries'}>
              <Experience variant="industries" />
            </Section>
            <Section id="portfolio" title="Portfolio" active={active === 'portfolio'}>
              <Projects />
            </Section>
            <Section id="softskills" title="Soft Skills" active={active === 'softskills'}>
              <Experience variant="softskills" />
            </Section>
            <Section id="contact" title="Contact" active={active === 'contact'} compact>
              <Contact />
            </Section>
          </Main>
        </Suspense>
      </ErrorBoundary>
      <Footer />
      </div>
    </>
  )
}
