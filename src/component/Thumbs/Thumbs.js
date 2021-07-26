import './Thumbs.css'
import React from 'react';
import {Link} from 'react-router-dom'

class Thumbs extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            count : 0
        }
        this.state.imgWidth = props.imgWidth;
    }
    render()
    {
        return (
            <Link to={`/fiche/${this.props.index}`} className="Thumbs">
                <img src= {this.props.url} alt={this.props.alt} width = {this.state.imgWidth} />
                <div className="Thumbs_background"></div>
                <p>{this.props.name}</p>
            </Link>
        )
    }
}

export { Thumbs }
/* to={`/fiche/:${this.props.index}`} */