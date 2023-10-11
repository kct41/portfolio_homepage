import {Link, NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoon, faSun} from "@fortawesome/free-solid-svg-icons";
import React from "react";

function Nav() {

    function night() {
        const app = document.querySelector('.App');
        app.classList.toggle('night');
    }

    return (
        <nav>
            <ul>
                <li>
                    <a href="#home">HOME</a>
                </li>
                <li>
                    <a href="#about">ABOUT ME</a>
                </li>
                <li>
                    <a href="#portfolio">PORTFOLIO</a>
                </li>
                <li>
                    <a href="#git">GIT</a>
                </li>
                <li className="dayNight" onClick={night}>
                    <FontAwesomeIcon className="icon" icon={faMoon}/>
                    <FontAwesomeIcon className="icon" icon={faSun}/>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
