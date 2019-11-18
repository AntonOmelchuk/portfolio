import React from 'react';
import { WorkItem } from './WorkItem';
import socialNetwork from '../images/works/socialNetwork.mp4';
import todo from '../images/works/todo.mp4';
import bookstore from '../images/works/bookStore.mp4';
import musicArt from '../images/works/musicArts.mp4';
import contactManger from '../images/works/contactManager.mp4';
import ticTacToe from '../images/works/ticTacToe.mp4';
import githubFinder from '../images/works/gitfinder.mp4';
import game from '../images/works/game.mp4';

export const Works = () => {
  let works = [
    {
      id: 1,
      title: 'Social Network',
      video: socialNetwork,
      link: 'https://antonomelchuk.github.io/Social_Network/#/profile',
      code: 'https://github.com/AntonOmelchuk/Social_Network'
    },
    {
      id: 2,
      title: 'ToDo List',
      video: todo,
      link: 'https://reacttodosua.herokuapp.com',
      code: 'https://github.com/AntonOmelchuk/React_ToDo'
    },
    {
      id: 3,
      title: 'Bookstore',
      video: bookstore,
      link: 'https://react-bookstore-ua.herokuapp.com',
      code: 'https://github.com/AntonOmelchuk/Bookstore'
    },
    {
      id: 4,
      title: 'MusicArts',
      video: musicArt,
      link: 'https://antonomelchuk.github.io/MusicArts/index.html',
      code: 'https://github.com/AntonOmelchuk/MusicArts'
    },
    {
      id: 5,
      title: 'ContactManager',
      video: contactManger,
      link: 'https://contact-manager-ua.herokuapp.com',
      code: 'https://github.com/AntonOmelchuk/Contact-Manager'
    },
    {
      id: 6,
      title: 'Tic Tac Toe',
      video: ticTacToe,
      link: 'https://antonomelchuk.github.io/Tic_Tac_Toe',
      code: 'https://github.com/AntonOmelchuk/Tic_Tac_Toe'
    },
    {
      id: 7,
      title: 'GitHub Finder',
      video: githubFinder,
      link: 'https://github-finder-app-ua.herokuapp.com',
      code: 'https://github.com/AntonOmelchuk/GitHubFinder'
    },
    {
      id: 8,
      title: 'React Game',
      video: game,
      link: 'https://antonomelchuk.github.io/Simple_React_Game',
      code: 'https://github.com/AntonOmelchuk/Simple_React_Game'
    }
  ];

  return (
    <div className='works block' id='works'>
      <div className='container'>
        <div className='block-title'>My works</div>
        <div className='works__inner'>
          {works.map(work => {
            return (
              <WorkItem
                key={work.id}
                title={work.title}
                img={work.img}
                link={work.link}
                video={work.video}
                code={work.code}
                id={work.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
