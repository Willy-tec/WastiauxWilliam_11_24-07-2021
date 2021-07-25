import { Component } from 'react';
import './style.css'

class Hero extends Component
{
    render()
    {
        return (
            <div className="hero">
                <img src={this.props.name === "Home" ? "./HERO_home.png" : "./HERO_about.png"} alt="Une belle *** pour attirer le regard" />
                <p className="hero_text">{ this.props.name === "Home" ? "Chez vous, partout et ailleurs" : "" }</p>
            </div>
        )
    }
}

export default Hero;