import React from 'react';
import photo from '../images/photo.jpg';

export const Intro = () => {
    return (
        <div className='intro block'>
            <div className='container'>

                <div className='intro__inner'>
                    <div className='about'>
                        <div className='introduce'>I am <span className='name'>Anton Omelchuk</span></div>
                        <div className='profession'><h1>Junior React Developer</h1></div>
                    </div>
                    <div className='photo'><img src={photo}/></div>
                </div>

            </div>
        </div>
    )
};