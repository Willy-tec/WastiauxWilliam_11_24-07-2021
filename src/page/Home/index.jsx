import { Component } from "react";
import Hero from "../../component/Hero";
import ThumbsList from "../../component/ThumbsList";

class Home extends Component
{
    render()
    {
        return (<>
            <Hero name="Home" />
            <ThumbsList />
            </>
        )
    }
}
export default Home