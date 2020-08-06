import React, { Component } from "react";
import "./RecentReleased.css";

class RecentReleased extends Component {
    constructor(props) {
        super(props);
        this.state = {
            songs: []
        }
    }

    componentDidMount() {
        fetch("./RecentReleases.json")
        .then(response => {
            return response.json();
        })
        .then(songs => {
            this.setState({...this.state, songs: songs})
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {
        return(
            <section className="recent-released">
                <div className="entry">
                    <h3>Recently Released</h3>
                    <div className="entry-icons">
                        <button>
                        <svg width="26px" height="6px" viewBox="0 0 26 6" version="1.1">
                            <g id="Options" opacity="0.3">                                                                                                                                                                                                                      
                                <path d="M3 6C4.65685 6 6 4.65685 6 3C6 1.34315 4.65685 0 3 0C1.34315 0 0 1.34315 0 3C0 4.65685 1.34315 6 3 6Z" 
                                    transform="translate(20 0)" 
                                    id="Dot" 
                                    fill="#1F2022" 
                                    stroke="none" 
                                />
                                <path d="M3 6C4.65685 6 6 4.65685 6 3C6 1.34315 4.65685 0 3 0C1.34315 0 0 1.34315 0 3C0 4.65685 1.34315 6 3 6Z" 
                                    transform="translate(10 0)" 
                                    id="Dot" 
                                    fill="#1F2022" 
                                    stroke="none" 
                                />
                                <path d="M3 6C4.65685 6 6 4.65685 6 3C6 1.34315 4.65685 0 3 0C1.34315 0 0 1.34315 0 3C0 4.65685 1.34315 6 3 6Z" 
                                    id="Dot" 
                                    fill="#1F2022" 
                                    stroke="none" 
                                />
                            </g>                                                                                                                            
                        </svg>
                        </button>
                    </div>
                </div>
                <div className="releases">
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    Song
                                </th>
                                <th>
                                    Artist
                                </th>
                                <th>
                                    Time
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.songs.map((song, index) => (
                                    <tr key={index}>
                                        <td className="song-name-art">
                                            <div className="song-art">
                                                <img src={song.art} alt=""/>
                                                <div className="play-pause" key={index}>
                                                    <button>
                                                        <svg width="22px" height="22px" viewBox="0 0 22 22" version="1.1"xmlns="http://www.w3.org/2000/svg">
                                                            <g id="Pause">
                                                                <path d="M11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22Z" 
                                                                    id="Oval" 
                                                                    fill="#336CFB" 
                                                                    stroke="none" 
                                                                />
                                                                <path d="M0.925107 0L2.07489 0C2.58501 0 3 0.389121 3 0.867434L3 7.13257C3 7.61088 2.58501 8 2.07489 8L0.925107 8C0.414993 8 0 7.61088 0 7.13257L0 0.867434C0 0.389121 0.414993 0 0.925107 0ZM4.92511 0L6.07489 0C6.58501 0 7 0.389121 7 0.867434L7 7.13257C7 7.61088 6.58501 8 6.07489 8L4.92511 8C4.41499 8 4 7.61088 4 7.13257L4 0.867434C4 0.389121 4.41499 0 4.92511 0Z" 
                                                                    transform="translate(7.5 7)" 
                                                                    id="Pause" 
                                                                    fill="#FFFFFF" 
                                                                    fillRule="evenodd" 
                                                                    stroke="none" 
                                                                />
                                                            </g>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="song-name">
                                                {song.title}
                                            </div>
                                        </td>
                                        <td className="song-artist">
                                            {song.artist}
                                        </td>
                                        <td className="song-time">
                                            {song.time}
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </section>
        )
    }
}

export default RecentReleased;