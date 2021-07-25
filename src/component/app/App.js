import './App.css';
//import { Galerie } from '../Galerie/Galerie'
import data from '../../data/logements.json'
import { Thumbs } from '../Thumbs/Thumbs';
import { Component } from 'react';

class App extends Component
{
  constructor(props)
  {
    super(props)
    this.state = {
      imgWidth: 256
    }
  }
  render()
  {
    const { imgWidth } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <div className="Thumbs_list">
            {data.map((el, index) => <Thumbs url={el.cover} key={index.toString()} name={el.title} alt={el.title} imgWidth={imgWidth}/>)}
          </div>
  
        </header>
      </div>
    );
  }
}

export default App;
