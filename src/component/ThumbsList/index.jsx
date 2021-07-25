import data from '../../data/logements.json'
import { Thumbs } from '../Thumbs/Thumbs';
import { Component } from 'react';
import "./style.css"

class ThumbsList extends Component
{
  constructor(props)
  {
    super(props)
    this.state = {
      imgWidth: 340
    }
  }
  render()
  {
    const { imgWidth } = this.state;
    return (
          <div className="Thumbs_list">
            {data.map((el, index) => <Thumbs url={el.cover} key={index.toString()} name={el.title} alt={el.title} imgWidth={imgWidth}/>)}
          </div>
    );
  }
}

export default ThumbsList;