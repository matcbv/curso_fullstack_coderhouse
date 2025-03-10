import { Link } from "react-router-dom";
import { Home } from "../Home";
import './style.css';

export function NavBar(){
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to={Home}>Home</Link></li>
                    <li><Link to={Home}>Sign in</Link></li>
                    <li><Link to={Home}>Sign up</Link></li>
                    <li><Link to={Home}>Kart</Link></li>
                </ul>
            </nav>
        </header>
    ); 
};
