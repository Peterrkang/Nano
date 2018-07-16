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

  render() {
    const { vendors, listView } = this.state;
    return (
      <div className="App">
        <div className="wrapper">
          <NavBar handleViewSwitch={this.handleViewSwitch} />
          <Vendors list={vendors} listView={listView} />
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
