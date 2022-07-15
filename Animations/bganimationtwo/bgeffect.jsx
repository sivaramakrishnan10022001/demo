import React from "react";
import "./bgeffect.css";


class BackgroundEffect extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    componentDidMount() {
        const banner = document.getElementsByClassName('.banner')[0];
        const blocks = document.getElementsByClassName('.blocks');

        for (var i = 1; i < 400; i++) {
            banner.innerHTML += "<div class='block'></div>";
            const duration = Math.random() * 5;
            blocks[i].style.animationDuration = 2 + duration + 's';
            blocks[i].style.animationDelay = duration + 's';
        }
    }
    render() {
        return (
            <section className="bgeffect">
                <h2>Js Animation</h2>
                <div className="banner" id="banner">
                    <div className="blocks" id="blocks">

                    </div>
                </div>
            </section>
        )
    }
}

export default BackgroundEffect