import React from "react";
import "./pepsi.css";
import image from "./can-pepsi.png";

class Pepsi extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }
    render() {
        return (
            <div className={"pepsi-wapper " + this.props.className}>
                <div className="pepsi-card">
                    <div className="pepsi-cricle"></div>
                    <div className="content">
                        <h2>Pepsi Cola</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eos inventore,
                            repudiandae nesciunt architecto magnam reiciendis esse, maxime a qui et,
                            repellat sit mollitia. Blanditiis eveniet assumenda qui eaque amet.</p>
                        <a href="#">Buy Now</a>
                    </div>
                    <img src={image} alt="pepsi" />
                </div>
            </div>
        )
    }
}

export default Pepsi;