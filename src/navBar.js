import React, { Component } from "react";

class NavBar extends Component {
  state = { currentView: false, inputValue: "" };

  renderIcon = () => {
    this.props.handleViewSwitch();
    this.setState(({ currentView }) => {
      return { currentView: !currentView };
    });
  };

  handleInputChange(e) {
    e.preventDefault();
    const inputValue = e.target.value.toLowerCase();
    this.props.handleInputSearch(inputValue);
    this.setState({ inputValue });
  }

  render() {
    return (
      <nav className="flex-nav">
        <ul>
          <li>
            <a href="#">Nano Vendors</a>
          </li>
          <li>
            <input
              onChange={e => this.handleInputChange(e)}
              value={this.state.inputValue}
              placeholder="Search Vendors"
            />
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
