import React, { useState } from 'react';
import FFNav from './FFNav';
import AboutMe from './AboutMe';
import ProjectPage from './ProjectPage';
import './FFMenu.css';

export default function FFMenu() {
  const [renderPage, setPage] = useState('About');

  return (
    <main className="FFMenu-style" id="main-page">
      {renderPage === "About" ? <AboutMe /> : <ProjectPage id={renderPage}/>}
      <FFNav setPage={setPage}/>
    </main>
  )
}