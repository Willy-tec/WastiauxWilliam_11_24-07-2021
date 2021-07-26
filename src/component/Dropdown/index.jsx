import { Component } from 'react';
import './style.css'
import cursorSvg from "./Fleche.svg"

class Dropdown extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            isCollapse: true,
            maxHeight: 1
        }
    }
    handleClick = (e) =>
    {
        let pNode = e.target
        while (pNode.className !== "dropdown") pNode = pNode.parentNode
        const maxHeight = pNode.querySelector(".dropdown_body_child").offsetHeight
        const cursorNode = pNode.querySelector(".dropdown_cursor")
        const bodyNode = pNode.querySelector(".dropdown_body")
        
        if (this.state.isCollapse)
        {
            bodyNode.style.maxHeight = maxHeight + "px"
            cursorNode.style.transform = "rotateX(0deg)"
            this.setState({ isCollapse: false })
        }
        else
        {
            bodyNode.style.maxHeight = "0px"
            cursorNode.style.transform = "rotateX(-180deg)"
            this.setState({ isCollapse: true })
        }
    }
    render()
    {
        return (
            <div className="dropdown" >
                <div className="dropdown_title" onClick={ this.handleClick }>
                    <h2>{this.props.titre}</h2>
                    <img className="dropdown_cursor" src={cursorSvg} alt="curseur" />
                </div>
                <div className="dropdown_body" style={{maxHeight : 0}}>
                    <div className="dropdown_body_child">
                        {this.props.children}
                    </div> 
                </div>
            </div>
        )
    }
}

export default Dropdown;