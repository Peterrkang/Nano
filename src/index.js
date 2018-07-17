import React, { Component } from "react";
import ReactDOM from "react-dom";
import NavBar from "./navBar.js";
import testAPI from "./testAPI.js";
import Vendors from "./vendors.js";
import "./styles.css";

class App extends Component {
  state = { vendors: [], listView: false };

  componentWillMount() {
    this.setState({ vendors: testAPI });
  }

  handleViewSwitch = () => {
    this.setState(currentState => {
      return {
        listView: !currentState.listView
      };
    });
  };

  renderFooter = () => (
    <ul>
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
    </ul>
  );

  render() {
    const { vendors, listView } = this.state;
    return (
      <div className="App">
        <div className="wrapper">
          <NavBar handleViewSwitch={this.handleViewSwitch} />
          <Vendors list={vendors} listView={listView} />
          {this.renderFooter()}
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
