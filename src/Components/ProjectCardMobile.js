import React from 'react';
import PROJECTS from '../service/projects';
import pointer from '../images/pointer.png';
import loadSound from '../soundEffects/loadSound.mp3';
import './ProjectCardMobile.css';

export default function ProjectCardMobile() {
  const playSound = () => {
    const soundEffect = new Audio(loadSound);
    soundEffect.play();
  }

  const renderCards = () => {
    return PROJECTS.map(({title, img, text1, text2, repoLink}) => {
      return(
        <section className="project-card-mobile">
          <h1 className="project-title-mobile">{title}</h1>
            <img src={img} alt={title} className="project-thumb-mobile" />
            <div className="project-info-mobile">
              <p>{text1}</p>
              <br />
              <p>{text2}</p>
            </div>
          <div className="link-container" onClick={ playSound }>
            <a href={repoLink} target="_blank" rel="noreferrer">
              <img src={ pointer } alt="Apontando para Direita" className="project-pointer"/>
              Repositório
            </a>
          </div>
        </section>
      )
    });
  }

  return (
    <section className="projects-container-mobile">
      {renderCards()}
    </section>
  );
}