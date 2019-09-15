import React from 'react';
import photo from '../images/photo.jpg';

export const Intro = () => {
    return (
        <div className='intro block'>
            <div className='container'>

                <div className='intro__inner'>
                    <div className='about'>Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Consequatur ea
                        earum iure quasi sequi sint.
                    </div>
                    <div className='photo'><img src={photo}/></div>
                </div>

            </div>
        </div>
    )
};