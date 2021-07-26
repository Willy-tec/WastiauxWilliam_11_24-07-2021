import { Component } from 'react'
import './style.css'
import LOGO_footer from "./LOGO_footer.svg";

class Footer extends Component
{
    render()
    {
        return (
        
            <div className="footer">
                <img src={LOGO_footer} alt="Logo de KASA"/>
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
    )}
}

export default Footer;