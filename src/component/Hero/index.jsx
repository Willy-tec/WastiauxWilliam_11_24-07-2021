import { Component } from 'react';
import './style.css'
import hero_home from "./HERO_home.png"
import hero_about from "./HERO_about.png"

class Hero extends Component
{
    render()
    {

        return (
            <div className="hero">
                {
                    this.props.name === "Home"
                        ? <img src={hero_home} alt="Un paysage de falaises" />
                        : <img src={hero_about} alt="Un paysage de montagnes" />
                }
                <p className="hero_text">{ this.props.name === "Home" ? "Chez vous, partout et ailleurs" : "" }</p>
            </div>
        )
    }
}

export default Hero;