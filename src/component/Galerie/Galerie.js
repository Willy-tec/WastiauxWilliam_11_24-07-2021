import React from 'react';
import fleche from './Fleche.svg'
import './style.css'

class Galerie extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            widthImg: 256,
            index: 0,
            size : this.props.listUrl.length - 1
        }
    }

    incrementIndex = () =>
    {
        this.setState({index : this.state.index >= this.state.size ? 0 : this.state.index + 1})
    }
    decrementIndex = () =>
    {
        this.setState({index : this.state.index <= 0 ? this.state.size : this.state.index - 1})
    }
    render()
    {
        
        return (
            <div className="galerie">
                {this.state.size > 1 ? <img className="galerie_fleche_gauche" src={fleche} alt="" onClick={this.decrementIndex} /> : ""}
                <img className="galerie_image" src={this.props.listUrl[this.state.index]} alt="gallerie" width={1024} />
                {this.state.size>0 ? <span className="galerie_count">{this.state.index+1}/{this.state.size + 1}</span> : ""}
                {this.state.size > 1 ? <img className="galerie_fleche_droite" src={fleche} alt="" onClick={this.incrementIndex}/>: ""}
            </div>);
    }
}

export  default Galerie;