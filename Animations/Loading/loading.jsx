import React from "react";
import "./loading.css";

export class Loading extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }
    render() {

        return (
            <div className={"loading-wapper " + this.props.className}
                style={{
                    "--hueStart": `hue-rotate(${this.props.hueStart}deg)`,
                    "--hueEnd": `hue-rotate(${this.props.hueEnd}deg)`
                }}>
                <div className="loader">
                    <div className="dot" style={{ "--i": 0 }}></div>
                    <div className="dot" style={{ "--i": 1 }}></div>
                    <div className="dot" style={{ "--i": 2 }}></div>
                    <div className="dot" style={{ "--i": 3 }}></div>
                    <div className="dot" style={{ "--i": 4 }}></div>
                    <div className="dot" style={{ "--i": 5 }}></div>
                    <div className="dot" style={{ "--i": 6 }}></div>
                    <div className="dot" style={{ "--i": 7 }}></div>
                    <div className="dot" style={{ "--i": 8 }}></div>
                    <div className="dot" style={{ "--i": 9 }}></div>
                </div>
                <h2>Loading...</h2>
                <div className="loader">
                    <div className="dot" style={{ "--i": 0 }}></div>
                    <div className="dot" style={{ "--i": 1 }}></div>
                    <div className="dot" style={{ "--i": 2 }}></div>
                    <div className="dot" style={{ "--i": 3 }}></div>
                    <div className="dot" style={{ "--i": 4 }}></div>
                    <div className="dot" style={{ "--i": 5 }}></div>
                    <div className="dot" style={{ "--i": 6 }}></div>
                    <div className="dot" style={{ "--i": 7 }}></div>
                    <div className="dot" style={{ "--i": 8 }}></div>
                    <div className="dot" style={{ "--i": 9 }}></div>
                </div>
            </div>
        )
    }
}
