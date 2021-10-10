import React from 'react';
import Fade from 'react-reveal/Fade';
import ProfileCard from './ProfileCard';
import SkillCard from './SkillCard';
import SKILLS from '../service/skills';
import './Skills.css';

export default function Skills() {
  return (
    <Fade duration={2000}>
      <section id="skill-container">
        <div id="top-container">
          <ProfileCard className="about-container"/>
          <h1 id="skills-title">Skills</h1>
        </div>
        <hr id="break-line"/>
          <div id="bottom-container">
            {SKILLS.map(({title, techs}) => <SkillCard title={ title } techs={ techs } key={ title } />)}
          </div>
      </section>
    </Fade>
  )
}