import React, { useState } from 'react';
import FFNav from './FFNav';
import AboutMe from './AboutMe';
import Skills from './Skills';
import ProjectPage from './ProjectPage';
import './FFMenu.css';

export default function FFMenu() {
  const [renderPage, setPage] = useState('About');

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
      <FFNav setPage={setPage}/>
    </main>
  )
}