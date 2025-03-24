import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import "./index.css";
import LandingPage from "./LandingPage/Landing";
import AboutPage from "./AboutPage/About"
import SkillsPage from './SkillsPage/Skills';
import ExperiencePage from './Experience/Experience';
import ProjectsPage from './Projects/Projects';
import QuestionsPage from './Questions/Questions';
import WhiteSpace from './Space';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LandingPage />
    <WhiteSpace />
    <AboutPage />
    <WhiteSpace />
    <SkillsPage />
    <WhiteSpace />
    <ExperiencePage />
    <WhiteSpace />
    <ProjectsPage />
    <WhiteSpace />
    <QuestionsPage />
  </StrictMode>,
)
