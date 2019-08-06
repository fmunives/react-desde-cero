import React, {Fragment} from 'react';
//import logo from './logo.svg';
//import './App.css';
import "./styles/styles.scss";
import Curso from './Curso'

const App = () => (
    <Fragment>
        <div className="main-banner img-container l-section" id="main-banner">
            <div className="ed-grid lg-grid-6">
                <div className="lg-cols-4 lg-x-2">
                <img className="main-banner__img" alt="banner" src="https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
                <div className="main-banner__data s-center">
                    <p className="t2 s-mb-0">Curso de React con EDteam</p>
                    <p>Buen curso para empezar en el nuevo desarrollo web</p>
                    <a href="https:ed.team" className="button">Empezar</a>
                </div>
                </div>
            </div>
        </div>
        <div className="ed-grid m-grid-3">
            <Curso />
            <Curso />
            <Curso />
            <Curso />
            <Curso />
            <Curso />
            <Curso />
            <Curso />
            <Curso />
            <Curso />
        </div>
    </Fragment>
)
export default App;
