import React from 'react';
import './SkillCard.css';

export default function SkillCard({title, techs}) {
  return (
    <section className="skill-card">
      <h3>{ title } </h3>
      <ul>
        { techs.map((tech) => <li className="tech-li" key={ tech }> { tech } </li>) }
      </ul>
    </section>
  )
}