import React from 'react';
import Fade from 'react-reveal/Fade';
import PROJECTS from '../service/projects';
import pointer from '../images/pointer.png';
import loadSound from '../soundEffects/loadSound.mp3';
import './ProjectPage.css';

export default function FrontEndProj({id}) {
  const playSound = () => {
    const soundEffect = new Audio(loadSound);
    soundEffect.play();
  }

  const renderProject = () => {
    const projeto = PROJECTS.filter((project) => project.id === id);
    return(
      <Fade duration={1000} key={ id }>
        <h1 className="project-title">{projeto[0].title}</h1>
        <div className="project-card">
          <img src={projeto[0].img} alt={projeto[0].title} className="project-thumb" rel="preload"/>
          <div className="project-info">
            <p>{projeto[0].text1}</p>
            <br />
            <p>{projeto[0].text2}</p>
          </div>
        </div>
        <section className="project-links">
        <div className="link-container" onClick={ playSound }>
          <a href={projeto[0].pageLink} target="_blank" rel="noreferrer">
            <img src={ pointer } alt="Apontando para Direita" className="project-pointer"/>
            Demonstração
          </a>
        </div>
        <div className="link-container" onClick={ playSound }>
          <a href={projeto[0].repoLink} target="_blank" rel="noreferrer">
            <img src={ pointer } alt="Apontando para Direita" className="project-pointer"/>
            Repositório
          </a>
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