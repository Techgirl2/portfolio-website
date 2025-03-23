import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PageHeader from './pageheader.tsx'
//import About from './about.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PageHeader />
  </StrictMode>,
)
