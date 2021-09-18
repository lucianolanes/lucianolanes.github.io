import React from 'react';
import Fade from 'react-reveal/Fade';
import pointer from '../images/pointer.png'
import './Header.css';

export default function Header() {
  return (
    <header>
      <Fade duration={3000} >
        <div className="header-container">
          <h1>Olá, sou o Luciano e este é meu Portfólio</h1>
          <p>Página mobile em construção. Por favor, acesse por outro dispositivo</p>
        </div>
        <a href="#main-page"><img src={ pointer } alt="Apontando para baixo" /> <p>Iniciar</p></a>
      </Fade>
    </header>
  )
}