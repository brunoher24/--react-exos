import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

function Header() { 
    return (
        <header className="Header">
            <Link to="/">
                <img src={logo} alt="Mon super site"/>
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link to="/page1">Page 1</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
