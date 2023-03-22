import React from 'react';
import IluminatedCard from '../IluminatedCard';
import Slider from '../Slider';
import style from './styles/Skills.module.css';
import skills from '../../assets/texts/home-skills.json';

export default function Skills() {
  return (
    <div className={ style.skills }>
      <h1 className={ style['third-section-title'] }>
        Skills
      </h1>
      <Slider>
        {
          skills.map((skill, i) => (
            <IluminatedCard
              key={ i }
              data={ skill }
            />
          ))
        }
      </Slider>
    </div>
  );
}
