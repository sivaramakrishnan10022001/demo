import React from "react";
import "./liquidloader.css";


export class LiquidLoader extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        return (
            <div className={"liquidloader-wapper " + this.props.className} style={{ "--dark-clr": this.props.darkcolor, "--lig-clr": this.props.lightcolor }}>
                <svg>
                    <filter id="gooey">
                        <feGaussianBlur in="SourceGraphic"
                            stdDeviation="10" />
                        <feColorMatrix
                            values="
                          1 0 0 0 0
                          0 1 0 0 0
                          0 0 1 0 0
                          0 0 0 20 -10 ">
                        </feColorMatrix>
                    </filter>
                </svg>
                <div className="loader">
                    <span style={{ "--liquid": 1 }}></span>
                    <span style={{ "--liquid": 2 }}></span>
                    <span style={{ "--liquid": 3 }}></span>
                    <span style={{ "--liquid": 4 }}></span>
                    <span style={{ "--liquid": 5 }}></span>
                    <span style={{ "--liquid": 6 }}></span>
                    <span style={{ "--liquid": 7 }}></span>
                    <span style={{ "--liquid": 8 }}></span>
                    <span className="rotate" style={{ "--j": 0 }}></span>
                    <span className="rotate" style={{ "--j": 1 }}></span>
                    <span className="rotate" style={{ "--j": 2 }}></span>
                    <span className="rotate" style={{ "--j": 3 }}></span>
                    <span className="rotate" style={{ "--j": 4 }}></span>
                </div>
            </div>
        )
    }
}