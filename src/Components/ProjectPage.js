import React from 'react';
import Fade from 'react-reveal/Fade';
import PROJECTS from '../service/projects';
import pointer from '../images/pointer.png'
import './ProjectPage.css';

export default function FrontEndProj({id}) {
  const renderProject = () => {
    const projeto = PROJECTS.filter((project) => project.id === id);
    return(
      <Fade duration={2000}>
        <h1>{projeto[0].title}</h1>
        <div className="project-card">
          <img src={projeto[0].img} alt={projeto[0].title} className="project-thumb"/>
          <div className="project-info">
            <p>{projeto[0].text1}</p>
            <br />
            <p>{projeto[0].text2}</p>
          </div>
        </div>
        <section className="project-links">
        <div className="link-container">
          <img src={ pointer } alt="Apontando para Direita" className="pointer"/>
          <a href={projeto[0].pageLink} target="_blank" rel="noreferrer">Demonstração</a>
        </div>
        <div className="link-container">
          <img src={ pointer } alt="Apontando para Direita" className="pointer"/>
          <a href={projeto[0].repoLink} target="_blank" rel="noreferrer">Repositório</a>
        </div>
        </section>
      </Fade>
    );
  }

  return (
    <section className="projects-container">
      {renderProject()}
    </section>
  );
}