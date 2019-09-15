import React from 'react'
import '../index.css';

export const Header = () => {
    return (
        <div className='header'>
            <div className='container header__inner'>
                <nav className='header__nav'>
                    <a href='#' className='header__link'>Main</a>
                    <a href='#' className='header__link'>Skills</a>
                    <a href='#' className='header__link'>Works</a>
                    <a href='#' className='header__link'>Contacts</a>
                </nav>
            </div>
        </div>
    )
};