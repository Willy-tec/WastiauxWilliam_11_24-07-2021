import { Component } from "react";
import { Link } from 'react-router-dom'
import './style.css'

class ErrorPage extends Component
{
    render()
    {
        return (
            <div className="Error_page">
                <p className="Error_page_quatreCent">404</p>
                <p className="Error_page_introuvable">Oups! La page que vous demandez n'existe pas.</p>
                <Link className="Error_page_link" to="/">Retourner sur la page d’accueil</Link>
            </div>

        )
    }
}
export default ErrorPage