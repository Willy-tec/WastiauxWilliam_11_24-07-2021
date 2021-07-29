import { Component } from 'react'
import './style.css'
//import LOGO_footer from "./LOGO_footer.svg";

class Host extends Component
{
    render()
    {
        return (
        
            <div className="host">
                <img className="host_img" src={this.props.host.picture} alt={this.props.host.name}/>
                <div className="host_name">{this.props.host.name.split(" ").map((el, index) => <p key={`hostname${ index }`}>{el}</p>)}
                </div>
            </div>
    )}
}

export default Host;