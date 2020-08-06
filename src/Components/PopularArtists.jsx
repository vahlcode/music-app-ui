import React, { Component, Fragment } from "react";
import "./PopularArtists.css";
import Card from "./Card";
import Placeholder from "./Placeholder";

class PopularArtists extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artists: []
        }
        this.SailX = this.SailX.bind(this);
        this.fetchArtists = this.fetchArtists.bind(this);
        this.flip = this.flip.bind(this);
    }

    componentDidMount() {
        this.fetchArtists();
    }

    componentDidUpdate() {
        this.SailX();
    }

    flip() {
        const audio = new Audio("./flip.mp3");
        audio.currentTime = 0;
        audio.play()
        setTimeout(audio.play(), 1000)
    }

    fetchArtists() {
        fetch("./Artists.json")
        .then(response => {
            return response.json();
        })
        .then(artists => {
            this.setState({...this.state, artists: artists})
        })
        .catch(error => {
            console.log(error);
        })
    }

    SailX = () => {
        let albums = document.querySelectorAll(".popular-artists .artist-cards");
        let scrollLeftBtn = document.querySelectorAll(".popular-artists>.entry>.entry-icons>.scroll-left");
        let scrollRightBtn = document.querySelectorAll(".popular-artists>.entry>.entry-icons>.scroll-right");
        for (let i = 0; i < albums.length; i++) {
            scrollRightBtn[i].addEventListener("click", () => {
            if (albums[i].offsetWidth + albums[i].scrollLeft !== albums[i].scrollWidth) {
                albums[i].scrollLeft += albums[i].clientWidth - 80;
                this.flip();
            } else{
                return false;
            }
        })

        scrollLeftBtn[i].addEventListener("click", () => {
            if (albums[i].scrollLeft !== 0) {
                albums[i].scrollLeft -= albums[i].clientWidth - 80;
                this.flip();
            } else{
                return false;
            }
        })
            
        }
    }

    render() {
        return(
            <section className="popular-artists">
                    {
                        this.state.artists.length?
                        <Fragment>
                            <div className="entry">
                            <h3>Popular Artists</h3>
                            <div className="entry-icons">
                                <button className="scroll-left">
                                    <svg width="7px" height="12px" viewBox="0 0 7 12" version="1.1">
                                        <path d="M10.9339 0.798368L10.3949 0.263702C10.208 0.0879298 9.98988 0 9.7408 0C9.48668 0 9.27104 0.0879298 9.09369 0.263702L5.6 3.72814L2.10631 0.263789C1.92896 0.0880173 1.71332 8.74923e-05 1.45929 8.74923e-05C1.21012 8.74923e-05 0.992009 0.0880173 0.80513 0.263789L0.273171 0.798455C0.0910569 0.978952 0 1.19523 0 1.44712C0 1.70374 0.0911451 1.91757 0.273171 2.08862L4.95298 6.72912C5.12557 6.90971 5.34112 7 5.6 7C5.85402 7 6.07205 6.90971 6.25407 6.72912L10.9339 2.08862C11.1112 1.91276 11.2 1.69893 11.2 1.44712C11.2 1.19996 11.1112 0.983764 10.9339 0.798368L10.9339 0.798368Z" 
                                            transform="matrix(4.371139E-08 -1 -1 -4.371139E-08 7 11.19995)" 
                                            id="Left-Arrow" 
                                            fill="#FFFFFF" 
                                            stroke="none" 
                                        />
                                    </svg>
                                </button>
                                <button className="scroll-right">
                                    <svg width="7px" height="12px" viewBox="0 0 7 12" version="1.1">
                                        <path d="M10.9339 0.798368L10.3949 0.263702C10.208 0.0879298 9.98988 0 9.7408 0C9.48668 0 9.27104 0.0879298 9.09369 0.263702L5.6 3.72814L2.10631 0.263789C1.92896 0.0880173 1.71332 8.74923e-05 1.45929 8.74923e-05C1.21012 8.74923e-05 0.992009 0.0880173 0.80513 0.263789L0.273171 0.798455C0.0910569 0.978952 0 1.19523 0 1.44712C0 1.70374 0.0911451 1.91757 0.273171 2.08862L4.95298 6.72912C5.12557 6.90971 5.34112 7 5.6 7C5.85402 7 6.07205 6.90971 6.25407 6.72912L10.9339 2.08862C11.1112 1.91276 11.2 1.69893 11.2 1.44712C11.2 1.19996 11.1112 0.983764 10.9339 0.798368L10.9339 0.798368Z" 
                                            transform="matrix(-4.371139E-08 -1 1 -4.371139E-08 0 11.19995)" 
                                            id="Right-Arrow" 
                                            fill="#FFFFFF" 
                                            stroke="none" 
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="artist-cards">
                            {
                                this.state.artists.map((artist, index) => (
                                <Card 
                                    image={artist.art} 
                                    title={artist.title} 
                                    subTitle={artist.artist} 
                                    key={index} 
                                    imageHeight="90px"
                                />
                                ))
                            }
                        </div>
                        </Fragment>:
                        <Fragment>
                            <Placeholder 
                                type="title"
                            />
                            <div className="album-cards">
                                {
                                    [...Array(5)].map((array, index) => (
                                        <Placeholder 
                                            imageHeight="90px"
                                            key={index}
                                        />
                                    ))
                                }
                            </div>
                        </Fragment>
                        }
                        
            </section>
        )
    }
}

export default PopularArtists;