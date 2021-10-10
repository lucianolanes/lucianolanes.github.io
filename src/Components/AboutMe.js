import React from 'react';
import Fade from 'react-reveal/Fade';
import ProfileCard from './ProfileCard';
import './AboutMe.css';

export default function AboutMe() {
  return (
    <Fade duration={2000}>
      <section className="about-container">
        <h1>Sobre Mim</h1>
        <ProfileCard />
        <p className="profile-text">
          Estudante de Desenvolvimento Web em transição de carreira onde em 2021, depois de 5 anos exercendo a profissão de Tecnólogo em Geoprocessamento, resolvi deixar de lado as geotecnologias para me aventurar na programação, onde acabei encontrando o meu lugar.
          <br />
          <br />
          Nesse portfólio com interface baseada no game Final Fantasy VII é possível navegar entre alguns dos projetos que fiz durante a minha trajetória pelo curso da Trybe desde abril de 2021, quando decidi iniciar minha transição de carreira como desenvolvedor. 
        </p>
      </section>
    </Fade>
  )
}