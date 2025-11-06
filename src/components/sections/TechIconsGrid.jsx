import React from 'react'
import styled from 'styled-components'
import { asset } from '../../utils/asset'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
  gap: 12px;
`

const Card = styled.div`
  display: grid; gap: 8px; justify-items: center;
  padding: 10px; border: 1px solid rgba(255,255,255,0.12); border-radius: 10px; background: rgba(255,255,255,0.08);
  img { width: 36px; height: 36px; object-fit: contain; }
  small { color: #9aa0a6; text-align: center; }
`

const icons = [
  { src: 'icons/TechIcons/react-svgrepo-com.svg', label: 'React' },
  { src: 'icons/TechIcons/node-js-svgrepo-com.svg', label: 'Node.js' },
  { src: 'icons/TechIcons/expressjs-icon.svg', label: 'Express' },
  { src: 'icons/TechIcons/icons8-mongodb.svg', label: 'MongoDB' },
  { src: 'icons/TechIcons/icons8-sql-60.png', label: 'SQL' },
  { src: 'icons/TechIcons/postman-icon-svgrepo-com.svg', label: 'Postman' },
  { src: 'icons/TechIcons/icons8-redux.svg', label: 'Redux' },
  { src: 'icons/TechIcons/icons8-material-ui.svg', label: 'MUI' },
  { src: 'icons/TechIcons/icons8-styled-components-48.png', label: 'styled-components' },
  { src: 'icons/TechIcons/tailwind.png', label: 'Tailwind' },
  { src: 'icons/TechIcons/firebase-svgrepo-com.svg', label: 'Firebase' },
  { src: 'icons/TechIcons/icons8-jest.png', label: 'Jest' },
  { src: 'icons/TechIcons/icons8-github.svg', label: 'GitHub' },
  { src: 'icons/TechIcons/icons8-gitlab.svg', label: 'GitLab' },
  { src: 'icons/TechIcons/icons8-heroku.svg', label: 'Heroku' },
  { src: 'icons/TechIcons/next.webp', label: 'Next.js' },
  { src: 'icons/TechIcons/icons8-google-maps.svg', label: 'Google Maps' },
  { src: 'icons/TechIcons/api-svgrepo-com.svg', label: 'REST API' },
  { src: 'icons/TechIcons/pgadmin.png', label: 'pgAdmin' },
  { src: 'icons/TechIcons/icons8-notion.svg', label: 'Notion' },
  { src: 'icons/TechIcons/icons8-jira.svg', label: 'Jira' },
]

export default function TechIconsGrid() {
  return (
    <Grid>
      {icons.map((i) => (
        <Card key={i.src} title={i.label} aria-label={i.label}>
          <img src={asset(i.src)} alt={i.label} loading="lazy" />
          <small>{i.label}</small>
        </Card>
      ))}
    </Grid>
  )
}
