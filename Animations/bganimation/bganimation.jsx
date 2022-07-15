import React from "react";
import "./bganimation.css";

export class BackgroundAnimation extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }

    componentDidMount() {
        const banner = document.getElementsByClassName('banner')[0];
        const blocks = document.getElementsByClassName('blocks');

        for (var i = 1; i < 400; i++) {
            
            banner.innerHTML += '<div class="blocks"></div>';
            blocks[i].style.animationDelay = `${i * 0.05}s`;
        }
    }

    render() {
        return (
            <section className={"bg-wapper " + this.props.className}>
                <h2>Js Animation</h2>
                <div className="banner">
                    <div className="blocks">
                    </div>
                </div>
            </section>
        )
    }
}