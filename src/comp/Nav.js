import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoon, faSun} from "@fortawesome/free-solid-svg-icons";

function Nav() {

    function night() {
        const app = document.querySelector('.App');
        app.classList.toggle('night');
    }

    return (
        <nav>
            <ul>
                <a href="#sectionOne">
                    <li>HOME</li>
                </a>
                <a href="#sectionTwo">
                    <li>ABOUT ME</li>
                </a>
                <a href="#sectionThree">
                    <li>PORTFOLIO</li>
                </a>
                <a>
                    <li>GIT</li>
                </a>
                <li className="dayNight" onClick={night}>
                    <FontAwesomeIcon className="icon" icon={faMoon}/>
                    <FontAwesomeIcon className="icon" icon={faSun}/>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
