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
            <a href="#">Support Nano</a>
          </li>
          <li className="social">
            <a href="http://github.com/peterrkang/Nano">
              <i className="fa fa-github" />
            </a>
          </li>
          <li className="social">
            <a href="http://linkedin.com/in/peterrkang">
              <i className="fa fa-linkedin" />
            </a>
          </li>
          <li className="social">
            <a href="#" onClick={this.renderIcon}>
              {this.state.currentView ? (
                <i className="glyphicon glyphicon-th-list" />
              ) : (
                <i className="glyphicon glyphicon-th" />
              )}
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
