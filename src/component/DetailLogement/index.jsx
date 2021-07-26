import { Component } from 'react'
import Host from '../Host';
import Rating from '../Rating'
import Tag from '../Tag';
import './style.css'

class DetailLogement extends Component
{
    render()
    {
        return (
        
            <div className="detaillogement">
                <div className="detaillogement_container_gauche">
                    <h2>{this.props.title}</h2>
                    <p>{this.props.location}</p>
                    <div className="tag_list">
                        {this.props.tagList.map((el, index) => <Tag key={`tag_${index}`} texte={el} />)}    
                    </div>
                </div>
                <div className="detaillogement_container_droit">
                    <Host host={this.props.host} />
                    <Rating rating={this.props.rating}/>
                </div>
                
            </div>
    )}
}

export default DetailLogement;