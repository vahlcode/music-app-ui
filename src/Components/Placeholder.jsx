import React,{ Component, Fragment } from "react";
import "./Placeholder.css";

class Placeholder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageHeight: props.imageHeight,
            type: props.type
        }
    }

    render() {
        return(
            <div className="placeholder">
                {
                    this.state.type?
                    <Fragment>
                        {
                         (this.state.type.toLowerCase() === "title") ?
                            <Fragment>
                                <div className="placeholder-big-title"></div>
                            </Fragment> : 
                            <Fragment>
                                <div className="placeholder-image" style={{height: this.state.imageHeight}}>
                                </div>
                                <div className="placeholder-title"></div>
                                <div className="placeholder-sub-title"></div>
                            </Fragment>
                        }
                    </Fragment>:
                    <Fragment>
                        <div className="placeholder-image" style={{height: this.state.imageHeight}}>
                        </div>
                        <div className="placeholder-title"></div>
                        <div className="placeholder-sub-title"></div>
                    </Fragment>
                }
            </div>
        )
    }
}

export default Placeholder;