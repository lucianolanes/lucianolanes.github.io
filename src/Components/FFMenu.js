import React, { useEffect, useState } from 'react';
import FFNav from './FFNav';
import SkillsMobile from './SkillsMobile';
import AboutMe from './AboutMe';
import Skills from './Skills';
import ProjectPage from './ProjectPage';
import ProjectCardMobile from './ProjectCardMobile';
import PROJECTS from '../service/projects';
import './FFMenu.css';

export default function FFMenu() {
  const [renderPage, setPage] = useState('About');

  useEffect(() => {
    PROJECTS.forEach(({img}) => {
      new Image().src = img;
  });
  }, []);

  const renderComponent = () => {
    if (renderPage === "About") {
      return <AboutMe />;
    } else if (renderPage === "Skills") {
      return <Skills />;
    }
    return <ProjectPage id={renderPage}/>
  }

  return (
    <main className="FFMenu-style" id="main-page">
      { renderComponent() }
      <FFNav setPage={setPage} />
      <SkillsMobile />
      <h2 id="projects-title-mobile">Projetos</h2>
      <ProjectCardMobile />
    </main>
  )
}