import React from 'react';
import Slide from 'react-reveal/Slide';

export const SkillItem = ({ icon, title, description, id }) => {
  if (id === 1 || id === 2 || id === 3) {
    return (
      <Slide right>
        <div className='skills__item'>
          <div className='skills__icon'>
            <img src={icon} alt='skill icon' />
          </div>
          <div className='skills__title'>{title}</div>
          <div className='skills__description'>{description}</div>
        </div>
      </Slide>
    );
  } else {
    return (
      <Slide left>
        <div className='skills__item'>
          <div className='skills__icon'>
            <img src={icon} alt='skill icon' />
          </div>
          <div className='skills__title'>{title}</div>
          <div className='skills__description'>{description}</div>
        </div>
      </Slide>
    );
  }
};
