import React from 'react';
import github from "../images/social-icons/gh.png";
import facebook from "../images/social-icons/fb.png";
import instagram from "../images/social-icons/inst.png";
import linkedin from "../images/social-icons/in.png";

export const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>

                <div className='footer__inner'>
                    <div className='author'>Omelchuk Anton</div>
                    <div className="social__menu">
                        <a href="https://github.com/AntonOmelchuk" target="_blank" className="menu__item">
                            <img src={github} alt='github-icon' />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100008345618380&ref=bookmarks" className="menu__item" target="_blank">
                            <img src={facebook} alt='facebook-icon' />
                        </a>
                        <a href="https://www.instagram.com/ztxtct/?hl=ru" className="menu__item" target="_blank">
                            <img src={instagram} alt='instagram-icon' />
                        </a>
                        <a href="https://www.linkedin.com/in/%D0%B0%D0%BD%D1%82%D0%BE%D0%BD-%D0%BE%D0%BC%D0%B5%D0%BB%D1%8C%D1%87%D1%83%D0%BA-4b5a00159/"
                           className="menu__item" target="_blank">
                            <img src={linkedin} alt='instagram-icon' />
                        </a>
                    </div>
                    <div className='authority'>2019</div>
                </div>

            </div>
        </div>
    )
};