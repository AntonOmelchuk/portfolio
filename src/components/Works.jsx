import React from 'react';
import {WorkItem} from './WorkItem';
import network from '../images/works/network.webm';
import clothingShop from '../images/works/clothingShop.webm';
import todo from '../images/works/todo.webm';
import bookstore from '../images/works/bookStore.webm';
import musicArt from '../images/works/musicArts.webm';
import contactManger from '../images/works/contactManager.webm';
import githubFinder from '../images/works/gitfinder.webm';
import game from '../images/works/game.webm';

export const Works = () => {
  let works = [
    {
      id: 1,
      title: 'Social Network',
      video: network,
      link: 'https://antonomelchuk.github.io/React_Network_v2/',
      code: 'https://github.com/AntonOmelchuk/React_Network_v2',
      description:
        'React, Redux, redux-form, redux-thunk, React hooks, HOC, axios, date-fns, hookrouter, react-paginate'
    },
    {
      id: 2,
      title: 'Clothing Shop',
      video: clothingShop,
      link: 'https://clothing-shop-ua.herokuapp.com',
      code: 'https://github.com/AntonOmelchuk/clothes_shop',
      description: 'React, Redux, redux-persist, reselect, firebase, node-sass, react-stripe-chekcout'
    },
    {
      id: 3,
      title: 'ToDo List',
      video: todo,
      link: 'https://reacttodosua.herokuapp.com',
      code: 'https://github.com/AntonOmelchuk/React_ToDo',
      description: 'React, React hooks, prop-types'
    },
    {
      id: 4,
      title: 'Bookstore',
      video: bookstore,
      link: 'https://react-bookstore-ua.herokuapp.com',
      code: 'https://github.com/AntonOmelchuk/Bookstore',
      description: 'React, Redux, axios, lodash, semantic-ui-react'
    },
    {
      id: 5,
      title: 'MusicArts',
      video: musicArt,
      link: 'https://antonomelchuk.github.io/MusicArts/index.html',
      code: 'https://github.com/AntonOmelchuk/MusicArts',
      description: 'HTML5, CSS3, JS, JQuery'
    },
    {
      id: 6,
      title: 'ContactManager',
      video: contactManger,
      link: 'https://contact-manager-ua.herokuapp.com',
      code: 'https://github.com/AntonOmelchuk/Contact-Manager',
      description: 'React, Redux, redux-thunk, axios, prop-types, react-bootstrap'
    },
    {
      id: 7,
      title: 'GitHubFinder',
      video: githubFinder,
      link: 'https://github-finder-app-ua.herokuapp.com',
      code: 'https://github.com/AntonOmelchuk/GitHubFinder',
      description: 'React, React hooks, axios, prop-types'
    },
    {
      id: 8,
      title: 'React Game',
      video: game,
      link: 'https://antonomelchuk.github.io/Simple_React_Game',
      code: 'https://github.com/AntonOmelchuk/Simple_React_Game',
      description: 'React, TypeScript, React hooks'
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
                description={work.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
