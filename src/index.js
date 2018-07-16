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
          <NavBar />
          <a href="#" onClick={this.handleViewSwitch}>
            {this.state.listView ? (
              <i className="glyphicon glyphicon-th-list" />
            ) : (
              <i className="glyphicon glyphicon-th" />
            )}
          </a>
          <Merchants list={merchants} viewType={listView} />
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
