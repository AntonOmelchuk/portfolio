import React, {useState} from 'react';

export const Footer = () => {

    const [isShow, setIsShow] = useState(false);

    const toggleIcons = (e) => {
        e.preventDefault();
        setIsShow(!isShow);
    };

    return (
        <div className='footer'>
            <div className='container'>

                <div className='footer__inner'>
                    <div className='author'>Omelchuk Anton</div>
                    <div className='social__menu'>
                        <a href='#' target='_blank' className='menu__item main__menu__item' onClick={toggleIcons}>
                            <i className='fas fa-share-alt' />
                        </a>
                        <a href='https://github.com/AntonOmelchuk' target='_blank' className={isShow ? 'menu__item show1'
                            : 'menu__item'
                        }>
                            <i className='fab fa-facebook' />
                        </a>
                        <a href='https://www.facebook.com/profile.php?id=100008345618380&ref=bookmarks' className={
                            isShow ? 'menu__item show2': 'menu__item'
                        } target='_blank'>
                            <i className='fab fa-instagram' />
                        </a>
                        <a href='https://www.instagram.com/ztxtct/?hl=ru' className={isShow ? 'menu__item show3': 'menu__item'
                        } target='_blank'>
                            <i className='fab fa-github' />
                        </a>
                        <a href='https://www.linkedin.com/in/%D0%B0%D0%BD%D1%82%D0%BE%D0%BD-%D0%BE%D0%BC%D0%B5%D0%BB%D1%8C%D1%87%D1%83%D0%BA-4b5a00159/'
                           className={isShow ? 'menu__item show4': 'menu__item'} target='_blank'>
                            <i className='fab fa-linkedin' />
                        </a>
                    </div>
                    <div className='authority'>2019</div>
                </div>

            </div>
        </div>
    )
};