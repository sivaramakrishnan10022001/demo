import React, { Component } from "react";

class ImageTextItemTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        style={{ background: "purple", height: "100%", position: "relative" }}
      >
        <img src={this.props.datum.source} />
        <div
          style={{
            position: "absolute",
            top: "50px",
            left: "80px",
            color: "white",
            fontWeight: "bolder",
            width: "100%",
            fontSize: "50px",
            fontFamily: "Open Sans, sans-serif",
          }}
        >
          {this.props.datum.title}
        </div>
        <div
          style={{
            position: "absolute",
            top: "130px",
            left: "80px",
            color: "#fff",
            width: "100%",
            fontSize: "20px",
            fontFamily: "Open Sans, sans-serif",
            textShadow: "1px 1px #000",
          }}
        >
          {this.props.datum.text}
          
        </div>
      </div>
    );
  }
}

export default ImageTextItemTemplate;
