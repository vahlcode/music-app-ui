import React, { Component } from "react";
import "./DoubleColumn.css";
import RecentReleased from "./RecentReleased";
import RightColumn from "./RightColumn";

class DoubleColumn extends Component {
    render() {
        return(
            <section className="double-column">
                <div className="row">
                    <RecentReleased />
                    <RightColumn />
                </div>
            </section>
        )
    }
}

export default DoubleColumn;