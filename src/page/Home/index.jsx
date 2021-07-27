import { Component } from "react";
import Hero from "../../component/Hero";
import ThumbsList from "../../component/ThumbsList";
import './style.css'
class Home extends Component
{
    render()
    {
        return (<div className="home">
            <Hero name="Home" />
            <ThumbsList />
            </div>
        )
    }
}
export default Home