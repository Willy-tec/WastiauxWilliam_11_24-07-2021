import React from 'react';

class Galerie extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            widthImg : 256
        }
    }
    updateImgWidth = (val) =>
    {
        //this.setState({ widthImg:  val })
        console.log(val)
    }
    render()
    {
        return (
            <div>
                <input type="number" value={this.state.widthImg} onChange={(e) =>
                {
                   this.updateImgWidth(100) ;
                }
                } />
                <img src={this.props.url} alt="gallerie" width={this.state.widthImg}/>
            </div>);
    }
}

export   {Galerie};