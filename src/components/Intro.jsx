import React from 'react';
import photo from '../images/photo.jpg';
import Tilt from 'react-tilt'

export const Intro = () => {
    return (
        <div className='intro block'>
            <div className='container'>

                <div className='intro__inner'>
                    <div className='about'>
                        <div className='introduce'>I am <span className='name'>Anton Omelchuk</span></div>
                        <div className='profession'><h1>Junior React Developer</h1></div>
                    </div>
                    <Tilt className="Tilt">
                        <div className="Tilt-inner">
                            <div className='photo'><img src={photo} alt='photo' /></div>
                        </div>
                    </Tilt>
                </div>

            </div>
        </div>
    )
};