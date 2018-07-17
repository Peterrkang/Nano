import React, { Component } from "react";

class NavBar extends Component {
  state = { currentView: false };

  renderIcon = () => {
    this.props.handleViewSwitch();
    this.setState(({ currentView }) => {
      return { currentView: !currentView };
    });
  };

  render() {
    return (
      <nav className="flex-nav">
        <ul>
          <li>
            <a href="#">Nano Vendors</a>
          </li>
          <li>
            <input />
          </li>
          <li className="social">
            <a href="#" onClick={this.renderIcon}>
              {this.state.currentView ? (
                <i className="fa fa-th-list" />
              ) : (
                <i className="fa fa-th" />
              )}
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
