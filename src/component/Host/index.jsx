import { Component } from 'react'
import './style.css'
//import LOGO_footer from "./LOGO_footer.svg";

class Host extends Component
{
    render()
    {
        console.log(this.props.host)
        return (
        
            <div className="host">
                <img className="host_img" src={this.props.host.picture} alt={this.props.host.name}/>
                <p>{this.props.host.name}</p>
            </div>
    )}
}

export default Host;