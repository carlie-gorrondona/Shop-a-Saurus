import React, {Component} from 'react';
import Navigation from './Navbar';
import Welcome from './Welcome';
import About from './About';
import Contact from './Contact';
import DinoShop from './DinoShop';
import DinoInfoPage from './DinoInfoPage';
import { Route, Routes} from 'react-router-dom';

const Root = () => {

    return (
        <div>
            <Routes>
                <Route path='/' element={<Navigation />}>
                <Route index element={<Welcome />}/>
                <Route path='about' element={<About />}/>
                <Route path='contact' element={<Contact />}/>
                <Route path='shop' element={<DinoShop />}/>
                <Route path='dinoinfo' element={<DinoInfoPage />}/>
                </Route>
            </Routes>
            
            <a className="icons8" target="_blank" href="https://icons8.com/icon/lweWyGBSK7KO/shopping-bag">Shopping Bag icon by Icons8</a>
        </div>
    );
}

export default Root