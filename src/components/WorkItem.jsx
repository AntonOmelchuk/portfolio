import React from 'react';

export const WorkItem = ({link, title, video, code}) => {
    return (
        <div className='works__item'>
            <div className='work__video'>
                <video src={video} autoPlay='autoPlay' loop className='work__screen' />
                <div className='btn btn--work btn--work-watch'>
                    <a href={link} target='_blank'>Watch</a>
                </div>
                <div className='btn btn--work btn--work-code'>
                    <a href={code} target='_blank'>Code</a>
                </div>
            </div>
            <div className='work__title'>{title}</div>
            <div className='work__description'>Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Ducimus, enim.
            </div>
        </div>

    )
};