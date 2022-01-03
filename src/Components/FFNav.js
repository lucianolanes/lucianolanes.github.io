import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import PROJECTS from '../service/projects';
import './FFNav.css';

export default function FFNav({setPage}) {
  const [time, setTime] = useState(new Date());

  const getTime = () => {
    setTimeout(()=> setTime(new Date()), 1000); 
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    let clock = ((hour < 10) ? `0${hour}` : hour);
    clock += ((minute < 10) ? ':0' : ':') + minute;
    clock += ((second < 10) ? ':0' : ':') + second;
    return clock;
  }

  return (
    <Fade right duration={200}>
      <aside>
        <nav className="side-menu">
          <p onClick={() => setPage('About')} className="link">
            Sobre Mim
          </p>
          <p onClick={() => setPage('Skills')} className="link">
            Skills
          </p>
          <p id="notLink">Projetos</p>
          <ul>
            { PROJECTS.map(({title, id}) => (
              <li className="link" key={id} onClick={ () => setPage(id)}>
                { title }
              </li>))
            }
          </ul>
        </nav>
        <div className="timer-container">
          <p>Time</p>
          <p>{getTime()}</p>
        </div>
      </aside>
    </Fade>
  )
}