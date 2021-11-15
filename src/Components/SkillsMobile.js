import React from 'react';
import SkillCard from './SkillCard';
import SKILLS from '../service/skills';
import './SkillsMobile.css';

export default function SkillsMobile() {
  return (
    <section id="skill-container-mobile">
      <div id="top-container-mobile">
        <h2 id="skills-title-mobile">Skills</h2>
      </div>
        <div id="bottom-container-mobile">
          {SKILLS.map(({title, techs}) => <SkillCard title={ title } techs={ techs } key={ title } />)}
        </div>
    </section>
  )
}