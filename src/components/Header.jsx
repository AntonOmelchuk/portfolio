import React from 'react';
import { Link } from 'react-scroll';

export const Header = ({ fixed }) => {
  return (
    <div className={fixed ? 'header fixed' : 'header'}>
      <div className='container header__inner'>
        <nav className='header__nav'>
          <div className='header__link'>
            <Link
              activeClass='active'
              to='intro'
              spy={true}
              smooth={true}
              offset={0}
              duration={750}
            >
              Intro
            </Link>
          </div>
          <div className='header__link'>
            <Link
              activeClass='active'
              to='skills'
              spy={true}
              smooth={true}
              offset={0}
              duration={750}
            >
              Skills
            </Link>
          </div>
          <div className='header__link'>
            <Link
              activeClass='active'
              to='works'
              spy={true}
              smooth={true}
              offset={50}
              duration={750}
            >
              Works
            </Link>
          </div>
          <div className='header__link'>
            <Link
              activeClass='active'
              to='contacts'
              spy={true}
              smooth={true}
              offset={160}
              duration={750}
            >
              Contacts
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};
