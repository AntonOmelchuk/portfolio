import React from 'react';

export const WorkItem = ({img, link, title}) => {
    return (
        <div className='works__item'>
            <div className='work__image'>
                <img className='work__screen' src={img}/>
                <div className='btn btn--work'><a href={link} target='_blank'>Watch</a></div>
            </div>
            <div className='work__title'>{title}</div>
            <div className='work__description'>Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Ducimus, enim.
            </div>
        </div>

    )
};