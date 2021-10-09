import React from 'react';
import Fade from 'react-reveal/Fade';
import ProfileCard from './ProfileCard';
import SkillCard from './SkillCard';
import SKILLS from '../service/skills';
import './Skills.css';

export default function Skills() {
  return (
    <section id="skill-container">
      <div id="top-container">
        <ProfileCard className="about-container"/>
        <h1 id="skills-title">Skills</h1>
      </div>
      <hr id="break-line"/>
      <Fade duration={2000}>
        <div id="bottom-container">
          {SKILLS.map(({title, techs}) => <SkillCard title={ title } techs={ techs } />)}
        </div>
      </Fade>
    </section>
  )
}