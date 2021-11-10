import React from 'react';
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
    <section className="profile-card" data-testid="profileCard">
      <img src={ profilePic }
        alt="Luciano Lanes Lopes"
        className="profile-pic"
        data-testid="profile-pic"
      />
      <div className="profile-info">
        <h3 data-testid="name">Luciano Lanes</h3>
        <p><span className="cian-color">LV</span> {getAge()}</p>
        <p data-testid="hpInfo"><span className="cian-color">HP</span> 500/500</p>
        <hr className="hp-bar" data-testid="hpBar"/>
        <p data-testid="mpInfo"><span className="cian-color">MP</span> 300/300</p>
        <hr className="mp-bar" data-testid="mpBar"/>
      </div>
      <div className="progress-bar">
        <p>LinkedIn</p>
        <a
          href="https://www.linkedin.com/in/lucianolanes/"
          target="_blank"
          rel="noreferrer"
          data-testid="LinkedInBar"
        >
          <hr className="skill-bar"/>
        </a>
        <p>GitHub</p>
        <a
          href="https://github.com/lucianolanes"
          target="_blank"
          rel="noreferrer"
          data-testid="GitHubBar"
        >
          <hr className="skill-bar"/>
        </a>
      </div>
    </section>
  )
}