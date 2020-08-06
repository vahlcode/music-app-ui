import React, {Component} from "react";
import "./Card.css";
import { Palette } from 'color-thief-react';
import Truncate from "../Assets/JS/truncator";

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageHeight: props.imageHeight,
            image: props.image,
            title: props.title,
            subTitle: props.subTitle
        }
    }

    render() {
        return(
            <div className="card">
                <div className="card-image" style={{height: this.state.imageHeight}}>
                    <Palette src={this.state.image} colorCount={5}>
                        {({ data, loading, error }) => (
                            <img src={this.state.image} alt="" style={{ boxShadow: `0px 10px 50px ${typeof data[3] === 'string' ? data[3].replace(/rgb/i, "rgba").replace(/\)/i,',0.3)') : data[4]}`}}/>
                        )}
                    </Palette>
                </div>
                <h3 className="card-title">
                    {Truncate(this.state.title, 0, 20)}
                </h3>
                <h5 className="card-sub-artist">
                    {Truncate(this.state.subTitle, 0, 25)}
                </h5>
            </div>
        )
    }
}

export default Card;