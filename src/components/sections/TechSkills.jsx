import React from 'react'
import styled from 'styled-components'
import { asset } from '../../utils/asset'

const Wrap = styled.div`
  display: grid;
  gap: 16px;
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(260px, 1fr));
    align-items: start;
  }
`

const Category = styled.section`
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 12px;
  background: rgba(255,255,255,0.08);
  padding: 12px;
  @media (min-width: 1024px) {
    padding: 10px;
  }
`

const Title = styled.h3`
  margin: 0 0 8px;
  font-size: 18px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(86px, 1fr));
  gap: 8px;
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(86px, 1fr));
  }
`

const Item = styled.div`
  display: grid;
  gap: 6px;
  justify-items: center;
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 10px;
  background: rgba(255,255,255,0.06);
  padding: 8px;
  img { width: 32px; height: 32px; object-fit: contain; }
  small { color: #c9c9c9; text-align: center; font-size: 12px; }
  @media (min-width: 1280px) {
    img { width: 36px; height: 36px; }
    small { font-size: 13px; }
  }
`

const categories = [
  {
    title: 'Frontend',
    items: [
      { src: 'icons/TechIcons/react-svgrepo-com.svg', label: 'React' },
      { src: 'icons/TechIcons/icons8-redux.svg', label: 'Redux' },
      { src: 'icons/TechIcons/icons8-material-ui.svg', label: 'MUI' },
      { src: 'icons/TechIcons/icons8-styled-components-48.png', label: 'styled-components' },
      { src: 'icons/TechIcons/tailwind.png', label: 'Tailwind' },
      { src: 'icons/TechIcons/api-svgrepo-com.svg', label: 'AOS' },
    ],
  },
  {
    title: 'Backend',
    items: [
      { src: 'icons/TechIcons/node-js-svgrepo-com.svg', label: 'Node.js' },
      { src: 'icons/TechIcons/expressjs-icon.svg', label: 'Express' },
      { src: 'icons/TechIcons/api-svgrepo-com.svg', label: 'REST API' },
    ],
  },
  {
    title: 'Databases',
    items: [
      { src: 'icons/TechIcons/icons8-mongodb.svg', label: 'MongoDB' },
      { src: 'icons/TechIcons/icons8-sql-60.png', label: 'SQL' },
      { src: 'icons/TechIcons/pgadmin.png', label: 'pgAdmin' },
      { src: 'icons/TechIcons/firebase-svgrepo-com.svg', label: 'Firebase' },
    ],
  },
  {
    title: 'Tools',
    items: [
      { src: 'icons/TechIcons/icons8-github.svg', label: 'GitHub' },
      { src: 'icons/TechIcons/icons8-gitlab.svg', label: 'GitLab' },
      { src: 'icons/TechIcons/postman-icon-svgrepo-com.svg', label: 'Postman' },
      { src: 'icons/TechIcons/icons8-jira.svg', label: 'Jira' },
      { src: 'icons/TechIcons/icons8-notion.svg', label: 'Notion' },
      { src: 'icons/TechIcons/icons8-jest.png', label: 'Jest' },
    ],
  },
  {
    title: 'Platforms',
    items: [
      { src: 'icons/TechIcons/next.webp', label: 'Next.js' },
      { src: 'icons/TechIcons/icons8-google-maps.svg', label: 'Google Maps' },
      { src: 'icons/TechIcons/icons8-heroku.svg', label: 'Heroku' },
    ],
  },
]

export default function TechSkills() {
  return (
    <Wrap>
      {categories.map((cat) => (
        <Category key={cat.title} data-aos="fade-up">
          <Title>{cat.title}</Title>
          <Grid>
            {cat.items.map((i) => (
              <Item key={i.label} title={i.label} aria-label={i.label}>
                <img src={asset(i.src)} alt={i.label} loading="lazy" />
                <small>{i.label}</small>
              </Item>
            ))}
          </Grid>
        </Category>
      ))}
    </Wrap>
  )
}
