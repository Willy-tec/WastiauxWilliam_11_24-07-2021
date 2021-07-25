import './Thumbs.css'
import React from 'react';

class Thumbs extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            count : 0
        }
        this.state.imgWidth = props.imgWidth;
        console.log(this.state.imgWidth)
    }
    render()
    {
        return (
            <div className="Thumbs">
                <img src= {this.props.url} alt={this.props.alt} width = {this.state.imgWidth} />
                <div className="Thumbs_background"></div>
                <p>{this.props.name}</p>
            </div>
        )
    }
}

export {Thumbs}