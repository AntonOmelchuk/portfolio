import React, {useEffect, useState} from 'react'
import './index.css';
import {Header} from "./components/Header";
import {Intro} from "./components/Intro";
import {Skills} from "./components/Skills";
import {Works} from "./components/Works";
import {Contacts} from "./components/Contacts";
import {Footer} from "./components/Footer";

const App = () => {

    const [stickyHeader, setStickyHeader] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > window.innerHeight) {
                setStickyHeader(true)
            } else {
                setStickyHeader(false)
            }
        })
    }, []);

    return (
        <>
            <Header fixed={stickyHeader && 'fixed'} />
            <Intro />
            <Skills />
            <Works />
            <Contacts />
            <Footer />
        </>

    )
}

export default App;
