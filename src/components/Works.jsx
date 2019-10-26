import React from 'react';
import {WorkItem} from "./WorkItem";
import socialNetwork from '../images/works/socialNetwork.mp4';
import todo from '../images/works/todo.mp4';
import bookstore from '../images/works/bookStore.mp4';
import musicArt from '../images/works/musicArts.mp4';
import contactManger from '../images/works/contactManager.mp4';
import ticTacToe from '../images/works/ticTacToe.mp4';
import githubFinder from '../images/works/gitfinder.mp4';

export const Works = () => {

    let works = [
        {
            id: 1,
            title: 'Social Network',
            video: socialNetwork,
            link: 'https://antonomelchuk.github.io/Social_Network/#/profile'
        },
        {
            id: 2,
            title: 'ToDo List',
            video: todo,
            link: 'https://reacttodosua.herokuapp.com'
        },
        {
            id: 3,
            title: 'Bookstore',
            video: bookstore,
            link: 'https://react-bookstore-ua.herokuapp.com'
        },
        {
            id: 4,
            title: 'MusicArts',
            video: musicArt,
            link: 'https://antonomelchuk.github.io/MusicArts/index.html'
        },
        {
            id: 5,
            title: 'ContactManager',
            video: contactManger,
            link: 'https://contact-manager-ua.herokuapp.com/'
        },
        {
            id: 6,
            title: 'Tic Tac Toe',
            video: ticTacToe,
            link: 'https://antonomelchuk.github.io/Tic_Tac_Toe/'
        },
        {
            id: 7,
            title: 'GitHub Finder',
            video: githubFinder,
            link: 'https://github-finder-app-ua.herokuapp.com//'
        }
    ];


    return (
        <div className='works block'>
            <div className='container'>
                <div className='block-title'>My works</div>
                <div className='works__inner'>
                    {works.map(work => {
                        return <WorkItem key={work.id} title={work.title} img={work.img} link={work.link}
                                         video={work.video}/>
                    })}
                </div>
            </div>
        </div>
    )
};