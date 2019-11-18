import React from 'react';
import { SkillItem } from './SkilItem';
import react from '../images/icons/React.png';
import js from '../images/icons/js.png';
import html from '../images/icons/html5.png';
import css from '../images/icons/css.png';
import redux from '../images/icons/redux.png';
import ts from '../images/icons/ts.png';

export const Skills = () => {
  let skills = [
    {
      id: 1,
      icon: html,
      title: 'HTML5',
      description: 'Some description'
    },
    {
      id: 2,
      icon: css,
      title: 'CSS3',
      description: 'Some description'
    },
    {
      id: 3,
      icon: js,
      title: 'JavaScript',
      description: 'Some description'
    },
    {
      id: 4,
      icon: ts,
      title: 'TypeScript',
      description: 'Some description'
    },
    {
      id: 5,
      icon: react,
      title: 'React',
      description: 'Some description'
    },
    {
      id: 6,
      icon: redux,
      title: 'Redux',
      description: 'Some description'
    }
  ];

  return (
    <div className='skills block' id='skills'>
      <div className='container'>
        <div className='block-title'>My skills</div>
        <div className='skills__inner'>
          {skills.map(skill => {
            return (
              <SkillItem
                key={skill.id}
                icon={skill.icon}
                title={skill.title}
                description={skill.description}
                id={skill.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
