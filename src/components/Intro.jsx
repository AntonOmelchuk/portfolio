import React from 'react';
import photo from '../images/photo.jpg';
import Particles from 'react-particles-js';
import Tilt from 'react-tilt'

const params = {
    'particles':{
        'number':{
            'value':150
        },
        'color':{
            'value':'#fff'
        },
        'shape':{
            'type':'circle',
            'stroke':{
                'width':1,
                'color':'coral'
            },
            'image':{
                'src':'http://www.iconsdb.com/icons/preview/white/contacts-xxl.png'
            }
        },
        'opacity':{
            'value':0.5,
            'random':true,
            'anim':{
                'enable':false,
                'speed':1
            }
        },
        'size':{
            'value': 5,
            'random':false,
            'anim':{
                'enable': false,
                'speed':40
            }
        },
        'line_linked':{
            'enable': true,
            'distance': 120,
            'color':'#fff',
            'width':1
        },
        'move':{
            'enable':true,
            'speed':2,
            'direction':'none',
            'straight':false
        }
    },
    'interactivity':{
        'events':{
            'onhover':{
                'enable':true,
                'mode':'repulse'
            },
            'onclick':{
                'enable': true,
                'mode':'push'
            }
        },
        'modes':{
            'repulse':{
                'distance':50,
                'duration':0.4
            },
            'bubble':{
                'distance':100,
                'size':10
            }
        }
    }
};

export const Intro = () => {
    return (
        <div className='intro block' id='intro'>
            <Particles className='particles' params={params} />
            <div className='container'>

                <div className='intro__inner'>
                    <div className='about'>
                        <div className='introduce'>I am <span className='name'>Anton Omelchuk</span></div>
                        <div className='profession'><h1>React Developer</h1></div>
                    </div>
                    <Tilt className='Tilt'>
                        <div className='Tilt-inner'>
                            <div className='photo'><img src={photo} alt='photo' /></div>
                        </div>
                    </Tilt>
                </div>

            </div>
        </div>
    )
};