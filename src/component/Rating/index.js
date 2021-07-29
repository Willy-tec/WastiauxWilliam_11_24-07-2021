import { Component } from 'react'
import './style.css'
import star from "./star.svg";
import star_empty from "./star_empty.svg";

class Rating extends Component
{
    render()
    {
        const range = [1, 2, 3, 4, 5];
        return (
        
            <div className="rating">
                {
                    range.map((el, index )=> el<= this.props.rating ? <img key={`star_${index}`} src={star} alt="" /> : <img key={`star_${index}`} src={star_empty} alt="" /> )
                }
            </div>
    )}
}

export default Rating;