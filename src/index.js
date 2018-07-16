import React, { Component } from "react";
import ReactDOM from "react-dom";
import Merchants from "./merchants.js";
import NavBar from "./navBar.js";
import testAPI from "./testAPI.js";
import "./styles.css";

class App extends Component {
  state = { merchants: [], listView: false };

  componentWillMount() {
    this.setState({ merchants: testAPI.merchants });
  }

  handleViewSwitch = () => {
    this.setState(currentState => {
      return {
        listView: !currentState.listView
      };
    });
  };

  render() {
    const { merchants, listView } = this.state;
    return (
      <div className="App">
        <div className="wrapper">
          <NavBar handleViewSwitch={this.handleViewSwitch} />
          <Merchants list={merchants} listView={listView} />
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
