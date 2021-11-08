import React from 'react';
import Fade from 'react-reveal/Fade';
import pointer from '../images/pointer.png';
import './Header.css';
import pointerSound from '../soundEffects/cursor_sound.mp3';

export default function Header() {
  const playSound = () => {
    const soundEffect = new Audio(pointerSound);
    soundEffect.play();
  }

  return (
    <header>
      <Fade duration={3000} >
        <div className="header-container">
          <h1>Olá! Sou o Luciano e este é meu Portfólio</h1>
        </div>
        <a href="#main-page">
          <img src={ pointer } alt="Apontando para Esquerda" id="header-pointer" />
          <p onClick={ playSound } className="iniciar">Iniciar</p>
        </a>
      </Fade>
    </header>
  )
}