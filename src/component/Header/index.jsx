import { Component } from "react";
import { Link } from "react-router-dom";
import './style.css'

class Header extends Component
{

    render()
    {
        return (
            <nav className="navigation">
                <img src="./LOGO_accueil.svg" alt="Logo de KASA"/>
                <div className="navigation_link">
                    <Link to="/" >Accueil</Link>
                    <Link to="/about" >A propos</Link>
                </div>
        </nav>
        )
    }
}

export default Header;
