import React from "react";
import "./responsivenavigation.css";

class ResponsiveNavigation extends React.Component {
    constructor() {
        super();
        this.state = {
            active: "",
        }
    }

    setColor = (title) => {
        this.setState({
            active: title
        })
    }

    render() {
        return (
            <div className={"body " + this.props.className}>
                <nav className="navbar">
                    <ul className="navbar-nav">
                        {this.props.navdata.map((item, inx) => {
                            return (
                                <li className={`${inx === 0 ? "logo" : "nav-item"} `} key={inx} onClick={() => this.setColor(item.title)}>
                                    <a href="#" className={`nav-link ${item.title === this.state.active ? "active" : ""}`}>
                                        {inx === 0 ?
                                            <>
                                                <span className={`link-text ${inx === 0 ? "logo-text" : ""}`}>{item.title}</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox={item.viewbox}>
                                                    <path d={item.svgpath} />
                                                </svg>
                                            </>
                                            :
                                            <>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox={item.viewbox}>
                                                    <path d={item.svgpath} />
                                                </svg>
                                                <span className={`link-text ${inx === 0 ? "logo-text" : ""}`}>{item.title}</span>
                                            </>
                                        }
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
                {this.props.maindata}
            </div>
        )
    }
}

export default ResponsiveNavigation;