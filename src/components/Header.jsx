import React from 'react'
import {Link} from 'react-scroll';
import '../index.css';

export const Header = ({fixed}) => {

    const handleSetActive = () => {};

    return (
        <div className={fixed ? 'header fixed' : 'header'}>
            <div className='container header__inner'>
                <nav className='header__nav'>
                    <div className="header__link">
                        <Link activeClass="active header__link" to="intro" spy={true} smooth={true} offset={0}
                              duration={750} onSetActive={handleSetActive}>
                            Intro
                        </Link>
                    </div>
                    <div className="header__link">
                        <Link activeClass="active header__link" to="skills" spy={true} smooth={true} offset={0}
                              duration={750} onSetActive={handleSetActive}>
                            Skills
                        </Link>
                    </div>
                    <div className="header__link">
                        <Link activeClass="active header__link" to="works" spy={true} smooth={true} offset={50}
                              duration={750} onSetActive={handleSetActive}>
                            Works
                        </Link>
                    </div>
                    <div className="header__link">
                        <Link activeClass="active header__link" to="contacts" spy={true} smooth={true} offset={50}
                              duration={750} onSetActive={handleSetActive}>
                            Contacts
                        </Link>
                    </div>
                </nav>
            </div>
        </div>
    )
};