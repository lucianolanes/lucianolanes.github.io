import React from 'react';
import Fade from 'react-reveal/Fade';
import profilePic from '../images/luciano.jpg';
import './ProfileCard.css';

export default function ProfileCard() {
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
      <section className="profile-card">
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
      </section>
    </Fade>
  )
}