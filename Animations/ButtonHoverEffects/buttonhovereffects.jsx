import React from "react";
import "./buttonhovereffects.css";

export class ButtonHoverEffects extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }
    render() {
        return (
            <div className={"button-wapper " + this.props.className}
                style={{
                    "--color": this.props.color,
                    "--hcolor": this.props.hcolor,
                    "--bgcolor": this.props.bgcolor,
                    "--bodybg": this.props.bodybg,
                    "--hueRotate":`hue-rotate(${this.props.hueRotate}deg)`
                }}>
                <div className="button-container">
                    <a href="#"><span>Read More</span></a>
                    <a href="#"><span>Read More</span></a>
                </div>
            </div>
        )
    }
}

