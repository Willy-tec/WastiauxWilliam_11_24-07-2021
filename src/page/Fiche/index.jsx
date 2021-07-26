import { Component } from "react";
import { withRouter } from "react-router";
import data from '../../data/logements.json'
import Galerie from "../../component/Galerie/Galerie";
import DetailLogement from "../../component/DetailLogement";
import Dropdown from "../../component/Dropdown";
import './style.css'

class Fiche extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {lgt : data[this.props.match.params.indexLogement]}
    }

    render()
    {

        return <div className="fiche">
            <Galerie listUrl={this.state.lgt.pictures }/>
            <DetailLogement tagList={this.state.lgt.tags} rating={this.state.lgt.rating} host={this.state.lgt.host} title = {this.state.lgt.title} location = {this.state.lgt.location}>
        
            </DetailLogement >
            <div className="fiche_dropdown_section">
                <Dropdown key = "fiche_dropdown_1" titre="Description">
                    <p>{ this.state.lgt.description }</p>
                </Dropdown>
                <Dropdown key = "fiche_dropdown_2" titre="Équipements">
                    {this.state.lgt.equipments.map((el, index) => <p key={`equip_${index}`}>{el}</p>) }
                </Dropdown>
            </div>
            

        </div>
    }
}

export default withRouter(Fiche)