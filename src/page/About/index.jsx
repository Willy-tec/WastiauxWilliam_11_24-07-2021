import { Component } from 'react';
import Dropdown from '../../component/Dropdown';
import Hero from '../../component/Hero'
import './style.css'

class About extends Component
{
    render()
    {
        return (
            <>
                <Hero></Hero>
                <div className="about">
                    <Dropdown key="Dropdown_1" titre="Fiabilité" type="large">
                        <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
                    </Dropdown>
                    <Dropdown key="Dropdown_2" titre="Respect" type="large">
                        <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                    </Dropdown>
                    <Dropdown key="Dropdown_3" titre="Service" type="large">
                        <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
                    </Dropdown>
                    <Dropdown key="Dropdown_4" titre="Sécurité" type="large">
                        <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                    </Dropdown>
                
                </div>
                
            </>
        )
    }
}

export default About;