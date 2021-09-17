import React from 'react';
import Fade from 'react-reveal/Fade';
import profilePic from '../images/luciano.jpg';
import './AboutMe.css';

export default function AboutMe() {
  const getAge = () => {
    const day = new Date().getDate();
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();
    const birthYear = 1994;

    const age = (day < 8 && month < 1) ? (year - birthYear - 1) : (year - birthYear);
    return age;
  }

  return (
    <Fade duration={2000}>
      <section className="about-container">
        <h1>Sobre Mim</h1>
        <div className="profile-card">
          <img src={ profilePic } alt="Luciano Lanes Lopes" className="profile-pic"/>
          <div className="profile-info">
            <h3>Luciano Lanes</h3>
            <p><span className="cian-color">LV</span> {getAge()}</p>
            <p><span className="cian-color">HP</span> 500/500</p>
            <hr className="hp-bar"/>
            <p><span className="cian-color">MP</span> 300/300</p>
            <hr className="mp-bar"/>
          </div>
          <div className="progress-bar">
            <p>LinkedIn</p>
            <a
              href="https://www.linkedin.com/in/lucianolanes/"
              target="_blank" rel="noreferrer"
            >
              <hr className="skill-bar"/>
            </a>
            <p>GitHub</p>
            <a
              href="https://github.com/lucianolanes"
              target="_blank" rel="noreferrer"
            >
              <hr className="skill-bar"/>
            </a>
          </div>
        </div>
        <p className="profile-text">
          Estudante de Desenvolvimento Web em transição de carreira onde em 2021, depois de 5 anos exercendo a profissão de Tecnólogo em Geoprocessamento, resolvi deixar de lado as geotecnologias para me aventurar na programação, onde acabei encontrando o meu lugar.
          <br />
          <br />
          Nesse portfólio com interface baseada no game Final Fantasy VII é possível navegar entre alguns dos projetos que fiz durante o curso da Trybe em Front-End e Back-End utilizando Javascript, HTML, CSS e React. 
        </p>
      </section>
    </Fade>
  )
}