import React, { Component } from 'react';
import "./components.scss";
import { Menu } from './menu';
import { Home } from './home';

export class Components extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="components">
        <Menu isClicked={this.props.isClicked} />
        <Home />
      </div>
    )
  }
}
