import { Component } from 'react'

import './style.css'

class Tag extends Component
{
    render()
    {
        return (
        
            <span className="tag">{this.props.texte}
            </span>
    )}
}

export default Tag;