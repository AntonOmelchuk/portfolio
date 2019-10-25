import React from 'react';
import {WorkItem} from "./WorkItem";
import socialNetwork from '../images/works/socialNetwork.jpg';
import todo from '../images/works/todo.jpg';
import bookstore from '../images/works/bookstore.jpg';
import musicArt from '../images/works/musicArt.jpg';
import contactManger from '../images/works/contactManager.png';

export const Works = () => {

    let works = [
        {
            id: 1,
            title: 'Social Network',
            img: socialNetwork,
            link: 'https://antonomelchuk.github.io/Social_Network/#/profile'
        },
        {
            id: 2,
            title: 'ToDo List',
            img: todo,
            link: 'https://reacttodosua.herokuapp.com'
        },
        {
            id: 3,
            title: 'Bookstore',
            img: bookstore,
            link: 'https://react-bookstore-ua.herokuapp.com'
        },
        {
            id: 4,
            title: 'MusicArts',
            img: musicArt,
            link: 'https://antonomelchuk.github.io/MusicArts/index.html'
        },
        {
            id: 5,
            title: 'ContactManager',
            img: contactManger,
            link: 'https://contact-manager-ua.herokuapp.com/'
        }
    ];

    return (
        <div className='works block'>
            <div className='container'>
                <div className='block-title'>My works</div>
                <div className='works__inner'>
                    {works.map(work => {
                        return <WorkItem key={work.id} title={work.title} img={work.img} link={work.link} />
                    })}
                </div>
            </div>
        </div>
    )
};