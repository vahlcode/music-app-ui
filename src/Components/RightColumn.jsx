import React, { Component } from "react";
import PopularArtists from "./PopularArtists";
import "./PopularArtists.css";

class RightColumn extends Component{
    render() {
        return(
            <section className="right-column">
                <PopularArtists />
                <PopularArtists />
            </section>
        )
    }
}

export default RightColumn;