import React, {Component} from "react";
import "./Main.css";
import Header from "./Header";
import Albums from "./Albums";
import DoubleColumn from "./DoubleColumn";
import Player from "./Player";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            full: props.show
        }
    }

    componentWillReceiveProps() {
        this.setState({...this.state, full: !this.state.full})
    }

    render() {
        return(
            <main className="main-section" style={{width: this.state.full? "calc(100% - 240px)" : "100%", left: this.state.full? "240px" : "0"}}>
                <Header />
                <Albums />
                <DoubleColumn />
                <Player full={this.state.full} playing={true} track={{url: "https://reelcrafter-east.s3.amazonaws.com/aux/test.m4a", name: "Oblivion"}}/>
            </main>
        )
    }
}

export default Main;