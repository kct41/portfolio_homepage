import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
function Nav() {

    const app = document.querySelector('.App');
    function night(){
        app.classList.toggle('night');
    }

    return (
        <nav>
            <Link to="/"><h1>Logo</h1></Link>
            <ul>
                <Link to="ss"><li>HOME</li></Link>
                <Link to="ss"><li>ABOUT</li></Link>
                <Link to="ss"><li>PORTFOLIO</li></Link>
                <Link to="ss"><li>GIT</li></Link>
                <li className="dayNight" onClick={night}>
                    <FontAwesomeIcon className="icon" icon={faMoon}/>
                    <FontAwesomeIcon className="icon" icon={faSun}/>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
