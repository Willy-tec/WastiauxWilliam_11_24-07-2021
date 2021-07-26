import { Component } from "react";
import { Link } from "react-router-dom";
import logo_accueil from "./LOGO_accueil.svg"
import './style.css'

class Header extends Component
{

    render()
    {
        return (
            <nav className="navigation">
                <Link to="/">
                    <img src={logo_accueil} alt="Logo de KASA" />
                </Link>
                
                <div className="navigation_link">
                    <Link to="/" >Accueil</Link>
                    <Link to="/about" >A propos</Link>
                </div>
        </nav>
        )
    }
}

export default Header;
